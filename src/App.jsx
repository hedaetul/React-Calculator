/**
 *? Done: Handle user input field
 *? Done: Handle operations
 * TODO: Handle a list of histories
 * TODO: Render history list
 * TODO: Restore the history
 */

import { useState } from 'react';
import HistorySection from './components/history/HistorySection';
import InputSection from './components/inputs/InputSection';
import OperationSection from './components/operation/OperationSection';

// function generateId() {
//   let id = 0;

//   while (true) {
//     yield id++;
//   }
// }
// const getId = generateId();

function* generateId() {
  let id = 0;

  while (true) {
    yield id++;
  }
}
const getId = generateId();

const InitialInputState = {
  a: 0,

  b: 0,
};

const App = () => {
  const [inputState, setInputState] = useState({ ...InitialInputState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [reStoredHistory, setRestoredHistory] = useState(null);

  const handleClearOps = () => {
    setInputState({ ...InitialInputState });
    setResult(0);
  };

  const handleInputFields = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  // const handleInputFieldA = (e) => {
  //   setInputState({
  //     ...inputState,
  //     a: parseInt(e.target.value),
  //   });
  // };

  // const handleInputFieldB = (e) => {
  //   setInputState({
  //     ...inputState,
  //     b: parseInt(e.target.value),
  //   });
  // };

  // const handleInputFields = (key, value) => {
  //   setInputState({
  //     ...inputState,
  //     [key]: value,
  //   });
  // };

  // const handleInputFields = (inp) => {
  //   setInputState({
  //     ...inputState, //previous state
  //     ...inp, //new state
  //   });
  // };

  /*console.log(getId().next().value);*/

  const handleArithmeticOps = (operation) => {
    const f = new Function(
      'operation',
      `
      return ${inputState.a} ${operation} ${inputState.b}
      `
    );
    const result = f(operation);
    setResult(result);
    // setResult(eval(`${inputState.a} ${operation} ${inputState.b}`));

    const historyItem = {
      id: getId.next().value,
      inputs: { ...inputState },
      operation,
      result,
      date: new Date(),
    };
    setHistories([historyItem, ...histories]);
  };
  const handleRestoreBtn = (historyItem) => {
    setInputState({ ...historyItem.inputs });
    setResult(historyItem.result);
    setRestoredHistory(historyItem);
    
  };

  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <h1>Result:{result}</h1>
      <InputSection inputs={inputState} handleInputFields={handleInputFields} />
      <OperationSection
        handleArithmeticOps={handleArithmeticOps}
        handleClearOps={handleClearOps}
      />
      <HistorySection
        histories={histories}
        handleRestoreBtn={handleRestoreBtn}
        restoredHistory={reStoredHistory}
      />
    </div>
  );
};

export default App;
