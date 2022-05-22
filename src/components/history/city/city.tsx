import React from 'react';
import classes from './city.module.css'
import SetAnimationStack from "../../../apollo/operations/animationStack/setAnimationStack";
import {animationVar, weatherDataVar} from "../../../cache";
import SetWeatherData from "../../../apollo/operations/weatherData/setWeatherData";

const City = (city: any) => {
    const setAnimation = SetAnimationStack(animationVar);
    const setWeatherData = SetWeatherData(weatherDataVar);

    const onCityClicked = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        setAnimation()
        setWeatherData(city)
    };

    return (
        <div onClick={onCityClicked} className={classes.container}>
            {city.name}
        </div>
    );
};

export default City;
