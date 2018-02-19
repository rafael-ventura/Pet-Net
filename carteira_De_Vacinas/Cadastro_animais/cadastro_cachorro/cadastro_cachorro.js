function salvarDados(){
    var nome=document.getElementById("nomePetCadastro").value;
    var sexo= document.getElementsByName("sexoPetCadastro");
    var idade= document.getElementById("idadePetCadastro").value;
    var porte= document.getElementById("portePetCadastro").value;
    for (var i = 0, length = sexo.length; i < length; i++) {
        if (sexo[i].checked) {
            localStorage.setItem("sexoPetCadastro", sexo[i].value);    
            break;
        }
    }
    if(localStorage.getItem("sexoPetCadastro")=="masculino"){
       localStorage.setItem("do/daCarteira","do")
} else{
    localStorage.setItem("do/daCarteira","da")
}
    localStorage.setItem("nomePetCadastro", nome);
    localStorage.setItem("idadePetCadastro", idade);
    localStorage.setItem("especiePetCadastro","cachorro");
    localStorage.setItem("portePetCadastro",porte);
    location.assign("../../carteira_cachorro/carteira_de_vacina_dog.html");
}
function validarDados(){
    var nome= document.getElementById("nomePetCadastro").value;
    var sexo= document.getElementsByName("sexoPetCadastro");
    var idade= document.getElementById("idadePetCadastro").value;
    var porte= document.getElementById("portePetCadastro").value;
    var vazio= true; 
    for (var i = 0, length = sexo.length; i < length; i++) {
        if (sexo[i].checked) {
            vazio=false;   
            break;
        }
    }
    if(nome==""||idade==""||vazio){
        alert("Preencha os campos necessários.")
    } else{
        salvarDados();
    }
}
document.getElementById("nomePetPerfil").appendChild(document.createTextNode(localStorage.getItem("nomePetCadastro")));
document.getElementById("sexoPetPerfil").appendChild(document.createTextNode(localStorage.getItem("sexoPetCadastro")));
document.getElementById("idadePetPerfil").appendChild(document.createTextNode(localStorage.getItem("idadePetCadastro")));
document.getElementById("especiePetPerfil").appendChild(document.createTextNode(localStorage.getItem("especiePetCadastro")));
document.getElementById("portePetPerfil").appendChild(document.createTextNode(localStorage.getItem("portePetCadastro")));