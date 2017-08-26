import AuthActions from '../actions/auth_actions';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
// import {
//   NavigationScreenProps,
// } from 'react-navigation';
const rootUrl = 'http://192.168.56.1:3090';
export default class AuthMiddleware {


    static signup(user) {
        return (dispatch) => {
            console.log("middle", user)
            axios.post(`${rootUrl}/api/userSignup`, user)
                .then((response) => {
                    let user = response.data.user;
                    AsyncStorage.setItem('token', response.data.token);
                    console.log(response.data.message);
                    dispatch(AuthActions.SignUpWithSuccessFul(user))
                    // console.log(NavigationScreenProps)
                })
                .catch((error) => {
                    console.log(error);
                    dispatch(AuthActions.SignUpWithRejected())
                })
        }
    }

    static signin(user) {
        return (dispatch) => {
            console.log(user)
            axios.post(`${rootUrl}/api/userSignIn`, user)
                .then((response) => {
                    if (response.status === 200) {
                        let user = response.data.user;
                        console.log("user", user)
                        AsyncStorage.setItem('token', response.data.token);
                        dispatch(AuthActions.SignInWithSuccessFul(user))
                    }
                })
                .catch((error) => {
                    console.log(error);
                    dispatch(AuthActions.SignInWithRejected())
                })
        }
    }

}