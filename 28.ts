//1
function encontrarMaiorElemento<T>(array: T[]): T {
    if (array.length === 0) {
        throw new Error('O array não pode estar vazio');
    }

    let maiorElemento = array[0];

    for (const elemento of array) {
        if (elemento > maiorElemento) {
            maiorElemento = elemento;
        }
    }

    return maiorElemento;
   
}

const maiorNumero = encontrarMaiorElemento([10, 20, 30]); 
const maiorPalavra = encontrarMaiorElemento(['gato', 'cachorro', 'coelho']);

//2
function medirTempoDeExecucao(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.time(propertyKey);
        const resultado = metodoOriginal.apply(this, args);
        console.timeEnd(propertyKey);
        return resultado;
    };

    return descriptor;
}

class Calculadora {
    somarNumeros(array: number[]): number {
        return array.reduce((a, b) => a + b, 0);
    }
}

const calculadora = new Calculadora();
calculadora.somarNumeros([1, 2, 3, 4, 5]);


//3

class EmailInvalidoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EmailInvalidoError';
    }
}

function verificarEmail(email: string): void {
 
}

try {
    verificarEmail('giugiu18.com');
} catch (error) {
    console.error(error.message); 
}

//4

async function obterDados(): Promise<string> {
    return new Promise((resolver, rejeitar) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.5;

            if (sucesso) {
                resolver('Dados recebidos');
            } else {
                rejeitar('Erro ao obter dados');
            }
        }, 2000);
    });
}

async function iniciarBusca() {
    try {
        const resultado = await obterDados();
        console.log(resultado);
    } catch (erro) {
        console.error('Erro na busca:', erro);
    }
}
