import React from 'react';
import classes from './AnimatedIcons.module.css'
import {CSSTransition} from "react-transition-group"
import {useReactiveVar} from "@apollo/client";
import {animationVar} from "../../cache";
import Rainbow_Icon from "../../resources/weather_icon/rainbow.svg";
import Partly_cloud_Icon from "../../resources/weather_icon/part_cloud.svg";
import Rainy_Icon from "../../resources/weather_icon/rainy.svg";
import Moon_Icon from "../../resources/weather_icon/moon.svg";
import Snow_Icon from "../../resources/weather_icon/snow.svg";
import Freeze_Icon from "../../resources/weather_icon/freeze.svg";

const Icon = React.lazy(() => import("./icon/icon"));

const getRandomIcon: any = {
    0: Partly_cloud_Icon,
    1: Rainbow_Icon,
    2: Rainy_Icon,
    3: Moon_Icon,
    4: Snow_Icon,
    5: Freeze_Icon,
}

const pickIcon = (() => {
    let lastIndexX1:any = null
    let lastIndexX2:any = null

    return () => {
        const active = useReactiveVar(animationVar);
        console.log(active);
        if (active === 1) {
            lastIndexX1 = getRandomIcon[Math.floor(Math.random() * 6)]
        } else {
            lastIndexX2 = getRandomIcon[Math.floor(Math.random() * 6)]
        }

        return [lastIndexX1, lastIndexX2]
    }

})();

const AnimatedIcons = () => {
    const active = useReactiveVar(animationVar);
    const icons = pickIcon()
    return (
        <div className={classes.container}>
            <CSSTransition in={active === 1} timeout={500} classNames="icon" unmountOnExit>
                <Icon icon={icons[0]}/>
            </CSSTransition>

            <CSSTransition in={active === 0} timeout={500} classNames="icon" unmountOnExit>
                <Icon icon={icons[1]}/>
            </CSSTransition>
        </div>
    );
};

export default React.memo(AnimatedIcons);
