const form = document.getElementById('form-enviar')
function validaNome (nomeCompleto){
    const nomeArray = nomeCompleto.split(' ');
    return nomeArray.length >= 2;
}
form.addEventListener('submit',function(e){
    e.preventDefault()

    
    const nomeBeneficiario = document.getElementById('nome completo')
    if (!validaNome(nomeBeneficiario.value)){
        alert("o nome não está completo")
    }
    else{
        alert("tudo certo")
        form.reset()
    }
})
