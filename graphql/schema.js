const axios = require('axios');

const LAUNCH_ENDPOINT = 'https://api.spacexdata.com/v3/launches';
const ROCKET_ENDPOINT = 'https://api.spacexdata.com/v3/rockets';


const {
   GraphQLObjectType,
   GraphQLInt,
   GraphQLString,
   GraphQLBoolean,
   GraphQLList,
   GraphQLSchema
} = require('graphql');

// Launch Type
const LaunchType = new GraphQLObjectType({
   name: 'Launch',
   fields: () => ({
      flight_number: { type: GraphQLInt },
      mission_name: { type: GraphQLString },
      launch_year: { type: GraphQLString },
      launch_date_local: { type: GraphQLString },
      launch_success: { type: GraphQLBoolean },
      rocket: { type: RocketType }
   })
});

// Rocket Type
const RocketType = new GraphQLObjectType({
   name: 'Rocket',
   fields: () => ({
      rocket_id: { type: GraphQLString },
      rocket_name: { type: GraphQLString },
      rocket_type: { type: GraphQLString }
   })
});

// Root Query 
const RootQuery = new GraphQLObjectType({
   name: 'RootQueryType',
   fields: {
      launches: {
         type: new GraphQLList(LaunchType),
         resolve(parents, args) {
            return axios.get(LAUNCH_ENDPOINT)
               .then(res => res.data);
         }
      },
      launch: {
         type: LaunchType,
         args: {
            flight_number: { type: GraphQLInt }
         },
         resolve(parent, args) {
            return axios.get(`${LAUNCH_ENDPOINT}/${args.flight_number}`)
               .then(res => res.data);
         }
      },
      rockets: {
         type: new GraphQLList(RocketType),
         resolve(parents, args) {
            return axios.get(ROCKET_ENDPOINT)
               .then(res => res.data);
         }
      },
      rocket: {
         type: RocketType,
         args: {
            id: { type: GraphQLString }
         },
         resolve(parent, args) {
            return axios.get(`${ROCKET_ENDPOINT}/${args.id}`)
               .then(res => res.data);
         }
      }
   }
})

module.exports = new GraphQLSchema({
   query: RootQuery
});