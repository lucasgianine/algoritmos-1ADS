var carro = {
    marca: "Chevrolet",
    modelo: "Celta",
    ano: 2020,
    capacidadeTanque: 250,
    tanque: 0,
    ligado: false,
    placa: {
        numeracao: "HG9-3959",
        estado: "SP",
        cidade: "São Paulo",
        pais: "Brasil",
        tipo: "COMUM",
    },
    cor: "Verde",
    quilometragem: 1000,
    automatico: true,
    motor: {
        litragem: 2.8,
        gasolina: false,
        alcool: false,
        diesel: true,
    },
    ligar: function() {
        if(this.ligado == true) {
            console.log("Carro já ligado ...");
        } else {
            this.ligado = true;
            console.log("Carro ligando ...");
        }
    },
    desligar: function() {
        if (this.ligado == false) {
            console.log("Carro já desligado ...");
        } else {
            this.ligado = false;
            console.log("Carro desligando ...");
        }
    },
    andar: function (km_total){
        if (this.ligado == false) {
            console.log("Não pode andar, ligue primeiro");
        } else if (this.tanque == 0) {
            console.log("Não pode andar, abasteça !");  
        } else {
            var km_rodado = 1;
            while (km_rodado <= km_total) {
                if (this.tanque <= 20) {
                    console.log("Carro entrou na reserva ...");
                }
                console.log(`Andando ${km_rodado} km ...`);
                km_rodado += 1;
                this.tanque -= 1;
                this.quilometragem += 1;
            }
        }
    },
    abastecer: function(combustivel, posto) {
        var tanqueAbastecido = this.tanque + combustivel;
        if (tanqueAbastecido > this.capacidadeTanque) {
            console.log("Não pode abastecer, vai ultrapassar o tanque");
        } else {
            if (posto == "Ipiranga" || posto == "Shell") {
                this.tanque += 10;
                console.log("Ganhou 10l de brinde");
            }
            this.tanque += combustivel;
            console.log(`Carro está abastecendo, no posto ${posto}`);
        }
    },
    mudarMotor: function() {
        motor.gasolina = true;
        motor.alcool = false;
        motor.diesel = false;
    }
}