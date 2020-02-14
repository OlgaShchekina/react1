import React from 'react';
import './App.css';


function Content() {
    const clickButtonHandler = (value) => {
        console.log('Clicked! '+ value)
    };
    const inputHandler = (e) => {
        console.log(e.target.value)
    };
  return (
      <main>
      <div className="App-content">
          <h1>First app</h1>

          <input type="text" onChange={inputHandler}/>
          <button onClick={()=> clickButtonHandler()}>Add one</button>
          <button onClick={()=> clickButtonHandler()}>Add two</button>
      </div>
      </main>
  );
}
export default Content;
