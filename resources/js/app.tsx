// React
import React from 'react'
import ReactDOM from 'react-dom';

// Third-party
import {BrowserRouter as Router} from 'react-router-dom';

// App
import Index from './index'

const application = (
    <Router>
        <Index/>
    </Router>
);

ReactDOM.render(application, document.getElementById('root'));
