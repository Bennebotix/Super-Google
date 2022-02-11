console.log("<== Ayo man, what you doin here. ==>")
console.log("<==     https://www.egggg.ga     ==>")
console.log("<==           ( ͡° ͜ʖ ͡°)           ==>")
console.log("Since you're here, run the command m() to see a secret!");

function m() {
  window.open("https://www.egggg.ga", "_self");
  return "You fool, you fell for my ruse";
}

load = localStorage.getItem("loadgame");
if (load !== "true") {
}


window.onbeforeunload = function() {
  reset();
  homepage.style.transitionDuration = "0s";
  shoppage.style.transitionDuration = "0s";
  statspage.style.transitionDuration = "0s";
  homepage.style.left = "0vw";
  shoppage.style.left = "100vw";
  statspage.style.left = "200vw";
  link.href = '../img/home.png';
}



//GET ELEMENT AREA

//Pages
var homepage = document.getElementById("home-page");
var shoppage = document.getElementById("shop-page");
var statspage = document.getElementById("stats-page");

//Modal stuff
var modal = document.getElementById("modal");
var modover = document.getElementById("modaloverlay");
var modtitle = document.getElementById("modal-title");
var moddesc = document.getElementById("modal-desc");
var modbuta = document.getElementById("modalbuta");
var modbutb = document.getElementById("modalbutb");

//Home page stats
var namecont = document.getElementById("namecont");

var coinamt = document.getElementById("coinamt");
var pplamt = document.getElementById("pplamt");
var armyamt = document.getElementById("armyamt");


//Home page actions
var laborbag = document.getElementById("labor");
var labortxt = document.getElementById("labortxt");

var atkdiv = document.getElementById("attackdiv");

var atka = document.getElementById("atkspana");
var atkb = document.getElementById("atkspanb");
var atkc = document.getElementById("atkspanc");
var atkd = document.getElementById("atkspand");
var atke = document.getElementById("atkspane");
var atkf = document.getElementById("atkspanf");

var atkna = document.getElementById("atknamea");
var atknb = document.getElementById("atknameb");
var atknc = document.getElementById("atknamec");
var atknd = document.getElementById("atknamed");
var atkne = document.getElementById("atknamee");
var atknf = document.getElementById("atknamef");

var atkda = document.getElementById("atka");
var atkdb = document.getElementById("atkb");
var atkdc = document.getElementById("atkc");
var atkdd = document.getElementById("atkd");
var atkde = document.getElementById("atke");
var atkdf = document.getElementById("atkf");


var tax = document.getElementById("tax");
var taxspan = document.getElementById("taxspan");
var ppltaxspan = document.getElementById("ppltaxspan");

//Shop page stuff
var shopcashspan = document.getElementById("shopcashspan");
var shopcash = document.getElementById("cashicontop");
var shopcashpos = document.getElementById("shopcashpos");
var shopicon = document.getElementById("shopicontop");
var shoptop = document.getElementById("toptitlediv");
var shoptoptxt = document.getElementById("toptitle");

//Stats map
var conts = document.getElementsByClassName("cont");

//Economy choice
var capitalism = document.getElementById("trump");
var socialism = document.getElementById("winnie");
var communism = document.getElementById("putin");

//Win
var win = document.getElementById("win");
var winc = document.getElementById("wincash");
var wina = document.getElementById("winapproval");
var wins = document.getElementById("winstronk");


//-------------------------------------------------------
//VARIABLES

//Cash vars
var cash = 0.01 * Number(localStorage.getItem("econ")) * 4000000000;
var cashflow = Number(localStorage.getItem("cashflow"));
var taxes = Number(localStorage.getItem("taxes"));
var taxesppl = taxes / -2500;

//Ppl vars
var ppl = Number(localStorage.getItem("ppl"));
var pplflow = Number(localStorage.getItem("pplflow"));

//Army var
var army = Number(localStorage.getItem("army"));

//Name vars
var char = localStorage.getItem("char");
var name = char;




//Land vars
var land = ["africa", "antarctica", "north america", "south america", "europe", "asia", "australia"];
var landarmy = [15, 96, 86, 45, 85, 95, 65];
var landown = [char];
var landnot = [];
var landnotarmy = [];

