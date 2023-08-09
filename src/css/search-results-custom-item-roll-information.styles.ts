import styled from "styled-components";

const SearchResultCustomItemRollInformationStyles = styled.div`
    .roll-information-container {
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .roll-information-rollers {
        display: flex;
        justify-content: space-between;
    }

    .roll-information-roller {
        width: 45%;

        text-align: center;
    }

    .roll-information-dividers {
        display: flex;
        justify-content: space-between;
    }

    .roll-information-divider {
        width: 45%;
        border: 1px solid #BBBBBB;
    }

    .roll-information-rolls {
        display: flex;
        justify-content: space-between;
    }

    .roll-information-content {
        width: 45%;

        display: flex;
        flex-direction: column;
        gap: 10px;

        text-align: center;
    }
`;

export default SearchResultCustomItemRollInformationStyles;