import styled from "styled-components";

const SearchResultCustomItemStyles = styled.div`
    .search-result-item {
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: center;

        padding: 25px;
    }

    p, b, i, li {
        font-size: 25px;
    }

    .change-search-button {
        width: fit-content;

        margin: auto;
        padding: 0 7.5px;

        font-size: 25px;

        z-index: 1;
    }
    
    .information-divider {
        width: 100%;

        border: 1px solid #BBBBBB;
    }

    .dashed-divider {
        width: 100%;

        margin: 0 auto;

        border: 1px dashed black;
    }

    .centered-text {
        text-align: center;
    }

    .centered-content {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;

        margin: auto;
    }
`;

export default SearchResultCustomItemStyles;