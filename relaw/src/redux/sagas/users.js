import {takeEvery, put, call} from "redux-saga/effects";
import Service from '../../utils/Servise';
import { message } from 'antd';
import {
    USER_LOGIN,
    USER_REGISTER,
    TOGGLE_LOADING_ON,
    TOGGLE_LOADING_OFF,
    GET_USER_INFO,
    GET_USER_INFO_OK,
    GET_ENTERPRISE_INFO,
    GET_ENTERPRISE_INFO_OK,
    GET_LAWYER_INFO,
    GET_LAWYER_INFO_OK,
    SEND_EMAIL,
    CREATE_ORGANIZATION
} from '../actionTypes';

function *login(args){
    try {
        yield put({ type: TOGGLE_LOADING_ON});
        const res = yield call(Service.post, '/user/login', args.args);
        yield put({ type: TOGGLE_LOADING_OFF});
        if(res.data.status === 200){
            message.success('登陆成功！！');
            localStorage.setItem('username', args.args.username);
        } else {
            message.error(res.data.msg);
        }
    } catch (e) {

    }
}

function *register(args){
    try {
        const { username, email } = args.args;
        const params = {
            username,
            email,
            type: 'reg'
        }

        yield put({ type: TOGGLE_LOADING_ON});
        const res = yield call(Service.post, '/user/register', args.args);
        yield put({
            type: SEND_EMAIL,
            args: params
        })
        yield put({ type: TOGGLE_LOADING_OFF});
        if(res.data.status === 200){
            message.success('注册成功！！');
            localStorage.setItem('username', args.args.username);
        } else {
            message.error(res.data.msg);
        }
    } catch (e) {

    }
}

function *userInfo(){
    try {
        yield put({ type: TOGGLE_LOADING_ON});
        const res = yield call(Service.get, `/user/info`);
        yield put({ type: TOGGLE_LOADING_OFF});
        if(res.data.status === 200){
          //  message.success('登陆成功！！');
        } else {
            message.error(res.data.msg);
        }
    } catch (e) {

    }
}

function *enterpriseInfo(args){
    try {
        const { id } = args.args
        yield put({ type: TOGGLE_LOADING_ON});
        const res = yield call(Service.get, `/lawyer/team/info?id=${id}`);
        yield put({ type: TOGGLE_LOADING_OFF});
        if(res.data.status === 200){
            message.success('登陆成功！！');
            localStorage.setItem('username', args.args.username);
        } else {
            message.error(res.data.msg);
        }
    } catch (e) {

    }
}
function *lawyerInfo(){
    try {
        yield put({ type: TOGGLE_LOADING_ON});
        const res = yield call(Service.get, '/lawyer/info');
        yield put({ type: TOGGLE_LOADING_OFF});
        if(res.data.status === 200){
            //message.success('登陆成功！！');
        } else {
            message.error(res.data.msg);
        }
    } catch (e) {

    }
}
function *sendEmail(args){
    try {
        let url = '';
        const { username, email, type } = args.args;
        const data = {username, email};
        switch(type){
            case 'reg':
                url = `/user/email?username=${username}&email=${email}`;
                break;
            case 'invite':
                url = `/lawyer/email?username=${username}&email=${email}`;
                break;
            default:
                return url;
        }
        yield put({ type: TOGGLE_LOADING_ON});
        const res = yield call(Service.get, url);
        yield put({ type: TOGGLE_LOADING_OFF});
        if(res.data.status === 200){
            message.success('发送成功');
        } else {
            message.error(res.data.msg);
        }
    } catch (e) {

    }
}

function *createOrganization(args){
    try {
        const { scale, phone, team_name, callback } = args.args;
        const params = { scale, phone, team_name };
        yield put({ type: TOGGLE_LOADING_ON});
        const res = yield call(Service.post, '/lawyer/team/create', params);
        yield put({ type: TOGGLE_LOADING_OFF});
        if(res.data.status === 200){
            message.success('创建成功！');
            callback(false);
        } else {
            message.error(res.data.msg);
        }
    } catch (e) {

    }
}

export default function *rootUsers(){
    yield takeEvery(USER_LOGIN, login);
    yield takeEvery(USER_REGISTER, register);
    yield takeEvery(GET_USER_INFO, userInfo);
    yield takeEvery(GET_LAWYER_INFO, lawyerInfo);
    yield takeEvery(GET_ENTERPRISE_INFO, enterpriseInfo);
    yield takeEvery(SEND_EMAIL, sendEmail);
    yield takeEvery(CREATE_ORGANIZATION, createOrganization);
}