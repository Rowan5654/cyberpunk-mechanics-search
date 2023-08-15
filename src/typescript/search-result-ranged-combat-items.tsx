import React from "react";
// Images 
import RangeDVTable from "../images/Range DV Table.png";
import AutofireRangeDVTable from "../images/Autofire Range DV Table.png";
import AimedShotDescriptions from "../images/Aimed Shot.png";

// Context
import { SearchContext } from "..";

type SearchResultRangedCombatItemParams = {
    itemID: number,
    ToggleDropdown: (caret: HTMLElement, dropdownContent: HTMLElement) => void
}

export default function SearchResultRangedCombatItem(props: SearchResultRangedCombatItemParams) {
    const UpdateSearch = React.useContext(SearchContext);
    
    return (
        <>
            { props.itemID === 69 ?
// Ranged Combat
                <div className="search-result-item" style={{ width: "1200px" }}>
                    <b>Ranged Combat</b>
                    <div className="content-dropdown">
                        <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("ranged-combat-dropdown-1-caret")!, document.getElementById("ranged-combat-dropdown-1")!) } }>
                            <p>Compulsory if the <span className="defender special-text">DEFENDER</span> has a REF lower than 8 (0 - 7)</p>
                            <i className="fa-solid fa-caret-up" id="ranged-combat-dropdown-1-caret"></i>
                        </div>
                        <div className="content-dropdown-content" id="ranged-combat-dropdown-1">
                            <div className="dashed-divider"></div>
                            <div className="content-dropdown">
                                <p style={{ padding: "0 10px" }}>Is the <span className="attacker special-text">ATTACKER</span> taking an <button className="change-search-button" onClick={ () => { UpdateSearch("Aimed Shots") }}>Aimed Shot</button>?</p>
                                <div className="information-divider"></div>
                                <p style={{ padding: "0 10px" }}>Is the <span className="attacker special-text">ATTACKER</span> using <button className="change-search-button" onClick={ () => { UpdateSearch("Using Autofire") }}>Autofire</button>?</p>
                                <div className="information-divider"></div>
                                <p style={{ padding: "0 10px" }}>Is the <span className="attacker special-text">ATTACKER</span> using <button className="change-search-button" onClick={ () => { UpdateSearch("Suppressive Fire") }}>Suppressive Fire</button>?</p>
                                <div className="information-divider"></div>
                                <p style={{ padding: "0 10px" }}>Is the <span className="attacker special-text">ATTACKER</span> using <button className="change-search-button" onClick={ () => { UpdateSearch("Shotgun Shells") }}>Shotgun Shells</button>? (Not the same as slugs/basic shotgun ammo)</p>
                                <div className="information-divider"></div>
                                <p style={{ padding: "0 10px" }}>Is the <span className="attacker special-text">ATTACKER</span> using <button className="change-search-button" onClick={ () => { UpdateSearch("Explosives") }}>Explosives</button>?</p>
                                <div className="information-divider"></div>

                                <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("ranged-combat-dropdown-2-caret")!, document.getElementById("ranged-combat-dropdown-2")!) } }>
                                    <p>If none of the above is true:</p>
                                    <i className="fa-solid fa-caret-up" id="ranged-combat-dropdown-2-caret"></i>
                                </div>
                                <div className="content-dropdown-content" id="ranged-combat-dropdown-2">
                                    <div className="dashed-divider"></div>
                                        <div className="roll-information-container">
                                            <div className="roll-information-rollers">
                                                <p className="roll-information-roller">The <span className="attacker special-text">ATTACKER</span> makes the following roll:</p>
                                                <p className="roll-information-roller">The <span className="defender special-text">DEFENDER</span> doesn't roll, but instead uses:</p>
                                            </div>
                                            <div className="roll-information-dividers">
                                                <div className="roll-information-divider"></div>
                                                <div className="roll-information-divider"></div>
                                            </div>
                                            <div className="roll-information-rolls">
                                                <div className="roll-information-content">
                                                    <p><span className="attacker special-text">ATTACKER</span>'s relevant weapon skill (Handgun, Heavy Weapons, Shoulder Arms)</p>
                                                    <p>+</p> 
                                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                                </div>
                                                <p className="vs special-text">VS</p>
                                                <div className="roll-information-content">
                                                    <p>The Difficulty Value (DV) determined by the distance to target table (below)</p>
                                                </div>
                                            </div>
                                        </div>
                                    <img src={ RangeDVTable } style={{ height: "400px", objectFit: "contain" }} alt="Range DV Table" />
                                    <p className="centered-text">(The <span className="defender special-text">DEFENDER</span> wins if there is a tie)</p>
                                    <div className="dashed-divider"></div>
                                    <div className="splitting-outcomes-container">
                                        <div className="splitting-outcome-arrows">
                                            <i className="fa-solid fa-arrow-down left-splitting-outcome-arrow"></i>
                                            <i className="fa-solid fa-arrow-down right-splitting-outcome-arrow"></i>
                                        </div>
                                        <div className="splitting-outcomes-content">
                                            <div className="splitting-outcome">
                                                <p>If the <span className="attacker special-text">ATTACKER</span> wins:</p>
                                                <div className="dashed-divider"></div>
                                                <p>The <span className="attacker special-text">ATTACKER</span> removes 1 bullet from their magazine.</p>
                                                <p>The <span className="defender special-text">DEFENDER</span> <button className="change-search-button" onClick={ () => { UpdateSearch("Receiving Damage") }}>takes damage</button>.</p>
                                            </div>

                                            <div className="roll-information-verticle-divider"></div>

                                            <div className="splitting-outcome">
                                                <p>If the <span className="defender special-text">DEFENDER</span> wins:</p>
                                                <div className="dashed-divider"></div>
                                                <p>The <span className="attacker special-text">ATTACKER</span> removes 1 bullet from their magazine.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="information-divider"></div>
                    <div className="content-dropdown">
                        <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("ranged-combat-dropdown-3-caret")!, document.getElementById("ranged-combat-dropdown-3")!) } }>
                            <p>(Optional) If the <span className="defender special-text">DEFENDER</span> has a REF of 8 or higher</p>
                            <i className="fa-solid fa-caret-up" id="ranged-combat-dropdown-3-caret"></i>
                        </div>
                        <div className="content-dropdown-content" id="ranged-combat-dropdown-3">
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
                                            <p><span className="attacker special-text">ATTACKER</span>'s relevant weapon skill (Handgun, Heavy Weapons, Shoulder Arms)</p>
                                            <p>+</p> 
                                            <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                        </div>
                                        <p className="vs special-text">VS</p>
                                        <div className="roll-information-content">
                                            <p><span className="defender special-text">DEFENDER</span>'s Evasion skill</p>
                                            <p>+</p> 
                                            <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                        </div>
                                    </div>
                                </div>
                            <p className="centered-text">(The <span className="defender special-text">DEFENDER</span> wins if there is a tie)</p>
                            <div className="dashed-divider"></div>
                            <div className="splitting-outcomes-container">
                                <div className="splitting-outcome-arrows">
                                    <i className="fa-solid fa-arrow-down left-splitting-outcome-arrow"></i>
                                    <i className="fa-solid fa-arrow-down right-splitting-outcome-arrow"></i>
                                </div>
                                <div className="splitting-outcomes-content">
                                    <div className="splitting-outcome">
                                        <p>If the <span className="attacker special-text">ATTACKER</span> wins:</p>
                                        <div className="dashed-divider"></div>
                                        <p>The <span className="attacker special-text">ATTACKER</span> removes 1 bullet from their magazine.</p>
                                        <p>The <span className="defender special-text">DEFENDER</span> <button className="change-search-button" onClick={ () => { UpdateSearch("Receiving Damage") }}>takes damage</button>.</p>
                                    </div>

                                    <div className="roll-information-verticle-divider"></div>

                                    <div className="splitting-outcome">
                                        <p>If the <span className="defender special-text">DEFENDER</span> wins:</p>
                                        <div className="dashed-divider"></div>
                                        <p>The <span className="attacker special-text">ATTACKER</span> removes 1 bullet from their magazine.</p>
                                        <p>If the <span className="attacker special-text">ATTACKER</span> is using an explosive. The <span className="defender special-text">DEFENDER</span> is moved outside the edge of the explosion radius.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            : props.itemID === 70 ?

