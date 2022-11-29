const randomAnimal = require('../../index')

describe("Probar la funcionalidad de randomAnimal", ()=> {

    test("Probramos que sea string", ()=> {
        expect(typeof randomAnimal()).toBe("string")
    })

    
})