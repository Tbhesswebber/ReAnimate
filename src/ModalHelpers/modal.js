import React from "react";

import * as Animate from "../animate";

const Modal = props => {
  return (
    <div className="overlay" onClick={props.closeModal}>
      <div className="modal">
        <form className="full">
          <input type="text" val="Brandon smells." />
        </form>
      </div>
    </div>
  );
};

export default Animate.fadeOut(Modal, 1);
