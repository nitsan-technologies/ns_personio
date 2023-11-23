const mainForm = document.querySelectorAll('.form');
if (mainForm.length) {
  mainForm.forEach((form) => {
    const formInputRequired = form.querySelectorAll('.form-control');
    const formButton = form.querySelector('.ns-personio-btn[type="submit"]');

    formInputRequired.forEach((input) => {
      if (formButton) {
        formButton.addEventListener('click', () => {
          if (!input.value) {
            input.classList.add('error');
            input.closest('.form-group').classList.add('form-group-error');
            if (input.nextElementSibling) {
              input.nextElementSibling.classList.add('invalid-feedback');
            }
            if (input.closest('.dropzone')) {
              input.closest('.dropzone').classList.add('form-group-error');
            }
          }
          if (input.getAttribute('name') === 'email' && input.value) {
            const emailValue = input.value;
            const validateEmail = emailValue.toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
            if (!validateEmail) {
              input.classList.add('error');
              input.closest('.form-group').classList.add('form-group-error');
              input.classList.remove('success');
              input.closest('.form-group').classList.remove('form-group-success');
            }
          }
          if (input.getAttribute('name') === 'phone' && input.value) {
            const phoneValue = input.value;
            const validatePhone = phoneValue.toLowerCase().match(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/);
            if (!validatePhone) {
              input.classList.add('error');
              input.closest('.form-group').classList.add('form-group-error');
              input.classList.remove('success');
              input.closest('.form-group').classList.remove('form-group-success');
            }
          }
          if (input.getAttribute('name') === 'salary_expectations' && input.value) {
            if (input.value < 0 ) {
              input.classList.add('error');
              input.closest('.form-group').classList.add('form-group-error');
              input.classList.remove('success');
              input.closest('.form-group').classList.remove('form-group-success');
            }
          }
        });
      }

      input.addEventListener('blur', () => {
        if (input.value) {
          input.classList.remove('error');
          if (input.nextElementSibling) {
            input.nextElementSibling.classList.remove('invalid-feedback')
          }
          input.closest('.form-group').classList.remove('form-group-error');
          input.classList.add('success');
          input.closest('.form-group').classList.add('form-group-success');
        } else {
          input.classList.add('error');
          input.closest('.form-group').classList.add('form-group-error');
          input.classList.remove('success');
          input.closest('.form-group').classList.remove('form-group-success');
        }
      });
    });

    form.addEventListener('submit', (event) => {
      form.classList.add('was-validated');
      if (document.getElementById('document-dropzone-cv').classList.contains('error')) {
        form.classList.remove('was-validated');
        event.preventDefault();
        event.stopPropagation();
      }
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, false);
  });
}
