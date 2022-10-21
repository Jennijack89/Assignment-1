function checkUser(){
  let userName= document.getElementById('usrName').value;
  let lowerUserName = userName.toLowerCase();
  const names= ["harry","elizabeth","shana"];
  if(names.includes(lowerUserName)){
     alert('Username Exists: Please Choose Another.');
    return false;
  }
  return true;
}

function verifyPw(){
  let passWord=document.getElementById('passWrd').value;
  let rePassWord=document.getElementById('passWrdreEntr').value;
  if (rePassWord != passWord){
    alert("Password Mismatch: Please re-enter Password");
    return false;
    }
  return true;
}

/************* My Canvas Code***************/

//gets the Canva element by id
var canvas = document.getElementById('mycanvas');
//makes sure we don't execute when canvas isn't supported
/*if (canvas.getContext) {   */
  //allows us to use canva for deawing
var ctx = canvas.getContext('2d');   
   // drawing code here  
    ctx.fillStyle ='rgb(0,40,30)';
    ctx.fillRect(0,0,100,100);

    ctx.fillStyle ='rgb(0,100,20)';
    ctx.fillRect(100,25,100,100);

    ctx.fillStyle ='rgb(0,40,10)';
    ctx.fillRect(200,100,120,100);

    ctx.fillStyle ='rgb(255,0,30)';
    ctx.fillRect(300,0,40,50);
    
    ctx.clearRect(30,5,20,25);

    ctx.strokeRect(70,70,70,70);

  //line
    ctx.beginPath();
    ctx.moveTo(140,40);
    ctx.lineTo(250,25);
    ctx.strokeStyle = 'purple';
    ctx.lineTo(350,70);
    ctx.strokeStyle = "white";
    ctx.stroke();

  //arc
    ctx.beginPath();
    ctx.arc(100,50, 5,0,Math.PI = 2, false);
    ctx.stoke();
/*}else{
   alert('You need Safari or Firefox 1.5+ to see this demo.');
}
}*/

