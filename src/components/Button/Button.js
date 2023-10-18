import { useState } from "react";

function MyButton() {

  const [count, setCount] = useState(0); //make count=0 call setcount when you want ot update count varibale

  function handleClick() {
    // alert('You clicked me!');
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      {/* Click me */}
      clicked {count} times
    </button>
  );
}

export default MyButton;