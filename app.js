function cliqueAlert(){
    
}

function exercicio1(altura, peso){
    return peso / (altura * altura);
}

function exercicio2(num){
    for( let i = num - 1; i > 0; i--){
        num *= i;
    }
    return num;
}

function exercicio3(dolar){
    let valor = dolar * 4.80
    return `O valor em real é: R$${valor}`;
}

function exercicio4(comprimento, largura){
    let area = comprimento * largura;
    let perimetro = comprimento + largura;
    return `A área é: ${area} e o perimetro é: ${perimetro}`
}

function exercicio5(raio){
    let area = 3.14 * (raio * raio);
    return `A área é: ${area}`
}

function exercicio6(){
    function mostrarTabuada(numero) {
        for (let i = 1; i <= 10; i++) {
          let resultado = numero * i;
          console.log(`${numero} x ${i} = ${resultado}`);
        }
      }
}

function exercicio2_1() {
    let listaGenerica = [];
}

function exercicio2_2(){
    let linguagensDeProgramacao = [ 'javascript','c','c++', 'cotlin', 'python'];
    linguagensDeProgramacao.push('java', 'ruby', 'goLang');
    console.log(linguagensDeProgramacao);
}

function exercicio2_3(){
    let linguagensDeProgramacao = [ 'javascript', 'cotlin', 'python'];
    console.log( linguagensDeProgramacao[0]);
}

function exercicio2_4(){
    let linguagensDeProgramacao = ['javascript', 'cotlin', 'python'];
    console.log( linguagensDeProgramacao[1]);
}

function exercicio2_5(){
    let linguagensDeProgramacao = ['javascript', 'cotlin', 'python'];
    console.log( linguagensDeProgramacao[linguagensDeProgramacao.length - 1]);
}