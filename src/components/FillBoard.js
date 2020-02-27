import React from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';

function FillBoard(props) {

  function handleFillBoard(event) {
    const { dispatch } = props;
    event.preventDefault();
    for (let i = 0; i < 100; i++) {
      const action = {
        type: 'POPULATE',
        covered: true,
        mine: true,
        xCoordinate: i,
        yCoordinate: i,
        id: v4()
      };
      dispatch(action)
    }
  }

  // function handleNumberBoard(event) {
  //   const { dispatch } = props;
  //   event.preventDefault();
  //
  // }

  return (
    <div>
      <form onSubmit={handleFillBoard}>
        <button type='submit'>START GAME</button>
      </form>
    </div>
  );
}

export default connect()(FillBoard);
