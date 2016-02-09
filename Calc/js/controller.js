window.addEventListener("DOMContentLoaded",function(){
    var btnAdd = document.getElementById("add");
    var buttonArray = document.getElementsByTagName("button");
    for(var i = 0 ; i<buttonArray.length; i++){
        var currentBt = buttonArray[i];
        currentBt.addEventListener("click",doOperation);
    }
    // Binding or Register Event
    //document.getElementById("add").addEventListener("click",doOperation);
    //document.getElementById("add").addEventListener("click",doOperation);
});
function doOperation(event){
    var operation = event.srcElement.getAttribute("data-operation");
    var firstTxtBox = document.getElementById("firstNumber");
    var secondTxtBox = document.getElementById("secondNumber");
    if(firstTxtBox && secondTxtBox){  // Checking Object Not Null
        firstTxtBox = firstTxtBox.value;
        secondTxtBox = secondTxtBox.value;
        if(firstTxtBox && secondTxtBox){  // NOt Blank Check
            firstTxtBox = parseInt(firstTxtBox);
            secondTxtBox = parseInt(secondTxtBox);
            if(firstTxtBox && secondTxtBox){  // Nan Check
                var result = calculatorObject[operation](firstTxtBox,secondTxtBox);
                /*if(btnValue==="Add"){
                var result = calculatorObject.add(firstTxtBox,secondTxtBox);
                }
                else
                if(btnValue==="Subtract"){
                    var result = calculatorObject.subtract(firstTxtBox,secondTxtBox);
                }*/
                document.getElementById("result").innerHTML=result;
            }
        }
    }

    /*if(firstTxtBox!==null){
        firstTxtBox = firstTxtBox.value;
        if(firstTxtBox!==""){
            firstTxtBox = parseInt(firstTxtBox);
            if(!isNaN(firstTxtBox)){

            }
        }
    }*/

}


