import React, { useState, useRef, useEffect } from "react";
import image from "../../assets/profile.jpg";
import { FaPlay } from "react-icons/fa";
import { MdOutlineSkipPrevious } from "react-icons/md";
import { MdOutlineSkipNext } from "react-icons/md";


import { FaPause } from "react-icons/fa";
const Musicplayer = ({ data }) => {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef();
   
    const currentTrack = data[currentTrackIndex];
   
    const playPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    };
   
    const nextTrack = () => {
    setCurrentTrackIndex((currentTrackIndex + 1) % data.length);
    if(isPlaying)
    setIsPlaying(!isPlaying);
    };
   
    const previousTrack = () => {
    setCurrentTrackIndex((currentTrackIndex - 1 + data.length) % data.length);
    if(isPlaying)
    setIsPlaying(!isPlaying);
    };
   
    const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    };
   
    const handleDurationChange = () => {
    setDuration(audioRef.current.duration);
    };
   
    const handleSeekChange = (e) => {
    audioRef.current.currentTime = e.target.value;
    };
   
    const handleAudioEnd = () => {
    setCurrentTime(0);
    setIsPlaying(false);
    };
   
    useEffect(() => {
    audioRef.current.src = currentTrack.link;
    }, [currentTrack]);
   
    useEffect(() => {
    if(audioRef.current){
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    audioRef.current.addEventListener('loadeddata', handleDurationChange);
    audioRef.current.addEventListener('ended', handleAudioEnd);
    return () => {
      audioRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
      audioRef.current?.removeEventListener('loadeddata', handleDurationChange);
      audioRef.current?.removeEventListener('ended', handleAudioEnd);
    };}
    }, []);
   
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeekChange}
        style={{width:"65rem" }}
      />
      <audio src={currentTrack.link} ref={audioRef} />
      <div className="current-music" style={{display:"flex", justifyContent:"space-between"}}>
      <div  style={{display:"flex"}}>
        <img
          src={image}
          alt="profile"
          style={{ width: "4.4rem", height: "4.4rem" }}
        />
        
          <p>{currentTrack.name}</p>
          
        </div>
        <div style={{display:"flex", gap:"1rem"}}>
          <div onClick={previousTrack}><MdOutlineSkipPrevious /></div>
          <div onClick={playPause}>{isPlaying ? <FaPause/> : <FaPlay/>}</div>
          <div onClick={nextTrack}><MdOutlineSkipNext />
</div>
        </div>
      </div>
    </div>
  );
};

export default Musicplayer;
