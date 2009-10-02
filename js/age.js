function tick() {
  var age = (new Date().getTime() - new Date().setTime(453900600000)) / 31536000000;
  document.getElementById("age").innerHTML = age.toFixed(8);
}