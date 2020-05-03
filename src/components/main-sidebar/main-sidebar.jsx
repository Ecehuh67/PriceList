const MainSidebar = () => {

  return (
    <section className="main-sidebar">
        <h1 className="main-sidebar_caption">Welcome to ...</h1>
        <div className="main-sidebar_list-wrapper">
          <p className="main-sidebar_paragraph">    the application for calculating cost of machine we produce everyday.
           It was created by funantial department to make manager's routine easier. So just enjoy it</p>
          {/* <ul className="main-sidebar_list">
            <li className="main-sidebar_list-item">Hydraulic system</li>
            <li className="main-sidebar_list-item">Electrical system</li>
            <li className="main-sidebar_list-item">Control system</li>
          </ul> */}
          <p className="main-sidebar_paragraph main-sidebar_paragraph--sign">V.I.Buzdanov</p>
        </div>
      </section>
  );
};

export default MainSidebar;