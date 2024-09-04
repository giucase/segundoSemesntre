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

const pessoaEmpregadaExemplo: PessoaEmpregada = { nome: 'Ana', idade: 35, empressa: 'TechCorp', salario: 8000 };
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
    
const gerenteExemplo = new Gerente('Carlos', 'Gerente de TI', 12000, 'Tecnologia');
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

 const contaCorrenteExemplo = new ContaCorrente('Fernanda', 5000, 2000);
 console.log(contaCorrenteExemplo.exibirSaldo());

 //exercicio5

import { Cliente } from './Cliente';
 export class Pedido {
    constructor(public cliente: Cliente, public produto: string, public valor:number) {}

    exibirPedido(): string {
        return `Cliente: ${this.cliente.nome}, Produto: ${this.produto}, Valor:
        R$${this.valor.toFixed(2)}`;
        }
 }

