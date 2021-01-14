$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#Voter Info').show();
  } else {
    $('#under-18').show();
  }
});