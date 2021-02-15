import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import PostPicture from './PostPicture'
import Register from './Register'

class AppRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route path ="/register" component={ Register }/>
                <Route path ="/login" component={ Login }/>
                <Route path ="/picture/new" component={ PostPicture }/>
            </Switch>
        )
    }
}

export default AppRouter