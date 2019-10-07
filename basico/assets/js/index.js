/*

// Heloo word JavaScript
console.log("Hello Word"); 

// Variaveis 

var olaMundo = "lar mundo!";

console.log(olaMundo); 
console.log(olaMundo); 
console.log(olaMundo); 
console.log(olaMundo); 

// let usado tambem para declarar variaveis 

// const declara constante 

let a =10;

const b = "10";

console.log(a == b || typeof a == 'string');

// if and else

let cor ="Verde";

if(cor === "Verde"){

    console.log("Siga1");

}else if (cor === "Amarelo"){

    console.log("Atenção!1");

}else if( cor === "Vermelho1"){

    console.log("Pare!");
}else{//não obrigado a por else apos else if

    console.log("Erro!");
}
// switch (case)

let cor1 = "azul";

switch (cor1 = "azul") {

    case "verde":
        console.log("Siga2");
        break;

        case "amarelo":
            console.log("Atenção!2");
            break;

        case "vermelho":
            console.log("Pare!2");
            break;

            default:
                console.log("erro!");
                break;
}
*/
/*for (sabe quantas vezes você vai repetir(3 instruções) percorrer um array (for each) 
percorrer atributos de objetos (for in) || wile ou do wile) */

/*
let n = 8; 

for (let i = 0; i <= 10; i++) {

   console.log(`${i} X ${n} = ${i*n}`);

   //console.log(i + " X " + n = "=" + (i*n));
    
}

//funções

function calc(x1, x2 , operator){

    return eval(`${x1} ${operator} ${x2}`);

}
let resultado = calc(5,2 , "+");

console.log(resultado);

//função anonima ,  feita e envocada logo apos , sem nome 
(function calc(x1, x2 , operator){

    return eval(`${x1} ${operator} ${x2}`);

})(5,2,"-");//apos o ; não tem como envocala mais 

//arrow function

let calcc = (x1, x2 , operator) =>{

    return eval(`${x1} ${operator} ${x2}`);

}
let results = calcc(5,52 , "+");

console.log(results);


*/
 
//eventos em JS

/*
window.addEventListener('focus', event => {

    console.log("focus");

});
document.addEventListener('click', event =>{

    console.log("você clicou");


});

*/

//usando date 

// let agora = new Date();

// console.log(agora.toLocaleDateString("pt-BR"), agora.getHours(), agora.getMinutes(), agora.getSeconds());

//array

// let carro = ["palio 98" , "toro", "uno" , 10, true, new Date(), function(){}];

// console.log(carro[5]);


//Atributos e metodos criando uma classe

// let celular = function(){

//     this.cor = "prata";

//     this.ligar = function()
//     {

//         console.log("uma ligação");

//         return "Ligando";

//     }
// }

// let objeto = new  celular();

// console.log(objeto.ligar());

//criando uma classe no novo ectma

class celular{

    constructor(){
         this.cor = "prata";
    }
    ligar(){

        console.log("uma ligação");

                return "Ligando";
        }

}

let objeto = new  celular();

console.log(objeto);
