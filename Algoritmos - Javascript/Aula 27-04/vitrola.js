var vitrola = {
  cor: "Prata",
  ligado: false,
  modelo: "PX-42",
  marca: "Samsung",
  quantidadeVinis: 1,
  tocar: function (vinil) {
    if (this.ligado == true) {
      vinil.tocar();
    } else {
      console.log("Vitrola desligada ...");
    }
  },
  power: function () {
    if (this.ligado == false) {
      console.log("Vitrola ligada ...");
      this.ligado = true;
    } else {
      console.log("Vitrola desligada ...");
      this.ligado = false;
    }
  },
};

var vinilMichaelJackson = {
  ano: 1982,
  cor: "Roxo",
  album: "Thriller",
  artista: "Michael Jackson",
  tocar: function () {
    console.log(`Tocando ${this.album} de ${this.artista}`);
  },
};

var vinilBillyIdol = {
  ano: 1983,
  cor: "Preto",
  artista: "Billy Idol",
  album: "Rebell Yell",
  tocar: function () {
    console.log(`Tocando ${this.album} de ${this.artista}`);
  },
};

var vinilAha = {
  ano: 1985,
  cor: "Prata",
  artista: "A-ha",
  album: "Hunting high and low",
  tocar: function () {
    console.log(`Tocando ${this.album} de ${this.artista}`);
  },
};