// Autofire
            <div className="search-result-item" style={{ width: "1200px" }}>
                <b>Using Autofire</b>
                <p>In order to use autofire, the <span className="attacker special-text">ATTACKER</span> must have 10 bullets in their weapon's magazine.</p>
                <p>Autofire can't be used to make an <button className="change-search-button" onClick={ () => { UpdateSearch("Aimed Shot") }}>aimed shot</button></p>
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("autofire-dropdown-1-caret")!, document.getElementById("autofire-dropdown-1")!) } }>
                        <p>Compulsory if the <span className="defender special-text">DEFENDER</span> has a REF lower than 8 (0 - 7)</p>
                        <i className="fa-solid fa-caret-up" id="autofire-dropdown-1-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="autofire-dropdown-1">
                        <div className="dashed-divider"></div>
                        <div className="roll-information-container">
                            <div className="roll-information-rollers">
                                <p className="roll-information-roller">The <span className="attacker special-text">ATTACKER</span> makes the following roll:</p>
                                <p className="roll-information-roller">The <span className="defender special-text">DEFENDER</span> doesn't roll, but instead uses:</p>
                            </div>
                            <div className="roll-information-dividers">
                                <div className="roll-information-divider"></div>
                                <div className="roll-information-divider"></div>
                            </div>
                            <div className="roll-information-rolls">
                                <div className="roll-information-content">
                                    <p><span className="attacker special-text">ATTACKER</span>'s autofire skill</p>
                                    <p>+</p> 
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                </div>
                                <p className="vs special-text">VS</p>
                                <div className="roll-information-content">
                                    <p>The Difficulty Value (DV) determined by the autofire distance to target table (below)</p>
                                </div>
                            </div>
                        </div>
                        <img src={ AutofireRangeDVTable } style={{ height: "200px", objectFit: "contain" }} alt="Autofire Range DV Table" />
                        <p className="centered-text">(The <span className="defender special-text">DEFENDER</span> wins if there is a tie)</p>
                        <div className="dashed-divider"></div>
                        <div className="splitting-outcomes-container">
                            <div className="splitting-outcome-arrows">
                                <i className="fa-solid fa-arrow-down left-splitting-outcome-arrow"></i>
                                <i className="fa-solid fa-arrow-down right-splitting-outcome-arrow"></i>
                            </div>
                            <div className="splitting-outcomes-content">
                                <div className="splitting-outcome">
                                    <p>If the <span className="attacker special-text">ATTACKER</span> wins:</p>
                                    <div className="dashed-divider"></div>
                                    <p>The <span className="attacker special-text">ATTACKER</span> removes 10 bullets from their magazine.</p>
                                    <p>The <span className="defender special-text">DEFENDER</span> <button className="change-search-button" onClick={ () => { UpdateSearch("Receiving Damage") }}>takes damage</button>.</p>
                                </div>
                                <div className="roll-information-verticle-divider"></div>
                                <div className="splitting-outcome">
                                    <p>If the <span className="defender special-text">DEFENDER</span> wins:</p>
                                    <div className="dashed-divider"></div>
                                    <p>The <span className="attacker special-text">ATTACKER</span> removes 10 bullets from their magazine.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="information-divider"></div>
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("autofire-dropdown-2-caret")!, document.getElementById("autofire-dropdown-2")!) } }>
                        <p>(Optional) If the <span className="defender special-text">DEFENDER</span> has a REF of 8 or higher</p>
                        <i className="fa-solid fa-caret-up" id="autofire-dropdown-2-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="autofire-dropdown-2">
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
                                    <p><span className="attacker special-text">ATTACKER</span>'s autofire skill</p>
                                    <p>+</p> 
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                </div>
                                <p className="vs special-text">VS</p>
                                <div className="roll-information-content">
                                    <p><span className="defender special-text">DEFENDER</span>'s Evasion skill</p>
                                    <p>+</p> 
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                </div>
                            </div>
                        </div>
                        <p className="centered-text">(The <span className="defender special-text">DEFENDER</span> wins if there is a tie)</p>
                        <div className="dashed-divider"></div>
                        <div className="splitting-outcomes-container">
                            <div className="splitting-outcome-arrows">
                                <i className="fa-solid fa-arrow-down left-splitting-outcome-arrow"></i>
                                <i className="fa-solid fa-arrow-down right-splitting-outcome-arrow"></i>
                            </div>
                            <div className="splitting-outcomes-content">
                                <div className="splitting-outcome">
                                    <p>If the <span className="attacker special-text">ATTACKER</span> wins:</p>
                                    <div className="dashed-divider"></div>
                                    <p>The <span className="attacker special-text">ATTACKER</span> removes 10 bullets from their magazine.</p>
                                    <p>The <span className="defender special-text">DEFENDER</span> <button className="change-search-button" onClick={ () => { UpdateSearch("Receiving Damage") }}>takes damage</button>.</p>
                                </div>

                                <div className="roll-information-verticle-divider"></div>

                                <div className="splitting-outcome">
                                    <p>If the <span className="defender special-text">DEFENDER</span> wins:</p>
                                    <div className="dashed-divider"></div>
                                    <p>The <span className="attacker special-text">ATTACKER</span> removes 10 bullets from their magazine.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            : props.itemID === 71 ?


