import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Typography, Link, CssBaseline } from "@material-ui/core";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import PlayPage from "./pages/play";
import HomePage from "./pages/home";
// TODO: now lint

const queryClient = new QueryClient();

function App() {
  return (
    // <CssBaseline>
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <header className="App-header">
            <Typography variant="h1">PokéGuesser</Typography>
            <nav>
              <ul>
                <li>
                  <Link component={RouterLink} to="/">
                    <Typography variant="h4">Home</Typography>
                  </Link>
                </li>
                <li>
                  <Link component={RouterLink} to="/play">
                    <Typography variant="h4">Play</Typography>
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/play">
              <PlayPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    // </CssBaseline>
  );
}

export default App;
