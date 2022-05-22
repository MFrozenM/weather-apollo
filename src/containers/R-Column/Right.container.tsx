import React from 'react';
import classes from './RightContainer.module.css'
import RowGroup from "../../components/row-group/rowGroup";
import {Columns} from "../../components/row-group/rowAnimatedWrapper/rowAnimatedWrapper.model";
import History from "../../components/history/history";

const RightContainer = () => {
    return (
        <div className={classes.container}>

            <RowGroup column={Columns.Right}/>

            <History/>

        </div>
    );
};

export default RightContainer;
