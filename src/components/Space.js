import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Space(props){

  function handleUncoverSpace(spaceId){
    console.log(props.mine);
    const { dispatch } = props;
    const action = {
      type: 'UNCOVER',
      id: spaceId
    };
    dispatch(action);
  }

  if (props.covered === true) {
    return (
      <div className='greySpace' onClick={() => {handleUncoverSpace(props.spaceId)}}>
      <p>{props.xCoordinate}, {props.yCoordinate}</p>
      <p>{props.coordinates}</p>
      </div>
    );
  } else if (props.covered === false) {
    if (props.mine === true) {
      return <div className='redSpace'>A mine! SPOOPY!</div>
    } else {
      return <div className='greenSpace'>
      <p>Not a mine</p>
      </div>
    }
  } else {
    return null
  }

}

Space.propTypes = {
  covered: PropTypes.bool.isRequired,
  mine: PropTypes.bool.isRequired,
  xCoordinate: PropTypes.number.isRequired,
  yCoordinate: PropTypes.number.isRequired,
  spaceId: PropTypes.string.isRequired,
  coordinates: PropTypes.string.isRequired
};

export default connect()(Space);
