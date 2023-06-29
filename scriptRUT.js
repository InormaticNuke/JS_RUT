function isValidRut(rut) {
    rut = rut.replace(/[\.-]/g, '');
    var rutDigits = rut.slice(0, -1);
    var verificationDigit = rut.slice(-1).toLowerCase();
  
    var module = 11;
    var sum = 0;
    var multiplier = 2;

    for (var i = rutDigits.length - 1; i >= 0; i--) {
      sum += parseInt(rutDigits.charAt(i)) * multiplier;
      multiplier = (multiplier + 1) % 8 || 2;
    }
  
    var calculatedVerificationDigit = (module - (sum % module)).toString();
    calculatedVerificationDigit = (calculatedVerificationDigit === '10') ? 'k' : calculatedVerificationDigit;
  
    return (calculatedVerificationDigit === verificationDigit);
  }
  
  function validateRut() {
    var rutInput = document.getElementById('rut');
    var rut = rutInput.value;
    var isValid = isValidRut(rut);
  
    var resultMessage = document.getElementById('result');
  
    if (isValid) {
      resultMessage.textContent = 'The RUT is valid.';
    } else {
      resultMessage.textContent = 'The RUT is not valid.';
    }
  }
  