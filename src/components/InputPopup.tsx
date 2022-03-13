import React from 'react';

type Props = {
  toggleInputPopup: () => void;
};

const InputPopup = (props: Props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.toggleInputPopup}>
          x
        </span>
        <b>
          Name: <input type="text" />
        </b>
        <b>
          <button onClick={props.toggleInputPopup}>Submit</button>
        </b>
      </div>
    </div>
  );
};

export default InputPopup;
