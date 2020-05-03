import CardList from "../card-list/card-list";
import { MACHINE_LIST } from "../../consts";

const MainPage = () => {

  return (
      <section className="main-page">
        <h1 className="main-page_caption">Choose definite configuration:</h1>
        <div className="main-page_list-wrapper">

          <CardList
            headers={MACHINE_LIST}
          />
          
        </div>
      </section>
  )
};

export default MainPage;
