describe('Intercept test ', () => {
    beforeEach(() => {

    })

    it('Success login test', () => {
        //cy.visit('https://guest:welcome2qauto@qauto.forstudy.space')
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
        const fakeCars = {
            "status": "ok",
            "data": [
                {
                    "id": 199461,
                    "carBrandId": 2,
                    "carModelId": 6,
                    "initialMileage": 999,
                    "updatedMileageAt": "2024-10-24T18:03:55.000Z",
                    "carCreatedAt": "2024-10-24T18:03:55.000Z",
                    "mileage": 999,
                    "brand": "BMW",
                    "model": "3",
                    "logo": "bmw.png"
                },
                {
                    "id": 199460,
                    "carBrandId": 1,
                    "carModelId": 1,
                    "initialMileage": 1000,
                    "updatedMileageAt": "2024-10-24T17:54:01.000Z",
                    "carCreatedAt": "2024-10-24T17:54:01.000Z",
                    "mileage": 1000,
                    "brand": "Audi",
                    "model": "TT",
                    "logo": "audi.png"
                },
                {
                    "id": 199464,
                    "carBrandId": 1,
                    "carModelId": 1,
                    "initialMileage": 3000,
                    "updatedMileageAt": "2024-10-24T17:54:01.000Z",
                    "carCreatedAt": "2024-10-24T17:54:01.000Z",
                    "mileage": 1000,
                    "brand": "Audi",
                    "model": "TT",
                    "logo": "audi.png"
                }
            ]
        }
        cy.intercept('GET', '**/cars', fakeCars)
       // cy.intercept('GET', '**/cars', {statusCode: 404, body: 'Not found'})

        cy.contains('Sign In').click()
        cy.get('#signinEmail').type('dmytrijevavi@gmail.com')
        cy.get('#signinPassword').type('John_D0e')
        cy.contains('Login').click()
    })
})