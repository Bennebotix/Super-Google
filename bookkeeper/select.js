summary = document.getElementById("summary")
localStorage.clear();


function select(x) {
  if (x == 'africa') {
    localStorage.setItem("char", "africa");
  }


  if (x == 'asia') {
    localStorage.setItem("char", "asia");
  }


  if (x == 'europe') {
    localStorage.setItem("char", "europe");
  }


  if (x == 'nAmerica') {
    localStorage.setItem("char", "north america");
  }


  if (x == 'sAmerica') {
    localStorage.setItem("char", "south america");
  }


  if (x == 'australia') {
    localStorage.setItem("char", "australia");
  }
  

  if (x == 'antarctica') {
    localStorage.setItem("char", "antarctica");
  }

  window.open("/select/aboutcont/aboutcont.html", "_self");
}
