interface CityTypes {
    id: number
    name: string
    country: string
    weather: WeatherTypes
}

interface SummaryTypes {
    description: string
    title: string
    // icon: "04d"
}

interface WeatherTypes {
    summary: SummaryTypes
}

export interface GET_WEATHER_TYPES {
    getCityByName: CityTypes
}
