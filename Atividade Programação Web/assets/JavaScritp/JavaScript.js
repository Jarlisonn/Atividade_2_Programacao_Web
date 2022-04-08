function validar() {
    
    let nome = document.getElementById("nome");
    let sobrenome = document.getElementById("sobrenome");
    let senha = document.getElementById("senha");
    let confirmarSenha = document.getElementById("confirmarSenha");
    let email = document.getElementById("email");
    let cpf = document.getElementById("cpf");
    let github = document.getElementById("github");
    let telefone = document.getElementById("telefone");
    let sexo = document.getElementById("sexo");
    let newsletter = document.getElementById("newsletter").checked;
    let filtroEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    let filtroTelefone = /[(]*[0-9]{3}[)]*[0-9]{5}[-]*[0-9]{4}$/
    let filtroCpf = /[0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2}$/
    let filtroUrl = /^(?:http(s):\/\/)+[github.com]+[\/][\w.-]+$/

    if (nome.value == "") {
        alert("Nome não informado");
        nome.focus();
        return;
    }

    if (sobrenome.value == "") {
        alert("Sobrenome não informado");
        sobrenome.focus();
        return;
    }

    if (senha.value == "") {
        alert("Senha não informada");
        senha.focus();
        return;
    }else if(senha.value.length < 6){
        alert("Digite Novamente! A senha informada possui menos de 6 dígitos");
        senha.focus();
        return;
    }

    if (confirmarSenha.value == "") {
        alert("Senha não informada");
        confirmarSenha.focus();
        return;
    }else if(confirmarSenha.value.length < 6){
        alert("Digite Novamente! A senha informada possui menos de 6 dígitos");
        confirmarSenha.focus();
        return;
    }else if(senha.value != "" && confirmarSenha.value != "" && senha.value != confirmarSenha.value){ 
		alert("Senha incorreta! Confirme a senha novamente");
        confirmarSenha.value = "";
        confirmarSenha.focus();
        return;
    }

    if (email.value == "") {
        alert("E-mail não informado");
        email.focus();
        return;
    }else if(!filtroEmail.test(email.value)){
        alert("Formato de E-mail inserido incorreto");
		email.focus();
        return;
	}

    if (cpf.value == "") {
        alert("Cpf não informado");
        cpf.focus();
        return;
    }else if(!filtroCpf.test(cpf.value)){
        cpf.value = "";
        alert("Formato de Cpf incorreto");
        cpf.focus();
        return;
    }

    if (github.value == "") {
        alert("Url do perfil do github não informado");
        github.focus();
        return;
    }else if(!filtroUrl.test(github.value)){
        alert("Formato de Url do perfil do github incorreto");
        github.focus();
        return;
    }
   
    if (telefone.value == "") {
        alert("Telefone não informado");
        telefone.focus();
        return;
    }else if(!filtroTelefone.test(telefone.value)){
        alert("Formato de Número de Telefone incorreto");
        telefone.focus();
        return;
    }
   
    if (sexo.value == "") {
        alert("Sexo não informado");
        sexo.focus();
        return;
    }
    alert("Formulário enviado!");
    // envia o formulário
    //formulario.submit();
  }