import React from 'react';
import classes from './row.module.css'
import Title from "../Title/title";
import Value from "../../components/value/value";
import {RowModel} from "./row.model";

const Row = ({titleText, titleSize, valueText, valueSize}: RowModel) => {
    return (
        <div className={classes.container}>
            <Title text={titleText + ":"} size={titleSize}/>
            <Value text={valueText} size={valueSize}/>
        </div>
    );
};

export default Row;
