import React from "react";
// CSS
import SearchResultsStyles from "../css/search-results.styles";
// Functions
import GetSearchResultSkillItem from "../typescript/search-result-skill-items";
import GetSearchResultNetrunningItem from "../typescript/search-result-netrunning-items";

type SearchResultItem = {
    title: string,
    content: JSX.Element | undefined
}

type SearchResultsParams = {
    search: string;
}

export default function SearchResults(props: SearchResultsParams) {
    const [searchResults, setSearchResults] = React.useState<SearchResultItem[]>(GenerateSearchResults(""));

    React.useEffect(() => {
        setSearchResults(GenerateSearchResults(props.search));
    }, [props.search])

    return (
        <SearchResultsStyles>
            { searchResults.map((searchResultsItem, index) => 
                <div className="search-result-container" key={ index }>
                    { searchResultsItem.content }
                </div>
            )}
        </SearchResultsStyles>
    )
}

function GenerateSearchResults(userSearch: string): SearchResultItem[] {
    const searchItems: string[] = GetSearchItems();
    const searchResults: SearchResultItem[] = [];



    //Used for testing
    // userSearch = "Net";



    for (let x: number = 0; x < searchItems.length; x++) {
        if (userSearch === "" || searchItems[x].includes(userSearch)) {
            let content: JSX.Element | undefined;

            if (GetSkillsSearchItems().includes(searchItems[x])) {
                content = GetSearchResultSkillItem(searchItems[x]);
            }
            if (GetNetrunningSearchItems().includes(searchItems[x])) {
                content = GetSearchResultNetrunningItem(searchItems[x]);
            }
            
            
            
            
            searchResults.push({
                title: searchItems[x],
                content: content
            })
        }
    }

    return searchResults;
}

function GetSearchItems(): string[] {
    const skillsSearchItems = GetSkillsSearchItems();
    const netrunningSearchItems = GetNetrunningSearchItems();

    return skillsSearchItems.concat(netrunningSearchItems);
};

function GetNetrunningSearchItems() {
    return [
        "Encountering Black ICE",
        "Netrunning Combat",
        "NET Combat"
    ];
}

function GetSkillsSearchItems() {
    return [
        "Concentration",
        "Conceal/Reveal Object",
        "Lip Reading",
        "Perception",
        "Tracking",
        "Athletics",
        "Contortionist",
        "Dance",
        "Endurance",
        "Resist Torture/Drugs",
        "Stealth",
        "Drive Land Vehicle",
        "Pilot Air Vehicle (x2)",
        "Pilot Sea Vehicle",
        "Riding",
        "Accounting",
        "Animal Handling",
        "Bureaucracy",
        "Business",
        "Composition",
        "Criminology",
        "Cryptography",
        "Deduction",
        "Education",
        "Gamble",
        "Language",
        "Library Search",
        "Local Expert",
        "Science",
        "Tactics",
        "Wilderness Survival",
        "Brawling",
        "Evasion",
        "Martial Arts (x2)",
        "Melee Weapon",
        "Acting",
        "Play Instrument",
        "Archery",
        "Autofire (x2)",
        "Handgun",
        "Heavy Weapons (x2)",
        "Shoulder Arms",
        "Bribery",
        "Conversation",
        "Human Perception",
        "Interrogation",
        "Persuasion",
        "Personal Grooming",
        "Streetwise",
        "Trading",
        "Wardrobe and Style",
        "Air Vehicle Tech",
        "Basic Tech",
        "Cybertech",
        "Demolitions (x2)",
        "Electronics/Security Tech (x2)",
        "First Aid",
        "Forgery",
        "Land Vehicle Tech",
        "Paint/Draw/Sculpt",
        "Paramedic (x2)",
        "Photography/Film",
        "Pick Lock",
        "Pick Pocket",
        "Sea Vehicle Tech",
        "Weaponstech"
    ];
}