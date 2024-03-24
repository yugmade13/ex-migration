import { useEffect, useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import { makeData } from './utils/faker';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(makeData(10));
  }, []);

  if (data.length === 0) {
    return (
      <div className="container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container">
      <Header />
      <div className="card-list">
        {data.map((item) => (
          <Card key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
