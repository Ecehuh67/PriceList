import '../../less/style.less';
import MainPage from '../main-page/main-page';
import {AppRoutes, MACHINE_LIST} from '../../consts';
import {
  BaseChassises,

} from '../../data';
import {Switch, Route, BrowserRouter} from "react-router-dom";


const App = () => {

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoutes.MAIN}>
              <MainPage
                title={'title'}
                headers={MACHINE_LIST}
                route={AppRoutes.CHASSIS}
              />
          </Route>
          <Route exact path={AppRoutes.CHASSIS}>
            <MainPage
              title={'title'}
              headers={BaseChassises.map(it => it.name)}
              route={AppRoutes.MAIN}
            />
          </Route>
        </Switch>
      </BrowserRouter>
  )
}

export default App;