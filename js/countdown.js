
// Set the date we're counting down to
var countDownDate = new Date("Aug,14 2021 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="countdown"
  // document.getElementById("countdown").innerHTML = days + "días " + hours + "horas "
  // + minutes + "minutos " + seconds + "s ";
  document.getElementById("countdown").innerHTML = "(Faltan " + days + " días con " + hours + " horas y " + minutes + " minutos)";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "¡Nos dimos el sí quiero!";
  }
}, 1000);