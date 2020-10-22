// React
import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {Collapse} from 'react-bootstrap';
import classes from './MainBlock.module.css';
import MainTable from '../MainTable/MainTable';

// Typescript

const MainBlock: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="d-flex">
                <h3>Операции</h3>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="add-new-operation"
                    aria-expanded={open}
                    className={classes.addButton}
                >
                    +
                </Button>
            </div>
            <Collapse in={open}>
                <div id="add-new-operation">
                    <div className="card mt-2">
                        <div className="card-body">
                            ds
                        </div>
                    </div>
                </div>
            </Collapse>
            <div className="mt-2">
                <MainTable/>
            </div>
        </div>
    );
}

export default MainBlock;
