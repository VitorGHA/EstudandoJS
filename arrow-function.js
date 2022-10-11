function apresentar(nome){
    return `Meu nome é ${nome}`
}

const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma =  (num1, nume2)  => num1 + nume2;

console.log(apresentarArrow(), soma(1, 1))

//Arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2)  => {
    if(num1 > 10 || num2 > 10){
        return "Somente numeros de 1 a 9"
    }
}

console.log(somaNumerosPequenos(1,20))

// Hoisting: Arrown Function se comporta da mesma forma.