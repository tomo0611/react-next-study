import { useRef } from "react";

export default function Counter() {
  let countRef = useRef(0);

  function handleClick() {
    // This doesn't re-render the component!
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  }

  return (
    <button
      className="bg-primary-100 rounded-md ml-4 p-2 text-white hover:bg-primary-150 ring-0"
      onClick={handleClick}
    >
      You clicked {countRef.current} times
    </button>
  );
}
