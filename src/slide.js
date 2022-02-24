let interval = 0;

let maxSlider = document.querySelectorAll(".box-image").length - 1;

sumir();

function sumir() {
  let img = document.querySelectorAll(".box-image img");
  let span = document.querySelector(".bolinhas");

  img[1].style.display = "none";
  img[2].style.display = "none";

  for (let i = 0; i < maxSlider + 1; i++) {
    if (i == 0) {
      span.innerHTML += '<span class="marcador"></span>';
    } else {
      span.innerHTML += "<span></span>";
    }
  }
}

acao();

function acao() {
  let img = document.querySelectorAll(".box-image img");
  let span = document.querySelectorAll(".bolinhas span");

  setInterval(function () {
    img[interval].style.display = "none";
    span[interval].classList.remove("marcador");
    interval++;
    if (interval > maxSlider) {
      interval = 0;
    }
    img[interval].style.display = "block";
    span[interval].classList.add("marcador");
  }, 5000);
}

controlador();

function controlador() {
  let img = document.querySelectorAll(".box-image img");
  document.querySelectorAll(".bolinhas span").forEach(function (valor, index) {
    valor.addEventListener("click", function () {
      img[interval].style.display = "none";
      interval = index;
      img[interval].style.display = "block";

      let div = document.querySelectorAll(".bolinhas span").length;

      if (div == 3) {
        document.querySelectorAll(".bolinhas span").forEach(function (valor) {
          valor.classList.remove("marcador");
        });
      }

      valor.classList.add("marcador");
    });
  });
}
