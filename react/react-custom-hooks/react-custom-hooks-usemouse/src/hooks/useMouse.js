import { useEffect, useState } from "react";

export default function useMouse() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  useEffect(() => {
    document.body.addEventListener("mousemove", (event) => {
      setX(event.clientX);
      setY(event.clientY);
    });
  });

  return [x, y];
}
