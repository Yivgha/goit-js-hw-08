import Player from "@vimeo/player";
import { throttle } from 'lodash';

const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);
    
let currentTimePlay = 0;

const STORAGE_KEY = "videoplayer-current-time";

player.on("timeupdate", throttle((onPlay), 1000));
setCurrentTime();

function onPlay(data) {
    currentTimePlay = data.seconds;
localStorage.setItem(STORAGE_KEY, currentTimePlay);
};

function setCurrentTime(){
    const setTime = localStorage.getItem(STORAGE_KEY);
    if(setTime){
        player.setCurrentTime(setTime);
    }
};