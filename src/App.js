import React from 'react';
import { connect } from 'react-redux';
import { Main } from './Components/MainComponent';
import { fetchData, fetchFluctuation, fetchMargin } from './store/actionCreators';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    this.props.fetchData();
    this.props.fetchFluctuation("top");
    this.props.fetchMargin("top");
    this.props.fetchMargin("bottom")
  }
  render() {
    return (
      <div>
        <Main Recipe={this.props.Recipe} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  Recipe: state.Recipe,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
  fetchMargin: (parameter) => dispatch(fetchMargin(parameter)),
  fetchFluctuation: (parameter) => dispatch(fetchFluctuation(parameter)),
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;