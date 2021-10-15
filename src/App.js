import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#fefefe'
      }
    }
  })

  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
