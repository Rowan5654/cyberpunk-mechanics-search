import React from "react";
import ReactDOM from 'react-dom/client';
// CSS
import GlobalStyle from "./css/index.styles";
// Components
import SearchResults from './components/search-results';

export const SearchContext = React.createContext((newSearch: string) => { });

function App() {
    const [search, setSearch] = React.useState("");

    const UpdateSearch = (newSearch: string) => {
        const searchInput = (document.getElementById("search-input") as HTMLInputElement);
        searchInput.value = newSearch;

        setSearch(newSearch);
    }

    return (
        <SearchContext.Provider value={ UpdateSearch }>
            <div className="root-div">
                <GlobalStyle />
                <div className="title-section">
                    <h1>Search Functionality App</h1>
                </div>
                <input className="search-input" id="search-input" type="text" onChange={ (event) => { setSearch(event.target?.value) } } placeholder='Search keywords. Examples: "Ranged", "Stealth", "Black ICE"' />
                <SearchResults search={ search } />
            </div>
        </SearchContext.Provider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
