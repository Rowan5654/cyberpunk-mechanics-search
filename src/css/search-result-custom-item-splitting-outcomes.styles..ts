import styled from "styled-components";

const SearchResultCustomItemSplittingOutcomesStyles = styled.div`
    .splitting-outcomes-container {
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .splitting-outcome-arrows {
        display: flex;
        align-items: center;
    }

    .fa-arrow-down {
        font-size: 50px;

        width: 50px;

        margin: auto;
    }

    .left-splitting-outcome-arrow {
        transform: rotate(45deg);

        display: flex;
        justify-content: center;
    }

    .right-splitting-outcome-arrow {
        transform: rotate(-45deg);

        display: flex;
        justify-content: center;
    }

    .splitting-outcome {
        display: flex;
        flex-direction: column;
        gap: 25px;
        
        text-align: center;
        
        width: 100%; 
    }

    .splitting-outcome li {
        text-align: left;
    }

    .splitting-outcomes-content {
        display: flex;
        gap: 25px;
    }

    .roll-information-verticle-divider {
        border: 1px solid #BBBBBB;
    }
`;

export default SearchResultCustomItemSplittingOutcomesStyles;