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
    
}

class Calculadora {
    
    somarNumeros( @medirTempoDeExecucao array: number[]): number {
        return array.reduce((a, b) => a + b, 0);
    }
}

// Exemplo de uso:
const calc = new Calculadora();
calc.somarNumeros([1, 2, 3, 4, 5]);

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
    console.error(error.message);  // Deve imprimir "Email inválido"
}

//4

async function buscarDadosDaAPI(): Promise<string> {
    // Lógica da função aqui
}

// Exemplo de uso:
async function executarBusca() {
    try {
        const dados = await buscarDadosDaAPI();
        console.log(dados);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

executarBusca();  // Simula a busca de dados com async/await
