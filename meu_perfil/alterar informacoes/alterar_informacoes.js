document.getElementById("nomeCadastro").value=localStorage.getItem("nomeCadastro");
document.getElementById("emailCadastro").value=localStorage.getItem("emailCadastro");
document.getElementById("senhaCadastro").value=localStorage.getItem("senhaCadastro");

function mudarInformacoes(){
    localStorage.setItem("nomeCadastro",document.getElementById("nomeCadastro").value);
    localStorage.setItem("emailCadastro",document.getElementById("emailCadastro").value);
    localStorage.setItem("senhaCadastro",document.getElementById("senhaCadastro").value);
    location.assign("meu_perfil.html");
    
}