"use client";

import { useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState(1);

  const playAudio = () => {
    audioRef.current?.play();
  };

  const pauseAudio = () => {
    audioRef.current?.pause();
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    setVolume(value);

    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#121212",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          backgroundColor: "#1e1e1e",
          padding: "30px",
          borderRadius: "20px",
          width: "320px",
          textAlign: "center",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        }}
      >
        <img
          src="/capa.jpeg"
          alt="Capa da música"
          style={{
            width: "100%",
            borderRadius: "15px",
            marginBottom: "20px",
          }}
        />

        <h1 style={{ fontSize: "24px" }}>
          Hoje à noite 
        </h1>

        <p style={{ color: "#b3b3b3", marginBottom: "20px" }}>
          Calcinha Preta
        </p>

        <audio ref={audioRef}>
          <source src="/audio.mp3" type="audio/mpeg" />
        </audio>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={playAudio}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#1db954",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ▶ Play
          </button>

          <button
            onClick={pauseAudio}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#ff4d4d",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ⏸ Pause
          </button>
        </div>

        <div>
          <p>Volume</p>

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={changeVolume}
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}