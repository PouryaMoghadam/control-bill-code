


function billCodeCheck(code) {
    var Code = code.split("");
    var ControllerBase = Code.splice(-1,1);
    var Code = Code.reverse();
    var Length = (code.length)-1;
    var sumNumbers = [];
    var i;
    var power = 2 ;
    for(i = 0 ; i < Length ; i++){
        if(power < 8 ){
            var sumtemp = Code[i] * power ;
            sumNumbers.push(sumtemp);
            power++;
        }else{
            power = 2 ;
            var sumtemp = Code[i] * power ;
            sumNumbers.push(sumtemp);
            power++;
        }
    }
    var finalSum = 0 ;
    sumNumbers.forEach(element => {
        finalSum = element + finalSum ;
    });
    var checkMod = finalSum % 11 ;
    var ControllerResult;
    if(checkMod == 0 || checkMod == 1 ){
        ControllerResult = 0;
    }else{
        ControllerResult = 11 - checkMod;
    }
    if(ControllerBase == ControllerResult){
        console.log('true');
        return true;
    }else{
        console.log('false');
        return false;
    }
}



function validateData (){
    var data = document.getElementById("valueGetter").value;
    if(billCodeCheck(data)){
        var result = "شناسه وارد شده صحیح می باشد";
    }else{
        var result = "شناسه وارد شده صحیح نمی باشد";
    }
    document.getElementById("result").innerHTML = "شناسه قبض : " + data + "<br>" + "نتیجه : " + result ;
};
