console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Low- by Sza", filePath: "fhd/1.mp3", coverPath: "fhd/1.jpg"},
    {songName: "Legion-by The Weekend", filePath: "fhd/2.mp3", coverPath: "fhd/2.jpg"},
    {songName: "Arms around you-Xxxtentaction", filePath: "fhd/3.mp3", coverPath: "fhd/3.jpg"},
    {songName: "Pasoori-Coke Studio", filePath: "fhd/4.mp3", coverPath: "fhd/4.jpg"},
    {songName: "Remix-Unknown", filePath: "fhd/5.mp3", coverPath: "fhd/5.jpg"},
    {songName: "Heart wants what it wants-Selena Gomez", filePath: "fhd/6.mp3", coverPath: "fhd/6.jpg"},
    {songName: "It's you- Ali Gate", filePath: "fhd/7.mp3", coverPath: "fhd/7.jpg"},
];

// Update song items with cover images and names
songItems.forEach((element, i) => { 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
});

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.innerText = 'pause_circle_filled';
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.innerText = 'play_circle_filled';
        gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => { 
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100); 
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Reset all play buttons to play state
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.innerText = 'play_circle_filled';
    });
};

// Handle individual song play/pause
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => { 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.innerText = 'pause_circle_filled';
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.innerText = 'pause_circle_filled';
    });
});

// Handle next song
document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex >= songs.length - 1) ? 0 : songIndex + 1;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.innerText = 'pause_circle_filled';
});

// Handle previous song
document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex <= 0) ? songs.length - 1 : songIndex - 1;
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.innerText = 'pause_circle_filled';
});
















// console.log("Welcome to Spotify");

// // Initialize the Variables
// let songIndex = 0;
// let audioElement = new Audio('songs/1.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
// let songItems = Array.from(document.getElementsByClassName('songItem'));

// let songs = [
//     {songName: "Low- by Sza", filePath: "fhd/1.mp3", coverPath: "fhd/1.jpg"},
//     {songName: "Legion-by The Weekend", filePath: "fhd/2.mp3", coverPath: "fhd/2.jpg"},
//     {songName: "Arms around you-Xxxtentaction", filePath: "fhd/3.mp3", coverPath: "fhd/3.jpg"},
//     {songName: "Pasoori-Coke Studio", filePath: "fhd/4.mp3", coverPath: "fhd/4.jpg"},
//     {songName: "Remix-Unknown", filePath: "fhd/5.mp3", coverPath: "fhd/5.jpg"},
//     {songName: "Heart wants what it wants-Selena Gomez", filePath: "fhd/6.mp3", coverPath: "fhd/6.jpg"},
//     {songName: "It's you- Ali Gate", filePath: "fhd/7.mp3", coverPath: "fhd/7.jpg"},
// ];

// // Update song items with cover images and names
// songItems.forEach((element, i) => { 
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
// });

// // Handle play/pause click
// masterPlay.addEventListener('click', () => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play().catch(error => console.error("Error playing audio:", error));
//         masterPlay.classList.replace('fa-play-circle', 'fa-pause-circle');
//         gif.style.opacity = 1;
//     } else {
//         audioElement.pause();
//         masterPlay.classList.replace('fa-pause-circle', 'fa-play-circle');
//         gif.style.opacity = 0;
//     }
// });

// // Listen to Events
// audioElement.addEventListener('timeupdate', () => { 
//     // Update Seekbar
//     let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100); 
//     myProgressBar.value = progress;
// });

// myProgressBar.addEventListener('change', () => {
//     audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
// });

// // Reset all play buttons to play state
// const makeAllPlays = () => {
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//         element.classList.replace('fa-pause-circle', 'fa-play-circle');
//     });
// };

// // Handle individual song play/pause
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//     element.addEventListener('click', (e) => { 
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.replace('fa-play-circle', 'fa-pause-circle');
//         audioElement.src = songs[songIndex].filePath;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play().catch(error => console.error("Error playing audio:", error));
//         gif.style.opacity = 1;
//         masterPlay.classList.replace('fa-play-circle', 'fa-pause-circle');
//     });
// });

// // Handle next song
// document.getElementById('next').addEventListener('click', ()=>{
//         if(songIndex>=9){
//             songIndex = 0
//         }
//         else{
//             songIndex += 1;
//         }
//         audioElement.src = `fhd/${songIndex+1}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
    
//     })
    
//     document.getElementById('previous').addEventListener('click', ()=>{
//         if(songIndex<=0){
//             songIndex = 0
//         }
//         else{
//             songIndex -= 1;
//         }
//         audioElement.src = `fhd/${songIndex+1}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     })
    
    
    
    