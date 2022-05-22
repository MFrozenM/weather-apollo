import React, {useEffect, useRef, useState} from 'react';
import classes from './input.module.css'
import {useLazyQuery} from "@apollo/client";
import {GET_WEATHER_TYPES} from "../../weather/queries/weather.type";
import {GET_WEATHER} from "../../weather/queries/weather.query";
import SetAnimationStack from "../../../apollo/operations/animationStack/setAnimationStack";
import {animationVar, weatherDataVar} from "../../../cache";
import SetWeatherData from "../../../apollo/operations/weatherData/setWeatherData";

const Input = ({setModalOn}: any) => {
    const inputRef = useRef<any>(null);
    const [inputValue, setInputValue] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const setAnimation = SetAnimationStack(animationVar);
    const setWeatherData = SetWeatherData(weatherDataVar);

    useEffect(()=>{
        inputRef.current !== null && inputRef.current.focus()
    }, [])

    const [getWeather, {loading}] = useLazyQuery<GET_WEATHER_TYPES>(GET_WEATHER);

    const onGetCity = (e: any) => {
        e.stopPropagation()
        getWeather({variables: {name: inputValue}}).then((result) => {
            // If we don't provide the city name in the response
            if (result.data?.getCityByName === null) {
                setError(true)
                return
            }

            // If we have the city name
            setModalOn(false)
            setAnimation()
            setWeatherData(result.data?.getCityByName)
        })
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setInputValue(e.target.value)
    };

    return (
        <div className={classes.container} onClick={(e) => e.stopPropagation()}>

            <input ref={inputRef} onChange={onInputChange} className={classes.main_input}
                   placeholder={"Please enter a city"}/>

            {error &&
            <span className={classes.error} onClick={onGetCity}>The city name {inputValue} does not exist :)</span>}

            <span className={classes.confirm_btn} onClick={onGetCity}>{loading ? "Loading" : "Confirm"}</span>

        </div>
    );
};

export default Input;
