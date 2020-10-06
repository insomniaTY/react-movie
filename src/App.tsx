  import React, { useState } from 'react'
import axios from 'axios';

import Search from './components/Search';

function App() {
  const [state, setState] = useState({
    s: '',
    results: [],
    selected: {}
  });

  const api = 'http://www.omdbapi.com/?apikey=db8d4a6';

  const search = (e) => {
    if(e.key === 'Enter') {
      axios(api + '&s=' + state.s).then(({ data }) => {
        let result = data.Search;

        setState(prevState => {
          return {...prevState, results: result}
        })
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {...prevState, s: s}
    });

    console.log(state.s);
  }

  return (
    <div className="App">
     <header>
       <h1>Movie Database</h1>
     </header>
     <main>
      <Search search={search}/>
     </main>
     <Search handleInput={handleInput}/>
    </div>
  );
}

export default App;
