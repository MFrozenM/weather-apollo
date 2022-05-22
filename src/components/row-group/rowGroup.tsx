import React from 'react';
import classes from './rowGroup.module.css'
import RowAnimatedWrapper from "./rowAnimatedWrapper/rowAnimatedWrapper";
import {useReactiveVar} from "@apollo/client";
import {animationVar} from "../../cache";
import {CSSTransition} from "react-transition-group";
import {Columns} from "./rowAnimatedWrapper/rowAnimatedWrapper.model";

interface Props {
    column: Columns
}

const RowGroup = ({column}: Props) => {
    const active = useReactiveVar(animationVar);

    return (
        <div className={classes.container} style={{marginTop: column===Columns.Left ? "50px" : "0", marginLeft: column===Columns.Right ? "140px" : "0", height: column===Columns.Left ? "auto" : "90vh"}}>
            <CSSTransition in={active === 0} timeout={500} classNames="icon" unmountOnExit>
                <RowAnimatedWrapper stack={"0"} column={column}/>
            </CSSTransition>

            <CSSTransition in={active === 1} timeout={500} classNames="icon" unmountOnExit>
                <RowAnimatedWrapper stack={"1"} column={column}/>
            </CSSTransition>
        </div>
    );
};

export default RowGroup;
