import WelcomePage from '../welcome-page/welcome-page';
import {AppRoutes} from '../../consts';
import {Switch, Route, BrowserRouter} from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.MAIN}>
            <WelcomePage/>
        </Route>
        <Route exact path={AppRoutes.CD}>
            <p>fdfdfdf</p>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;