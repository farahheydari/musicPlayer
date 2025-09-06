let firstMusic= document.getElementById('first-music')
const audioPlay = document.querySelector('#audio-play')
const sec_two = document.querySelector('#music-two')
const sec_tree= document.querySelector('#music-three')
const sec_four = document.querySelector('#music-four')
const main =document.querySelector('.main')
const temp = document.getElementById('temp')
const sideMenu=document.getElementById('sideMenu')
const btn = document.getElementById('btn')
const musicArray=[
    {
        id: '1',
        artistName: 'Billi Eilish',
        artistMusic: 'ilomilo',
        img: 'img/bili.jpg',
        musicImg: 'img/bili.jpg',
        time: '2:36',
        src: 'Audio/11 ilomilo.m4a'
    },
        {
        id: '2',
        artistName: 'Taylor Swift ',
        artistMusic: 'coney island',
        img: 'img/taylor4.jpg',
        musicImg: 'img/taylor4.jpg',
        time: '4:35',
        src: 'Audio/09 coney island (feat. The National).m4a'
    },
        {
        id: '3',
        artistName: 'PostMalon',
        artistMusic: 'take what..',
        img: 'img/postMalon.jpg',
        musicImg: 'img/postMalon.jpg',
        time: '3:49',
        src: 'Audio/09 Take What You Want (feat. Ozzy Os.m4a'
    },
    {
        id: '4',
        artistName: 'Taylor Swift',
        artistMusic: 'dorothea',
        img: 'img/taylor2.jpg',
        musicImg: 'img/taylor2.jpg',
        time: '3:45',
        src: 'Audio/08 dorothea.m4a'
    },
        {
        id: '5',
        artistName: 'Billi Eilish',
        artistMusic: 'ilomilo',
        img: 'img/bili4.jpg',
        musicImg: 'img/bili4.jpg',
        time: '4:51',
        src: 'Audio/13 i love you.m4a'
    },
 
    {
        id: '6',
        artistName: 'PostMalon',
        artistMusic: 'Im gonna be',
        img: 'img/postMalon2.jpg',
        musicImg: 'img/postMalon2.jpg',
        time: '3:20',
        src: 'Audio/10 Im Gonna Be.m4a'
    },
    {
        id: '7',
        artistName: 'Taylor Swift',
        artistMusic: 'to lerate it',
        img: 'img/taylor3.jpg',
        musicImg: 'img/taylor3.jpg',
        time: '4:05',
        src: 'Audio/05 tolerate it.m4a'
    },
    {
        id: '8',
        artistName: 'Billi Eilish',
        artistMusic: 'Therefore I Am',
        img: 'img/bili3.jpg',
        musicImg: 'img/bili3.jpg',
        time: '2:54',
        src: 'Audio/1 - Therefore I Am.flac'
    },
    {
        id: '9',
        artistName: 'kako band',
        artistMusic: 'invite',
        img: 'img/cakoband2.jpg',
        musicImg: 'img/cakoband2.jpg',
        time: '4:01',
        src: 'Audio/01. Invite (Hoco Hoco) [320].mp3'
    },
    {
        id: '10',
        artistName: 'Shayea',
        artistMusic: 'injaneb',
        img: 'img/shaye2.jpg',
        musicImg: 'img/shaye2.jpg',
        time: '4:27',
        src: 'Audio/02 - Injaneb.mp3'
    },
    {
        id: '11',
        artistName: 'Sogand',
        artistMusic: 'Ayne Ayne',
        img: 'img/sogand.jpg',
        musicImg: 'img/sogand.jpg',
        time: '3:39',
        src: 'Audio/Sogand - Ayne Ayne [320].mp3'
    },
    {
        id: '12',
        artistName: 'kako band',
        artistMusic: 'paradise',
        img: 'img/cakomand3.jpg',
        musicImg: 'img/cakomand3.jpg',
        time: '3:06',
        src: 'Audio/Kako Band - Paradise.mp3'
    },
    {
        id: '13',
        artistName: 'Googoosh',
        artistMusic: 'hejrat',
        img: 'img/gogosh.jpg',
        musicImg: 'img/gogosh.jpg',
        time: '5:31',
        src: 'Audio/Googoosh - Hejrat [320].mp3'
    },
    {
        id: '14',
        artistName: 'Hayedeh',
        artistMusic: 'bade forosh',
        img: 'img/haydeh.jpg',
        musicImg: 'img/haydeh.jpg',
        time: '4:19',
        src: 'Audio/Hayedeh - Badeh Forush.mp3'
    },
      {
        id: '15',
        artistName: 'Ebi',
        artistMusic: 'derakht',
        img: 'img/ebi.jpg',
        musicImg: 'img/ebi.jpg',
        time: '6:50',
        src: 'Audio/Ebi - Derakht.mp3'
    },
    {
        id: '16',
        artistName: 'Googoosh',
        artistMusic: 'hamsafar',
        img: 'img/gogosh3.jpg',
        musicImg: 'img/gogosh3.jpg',
        time: '4:29',
        src: 'Audio/Googoosh - Hamsafar [320].mp3'
    },

  
]


