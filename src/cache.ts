import {InMemoryCache, makeVar, ReactiveVar} from "@apollo/client";
import {WeatherDataModel} from "./apollo/operations/weatherData/models/weatherDataModel";

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                animationStack: {
                    read() {
                        return animationVar();
                    }
                },

                weatherData: {
                    read() {
                        return weatherDataVar();
                    }
                },
            }
        }
    }
});


// Better to be placed in animationStack folder
export const animationVar: ReactiveVar<number> = makeVar<number>(
    0
);

// Better to be placed in weatherData folder
export const weatherDataVar: ReactiveVar<WeatherDataModel> = makeVar<WeatherDataModel>(
    {"0": null, "1": null}
);
