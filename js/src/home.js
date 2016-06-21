/**
 * Home page JS
 */
(function() {
  const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
  const CONTACT_POST_URL = 'https://formspree.io/info@guildsports.com';
  let contactForm = document.getElementById('gsm-contact-form');
  let formErrors = contactForm.getElementsByClassName('error');
  let clientRows = document.getElementById('clients').getElementsByClassName('client-row');
  let mobileNavMenu = document.getElementById('gsm-menu');
  let testimonialCount = 0;
  let formErrorObj = {};

  function constructFormData(formInputs) {
    let formData = {};

    for (var i = 0; i < formInputs.length; i++) {
      let formInput = formInputs[i];
      formData[formInput.getAttribute('name')] = formInput.value;
    }

    return formData;
  }

  /**
   * Takes in form data and returns an object of errors
   * name, email, subject, message
   */
  function validateFormData(formData) {
    let errors = {};

    for (let key in formData) {
      if (key === 'email') {
        if (!EMAIL_REGEX.test(formData.email)) {
          errors.email = 'Please enter a valid email address';
        }
      } else {
        if (!formData[key].trim()) {
          errors[key] = `Please enter a valid ${key}`;
        }
      }
    }

    return errors;
  }

  function clearForm() {
    let formInputs = contactForm.querySelectorAll('input, textarea');

    for (var i = 0; i < formInputs.length; i++) {
      formInputs[i].value = '';
    }

    clearFormErrors();
  }

  function clearFormErrors() {
    for (var i = 0; i < formErrors.length; i++) {
      formErrors[i].innerHTML = '';
    }
  }

  function displayFormSuccess() {
    contactForm.style.display = 'none';
    document.getElementsByClassName('gsm-form-ty')[0].style.display = 'block';
  }

  function displayFormErrors(formErrors) {
    clearFormErrors();

    for (var error in formErrors) {
      let text = formErrors[error];
      if (text) {
        formErrorObj[error].innerHTML = text;
      }
    }
  }

  function submitFormData(formData) {
    let data = new FormData(); // NOTE: this is ie10+
    let request = new XMLHttpRequest(formData);

    request.open('POST', CONTACT_POST_URL, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    for (var key in formData) {
      data.append(key, formData[key]);
    }
    request.send(data);
  }

  function handleClientRowClick(e) {
    window.location.href = e.currentTarget.getAttribute('data-href');
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    let formData = constructFormData(contactForm.querySelectorAll('input, textarea'));
    let formErrors = validateFormData(formData);

    if (Object.keys(formErrors).length) {
      displayFormErrors(formErrors);
    } else {
      submitFormData(formData);
      clearForm();
      displayFormSuccess();
    }
  }

  function handleMenuClick(e) {
    mobileNavMenu.classList.toggle('active');
  }

  document.getElementById('contact-form-submit').addEventListener('click', handleFormSubmit);
  document.getElementById('gsm-menu-trigger').addEventListener('click', handleMenuClick);

  for (var i = 0; i < clientRows.length; i++) {
    clientRows[i].addEventListener('click', handleClientRowClick);
  }

  for (var i = 0; i < formErrors.length; i++) {
    let error = formErrors[i];
    formErrorObj[error.getAttribute('data-error-type')] = error;
  }

}());
