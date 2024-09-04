// exercíco 1
interface Produtos {
    nome: string;
    preco: number;
    categoria: string
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

function Compra(produto: Produtos, pagamento: FormaPagamento): string {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.`;
    
}

const produtoExemplo: Produtos = { nome: 'Esmalte', preco: 7, categoria:'Beleza' };
const formaPagamentoExemplo: FormaPagamento = 'cartão';

console.log(Compra(produtoExemplo, formaPagamentoExemplo));


//exercicio2

type Pessoa = {
    nome: string;
    idade: number
}

type Empregado = {
    empressa: string;
    salario: number
}
    
type PessoaEmpregada = Pessoa & Empregado;

function exibirInformacoesEmpregado(empregado: PessoaEmpregada): string {
    return `Nome: ${empregado.nome}, Idade: ${empregado.idade}, Empresa: ${empregado.empressa}, Salário: R$${empregado.salario.toFixed(2)}.`;
}

const pessoaEmpregadaExemplo: PessoaEmpregada = { nome: 'Julia', idade: 21, empressa: 'fi_OXOX', salario: 10000 };
 console.log(exibirInformacoesEmpregado(pessoaEmpregadaExemplo));


 //exercicio3

 class Funcionario {
    constructor(public nome: string, public cargo: string, public salario: number) {}

    descricao(): string {
    return `Funcionário: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`;
        }
    }
   
 class Gerente extends Funcionario {
    constructor(nome: string, cargo: string, salario: number, public departamento: string) {
     super(nome, cargo, salario)
     }
    
     descricaoDetalhada(): string {
        return `${super.descricao()}, Departamento: ${this.departamento}`;
     }
    }
    
const gerenteExemplo = new Gerente('Fernando', 'Gestor de TI', 15000, 'Tecnologia');
    console.log(gerenteExemplo.descricaoDetalhada());

//execicio4

class ContaBancaria {
    constructor(public titular: string, public saldo: number) {}

    exibirSaldo(): string {
        return `Titular: ${this.titular}, Saldo: R$${this.saldo.toFixed(2)}`;
     }
}

 class ContaCorrente extends ContaBancaria {
constructor(titular: string, saldo: number, public limiteCredito: number)
{
    super(titular, saldo);
    }

 exibirSaldo(): string {
     const saldoTotal = this.saldo + this.limiteCredito;
        return `${super.exibirSaldo()}, Saldo Total com Crédito: R$${saldoTotal.toFixed(2)}`;

    }
 }

 const contaCorrenteExemplo = new ContaCorrente('Felipe', 8000, 3000);
 console.log(contaCorrenteExemplo.exibirSaldo());

 //exercicio5


import { Pedido } from './Pedido';
import { Cliente } from './Cliente'; 

const clienteExemplo = new Cliente('Berenice', 'bere@gmail.com');
const pedidoExemplo = new Pedido(clienteExemplo, 'Notebook', 5500);

console.log(pedidoExemplo.exibirPedido());


 export class Pedido {
    constructor(public cliente: Cliente, public produto: string, public valor:number) {}

    exibirPedido(): string {
        return `Cliente: ${this.cliente.nome}, Produto: ${this.produto}, Valor: R$${this.valor.toFixed(2)}`;
        }
 }




