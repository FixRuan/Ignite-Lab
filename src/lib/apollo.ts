import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4owbqgt1fmb01xlc5sbdi72/master',
    cache: new InMemoryCache()
})