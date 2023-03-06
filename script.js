function resp1() {

    var resp1 = "Fico feliz em te conhecer "

    var nome = document.getElementById("resp").value;

    document.getElementById("respb").innerHTML = resp1 + nome;

}

function resp2() {

    var resp2 = "Que interessante você querer "

    var vida = document.getElementById("resp").value;

    document.getElementById("respb").innerHTML = resp2 + vida;

}

function resp3() {

    var resp3 = "Entendo.. Mas seja o que acontecer, espero que dê tudo certo a você! "

    document.getElementById("respb").innerHTML = resp3;

}

function resp4() {

    var fruta = document.getElementById("resp").value;

    var resp4 = "Eu como bot infelizmente não possso comer maçãs ;("

    var resp5 ="Que pena você não gostar de maçã"

    var resp6 ="Não entendi sua resposta, poderia repetir?"

    if (fruta == "S"||fruta == "s" || fruta == "sim" || fruta == "Sim"){

        document.getElementById("respb").innerHTML = resp4;

    } else if (fruta == "N"|| fruta == "n" || fruta == "não"|| fruta == "Não") {

        document.getElementById("perg").innerHTML = resp5;
       
      
        

    } else {

        document.getElementById("respb").innerHTML = resp6;

    }

}

function perg1() { 

    var perg1 = "Me fale mais sobre você, qual seu objetivo de vida?"

    document.getElementById("perg").innerHTML = perg1
}
function perg2() { 

    var perg2 = "Se você ganhasse na loteria isso influenciaria seu objetivo?"

    document.getElementById("perg").innerHTML = perg2
}function perg3() { 

    var perg3 = "Você gosta de maçã?(S/N)"

    document.getElementById("perg").innerHTML = perg3
}




let botao = document.getElementById("bt");
let funcoes = [resp1, resp2, resp3, resp4,];
let indice = 0;

botao.addEventListener("click", function() {
    funcoes[indice]();
    indice = (indice + 1) % funcoes.length;
});



let botao1 = document.getElementById("bt1");
let funcoes2 = [perg1, perg2, perg3,];
let indice3 = 0;

botao1.addEventListener("click", function() {
    funcoes2[indice3]();
    indice3 = (indice3 + 1) % funcoes2.length;
});