document.addEventListener('DOMContentLoaded', () => {
    setFirstMusic()
    setMusicTwo()
    setMusicThree()
    setMusicFour()
    showPlay(musicArray[0])
})
        // auto slider///

btn.addEventListener('click' , ()=>{
    sideMenu.style.opacity=1
    sideMenu.style.zIndex='9999'
    sideMenu.classList.add('w-[300px]')
    sideMenu.style.transition='1s'
    window.addEventListener('mousedown' , ()=>{
        sideMenu.style.opacity=0
        sideMenu.style.zIndex='0'
})
})


function setFirstMusic(){
    let setFistmusic = musicArray.slice(0,4)
    let x=''

    setFistmusic.forEach((val)=>{
        x+=`
            <figure data-id="${val.id}" class="music">
                <img src="${val.img}" alt="" class="w-full h-full rounded-xl object-cover">
                <span class="absolute bottom-9 right-8 font-bold text-white">${val.artistName}</span>
                <span class="absolute bottom-4 right-8 text-sm text-white">${val.artistMusic}</span>
            </figure>
        `
    })  
    firstMusic.innerHTML=x


    const music = document.querySelectorAll('.music')
    music.forEach(val => {

        val.addEventListener('click', setToPlay)
    })
}

/////////////////sec2///////////////////////
function setMusicTwo(){
    let selectMUsicTwo=musicArray.slice(4 , 8)
    let x= ' '
    selectMUsicTwo.forEach((val)=>{
        x+=`
          <figure class="group musicTwo" data-id="${val.id}">
                        <img src="${val.musicImg}" alt=""
                            class="w-[97%] h-48 rounded-[40%] object-cover group-hover:opacity-60 transition-all duration-300">
                        <span class="flex  text-white mt-4 gap-1 absolute right-18  ">
                            <i class="bi bi-music-note"></i>
                            ${val.artistMusic}
                        </span>
                        <span class="text-white text-opacity-50  text-sm bottom-5 md:bottom-20 absolute right-10 ">${val.artistName}</span>
                    </figure>
        `
   
    })
       sec_two.innerHTML=x
    const music=document.querySelectorAll('.musicTwo')
    music.forEach((val)=>{
  
        val.addEventListener('click' , setToPlay)
    })
}
    
