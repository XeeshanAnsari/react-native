import React, { Component } from "react"
import LoginForm from "./container/LoginForm/LoginForm"
import SignUpForm from "./container/SignUpForm/SignUpForm"
import Home from "./container/Home/Home"
import { StackNavigator, DrawerNavigator } from "react-navigation"

const DrawerNavigation = DrawerNavigator({
    LoginRoute: {
        screen: LoginForm
    },
    SignupRoute: {
        screen: SignUpForm
    }

})

export default DrawerNavigation