  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

  });

function postalCodeValidation()
{
    const str = document.getElementById('postalcode').value;
    
    var postalCodeAlert = document.getElementById('postalcode-alert');

    if(!((/^[A-Z][0-9][A-Z][0-9][A-Z][0-9]$/.test(str) ))){

      postalCodeAlert.style.display="block";
      
      postalCodeAlert.innerHTML = "Postal Code must be a valid one";
      
      postalCodeFlag = false;
      
    }
    else{

      postalCodeAlert.style.display="none";

      postalCodeFlag = true;

    }
} 

const radioButtons = document.querySelectorAll('input[name="qch"]');
const hiring = document.getElementById('ishiring');
const hiringYes = document.getElementById('hiringYes');

for(const radioButton of radioButtons){
    radioButton.addEventListener('change', (e) => {
      if (hiring.checked) {
        hiringYes.style.display = 'block';
      }
      else{
        hiringYes.style.display = 'none';
      }
    });
}        



const name = document.getElementById('name');
const email = document.getElementById('email');
const address = document.getElementById('address');
const city = document.getElementById('cityname');
const postalcode = document.getElementById('postalcode');
const message = document.getElementById('msg');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) =>{
  let msgs = [];
  if(name.value === '' || name.value === null){
    msgs.push('Name is required');
  }

  if (msgs.length > 0){
    e.preventDefault();
    errorElement.innerText = msgs.join(', ')
  }
    
});