//Labor vars
var laborclix = 0;
var laboryn = true;

//Economy choice
var choiceflowc = 50000;
var choiceflowp = 0;
var choiceflowa = 0;


//-------------------------------------------------------
//FUNCTIONS


//------------------------
//RNG function
function rng(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


//------------------------
//Function that runs on start
function start() {
  var i = 0
  while (i < land.length) {
    if (landown.includes(land[i]) == false) {
      landnot.push(land[i]);
      landnotarmy.push(landarmy[i]);
    }
    i++;
  }

  if (localStorage.getItem("landnot") !== null) {
    landnot = localStorage.getItem("landnot").split(",");
    landnotarmy = localStorage.getItem("landnotarmy").split(",");
    cashflow = Number(localStorage.getItem("cashflow"));
    pplflow = Number(localStorage.getItem("pplflow"));
  }




  reset();
  setInterval(function(){daily();}, 60000);
}

//------------------------
//Number reducer function
const formatn = n => {
  if (n < 1e3) return n.toFixed(2);
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(8) + " K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(8) + " M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(8) + " B";
  if (n >= 1e12) return +(n / 1e12).toFixed(8) + " T";
};

//------------------------
//Daily functions
function daily() {
  pplflow = Number(pplflow).toFixed(2);
  laboryn = true;
  ppl = Number(ppl) + Number(pplflow);
  cash = Number(cash) + Number(cashflow);
  cash = Number(cash) + Number(choiceflowc);
  ppl = Number(ppl) + Number(choiceflowp);
  army = Number(army) + Number(choiceflowa);

  var badyn = rng(1,3);
  if (ppl <= 0 && badyn == 2) {
    modals("red", "No approval", "Your people hate you and launche a coup, killing the entire government. GG.", "Close", false);
    lose();
  }

  else if (ppl <= 0) {
    modals("red", "No approval", "Your people hate you and launche a coup, but you use your army and defend yourself.", "Close", false);
    army = army - 50;
  }

  else if (ppl < 21) {
    modals("red", "Low approval", "Your people are unhappy and start a riot. Say goodbye to the 8 stronks and $100, 000 you spent on taming the riot!", "Close", false);
    cash = cash - 100000;
    ppl = ppl - 2;
    army = army - 8;
  }
  



  reset();

  var gatkrng = rng(1, 50);
  if (gatkrng == 5) {
    var atker = rng(0, landnot.length - 1);
    var result = army - landnotarmy[atker]
    if (Math.sign(result) == 1) {
      modals("green", "Victory!", "You get attacked by " + landnot[atker] + " but you manage to win. You take over " + landnot[atker] + " but you lose " + landnotarmy[atker] + " Stronks.", "Close", false);
      army = result;
      landnot = landnot.filter(item => item !== landnot[atker]);
      landnotarmy = landnotarmy.filter(item => item !== landnotarmy[atker]);
      ppl = ppl + 5;
      reset();
    }
    

    else if (Math.sign(result) == 0) {
      modals("blue", "Stalemate!", "You get attacked by " + landnot[atker] + " so you all lose your armies", "Close", false);
      army = 0;
      landnot[atker] = 0;
      landnotarmy[atker] = 0;
      reset();
    }

    else {
      modals("red", "Loss!", "You get attacked by " + landnot[atker] + " and lose! GG", "Close", false);
      lose();
      reset();
    }
  }
}

//Reset function
function reset() {
  pplflow = Number(pplflow).toFixed(2);
  namecont.innerHTML = name;


  coinamt.innerHTML = formatn(cash);
  shopcashspan.innerHTML = formatn(cash);
  if (ppl > 100) {
    ppl = 100;
  }

  else if (ppl < 0) {
    ppl = 0;
  }

  pplamt.innerHTML = formatn(ppl) + "% approval";

  if (army < 0) {
    army = 0;
  }

  armyamt.innerHTML = formatn(army) + " Stronks";



  landown = [];
  if (landnot.includes("north america") == false) {
    conts[0].style.filter = "brightness(0.1)";
    landown.push("north america");
  }

  else {
    conts[0].style.filter = "brightness(1)";
  }

  if (landnot.includes("south america") == false) {
    conts[1].style.filter = "brightness(0.1)";
    landown.push("south america");
  }

  else {
    conts[1].style.filter = "brightness(1)";
  }

  if (landnot.includes("europe") == false) {
    conts[2].style.filter = "brightness(0.1)";
    landown.push("europe");
  }

  else {
    conts[2].style.filter = "brightness(1)";
  }

  if (landnot.includes("africa") == false) {
    conts[3].style.filter = "brightness(0.1)";
    landown.push("africa");
  }

  else {
    conts[3].style.filter = "brightness(1)";
  }

  if (landnot.includes("asia") == false) {
    conts[4].style.filter = "brightness(0.1)";
    landown.push("asia");
  }

  else {
    conts[4].style.filter = "brightness(1)";
  }

  if (landnot.includes("australia") == false) {
    conts[5].style.filter = "brightness(0.1)";
    landown.push("australia");
  }

  else {
    conts[5].style.filter = "brightness(1)";
  }

  if (landnot.includes("antarctica") == false) {
    conts[6].style.filter = "brightness(0.1)";
    landown.push("antarctica");
  }

  else {
    conts[6].style.filter = "brightness(1)";
  }

  taxf(0);

  function aR(arr, value) { 
    return arr.filter(function(ele){ 
        return ele != value; 
    });
  }

  for (var landp in landnot) {
    if (!land.includes(landp)) {
      landnot = aR(landnot, landp);
    }
  }

  if (landnot.length == 0) {
    modals("green", "Supreme Victory", "You have won with $"+cash+", "+ppl+"% approval, and "+army+" Stronks. Press the reset button in the stats page to reset or keep playing if you want.", "Close", false);
  }

  localStorage.setItem("econ", cash / 4000000000 / 0.01);
  localStorage.setItem("ppl", ppl);
  localStorage.setItem("army", army);
  localStorage.setItem("laboryn", laboryn);
  localStorage.setItem("landnot", landnot);
  localStorage.setItem("landnotarmy", landnotarmy);
  localStorage.setItem("cashflow", cashflow);
  localStorage.setItem("pplflow", pplflow);
  localStorage.setItem("taxes", taxes)
}


//------------------------
//Change page function
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
  }
  link.href = '../img/home.png';
