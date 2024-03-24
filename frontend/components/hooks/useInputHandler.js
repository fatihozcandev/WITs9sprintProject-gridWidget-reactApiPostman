import React, { useEffect, useState } from "react";

function useInputHandler(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [counter, setCounter] = useState(0);
  function ChangeHandler(event) {
    setValue(event.target.value);
  }
  useEffect(() => {
    setCounter(value.length);
  }, [value]);
  return [value, ChangeHandler, counter];
}

export default useInputHandler;
