import { GraphQLClient } from "graphql-request";

const isPorduction = process.env.NODE_ENV === 'production';
const apiUrl = isPorduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || '' : 'http://';

const client = new GraphQLClient('apiUrl');

const makeGraphQLRequest = async (query: string, variables: {}) => {
    try {
        // client.request...
    }catch(error) {
        throw(error);
    }
}