class Forca {
 
  vidas = 6; //regra 1.
  estado = 'aguardando chute'; //regra 2.
  palavra = [];
  letrasChutadas = []; 

  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    this.palavra = Array(this.palavraSecreta.length).fill('_');
  }

  chutar(letra) { 
    
    if (letra.length > 1) { //regra 3.
      return;
    } 

    if (this.letrasChutadas.includes(letra)) { //regra 4.
      return;
    } 

    if (this.palavraSecreta.includes(letra)) { 
      this.letrasChutadas.push(letra); //regra 5.
    } else {
      this.vidas--; //regra 6.
    }
    
    for (let i = 0; i < this.palavraSecreta.length; i++) { //regra 7.
      if (this.palavraSecreta[i] === letra) {
        this.palavra[i] = letra;    
      }
    }

    if (this.vidas === 0) { //regra 8.
      this.estado = 'perdeu';
    } else if (this.palavra.join('') === this.palavraSecreta) { //regra 9.
      this.estado = 'ganhou';
      } else {
      this.estado = 'aguardando chute';
    }

  }

  buscarEstado() { // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou" 
    return this.estado;  
  } 

  buscarDadosDoJogo() {
    return {
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      letrasChutadas: this.letrasChutadas  // Deve conter todas as letras chutadas
    }
  }
}

module.exports = Forca;
