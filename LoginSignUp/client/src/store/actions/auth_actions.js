
export default class AuthActions {


    static SIGN_UP = "SIGN_UP";
    static SIGN_UP_WITH_SUCCESSFUL = "SIGN_UP_WITH_SUCCESSFULL";
    static SIGN_UP_WITH_REJECTED = "SIGN_UP_WITH_REJECTED";


    static SIGN_IN = "SIGN_IN";
    static SIGN_IN_WITH_SUCCESSFULL = "SIGN_IN_WITH_SUCCESSFULL";
    static SIGN_IN_WITH_REJECTED = "SIGN_IN_WITH_REJECTED";

    static SIGN_OUT = "SIGN_OUT";
    static SIGN_OUT_WITH_SUCCESSFUL = "SIGN_OUT_WITH_SUCCESSFULL";
    static SIGN_OUT_WITH_REJECTED = "SIGN_OUT_WITH_REJECTED";



    static SignUp() {
        return {
            type: AuthActions.SIGN_UP
        }
    }
    static SignUpWithSuccessFul(user) {
        return {
            type: AuthActions.SIGN_UP_WITH_SUCCESSFUL,
            user

        }
    }
    static SignUpWithRejected(error) {
        return {
            type: AuthActions.SIGN_UP_WITH_REJECTED,
            error
        }
    }


    static SignIn() {
        return {
            type: AuthActions.SIGN_IN
        }
    }

    static SignInWithSuccessFul(user) {
        return {
            type: AuthActions.SIGN_IN_WITH_SUCCESSFULL,
            user: user
        }
    }

    static SignInWithRejected(error) {
        return {
            type: AuthActions.SIGN_IN_WITH_REJECTED,
            error
        }
    }
    static SignOut() {
        return {
            type: AuthActions.SIGN_OUT
        }
    }
    static SignOutWithSuccessFul() {
        return {
            type: AuthActions.SIGN_OUT_WITH_SUCCESSFUL
        }
    }
    static SignUpWithRejected(error) {
        return {
            type: AuthActions.SIGN_OUT_WITH_REJECTED,
            error
        }
    }

}