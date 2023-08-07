import React from "react";
// CSS
import SearchResultCustomItemStyles from "../css/search-result-custom-item.styles"
// Images 
import RangeDVTable from "../images/Range DV Table.png";

export default function GetSearchResultCombatItem(itemID: number, updateSearch: (newSearch: string) => void) {
    if (itemID === 69) {
        return (
            <div style={{ width: "1200px", padding: "25px" }}>
                <SearchResultCustomItemStyles>
                    <b>Ranged Combat</b>
                    <div className="roll-information-content-dropdown">
                        <div className="roll-information-content-dropdown-title" onClick={ () => { ToggleDropdown(document.getElementById("ranged-combat-dropdown-1-caret")!, document.getElementById("ranged-combat-dropdown-1")!) } }>
                            <p>If the <span className="defender special-text">DEFENDER</span> has a REF lower than 8 (0 - 7)</p>
                            <i className="fa-solid fa-caret-up" id="ranged-combat-dropdown-1-caret"></i>
                        </div>
                        <div className="roll-information-content-dropdown-content" id="ranged-combat-dropdown-1">
                            <div className="roll-information-container">
                                <div className="roll-information-content">
                                    <p>The <span className="attacker special-text">ATTACKER</span> makes the following roll:</p>
                                    <div className="roll-information-divider"></div>
                                    <div>
                                        <p><span className="attacker special-text">ATTACKER</span>'s relevant weapon skill (Handgun, Heavy Weapons, Shoulder Arms)</p>
                                        <p>+</p> 
                                        <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                    </div>
                                </div>
                                <p className="vs special-text">VS</p>
                                <div className="roll-information-content">
                                    <p>The <span className="defender special-text">DEFENDER</span> doesn't roll, but instead uses:</p>
                                    <div className="roll-information-divider"></div>
                                    <div>
                                        <p>The Difficulty Value (DV) determined by the distance to target table (below)</p>
                                    </div>
                                </div>
                            </div>
                            <img src={ RangeDVTable } style={{ height: "400px", objectFit: "contain" }} alt="Range DV Table" />
                        </div>
                    </div>
                    <div className="roll-information-divider"></div>
                    <div className="roll-information-content-dropdown">
                        <div className="roll-information-content-dropdown-title" onClick={ () => { ToggleDropdown(document.getElementById("ranged-combat-dropdown-2-caret")!, document.getElementById("ranged-combat-dropdown-2")!) } }>
                            <p>(Optional) If the <span className="defender special-text">DEFENDER</span> has a REF of 8 or higher</p>
                            <i className="fa-solid fa-caret-up" id="ranged-combat-dropdown-2-caret"></i>
                        </div>
                        <div className="roll-information-content-dropdown-content" id="ranged-combat-dropdown-2">
                            <div className="roll-information-container">
                                <div className="roll-information-content">
                                    <p>The <span className="attacker special-text">ATTACKER</span> makes the following roll:</p>
                                    <div className="roll-information-divider"></div>
                                    <div>
                                        <p><span className="attacker special-text">ATTACKER</span>'s relevant weapon skill (Handgun, Heavy Weapons, Shoulder Arms)</p>
                                        <p>+</p> 
                                        <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                    </div>
                                </div>
                                <p className="vs special-text">VS</p>
                                <div className="roll-information-content">
                                    <p>The <span className="defender special-text">DEFENDER</span> makes the following roll:</p>
                                    <div className="roll-information-divider"></div>
                                    <div>
                                        <p><span className="defender special-text">DEFENDER</span>'s Evasion skill</p>
                                        <p>+</p> 
                                        <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="roll-information-divider"></div>
                    <p>(The <span className="defender special-text">DEFENDER</span> wins if there is a tie)</p>
                    <div className="splitting-outcomes-container">
                        <div className="splitting-outcome">
                            <i className="fa-solid fa-arrow-down left-splitting-outcome-arrow"></i>
                            <div className="splitting-outcome-information">
                                <p>If the <span className="attacker special-text">ATTACKER</span> wins:</p>
                                <p>The <span className="defender special-text">DEFENDER</span> <button className="change-search-button" onClick={ () => { updateSearch("Receiving Damage") }}>takes damage</button>.</p>
                            </div>
                        </div>

                        <div className="roll-information-verticle-divider"></div>
                        
                        <div className="splitting-outcome">
                            <i className="fa-solid fa-arrow-down right-splitting-outcome-arrow"></i>
                            <div className="splitting-outcome-information">
                                <p>If the <span className="defender special-text">DEFENDER</span> wins:</p>
                                <p>Nothing Happens</p>
                            </div>
                        </div>
                    </div>
                </SearchResultCustomItemStyles>
            </div>

        )
    }
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