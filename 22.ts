// exercíco 1
interface Produtos {
    nome: string;
    preco: number;
    categoria: string
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

function Compra(produto: Produtos, pagamento: FormaPagamento): string {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço:
    R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.`;
    
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


import { Pedido } from './Pedido';
import { Cliente } from './Cliente';

const clienteExemplo = new Cliente('Lucas', 'lucas@gmail.com');
const pedidoExemplo = new Pedido(clienteExemplo, 'Notebook', 4500);

console.log(pedidoExemplo.exibirPedido());

//exercicio6
export namespace Financeiro {
     export function calcularImposto(valor: number, taxa: number): number {
        return valor * taxa;
}
    
 export function calcularDesconto(valor: number, taxa: number): number {
    return valor - (valor * taxa);
     }
    
export class Orcamento {
     constructor(public valorTotal: number, public itens: string[]) {}
    
     exibirOrcamento(): string {
    return `Itens: ${this.itens.join(', ')}, Valor Total: R$${this.valorTo
    tal.toFixed(2)}`;
 }
 }
}

import { Financeiro } from './Financeiro';

    const orcamentoExemplo = new Financeiro.Orcamento(5000, ['Notebook', 'Mouse']);
    console.log(orcamentoExemplo.exibirOrcamento());
 
    const valorComImposto = Financeiro.calcularImposto(5000, 0.15);
    console.log(`Valor com Imposto: R$${valorComImposto.toFixed(2)}`);

    const valorComDesconto = Financeiro.calcularDesconto(5000, 0.10);
    console.log(`Valor com Desconto: R$${valorComDesconto.toFixed(2)}`)