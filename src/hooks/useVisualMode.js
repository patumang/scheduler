import { useState } from 'react';

/* useVisualMode custom hoock */
export default function useVisualMode(initial) {
  /* states for mode and history to set initial mode */
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  /* function to transition to new mode */
  const transition = (newMode, replace = false) => {
    setMode(newMode);
    /* if replace is given to true set history back to prev past one */
    if (replace) {
      setHistory((prev) => [...prev.slice(0, prev.length - 1), newMode]);
    } else {
      /* if replace is not given, add new mode to history */
      setHistory([...history, newMode]);
    }
  };
  /* function to get back to previous mode */
  const back = () => {
    /* if history has more than one mode then set mode and history back */
    if (history.length > 1) {
      setMode(history[history.length - 2]);
      setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
    }
  };

  return { mode, transition, back };
}