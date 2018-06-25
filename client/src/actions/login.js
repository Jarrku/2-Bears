import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
// import Config from 'react-native-config';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

const requestLogin = creds => ({
    type: 'LOGIN_REQUEST',
    isFetching: true,
    isAuthenticated: false,
    creds,
});

const receiveLogin = user => ({
    type: 'LOGIN_SUCCESS',
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token,
});

const loginError = message => ({
    type: 'LOGIN_FAILURE',
    isFetching: false,
    isAuthenticated: false,
    message,
});

const requestLogout = () => ({
    type: 'LOGOUT_REQUEST',
    isFetching: true,
    isAuthenticated: true,
});

const receiveLogout = () => ({
    type: 'LOGOUT_SUCCESS',
    isFetching: false,
    isAuthenticated: false,
});

exports.loginUser = (creds) => {
    console.log('This is Creds: ', creds);
    return (dispatch) => {
        dispatch(requestLogin(creds));

        return axios.get(`http://localhost:5000/api/users/${creds.email}/${creds.password}`)
            .then((response) => {
                console.log(response);
                console.log('this is asnycstorage 60!!!!!!!!!!!!!', AsyncStorage);
                if (!response.data) {
                    dispatch(loginError('Bad Request...'));
                    return Promise.reject(response);
                }
                AsyncStorage.setItem('id_token', response.data.id_token);
                // AsyncStorage.setItem('access_token', response.data.id_token);
                dispatch(receiveLogin(response.data));
                console.log('before dashboard');
                console.log(AsyncStorage, 'this is asnycstorage 60!!!!!!!!!!!!!')
                console.log('this is the token when they signup', AsyncStorage.getItem('id_token'));
                Actions.main();
                console.log('after dashboard');
            })
            .catch((err) => {
                console.log('Error: ', err);
            });
    };
};



exports.logoutUser = () => {
    console.log('yooo logout ran');
    return (dispatch) => {
        console.log('got into dispatch for logout')
        dispatch(requestLogout());
        console.log('got past the dispatch');
        AsyncStorage.removeItem('id_token');
        dispatch(receiveLogout());
        Actions.login();
        console.log('did you receive logout');
    };
};