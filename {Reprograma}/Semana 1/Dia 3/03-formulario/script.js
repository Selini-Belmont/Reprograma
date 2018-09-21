var btn_user = document.querySelector("#botao_usuario");
btn_user.addEventListener('click',function(event){
    event.preventDefault();
    var inp_user = document.querySelector("#input_usuario").value;

    if(inp_user.length == 0){
        alert("Por favor não deixe o campo em branco, digite seu nome de usuário.");
    } else {
        alert("Tá ótimo :)");
    }
});

var btn_senha = document.querySelector("#botao_senha");
btn_senha.addEventListener('click',function(event){
    event.preventDefault();
    var inp_senha = document.querySelector("#input_senha").value;

    if(inp_senha.length > 6) {
        alert("Sua senha está OK.");
    } else {
        alert("Por favor utilize mais de 6 caracteres na sua senha.");
    }
});