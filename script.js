// Music Player
const songs = [
  {title: "Roadmad", src: "dv.mp3"},
  {title: "Forever Young", src: "fy.mp3"},
  {title: "Unreleased", src: "ha.mp3"},
  {title: "The man who can't be moved", src: "sd.mp3"},
  {title: "Lady Killer", src: "tk.mp3"}
];

let currentSong = 0;

const audio = document.getElementById("audio");
const musicTitle = document.getElementById("musicTitle");

function loadSong(song) {
  audio.src = song.src;
  musicTitle.textContent = song.title;
}

document.getElementById("play").addEventListener("click", function() {
  audio.play();
})
document.getElementById("pause").addEventListener("click", function() {
  audio.pause();
})

document.getElementById("prev").addEventListener("click", function() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  
  loadSong(songs[currentSong]);
  audio.play();
});

document.getElementById("next").addEventListener("click", function() {
  currentSong = (currentSong + 1) % songs.length;
  
  loadSong(songs[currentSong]);
  audio.play();
});

loadSong(songs[currentSong]);