const app =()=> {
    const song = document.querySelector ('.sound');
    const play = document.querySelector ('.play');
    const outline = document.querySelector ('.moving circle');
    const video = document.querySelector('.def-video video');
    const timeSelect = document.querySelectorAll('.time-picker button');
    const sounds = document.querySelectorAll('.sound-picker button');
    const timeDisplay = document.querySelector('.time-display');
    const outlineLen = outline.getTotalLength() ;
    let fakeDuaration =600 ;
    
    outline.style.strokeDasharray = outlineLen;
    outline.style.strokeDashoffset = outlineLen;
    
    // stop and play funcction 
    play.addEventListener('click',  ()=>{
        ckeckPlay(song);
    });

    sounds.forEach(sound=>{
        sound.addEventListener('click',function(){
            song.src=this.getAttribute('data-sound');
            video.src=this.getAttribute('data-video');
            ckeckPlay(song);
        })
    })

    const ckeckPlay  =song =>{
        if (song.paused){
            song.play();
            video.play();
            play.src ="./svg/pause.svg";
        }
        else {
            song.pause();
            video.pause();
            play.src="./svg/play.svg";
        }
    };

    // to animte circle 
     song.ontimeupdate =()=>{
        let currentTime = song.currentTime;
        let last = fakeDuaration - currentTime; 
        let seconds = Math.floor(last % 60) ;
        let muinutes = Math.floor(last / 60) ; // to git int num only  
        let progress = outlineLen - (currentTime / fakeDuaration) * outlineLen ;
        outline.style.strokeDashoffset = progress ;
        timeDisplay.textContent = `${muinutes}:${seconds}`;
        if(currentTime >= fakeDuaration){
            song.pause();
            song.currentTime=0;
            play.src="./svg/play.svg";
            video.pause();
        }
    };
    timeSelect.forEach(Option =>{
        Option.addEventListener('click', function(){
            fakeDuaration= this.getAttribute('data-time');
            timeDisplay.textContent = 
            `${Math.floor(fakeDuaration/60)}:${Math.floor(fakeDuaration%60)}`;
        })
    })
  
    

};
 

app();