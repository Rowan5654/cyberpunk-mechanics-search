import React from "react";

// Context
import { SearchContext } from "..";

type SearchResultMiscellaneousItemParams = {
    itemID: number
}

export default function SearchResultMiscellaneousItem(props: SearchResultMiscellaneousItemParams) {
    const UpdateSearch = React.useContext(SearchContext);
    
    return (
        <>
            { props.itemID == 75 ?
                <div className="search-result-item">
                    <b>Making a Skill Check</b>
                </div>
            : ""
            }
        </>
    )
}