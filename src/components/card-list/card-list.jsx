import {Link} from 'react-router-dom';
import { AppRoutes } from '../../consts';
import App from '../app/app';

const CardList = (props) => {

  const {headers} = props;

  return (
    <ul className="main-page_list">
      {
        headers.map((header, i) => {
          return (
            <li 
              className="main-page_list-item"
              key={i}
            >
              <Link
                style={{textDecoration: 'none', color: 'black', display: 'flex', justifyContent: 'center', width: '100%'}}
                to={AppRoutes.CD}
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