// JavaScript Document

 const form = document.getElementById('form');

 var user = document.getElementById('user');
 var email = document.getElementById('email');
 var number = document.getElementById('number');
 var pass = document.getElementById('pass');
 var cpass = document.getElementById('cpass');
 
 form.addEventListener('submit', e => {
  e.preventDefault();
  if(validate() === true){
   alert(ok);
  }
 });
 
 var isEmail = (emailv) => {
  var atS = emailv.indexOf('@');
  if(atS < 1) return false;
  var dot = emailv.lastIndexOf('.');
  if(dot <= atS+2) return false;
  if(dot == emailV.length - 1) return false;
  return true;
 }
 
 var validate = () => {
  var userVal = user.value.trim();
  var emailVal = email.value.trim();
  var numberVal = number.value.trim();
  var passVal = pass.value.trim();
  var cpassVal = cpass.value.trim();
  
  if(userVal === ''){
   setErr(user,'Fill Out Username');
  }else if(userVal.length < 4){
   setErr(user,'Username Must Be 4-20 Char');
  }else if(userVal.length > 20){
   setErr(user,'Username Must Be 4-20 Char');
  }else{
   setMsg(user);
  }
  
  if(emailVal === ''){
   setErr(email,'Fill Out Email');
  }else if(!isEmail(emailVal)){
   setErr(email,'Email Not Valid');
  }else{
   setMsg(email);
  }
  
  if(numberVal === ''){
   setErr(number,'Fill Out Mobile No.');
  }else if(numberVal.length != 10){
   setErr(number,'Mobile No. Not Valid');
  }else{
   setMsg(number);
  }
  
  if(passVal === ''){
   setErr(pass,'Fill Out Password');
  }else if(passVal.length < 6){
   setErr(pass,'Password Must Be 6-20 Char');
  }else if(passVal.length > 20){
   setErr(pass,'Password Must Be 6-20 Char');
  }else{
   setMsg(pass);
  }
  
  if(cpassVal === ''){
   setErr(cpass,'Fill Out Confirm Password');
  }else if(cpassVal != passVal){
   setErr(cpass,"Password Didn't Match");
  }else{
   setMsg(cpass);
  }
  
  return true;
  
 }
 
 var setErr = (input,msg) => {
  var frmc = input.parentElement;
  var span = frmc.querySelector('span');
  frmc.className = 'in-gr error';
  span.innerText = msg;
 }
 
 var setMsg = (input) => {
  var frmc = input.parentElement;
  frmc.className = 'in-gr success';
 }