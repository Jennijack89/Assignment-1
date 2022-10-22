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
  //Square Deisgn
    ctx.fillStyle ='rgba(94,193,118,.6)'; //Filled square 1
    ctx.fillRect(0,0,100,100);

    ctx.fillStyle ='rgba(0,0,0,.5)';// Filled square 2
    ctx.fillRect(100,25,100,100);

    ctx.fillStyle ='rgba(0,0,0,.6)';// Filled square 3
    ctx.fillRect(200,50,120,100);
    
    ctx.clearRect(80,40,40,40); //Clear square 1
    ctx.clearRect(180,65,40,40);// clear Square 2

    ctx.strokeRect(70,30,60,60);//Hollow Square 1
    ctx.strokeRect(170,55,60,60);//Hlear square 2

  // text Design
    ctx.fillStyle = 'white';
    ctx.font = 'Bold 30px Papyrus';
               
    ctx.textBaseline = 'Top';
    ctx.fillText("The Sky's the limit", 40, 100);
               
  //line
   /* ctx.beginPath();
    ctx.moveTo(140,40);
    ctx.lineTo(250,25);
    ctx.strokeStyle = 'purple';
    ctx.lineTo(350,70);
    ctx.strokeStyle = "white";
    ctx.stroke();*/
/*}else{
   alert('You need Safari or Firefox 1.5+ to see this demo.');
}
}*/

