

var yr = 1990;

while(yr <= 2030){
    console.log(bd(yr)+ endZero(yr) + jePriestupny(yr) + yr);
    var list;
    list = list +"<br>" + bd(yr)+ endZero(yr) + jePriestupny(yr) + yr;
    yr++;
}

document.write(list);

function jePriestupny(yr){
    if(yr % 100 == 0){
        if(yr % 400 == 0){
            return "P ";
        }
    }
    else{
        if(yr % 4 == 0){
            return "P ";
        }
    }
    return "";

}

function endZero(yr){
    var endsWithZero = yr % 10;

    if (endsWithZero !==0){
        return "";
    }
    else{
        return "O ";
    }
}

function bd(yr){
    if(yr == 2006){
        return "M ";
    }
    else{
        return "";
    }
}