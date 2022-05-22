import React from 'react';
import classes from './value.module.css'
import {ValueModel} from "./value.model";

const styles = {
    small: classes.small,
    medium: classes.medium,
    large: classes.large,
}

const Value = ({text, size}: ValueModel) => <span className={`${classes.value} ${styles[size]}`}>{text}</span>

export default Value;
