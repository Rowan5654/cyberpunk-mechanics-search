import React from "react";

// Context
import { SearchContext } from "..";

type SearchResultMeleeCombatItemParams = {
    itemID: number,
    ToggleDropdown: (caret: HTMLElement, dropdownContent: HTMLElement) => void
}

export default function SeachResultMeleeCombatItems(props: SearchResultMeleeCombatItemParams) {
    const UpdateSearch = React.useContext(SearchContext);
    
    return (
        <>
            { props.itemID === 74 ?
                //  Melee Combat
                <div className="search-result-item">
                    <b>Melee Combat</b>
                    <p>When making a melee attack:</p>
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
                                <p><span className="attacker special-text">ATTACKER</span>'s relevant weapon skill (Brawling, Martial Arts, Melee Weapon)</p>
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
                                <p>The <span className="defender special-text">DEFENDER</span> <button className="change-search-button" onClick={ () => { UpdateSearch("Take Damage") }}>takes damage</button></p>
                                <p></p>
                            </div>

                            <div className="roll-information-verticle-divider"></div>

                            <div className="splitting-outcome">
                                <p>If the <span className="defender special-text">DEFENDER</span> wins:</p>
                                <div className="dashed-divider"></div>
                                <p>Nothing Happens</p>
                            </div>
                        </div>
                    </div>
                </div>

            : "" }
        </>

    )
}