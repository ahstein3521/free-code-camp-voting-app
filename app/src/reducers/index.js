import { combineReducers } from 'redux';
import BallotReducer from './reducer_ballots';
import ActiveBallot from './reducer_ballotActive';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './reducer_auth'

const rootReducer = combineReducers({
	auth: authReducer,
	ballots:BallotReducer,
	ballotSelected:ActiveBallot,
	form:reduxForm
});

export default rootReducer;


