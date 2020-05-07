import {Link} from 'react-router-dom';
import {AppContext} from '../app-provider/app-provider';

const BasedList = (props) => {
  const {preview, setPreview, setBase, base} = React.useContext(AppContext);

  const {route, headers} = props;

  console.log(base)

  return (
    <ul className="main-page_list">
      {
        headers.map((header, i) => {
          return (
            <li 
              className="main-page_list-item"
              key={i}
              data-value={header}
              onClick={
                (evt) => {
                  const value =evt.currentTarget.dataset.value;

                  if (base.length === 3) {
                    setBase(prev => prev);
                  } else {
                    setBase(prev => [...prev, value]);
                  }

                  if (preview === 2) {
                    setPreview(0);
                  } else {
                    setPreview(prev => prev + 1);
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
                to={typeof route === 'string'? route : route[i]}
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