//////////////////////////////sec-3////////////////////////
function setMusicThree(){
    let x=''
    let selectMusicThree=musicArray.slice(8,12)
    selectMusicThree.forEach((val)=>{
        x+=`
                 <figure class="group musicThree" data-id="${val.id}">
                        <img src="${val.musicImg}" alt=""
                            class="w-[100%] h-[70%] rounded-xl object-cover group-hover:opacity-60 transition-all duration-300">
                        <span class="flex  text-white gap-1 absolute right-18  ">
                            <i class="bi bi-music-note"></i>
                            ${val.artistMusic}
                        </span>
                        <span class="text-white text-opacity-50  text-sm bottom-40 md:bottom-40 absolute right-10 ">${val.artistName}</span>
                    </figure>
        `
    })
    sec_tree.innerHTML=x
    const music = document.querySelectorAll('.musicThree')
        music.forEach((val)=>{
    
            val.addEventListener('click' , setToPlay)
        })
    
}
/////////////////////sec4////////////////////
function setMusicFour(){
    let x=''
    let selectMusicThree=musicArray.slice(12,17)
    selectMusicThree.forEach((val)=>{
        x+=`
                 <figure class="group musicFour" data-id="${val.id}">
                        <img src="${val.musicImg}" alt=""
                            class="w-[100%] h-[70%] rounded-xl object-cover group-hover:opacity-60 transition-all duration-300">
                        <span class="flex  text-white mt-4 gap-1 absolute right-18  ">
                            <i class="bi bi-music-note"></i>
                            ${val.artistMusic}
                        </span>
                    </figure>
        `
    })
    sec_four.innerHTML=x
    const music = document.querySelectorAll('.musicFour')
        music.forEach((val)=>{
            val.addEventListener('click' , setToPlay)

        })
    
}


/////////////////////////showplay//////////////////////////
 
function setToPlay(e) {
    audioPlay.style.bottom=0
    let selectedMusic = musicArray.find(m => m.id == e.target.parentElement.dataset.id)
    showPlay(selectedMusic, true)
}

