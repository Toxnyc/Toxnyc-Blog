// Iniciando o style do chat

chattable.initialize({
    stylesheet: "osr/chattable.css"
});

// Seleção dos elementos do DOM
let track_name = document.querySelector('.track-name');
let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');
let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');

// Variáveis principais
let track_index = 0;
let isPlaying = false;
let updateTimer;
let curr_track = new Audio(); // Inicializa o objeto de áudio

// Lista de músicas
const music_list = [
    {
        name: 'Too old to be cool - jaspertine',
        music: 'osr/packages/music/jaspertine_-_Too_old_to_be_cool_8.mp3',
        image: 'osr/packages/music/img/jaspertine.jpg'
    },
    {
        name: 'still i - sleeperspaceborn',
        music: 'osr/packages/music/sleeperspaceborn_-_still_i.mp3',
        image: 'osr/packages/music/img/sleeperspaceborn.png'
    },
    {
        name: 'Venom - echo_orbit',
        music: 'osr/packages/music/echo_orbit_-_Venom.mp3',
        image: 'osr/packages/music/img/echo_orbit.jpg'
    },
    {
        name: 'redlightriot - sleeperspaceborn',
        music: 'osr/packages/music/sleeperspaceborn_-_redlightriot_2.mp3',
        image: 'osr/packages/music/img/sleeperspaceborn.png'
    },
    {
        name: 'never grow old. - sleeperspaceborn',
        music: 'osr/packages/music/sleeperspaceborn_-_never_grow_old._1.mp3',
        image: 'osr/packages/music/img/sleeperspaceborn.png'
    },
    {
        name: 'dark rose - sleeperspaceborn',
        music: 'osr/packages/music/sleeperspaceborn_-_dark_rose.mp3',
        image: 'osr/packages/music/img/sleeperspaceborn.png'
    },
    {
        name: 'Sacred Light - Aussens@iter',
        music: 'osr/packages/music/tobias_weber_-_Sacred_Light.mp3',
        image: 'osr/packages/music/img/Aussens_iter.jpg'
    },
    {
        name: 'Sound Effects Volume One - Apoxode',
        music: 'osr/packages/music/Apoxode_-_Sound_Effects_Volume_One.mp3',
        image: 'osr/packages/music/img/apoxode.jpg'
    }
];

// Carrega a música inicial
loadTrack(track_index);

// Função para carregar uma música
function loadTrack(track_index) {
    clearInterval(updateTimer);
    reset();

    // Atualiza o objeto de áudio com a música atual
    curr_track.src = music_list[track_index].music;
    curr_track.load();

    // Atualiza o nome da música
    track_name.textContent = music_list[track_index].name;

    // Atualiza a imagem do álbum
    let track_art = document.querySelector('.track-art');
    track_art.style.backgroundImage = `url('${music_list[track_index].image}')`;

    // Configura o temporizador de atualização do tempo
    updateTimer = setInterval(setUpdate, 1000);

    // Avança automaticamente para a próxima música ao final da atual
    curr_track.addEventListener('ended', nextTrack);
}


// Reseta os valores dos elementos de tempo e slider
function reset() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

// Controla o botão de play/pause
function playpauseTrack() {
    isPlaying ? pauseTrack() : playTrack();
}

// Inicia a reprodução
function playTrack() {
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '<div class="pause"></div>';
}

// Pausa a reprodução
function pauseTrack() {
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<div class="play"></div>';
}

// Avança para a próxima música
function nextTrack() {
    track_index = (track_index + 1) % music_list.length;
    loadTrack(track_index);
    playTrack();
}

// Retorna à música anterior
function prevTrack() {
    track_index = (track_index - 1 + music_list.length) % music_list.length;
    loadTrack(track_index);
    playTrack();
}

// Atualiza a posição do slider de progresso e os tempos
function setUpdate() {
    let seekPosition = 0;
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}

// Ajusta o volume
function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}

// Controla a posição da reprodução
function seekTo() {
    let seekTo = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekTo;
};



//                                   BOTÕES



document.addEventListener('DOMContentLoaded', function () {

    const instagramButton = document.querySelector('.social-instagram');
    const steamButton = document.querySelector('.social-steam');
    const githubButton = document.querySelector('.social-github');
    const spotifyButton = document.querySelector('.social-spotify');
    const neocitiesButton = document.querySelector('.social-neocities');



    if (instagramButton) {
        instagramButton.addEventListener('click', function () {
            window.open('https://www.instagram.com/toxnyc/', '_blank');
        });
    }

    if (steamButton) {
        steamButton.addEventListener('click', function () {
            window.open('https://steamcommunity.com/profiles/76561198894007460/', '_blank');
        });
    }

    if (githubButton) {
        githubButton.addEventListener('click', function () {
            window.open('https://github.com/toxnyc', '_blank');
        });
    }

    if (spotifyButton) {
        spotifyButton.addEventListener('click', function () {
            window.open('https://open.spotify.com/user/314bjvsq3bqlvwdixy2lyhcjay2u', '_blank');
        });
    }

    if (neocitiesButton) {
        neocitiesButton.addEventListener('click', function () {
            window.open('https://neocities.org/site/toxnyc', '_blank');
        });
    }
})