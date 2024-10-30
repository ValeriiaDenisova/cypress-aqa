describe('API test ', () => {
    beforeEach(() => {

    })

    it('Test1', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
            cy.log(JSON.stringify(response.body))
        })

    })

    it('Test2', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
            .its('body')
            .should('have.length', 10)

        cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
            .its('status')
            .should('eq', 200)


    })

    it('Test3 POST', () => {
        const newPost = {
            title: 'New',
            body: 'bar',
            userId: 1
        }
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', newPost)
            .as('postResponse')
            .its('body.id')
            .should('eq', 101)
        cy.get('@postResponse').its('body.title').should('eq', newPost.title)
        cy.get('@postResponse').its('body.body').should('eq', newPost.body)

    })

    it('Test4 Get cookies', () => {
        const userCreds = {
            email: 'mishap1234@gmail.com',
            password: 'qwertyQ1!',
            remember: true
        }
        cy.request('POST', 'https://qauto.forstudy.space/api/auth/signin', userCreds).then((response) => {
            const headers = response.headers
            const cookie = headers['set-cookie'][1]
            const cookieArray = cookie.split('\n]')
            let sid = ''
            for (const cookie of cookieArray) {
                if (cookie.trim().startsWith('sid=')) {
                    sid = cookie.trim().split('=')[1].split(';')[0]
                    break
                }
            }
            cy.log(sid)
        })
    });
})