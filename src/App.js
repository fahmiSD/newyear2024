import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Bye 2023! 👋 "]);

  const particleInit = async (engine) => {
    await loadFireworksPreset(engine);
  };

  const options = {
    preset: "fireworks",
    particles: {
      move: {
        speed: 1,
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        resize: false,
        click: {
          enable: true,
          mode: "push",
        },
      },
    },
    maxParticles: 3,
    fpsLimit: 60,
    emitters: [
      {
        direction: "top",
        life: {
          count: 1000,
          duration: 0.2,
          delay: 1,
        },
      },
    ],
  };

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newYearDate - nowDate;

    return remainingTime;
  }

  return (
    <>
      <Particles init={particleInit} options={options} />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl px-4 font-bold z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"|"}
            // typeSpeed={80}
            cursor
          />
        </span>
        <div className="z-50 text-white text-4xl font-bold ">
          <Countdown
            date={Date.now() + timeLeft()}
            // date={Date.now() + 10000}
            onComplete={() =>
              setNewYearMessage([
                "Welcome 2024! ✨",
                "Be Better! 🙌",
                "Don't Stop Coding! 🧑‍💻",
              ])
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
