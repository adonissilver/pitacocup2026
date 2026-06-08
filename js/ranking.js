const nome =
localStorage.getItem("nome") || "Jogador";

const avatar =
localStorage.getItem("avatar") || "manblue";

document.getElementById("nomeUsuario")
.innerText = nome;

document.getElementById("avatarUsuario")
.src =
`../assets/avatars/${avatar}.png`;


const jogadores = [

{
    nome: "João",
    avatar: "football",
    pontos: 22
},

{
    nome: "Maria",
    avatar: "girl",
    pontos: 20
},

{
    nome: "Carlos",
    avatar: "panda",
    pontos: 18
},

{
    nome: "Pedro",
    avatar: "dinosaur",
    pontos: 16
},

{
    nome: "Ana",
    avatar: "woman",
    pontos: 15
},

{
    nome: "Bruno",
    avatar: "black",
    pontos: 14
},

{
    nome: "Lucas",
    avatar: "tux",
    pontos: 13
},

{
    nome: "Julia",
    avatar: "woman1",
    pontos: 12
},

{
    nome: "Ricardo",
    avatar: "man",
    pontos: 11
},

{
    nome: "Fernanda",
    avatar: "harry",
    pontos: 10
}

];

// ------------------
// DADOS DO USUÁRIO
// ------------------

const nomeUsuario =
localStorage.getItem("nome") || "Jogador";

const avatarUsuario =
localStorage.getItem("avatar") || "football";

document.getElementById("nomeUsuario").innerText =
nomeUsuario;

document.getElementById("avatarUsuario").src =
`../assets/avatars/${avatarUsuario}.png`;

document.getElementById("posicaoUsuario").innerText =
"7º";

document.getElementById("pontosUsuario").innerText =
"14";

// ------------------
// TOP 3
// ------------------

const top3 =
document.getElementById("top3");

const classes = [
    "gold",
    "silver",
    "bronze"
];

const medalhas = [
    "🥇",
    "🥈",
    "🥉"
];

for(let i=0;i<3;i++){

    const jogador =
    jogadores[i];

    top3.innerHTML += `

    <div class="top3-card ${classes[i]}">

        <img
        src="../assets/avatars/${jogador.avatar}.png"
        class="top3-avatar">

        <div class="top3-info">

            <div class="top3-nome">

                ${medalhas[i]}
                ${jogador.nome}

            </div>

            <div class="top3-posicao">

                ${i+1}º Lugar

            </div>

        </div>

        <div class="top3-pontos">

            ${jogador.pontos} pts

        </div>

    </div>

    `;
}

// ------------------
// 4º AO 10º
// ------------------

const rankingList =
document.getElementById("rankingList");

for(let i=3;i<jogadores.length;i++){

    const jogador =
    jogadores[i];

    rankingList.innerHTML += `

    <div class="ranking-item">

        <div class="ranking-left">

            <div class="ranking-posicao">

                ${i+1}º

            </div>

            <img
            src="../assets/avatars/${jogador.avatar}.png"
            class="ranking-avatar">

            <div class="ranking-nome">

                ${jogador.nome}

            </div>

        </div>

        <div class="ranking-pontos">

            ${jogador.pontos} pts

        </div>

    </div>

    `;
}