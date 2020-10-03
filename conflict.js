console.log('Olá, mundo')
console.log('Hello, World')

console.log('Tudo bem com vocês?')

for (let i = 0; i < 5; i++) {
    console.log(`O valor de I é igual a ${i}`)
}

if (1 > 2) {
    console.log('É maior')
} else {
    console.log('É menor')
}

console.log('Adicionando um conflito em develop')
console.log('Adicionando um conflito')

let cidades = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Porto Alegre', 'Salvador']

cidades.forEach(cidade => {
    console.log(`A cidade atual é ${cidade}`)
})

for (let i = 0; i < 10; i++) {
    if (i < 5) {
        console.log(`${i} é menor do que 5`)
    } else {
        console.log(`${i} é maior do que 5`)
    }
}

let fruta = {
    vitamina: "A",
    fruta: "Laranja"
}

console.log(fruta['vitamina'])
