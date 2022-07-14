import { useState } from "react";

const Greetings = (props) => {
  const [textChanged, setTextChanged] = useState(false);
  return (
    <>
      <h1>Hello World!</h1>
      {!textChanged ? <p>This is a Dummy paragraph text</p> : <p>Changed!</p>}
      <button onClick={() => setTextChanged(true)}>Change the Text</button>
    </>
  );
};

export default Greetings;
