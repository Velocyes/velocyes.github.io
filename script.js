const ghostImage = document.getElementById('ghostImage');
const screamSound = document.getElementById('screamSound');
const creepyMusic = document.getElementById('creepyMusic');
const heartbeatSound = document.getElementById('heartbeatSound');

creepyMusic.play();
creepyMusic.volume = 0.1;

setTimeout(() => {
    creepyMusic.volume = 0.5;
    heartbeatSound.play();
    heartbeatSound.loop = true;
    heartbeatSound.volume = 0.1;
}, 5000);

setTimeout(() => {
    ghostImage.src = "https://www.creepypasta.com/wp-content/uploads/2012/06/Jeff-the-Killer.jpg"; // Gambar Jeff the Killer
    ghostImage.style.display = 'block';
    ghostImage.style.filter = 'blur(0px) brightness(1) invert(0)'; // Kembalikan gambar ke normal
    screamSound.play();
    heartbeatSound.pause();

    if ("vibrate" in navigator) {
        navigator.vibrate([1000, 500, 1000]);
    }

    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    }
}, 15000);