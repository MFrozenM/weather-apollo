import {gql} from "@apollo/client";

export const READ_Cities = gql`
  query GetCities($name: String!) {
    getCityByName(name: $name) {
        id
        country
    }
  }
`;
