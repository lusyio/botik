// React
import React from 'react';

// Third-party
import {NavLink} from 'react-router-dom';

// Styles
import classes from './Placeholder.module.css';

// Typescript
import {IPlaceholder} from './IPlaceholder';

const Placeholder: React.FC<IPlaceholder> = props => {
    return (
        <div className={classes.placeholder + ' card'}>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-3">
                        <img src="imgs/placeholder-img.png" alt="placeholder"/>
                    </div>
                    <div className="col-lg-9">
                        <p className={classes.title}>
                            {props.title}
                        </p>
                        <p className={classes.description}>
                            {props.description}
                        </p>
                    </div>
                </div>
                <NavLink to={props.link}>{props.linkName}</NavLink>
            </div>
        </div>
    );
}

export default Placeholder;
