import {gql} from "@apollo/client";

export const GET_WEATHER = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
            id
            name
            country
            weather {
              summary {
                title
                description
                icon
              }
              temperature {
                    actual
                    feelsLike
                  }
                  wind {
                    speed
                    deg
                  }
                  clouds {
        all
        visibility
        humidity
      }
            }
      }
}
`;
