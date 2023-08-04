import React from "react";
import ReactDOM from 'react-dom/client';
// CSS
import GlobalStyle from "./css/index.styles";
// Components
import SearchResults from './components/search-results';

function App() {
    const [search, setSearch] = React.useState<string>("");

    return (
        <div className="root-div">
            <GlobalStyle />
            <div className="title-section">
                <h1>Search Functionality App</h1>
            </div>
            <input className="search-input" id="search-input" type="text" onChange={ (event) => { setSearch(event?.target.value); } } placeholder='Search keywords. Examples: "Ranged", "Stealth", "Black ICE"' />
            <SearchResults search={ search } />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
