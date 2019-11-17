import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';


const uri = 'http://localhost:8080/v1/graphql'; // <-- add the URL of the GraphQL server here
// mod by TJP see my gist https://gist.github.com/timbophillips/1abda29e8d659ed918ae815908892997
const wsURI = 'ws://localhost:8080/v1/graphql';

export function createApollo(httpLink: HttpLink) {
  return {
    link:
      // Apollo function that returns different ApolloLink handlers for different requests
      split(
        ({ query }) => {
          let definition = getMainDefinition(query);
          return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
        },
        // if above test is true then its a WS
        new WebSocketLink({
          uri: wsURI,
          options: {
            reconnect: true,
          }
        }),
        // otherwise boring old HTTP
        httpLink.create({ uri }),
      ),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
