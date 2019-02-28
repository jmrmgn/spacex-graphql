import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import RocketItem from './RocketItem';

const ROCKETS_QUERY = gql`
   query Rockets {
      rockets {
         rocket_id
         rocket_name
         rocket_type
      }
   }
`;

class Rockets extends Component {
   render() {
      return (
         <Fragment>
            <h1 className="display-4 my-3">Rockets</h1>
            <Query query={ROCKETS_QUERY}>
               {
                  ({ loading, error, data }) => {
                     if (loading) return <h4>Loading...</h4>
                     if (error) console.log(error);

                     return (
                        data.rockets.map((rocket, index) => {
                           return <RocketItem key={index} rocket={rocket} />
                        })
                     );
                  }
               }
            </Query>
         </Fragment>
      )
   }
}

export default Rockets;
