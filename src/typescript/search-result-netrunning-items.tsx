// CSS
import SearchResultNetrunningItemsStyles from "../css/search-result-netrunning-items.styles"

export default function GetSearchResultNetrunningItem(item: string) {
    if (item === "Encountering Black ICE") {
        return (
            <SearchResultNetrunningItemsStyles>
                <b>When a <span className="black-ice special-text">Black ICE</span> is encountered, the following rolls are made:</b>
                <div className="roll-information-container">
                    <div className="roll-information-content">
                        <p>The <span className="netrunner special-text">Netrunner</span> makes the following roll:</p>
                        <div className="roll-information-divider"></div>
                        <div>
                            <p>Interface Rank (Role ability)</p>
                            <p>+</p> 
                            <p>Any SPEED bonus currently active on the <span className="netrunner special-text">Netrunner</span></p>
                            <p>+</p> 
                            <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                        </div>
                    </div>
                    <p className="vs special-text">VS</p>
                    <div className="roll-information-content">
                        <p>The <span className="black-ice special-text">Black ICE</span> <span className="gm special-text">(GM)</span> makes the following roll:</p>
                        <div className="roll-information-divider"></div>
                        <div>
                            <p>The <span className="black-ice special-text">Black ICE</span>'s SPEED</p>
                            <p>+</p>
                            <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                        </div>
                    </div>
                </div>

                <div className="roll-information-divider"></div>

                <p>(The <span className="netrunner special-text">Netrunner</span> wins if there is a tie)</p>

                <div className="splitting-outcomes-container">
                    <div className="splitting-outcome">
                        <i className="fa-solid fa-arrow-down left-splitting-outcome-arrow"></i>
                        <div className="splitting-outcome-information">
                            <p>If the <span className="netrunner special-text">Netrunner</span> wins:</p>
                            <p>The <span className="black-ice special-text">Black ICE</span> is placed at the top of the inititive que.</p>
                        </div>
                    </div>

                    <div className="roll-information-verticle-divider"></div>
                    
                    <div className="splitting-outcome">
                        <i className="fa-solid fa-arrow-down right-splitting-outcome-arrow"></i>
                        <div className="splitting-outcome-information">
                            <p>If the <span className="black-ice special-text">Black ICE</span> wins:</p>
                            <p>The <span className="black-ice special-text">Black ICE</span> immediately applies it's effect to the netrunner and is placed at the top of the inititive queue.</p>
                        </div>
                    </div>
                </div>

                <div className="roll-information-divider"></div>

                <p>The <span className="black-ice special-text">Black ICE</span> will attach itself onto the <span className="netrunner special-text">Netrunner</span> and follow them throughout the Architecture. At the beginning of each turn, <span className="black-ice special-text">Anti-Personnel Black ICE</span> will attack the <span className="netrunner special-text">Netrunner</span>, and <span className="black-ice special-text">Anti-Program Black ICE</span> will attack one of the <span className="netrunner special-text">Netrunner</span>'s programs at random.</p>

                <p>The only way to get rid of a <span className="black-ice special-text">Black ICE</span> is to either Derezz it (Remove all it's HP), or make a successful <button className="change-search-button" onClick={ () => { (document.getElementById("search-input") as HTMLInputElement)!.value = "Slide" }}>Slide</button> against it.</p>

            </ SearchResultNetrunningItemsStyles>
        )
    }


    if (item === "Netrunning Combat" || "NET Combat") {
        return (
            <SearchResultNetrunningItemsStyles>
                <b>NET Combat</b>
                <div className="roll-information-content-dropdown">
                    <div className="roll-information-content-dropdown-title" onClick={ () => { ToggleDropdown(document.getElementById("net-combat-dropdown-1-caret")!, document.getElementById("net-combat-dropdown-1")!) } }>
                        <p>If a <span className="netrunner special-text">Netrunner</span> is attacking a <span className="black-ice special-text">Black ICE</span>:</p>
                        <i className="fa-solid fa-caret-up" id="net-combat-dropdown-1-caret"></i>
                    </div>
                    <div className="roll-information-content-dropdown-content" id="net-combat-dropdown-1">
                        <div className="roll-information-container">
                            <div className="roll-information-content">
                                <p>The <span className="netrunner special-text">Netrunner</span> makes the following roll:</p>
                                <div className="roll-information-divider"></div>
                                <div>
                                    <p>Interface Rank (Role ability)</p>
                                    <p>+</p> 
                                    <p>The <span className="black-ice special-text">Programs</span>'s ATK</p>
                                    <p>+</p> 
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                </div>
                            </div>
                            <p className="vs special-text">VS</p>
                            <div className="roll-information-content">
                                <p>The <span className="black-ice special-text">Black ICE</span> <span className="gm special-text">(GM)</span> makes the following roll:</p>
                                <div className="roll-information-divider"></div>
                                <div>
                                    <p>The <span className="black-ice special-text">Black ICE</span>'s DEF</p>
                                    <p>+</p>
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="roll-information-divider"></div>
                <div className="roll-information-content-dropdown"> 
                    <div className="roll-information-content-dropdown-title" onClick={ () => { ToggleDropdown(document.getElementById("net-combat-dropdown-2-caret")!, document.getElementById("net-combat-dropdown-2")!) } }>
                        <p>If an <span className="black-ice special-text">Anti-Personnel Black ICE</span> is attacking a <span className="netrunner special-text">Netrunner</span>:</p>
                        <i className="fa-solid fa-caret-up" id="net-combat-dropdown-2-caret"></i>
                    </div>
                    <div className="roll-information-content-dropdown-content" id="net-combat-dropdown-2">
                        <div className="roll-information-container">
                            <div className="roll-information-content">
                                <p>The <span className="black-ice special-text">Black ICE</span> <span className="gm special-text">(GM)</span> makes the following roll:</p>
                                <div className="roll-information-divider"></div>
                                <div>
                                    <p>The <span className="black-ice special-text">Black ICE</span>'s ATK</p>
                                    <p>+</p>
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                </div>
                            </div>
                            <p className="vs special-text">VS</p>
                            <div className="roll-information-content">
                                <p>The <span className="netrunner special-text">Netrunner</span> makes the following roll:</p>
                                <div className="roll-information-divider"></div>
                                <div>
                                    <p>Interface Rank (Role ability)</p>
                                    <p>+</p> 
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="roll-information-divider"></div>
                <div className="roll-information-content-dropdown">
                    <div className="roll-information-content-dropdown-title" onClick={ () => { ToggleDropdown(document.getElementById("net-combat-dropdown-3-caret")!, document.getElementById("net-combat-dropdown-3")!) } }>
                        <p>If an <span className="black-ice special-text">Anti-Program Black ICE</span> is attacking a <span className="netrunner special-text">Netrunner</span>'s program:</p>
                        <i className="fa-solid fa-caret-up" id="net-combat-dropdown-3-caret"></i>
                    </div>
                    <div className="roll-information-content-dropdown-content" id="net-combat-dropdown-3">
                        <div className="roll-information-container">
                            <div className="roll-information-content">
                                <p>The <span className="black-ice special-text">Black ICE</span> <span className="gm special-text">(GM)</span> makes the following roll:</p>
                                <div className="roll-information-divider"></div>
                                <div>
                                    <p>The <span className="black-ice special-text">Black ICE</span>'s ATK</p>
                                    <p>+</p>
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                </div>
                            </div>
                            <p className="vs special-text">VS</p>
                            <div className="roll-information-content">
                                <p>The <span className="netrunner special-text">Netrunner</span> makes the following roll:</p>
                                <div className="roll-information-divider"></div>
                                <div>
                                    <p>The <span className="black-ice special-text">Program</span>'s DEF</p>
                                    <p>+</p> 
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="roll-information-divider"></div>
                <p>If the <span className="attacker special-text">ATTACKER</span> is successful, the <span className="defender special-text">DEFENDER</span> suffers the effect of the program used.</p>
                <ul>
                    <li>If the <span className="defender special-text">DEFENDER</span> is a <span className="netrunner special-text">Netrunner</span>, they will reduce thier HP based on the damage done. </li>
                    <li>If the <span className="defender special-text">DEFENDER</span> is a <span className="black-ice special-text">Program</span>, it will reduce it's REZ based on the damage done.</li>
                </ul>
                <p style={{ textAlign: "center" }}>A <span className="defender special-text">DEFENDING</span> <span className="black-ice special-text">Program</span> is Derezzed when it's REZ reaches 0. In order to use the program again, it will need to be deactivated and reactivated (2 seperate NET Actions). If a <span className="black-ice special-text">Program</span> is destroyed (part of some <span className="black-ice special-text">Programs</span> effect), a completely new <span className="black-ice special-text">Program</span> will need to be purchased to replace it.</p>
            </SearchResultNetrunningItemsStyles>
        )
    }
}

function ToggleDropdown(caret: HTMLElement, dropdownContent: HTMLElement) {
    // Show dropdown content
    if (dropdownContent.style.display == "flex") {
        dropdownContent.style.display = "none";
        caret.style.transform = "rotate(180deg)";
    }
    // Hide dropdown content
    else {
        dropdownContent.style.display = "flex";
        caret.style.transform = "rotate(0deg)";
    }
}