// Suppressive Fire
            <div className="search-result-item">
                <b>Suppressive Fire</b>
                <p>In order to use suppressive, the <span className="attacker special-text">ATTACKER</span> must have 10 bullets in their weapon's magazine.</p>
                <div className="roll-information-container">
                    <div className="roll-information-rollers">
                        <p className="roll-information-roller">The <span className="attacker special-text">ATTACKER</span> makes the following roll:</p>
                        <p className="roll-information-roller"><span className="defender special-text">Everyone</span> (friend or foe) on foot, within 25 m/yds, out of cover, and within line of sight must roll:</p>
                    </div>
                    <div className="roll-information-dividers">
                        <div className="roll-information-divider"></div>
                        <div className="roll-information-divider"></div>
                    </div>
                    <div className="roll-information-rolls">
                        <div className="roll-information-content">
                            <p><span className="attacker special-text">ATTACKER</span>'s autofire skill</p>
                            <p>+</p> 
                            <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                        </div>
                        <p className="vs special-text">VS</p>
                        <div className="roll-information-content">
                            <p><span className="defender special-text">Characters</span>'s Concentration skill</p>
                            <p>+</p> 
                            <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                        </div>
                    </div>
                </div>
                <p className="centered-text">(The <span className="defender special-text">DEFENDER</span> wins if there is a tie)</p>
                <div className="dashed-divider"></div>
                <p><span className="defender special-text">All Characters</span> (friend or foe) that fail the check must use their next Move Action get into <button className="change-search-button" onClick={ () => { UpdateSearch("Cover") }}>cover</button>. If there is no cover that can be reached with that characters Move Action, they must also use the <button className="change-search-button" onClick={ () => { UpdateSearch("Run") }}>Run Action</button> to get into cover or approach the nearest usable cover.</p>
            </div>


            : props.itemID === 72 ?


