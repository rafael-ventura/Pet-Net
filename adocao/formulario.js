document.getElementById("nome").appendChild(document.createTextNode(localStorage.getItem("nomeCadastro")));
function formulario(){    
var tipoForm=document.getElementById("tipoForm").value;
var possuiForm=document.getElementById("possuiForm").value;
var qualForm=document.getElementById("qualForm").value;
var quantForm=document.getElementById("quantForm").value;
var telForm=document.getElementById("telForm").value;
localStorage.setItem("nomeForm",localStorage.getItem("nomeCadastro"));
localStorage.setItem("tipoForm",tipoForm);
localStorage.setItem("possuiForm",possuiForm);
localStorage.setItem("qualForm",qualForm);
localStorage.setItem("quantForm",quantForm);
localStorage.setItem("telForm",telForm);
location.assign("adocao.html");
}
