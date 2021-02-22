import React, {useState} from 'react';
import List from './List';
import data from './data';
import './App.css';

function App() {
  const [people, setPeople] = useState(data);

    function clearAllRecords(){
      setPeople([])
    }
  return (
    <main>
      <section className="Container">
        {/* change this to state variable data */}
      <h2>{data.length} birthday today</h2>
      {/* pass (people)data to list here */}
      <List people={data}/>
      <button onClick={ clearAllRecords}>Clear all</button>
      </section>
    </main>
  )
    
}

export default App;
