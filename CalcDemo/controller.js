window.addEventListener("load",init);
function init(){
    //document.getElementById("add").addEventListener("click",add);
    //document.getElementById("subtract").addEventListener("click",subtract);
    document.getElementById("add").addEventListener("click",doOperation);
    document.getElementById("subtract").addEventListener("click",doOperation);
}

function doOperation(event){
    var operation = event.srcElement.getAttribute("data-operation");
    //console.log(event.srcElement.innerHTML);
    var firstNo = parseInt(document.getElementById("firstNo").value);
    var secondNo = parseInt(document.getElementById("secondNo").value);
    var sum = 0;
    var expression = firstNo + operation + secondNo;
    sum = eval(expression);
    //sum = calcOperation[operation](firstNo,secondNo);
    /*if(operation==="Add"){
        sum = calcOperation.add(firstNo,secondNo);
    }
    else
    if(operation==="Subtract"){
        sum = calcOperation.subtract(firstNo,secondNo);
    }*/
    document.getElementById("result").innerHTML=sum;
}

/*
function add(){
    var firstNo = parseInt(document.getElementById("firstNo").value);
    var secondNo = parseInt(document.getElementById("secondNo").value);
    var sum = calcOperation.add(firstNo,secondNo);
    document.getElementById("result").innerHTML=sum;
}
function subtract(){
    var firstNo = parseInt(document.getElementById("firstNo").value);
    var secondNo = parseInt(document.getElementById("secondNo").value);
    var sum = calcOperation.subtract(firstNo,secondNo);
    document.getElementById("result").innerHTML=sum;
}*/