function change(x) {
  if (x == 'home') {
    homepage.style.left = "0vw";
    shoppage.style.left = "100vw";
    statspage.style.left = "200vw";
    link.href = '../img/home.png';
  }

  else if (x == 'shop') {
    homepage.style.left = "-100vw";
    shoppage.style.left = "0vw";
    statspage.style.left = "100vw";
    link.href = '../img/shop.png';
  }

  else if (x == 'stats') {
    homepage.style.left = "-200vw";
    shoppage.style.left = "-100vw";
    statspage.style.left = "0vw";
    link.href = '../img/stats.png';
  }
}

//------------------------
//Modal functions
function modals(color, title, desc, buta, butb) {
  modal.style.top = "0";
  modover.style.display = "block";


  if (color == "red") {
    var colour = "#DD1A1A"
  }

  else if (color == "blue") {
    var colour = "#1A3EDD"
  }

  else if (color == "green") {
    var colour = "#32CD32"
  }

  else {
    var colour = color;
  }


  modtitle.style.backgroundColor = colour;
  modtitle.innerHTML = title;
  moddesc.innerHTML = desc;
  if (buta === false) {
    modbuta.style.display = "none";
  }
  
  else {
    modbuta.innerHTML = buta;
    modbuta.addEventListener("click", function() {
      return "1";
    });
  }

  if (butb === false) {
    modbutb.style.display = "none";
  }
  
  else {
    modbutb.innerHTML = buta;
    modbuta.addEventListener("click", function() {
      return "2";
    });
  }
}


function modalout() {
    modal.style.top = "-100vh";
    modover.style.display = "none";
}


//------------------------
//RNG button function
function rngbut() {
  rng(0, 5)
}


//------------------------
//Home page options function

