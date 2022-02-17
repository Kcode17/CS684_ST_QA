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



  function validateForm() {
    let pw = document.forms["signIn"]["Password"].value;
    console.log(pw.length);
    if (pw == "") {
        let textElement = document.getElementById('pwMessage');
        textElement.innerHTML += 'Please enter a valid password.!';
    }
    
    else if ( pw.length <= 8 ){
        
        let textElement = document.getElementById('pwMessage');
        textElement.innerHTML += 'Password lenght should be more than 8 characters.!';
        
    }
    return false;

}