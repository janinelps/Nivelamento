/*
// 1 

const numero1  = parseInt(prompt("Digite o primeiro numero: "))
const numero2  = parseInt(prompt("Digite o segundo numero: "))

console.log(`A subtração do ${numero1} - ${numero2} = ${numero1 - numero2} `)

*/

/*
// 2 
const numero1  = parseInt(prompt("Digite o primeiro numero: "))
const numero2  = parseInt(prompt("Digite o segundo numero: "))
const numero3  = parseInt(prompt("Digite o terceiro numero: "))

console.log(`A multiplicação entre ${numero1} * ${numero2} * ${numero3} = ${numero1 * numero2 * numero3}`)

*/

/*
// 3
const numero1  = parseInt(prompt("Digite o primeiro numero: "))
const numero2  = parseInt(prompt("Digite o segundo numero: "))
const numero3  = parseInt(prompt("Digite o terceiro numero: "))
const numero4  = parseInt(prompt("Digite o quarto numero: "))

console.log(`A soma entre ${numero1} + ${numero2} + ${numero3} + ${numero4}= ${numero1 + numero2 + numero3 + numero4}`)
*/

/*
// 4 
const nota1  = parseInt(prompt("Digite o primeira nota: "))
const nota2  = parseInt(prompt("Digite o segunda nota: "))
const nota3  = parseInt(prompt("Digite o terceira nota: "))

console.log(`A média aritmetica entre ${nota1}, ${nota2} e ${nota3} = ${(nota1 + nota2 + nota3)/3}`)
*/


/*
// 5 

const peso = parseInt(prompt("Digite seu peso em kilo: "))
console.log(`Peso ${peso}kilos = ${peso * 1000} gramas`);
*/

/*
// 6

const preco = parseInt(prompt("Qual o preço do produto? R$"))
const pagamento = prompt("Digite a forma de pagamento: a vista, 2x ou 4x")

switch (pagamento) {
    case "a vista":
        console.log(`Preço desse produto com desconto de 10% R$${preco - preco * 0.10},00`)
        break

    case "2x":
        console.log(`Preço desse produto é R$${preco},00`)
        break
    case "4x":
        console.log(`Preço desse produto com acrescimo de 5% R$${preco + preco * 0.05},00`)
        break
    default:
        console.log("Digite a forma de pagamento válido")
}
*/

/*
// 7

const salario = parseInt(prompt("Digite o salario do funcionario R$"))

console.log(`Salario com aumento de 25% ${salario + salario * 0.25}`);
*/

/*
// 8 

const salario = parseInt(prompt("Digite o salario do funcionario R$"))
const porcentagem = parseInt(prompt("Digite o percentual de aumento "))
const aumento = (salario * porcentagem )/ 100

console.log(`Valor do aumento é de R$${aumento},00 
Valor do Salario atual é R$${salario + aumento},00`);

*/

/*
// 9 
const salarioBase = parseInt(prompt("Digite o salario base do funcionario R$"))
const gratificacao = salarioBase * 0.05
const imposto = (salarioBase + gratificacao) * 0.07

console.log(`Salario a receber R$${salarioBase - imposto}`);
*/

/*
// 10
const nome = prompt("Digite seu nome: ")

let dataNascimento = prompt("Digite sua data de nascimento: dd/mm/yyyy")

let arrayDataNascimento = dataNascimento.split("/")

let datas = new Date();
let mesAtual = (datas.getMonth() + 1);
let anoAtual = datas.getFullYear();
let diaAtual = datas.getDate()

let diasVividos = 0

while (arrayDataNascimento[2] < anoAtual || arrayDataNascimento[1] < mesAtual || arrayDataNascimento[0] < diaAtual) {
    diasVividos++
    arrayDataNascimento[0]++
    if (arrayDataNascimento[0] > 30) {
        arrayDataNascimento[0] = 1
        arrayDataNascimento[1]++
        if (arrayDataNascimento[1] > 12) {
            arrayDataNascimento[1] = 1
            arrayDataNascimento[2]++
        }
    }
}

console.log(`${nome} já viveu ${diasVividos} dias`);

*/

/*
// 11
const sobrenome = prompt("Digite seu Sobrenome: ")
const nome = prompt("Digite seu Nome: ")

console.log(`Sr(a). ${nome} ${sobrenome}, é uma honra contar com sua presença!`)

*/

