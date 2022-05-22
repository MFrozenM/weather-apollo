import React from 'react';
import classes from './rowAnimatedWrapper.module.css'
import Row from "../../row/row";
import {TitleSizes} from "../../Title/title.model";
import {ValueSizes} from "../../value/value.model";
import {useReactiveVar} from "@apollo/client";
import {weatherDataVar} from "../../../cache";
import {Columns, RowAnimatedWrapperModel} from "./rowAnimatedWrapper.model";

const RowAnimatedWrapper = ({stack, column}: RowAnimatedWrapperModel) => {
    const weatherData = useReactiveVar(weatherDataVar)[stack === "0" ? "0" : "1"];

    return (
        <div className={classes.container}>
            {column === Columns.Left ?
                <><Row titleText={"City"} titleSize={TitleSizes.Large} valueText={weatherData?.name}
                       valueSize={ValueSizes.Medium}/>
                    <Row titleText={"Country"} titleSize={TitleSizes.Large} valueText={weatherData?.country}
                         valueSize={ValueSizes.Medium}/></>
                :
                <>
                    <Row titleText={"Summary"} titleSize={TitleSizes.Large} valueText={weatherData?.weather.summary.title}
                         valueSize={ValueSizes.Medium}/>
                    <Row titleText={"Description"} titleSize={TitleSizes.Large} valueText={weatherData?.weather.summary.description}
                         valueSize={ValueSizes.Medium}/>
                    <Row titleText={"Actual"} titleSize={TitleSizes.Large} valueText={weatherData?.weather.temperature.actual}
                         valueSize={ValueSizes.Medium}/>
                    <Row titleText={"Feels Like"} titleSize={TitleSizes.Large} valueText={weatherData?.weather.temperature.feelsLike}
                         valueSize={ValueSizes.Medium}/>
                    <Row titleText={"Clouds"} titleSize={TitleSizes.Large} valueText={weatherData?.weather.clouds.all}
                         valueSize={ValueSizes.Medium}/>
                    <Row titleText={"Visibility"} titleSize={TitleSizes.Large} valueText={weatherData?.weather.clouds.visibility}
                         valueSize={ValueSizes.Medium}/>
                    <Row titleText={"Humidity"} titleSize={TitleSizes.Large} valueText={weatherData?.weather.clouds.humidity}
                         valueSize={ValueSizes.Medium}/>
                </>
            }
        </div>
    );
};

export default React.memo(RowAnimatedWrapper);
