import { useState } from "react";

type CounterProps = { initialValue: number };

export function Counter({ initialValue }: CounterProps) {
  let [count, setCount] = useState(initialValue);
  return (
    <div>
      <span>Counter </span> 
      <button onClick={() => setCount((current) => current - 1)} type="button">
        -
      </button>
      <output>{count}</output>
      <button onClick={() => setCount((current) => current + 1)} type="button">
        +
      </button>
    </div>
  );
}

export let scheme = {
  render: Counter.name,
  description: "Displays a counter with the initial value provided",
  children: [],
  attributes: {
    initialValue: {
      type: Number,
      default: 0,
    },
  },
};
