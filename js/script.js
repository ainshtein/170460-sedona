  // ------------- form.js ----------- //
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

  // ------------- map.js ----------- //
  ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [34.92252305732218,-111.69566357861325],
            zoom: 10,
            controls: []
        });
 
    myPlacemark = new ymaps.Placemark(
      [34.86318938116738,-111.81067670117184], 
      { 
        hintContent: 'Седона', 
        balloonContent: 'СЕДОНА — небольшой городок в АРИЗОНЕ, заслуживающий большего!' 
      },
      {
        iconLayout: 'default#image',
        iconImageHref: './img/marker.png',
        iconImageSize: [42, 59],
        iconImageOffset: [-20, -62]
      });

    myMap.behaviors.disable('scrollZoom');
 
    myMap.geoObjects.add(myPlacemark);
  }