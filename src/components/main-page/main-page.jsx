import Body from '../body/body';
import Sidebar from '../sidebar/sidebar';
import {AppContext} from '../app-provider/app-provider';

const MainPage = (props) => {
const {...arg} = props;

  return (
    <div className="html-wrapper">
      <Sidebar/>
      <Body
        args={arg}
      />
    </div>
  )
};

export default MainPage;
