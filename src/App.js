import React from 'react';
import { HashRouter as Router,Route,Link} from 'react-router-dom';
import './App.css';



// 页面级组件
import Jzq from './pages/Game/index';
import Table from './pages/Table/index';

function App() {
  return (
      <div>
          <Router>
              <div>
                  <nav>
                      <ul>
                          <li>
                              <Link to="/">无</Link>
                          </li>
                          <li>
                              <Link to="/game/">游戏</Link>
                          </li>
                          <li>
                              <Link to="/table/">表格</Link>
                          </li>
                      </ul>
                  </nav>

                  <Route path="/#/" exact component={Jzq}/>
                  <Route path="/game/" component={Jzq}/>
                  <Route path="/table/" component={Table}/>
              </div>
          </Router>
      </div>
  );
}

export default App;
