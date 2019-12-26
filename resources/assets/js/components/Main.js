import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

import '../../sass/main.scss';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <h4 className='hello-world'>Hello World</h4>;
    }
}

export default Main;
