window.addEventListener('resize', function(event) {
  opencloseNav();
  opencloseNav();
});

function opencloseNav() {
  vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  if (vw > 450 && vh > 450) {
    if (document.getElementById("openclosemenu").innerHTML != "☰ Open Menu") {
      document.getElementById("mySidebar").style.width = "0px";
      document.getElementById("openclosemenu").style.width = "191px";
      document.getElementById("openclosemenu").style.fontSize = "20px";
      document.getElementById("openclosemenu").style.lineHeight = "2.5";
      document.getElementById("openclosemenu").style.left = "-70px";
      document.getElementById("openclosemenu").style.transform = "rotate(90deg)";
      document.getElementById("openclosemenu").style.borderBottom = "50px solid rgba(99, 99, 99, 0.25)";
      document.getElementById("openclosemenu").style.top = "50%";
      document.getElementById("openclosemenu").innerHTML = "☰ Open Menu";
    } else {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("openclosemenu").style.width = "300px";
      document.getElementById("openclosemenu").style.fontSize = "30px";
      document.getElementById("openclosemenu").style.lineHeight = "1.75";
      document.getElementById("openclosemenu").style.left = "126px";
      document.getElementById("openclosemenu").innerHTML = "☰ Close Menu";
    }
  } else {
    if (document.getElementById("openclosemenu").innerHTML != "☰ Open Menu") {
      document.getElementById("mySidebar").style.width = "0px";
      document.getElementById("openclosemenu").style.left = "-70px";
      document.getElementById("openclosemenu").style.width = "191px";
      document.getElementById("openclosemenu").style.transform = "rotate(90deg)";
      document.getElementById("openclosemenu").style.borderBottom = "50px solid rgba(99, 99, 99, 0.25)";
      document.getElementById("openclosemenu").style.top = "25%";
      document.getElementById("openclosemenu").style.fontSize = "20px";
      document.getElementById("openclosemenu").style.lineHeight = "2.5";
      document.getElementById("openclosemenu").innerHTML = "☰ Open Menu";
    } else {
      document.getElementById("openclosemenu").style.width = "193px";
      document.getElementById("openclosemenu").style.borderBottom = "50px solid rgba(99, 99, 99, 0)";
      document.getElementById("mySidebar").style.width = vw + "px";
      document.getElementById("openclosemenu").style.left = vw - 120 + "px";
      document.getElementById("openclosemenu").style.transform = "rotate(270deg)";
      document.getElementById("openclosemenu").style.top = "25%";
      document.getElementById("openclosemenu").style.fontSize = "20px";
      document.getElementById("openclosemenu").style.lineHeight = "2.5";
      document.getElementById("openclosemenu").innerHTML = "☰ Close Menu";
    }
  }
}