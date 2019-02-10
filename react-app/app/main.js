import React from 'react'

import App from './App/App'

// Importing for rendering
import { render } from 'react-dom'

// Higher Order Component ==> Connecting the stores
import { Provider } from 'react-redux'

// Importing to create a object store as well as perfom async function
import { createStore, applyMiddleware } from 'redux'

// Import the RootReducer 
import { RootReducer } from './Reducers/RootReducer'

// Importing thunk to allow async functions to work for axios
import thunk from 'redux-thunk'

// Create a One store (object) ==> Redux
const store = createStore(RootReducer, applyMiddleware(thunk))

// Root Level of the Single Page App
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-app')
)