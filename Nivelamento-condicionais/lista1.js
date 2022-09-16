/*
// 1.1 e 1.2
const numero1 = 11
const numero2 = 3
const numero3 = 0

console.log(`Soma: ${numero1} + ${numero2} + ${numero3} = ${numero1 + numero2 + numero3}`)
console.log(`Divisão: ${numero1} / ${numero2} = ${(numero1 / numero2).toFixed(2)}`)
*/

/*
// 1.3
const anoNascimento = 1983
const anoAtual = 2022
const idade = anoAtual - anoNascimento

idade >= 18 ? `Pessoa tem ${idade} anos, é maior de idade.` : `Pessoa tem ${idade} anos, é menor de idade.`;
*/

/*
// 1.4

const nota1 = 10
const nota2 = 10

const media = (nota1 + nota2) / 2
media >= 5 ? `APROVADO -> Media das notas ${nota1} e ${nota2} = ${media}` : `REPROVADO -> Media das notas ${nota1} e ${nota2} = ${media}`

*/

/*
// 2.1
const numero1 = parseInt(prompt("Digite o primeiro numero: "))
const numero2 = parseInt(prompt("Digite o segundo numero: "))

numero2 != 0 ? `Divisão: ${numero1} / ${numero2} = ${numero1 / numero2}` : `Falha segundo numero não pode ser ${numero2}. Não existe divisão por zero` 
*/

/*
//2.2
const numerador = parseInt(prompt("Digite o numerador: "))
let denominad = parseInt(prompt("Digite o denominador: "))

if (denominad == 0) {
    denominad = parseInt(prompt("Digite o denominador maior que zero: "))
}

`Divisão: ${numerador} / ${denominad} = ${numerador / denominad}`

*/

/*
//2.3

const salarioAtual = parseInt(prompt("Digite o salario atual do funcionario: "))

salarioAtual <= 2500 ? `Funcionario recebeu 20% de aumento no salario = ${salarioAtual + (salarioAtual * 20) / 100}` : `Funcionario recebeu 10% de aumento no salario = ${salarioAtual + (salarioAtual * 10) / 100}`

*/

/*
// 2.4
const nota1 = parseInt(prompt("Digite o primeiro nota: "))
const nota2 = parseInt(prompt("Digite o segunda nota: "))
const nota3 = parseInt(prompt("Digite o terceira nota: "))
const nota4 = parseInt(prompt("Digite o quarta nota: "))

const media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7) console.log(`APROVADO media: ${media}`)
media <7 && media >= 4 ? console.log(`EXAME media: ${media}`) : console.log(`REPROVADO media: ${media}`)

*/
