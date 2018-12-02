class Carro {
    constructor(cor, modelo, velocidadeMaxima) {
        this.cor = cor;
        this.modelo = modelo;
        this.velocidadeAtual = 0;
        this.ligado = false;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    //liga o carro
    ligaeDesliga() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(this.ligado + ' O carro foi ligado');
        
        } else {
            this.ligado = false;
            console.log(this.ligado + ' O carro foi desligado');
        } 
    }
    //define a cor do fusca
    corVeiculo() {
        console.log('A cor do fuscão é ' + this.cor + ' e o modelo do baita é ' + this.modelo);
    }
    //acelera uma certa quantidade
    acelera(quantidade) {
        var velocidadeNova = this.velocidadeAtual + quantidade;

        if (velocidadeNova < this.velocidadeMaxima) {
            this.velocidadeAtual = velocidadeNova;
            console.log(this.velocidadeAtual + "Marcha usada : " + carro.pegaMarcha());
        
        } else {
            this.velocidadeAtual = quantidade;
            console.log("Recomendavel que diminua a velocidade do Fuscão para velocidade de " 
            + this.velocidadeMaxima + 'KM, maxima permitida. Atualmente sua velocidade é de ' + this.velocidadeAtual +
            'KM e o motor do fuscão pode fundir. Marcha usada: '  + carro.pegaMarcha()
            );
        }
    }
    //devolve a marcha para o carro
    pegaMarcha() {
        if (this.velocidadeAtual < 0) {
            return - 1;
        }

        if (this.velocidadeAtual >= 0 && this.velocidadeAtual < 40) {
            return 1;
        }

        if (this.velocidadeAtual >= 40 && this.velocidadeAtual < 80) {
            return 2;
        }
        
        return 3;
    }
}

var carro = new Carro('Azul', 'Fusca66', 100);
carro.corVeiculo();
carro.ligaeDesliga();
carro.acelera(120);