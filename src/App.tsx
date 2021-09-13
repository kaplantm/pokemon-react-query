import { Box, Container } from "@material-ui/core";
import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/pokemon";
import queryClient from "./utils/react-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Box p={1}>
          <nav>
            <Link to="/" title="Home">
              <img src="./images/pokemon.png" alt="Pokemon" height="50" />
            </Link>
          </nav>
        </Box>
        <Container>
          <Box mt={3} mb={3}>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/pokemon">
                <HomePage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Box>
        </Container>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
