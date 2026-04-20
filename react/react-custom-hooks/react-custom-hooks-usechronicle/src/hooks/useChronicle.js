import { useState } from "react";
export default function useChronicle() {
  const [timeline, setTimeline] = useState([]);

  function setState() {
    setTimeline(timeline.push());
  }
  function resetState() {
    setTimeline(timeline.slice());
  }
  console.log(timeline);
  const currentValue = timeline.at(-1);
  return [currentValue, setState, resetState];
}
