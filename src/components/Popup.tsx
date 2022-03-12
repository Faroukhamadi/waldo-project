import React from 'react';

type Props = {
  eventOffsetX: number;
  eventOffsetY: number;
};

const Popup = (props: Props) => {
  return (
    <ul
      className="popup"
      style={{
        top: props.eventOffsetY + 95,
        left: props.eventOffsetX + 45,
      }}
    >
      <li className="popup-waldo">Waldo</li>
      <li className="popup-odlaw">Odlaw</li>
      <li className="popup-whitebeard">WhiteBeard</li>
    </ul>
  );
};

export default Popup;
