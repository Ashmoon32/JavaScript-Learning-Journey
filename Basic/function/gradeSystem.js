function getGrade(score){
    if( score >= 90){
        return console.log("A");
    }else if(score >= 80){
        return console.log("B");
    }else if(score >= 70){
        return console.log("C");
    }else if(score >= 60){
        return console.log("D");
    }else{
        return console.log("F");
    }
}

getGrade(85);