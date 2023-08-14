import React from "react";

// Images
import SkillCheckDifficultyTable from "../images/Skill Check vs Task Difficulty Table.png"
// Context
import { SearchContext } from "..";

type SearchResultMiscellaneousItemParams = {
    itemID: number,
    ToggleDropdown: (caret: HTMLElement, dropdownContent: HTMLElement) => void
}

export default function SearchResultMiscellaneousItem(props: SearchResultMiscellaneousItemParams) {
    const UpdateSearch = React.useContext(SearchContext);
    
    return (
        <>
            { props.itemID == 75 ?
                <div className="search-result-item">
                    <b>Making a Skill Check</b>
                    <p>Before rolling a skill check, there are some things worth considering:</p>
                    <i>Negative Roll Modifiers</i>
                    <p>Certain conditions surrounding an action may make performing a task more difficult. The <span className="gm special-text">GM</span> decides when a check will be effected by a negative roll modifier. If this is the case, you subtract the value of the modifier from your roll.</p>
                    <i>Taking Extra Time</i>
                    <p>Taking 4 times the amount of time it would normally take to perform an action provides a + 1 skill check bonus. The amount of time is determined by the <span className="gm special-text">GM</span>.</p>
                    <i>Complementary Skills</i>
                    <p>Should the <span className="gm special-text">GM</span> feel it is appropriate, a well made roll in one Skill (which could be performed by any character) may allow for a + 1 bonus to the roll of a related skill check, provided the odds of performing the second action make sense to be improved due to the success of the first action. Complementary rolls only affect the first attempt of an action, and the + 1 bonus can not stack.</p>
                    <i>Using Luck</i>
                    <p><button className="change-search-button" onClick={ () => { UpdateSearch("Luck") }}>Luck points</button> can only be used <b>before</b> rolling to improve a roll.</p>
                    
                    <div className="information-divider"></div>
                    
                    <div className="search-result-item" style={{ backgroundColor: "#CCCCCC", borderRadius: "25px" }}>
                        <b>Skill Check Roll</b>
                        <div className="content-dropdown">
                            <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("skill-check-dropdown-1-caret")!, document.getElementById("skill-check-dropdown-1")!) } }>
                                <p>Is the <span className="attacker special-text">person</span> performing a skill check against <span className="defender special-text">another Animal or Human</span> (Winning an Argument, Running a race, Intimidation, etc)?</p>
                                <i className="fa-solid fa-caret-up" id="skill-check-dropdown-1-caret"></i>
                            </div>
                            <div className="content-dropdown-content" id="skill-check-dropdown-1">
                                <div className="dashed-divider"></div>
                                <div className="roll-information-container">
                                    <div className="roll-information-rollers">
                                        <p className="roll-information-roller">The <span className="attacker special-text">ATTACKER</span> makes the following roll:</p>
                                        <p className="roll-information-roller">The <span className="defender special-text">DEFENDER</span> makes the following roll:</p>
                                    </div>
                                    <div className="roll-information-dividers">
                                        <div className="roll-information-divider"></div>
                                        <div className="roll-information-divider"></div>
                                    </div>
                                    <div className="roll-information-rolls">
                                        <div className="roll-information-content">
                                            <p><span className="attacker special-text">ATTACKER</span>'s Skill</p>
                                            <p>+</p>
                                            <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                        </div>
                                        <p className="vs special-text">VS</p>
                                        <div className="roll-information-content">
                                            <p><span className="defender special-text">DEFENDER</span>'s Skill</p>
                                            <p>+</p> 
                                            <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="centered-text">(The <span className="defender special-text">DEFENDER</span> wins if there is a tie)</p>
                        </div>

                        <div className="information-divider"></div>

                        <div className="content-dropdown">
                            <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("skill-check-dropdown-2-caret")!, document.getElementById("skill-check-dropdown-2")!) } }>
                                <p>Is the <span className="attacker special-text">person</span> performing a skill check against a situation's difficulty (Picking a Lock, Baking a Cake, Climbing a Tree, etc)?</p>
                                <i className="fa-solid fa-caret-up" id="skill-check-dropdown-2-caret"></i>
                            </div>
                            <div className="content-dropdown-content" id="skill-check-dropdown-2">
                                <div className="dashed-divider"></div>
                                <div className="roll-information-container">
                                    <div className="roll-information-rollers">
                                        <p className="roll-information-roller">The <span className="attacker special-text">ATTACKER</span> makes the following roll:</p>
                                        <p className="roll-information-roller">There is no <span className="defender special-text">DEFENDER</span> so instead use:</p>
                                    </div>
                                    <div className="roll-information-dividers">
                                        <div className="roll-information-divider"></div>
                                        <div className="roll-information-divider"></div>
                                    </div>
                                    <div className="roll-information-rolls">
                                        <div className="roll-information-content">
                                            <p><span className="attacker special-text">ATTACKER</span>'s Skill</p>
                                            <p>+</p>
                                            <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                        </div>
                                        <p className="vs special-text">VS</p>
                                        <div className="roll-information-content">
                                            <p>The Difficulty Value (DV) determined by what the <span className="gm special-text">GM</span> feels is the closest match to a description of the difficulty on the table below.</p>
                                        </div>
                                    </div>
                                </div>
                                <img src={ SkillCheckDifficultyTable } alt="Skill Check Difficulty Table" style={{ height: "400px", objectFit: "contain" }} />
                                <p className="centered-text">(The <span className="attacker special-text">ATTACKER</span> fails if there is a tie)</p>
                            </div>
                        </div>
                    </div>

                    <div className="information-divider"></div>

                    <b>After Rolling</b>
                    <p>Depending on the result of the <i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 d10, certain things may happen.</p>
                    <i>Critical Success</i>
                    <p>If the result of either the <span className="attacker special-text">ATTACKER</span> or <span className="defender special-text">DEFENDER</span>'s roll is a 10, a second <i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 d10 is rolled and added to the result of their first roll. If the result of the second roll is <i>also</i> a 10, a third roll <b>is not</b> made.</p>
                    <i>Critical Failure</i>
                    <p>If the result of either the <span className="attacker special-text">ATTACKER</span> or <span className="defender special-text">DEFENDER</span>'s roll is a 1, a second <i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 d10 is rolled and subtracted from the result of their first roll. If the result of the second roll is <i>also</i> a 1, a third roll <b>is not</b> made.</p>
                </div>
            : ""
            }
        </>
    )
}