function add(){
console.log("Add Call ");
}
undefined
add();
VM123:3 Add Call 
undefined
add(100,200);
VM123:3 Add Call 
undefined
console.dir(add);
VM242:2 add()arguments: nullcaller: nulllength: 0name: "add"prototype: add__proto__: ()<function scope>
undefined
add.length;
0
function show(x,y){}


undefined
show.length;
2
add.length;
0
add.name;
"add"
function add(){
var sum = 0; 
for(var i = 0; i<arguments.length; i++){
   sum = sum + parseInt(arguments[i]);
}
return sum;
}
undefined
add();
0
add(10);
10
add(10,20);
30
add(10,20,30);
60
add("100","200");
300
add("100","200","Xyz");
NaN
add(10,"20");
30
function add(){
var sum = 0; 
for(var i = 0; i<arguments.length; i++){
  
   sum = sum + parseInt(arguments[i]);
}
return sum;
}
undefined
parseInt("one");
NaN
var x = parseInt("one");
undefined
isNaN(x);
true
function add(){
var sum = 0; 
for(var i = 0; i<arguments.length; i++){
  
   sum = sum + isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]);
}
return sum;
}
undefined
add("100","200","Xyz");
0
function add(){
var sum = 0; 
for(var i = 0; i<arguments.length; i++){
  
   sum = sum + (isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]));
}
return sum;
}
undefined
add("100","200","Xyz");
300
add("100","two","Xyz");
100
add("one","two","Xyz");
0