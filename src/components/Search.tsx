import React from 'react';

function Search(props: any) {
    return (
        <section className="searchbox-wrap">
            <input
            type="text" 
            placeholder="Search for a movie"
            className="searchBox" 
            onChange={props.handleInput} 
            onKeyPress={props.search} />
        </section>
    )
}

export default Search;