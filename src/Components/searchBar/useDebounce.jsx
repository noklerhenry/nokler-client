import { useState, useEffect } from "react";

// params -->
// input value (letter by letter)
// time before firing up an api call or when another value (letter) enter
// cb when the timeout ends

const useDebounce = (value, timeout, callback) => {
  const [timer, setTimer] = useState(null); // setTimeout response

  const clearTimer = () => {
    if (timer) {
      // valid timer
      // console.log(timer);
      clearTimeout(timer);
    }
  };

  useEffect(() => {
    clearTimer(); // only is going to be cleared if the timer is valid, otherwise just complety ignore that
    if (value && callback) {
      const newTimer = setTimeout(callback, timeout); // --> milliseconds
      // console.log(newTimer); // returns a timerID to stop the execution (clearTimeout)
      setTimer(newTimer);
    }
  }, [value]); // should be triggered every single time the value change (for every letter entered in the input)
};

export default useDebounce;
