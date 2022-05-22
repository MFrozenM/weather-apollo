import React from 'react';
import classes from './title.module.css'
import {TitleModel} from "./title.model";

const styles = {
    small: classes.small,
    medium: classes.medium,
    large: classes.large,
}

const Title = ({text, size}: TitleModel) => <span className={`${classes.title} ${styles[size]}`}>{text}</span>

export default Title;
