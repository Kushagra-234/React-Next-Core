import { useCallback } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const data = { value: 42 };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child data={data} />
    </div>
  );
}

const Child = React.memo(({ data }) => {
  console.log("Child rendered");
  return <div>{data.value}</div>;
});

// optimise it to reduce re-render

const GrandChild = React.memo(
  ({ data }) => {
    console.log("Child rendered");
    return <div>{data.value}</div>;
  },
  (prevProps, nextProps) => {
    return prevProps.data.value === nextProps.data.value;
  }
);


const handleClick = useCallback(()=>{
    console.log("clicked");
},[])