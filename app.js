let amigos=[];//Inicializacion del array para guardar los nombres

function agregarAmigo(){
    let entradaAmigo=document.getElementById("amigo").value; //

    if(entradaAmigo===""){
        alert("Por favor, inserte un nombre");
    }else if(amigos.includes(entradaAmigo)){
        alert("Nombre repetido, ingrese otro");
    }else{
        amigos.push(entradaAmigo);
        listaAmigos();
        limpiarCaja();
    }
}

function limpiarCaja(){
    let valorCaja=document.getElementById("amigo");
    valorCaja.value="";
}

function listaAmigos(){
    let lista=document.getElementById("listaAmigos");

    lista.innerHTML="";

    for(let i=0;i<amigos.length;i++){
        let li=document.createElement("li");
        li.textContent=amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    let resultado=document.getElementById("resultado");
    let lista=document.getElementById("listaAmigos");

    if(amigos.length===0){
        resultado.innerHTML="<li>No hay amigos en la lista. Agrega algunos primero</li>";
    }else{
        let i=Math.floor(Math.random()*amigos.length);
        let nombreSorteado=amigos[i];
        lista.innerHTML="";
        resultado.innerHTML=`<li>El amigo sorteado es: <strong>${nombreSorteado}</strong></li>`;
    }
}