import AuthActions from '../actions/auth_actions';

const INITIAL_STATE = {
    isRegistered: false,
    isAuthenticated: false,
    isUser: false,
    currentUser: {},
    error: "",
    isError: false
}
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case AuthActions.SIGN_UP:
            return Object.assign({}, state, { isRegistered: false })
        case AuthActions.SIGN_UP_WITH_SUCCESSFUL:
            return Object.assign({}, state, { store: action.user, isRegistered: true })
        case AuthActions.SIGN_UP_WITH_REJECTED:
            return Object.assign({}, state, { error: action.error, isRegistered: false, isError: true })


        case AuthActions.SIGN_IN:
            return Object.assign({}, state, { isRegistered: false })
        case AuthActions.SIGN_IN_WITH_SUCCESSFUL:
            return Object.assign({}, state, { currentUser: action.user, isAuthenticated: true, isError: false, isUser: true })

        case AuthActions.SIGN_IN_WITH_REJECTED:
            return Object.assign({}, state, { error: action.error, isError: true })

        case AuthActions.SIGN_OUT:
            return Object.assign({}, state, { isError: false })
        case AuthActions.SIGN_OUT_WITH_SUCCESSFUL:
            return Object.assign({}, state, { isAuthenticated: false, isError: false, isUser: false })
        case AuthActions.SIGN_OUT_WITH_REJECTED:
            return Object.assign({}, state, { isAuthenticated: true, isError: true })

        default:
            return state;
    }
}