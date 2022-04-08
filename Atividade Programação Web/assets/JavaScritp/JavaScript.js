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
    let filtroTelefone = /[(]*[0-9]{2}[)]*[0-9]{5}[-]*[0-9]{4}$/
    //let filtroCpf = /[0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2}$/
    let filtroUrl = /^(?:http(s):\/\/)+[github.com]+[\/][\w.-]+$/

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
    if(cpf.value == ""){
        alert("CPF não informado");
        cpf.focus();
        return; 
    }else if(cpf.value.length > 11){
        alert("Formato de CPF incorreto");
        cpf.focus();
        return;
    }

    function verificarCPF(cpf){
        var i;
        s = cpf;
        var cpf = s.substr(0,9);
        var dv = s.substr(9,2);
        var d1 = 0;
        var v = false;
     
        for (i = 0; i < 9; i++){
            d1 += cpf.charAt(i)*(10-i);
        }
        if (d1 == 0){
            v = true;
            return false;
        }
        d1 = 11 - (d1 % 11);
        if (d1 > 9) d1 = 0;
        if (dv.charAt(0) != d1){
            v = true;
            return false;
        }
     
        d1 *= 2;
        for (i = 0; i < 9; i++){
            d1 += cpf.charAt(i)*(11-i);
        }
        d1 = 11 - (d1 % 11);
        if (d1 > 9) d1 = 0;
        if (dv.charAt(1) != d1){
            v = true;
            return false;
        }
        //if (!v) { alert(cpf + "\nCPF Válido")}
    }

    if(verificarCPF(cpf.value) == false){
        alert("CPF Inválido")
        cpf.focus();
        return
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