function showPlay(selectedMusic, shouldPlay = false) {
    let x = `<audio src="${selectedMusic.src}" hidden id="audio"></audio>
               <figure class="hidden md:flex items-center gap-3 md:absolute md:right-70 md:top-10" data-id="${selectedMusic.id}">
                    <img src="${selectedMusic.musicImg}" id="imgAudio" alt="" class="w-80 h-80 rounded-full object-cover object-center audioAnime">
                    <div class="flex flex-col">
                        <span class="font-bold text-white textAudio">${selectedMusic.artistName}</span>
                        <span class="text-sm text-white musicNAme" >${selectedMusic.artistMusic}</span>
                    </div>
            </figure>
                <div id="progress-bar" class="w-[90%] md:w-[97%] flex justify-start h-[4px] overflow-hidden bg-transparent absolute top-2 md:top-100 left-[1.5%] rounded-md cursor-pointer">
                    <div id="progress" class="w-0 transition-all duration-100 h-full bg-neutral-200"></div>
                </div>
 
            <div class="flex items-center gap-12 flex-row-reverse mt-2">
                <span id="start-time">00:00</span>
                <div class="flex items-center gap-4 flex-row-reverse">
                    <i class="bi bi-caret-right text-2xl cursor-pointer" id="next-music" title="next"></i>
                    <span data-music-id="" id="play-music"
                            class="w-11 h-11 rounded-full bg-icon shadow-btn flex justify-center items-center pt-1 cursor-pointer">
                            <i class="bi bi-play-fill text-2xl"></i>
                    </span>
                    <i class="bi bi-caret-left text-2xl cursor-pointer" id="prev-music" title="previous"></i>

                </div>
                <span>${selectedMusic.time}</span>
                <i class="bi bi-arrow-repeat text-2xl cursor-pointer" id="repeat-music" title="repeat"></i>
            </div>
            <div class="hidden lg:flex flex-row-reverse items-center gap-6 md:absolute md:left-5">
                <input type="range" min="0" max="100" value="100" dir="ltr" id="volume-slider">
                <i class="bi bi-volume-up text-2xl mt-1 cursor-pointer" id="volume-icon"></i>
            </div>`

    audioPlay.innerHTML = x

    // play music
    const playMusicBtn = document.querySelector('#play-music')
    const audio = document.querySelector('#audio')
    const playIcon = playMusicBtn.querySelector('i')
    const progressBar = document.querySelector('#progress-bar')
    const progress = document.getElementById('progress')
    const prevMusic = document.querySelector('#prev-music')
    const nextMusic = document.querySelector('#next-music')
    const startTime = document.getElementById('start-time')
    const repeatMusic = document.getElementById('repeat-music')
    const volumeSlider = document.querySelector('#volume-slider')
    const volumeIcon = document.querySelector('#volume-icon')
    const imgAudio =document.getElementById('imgAudio')
    let isRepeatEnabled = false
    let isMuted = false

    // play music
    playMusicBtn.addEventListener('click', playMusic)
    function playMusic() {
        if (audio.paused) {
            audio.play()
            imgAudio.classList.add('animePlay')
            playIcon.classList.remove('bi-play-fill')
            playIcon.classList.add('bi-pause-fill')
        } else {
            audio.pause()
            imgAudio.classList.remove('animePlay')
            playIcon.classList.remove('bi-pause-fill')
            playIcon.classList.add('bi-play-fill')
        }
    }
    window.addEventListener('contextmenu' , (e)=>{
        e.preventDefault()
        audioPlay.style.bottom ='-1000px'
    })
    
   

    // updateProgress
    audio.addEventListener('timeupdate', updateProgress)
    function updateProgress(e) {
        const { duration, currentTime } = e.srcElement
        const progressPercent = (currentTime / duration) * 100
        progress.style.width = `${progressPercent}%`
        startTime.textContent = formatTime(currentTime)
    }

    // music time
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60)
        const secs = Math.floor(seconds % 60)
        return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`
    }

    // Set progress bar
    progressBar.addEventListener('click', setProgress)
    function setProgress(e) {
        const width = this.clientWidth
        const clickX = e.offsetX
        const duration = audio.duration
        audio.currentTime = (clickX / width) * duration
    }

    // prev music
    prevMusic.addEventListener('click', prevAudio)
    function prevAudio() {
        let index = musicArray.findIndex(m => m.id == selectedMusic.id)

        if (index !== -1) {
            if (index - 1 < 0) {
                showPlay(musicArray[musicArray.length - 1], true)
            } else {
                showPlay(musicArray[index - 1], true)
            }
        }
    }

    // next music
    nextMusic.addEventListener('click', nextAudio)
    function nextAudio() {
        let index = musicArray.findIndex(m => m.id == selectedMusic.id)

        if (index !== -1) {
            if (index + 1 >= musicArray.length) {
                showPlay(musicArray[0], true)
            } else {
                showPlay(musicArray[index + 1], true)
            }
        }
    }

    // Song ends
    audio.addEventListener('ended', () => {
        imgAudio.classList.remove('animePlay')
        playIcon.classList.remove('bi-pause-fill')
        playIcon.classList.add('bi-play-fill')
        progress.style.width = '0'
        if (isRepeatEnabled) {
            playMusic()
        } else {
            nextAudio()
        }
    })

    // repeat music
    repeatMusic.addEventListener('click', () => {
        isRepeatEnabled = !isRepeatEnabled
        repeatMusic.classList.toggle('text-red-500')
    })

    // for volume
    volumeSlider.addEventListener('input', () => {
        audio.volume = volumeSlider.value / 100

        if (!isMuted) {
            if (audio.volume > 0) {
                volumeIcon.classList.remove('bi-volume-mute-fill')
                volumeIcon.classList.add('bi-volume-up')
            } else {
                volumeIcon.classList.remove('bi-volume-up')
                volumeIcon.classList.add('bi-volume-mute-fill')
            }
        }
    })

    // muted volume
    volumeIcon.addEventListener('click', () => {
        isMuted = !isMuted
        if (isMuted) {
            audio.muted = true
            volumeIcon.classList.remove('bi-volume-up')
            volumeIcon.classList.add('bi-volume-mute-fill')
        } else {
            audio.muted = false
            volumeIcon.classList.remove('bi-volume-mute-fill')
            volumeIcon.classList.add('bi-volume-up')
        }
    })

    // play music when next music is on
    if (shouldPlay) {
        playMusic()
    }
}