import { CssBaseline } from "@material-ui/core";
import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePageWithSubRouter from "./pages/pokemon";
import HomePage from "./pages/pokemon/home";
import useStyles from "./use-styles";
import queryClient from "./utils/react-query";

function App() {
  const classes = useStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Router>
        <nav className={classes.navContainer}>
          <Link to="/" title="Home">
            <img src="/images/pokemon.png" alt="Pokemon" height="50" />
          </Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/pokemon">
            <HomePageWithSubRouter />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
