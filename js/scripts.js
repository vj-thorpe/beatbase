const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');


  burger.addEventListener('click', ()=> {
      //toggle nav
      nav.classList.toggle('nav-active');

      //animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
        }
    });
    //burger Animation
    burger.classList.toggle('toggle');
  });
};

navSlide();

function matchpass()
{
  var password=document.f1.pass.value;
  var confirmpass=document.f1.cfpass.value;

  if(password==confirmpass)
  {
  Alert2.render("You are logged in!");
  return true;
  }
  else
  {
  Alert.render("Passwords do not match.");
  return false;
  }

}

document.querySelectorAll('.input-container[data-error] .input').forEach(inpEl => {
  inpEl.addEventListener('input', () => inpEl.parentElement.removeAttribute('data-error'));
});

function CustomAlert() {
  this.render = function(dialog) {
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.getElementById('dialogoverlay');
    var dialogbox = document.getElementById('dialogbox');
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH+"px";
    dialogbox.style.left = (winW/2) - (550 * .5)+"px";
    dialogbox.style.top = "100px";
    dialogbox.style.display = "block";
    document.getElementById('dialogboxhead') .innerHTML = "〄 beatbase community";
    document.getElementById('dialogboxbody') .innerHTML = dialog;
    document.getElementById('dialogboxfoot') .innerHTML = '<button id="alertclose" style="background-color: hsl(225, 100%, 60%)"; "color: powderblue"; onclick="Alert.ok()"> ✘ </button>';
  };
  this.ok = function() {
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
  };
}
var Alert = new CustomAlert();

function LoggedInAlert() {
  this.render = function() {
    var dialogoverlay2 = document.getElementById('dialogoverlay2');
    dialogoverlay2.style.display = "block";
    document.getElementById('loggedin');
  };
  this.ok = function() {
    document.getElementById('dialogoverlay2').style.display = "none";
  };
}
var Alert2 = new LoggedInAlert();

const readmorebutton = document.querySelector('.readmorebutton');
const text = document.querySelector('.seeabletext');

readmorebutton.addEventListener('click',()=>{
  text.classList.toggle('show-more');
  if(readmorebutton.innerText === 'Read More'){
    readmorebutton.innerText = 'Read Less';
  }else{
    readmorebutton.innerText = 'Read More';
  }
});

function checkforblank() {
  if (document.getElementById('email').value == "") {
    Alert.render('Please enter your email.');
    document.getElementById('email').style.borderColor = "red";
    return false;
    }
    else {
      Alert.render('You have been added to our exclusive mailing list!');
      return true;
    }

}
