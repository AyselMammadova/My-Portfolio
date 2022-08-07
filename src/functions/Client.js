import { GraphQLClient } from "graphql-request";

export const graphcms = new GraphQLClient (
    process.env.PUBLIC_GRAPHCMS_URL,
    {
        headers: {}
    }
);