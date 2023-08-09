import styled from "styled-components";

const SearchResultCustomItemDropdownStyles = styled.div`
    .content-dropdown {
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .content-dropdown-title {
        display: flex;
        align-items: center;
        gap: 10px;

        background-color: transparent;

        user-select: none;

        border-radius: 15px;

        padding: 0 10px;
    }

    .content-dropdown-title:hover {
        background-color: #CCCCCC;
    }

    .content-dropdown-title:active {
        background-color: #BBBBBB;
    }

    .fa-caret-up {
        font-size: 25px;

        transform: rotate(180deg);
    }

    .content-dropdown-content {
        display: none;
        flex-direction: column;
        gap: 25px;
    }
`;

export default SearchResultCustomItemDropdownStyles;