import React from 'react';
import Space from './Space';
import PropTypes from 'prop-types';

function Board(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.spaceList).map(function(spaceId) {
        var ticket = props.spaceList[spaceId];
        return (
          <Space covered={space.covered}
          mine={space.mine}
          xCoordinate={space.xCoordinate}
          yCoordinate={space.yCoordinate}
          spaceId={space.spaceId}
          key={space.spaceId}/>
        )
      })};
    </div>
  );
}

Board.propTypes = {
  spaceList: PropTypes.object,
};

export default Board;
