import styled from "styled-components";

const SearchResultsStyles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;

    .search-result-container {
        max-width: 1200px;

        background-color: #DDDDDD;
        
        padding: 25px;

        border-radius: 25px;

        display: flex;
        flex-direction: column;
        gap: 25px;
        align-items: center;

        margin-bottom: 50px;
    }

    .special-text {
        font-weight: bold;
    }

    .black-ice {
        color: #6632a8;
    }

    .netrunner {
        color: #33691f;
    }

    .vs {
        font-family: 'Anton', sans-serif;
        font-size: 50px;

        display: flex;
        align-items: center;
    }

    .gm {
        color: #e38100;
    }

    .dice-roll-icon {

    }

    .defender {
        color: #02a3e3;
    }

    .attacker {
        color: #db1a00;
    }
`;

export default SearchResultsStyles;