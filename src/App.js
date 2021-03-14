import { useState, useEffect } from "react";
import Axios from "axios";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home.jsx";
import Articles from "./components/Articles.jsx";
import Search from "./components/Search";
import NavBar from "./components/NavBar";

function App() {
  const [article, setArticle] = useState([]);

  const getStory = async () => {
    const response = await Axios.get(
      ` https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.REACT_APP_API}`
    );
    setArticle(response.data);
  };

  useEffect(() => {
    getStory();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/articles"
            component={(props) => <Articles {...props} article={article} />}
          />
          <Route
            exact
            path="/search"
            component={(props) => <Search {...props} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
