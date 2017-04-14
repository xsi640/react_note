import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import PersonContainer from './containers/PersonContainer'
import reducers from './reducers'

const store = createStore(reducers)

render(
    <Provider store={store}>
        <PersonContainer />
    </Provider>,
    document.getElementById('root')
);
