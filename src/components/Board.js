import React from 'react';
import Space from './Space';
import PropTypes from 'prop-types';

function Board(props) {

  return (
    <div className='grid-container'>
      {Object.keys(props.spaceList).map(function(spaceId) {
        var space = props.spaceList[spaceId];
        if (props.spaceList) {
          return (
            <div className='grid-item'>
              <Space covered={space.covered}
              mine={space.mine}
              xCoordinate={space.xCoordinate}
              yCoordinate={space.yCoordinate}
              spaceId={spaceId}
              key={spaceId}/>
            </div>
          )
        } else {
          return <div><a href='/#/fillboard'>FILL BOARD</a></div>
        }
      })}
    </div>
  );
}

Board.propTypes = {
  spaceList: PropTypes.object,
};

export default Board;
