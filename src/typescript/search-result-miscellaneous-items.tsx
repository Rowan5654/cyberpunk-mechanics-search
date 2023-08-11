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
                    <p>Before rolling a skill check, there are some things worth taking into account:</p>
                    <i>Negative Roll Modifiers</i>
                    <p>Certain conditions surrounding an action may make performing a task more difficult. The <span className="gm special-text">GM</span> decides when a check will be effected by a negative roll modifier. If this is the case, you subtract the value of the modifier from your roll.</p>
                    <i>Taking Extra Time</i>
                    <p>Taking 4 times the amount of time it would normally take to perform an action provides a + 1 skill check bonus. The amount of time is determined by the <span className="gm special-text">GM</span>.</p>
                    <i>Complementary Skills</i>
                    <p>Should the <span className="gm special-text">GM</span> feel it is appropriate, a well made roll in one Skill (which could be performed by any character) may allow for a + 1 bonus to another roll of a related skill, provided the odds of performing the second action make sense to be improved due to the success of the first action. Complementary rolls only affect the first attempt of an action, and the + 1 bonus can not stack.</p>
                </div>
            : ""
            }
        </>
    )
}