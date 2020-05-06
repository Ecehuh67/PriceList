const AppContext = React.createContext();

const AppProvider = (props) => {
  const [base, setBase] = React.useState([]);
  const [preview, setPreview] = React.useState(0);


  const sampleAppContext = {
    base,
    setBase,
    preview,
    setPreview
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