import React, {useState} from 'react';
import './App.css';
import {useLazyQuery} from "@apollo/client";
import "./animations/icon-animate.css"
import "./animations/modal.css"
import LeftContainer from "./containers/L-Column/Left.container";
import {weatherDataVar} from "./cache";
import SetWeatherData from "./apollo/operations/weatherData/setWeatherData";
import {useFirstRender} from "./hooks/useFirstRender";
import Modal from "./components/modal/modal";
import RightContainer from "./containers/R-Column/Right.container";
import {CSSTransition} from "react-transition-group";
import {GET_WEATHER} from "./apollo/queries/weather.query";
import {GET_WEATHER_TYPES} from "./apollo/queries/weather.type";

function App() {
    const [modalOn, setModalOn] = useState<boolean>(false);
    const setWeatherData = SetWeatherData(weatherDataVar)

    useFirstRender(() => {
        getWeather({variables: {name: "Berlin"}}).then((result) => {
            setWeatherData(result.data?.getCityByName)
        })
    }, [])

    const [getWeather] = useLazyQuery<GET_WEATHER_TYPES>(GET_WEATHER);


    return (
        <div className="App">
            <CSSTransition in={modalOn} timeout={500} classNames="modal" unmountOnExit>
                <Modal setModalOn={setModalOn}/>
            </CSSTransition>
            <header className="App-header">
                <LeftContainer setModalOn={setModalOn}/>
                <RightContainer/>
            </header>
        </div>
    );
}

export default App;

// const {loading, error, data } = useQuery<GET_WEATHER_TYPES>(GET_WEATHER, {
//     variables: {name},
//     onCompleted: (data) => {
//         console.log(data.getCityByName);
//     },
//     onError: (error) => {
//         console.log(error);
//     },
// });

// if (loading) {
//     return <div className="App">
//         <header className="App-header">
//             <p>Loading...</p>
//         </header>
//     </div>
// }

// if (error) return <div className="App">
//     <header className="App-header">
{/*        <p>Error :(</p>*/
}
{/*    </header>*/
}
{/*</div>;*/
}
