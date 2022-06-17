import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Test component to check development/build/hot reload</h1>
      {count}
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default App;
