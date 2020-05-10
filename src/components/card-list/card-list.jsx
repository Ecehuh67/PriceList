import {Link} from 'react-router-dom';
import {AppContext} from '../app-provider/app-provider';

const CardList = (props) => {
  const {preview, setPreview} = React.useContext(AppContext);

  const {headers, route} = props;
  
  console.log('card list')

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

export default CardList;