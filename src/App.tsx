import React, { MouseEventHandler, SetStateAction, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';

interface colorProps {

}
function App() {
  const [selectedColor, setSelectedColor] = useState('');
  const colorChangeHandler = (e: any) => {
    setSelectedColor(e.target.value)
  }

  return (
    <div className="App">
      <div className="App-header" style={{ background: selectedColor }}>
        <h1>Choose Color</h1>

        <div className='parent-div'>
          <div>
            <label htmlFor="blue">Blue</label>
            <a href='#blue' ><input type="radio" id="blue" name="fav_language" value="Blue" onClick={colorChangeHandler} /></a><br />

            <label htmlFor="red">Red</label>
            <a href='#red' ><input type="radio" id="red" name="fav_language" value="Red" onClick={colorChangeHandler} /></a><br />

            <label htmlFor="green">Green</label>
            <a href='#green' ><input type="radio" id="green" name="fav_language" value="Green" onClick={colorChangeHandler} /></a><br />

            <label htmlFor="purple">Purple</label>
            <a href='#purple' ><input type="radio" id="purple" name="fav_language" value="Purple" onClick={colorChangeHandler} /></a><br />
          </div>

          <div className='div-wrapper'>
            <div className='div div1' id='blue' >Blue</div>
            <div className='div div2' id='red' >Red</div>
            <div className='div div3' id='green' >Green</div>
            <div className='div div4' id='purple'>Purple</div>
          </div>

          <input type='text' placeholder='your color..' className='colored-input' onChange={colorChangeHandler} />
          <input type='color' placeholder='your color..' className='color-type' onChange={colorChangeHandler} />

        </div>
       
        <Parent />
      </div>

    </div>
  );
}

export default App;


