document.writeln("this is navya");
document.writeln("hii");
var nav="im \"navya\"";
document.write(nav);
var x=10;
document.write(x+"<br/>");
var y=2+1*3;
document.write(y+"<br/>");
document.write((x==11)+"<br/>");
document.write((6>4) && (10<2)+"<br/>");
// if statements//
if(y>x)
{
    document.writeln("y is greater"+"<br/>");
}
else{
    document.writeln("x is geater"+"<br/>")
}
for(i=0;i<5;i++)
{
    document.write(i +"<br/>")
}
function one(a,b){
return a*b;
}
var num=prompt("enter a number");
document.write(one(2,num));