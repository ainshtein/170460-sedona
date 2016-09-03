  var link = document.querySelector(".btn_header");
  var popup = document.querySelector("form");
  var date = popup.querySelector("[name=date-start]");

  link.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.toggle("show");
    date.focus();
  });
  popup.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Отправка");
  });