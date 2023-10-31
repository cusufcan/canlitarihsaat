let userName = prompt("Adınız: ");
document.querySelector("#myName").innerHTML = userName;

var clockDOM = document.querySelector("#myClock");

function showTime() {
  var date = new Date();
  clockDOM.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${getDayName(
    date.getDay()
  )}`;
}

setInterval(showTime, "1");

function getDayName(dayIndex) {
  switch (dayIndex) {
    case 1:
      return "Pazartesi";
    case 2:
      return "Salı";
    case 3:
      return "Çarşamba";
    case 4:
      return "Perşembe";
    case 5:
      return "Cuma";
    case 6:
      return "Cumartesi";
    case 7:
      return "Pazar";
    default:
      return "N/A";
  }
}
