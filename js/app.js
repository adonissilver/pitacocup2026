document
.getElementById("btnParticipar")
.addEventListener("click", verificarCadastro);

function verificarCadastro(){

    const telefone =
        localStorage.getItem("telefone");

    if(telefone){

        window.location.href =
            "pages/palpites.html";

    }else{

        window.location.href =
            "pages/cadastro.html";
    }
}