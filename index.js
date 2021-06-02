const btn = document.getElementById('btn');



btn.addEventListener('click', function(){
    let hex = '#';
    for(i = 0; i < 6; i++) {
        let x = Math.floor(Math.random()*16);
        switch (x){
            case 10:
                x = 'A';
                break;
            case 11:
                x = 'B';
                break;
            case 12:
                x = 'C';
                break;
            case 13:
                x = 'D';
                break;
            case 14:
                x = 'E';
                break;
            case 15:
                x = 'F'
                break;
            default:
                x = x;
                break;
        }
        hex += x;
        console.log(x);
    }
    console.log(hex);
    document.body.style.backgroundColor = hex;
    
})