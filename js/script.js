window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loadingPage").style.opacity = "0";
    document.getElementById("loadingPage").style.transition =
      "opacity 0.5s ease";
    setTimeout(() => {
      document.getElementById("loadingPage").style.display = "none";
    }, 500);
  }, 2000);
});
