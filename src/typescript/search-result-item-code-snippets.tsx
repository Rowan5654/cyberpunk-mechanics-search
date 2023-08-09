export default function CodeSnippets() {
    return (
        <>
{/* Dropdowns */}
            <div className="content-dropdown">
                <div className="content-dropdown-title" onClick={ () => { ToggleDropdown(document.getElementById("example-dropdown-1-caret")!, document.getElementById("example-dropdown-1")!) } }>
                    <p>Why should the user click this dropdown?</p>
                    <i className="fa-solid fa-caret-up" id="example-dropdown-1-caret"></i>
                </div>
                <div className="content-dropdown-content" id="example-dropdown-1">
                    {/* Content goes here */}
                </div>
            </div>


{/* Roll Information */}
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
                        <p><span className="attacker special-text">ATTACKER</span>'s variable A</p>
                        <p>+</p> 
                        <p><span className="attacker special-text">ATTACKER</span>'s variable B</p>
                        <p>+</p>
                        <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                    </div>
                    <p className="vs special-text">VS</p>
                    <div className="roll-information-content">
                        <p><span className="defender special-text">DEFENDER</span>'s variable A</p>
                        <p>+</p> 
                        <p><span className="defender special-text">DEFENDER</span>'s variable B</p>
                        <p>+</p> 
                        <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                    </div>
                </div>
            </div>


{/* Splitting Outcomes */}
            <div className="splitting-outcomes-container">
                <div className="splitting-outcome-arrows">
                    <i className="fa-solid fa-arrow-down left-splitting-outcome-arrow"></i>
                    <i className="fa-solid fa-arrow-down right-splitting-outcome-arrow"></i>
                </div>
                <div className="splitting-outcomes-content">
                    <div className="splitting-outcome">
                        <p>If the <span className="attacker special-text">ATTACKER</span> wins:</p>
                        <div className="dashed-divider"></div>
                        <p>What happens when the attacker wins?</p>
                        <p><button className="change-search-button" onClick={ () => { /* UpdateSearch("") */ }}>Redirect Button Example</button></p>
                    </div>

                    <div className="roll-information-verticle-divider"></div>

                    <div className="splitting-outcome">
                        <p>If the <span className="defender special-text">DEFENDER</span> wins:</p>
                        <div className="dashed-divider"></div>
                        <p>What happens when the defender wins?</p>
                        <p><button className="change-search-button" onClick={ () => { /* UpdateSearch("") */ }}>Redirect Button Example</button></p>
                    </div>
                </div>
            </div>
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