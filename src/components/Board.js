import React from 'react';
import Space from './Space';
import PropTypes from 'prop-types';

function Board(props) {
  console.log('This is props.spaceList:');
  console.log(props.spaceList);

  return (
    <div>
      <hr/>
      {Object.keys(props.spaceList).map(function(spaceId) {
        var space = props.spaceList[spaceId];
        return (
          <Space covered={space.covered}
          mine={space.mine}
          xCoordinate={space.xCoordinate}
          yCoordinate={space.yCoordinate}
          spaceId={spaceId}
          key={spaceId}/>
        )
      })}
    </div>
  );
}

Board.propTypes = {
  spaceList: PropTypes.object,
};

export default Board;
