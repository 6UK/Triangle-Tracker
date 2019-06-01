function b1() {
var t1 =document.getElementById("Triangle1").value;
var t2 =document.getElementById("Triangle2").value;
var t3 =document.getElementById("Triangle3").value;

var a = parseInt(t1);
var b = parseInt(t2);
var c = parseInt(t3);

if ((a+b>c) && (b+c>a) && (c+a>b)){
  alert("Its a Triangle")
if (a===b && b===c && a===c){
  alert("Its an Equiletral traingle");
}
else if (a===b || b===c || c===a){
  alert("Its an Isosceles traingle");
}
else if (a!==b|| b!==c || c!==a){
  alert("Its a Scalene traingle");
 }
}
else {
alert("Its a not a Triangle my friend!!!!!!");

}

}
