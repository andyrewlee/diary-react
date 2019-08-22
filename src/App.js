import React, { useState } from 'react';

const entries = [
  {
    title: 'My day was awesome!',
    content: 'The day was amazing because I had tacos.',
  },
  {
    title: 'Same old day',
    content: 'Same food, same job, same day...',
  },
];

const App = () => {
  const [diaryEntries, setDiaryEntries] = useState(entries);
  const [newEntryValue, setNewEntryValue] = useState('');

  const renderEntries = () => {
    return diaryEntries.map((entry) => {
      return (
        <div class="diary-entry">
          <h2>{entry.title}</h2>
          <p>{entry.content}</p>
        </div> 
      )
    })
  };

  const handleOnChange = (event) => {
    console.log('event', event.target.value);
    setNewEntryValue(event.target.value);
  };

  return (
    <div className="App">
      {renderEntries()}
      <div>
        <textarea value={newEntryValue} onChange={handleOnChange} />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default App;
