setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("menu").style.display = "block";
}, 4000);
function openFarman() {
  window.location.href = "farman-rehbar-kamil.html";
}
function openKanoon() {
  window.location.href = "kanoon-rehbar-kamil.html";
}
function openNamazMutarjam() {
  window.location.href = "namaz-mutarjam.html";
}


function openNaats() {
  window.location.href = "naats.html";
}

function openAayat() {
  window.location.href = "aayat-book.html";
}
function openHadith() {
  window.location.href = "hadith.html";
}
function openKhatm() {
  window.location.href = "khatm-e-shareef.html";
}
function openAwradFatiha() {
  window.location.href = "awrad-e-fatiha.html";
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}
window.addEventListener("load", () => {
  const msg = document.getElementById("loadingMsg");
  if (msg) {
    setTimeout(() => {
      msg.style.display = "none";
    }, 4000);
  }
});


if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js");
  });
}
document.querySelectorAll("#menu li").forEach(btn => {
  btn.addEventListener("click", () => {
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  });
});