function option(x) {
  laborclix = 0;
  var optiongb = rng(1, 3);
  if (optiongb == 1) {
    optiongb = true
  }
  else {
    optiongb = false
  }


  if (x == '1' && laboryn == true) {
    modover.style.display = "block";
    modover.style.opacity = "0.9";
    laborbag.style.display = "block";
    labortxt.style.display = "block";
    setTimeout(function(){
      laborbag.style.display = "none";
      labortxt.style.display = "none";


        setTimeout(function(){
          modover.style.opacity = "0.5";
          modover.style.display = "none";
          var laborearn = laborclix * 10000
          modals("green", "Labor", "Your labor earned you $" + laborearn + " and increased your approval by 5%.", "Close", false);
          cash = cash + laborearn;
          ppl = ppl + 5;
          laboryn = false;
          reset();
        }, 750);


    }, 5000);
  }

  else if (x == '1' && laboryn == false) {
    modals("red", "Labor", "Doing too much labor can hurt your back. Lay off it a bit!", "Close", false);
  }
  
  else if (x == '2') {
    if (landown.length == 7) {
      modals("blue", "You won tho", "You have already beat everybody! You tell this to your people and they think that you have amnesia, making you lose 10% approval.", "Close", false);
      ppl = ppl - 10;
    }

    else {
      modover.style.display = "block";
      modover.style.opacity = "0.9";
      atkdiv.style.display = "block";

      atkda.style.display = "none";
      atkdb.style.display = "none";
      atkdc.style.display = "none";
      atkdd.style.display = "none";
      atkde.style.display = "none";
      atkdf.style.display = "none";

      var i = 0
      while (i < landnot.length) {
        if (i == 0) {
          atkna.innerHTML = landnot[i];
          atka.innerHTML = landnotarmy[i] + " stronks";
          atkda.style.display = "block";
        }

        else if (i == 1) {
          atknb.innerHTML = landnot[i];
          atkb.innerHTML = landnotarmy[i] + " stronks";
          atkdb.style.display = "block";
        }

        else if (i == 2) {
          atknc.innerHTML = landnot[i];
          atkc.innerHTML = landnotarmy[i] + " stronks";
          atkdc.style.display = "block";
        }

        else if (i == 3) {
          atknd.innerHTML = landnot[i];
          atkd.innerHTML = landnotarmy[i] + " stronks";
          atkdd.style.display = "block";
        }

        else if (i == 4) {
          atkne.innerHTML = landnot[i];
          atke.innerHTML = landnotarmy[i] + " stronks";
          atkde.style.display = "block";
        }

        else if (i == 5) {
          atknf.innerHTML = landnot[i];
          atkf.innerHTML = landnotarmy[i] + " stronks";
          atkdf.style.display = "block";
        }

        i++;
      }
    }
  }

  else if (x == '3') {
    modover.style.opacity = "0.9";
    modover.style.display = "block";
    tax.style.display = "block";
  }

  else if (x == "4") {
    if (optiongb == true && ppl > 20) {
      var donation = rng(1000, 1000000);
      modals("green", "Donations", "You recieve $" + donation + " but you lose 10% approval because your people don't like giving out money.", "Close", false);
      cash = cash + donation;
      ppl = ppl - 20;
    }

    else if (ppl < 21) {
      modals("red", "Donations", "Nobody loves you so you get no money.", "Close", false);
    }

    else if (optiongb == false) {
      modals("blue", "Donations", "Nobody wants to give money.", "Close", false);
      ppl = ppl + 1;
    }
  }

  else if (x == '21') {
    modover.style.opacity = "0.5";
    modover.style.display = "none";
    atkdiv.style.display = "none";
  }

  else if (x == '31') {
    modover.style.opacity = "0.5";
    modover.style.display = "none";
    tax.style.display = "none";
  }

  reset();
}

function labor() {
  laborclix ++;
}

function taxf(x) {
  taxes += x;
  if (taxes < 0) {
    taxes = 0;
    taxesppl = 0;
  }
  else {
    cashflow += x;
    pplflow = Number(pplflow) + Number(x) / (-2500);
    taxesppl = taxesppl + x / -2500;
  }
  taxspan.innerHTML = "Average tax: " + formatn(taxes) + " per person";
  ppltaxspan.innerHTML = "Approval lost every minute: " + formatn(-1 * taxesppl);
}

