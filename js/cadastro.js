const avatares = [

    "black",
    "boy",
    "dinosaur",
    "football",

    "girl",
    "harry",
    "man",
    "manblue",

    "panda",
    "tux",
    "woman",
    "woman1",
    "cogumelo",
    "jen",
    "punk"

];

let avatarSelecionado = null;

const avatarGrid =
document.getElementById(
    "avatarGrid"
);

avatares.forEach(nome => {

    const div =
    document.createElement("div");

    div.className =
    "avatar";

    div.innerHTML =

    `
    <img
    src="../assets/avatars/${nome}.png">
    `;

    div.onclick = () => {

        document
        .querySelectorAll(".avatar")
        .forEach(a => {

            a.classList.remove(
                "selecionado"
            );

        });

        div.classList.add(
            "selecionado"
        );

        avatarSelecionado =
        nome;
    };

    avatarGrid.appendChild(div);

});

document
.getElementById(
    "formCadastro"
)
.addEventListener(
    "submit",
    salvarCadastro
);

function salvarCadastro(e){

    e.preventDefault();

    if(!avatarSelecionado){

        alert(
            "Escolha um avatar."
        );

        return;
    }

    localStorage.setItem(
        "nome",
        document.getElementById(
            "nome"
        ).value
    );

    localStorage.setItem(
        "departamento",
        document.getElementById(
            "departamento"
        ).value
    );

    localStorage.setItem(
        "telefone",
        document.getElementById(
            "telefone"
        ).value
    );

    localStorage.setItem(
        "avatar",
        avatarSelecionado
    );

    window.location.href =
        "palpites.html";
}