// Shotgun Shells
            <div className="search-result-item">
                <b>Shotgun Shells</b>
                <p>Each <span className="defender special-text">DEFENDING character</span> (friend or foe) in the <span className="attacker special-text">ATTACKER</span>'s shotgun shell range (6m/yds or 3x3 squares in the direction the <span className="attacker special-text">ATTACKER</span> is facing) must pass the <span className="attacker special-text">ATTACKER</span>'s roll to hit individually.</p>
                <p>The <span className="attacker special-text">ATTACKER</span> only rolls to hit once and rolls the damage dealt to all <span className="defender special-text">DEFENDING characters</span> who fail the check once.</p>
                <p>It is worth noting that Shotgun Shells can't be used to make an <button className="change-search-button" onClick={ () => { UpdateSearch("Aimed Shots") }}>aimed shot</button>.</p>
                <p>So, for each defender...</p>
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("shotgun-shells-dropdown-1-caret")!, document.getElementById("shotgun-shells-dropdown-1")!) } }>
                        <p>Compulsory if the <span className="defender special-text">DEFENDER</span> has a REF lower than 8 (0 - 7)</p>
                        <i className="fa-solid fa-caret-up" id="shotgun-shells-dropdown-1-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="shotgun-shells-dropdown-1">
                        <div className="dashed-divider"></div>
                        <div className="roll-information-container">
                            <div className="roll-information-rollers">
                                <p className="roll-information-roller">The <span className="attacker special-text">ATTACKER</span> makes the following roll:</p>
                                <p className="roll-information-roller"><span className="defender special-text">DEFENDERS</span> don't roll, but instead use:</p>
                            </div>
                            <div className="roll-information-dividers">
                                <div className="roll-information-divider"></div>
                                <div className="roll-information-divider"></div>
                            </div>
                            <div className="roll-information-rolls">
                                <div className="roll-information-content">
                                    <p><span className="attacker special-text">ATTACKER</span>'s Shoulder Arms skill</p>
                                    <p>+</p> 
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                </div>
                                <p className="vs special-text">VS</p>
                                <div className="roll-information-content">
                                    <p>A Difficulty Value (DV) of <b>13</b></p>
                                </div>
                            </div>
                        </div>
                        <p className="centered-text">(The <span className="defender special-text">DEFENDER</span> wins if there is a tie)</p>
                        <div className="dashed-divider"></div>
                        <div className="splitting-outcomes-container">
                            <div className="splitting-outcome-arrows">
                                <i className="fa-solid fa-arrow-down left-splitting-outcome-arrow"></i>
                                <i className="fa-solid fa-arrow-down right-splitting-outcome-arrow"></i>
                            </div>
                            <div className="splitting-outcomes-content">
                                <div className="splitting-outcome">
                                    <p>If the <span className="attacker special-text">ATTACKER</span> wins:</p>
                                    <div className="dashed-divider"></div>
                                    <p>The <span className="defender special-text">DEFENDER</span> <button className="change-search-button" onClick={ () => { UpdateSearch("Receiving Damage") }}>takes damage</button>.</p>
                                </div>

                                <div className="roll-information-verticle-divider"></div>

                                <div className="splitting-outcome">
                                    <p>If the <span className="defender special-text">DEFENDER</span> wins:</p>
                                    <div className="dashed-divider"></div>
                                    <p>Nothing happens.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="information-divider"></div>
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("shotgun-shells-dropdown-2-caret")!, document.getElementById("shotgun-shells-dropdown-2")!) } }>
                        <p>(Optional) If the <span className="defender special-text">DEFENDER</span> has a REF of 8 or higher</p>
                        <i className="fa-solid fa-caret-up" id="shotgun-shells-dropdown-2-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="shotgun-shells-dropdown-2">
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
                                    <p><span className="attacker special-text">ATTACKER</span>'s Shoulder Arms skill</p>
                                    <p>+</p> 
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                </div>
                                <p className="vs special-text">VS</p>
                                <div className="roll-information-content">
                                    <p><span className="defender special-text">DEFENDER</span>'s Evasion skill</p>
                                    <p>+</p> 
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                </div>
                            </div>
                        </div>
                        <p className="centered-text">(The <span className="defender special-text">DEFENDER</span> wins if there is a tie)</p>
                        <div className="dashed-divider"></div>
                        <div className="splitting-outcomes-container">
                            <div className="splitting-outcome-arrows">
                                <i className="fa-solid fa-arrow-down left-splitting-outcome-arrow"></i>
                                <i className="fa-solid fa-arrow-down right-splitting-outcome-arrow"></i>
                            </div>
                            <div className="splitting-outcomes-content">
                                <div className="splitting-outcome">
                                    <p>If the <span className="attacker special-text">ATTACKER</span> wins:</p>
                                    <div className="dashed-divider"></div>
                                    <p>The <span className="defender special-text">DEFENDER</span> <button className="change-search-button" onClick={ () => { UpdateSearch("Receiving Damage") }}>takes damage</button>.</p>
                                </div>

                                <div className="roll-information-verticle-divider"></div>

                                <div className="splitting-outcome">
                                    <p>If the <span className="defender special-text">DEFENDER</span> wins:</p>
                                    <div className="dashed-divider"></div>
                                    <p>Nothing happens.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="information-divider"></div>
                    <p>Once the attack is complete, and rolls for everyone (<span className="attacker special-text">ATTACKER</span> and <span className="defender special-text">DEFENDING characters</span>) invloved have been made, the <span className="attacker special-text">ATTACKER</span> removes one shotgun shell from thier magazine.</p>
                </div>
            </div>


            : props.itemID === 73 ?