function atk(x) {
  modover.style.opacity = "0.5";
  modover.style.display = "none";
  atkdiv.style.display = "none";
  var atker = x - 1;

  var help = rng(1,10);
  var result = army - landnotarmy[atker];
  if (help == 2 && landnot.length > 1) {
    var helperrng = x;
    while (helperrng == x) {
      var helperrng = rng(1, landnot.length - 1);
    }
    var helper = landnot[helperrng];
    result = result - landnotarmy[helperrng - 1];

    if (Math.sign(result) == 1) {
      modals("green", "Victory!", "You have won the war and took over " + landnot[atker] + " and " + landnot[helperrng - 1] + ". During the war, " + landnot[helperrng - 1] + " came and helped " + landnot[atker] + ". However, your great power destroyed them, but not before losing " + (landnotarmy[atker] + landnotarmy[helperrng - 1]) + " Stronks.", "Close", false);
      army = result;
      landnot = landnot.filter(item => item !== landnot[atker]);
      landnotarmy = landnotarmy.filter(item => item !== landnotarmy[atker]);

      landnot = landnot.filter(item => item !== landnot[helperrng - 1]);
      landnotarmy = landnotarmy.filter(item => item !== landnotarmy[helperrng - 1]);
      ppl = ppl + 5;
      reset();
    }
    

    else if (Math.sign(result) == 0) {
      modals("blue", "Stalemate!", "You have a stalemate with " + landnot[atker] + " and " + landnot[helperrng - 1] + "(who came to help in the war) so you all lose your armies", "Close", false);
      army = 0;
      landnot[atker] = 0;
      landnotarmy[atker] = 0;
      landnot[helperrng - 1] = 0;
      landnotarmy[helperrng - 1] = 0;
      reset();
    }

    else {
      modals("red", "Loss!", "You lost against " + landnot[atker] + " and " + landnot[helperrng - 1] + " (who came to help in the war). GG.", "Close", false);
      modover.style.display = "block";
      lose(x);
      reset();
    }
  }

  else {
    if (Math.sign(result) == 1) {
      modals("green", "Victory!", "You have won the war and took over " + landnot[atker] + ". However, you lost " + landnotarmy[atker] + " Stronks.", "Close", false);
      army = result;
      landnot = landnot.filter(item => item !== landnot[atker]);
      landnotarmy = landnotarmy.filter(item => item !== landnotarmy[atker]);
      ppl = ppl + 2;
      reset();
    }
    

    else if (Math.sign(result) == 0) {
      modals("blue", "Stalemate!", "You have a stalemate with " + landnot[atker] + " and you both lose your armies", "Close", false);
      army = 0;
      landnot[atker] = 0;
      landnotarmy[atker] = 0;
      reset();
    }

    else {
      modals("red", "Loss!", "You lost against " + landnot[atker] + ". GG.", "Close", false);
      modover.style.display = "block";
      lose(x);
      reset();
    }
  }

  reset()
}




//------------------------
//Shop functions

function shopscroll() {
  if (shoppage.scrollTop == 0) {
    shoptop.style.padding = "5vh";
    shoptop.style.height = "40vh";
    shopcashpos.style.marginTop = "10vh";
    shopcashpos.style.height = "20vh";
    shopcashspan.style.fontSize = "10vh";
    shopcash.style.height = "auto";
    shopcash.style.width = "6vw";
    shopcash.style.paddingTop = "0";
    shopcashpos.style.minWidth = "1vw";
    shopcashpos.style.padding = "0";
    shopcashpos.style.paddingRight = "0vh";
    shopcashpos.style.paddingTop = "2vh";
    shopcashpos.style.paddingBottom = "0";
    shopicon.style.height = "auto";
    shopicon.style.width = "22vh";
    shoptoptxt.style.fontSize = "10vw";
    shoptoptxt.style.paddingLeft = "5vw";
    shoptoptxt.style.paddingTop = "0";
    shopicon.style.margin = "0.15vw";
  }

  else {
    shoptop.style.padding = "0";
    shoptop.style.height = "11vh";
    shopcashpos.style.marginTop = "0";
    shopcashpos.style.height = "11vh";
    shopcashspan.style.fontSize = "5vh";
    shopcash.style.height = "5vh";
    shopcash.style.width = "auto";
    shopcash.style.paddingTop = "2vh";
    shopcashpos.style.width = "48vw";
    shopcashpos.style.padding = "0.75vh";
    shopcashpos.style.paddingBottom = "2vh";
    shopicon.style.height = "7.2vh";
    shoptoptxt.style.fontSize = "6vh";
    shoptoptxt.style.paddingLeft = "1vw";
    shoptoptxt.style.paddingTop = "0.1vh";
    shopicon.style.width = "auto";
    shopicon.style.margin = "0";
    shopicon.style.padding = "0.25vw";
  }
}

