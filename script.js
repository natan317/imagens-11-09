function mudarCor(cor){
    let body = document.body;

    switch(cor){
        case 'binladen': body.style.backgroundImage = "url('binladen.jpg')";break;
        case 'celso':    body.style.backgroundImage = "url('celso.jpg')";break;
        case 'aviao':    body.style.backgroundImage = "url('aviao.jpg')";break;
        case 'torres':   body.style.backgroundImage = "url('torres.jpg')";break;
        case 'fogo':     body.style.backgroundImage = "url('fogo.jpg')";break;
        default: body.style.backgroundColor = 'black';
    }
}