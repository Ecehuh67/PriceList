import {Link} from 'react-router-dom';
import {AppContext} from '../app-provider/app-provider';

const BasedList = (props) => {

  const {preview, setPreview} = React.useContext(AppContext);

  const {route, headers} = props;

  return (
    <ul className="main-page_list">
      {
        headers.map((header, i) => {
          return (
            <li 
              className="main-page_list-item"
              key={i}
              onClick={
                () => {
                  if (preview === 1) {
                    setPreview(0)
                  } else {
                    setPreview(prev => prev + 1)
                  }
                }
              }
            >
              <Link
                style={
                  {
                    textDecoration: 'none',
                    color: 'black', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    width: '100%'
                  }
                }
                to={route}
              >
                <h2>{header}</h2>
              </Link>
            </li>
          )
        })
      }
    </ul>
  );
};

export default BasedList;