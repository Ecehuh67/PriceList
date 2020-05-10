import '../../less/style.less';
import MainPage from '../main-page/main-page';
import {AppRoutes, MACHINE_LIST} from '../../consts';
import {
  BaseChassises,
} from '../../data';
import {BasedSteps, SaltSystem} from '../../scenario';
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
              route={AppRoutes.TYPE_SYSTEM}
            />
          </Route>
          <Route exact path={AppRoutes.TYPE_SYSTEM}>
            <MainPage
              isBased={true}
              scenario={BasedSteps}
              route={[AppRoutes.SALT_SPREAD_SYSTEM, AppRoutes.WATER_SYSTEM]}
            />
          </Route>
          <Route exact path={AppRoutes.SALT_SPREAD_SYSTEM}>
            <MainPage
              isBased={false}
              scenario={SaltSystem}
              route={[AppRoutes.MAIN]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
  )
}

export default App;