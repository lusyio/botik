import React, {Component} from 'react';
import classes from './Search.module.css';

class Search extends Component {
    render() {
        return (
            <div>
                <input className={classes.search__input} placeholder={this.props.placeholder}/>
            </div>
        );
    }
}

export default Search;