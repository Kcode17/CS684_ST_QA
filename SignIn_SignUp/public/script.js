(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

function passwdCheck(text){
  var regexcheck = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/;
  if(text.value.match(regexcheck))
  {
    let textElement = document.getElementById('pwMessage');
    textElement.innerHTML += 'Password accepted';
  }
  else{
    let textElement = document.getElementById('pwMessage');
    textElement.innerHTML += 'Password does not meet the minimum criteria.!';
  }
}