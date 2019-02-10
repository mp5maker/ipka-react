import React, { Component, Fragment } from 'react'

// Importing for the routes
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Routes } from '../Constants/Routes'

// Pages
import UserList from '../Pages/UserList'
import UserDetails from '../Pages/UserDetails'
import Error404 from '../Pages/Error404'

/**
 * Heart of the app where the frontend routes are manipulated
 */
class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={Routes.root} component={UserList} />
                        <Route path={Routes.userList} component={UserList}/>
                        <Route path={Routes.userDetails} component={UserDetails} />
                        <Route component={Error404} />
                    </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}

export default App
