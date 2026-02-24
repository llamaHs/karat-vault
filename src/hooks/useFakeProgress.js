import { useEffect, useRef, useState } from "react";

function useFakeProgress() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // to save timer ID
  const delayTimerRef = useRef(null);
  const tickTimerRef = useRef(null);

  const delayMs = 150; // no bar when loading is end within 150ms
  const cap = 85; // Maximum value for fake progress
  const finishHoldMs = 250; // Hide the bar in this ms after 100%

  function clearTimers() {
    if (delayTimerRef.current) {
      clearTimeout(delayTimerRef.current);
      delayTimerRef.current = null;
    }

    if (tickTimerRef.current) {
      clearInterval(tickTimerRef.current);
      tickTimerRef.current = null;
    }
  }

  function start() {
    // prevent overlap
    if (delayTimerRef.current || tickTimerRef.current || isLoading) return;

    // wait until 150ms
    delayTimerRef.current = setTimeout(() => {
      setIsLoading(true);
      setProgress(10);

      // fake loading progress
      tickTimerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= cap) return prev;
          if (prev < 30) return prev + 10;
          if (prev < 60) return prev + 6;
          if (prev < 80) return prev + 3;
          return Math.min(prev + 1, cap);
        });
      }, 200);
    }, delayMs);
  }

  function finish() {
    // To show loading bar shortly
    const wasPending = Boolean(delayTimerRef.current);

    // if it's end within 150ms
    if (!isLoading && !wasPending) {
      clearTimers();
      setProgress(0);
      return;
    }

    if (wasPending) {
      clearTimeout(delayTimerRef.current);
      delayTimerRef.current = null;

      setIsLoading(true);
      setProgress(10);
    }

    if (tickTimerRef.current) {
      clearInterval(tickTimerRef.current);
      tickTimerRef.current = null;
    }

    setProgress(100);

    setTimeout(() => {
      setIsLoading(false);
      setProgress(0);
    }, finishHoldMs);
  }

  // clean up
  useEffect(() => {
    return () => clearTimers();
  }, []);

  return { isLoading, progress, start, finish };
}

export default useFakeProgress;
