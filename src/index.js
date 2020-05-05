import App from './components/app/app';
import {Provider} from "react-redux";
import AppProvider from './components/app-provider/app-provider';


ReactDOM.render(
    <AppProvider>
        <App/>
    </AppProvider>,
    document.querySelector(`#root`)
);