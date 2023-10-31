// const mainForm = document.querySelectorAll('.form');

// if (mainForm.length) {
//   mainForm.forEach((form) => {
//     const formInputRequired = form.querySelectorAll('.form-control');
//     const formButton = form.querySelector('.btn[type="submit"]');

//     formInputRequired.forEach((input) => {
//       if (formButton) {
//         formButton.addEventListener('click', () => {
//           if (!input.value) {
//             input.classList.add('error');
//             input.closest('.form-group').classList.add('form-group-error');
//             if (input.closest('.dropzone')) {
//               input.closest('.dropzone').classList.add('form-group-error');
//             }
//           }
//         });
//       }

//       input.addEventListener('blur', () => {
//         if (input.value) {
//           input.classList.remove('error');
//           input.closest('.form-group').classList.remove('form-group-error');
//           input.classList.add('success');
//           input.closest('.form-group').classList.add('form-group-success');
//         } else {
//           input.classList.add('error');
//           input.closest('.form-group').classList.add('form-group-error');
//           input.classList.remove('success');
//           input.closest('.form-group').classList.remove('form-group-success');
//         }
//       });
//     });

//     form.addEventListener('submit', (event) => {
//       form.classList.add('was-validated');
//       if (!form.checkValidity()) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
//     }, false);
//   });
// }

// // Email Validation

// const inputEmail = document.querySelectorAll("[type='email']");

// const isEmpty = (str) => !str.trim().length;
// const validReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// const checkEmail = ($val) => {
//   if ($val.match(validReg)) {
//     return true;
//   }
// };

// if (inputEmail) {
//   inputEmail.forEach(($email) => {
//     $email.addEventListener('blur', () => {
//       if (!checkEmail($email.value)) {
//         $email.closest('.form-group').classList.add('form-group-error');
//         $email.closest('.form-group').classList.add('field-message');
//       } else {
//         $email.closest('.form-group').classList.remove('form-group-error');
//         $email.closest('.form-group').classList.remove('field-message');
//       }
//       if (!isEmpty($email.value)) {
//         $email.closest('.form-group').classList.remove('form-group-error');
//       } else {
//         $email.closest('.form-group').classList.remove('field-message');
//       }
//     });
//   });
// }

// // Phone Validation
// const inputPhone = document.querySelectorAll("[type='tel']");

// const isEmptyPhone = (str) => !str.trim().length;
// const validRegPhone = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;

// const checkPhone = ($val) => {
//   if ($val.match(validRegPhone)) {
//     return true;
//   }
// };

// if (inputPhone) {
//   inputPhone.forEach(($phone) => {
//     $phone.addEventListener('blur', () => {
//       if (!checkPhone($phone.value)) {
//         $phone.closest('.form-group').classList.add('field-message');
//       } else {
//         $phone.closest('.form-group').classList.remove('field-message');
//       }
//       if (!isEmptyPhone($phone.value)) {
//         $phone.closest('.form-group').classList.remove('form-group-error');
//       } else {
//         $phone.closest('.form-group').classList.add('field-message');
//       }
//     });
//   });
// }

// function equalHeight(resize) {
//   const elements = document.getElementsByClassName('job-data');
//   const allHeights = [];
//   let i = 0;
//   if (resize === true) {
//     for (i = 0; i < elements.length; i = +1) {
//       elements[i].style.height = 'auto';
//     }
//   }

//   for (i = 0; i < elements.length; i = +1) {
//     const elementHeight = elements[i].clientHeight;
//     allHeights.push(elementHeight);
//   }
//   for (i = 0; i < elements.length; i = +1) {
//     elements[i].style.height = `${Math.max.apply(Math, allHeights)}px`;
//     if (resize === false) {
//       elements[i].className = `${elements[i].className} show`;
//     }
//   }
// }

// setTimeout(() => {
//   (function () {
//     equalHeight(false);
//   }());
//   window.onresize = function () {
//     equalHeight(true);
//   };
// }, 500);
