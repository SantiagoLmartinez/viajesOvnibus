function openDrawerMenu(){
    var x = document.getElementById("mainNavBar");
    if (x.className === "navBar1"){
      x.className += " responsive";
    } else {
      x.className = "navBar1";
    }
  }