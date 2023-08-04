import styled from "styled-components";

const SearchResultNetrunningItemsStyles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;

    p, b, li {
        font-size: 25px;
    }

    .roll-information-container {
        display: flex;
        justify-content: space-between;
    }

    .roll-information-content {
        width: 45%;

        display: flex;
        flex-direction: column;
        gap: 25px;

        text-align: center;
    }

    .roll-information-divider {
        width: 100%;

        border: 1px solid #BBBBBB;
    }

    .splitting-outcomes-container {
        width: 100%;

        display: flex;
        justify-content: space-between;
        gap: 25px;
    }

    .splitting-outcome {
        display: flex;
        flex-direction: column;
        gap: 25px;
        
        text-align: center;
        
        width: 100%; 
    }

    .fa-arrow-down {
        font-size: 50px;
    }

    .left-splitting-outcome-arrow {
        transform: rotate(45deg);
    }

    .right-splitting-outcome-arrow {
        transform: rotate(-45deg);
    }

    .splitting-outcome-information {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .roll-information-verticle-divider {
        border: 1px solid #BBBBBB;
    }

    .change-search-button {
        padding: 0 7.5px;

        font-size: 25px;
    }



    .roll-information-content-dropdown {
        width: 100%;

        display: flex;
        flex-direction: column;
    }

    .roll-information-content-dropdown-title {
        display: flex;
        align-items: center;
        gap: 10px;

        background-color: transparent;

        user-select: none;

        border-redius: 25px;

        padding: 0 10px;
    }

    .roll-information-content-dropdown-title:hover {
        background-color: #CCCCCC;
    }

    .roll-information-content-dropdown-title:active {
        background-color: #BBBBBB;
    }

    .fa-caret-up {
        font-size: 25px;

        transform: rotate(180deg);
    }

    .roll-information-content-dropdown-content {
        display: none;
        flex-direction: column;
        gap: 25px;
        

        padding-top: 25px;
    }
`;

export default SearchResultNetrunningItemsStyles;