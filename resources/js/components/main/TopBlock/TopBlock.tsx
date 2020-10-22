// React
import React from 'react';
import classes from './TopBlock.module.css';
import CountUp from 'react-countup';

// Typescript

const TopBlock: React.FC = () => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-3">
                        <div className={classes.mainMoneyCount}>
                            <p>
                                <CountUp
                                    start={39.890}
                                    end={41.012}
                                    duration={2.75}
                                    decimals={3}
                                    decimal="."
                                /> ₽
                            </p>
                            <span>Общий остаток</span>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={classes.mainMoneyCount}>
                            <p className="text-success">
                                +14.310 ₽
                            </p>
                            <span>Доход за октябрь</span>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={classes.mainMoneyCount}>
                            <p className="text-danger">
                                -7.890 ₽
                            </p>
                            <span>Расход за октябрь</span>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={classes.mainMoneyCount}>
                            <p className="text-warning">
                                +7.690 ₽
                            </p>
                            <span>Прибыль за октябрь</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBlock;
