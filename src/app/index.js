import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import QrCode from './QrCode/QrCode';
// import configureStore from './redux/configureStore';
// import { Provider } from 'react-redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';
// import routes from './routes';
// // import DevTools from './redux/DevTools';
// import injectTapEventPlugin from "react-tap-event-plugin";
// 导入重置样式
// import './styles/reset.scss'

// const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store);

// injectTapEventPlugin();
// ReactDOM.render((
//   <Provider store={store}>
//     <div>
//       {routes(history)}
//       <DevTools />
//     </div>
//   </Provider>
// ), document.getElementById('root'));
ReactDOM.render(
    // <QrCode />
    
    <App>
    </App>
  // <Provider store={store}>
  //   <div>
  //     {routes(history)}
  //   </div>
  // </Provider>
, document.getElementById('root'));
if (module && module.hot) {
	module.hot.accept();
}
