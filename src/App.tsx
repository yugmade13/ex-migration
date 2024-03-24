import { useEffect, useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import { makeData, Person } from './utils/faker';

function App() {
  const [data, setData] = useState<Person[]>([]);

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
        {data.map((item: Person, index: number) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
