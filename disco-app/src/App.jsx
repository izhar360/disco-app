import { useState, useEffect } from "react";

export default function App() {
  const [color, setColor] = useState("black");
  const [running, setRunning] = useState(false);

  const randomColor = () =>
    `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setColor(randomColor());
    }, 500);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color,
        transition: "background-color 0.3s ease",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => setRunning(!running)}
    >
      <h1 style={{ color: "white", fontSize: "2rem", fontWeight: "bold" }}>
        {running ? "Disco Mode 🔥" : "Tap to Start"}
      </h1>
    </div>
  );
}
