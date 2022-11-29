const text = "Hola FullStackers"

test("Verifica que la palabra Hola esté en el string", () => {
    expect(text).toMatch(/Hola/)
})

/* Test arrays */
const frutas = ['Mango', 'Papaya', 'Kiwi']

test("Debe tener mango", () => {
    expect(frutas).toContain("Mango")
})

let a = 10;
let b = 8;

/* Test numbers */
test("A Debe ser mayor que B", () => {
    expect(a).toBeGreaterThan(b)
})

/* Test booleans */

let respuesta = true;

test("Respuesta Debe ser verdadero", () => {
    expect(respuesta).toBeTruthy()
})

/* Test Callbacks */

const reverseString = (string, callback) => {
    callback(string.split("").reverse().join(""))
}

test("El callback debe retornar una palabra al reves", () => {
    reverseString("Juan", string => {
        expect(string).toBe("nauJ")
    })
})

/* Test Promises */

const reverseStringPromise = string => {
    return new Promise((resolve, reject) => {
        if(!string){
            reject(Error("No hay ningun string"))
        }
        resolve(string.split("").reverse().join(""))
    })
}

test("La promesa debe retornar una palabra al reves", ()=> {
    return reverseStringPromise("Juan").then( string => {
        expect(string).toBe("nauJ")
    })
})