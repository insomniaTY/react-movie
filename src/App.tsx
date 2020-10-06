  import React, { useState } from 'react';
import axios from 'axios';

import Search from './components/Search';

function App() {
  const a = {
    s: '',
    results: [],
    selected: {}
  }
  const [state, setState] = useState<typeof a>(a);

  const api = 'http://www.omdbapi.com/?apikey=db8d4a6';

  const search = (e: React.ReactHTMLElement<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      axios(api + '&s=' + state.s).then(({ data }) => {
        let result = data.Search;

        setState(prevState => {
          return {...prevState, results: result}
        })
      });
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <Search handleInput={handleInput} search={search} />
     </main>
    </div>
  );
}

export default App;
