import { 
    API_CALL,
    API_CALL_OK,
    API_CALL_FAIL,
    API_CALL_OK_NORESULT
} from './actions';

export const initialState = {
	tasks: [],
	loading: false,
	error: null
};

export function tasksReducer(state = initialState, action) {
    console.log(action);
    console.log(state);
	switch (action.type) {
		case API_CALL:
			return { ...state, loading: true };

        case API_CALL_OK:
            return { ...state, error: null, tasks: action.payload, loading: false };

        case API_CALL_FAIL:
            return { ...state, error: action.payload, loading: false };
    
        case API_CALL_OK_NORESULT:
            return { ...state, error: null, loading: false };

		default:
			return state;
	}
}
