// React
import React from 'react';
import classes from './BanksBlock.module.css';

// Typescript

const BanksBlock: React.FC = () => {
    return (
        <div className={classes.bankCards + ' d-flex flex-wrap'}>
            <div className={classes.bank + ' card'}>
                <div className="card-body-small d-flex">
                    <div className="bankCard">
                        С
                    </div>
                    <div className="bankCardName">
                        <p>
                            4.590 ₽
                        </p>
                        <span>
                            Сбербанк
                        </span>
                    </div>
                </div>
            </div>
            <div className={classes.bank + ' card'}>
                <div className="card-body-small d-flex">
                    <div className="bankCard">
                        С
                    </div>
                    <div className="bankCardName">
                        <p>
                            4.590 ₽
                        </p>
                        <span>
                            Сбербанк
                        </span>
                    </div>
                </div>
            </div>
            <div className={classes.bank + ' card'}>
                <div className="card-body-small d-flex">
                    <div className="bankCard">
                        С
                    </div>
                    <div className="bankCardName">
                        <p>
                            4.590 ₽
                        </p>
                        <span>
                            Сбербанк
                        </span>
                    </div>
                </div>
            </div>
            <div className={classes.bank + ' card'}>
                <div className="card-body-small d-flex">
                    <div className="bankCard">
                        С
                    </div>
                    <div className="bankCardName">
                        <p>
                            4.590 ₽
                        </p>
                        <span>
                            Сбербанк
                        </span>
                    </div>
                </div>
            </div>
            <div className={classes.bank + ' card'}>
                <div className="card-body-small d-flex">
                    <div className="bankCard">
                        С
                    </div>
                    <div className="bankCardName">
                        <p>
                            4.590 ₽
                        </p>
                        <span>
                            Сбербанк
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BanksBlock;
