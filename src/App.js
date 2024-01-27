/** @format */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
function App() {
  return (
    <Router>
      {/*Route를 찾고 컴포넌트를 렌더링함.한번에 하나의 Route만 렌더링함.*/}
      <Switch>
        {/*URL*/}
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie">
          <Detail />
        </Route>
        {/*유저가 홈화면으로 갈때 사용할 Route, Home Route를 렌더링함.*/}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
