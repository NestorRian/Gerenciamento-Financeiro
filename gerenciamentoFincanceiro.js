class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

// Exemplo de uso

const salario = new Lancamento('Salario', 5000)
const contaDeLuz = new Lancamento('Luz', -220)
const contaDeAgua = new Lancamento('Água', -150)
const contaDeInternet = new Lancamento('Internet', -150)
const faturaDoCartao = new Lancamento('Fatura', -2000)


const contas = new CicloFinanceiro(7, 2024)
contas.addLancamentos(salario, contaDeLuz, contaDeAgua, contaDeInternet, faturaDoCartao)

console.log('Valor restante:', contas.sumario())

// nova mudanca