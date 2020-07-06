import React from "react"
import { Route } from "react-router-dom"
import LoginView from "./components/LoginView"
import RegisterView from "./components/RegisterView"
import Navbar from "./components/Navbar"

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Navbar} />
    <Route exact path="/login" component={LoginView} />
    <Route exact path="/register" component={RegisterView} />
  </div>
)

export default BaseRouter
