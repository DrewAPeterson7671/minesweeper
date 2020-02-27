import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Board from './components/Board';
import FillBoard from './components/FillBoard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={()=><Board spaceList={this.props.masterSpaceList} />} />
          <Route path='/fillboard' render={()=><FillBoard />} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  masterSpaceList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterSpaceList: state.masterSpaceList
  }
}

export default withRouter(connect(mapStateToProps)(App));
