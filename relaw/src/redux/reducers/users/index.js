import { 
    USER_LOGIN_OK
 } from '../../actionTypes'

const defaultState = {
    login: false,
    type: '',
    real_name: '',
    username: '',
    token: '',
    register_time: '',
    team_name: '',
    work_id: '',

};

export default (state = defaultState, action) => {
    switch(action.type) {
        case USER_LOGIN_OK:
            return {
                ...state,
                login: true
            };

        default:
            return state;
    }  
};