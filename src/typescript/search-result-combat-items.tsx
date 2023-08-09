import React from "react";
// CSS
import SearchResultCustomItemStyles from "../css/search-result-custom-item.styles"
// Images 
import RangeDVTable from "../images/Range DV Table.png";
import AutofireRangeDVTable from "../images/Autofire Range DV Table.png";

// Context
import { SearchContext } from "..";

type SearchResultCombatItemParams = {
    itemID: number
}

export default function SearchResultCombatItem(props: SearchResultCombatItemParams) {
    const UpdateSearch = React.useContext(SearchContext);
    
    return (
        <>
            { props.itemID === 69 ?
                <div className="search-result-item" style={{ width: "1200px" }}>
                    <b>Ranged Combat</b>
                    <div className="content-dropdown">
                        <div className="content-dropdown-title" onClick={ () => { ToggleDropdown(document.getElementById("ranged-combat-dropdown-1-caret")!, document.getElementById("ranged-combat-dropdown-1")!) } }>
                            <p>Compulsory if the <span className="defender special-text">DEFENDER</span> has a REF lower than 8 (0 - 7)</p>
                            <i className="fa-solid fa-caret-up" id="ranged-combat-dropdown-1-caret"></i>
                        </div>
                        <div className="content-dropdown-content" id="ranged-combat-dropdown-1">
                            <div className="dashed-divider"></div>
                            <div className="content-dropdown">
                                <div className="content-dropdown-title" onClick={ () => { ToggleDropdown(document.getElementById("ranged-combat-dropdown-2-caret")!, document.getElementById("ranged-combat-dropdown-2")!) } }>
                                    <p>Is the <span className="attacker special-text">ATTACKER</span> firing a single shot?</p>
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
                            <div style={{ marginBottom: "50px" }} className="information-divider"></div>
                            <p style={{ padding: "0 10px" }}>Is the <span className="attacker special-text">ATTACKER</span> using <button className="change-search-button" onClick={ () => { UpdateSearch("Using Autofire") }}>Autofire</button>?</p>
                            <div className="information-divider"></div>
                            <p style={{ padding: "0 10px" }}>Is the <span className="attacker special-text">ATTACKER</span> using <button className="change-search-button" onClick={ () => { UpdateSearch("Suppressive Fire") }}>Suppressive Fire</button>?</p>
                            <div className="information-divider"></div>
                            <p style={{ padding: "0 10px" }}>Is the <span className="attacker special-text">ATTACKER</span> using <button className="change-search-button" onClick={ () => { UpdateSearch("Shotgun Shells") }}>Shotgun Shells</button>? (Not the same as slugs/basic shotgun ammo)</p>
                            <div className="information-divider"></div>
                            <p style={{ padding: "0 10px" }}>Is the <span className="attacker special-text">ATTACKER</span> using <button className="change-search-button" onClick={ () => { UpdateSearch("Explosives") }}>Explosives</button>?</p>
                        </div>
                    </div>
                    <div className="information-divider"></div>
                    <div className="content-dropdown">
                        <div className="content-dropdown-title" onClick={ () => { ToggleDropdown(document.getElementById("ranged-combat-dropdown-3-caret")!, document.getElementById("ranged-combat-dropdown-3")!) } }>
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
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { ToggleDropdown(document.getElementById("autofire-dropdown-1-caret")!, document.getElementById("autofire-dropdown-1")!) } }>
                        <p>Compulsory if the <span className="defender special-text">DEFENDER</span> has a REF lower than 8 (0 - 7)</p>
                        <i className="fa-solid fa-caret-up" id="autofire-dropdown-1-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="autofire-dropdown-1">
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
                    <div className="content-dropdown-title" onClick={ () => { ToggleDropdown(document.getElementById("autofire-dropdown-2-caret")!, document.getElementById("autofire-dropdown-2")!) } }>
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
                        <p className="roll-information-roller"><span className="defender special-text">Everyone</span> on foot, within 25 m/yds, out of cover, and within line of sight must roll:</p>
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
            </div>


            : props.itemID === 72 ?


// Shotgun Shells
            <div className="search-result-item">
                <b>Shotgun Shells</b>
            </div>


            : props.itemID === 73 ?


// Explosives
            <div className="search-result-item">
                <b>Explosives</b>
            </div>


            : props.itemID === 74 ?


// Melee Combat
            <div className="search-result-item">
                <b>Melee Combat</b>
            </div>

            : "" }

{/* // Taking Damage
// THIS CODE IS FOR DETERMINING AUTOFIRE DAMAGE
            <div className="roll-information-content" style={{ width: "100%" }}>
                <p>The <span className="attacker special-text">ATTACKER</span> makes the following roll to determine the damage done to the <span className="defender special-text">DEFENDER</span>:</p>
                <div className="information-divider"></div>
                <div>
                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 2 D6</p>
                    <p>*</p>
                    <p>The <b style={{ color: "#03ab70" }}>amount that beat the check</b>, up to the maximum allowed by the weapons's Autofire (SMG = 3, Assault Rifle = 4).</p>
                    <br></br>
                    <p><b>Example:</b> If 17 was the DV and the <span className="attacker special-text">ATTACKER</span> rolled 20, the <b style={{ color: "#03ab70" }}>amount that beat the check</b> would be 3 (20 - 17 = 3).</p>
                </div>
            </div>


                <p style={{ color: "white" }}>No Combat Item Found</p> */}
        </>
    );
}

function ToggleDropdown(caret: HTMLElement, dropdownContent: HTMLElement) {
    // Show dropdown content
    if (dropdownContent.style.display === "flex") {
        dropdownContent.style.display = "none";
        caret.style.transform = "rotate(180deg)";
    }
    // Hide dropdown content
    else {
        dropdownContent.style.display = "flex";
        caret.style.transform = "rotate(0deg)";
    }
}