/*
// 12
const catetoAdjacente = parseInt(prompt("Digite o valor do cateto adjacente: "))
const catetoOposto = parseInt(prompt("Digite o valor do cateto oposto: "))

const hipotenusa = ((catetoAdjacente ** 2) + (catetoOposto ** 2))
console.log(`Calculo da sua hipotenusa é: ${Math.sqrt(hipotenusa)} `)

*/

/*
// 13
const base = Number(prompt("Digite a base do triangulo: "))
const altura = Number(prompt("Digite a altura do triangulo: "))

const area = (base*altura)/2

console.log(`A área do tringulo é ${area}`)

*/

/*
// 14 
const raio = Number(prompt("Digite o valor do raio: "))
const area = (raio**2) * 3.14
console.log(`A área do circulo é ${area.toFixed(2)}`);

*/

/*
// 15
const numeroPositivo = Number(prompt("Digite numero positivo e maior que zero: "))

const numeroQuadrado = Math.pow(numeroPositivo, 2)
const numeroCubo = Math.pow(numeroPositivo, 3)
const raizQuadrada = Math.sqrt(numeroPositivo)
const raizCubica = Math.cbrt(numeroPositivo)


console.log(`${numeroPositivo} ao quadrado: ${numeroQuadrado}
${numeroPositivo} ao cubo: ${numeroCubo}
Raiz quadrada de ${numeroPositivo}:  ${raizQuadrada.toFixed(2)}
Raiz cubica de ${numeroPositivo}: ${raizCubica.toFixed(2)}
`);

*/

/*
// 16

const numero1 = Number(prompt("Digite o primeiro numero: "))
const numero2 = Number(prompt("Digite o segundo numero: "))

console.log(`O numero ${numero1} ** ${numero2} =${(numero1 ** numero2)} ` );

*/

/*
// 17
const medidas = parseInt(prompt("Digite a medida em pés : "))

const polegadas = medidas * 12
const jardas = medidas / 3 
const milhas = jardas / 1760

console.log(`Resultado das polegadas em pés ${polegadas}
Resultado das jardas em pés ${jardas.toFixed(2)}
Resultado das milhas em jardas ${milhas.toFixed(2)}
`)
*/

/*
// 18 

const dataNascimento = prompt("Digite sua data de nascimento: dd/mm/yyyy")
const arrayDataNascimento = dataNascimento.split("/")

const dataAtual = parseInt(prompt("Digite ano atual: yyyy"))

dataAtual === 2050 ? console.log(`Sua idade em 2050 será ${dataAtual - parseInt(arrayDataNascimento[2])}`) : console.log(`Sua idade é ${dataAtual - parseInt(arrayDataNascimento[2])}`)

*/

/*
// 19
const precoFabrica = Number(prompt("Digite o valor de fabrica do carro "))
const percentualLucro = Number(prompt("Digite a porcentagem do lucro "))
const percentualImposto = Number(prompt("Digite a porcentagem do imposto "))

const lucro = (precoFabrica * percentualLucro)/100
const imposto = (precoFabrica * percentualImposto)/100
console.log(`a) Lucro do Distribuidor = ${lucro}
b) Imposto = ${imposto}
c) Preço final do veículo = ${ precoFabrica + lucro + imposto}` );

*/

/*
// 20
const horasTrabalhadas = Number(prompt("Digite o numero de horas trabalhadas: "))
const salarioMinimo = Number(prompt("Digite o valor do salário mínimo: "))

const calcHoraTrabalhada = salarioMinimo * 0.10
const salarioBruto = horasTrabalhadas * calcHoraTrabalhada
const imposto = salarioBruto * 0.3
const salarioReceber = salarioBruto - imposto

console.log(`a) Hora trabalhada ${calcHoraTrabalhada} por hora
b) Salario Bruto ${salarioBruto} reais
c) Imposto do salario bruto ${imposto.toFixed(2)}%
d) Salario liquido a receber ${salarioReceber.toFixed(2)} reais`);

*/

/*
// 21 
const hora = Number(prompt("Digite uma hora "))
const minutos = Number(prompt("Digite os minutos "))

const horaEmMinutos = hora * 60
const totalMinutos = horaEmMinutos + minutos

console.log(`a) Hora convertida em minutos ${horaEmMinutos}
Total de minutos ${totalMinutos}
Total de minutos convertida em segundos ${totalMinutos * 60}`)

*/


