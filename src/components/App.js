import agent from '../agent';
import React from 'react';
import { connect } from 'react-redux';
import { APP_LOAD } from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import { store } from '../store';
import { push } from 'react-router-redux';


class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      store.dispatch(push(nextProps.redirectTo));
    }
  }

  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      );
    }
    return (
      <div>
        Loading...
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  }
};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>{
    console.log("payload",payload)
    return dispatch({ type: APP_LOAD, payload, token, skipTracking: true })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
