"use client";

import "./LoadingScreen.css";
import { useEffect, useState } from "react";

type LoadingScreenProps = {
  onFinish: () => void;
};

export default function LoadingScreen({
  onFinish,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [typedName, setTypedName] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  const fullName = "SUDEEP SHETTY";

  const logs = [
    "Initializing Portfolio...",
    "Loading Projects...",
    "Fetching Skills...",
    "Connecting Experience...",
    "Optimizing UI...",
    "Ready!",
  ];

  const log =
    progress < 20
      ? logs[0]
      : progress < 40
      ? logs[1]
      : progress < 60
      ? logs[2]
      : progress < 80
      ? logs[3]
      : progress < 100
      ? logs[4]
      : logs[5];

  // Typing Effect
  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setTypedName(fullName.slice(0, index + 1));
      index++;

      if (index >= fullName.length) {
        clearInterval(typing);
      }
    }, 120);

    return () => clearInterval(typing);
  }, []);

  // Progress Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setFadeOut(true);

          setTimeout(() => {
            onFinish();
          }, 800);

          return 100;
        }

        return prev + 1;
      });
    }, 90);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="loading-box">
        <span className="top"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="left"></span>

        <div className="loading-content">
          <h1>{typedName}</h1>

          <p className="role">Full Stack Developer</p>

          <div className="progress">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="loading-log">{log}</p>

          <p className="percentage">{progress}%</p>
        </div>
      </div>
    </div>
  );
}