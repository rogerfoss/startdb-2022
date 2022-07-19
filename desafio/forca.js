class Forca {
 
  vidas = 6; //regra 1.
  estado = 'aguardando chute'; //regra 2.
 
  chutar(letra) { 
    
    if (letra.length > 1) { //regra 3.
      return;
    } 

    if (this.letrasChutadas.includes(letra)) { //regra 4.
      return;
    } 

    if (this.palavra.includes(letra)) { 
      this.letrasChutadas.push(letra); //regra 5.
    } else {
      this.vidas--; //regra 6.
    }
    
    for (let i = 0; i < this.palavra.length; i++) { //regra 7.
      if (this.palavra[i] === letra) {
        this.palavra[i] = letra;    
      }
    }

    if (this.vidas === 0) { //regra 8.
      this.estado = 'perdeu';
    } else if (this.palavra.join('') === this.buscarDadosDoJogo().palavra.join('')) { //regra 9.
      this.estado = 'ganhou';
      } else {
      this.estado = 'aguardando chute';
    }

  }

  buscarEstado() { return ""; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: [], // Deve conter todas as letras chutadas
          vidas: 6, // Quantidade de vidas restantes
          palavra: [] // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
