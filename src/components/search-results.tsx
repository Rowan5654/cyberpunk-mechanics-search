import React from "react";
// CSS
import SearchResultsStyles from "../css/search-results.styles";
// Components 
import SearchResultSkillItem from "../typescript/search-result-skill-items";
import SearchResultNetrunningItem from "../typescript/search-result-netrunning-items";
import SearchResultCombatItem from "../typescript/search-result-combat-items";

type SearchResultsParams = {
    search: string
}

type SearchItem = {
    itemID: number,
    searchPhrase: string
}

export default function SearchResults(props: SearchResultsParams) {
    const [searchResults, setSearchResults] = React.useState<number[]>(GenerateSearchResults(""));

    React.useEffect(() => {
        setSearchResults(GenerateSearchResults(props.search));
    }, [props.search])

    return (
        <>
            { searchResults.map((searchResultsItem, index) => {
                return (
                    <SearchResultsStyles key={ index }>
                        <div className="search-result-container">
                            {   
                                IsSearchItemInList(GetSkillsSearchItems(), searchResultsItem) ? 
                                    <SearchResultSkillItem itemID={ searchResultsItem } />
                                : IsSearchItemInList(GetNetrunningSearchItems(), searchResultsItem) ?
                                    <SearchResultNetrunningItem itemID={ searchResultsItem } />
                                : IsSearchItemInList(GetCombatSearchItems(), searchResultsItem) ?
                                    <SearchResultCombatItem itemID={ searchResultsItem } />
                                : ""
                            }
                        </div>
                    </SearchResultsStyles>
                )
            })}
        </>
    );
}

function GenerateSearchResults(userSearch: string) {
    const searchItems: SearchItem[] = GetAllSearchItems();
    const searchResults: number[] = [];

    for (let x: number = 0; x < searchItems.length; x++) {
        // If the userSearch is either nothing or is part of the search item's search phrase.
        if (userSearch === "" || searchItems[x].searchPhrase.toLowerCase().includes(userSearch.toLowerCase())) {
            // Checks if the item hasn't already been added to the list of search results.
            if (!searchResults.includes(searchItems[x].itemID)) {
                searchResults.push(searchItems[x].itemID);
            }
        }
    }

    return searchResults;
}

function IsSearchItemInList(list: SearchItem[], item: number): boolean {
    for (let x = 0; x < list.length; x++) {
        if (list[x].itemID === item) {
            return true;
        }
    }
    
    return false;
}

function GetAllSearchItems(): SearchItem[] {
    const skillsSearchItems: SearchItem[] = GetSkillsSearchItems();
    const netrunningSearchItems: SearchItem[] = GetNetrunningSearchItems();
    const combatSearchItems: SearchItem[] = GetCombatSearchItems();

    return skillsSearchItems.concat(netrunningSearchItems, combatSearchItems);
};

function GetCombatSearchItems(): SearchItem[] {
    return [
        { itemID: 69, searchPhrase: "Ranged Combat" }
    ]
}

function GetNetrunningSearchItems(): SearchItem[] {
    return [
        { itemID: 67, searchPhrase: "Encountering Black ICE" },
        { itemID: 68, searchPhrase: "Netrunning Combat" },
        { itemID: 68, searchPhrase: "NET Combat" },
    ];
}

function GetSkillsSearchItems(): SearchItem[] {
    return [
        { itemID: 1, searchPhrase: "Concentration" },
        { itemID: 2, searchPhrase: "Conceal/Reveal Object" },
        { itemID: 3, searchPhrase: "Lip Reading" },
        { itemID: 4, searchPhrase: "Perception" },
        { itemID: 5, searchPhrase: "Tracking" },
        { itemID: 6, searchPhrase: "Athletics" },
        { itemID: 7, searchPhrase: "Contortionist" },
        { itemID: 8, searchPhrase: "Dance" },
        { itemID: 9, searchPhrase: "Endurance" },
        { itemID: 10, searchPhrase: "Resist Torture/Drugs" },
        { itemID: 11, searchPhrase: "Stealth" },
        { itemID: 12, searchPhrase: "Drive Land Vehicle" },
        { itemID: 13, searchPhrase: "Pilot Air Vehicle (x2)" },
        { itemID: 14, searchPhrase: "Pilot Sea Vehicle" },
        { itemID: 15, searchPhrase: "Riding" },
        { itemID: 16, searchPhrase: "Accounting" },
        { itemID: 17, searchPhrase: "Animal Handling" },
        { itemID: 18, searchPhrase: "Bureaucracy" },
        { itemID: 19, searchPhrase: "Business" },
        { itemID: 20, searchPhrase: "Composition" },
        { itemID: 21, searchPhrase: "Criminology" },
        { itemID: 22, searchPhrase: "Cryptography" },
        { itemID: 23, searchPhrase: "Deduction" },
        { itemID: 24, searchPhrase: "Education" },
        { itemID: 25, searchPhrase: "Gamble" },
        { itemID: 26, searchPhrase: "Language" },
        { itemID: 27, searchPhrase: "Library Search" },
        { itemID: 28, searchPhrase: "Local Expert" },
        { itemID: 29, searchPhrase: "Science" },
        { itemID: 30, searchPhrase: "Tactics" },
        { itemID: 31, searchPhrase: "Wilderness Survival" },
        { itemID: 32, searchPhrase: "Brawling" },
        { itemID: 33, searchPhrase: "Evasion" },
        { itemID: 34, searchPhrase: "Martial Arts (x2)" },
        { itemID: 35, searchPhrase: "Melee Weapon" },
        { itemID: 36, searchPhrase: "Acting" },
        { itemID: 37, searchPhrase: "Play Instrument" },
        { itemID: 38, searchPhrase: "Archery" },
        { itemID: 39, searchPhrase: "Autofire (x2)" },
        { itemID: 40, searchPhrase: "Handgun" },
        { itemID: 41, searchPhrase: "Heavy Weapons (x2)" },
        { itemID: 42, searchPhrase: "Shoulder Arms" },
        { itemID: 43, searchPhrase: "Bribery" },
        { itemID: 44, searchPhrase: "Conversation" },
        { itemID: 45, searchPhrase: "Human Perception" },
        { itemID: 46, searchPhrase: "Interrogation" },
        { itemID: 47, searchPhrase: "Persuasion" },
        { itemID: 48, searchPhrase: "Personal Grooming" },
        { itemID: 49, searchPhrase: "Streetwise" },
        { itemID: 50, searchPhrase: "Trading" },
        { itemID: 51, searchPhrase: "Wardrobe and Style" },
        { itemID: 52, searchPhrase: "Air Vehicle Tech" },
        { itemID: 53, searchPhrase: "Basic Tech" },
        { itemID: 54, searchPhrase: "Cybertech" },
        { itemID: 55, searchPhrase: "Demolitions (x2)" },
        { itemID: 56, searchPhrase: "Electronics/Security Tech (x2)" },
        { itemID: 57, searchPhrase: "First Aid" },
        { itemID: 58, searchPhrase: "Forgery" },
        { itemID: 59, searchPhrase: "Land Vehicle Tech" },
        { itemID: 60, searchPhrase: "Paint/Draw/Sculpt" },
        { itemID: 61, searchPhrase: "Paramedic (x2)" },
        { itemID: 62, searchPhrase: "Photography/Film" },
        { itemID: 63, searchPhrase: "Pick Lock" },
        { itemID: 64, searchPhrase: "Pick Pocket" },
        { itemID: 65, searchPhrase: "Sea Vehicle Tech" },
        { itemID: 66, searchPhrase: "Weaponstech" }
    ];
}