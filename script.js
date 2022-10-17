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
//function showPwd() {
 // let myInput=document.getElementsByTagName('input');
 // let rePassWord=document.getElementById('passWrdreEntr').value;
  //if(myInput.type === "password") {
//myInput.type = "text";}
  //}