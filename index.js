var btnYes = document.getElementById("btn-yes");
var btnNo = document.getElementById("btn-no");
var questionBody = document.getElementById("cont-quiestion");
var cont = 0;
opNo = () => {
  console.log(btnNo);
  let min = 50;
  btnNo.style.position = "fixed";
  btnNo.style.left =
    Math.random() * (window.screenLeft - min + 300) + min + "px";
  btnNo.style.top = Math.random() * (window.screenTop - min + 250) + min + "px";
  cont++;
  console.log(cont);
  if (cont === 5) {
    document.getElementById("cont-para").innerHTML = `<h2>Hey :( why?</h2>`;
    document.getElementById("cont-para").style.backgroundColor = "White";
    document.getElementById("cont-para").style.color = "Black";
  }
  if (cont === 10) {
    document.getElementById("cont-para").innerHTML = ``;
    document.getElementById("cont-para").style.backgroundColor = "Darkgrey";
    document.getElementById("cont-para").style.color = "Red";
    document.getElementById(
      "cont-para"
    ).innerHTML = `<h2>Hahahahha, stoooppp!</h2>`;
  }
  if (cont === 15) {
    document.getElementById("cont-para").innerHTML = ``;
    document.getElementById("cont-para").style.backgroundColor = "Black";
    document.getElementById("cont-para").style.color = "White";
    document.getElementById(
      "cont-para"
    ).innerHTML = `<h2>Now you only have "Yes" :D</h2>`;
    btnNo.style.visibility = "hidden";
  }
};

opYes = () => {
  document.getElementById("cont-para").innerHTML = ``;
  document.getElementById("cont-para").style.backgroundColor = "Hotpink";
  document.getElementById("cont-para").style.color = "White";
  document.getElementById("cont-para").innerHTML = `<h2>Yeeih, thanks <3</h2>`;
}; /*window.onload = () => {
  btnNo.addEventListener("mouseover", function (e) {});
  if (btnNo.addEventListener) {
    for (let i = 0; i < 1000; i++) {
      let min = 50;
      btnNo.style.position = "fixed";
      btnNo.style.left =
        Math.random() * (window.screen.width - min) + min + "px";
      btnNo.style.top =
        Math.random() * (window.screen.height - min) + min + "px";
      if ((i = 4)) {
        document.getElementById("cont-para").innerHTML = "";
        document.getElementById(
          "cont-para"
        ).innerHTML = `<h2>No insistas y dale que si.</h2>`;
      }
    }
  }
};*/

window.onload = () => {
  btnNo.addEventListener("mouseover", function (e) {
    console.log(btnNo);
    let min = 20;
    btnNo.style.position = "absolute";
    btnNo.style.left =
      Math.random() * (window.screenLeft - min + 300) + min + "px";
    btnNo.style.top =
      Math.random() * (window.screenTop - min + 250) + min + "px";
    cont++;
    console.log(cont);
    if (cont === 5) {
      document.getElementById("cont-para").innerHTML = `<h2>Hey :( why?</h2>`;
      document.getElementById("cont-para").style.backgroundColor = "White";
      document.getElementById("cont-para").style.color = "Black";
    }
    if (cont === 10) {
      document.getElementById("cont-para").innerHTML = ``;
      document.getElementById("cont-para").style.backgroundColor = "Darkgrey";
      document.getElementById("cont-para").style.color = "Red";
      document.getElementById(
        "cont-para"
      ).innerHTML = `<h2>Hahahahha, stoooppp!</h2>`;
    }
    if (cont === 15) {
      document.getElementById("cont-para").innerHTML = ``;
      document.getElementById("cont-para").style.backgroundColor = "Black";
      document.getElementById("cont-para").style.color = "White";
      document.getElementById(
        "cont-para"
      ).innerHTML = `<h2>Now you only have "Yes" :D</h2>`;
      btnNo.style.visibility = "hidden";
    }
  });
};
console.log(cont);