// Explosives
            <div className="search-result-item">
                <b>Explosives</b>
                <p>Each <span className="defender special-text">DEFENDING character</span> (friend or foe) in the <span className="attacker special-text">ATTACKER</span>'s explosive attack (10m/yds or 5x5 squares around the center of the explosion) must pass the <span className="attacker special-text">ATTACKER</span>'s roll to hit individually.</p>
                <p>The impact zone on an explosive is a 2x2 square at the center of the explosion.</p>
                <p>The <span className="attacker special-text">ATTACKER</span> only rolls to hit <b>once</b> and rolls the damage dealt to all <span className="defender special-text">DEFENDING characters</span> who fail the check <b>once</b>.</p>
                <p>Anyone taking cover in the explosion radius outside of the impact zone will be shielded by the cover, which will take the full damage of the explosion, unless the damage is sufficent enough to destroy the cover, in which case the person in cover will be removed from it, and will take the full impact/damage of the explosion.</p>
                <p>So, for each defender...</p>



                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("explosives-dropdown-1-caret")!, document.getElementById("explosives-dropdown-1")!) } }>
                        <p>Compulsory if the <span className="defender special-text">DEFENDER</span> has a REF lower than 8 (0 - 7)</p>
                        <i className="fa-solid fa-caret-up" id="explosives-dropdown-1-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="explosives-dropdown-1">
                        <div className="dashed-divider"></div>
                        <div className="roll-information-container">
                            <div className="roll-information-rollers">
                                <p className="roll-information-roller">The <span className="attacker special-text">ATTACKER</span> makes the following roll:</p>
                                <p className="roll-information-roller"><span className="defender special-text">DEFENDERS</span> don't roll, but instead use:</p>
                            </div>
                            <div className="roll-information-dividers">
                                <div className="roll-information-divider"></div>
                                <div className="roll-information-divider"></div>
                            </div>
                            <div className="roll-information-rolls">
                                <div className="roll-information-content">
                                    <p><span className="attacker special-text">ATTACKER</span>'s Heavy Weapons skill</p>
                                    <p>+</p> 
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                </div>
                                <p className="vs special-text">VS</p>
                                <div className="roll-information-content">
                                    <p>The Difficulty Value (DV) determined by the distance to target table (below)</p>
                                </div>
                            </div>
                        </div>
                        <img src={ RangeDVTable } style={{ height: "400px", objectFit: "contain" }} alt="Range DV Table" />
                        <p className="centered-text">(The <span className="defender special-text">DEFENDER</span> wins if there is a tie)</p>
                        <div className="dashed-divider"></div>
                        <div className="splitting-outcomes-container">
                            <div className="splitting-outcome-arrows">
                                <i className="fa-solid fa-arrow-down left-splitting-outcome-arrow"></i>
                                <i className="fa-solid fa-arrow-down right-splitting-outcome-arrow"></i>
                            </div>
                            <div className="splitting-outcomes-content">
                                <div className="splitting-outcome">
                                    <p>If the <span className="attacker special-text">ATTACKER</span> wins:</p>
                                    <div className="dashed-divider"></div>
                                    <p>The <span className="defender special-text">DEFENDER</span> <button className="change-search-button" onClick={ () => { UpdateSearch("Receiving Damage") }}>takes damage</button>.</p>
                                </div>

                                <div className="roll-information-verticle-divider"></div>

                                <div className="splitting-outcome">
                                    <p>If the <span className="defender special-text">DEFENDER</span> wins:</p>
                                    <div className="dashed-divider"></div>
                                    <p>The <span className="gm special-text">(GM)</span> will determine where the explosive really landed, potentially still damaging the <span className="defender special-text">DEFENDER</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="information-divider"></div>
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("explosives-dropdown-2-caret")!, document.getElementById("explosives-dropdown-2")!) } }>
                        <p>(Optional) If the <span className="defender special-text">DEFENDER</span> has a REF of 8 or higher</p>
                        <i className="fa-solid fa-caret-up" id="explosives-dropdown-2-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="explosives-dropdown-2">
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
                                    <p><span className="attacker special-text">ATTACKER</span>'s Heavy Weapons skill</p>
                                    <p>+</p> 
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                </div>
                                <p className="vs special-text">VS</p>
                                <div className="roll-information-content">
                                    <p><span className="defender special-text">DEFENDER</span>'s Evasion skill</p>
                                    <p>+</p> 
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                </div>
                            </div>
                        </div>
                        <p className="centered-text">(The <span className="defender special-text">DEFENDER</span> wins if there is a tie)</p>
                        <div className="dashed-divider"></div>
                        <div className="splitting-outcomes-container">
                            <div className="splitting-outcome-arrows">
                                <i className="fa-solid fa-arrow-down left-splitting-outcome-arrow"></i>
                                <i className="fa-solid fa-arrow-down right-splitting-outcome-arrow"></i>
                            </div>
                            <div className="splitting-outcomes-content">
                                <div className="splitting-outcome">
                                    <p>If the <span className="attacker special-text">ATTACKER</span> wins:</p>
                                    <div className="dashed-divider"></div>
                                    <p>The <span className="defender special-text">DEFENDER</span> <button className="change-search-button" onClick={ () => { UpdateSearch("Receiving Damage") }}>takes damage</button>.</p>
                                </div>

                                <div className="roll-information-verticle-divider"></div>

                                <div className="splitting-outcome">
                                    <p>If the <span className="defender special-text">DEFENDER</span> wins:</p>
                                    <div className="dashed-divider"></div>
                                    <p>The <span className="defender special-text">DEFENDER</span> is moved outside the edge of the explosion radius.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="information-divider"></div>
                    <p>Once the attack is complete, and rolls for everyone (<span className="attacker special-text">ATTACKER</span> and <span className="defender special-text">DEFENDING characters</span>) invloved have been made, the <span className="attacker special-text">ATTACKER</span> removes one of the respective ammo they used from thier magazine.</p>
                </div>

            </div>


            : props.itemID === 76 ?


