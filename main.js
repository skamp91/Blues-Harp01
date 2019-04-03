function myAufbau() {
    document.getElementById('aufbau').parentElement.style.display = 'grid';
}
function myButtonAufbau() {
  document.getElementById('aufbau').parentElement.style.display = 'none';
}


function myTonbeleg() {
    document.getElementById('ton').parentElement.style.display = 'grid';
}
function myButtonTonbeleg() {
  document.getElementById('ton').parentElement.style.display = 'none';
}


function myStimm() {
    document.getElementById('stimm').parentElement.style.display = 'grid';
}
function myButtonStimm() {
  document.getElementById('stimm').parentElement.style.display = 'none';
}

function myModelle() {
  document.getElementById('modelle').parentElement.style.display = 'grid';
}
function myButtonModelle() {
  document.getElementById('modelle').parentElement.style.display = 'none';
}

function myIntro() {
  document.getElementById('intro').parentElement.style.display = 'grid';
}
function myButtonIntro() {
  document.getElementById('intro').parentElement.style.display = 'none';
}

function myEinzel() {
  document.getElementById('einzel').parentElement.style.display = 'grid';
}
function myButtonEinzel() {
  document.getElementById('einzel').parentElement.style.display = 'none';
}

function myHaltung() {
  document.getElementById('haltung').parentElement.style.display = 'grid';
}
function myButtonHaltung() {
  document.getElementById('haltung').parentElement.style.display = 'none';
}

function myVibrato() {
  document.getElementById('vibrato').parentElement.style.display = 'grid';
}
function myButtonVibrato() {
  document.getElementById('vibrato').parentElement.style.display = 'none';
}

function mySlide() {
  document.getElementById('slide').parentElement.style.display = 'grid';
}
function myButtonSlide() {
  document.getElementById('slide').parentElement.style.display = 'none';
}

function myKönig() {
  document.getElementById('könig').parentElement.style.display = 'grid';
}
function myButtonKönig() {
  document.getElementById('könig').parentElement.style.display = 'none';
}

function myBluesen() {
  document.getElementById('bluesen').parentElement.style.display = 'grid';
}
function myButtonBluesen() {
  document.getElementById('bluesen').parentElement.style.display = 'none';
}

function myLeicht() {
  document.getElementById('leicht').parentElement.style.display = 'grid';
}
function myButtonLeicht() {
  document.getElementById('leicht').parentElement.style.display = 'none';
}

function myAkkord() {
  document.getElementById('akkord').parentElement.style.display = 'grid';
}
function myButtonAkkord() {
  document.getElementById('akkord').parentElement.style.display = 'none';
}

function myÜbung() {
  document.getElementById('übung').parentElement.style.display = 'grid';
}
function myButtonÜbung() {
  document.getElementById('übung').parentElement.style.display = 'none';
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}