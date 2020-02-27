import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Space(props){

  function handleUncoverSpace(spaceId){
    const { dispatch } = props;
    const action = {
      type: 'UNCOVER',
      spaceId: spaceId
    };
    dispatch(action);
  }

  if (space.covered === true) {
    return (
      <div className='greySpace' onClick={() => {handleUncoverSpace(props.spaceId);}}>
      </div>
    );
  } else {
    if (space.mine !== true) {
      return <div className='greenSpace'></div>
    } else {
      return <div className='redSpace'></div>
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