// Aimed Shot
            <div className="search-result-item"  style={{ width: "1200px" }}>
                <b>Aimed Shots</b>
                <p>Taking an aimed shot reduces the <span className="attacker special-text">ATTACKER</span>'s rate of fire for their turn to 1.</p>
                <p>The <span className="attacker special-text">ATTACKER</span> must specify where on the <span className="defender special-text">DEFENDER</span>'s body they are targeting <b>before</b> they roll.</p>
                <p>Note: <button className="change-search-button" onClick={ () => { UpdateSearch("Autofire") }}>Autofire</button> and <button className="change-search-button" onClick={ () => { UpdateSearch("Shotgun Shells") }}>Shotgun Shells</button> can't be used to make an aimed shot.</p>
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("aimed-shot-dropdown-1-caret")!, document.getElementById("aimed-shot-dropdown-1")!) } }>
                        <p>Compulsory if the <span className="defender special-text">DEFENDER</span> has a REF lower than 8 (0 - 7)</p>
                        <i className="fa-solid fa-caret-up" id="aimed-shot-dropdown-1-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="aimed-shot-dropdown-1">
                        <div className="dashed-divider"></div>
                        <div className="roll-information-container">
                            <div className="roll-information-rollers">
                                <p className="roll-information-roller">The <span className="attacker special-text">ATTACKER</span> makes the following roll:</p>
                                <p className="roll-information-roller">The <span className="defender special-text">DEFENDER</span> doesn't roll, but instead uses:</p>
                            </div>
                            <div className="roll-information-dividers">
                                <div className="roll-information-divider"></div>
                                <div className="roll-information-divider"></div>
                            </div>
                            <div className="roll-information-rolls">
                                <div className="roll-information-content">
                                    <p><span className="attacker special-text">ATTACKER</span>'s relevant ranged (Handgun, Heavy Weapons, Shoulder Arms) or melee (Brawling, Martial Arts, Melee Weapon) weapon skill.</p>
                                    <p>+</p> 
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                    <p>-</p> 
                                    <p>8</p>
                                </div>
                                <p className="vs special-text">VS</p>
                                <div className="roll-information-content">
                                    <p>The Difficulty Value (DV) determined by the distance to target table (below)</p>
                                </div>
                            </div>
                        </div>
                        <img src={ RangeDVTable } style={{ height: "400px", objectFit: "contain" }} alt="Range DV Table" />
                        <p className="centered-text">(The <span className="defender special-text">DEFENDER</span> wins if there is a tie)</p>
                        <div className="dashed-divider"></div>
                        <div className="splitting-outcomes-container">
                        <div className="splitting-outcome-arrows">
                            <i className="fa-solid fa-arrow-down left-splitting-outcome-arrow"></i>
                            <i className="fa-solid fa-arrow-down right-splitting-outcome-arrow"></i>
                        </div>
                        <div className="splitting-outcomes-content">
                            <div className="splitting-outcome">
                                <p>If the <span className="attacker special-text">ATTACKER</span> wins:</p>
                                <div className="dashed-divider"></div>
                                <p>The <span className="defender special-text">DEFENDER</span> <button className="change-search-button" onClick={ () => { UpdateSearch("Receiving Damage") }}>takes damage</button>.</p>
                                <p>Depending on where the <span className="attacker special-text">ATTACKER</span> was aiming, the <span className="defender special-text">DEFENDER</span> may be affected by one of the effects in the table below.</p>
                            </div>

                            <div className="roll-information-verticle-divider"></div>

                            <div className="splitting-outcome">
                                <p>If the <span className="defender special-text">DEFENDER</span> wins:</p>
                                <div className="dashed-divider"></div>
                                <p>The <span className="attacker special-text">ATTACKER</span> removes 1 bullet from their magazine.</p>
                            </div>
                        </div>
                        <img src={ AimedShotDescriptions } style={{ height: "200px", objectFit: "contain" }} alt="Range DV Table" />
                    </div>
                    </div>
                </div>
                <div className="information-divider"></div>
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("aimed-shot-dropdown-2-caret")!, document.getElementById("aimed-shot-dropdown-2")!) } }>
                        <p>(Optional) If the <span className="defender special-text">DEFENDER</span> has a REF of 8 or higher</p>
                        <i className="fa-solid fa-caret-up" id="aimed-shot-dropdown-2-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="aimed-shot-dropdown-2">
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
                                    <p><span className="attacker special-text">ATTACKER</span>'s relevant ranged or melee weapon skill. (Handgun, Heavy Weapons, Shoulder Arms, Brawling, Martial Arts, Melee Weapon)</p>
                                    <p>+</p> 
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                    <p>-</p>
                                    <p>8</p>
                                </div>
                                <p className="vs special-text">VS</p>
                                <div className="roll-information-content">
                                    <p><span className="defender special-text">DEFENDER</span>'s Evasion skill</p>
                                    <p>+</p> 
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                </div>
                            </div>
                        </div>
                        <p className="centered-text">(The <span className="defender special-text">DEFENDER</span> wins if there is a tie)</p>
                        <div className="dashed-divider"></div>
                        <div className="splitting-outcome-arrows">
                            <i className="fa-solid fa-arrow-down left-splitting-outcome-arrow"></i>
                            <i className="fa-solid fa-arrow-down right-splitting-outcome-arrow"></i>
                        </div>
                        <div className="splitting-outcomes-content">
                            <div className="splitting-outcome">
                                <p>If the <span className="attacker special-text">ATTACKER</span> wins:</p>
                                <div className="dashed-divider"></div>
                                <p>The <span className="defender special-text">DEFENDER</span> <button className="change-search-button" onClick={ () => { UpdateSearch("Receiving Damage") }}>takes damage</button>.</p>
                                <p>Depending on where the <span className="attacker special-text">ATTACKER</span> was aiming, the <span className="defender special-text">DEFENDER</span> may be affected by one of the effects in the table below.</p>
                            </div>

                            <div className="roll-information-verticle-divider"></div>

                            <div className="splitting-outcome">
                                <p>If the <span className="defender special-text">DEFENDER</span> wins:</p>
                                <div className="dashed-divider"></div>
                                <p>The <span className="attacker special-text">ATTACKER</span> removes 1 bullet from their magazine.</p>
                            </div>
                        </div>
                        <img src={ AimedShotDescriptions } style={{ height: "200px", objectFit: "contain" }} alt="Range DV Table" />
                    </div>
                </div>
            </div>



            : "" }
        </>
    );
}