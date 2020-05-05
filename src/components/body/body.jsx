import CardList from "../card-list/card-list";

const Body = (props) => {
  const {args} = props;
  const {title, ...arg} = args;

  return (
      <section className="main-page">
        <h1 className="main-page_caption">Let's start, so you have to define a basic platform</h1>
        <div className="main-page_list-wrapper">

          <CardList
            param={arg}
          />
          
        </div>
      </section>
  )
};

export default Body;