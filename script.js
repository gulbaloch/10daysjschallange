
let display= document.getElementById('input');
function displayvalue(value){
  display.value+=value;
}
function cleartext()
{
  display.value='';
}
function calculate(){
  try{
    display.value=eval(display.value);
  }catch(error){
 display.value='Error'
  }   
}
