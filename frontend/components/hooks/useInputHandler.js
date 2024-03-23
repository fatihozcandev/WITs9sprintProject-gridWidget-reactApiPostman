import React, { useState } from "react";

function useInputHandler(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  function ChangeHandler(event) {
    setValue(event.target.value);
  }
  return [value, ChangeHandler];
}

export default useInputHandler;
