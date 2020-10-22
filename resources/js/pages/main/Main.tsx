// React
import React from 'react';

import TopBlock from '../../components/main/TopBlock/TopBlock';
import BanksBlock from '../../components/main/BanksBlock/BanksBlock';
import MainBlock from '../../components/main/MainBlock/MainBlock';

// Typescript

const Main: React.FC = () => {
    return (
        <div>
            <div>
                <TopBlock/>
            </div>
            <div className="mt-3">
                <BanksBlock/>
            </div>
            <div className="mt-3">
                <MainBlock/>
            </div>
        </div>
    );
}

export default Main;
