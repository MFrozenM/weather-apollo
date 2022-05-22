import React from 'react';
import classes from './LeftContainer.module.css'
import AnimatedIcons from "../../components/Animated_Icons/AnimatedIcons";
import RowGroup from "../../components/row-group/rowGroup";
import {Columns} from "../../components/row-group/rowAnimatedWrapper/rowAnimatedWrapper.model";

const LeftContainer = ({setModalOn}: any) => {

    const onSearchClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation()
        setModalOn(true)
    };

    return (
        <div className={classes.container}>
            <AnimatedIcons/>
            <RowGroup column={Columns.Left}/>
            <span onClick={onSearchClick} className={classes.search_city}>Search for a city</span>
        </div>
    );
};

export default LeftContainer;
