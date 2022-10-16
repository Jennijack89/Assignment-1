//let passWord=document.getElementById('passWrd').value;
//let rePassWord=document.getElementById('passWrdreEntr').value;
//let result = passWord.match(rePassWord)
//if result = false
 // alert

//const phNumPattern = /[0-9]{3}-[0-9]{3}-[0-9]{4}/
//let result= pattern.test(document.getElementById('phonenum').value)

//if (result == false) {
//alert('Please use the specified format');
//}

function verifyPw(){
  let passWord=document.getElementById('passWrd').value;
  let rePassWord=document.getElementById('passWrdreEntr').value;
  if (rePassWord != passWord){
    alert("Password Mismatch: Please re-enter Password");
    return false;
    }
}

//function showPwd() {
 // let myInput=document.getElementsByTagName('input');
 // let rePassWord=document.getElementById('passWrdreEntr').value;
  //if(myInput.type === "password") {
//myInput.type = "text";}
  //}
//  }
//function verifyUsr(){
//const names= [Harry,Elizabeth,Shana];
//let userName=document.getElementById('usrName').value;
//  for(let name of names){
 //   if(names[name] in userName){
  //    alert('This name is taken');
//      return false;
 //   }
//  }  
//}

//function verifyUser(){
//  const names = [harry,Elizabeth,Shana];
//  let userName= document.getElementById('usrName').value;
//  names.forEach(myFunction);
//}
//function myFunction(value){
  //if(value in userName){
  //  alert('This name is taken');
  //}
//}

//function checkUser(){
 // let userName= document.getElementById('usrName').value;
  //const names= [Harry,Elizabeth,Shana];
  //for (let x in names){
  //  if(userName.includes(names[x]))
    //  alert('This name is taken')
  //}
//}

function checkUser(){
  let userName= document.getElementById('usrName').value;
  const names= [Harry,Elizabeth,Shana];
  if(names.includes(userName){
      alert('This name is taken')
  }
}
