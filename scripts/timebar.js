function resetTimeBar() {
  const timeBar = document.getElementById("time-bar");
  timeBar.classList.remove("time-bar");

  void timeBar.offsetWidth;

  timeBar.classList.add("time-bar");
}
