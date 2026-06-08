const avatar =
localStorage.getItem(
"avatar"
);

const nome =
localStorage.getItem(
"nome"
);

document
.getElementById(
"nomeUsuario"
)
.innerText = nome;

document
.getElementById(
"avatarUsuario"
)
.src =
`../assets/avatars/${avatar}.png`;


const listaJogos =
document.getElementById(
"listaJogos"
);

let totalPalpitados = 0;

jogos.forEach(jogo=>{

const chave =
`palpite_${jogo.id}`;

const palpiteExistente =
localStorage.getItem(chave);

if(palpiteExistente){

totalPalpitados++;

}

const card =
document.createElement("div");

card.className =
"jogo-card";

if(palpiteExistente){

card.classList.add(
"palpitado"
);

const dados =
JSON.parse(
palpiteExistente
);

card.innerHTML =

`
<h3>${jogo.casa} x ${jogo.fora}</h3>

<p class="data">
${jogo.data}
</p>

<div class="placar">

<strong>
${dados.casa}
</strong>

x

<strong>
${dados.fora}
</strong>

</div>

<div class="cadeado">

🔒 Palpite já registrado

</div>
`;

}else{

card.innerHTML =

`
<h3>${jogo.casa} x ${jogo.fora}</h3>

<p class="data">
${jogo.data}
</p>

<div class="placar">

<input
type="number"
min="0"
id="casa_${jogo.id}">

x

<input
type="number"
min="0"
id="fora_${jogo.id}">

</div>

<button
class="btn-palpite"
onclick="registrarPalpite(${jogo.id})">

Palpitar

</button>
`;
}

listaJogos.appendChild(
card
);

});

document
.getElementById(
"qtPalpitados"
).innerText =
totalPalpitados;

document
.getElementById(
"qtPendentes"
).innerText =
jogos.length -
totalPalpitados;

function registrarPalpite(id){

const casa =
document.getElementById(
`casa_${id}`
).value;

const fora =
document.getElementById(
`fora_${id}`
).value;

if(casa==="" || fora===""){

alert(
"Informe os dois placares."
);

return;
}

localStorage.setItem(

`palpite_${id}`,

JSON.stringify({

casa:casa,

fora:fora

})

);

location.reload();

}