var num1=0;
var num2=1; 
var alertf=0,alert2=0;
  //document.getElementById('num1').innerHTML=num1;
  //document.getElementById('num2').innerHTML=num2;
  function clickHere(){
    //var alertf=0;
    let cont=num2;
    num2=num2+num1;
    num1=cont;  
    //document.getElementById('num1').innerHTML=num1;
    //document.getElementById('num2').innerHTML=num2;
    var para = document.createElement("p");
    var node = document.createTextNode(num2);
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
    if(num2>100 && alertf==0){
      alert("Go on get a Life!!");
      alertf=1;
    }
    if(num2>200 && alert2==0)
    {
      alert("Seriously get some help!!");
      alert2=1;
    }
  }