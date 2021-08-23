

function clicou (){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    
    
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar.");
}

function redirecionar () {
    window.open("https://www.google.com/");
}

function trocar (elemento  ){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse.";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse.";
}


function voltar (elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load (){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma (n1, n2){
    return n1 + n2;
}

var validar;

function validaIdade (idade){
    if (idade >=18){
        validar = true;
    }
    else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade? ");
validaIdade(idade)
console.log(validar);
*/
//alert(soma(5, 10));

//var d = new Date();
//console.log("Hoje é " + d.getDate() + "/" + (d.getMonth()+1) );

/*var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/


/*
var count;
for (count=1; count <= 5; count++){
    alert(count);
};
*/

/*var count = 0;
while (count <= 5){
    console.log(count)
    alert(count)
    count++;
}*/


/*var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("Maior de idade");
}
else{
    alert("Menor de idade");
}
*/

//var frutas = [{nome:"maçã", cor:"vermelho"}, {nome:"uva", cor:"roxo"}];
//console.log(frutas);
//alert(frutas[1].nome);
//alert("A cor da " + fruta.nome + " é " + fruta.cor);

//var lista = [nome="maçã", "pêra", "laranja"];
//console.log(lista[2]);
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.reverse);
//console.log(lista[1]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" | "));
/*
var nome = "Eduardo Lucas";
var n1 = 5;
var n2 = 3;
var frase = "Alemanha é o melhor time do mundo";
alert(nome + " tem " + idade + " anos");
alert (idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
alert(frase.replace("Alemanha", "Brasil"));
*/