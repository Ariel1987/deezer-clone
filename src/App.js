import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setLoading } from './store/actions/loadingActions';

function App() {
  return (
    <div className="App">
      deezer app
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.loadingReducer.loading,
});

const mapDispatchProps = dispatch => ({
  setLoading: isLoading => dispatch(setLoading(isLoading))
});

export default connect(mapStateToProps, mapDispatchProps)(App);