function majority() {
  var age = document.getElementById('age').value;
  var regex = /^1?[0-9]?[0-9]+$/;
  if((regex.test(age)) && (age > 0)){
    if (age >= 18) {
      alert('Vous êtes majeur.');
    }
    else {
      alert('Vous êtes mineur.');
    }
  }
  else {
    alert('Ceci n\'est pas un nombre.');
  }
}
