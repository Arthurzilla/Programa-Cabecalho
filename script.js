function pogger(){

    
    var nome = String(document.getElementById('nome').value)
    var sobrenome = String(document.getElementById('sobrenome').value)
    var NomeCompleto = nome + " " + sobrenome

    if(nome == "" || sobrenome == ""){
        alert("existe espaços em branco")
    }else{
        document.getElementById('cabecalho').hidden = false
        document.getElementById('NomeCompleto').textContent = "Nome: " + NomeCompleto
    }

    
}



var button = document.getElementById('button')
button.addEventListener('click', pogger)