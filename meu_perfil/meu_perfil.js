document.getElementById("nomePerfil").appendChild(document.createTextNode(localStorage.getItem("nomeCadastro")));
document.getElementById("emailPerfil").appendChild(document.createTextNode(localStorage.getItem("emailCadastro")));
document.getElementById("nomePetPerfil").appendChild(document.createTextNode(localStorage.getItem("nomePetCadastro")));
document.getElementById("sexoPetPerfil").appendChild(document.createTextNode(localStorage.getItem("sexoPetCadastro")));
document.getElementById("idadePetPerfil").appendChild(document.createTextNode(localStorage.getItem("idadePetCadastro")));
document.getElementById("especiePetPerfil").appendChild(document.createTextNode(localStorage.getItem("especiePetCadastro")));
document.getElementById("portePetPerfil").appendChild(document.createTextNode(localStorage.getItem("portePetCadastro")));
function exclusao(){
    localStorage.clear();
    location.assign("../crie_sua_conta/crie_sua_conta.html");
}