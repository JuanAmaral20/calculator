function insert(num){
    var numero =  document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = '';
}

function addSinal(){
    var sinal = '-';
    var resultado = document.getElementById('resultado').innerText;
    if(resultado[0]=== '-'){
        document.getElementById('resultado').innerText = resultado.slice(1, resultado.length)
    } 
    else{
        document.getElementById('resultado').innerText = sinal.concat(resultado);
    }
}