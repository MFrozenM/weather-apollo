import React from 'react';
import classes from './history.module.css'
import {client} from "../../index";
import City from "./city/city";

const History = () => {
    const serializedState = client.cache.extract()
    const Cities = Object.values(serializedState).filter(item => item?.__typename === 'City')

    return (
        <div className={classes.container}>
            {Cities.map((city, index) => {
                return <City key={index} {...city}/>
            })}
        </div>
    );
};

export default History;

// const READ_Cities = gql`
//       query GetCities($name: String!) {
//         getCityByName(name: $name) {
//            id
//            country
//         }
//       }
// `;
//
// const cities = client.readQuery({
//     query: READ_Cities,
//     variables: {
//         name: "Rome",
//     },
// });
