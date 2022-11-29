const animals = ['Perro', 'Gato', 'Araña', 'Lombriz']

const randomAnimal = () => {
    const animal = animals[Math.floor(Math.random() * animals.length)]
    return animal;
}

const funcionSinTest = () => {
    console.log('sdf')
}

module.exports = randomAnimal;
module.exports = funcionSinTest;