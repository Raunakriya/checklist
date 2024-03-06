
import React, { useState } from 'react'

const CheckList = () => {
  const [checkedOpt, setCheckedOpt] = useState([]);

  const handleCheckboxEvents = (option) => {
    if (checkedOpt.includes(option)) {
      setCheckedOpt(checkedOpt.filter(item => item !== option));
    } else {
      setCheckedOpt([...checkedOpt, option]);
    }

  };

  return (
    <div>
      <h2>Selected Options:</h2>
      <ul>
        {checkedOpt.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <h2>CheckList:</h2>
      <form>
        <label>
          <input type='checkbox' value="option 1" checked={checkedOpt.includes('Option 1')}
            onChange={() => {
              handleCheckboxEvents('Option 1')
            }} />
          Option 1
        </label>
        <br />
        <label>
          <input type='checkbox' value="option 2" checked={checkedOpt.includes('Option 2')}
            onChange={() => {
              handleCheckboxEvents('Option 2')
            }} />
          Option 2
        </label>
        <br />
        <label>
          <input type='checkbox' value="option 3" checked={checkedOpt.includes('Option 3')}
            onChange={() => {
              handleCheckboxEvents('Option 3')
            }} />
          Option 3
        </label>
      </form>
    </div>
  )
}



export default CheckList;
