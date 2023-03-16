import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import VioskiPage from './vioskiPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <switch>
      <Route path="/" exact={true}>
          <App />
        </Route>
        <Route path="/vioski" exact={true}>
            <VioskiPage/>
        </Route>
      </switch>
    {/* <App /> */}
    </Router>
    <script type="text/javascript" src="https://form.jotform.com/222714074095151"></script>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
