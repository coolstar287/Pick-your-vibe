const vibeSounds = {
  "calm-night": "sounds/calm-night.mp3",
  "soft-daydream": "sounds/soft-daydream.mp3",
  "cosmic": "sounds/cosmic.mp3",
  "calm-days": "sounds/calm-days.mp3"
};

const bgSound = document.getElementById("bgSound");

function setVibe(vibe) {
  console.log("VIBE:", vibe);
  console.log("SOUND PATH:", vibeSounds[vibe]);

  document.body.className = vibe;

  bgSound.pause();
  bgSound.src = vibeSounds[vibe];
  bgSound.volume = 0.4;

  bgSound.play()
    .then(() => console.log("🔊 playing"))
    .catch(err => console.error("❌ play error:", err));
}

