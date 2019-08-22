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
    return diaryEntries.map((entry, index) => {
      const keyVal = `${entry.title}-${index}`;

      return (
        <div key={keyVal} className="diary-entry">
          <h2>{entry.title}</h2>
          <p>{entry.content}</p>
        </div> 
      )
    })
  };

  const handleOnChange = (event) => {
    setNewEntryValue(event.target.value);
  };

  const handleClick = () => {
    const newDiaryEntries = [...diaryEntries];
    newDiaryEntries.push({
      title: 'hm',
      content: newEntryValue,
    })
    setDiaryEntries(newDiaryEntries);
  };

  return (
    <div className="App">
      {renderEntries()}
      <div>
        <textarea value={newEntryValue} onChange={handleOnChange} />
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
};

export default App;
