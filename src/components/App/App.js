import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Component, Fragment } from 'react';

import Header from 'components/Header/Header';
import NoteTable from 'components/NoteTable/NoteTable';

import { actions as applicationActions } from 'reducers/application';

class App extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      appInit: PropTypes.func.isRequired
    }).isRequired
  };

  componentDidMount() {
    const { actions } = this.props;

    actions.appInit();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <NoteTable />
      </Fragment>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(applicationActions, dispatch)
});

export default connect(null, mapDispatchToProps)(App);
