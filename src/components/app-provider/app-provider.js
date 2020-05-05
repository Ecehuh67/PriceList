const AppContext = React.createContext();

const AppProvider = (props) => {
  const smth = '555';
  const el = () => {};

  const sampleAppContext = {
    smth,
    el
  };

  return (
    <AppContext.Provider
      value={sampleAppContext}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export {AppContext};