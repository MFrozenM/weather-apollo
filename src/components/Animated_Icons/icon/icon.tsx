import React from 'react';
import classes from './icon.module.css'

interface iconModel {
    icon: any
}

const Icon = ({icon}: iconModel) => {
    return <img className={classes.container} src={icon}/>;
};

export default Icon;
