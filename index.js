console.log('Selecione a dificuldade FACIL(10),MEDIO(50),DIFICIL(100)');
let NUMERO ; 
let tentativa= '';
let val=0;
let dif = '';
process.stdin.on("data", function (data) {
    if(!dif){
        dif=data.toString().trim();
        NUMERO = Math.floor(Math.random()*Number(dif));
        console.log('Digite um numero para tentar acertar, voce tem 3 tentativas');
    }else {
        console.log('Tente');
        let tentativa = data.toString().trim();
    if(val==2){
        console.log('Voce perdeu, o numero era:'+NUMERO);
        console.log('O numero mudou,agora tente novamente')
        val=0;
        NUMERO = Math.floor(Math.random()*Number(dif));
    }else if(NUMERO == tentativa ){
        console.log('Acertou miseravi');
        process.exit();
    
}   else if(Math.abs(NUMERO-tentativa)<10){
        tentativa="";
        val=val+1;
        console.log("Voce errou mas foi perto");
        console.log("Voce tem "+(3-val)+" tentativas restantes");
}
    else{
        tentativa="";
        val=val+1;
        console.log("Voce errou feio");
        console.log("Voce tem "+(3-val)+" tentativas restantes");
    }}}
)
;