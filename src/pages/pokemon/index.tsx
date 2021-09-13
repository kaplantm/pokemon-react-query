import { Route, useRouteMatch, Switch } from "react-router";
import HomePage from "./home";
import PokemonPage from "./[id]";

function HomePageWithSubRouter() {
  const routeMatch = useRouteMatch();

  return (
    <Switch>
      <Route path={`${routeMatch.path}/:pokemonId`}>
        <PokemonPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default HomePageWithSubRouter;
