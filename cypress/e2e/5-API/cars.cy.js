describe('Cars API test ', () => {
    let sid = ''
    let carID = ''

    beforeEach(() => {
        const userCreds = {
            email: 'dmytrijevavi@gmail.com',
            password: 'John_D0e',
            remember: true
        }
        cy.request('POST', 'https://qauto.forstudy.space/api/auth/signin', userCreds).then((response) => {
            const headers = response.headers
            const cookie = headers['set-cookie'][1]
            const cookieArray = cookie.split('\n]')

            for (const cookie of cookieArray) {
                if (cookie.trim().startsWith('sid=')) {
                    sid = cookie.trim().split('=')[1].split(';')[0]
                    break
                }
            }
            cy.log(sid)
        })
    })

    it('Test1. GET /cars', () => {
        cy.request({
                method: 'GET',
                url: 'https://qauto.forstudy.space/api/cars',
                headers: {
                    Cookie: `sid=${sid}`
                }
            }
        ).then((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(200)
        })
    });

    it('Test2. GET /cars ', () => {
        cy.request('GET', 'https://qauto.forstudy.space/api/cars', {
            headers: {
                Cookie: `sid=${sid}`
            }
        })
            .its('status')
            .should('eq', 200)
    });

    it('Test3. GET /cars/models', () => {
        cy.request('GET', 'https://qauto.forstudy.space/api/cars/models', {
            headers: {
                Cookie: `sid=${sid}`
            }
        })
            .as('postResponse')
            .its('status')
            .should('eq', 200)

        cy.get('@postResponse').its('body').should((response) => {
            expect(response.status).to.equal('ok')
            expect(response.data).to.be.an('array').that.is.not.empty
        })
    });

    it('Test4. POST /cars', () => {
        cy.request({
            method: 'POST',
            url: 'https://qauto.forstudy.space/api/cars',
            headers: {
                Cookie: `sid=${sid}`
            },
            body: {
                "carBrandId": 1,
                "carModelId": 1,
                "mileage": 122
            }
        })
            .as('postResponse')
            .its('status')
            .should('eq', 201)

        cy.get('@postResponse').its('body').should((response) => {
            expect(response.status).to.equal('ok')
            expect(response.data).to.include({
                carBrandId: 1,
                carModelId: 1,
                initialMileage: 122,
                mileage: 122,
                brand: 'Audi',
                model: 'TT',
                logo: 'audi.png'
            });
        })

        cy.get('@postResponse')
            .its('body.data.id')
            .then((id) => {
                // Используем id по мере необходимости
                cy.log('ID:', id);
                carID = id
            })
    });

    it('Test5. DELETE /cars/{id}', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://qauto.forstudy.space/api/cars/' + carID,
            headers: {
                Cookie: `sid=${sid}`
            }
        })
            .as('deleteResponse')
            .its('status')
            .should('eq', 200)

        cy.get('@deleteResponse').its('body').should((response) => {
            expect(response.status).to.equal('ok')
        })
    });
})