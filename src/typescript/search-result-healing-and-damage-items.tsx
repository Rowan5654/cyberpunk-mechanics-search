import React from "react";

// Images
import HeadCriticalInjuries from "../images/Head Critical Injuries.png";
import BodyCriticalInjuries from "../images/Body Critical Injuries.png";

// Context
import { SearchContext } from "..";

type SearchResultHealingAndDamageItemsParams = {
    itemID: number,
    ToggleDropdown: (caret: HTMLElement, dropdownContent: HTMLElement) => void
}

export default function SearchResultHealingAndDamageItem(props: SearchResultHealingAndDamageItemsParams) {
    const UpdateSearch = React.useContext(SearchContext);

    return (
        <>
            { props.itemID === 77 ?
            <div className="search-result-item">
                <b>Critical Injuries</b>
                <p>When an <span className="attacker special-text">ATTACKER</span> is rolling multiple dice to determine the amount of damage inflicted on a <span className="defender special-text">DEFENDER</span>, if <b>at least</b> 2 dice result in a 6, a Critical Injury is inflicted on the <span className="defender special-text">DEFENDER</span>.</p>
                <p>All Critical Injuries immediately deal 5 damage to the <span className="defender special-text">DEFENDER</span>'s HP. This damage ignores any and all armor.</p>
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("critical-injuries-dropdown-1-caret")!, document.getElementById("critical-injuries-dropdown-1")!) } }>
                        <p>If the <span className="attacker special-text">ATTACKER</span> <b>was</b> attacking with an Aimed Shot to the <span className="defender special-text">DEFENDER</span>'s head:</p>
                        <i className="fa-solid fa-caret-up" id="critical-injuries-dropdown-1-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="critical-injuries-dropdown-1">
                        <div className="dashed-divider"></div>
                        <p>The <span className="attacker special-text">ATTACKER</span> rolls <i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 2 D6s on the following injury table. The <span className="defender special-text">DEFENDER</span> immediately receives the effects of the injury the <span className="attacker special-text">ATTACKER</span> rolled.</p>
                        <img src={ HeadCriticalInjuries } style={{ height: "750px", objectFit: "contain" }} />
                    </div>
                </div>
                <div className="information-divider"></div>
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("critical-injuries-dropdown-2-caret")!, document.getElementById("critical-injuries-dropdown-2")!) } }>
                        <p>If the <span className="attacker special-text">ATTACKER</span> <b>wasn't</b> attacking with an Aimed Shot to the <span className="defender special-text">DEFENDER</span>'s head:</p>
                        <i className="fa-solid fa-caret-up" id="critical-injuries-dropdown-2-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="critical-injuries-dropdown-2">
                        <div className="dashed-divider"></div>
                        <p>The <span className="attacker special-text">ATTACKER</span> rolls <i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 2 D6s on the following injury table. The <span className="defender special-text">DEFENDER</span> immediately receives the effects of the injury the <span className="attacker special-text">ATTACKER</span> rolled.</p>
                        <img src={ BodyCriticalInjuries } style={{ height: "750px", objectFit: "contain" }} />
                    </div>
                </div>
            </div>


            : ""
            
            }
        </>
    )
}