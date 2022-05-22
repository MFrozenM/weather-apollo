import {ReactiveVar} from "@apollo/client";
import {WeatherDataModel} from "./models/weatherDataModel";
import {animationVar} from "../../../cache";

export default function SetWeatherData(weatherDataVar: ReactiveVar<WeatherDataModel>) {
    return (data: any) => {
        const currentValue = weatherDataVar();
        const currentStack = animationVar();
        weatherDataVar({...currentValue, [currentStack]: data});
    }
}
