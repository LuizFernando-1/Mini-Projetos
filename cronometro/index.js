var sec=0
var min=0
var hora=0
var intervalo

function start(){
    intervalo=setInterval(relogio,1000)
}

function pause(){
    clearInterval(intervalo)
}

function stop(){
    clearInterval(intervalo)
    sec=0
    min=0
    document.getElementById('relogio').innerText='00:00'
}

function relogio(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hora++
        }
    }
    document.getElementById('relogio').innerText=hora+':'+min+':'+sec
}