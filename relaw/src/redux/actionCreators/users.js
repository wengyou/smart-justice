import { 
    USER_LOGIN,
    USER_REGISTER,
    GET_USER_INFO,
    GET_ENTERPRISE_INFO,
    GET_LAWYER_INFO,
    SEND_EMAIL,
    CREATE_ORGANIZATION
} from '../actionTypes.js';

export const login = args => ({
    type: USER_LOGIN,
    args
});

export const register = args => ({
    type: USER_REGISTER,
    args
})

export const userInfo = () => ({
    type: GET_USER_INFO
})

export const enterpriseInfo = () => ({
    type: GET_ENTERPRISE_INFO
})

export const createOrganization = args => ({
    type: CREATE_ORGANIZATION,
    args
})

export const lawyerInfo = args => ({
    type: GET_LAWYER_INFO,
    args
})

export const sendEmail = args => ({
    type: SEND_EMAIL,
    args
})

