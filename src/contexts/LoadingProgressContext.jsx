import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const LoadingProgressContext = createContext();

function LoadingProgressProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // to save timer ID
  const delayTimerRef = useRef(null);
  const tickTimerRef = useRef(null);
  const hideTimeRef = useRef(null);
  const isVisibleRef = useRef(false);

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

    if (hideTimeRef.current) {
      clearTimeout(hideTimeRef.current);
      hideTimeRef.current = null;
    }
  }

  const start = useCallback(() => {
    console.log("🟡 start called", {
      delay: !!delayTimerRef.current,
      tick: !!tickTimerRef.current,
      visible: isVisibleRef.current,
    });

    // prevent overlap
    if (delayTimerRef.current || tickTimerRef.current || isVisibleRef.current)
      return;

    // wait until 150ms
    delayTimerRef.current = setTimeout(() => {
      delayTimerRef.current = null;

      isVisibleRef.current = true;

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
  }, []);

  const finish = useCallback(() => {
    console.log("🟢 finish called", {
      delay: !!delayTimerRef.current,
      tick: !!tickTimerRef.current,
      visible: isVisibleRef.current,
    });

    // if it's end within 150ms
    if (delayTimerRef.current) {
      clearTimeout(delayTimerRef.current);
      delayTimerRef.current = null;
      return;
    }

    // if there's no visible bar (after execution)
    if (!isVisibleRef.current) return;

    if (tickTimerRef.current) {
      clearInterval(tickTimerRef.current);
      tickTimerRef.current = null;
    }

    setProgress(100);

    hideTimeRef.current = setTimeout(() => {
      isVisibleRef.current = false;
      setIsLoading(false);
      setProgress(0);

      hideTimeRef.current = null; // finish itself
    }, finishHoldMs);
  }, []);

  // clean up
  useEffect(() => {
    return () => clearTimers();
  }, []);

  return (
    <LoadingProgressContext.Provider
      value={{ isLoading, progress, start, finish }}
    >
      {children}
    </LoadingProgressContext.Provider>
  );
}

function useLoadingProgress() {
  const context = useContext(LoadingProgressContext);

  if (context === undefined) {
    throw new Error(
      "useLoadingProgress must be used within a LoadingProgessProvider"
    );
  }

  return context;
}

export { LoadingProgressProvider, useLoadingProgress };
