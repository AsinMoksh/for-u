function openEnvelope() {
  const envelope = document.getElementById("envelope");
  const letterText = document.getElementById("letterText");

  envelope.classList.remove("closed");
  envelope.classList.add("open");

  setTimeout(() => {
    letterText.classList.remove("hidden");
    letterText.classList.add("show");
  }, 600); // after transition
}
