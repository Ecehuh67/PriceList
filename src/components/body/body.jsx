import CardList from "../card-list/card-list";
import BasedList from '../based-list/based-list';
import {AppContext} from '../app-provider/app-provider';

const Body = (props) => {
  const {preview} = React.useContext(AppContext);

  const {args} = props;
  const {scenario, isBased, route} = args;

  const currentData = scenario[preview];

  return (
      <section className="main-page">
        <h1 className="main-page_caption">{currentData.title}</h1>
        <div className="main-page_list-wrapper">

          {
            isBased &&
            <BasedList
              headers={currentData.headers}
              route={route}
            />
          }

          { !isBased &&
            <CardList
              headers={currentData.headers}
              route={route}
            />
          }
          
        </div>
      </section>
  )
};

export default Body;