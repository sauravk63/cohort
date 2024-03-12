

let HH = 0;
let MM = 0;
let SS = 0;

setInterval(printTime, 1);


function printTime(){
    if(SS>58){
        SS=0;
        if(MM>58){
            MM=0;
            if(HH>=23){
                HH=0;
            }else HH++;
        }else MM++;
    }else SS++;
    console.log(HH+':'+MM+':'+SS);
}