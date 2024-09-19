const translate = document.querySelector(".translate");
translate.addEventListener("click", () => {
  let speech = true;
  window.SpeechRecognition = window.webkitSpeechRecognition;
  const converter = new SpeechRecognition();
  converter.interimResults = true;
  converter.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript);
    let textContainer = document.querySelector("#textContainer");
    textContainer.innerHTML = transcript;
  });
  if (speech == true) {
    converter.start();
  }
});
