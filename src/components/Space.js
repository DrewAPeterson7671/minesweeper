import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Space(props){

  function handleUncoverSpace(spaceId){
    console.log("goodclick");
    const { dispatch } = props;
    const action = {
      type: 'UNCOVER',
      spaceId: spaceId
    };
    dispatch(action);
  }

  if (props.covered === true) {
    return (
      <div className='greySpace' onClick={() => {handleUncoverSpace(props.spaceId)}}>
        <p>Covered space</p>
      </div>
    );
  } else if (props.covered === false) {
    if (props.mine === false) {
      return <div className='greenSpace'>
        <p>Not a mine</p>
      </div>
    } else {
      return <div className='redSpace'>A mine! SPOOPY!</div>
    }
  } else {
    return <div></div>
  }
}

Space.propTypes = {
  covered: PropTypes.bool.isRequired,
  mine: PropTypes.bool.isRequired,
  xCoordinate: PropTypes.number.isRequired,
  yCoordinate: PropTypes.number.isRequired,
  spaceId: PropTypes.string.isRequired
};

export default connect()(Space);
