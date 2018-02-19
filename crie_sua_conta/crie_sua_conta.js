function validarCadastro(){
    var email= document.getElementById("emailCadastro").value,
        senha=document.getElementById("senhaCadastro").value,
        nome=document.getElementById("nomeCadastro").value;
    var indexOfAt = email.indexOf("@");
    if (nome==""){
        alert("Preencha o campo nome");
        return;
    }
    if (email == ""){
        alert("Preencha o campo e-mail.");
        return; 
    }
    if (email.indexOf(" ") >= 0){
        alert("Seu e-mail não tem espaço.");
        return;
    }
    if (indexOfAt < 1){
        alert("Tem que ter algo antes do @, seu usuário.");
        return;
    }
    if (indexOfAt+1==email.length) {
        alert("Tem que ter alguma coisa depois do @!");
        return;
    }
    if (email.indexOf(".",indexOfAt+2)<0){
        alert ("Como assim sem nada entre o @ e o ponto?");
        return;
    }
    if (email.indexOf(".",indexOfAt+2)+1==email.length){
        alert ("Não vai escrever nada depois do ponto não, caro amigo?");
        return;
    }    
    if (senha ==""){
        alert("Preencha o campo senha.");
        return;
    }

    localStorage.setItem("emailCadastro",email);
    localStorage.setItem("senhaCadastro",senha);
    localStorage.setItem("nomeCadastro",nome);
    alert("BEM VINDO AO SITE!");
}
function login(){
    var email,senha;    
    email= document.getElementById("emailLogin").value;
    senha=document.getElementById("senhaLogin").value;
    if (email == ""){
        alert("Preencha o campo email para logar-se");
        return; 
    }
    if (senha ==""){
        alert("Preencha o campo senha para logar-se");
        return;
    }
    var emailSalvo=localStorage.getItem("emailCadastro");
    var senhaSalva=localStorage.getItem("senhaCadastro");

    if(emailSalvo!=email||senhaSalva!=senha){
        alert("E-mail ou senha inválidos");
        return;
    }
    localStorage.setItem("logado",true);
    location.assign("../pagina_principal/pagina_principal.html");
}