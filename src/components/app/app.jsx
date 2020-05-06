import '../../less/style.less';
import MainPage from '../main-page/main-page';
import {AppRoutes, MACHINE_LIST} from '../../consts';
import {
  BaseChassises,
} from '../../data';
import {BasedSteps} from '../../scenario';
import {Switch, Route, BrowserRouter} from "react-router-dom";


const App = () => {

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoutes.MAIN}>
              <MainPage
                isBased={true}
                scenario={BasedSteps}
                route={AppRoutes.CHASSIS}
              />
          </Route>
          <Route exact path={AppRoutes.CHASSIS}>
            <MainPage
              isBased={true}
              scenario={BasedSteps}
              route={AppRoutes.MAIN}
            />
          </Route>
        </Switch>
      </BrowserRouter>
  )
}

export default App;