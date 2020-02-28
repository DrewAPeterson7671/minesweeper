import React from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';

function FillBoard(props) {

  function handleFillBoard(event) {
    const { dispatch } = props;
    event.preventDefault();
    for (let y = 1; y < 11; y++) {
      for (let x = 1; x < 11; x++) {
      const action = {
        type: 'POPULATE',
        covered: true,
        mine: false,
        xCoordinate: x,
        yCoordinate: y,
        coordinates: (x.toString() + y.toString()),
        id: v4()
        };
        dispatch(action)
      }
    }
    for (let i = 0; i < 10; i++) {

      const action = {
        type: 'MINEIFY',
        coordinates: (Math.floor((Math.random() * 10) + 1).toString() + (Math.floor((Math.random() * 10) + 1).toString())),
      };
      dispatch(action)
    }
  }

  // function handleMineify(event) {
  // }

  // function handleNumberBoard(event) {
  //   const { dispatch } = props;
  //   event.preventDefault();
  //
  // }

  return (
    <div>
      <form onSubmit={handleFillBoard}>
        <button type='submit'>START GAME</button>
        <a href='/#/'>HOME</a>
      </form>
    </div>
  );
}

export default connect()(FillBoard);
