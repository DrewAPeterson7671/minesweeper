import React from 'react';
import { v4 } from 'uuid';

function FillBoard(props) {

  function handleFillBoard(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'POPULATE',

      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    };
  }

  function handleNumberBoard(event) {
    const { dispatch } = props;
    event.preventDefault();
    
  }

  return (
    <div>
      <button type='submit'>START GAME</button>
    </div>
  );
}

export default connect()(FillBoard);
