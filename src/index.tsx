import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ApolloClient, ApolloProvider} from "@apollo/client";
import {cache} from "./cache";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const client = new ApolloClient({
    uri: 'https://graphql-weather-api.herokuapp.com/gpl',
    cache
});

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
