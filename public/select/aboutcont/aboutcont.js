var title = document.getElementById("titletxt");
var backstory = document.getElementById("backstory");
var econ = document.getElementById("economy");
var ppl = document.getElementById("people");
var army = document.getElementById("army");


char = localStorage.getItem("char");
title.innerHTML = char;

if (char === "africa") {
  backstory.insertAdjacentHTML("beforeend", "Africa started this revolution by motivationally speaking their way to making all of Africa unite. However, their economy and army still needed some work")
  econ.style.width = "20vw";
  localStorage.setItem("econ", "20");
  ppl.style.width = "99vw";
  localStorage.setItem("ppl", "99");
  army.style.width = "15vw";
  localStorage.setItem("army", "15");
}

else if (char === "asia") {
  backstory.insertAdjacentHTML("beforeend", "Asia was the third start uniting. It started when Europe took away the Europe part of Russia. The Russian Government decided that they needed to unite Asia. So they took out their secret weapon, the nuke, and threatened the other countries with it. Every country in Asia surrendered to them unhappily, and handed over all their money and troops.")
  econ.style.width = "55vw";
  localStorage.setItem("econ", "55");
  ppl.style.width = "10vw";
  localStorage.setItem("ppl", "10");
  army.style.width = "85vw";
  localStorage.setItem("army", "95");
}

else if (char === "europe") {
  backstory.insertAdjacentHTML("beforeend", "Europe saw Africa unite so they decided to do so as well. Britain and France teamed up to take over Europe, but at the last second, Britain backstabbed France and took 100% of profits.")
  econ.style.width = "75vw";
  localStorage.setItem("econ", "75");
  ppl.style.width = "35vw";
  localStorage.setItem("ppl", "35");
  army.style.width = "85vw";
  localStorage.setItem("army", "85");
}

else if (char === "north america") {
  backstory.insertAdjacentHTML("beforeend", "A particularly orange president of USA decided that North America should become united as well, and took out his nukes as well. North America has a high economy and a large army, but unhappy citizens.")
  econ.style.width = "95vw";
  localStorage.setItem("econ", "95");
  ppl.style.width = "5vw";
  localStorage.setItem("ppl", "5");
  army.style.width = "86vw";
  localStorage.setItem("army", "86");
}

else if (char === "south america") {
  backstory.insertAdjacentHTML("beforeend", "South America decided to unite much like Africa, uniting with no voilence.")
  econ.style.width = "25vw";
  localStorage.setItem("econ", "25");
  ppl.style.width = "90vw";
  localStorage.setItem("ppl", "90");
  army.style.width = "45vw";
  localStorage.setItem("army", "45");
}

else if (char === "australia") {
  backstory.insertAdjacentHTML("beforeend", "However, nothing changed for Australia")
  econ.style.width = "65vw";
  localStorage.setItem("econ", "65");
  ppl.style.width = "75vw";
  localStorage.setItem("ppl", "75");
  army.style.width = "65vw";
  localStorage.setItem("army", "65");
}

else if (char === "antarctica") {
  backstory.insertAdjacentHTML("beforeend", "In Antarctica, emporer penguin became the emporer of Antarctica, wiping out all the other penguin tribes. Although they have a small economy from selling ice cream, they have a extremely powerful army.")
  econ.style.width = "0.00000001vw";
  localStorage.setItem("econ", "0.00000001");
  ppl.style.width = "99vw";
  localStorage.setItem("ppl", "99");
  army.style.width = "95vw";
  localStorage.setItem("army", "96");
}



econ.innerHTML = localStorage.getItem("econ") + "%";
ppl.innerHTML = localStorage.getItem("ppl") + "%";
army.innerHTML = localStorage.getItem("army") + "%";
localStorage.setItem("taxes", 25000);



function continues() {
  localStorage.setItem("loadgame", true);
  localStorage.setItem("pplflow", "-10");
  localStorage.setItem("cashflow", "25000");
  window.open("../../game", "_self");
}