function buy(pr, cf, pf, a, p) {
  if (cash < pr) {
    modals("Red", "Poor", "You are too poor to afford this!", "Close", false);
  }

  else {
    cashflow = Number(cashflow);
    cash = Number(cash);
    pplflow = Number(pplflow);
    cash = cash - pr;
    cashflow = cashflow + cf;
    pplflow = pplflow + pf;
    army = army + a;
    ppl = ppl + p;
    var message = [];
    if (cf !== 0) {
      message.push(" $" + formatn(cashflow) + " every min");
    }

    if (pf !== 0) {
      message.push(" " + formatn(pplflow) + "% approval every min");
    }

    if (a !== 0) {
      message.push(" " + formatn(a) + " Stronks (One time)")
    }

    if (p !== 0) {
      message.push(" " + formatn(p) + "% approval (One time)")
    }

    modals("Green", "Success", "Purchase successful! You now get:" + message.join(",") + ".", "Close", false);
  }

  reset();
}



function filter() {
  var input, filter, stuff, a, i, txtValue;
  input = document.getElementById('input');
  filter = input.value.toUpperCase();
  stuff = document.getElementsByClassName('card');

  for (i = 0; i < stuff.length; i++) {
    a = stuff[i].getElementsByTagName("p")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      stuff[i].style.display = "";
    } else {
      stuff[i].style.display = "none";
    }
  }
}

function prop() {
  var propyn = rng(1,5);
  var lose = rng(10, 45);
  if (propyn == 3) {
    modals("red", "Faker!", "People have found out that your propoganda is false! You lose " + lose + "% Approval", "Close", false)
    ppl = ppl - lose - 10
  }

  else {
    ppl = ppl + 10;
  }


  reset();
}

function celebration() {
  var gb = rng(1,100);
  if (gb % 2 == 0 && cash > 80000) {
    var celeb = rng(8, 15);
    modals("green", "Celebration", "You pay $800K and your peoples' approval goes up by " + celeb + "%.", "Close", false);
    cash = cash - 80000;
    ppl = ppl + celeb;
  }

  else if (cash < 80001) {
    modals("red", "Poor", "You are too poor to afford this!", "Close", false);
  }

  else if (gb == 2) {
    modals("blue", "Celebration", "Nobody goes to your celebration.", "Close", false);
    cash = cash - 80000;
  }
}

//------------------------
//Map onclick
function map() {
  option('2');
  change('home');
}

//------------------------
//Economy choice thing
function choice(x) {
  if (x == 1) {
    choiceflowc = 50000;
    choiceflowp = 0;
    choiceflowa = 0;
    capitalism.style.backgroundColor = "blue";
    socialism.style.backgroundColor = "rgb(0, 173, 173)";
    communism.style.backgroundColor = "rgb(0, 173, 173)";
  }

  else if (x == 2) {
    choiceflowc = 0;
    choiceflowp = 0;
    choiceflowa = 1;
    capitalism.style.backgroundColor = "rgb(0, 173, 173)";
    socialism.style.backgroundColor = "blue";
    communism.style.backgroundColor = "rgb(0, 173, 173)";
  }

  else if (x == 3) {
    choiceflowc = -5000;
    choiceflowp = 0;
    choiceflowa = 5;
    capitalism.style.backgroundColor = "rgb(0, 173, 173)";
    socialism.style.backgroundColor = "rgb(0, 173, 173)";
    communism.style.backgroundColor = "blue";
  }
}


//------------------------
//Lose function
function lose() {
  setTimeout(function(){
    localStorage.clear();
    location.reload();
  }, 3000);
}
