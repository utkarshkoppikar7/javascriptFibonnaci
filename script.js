var num1=0;
  var num2=1; 
  //document.getElementById('num1').innerHTML=num1;
  //document.getElementById('num2').innerHTML=num2;
  function clickHere(){
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
  }