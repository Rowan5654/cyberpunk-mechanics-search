import React from "react";

// Images
import SkillCheckDifficultyTable from "../images/Skill Check vs Task Difficulty Table.png"
import MeleeWeaponTable from "../images/Melee Weapon Table.png";
import BrawlingTable from "../images/Brawling.png";
import MartialArtsTable from "../images/Martial Arts.png";
import RangedWeaponTable from "../images/Ranged Weapon Table.png";
import FireDamage from "../images/Fire Damage.png";
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
            
        
            : props.itemID === 80 ? 


// Taking Damage
            <div className="search-result-item">
                <b>Taking Damage</b>
                <p>The <span className="attacker special-text">ATTACKER</span>'s dice used for rolling the damage the <span className="defender special-text">DEFENDER</span> receives is determined by the weapon or fire mode of the weapon the <span className="attacker special-text">ATTACKER</span> is using.</p>
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("damage-dropdown-1-caret")!, document.getElementById("damage-dropdown-1")!) } }>
                        <p>If the <span className="attacker special-text">ATTACKER</span> is using autofire:</p>
                        <i className="fa-solid fa-caret-up" id="damage-dropdown-1-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="damage-dropdown-1">
                        <div className="dashed-divider"></div>
                        <div className="centered-content" style={{ width: "75%" }}>
                            <div className="roll-information-content" style={{ width: "100%" }}>
                                <p>The <span className="attacker special-text">ATTACKER</span> makes the following roll:</p>
                                <div className="information-divider"></div>
                                <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 2 D6</p>
                                <p>*</p>
                                <p>The <b style={{ color: "#03ab70" }}>amount that beat the DV</b>, up to the maximum allowed by the weapons's Autofire (SMG = 3, Assault Rifle = 4).</p>
                            </div>
                            <div className="dashed-divider"></div>
                            <p><b>Example:</b> If 17 was the DV and the <span className="attacker special-text">ATTACKER</span> rolled 20, the <b style={{ color: "#03ab70" }}>amount that beat the DV</b> would be 3 (20 - 17 = 3).</p>
                            <div className="dashed-divider"></div>
                            <p>If the <span className="defender special-text">DEFENDER</span> is in <button className="change-search-button" onClick={ () => { UpdateSearch("Cover") }}>cover</button> or using a <button className="change-search-button" onClick={ () => { UpdateSearch("Shields") }}>shield</button>, the cover takes the full damage of the roll. If the cover's HP drops below 0, the cover is destroyed and the <span className="defender special-text">DEFENDER</span> takes no damage.</p>
                            <p>If the <span className="defender special-text">DEFENDER</span> has <b>Armor</b>, the amount of damage done is reduced by the number of SP (stopping power) remaining in the <span className="defender special-text">DEFENDER</span>'s <b>Armor</b>. If the amount of damage rolled by the <span className="attacker special-text">ATTACKER</span> outweighs the amount of SP in the <span className="defender special-text">DEFENDER</span>'s <b>Armor</b>, the <span className="defender special-text">DEFENDER</span>'s <b>Armor's</b> SP is reduced by 1 until repaired.</p>
                            <p>The <span className="defender special-text">DEFENDER</span> takes whatever damage points are left directly to their Health (HP).</p>
                        </div>
                    </div>
                </div>

                <div className="information-divider"></div>
                
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("damage-dropdown-2-caret")!, document.getElementById("damage-dropdown-2")!) } }>
                        <p>If the <span className="attacker special-text">ATTACKER</span> is using Shotgun Shells:</p>
                        <i className="fa-solid fa-caret-up" id="damage-dropdown-2-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="damage-dropdown-2">
                        <div className="dashed-divider"></div>
                        <div className="centered-content" style={{ width: "75%" }}>
                            <div className="roll-information-content" style={{ width: "100%" }}>
                                <p>The <span className="attacker special-text">ATTACKER</span> makes the following roll:</p>
                                <div className="information-divider"></div>
                                <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 3 D6</p>
                            </div>
                            <div className="dashed-divider"></div>
                            <p>If the <span className="defender special-text">DEFENDER</span> is in <button className="change-search-button" onClick={ () => { UpdateSearch("Cover") }}>cover</button> or using a <button className="change-search-button" onClick={ () => { UpdateSearch("Shields") }}>shield</button>, the cover takes the full damage of the roll. If the cover's HP drops below 0, the cover is destroyed and the <span className="defender special-text">DEFENDER</span> takes no damage.</p>
                            <p>If the <span className="defender special-text">DEFENDER</span> has <b>Armor</b>, the amount of damage done is reduced by the number of SP (stopping power) remaining in the <span className="defender special-text">DEFENDER</span>'s <b>Armor</b>. If the amount of damage rolled by the <span className="attacker special-text">ATTACKER</span> outweighs the amount of SP in the <span className="defender special-text">DEFENDER</span>'s <b>Armor</b>, the <span className="defender special-text">DEFENDER</span>'s <b>Armor's</b> SP is reduced by 1 until repaired.</p>
                            <p>The <span className="defender special-text">DEFENDER</span> takes whatever damage points are left directly to their Health (HP).</p>
                        </div>
                    </div>
                </div>

                <div className="information-divider"></div>

                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("example-dropdown-1-caret")!, document.getElementById("example-dropdown-1")!) } }>
                        <p>If the <span className="attacker special-text">ATTACKER</span> is making a melee attack:</p>
                        <i className="fa-solid fa-caret-up" id="example-dropdown-1-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="example-dropdown-1">
                        <div className="dashed-divider"></div>
                        <div className="content-dropdown">
                            <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("damage-dropdown-3-caret")!, document.getElementById("damage-dropdown-3")!) } }>
                                <p>If the <span className="attacker special-text">ATTACKER</span> is using the <button className="change-search-button" onClick={ () => { UpdateSearch("Melee Weapon") }}>Melee Weapon Skill</button>:</p>
                                <i className="fa-solid fa-caret-up" id="damage-dropdown-3-caret"></i>
                            </div>
                            <div className="content-dropdown-content" id="damage-dropdown-3">
                                <div className="dashed-divider"></div>
                                <div className="centered-content" style={{ width: "75%" }}>
                                    <div className="roll-information-content" style={{ width: "100%" }}>
                                        <p>The <span className="attacker special-text">ATTACKER</span> makes the roll that relates to the weapon type they used to attack with:</p>
                                        <div className="information-divider"></div>
                                        <img src={ MeleeWeaponTable } alt="melee weapon table" style={{ height: "450px", objectFit: "contain" }} />
                                    </div>
                                    <div className="dashed-divider"></div>
                                    <p>Attacks using the <button className="change-search-button" onClick={ () => { UpdateSearch("Melee Weapon") }}>Melee Weapon Skill</button> ignore half of a <span className="defender special-text">DEFENDER</span>'s Armor's SP, rounded up.</p>
                                    <p>If the <span className="defender special-text">DEFENDER</span> has <b>Armor</b>, the amount of damage done is reduced by half the number of SP (stopping power) remaining in the <span className="defender special-text">DEFENDER</span>'s <b>Armor</b>, rounded up. If the amount of damage rolled by the <span className="attacker special-text">ATTACKER</span> outweighs the half amount of SP in the <span className="defender special-text">DEFENDER</span>'s <b>Armor</b>, the <span className="defender special-text">DEFENDER</span>'s <b>Armor's</b> SP is reduced by 1 until repaired.</p>
                                    <p>The <span className="defender special-text">DEFENDER</span> takes whatever damage points are left directly to their Health (HP).</p>
                                </div>
                            </div>
                        </div>

                        <div className="information-divider"></div>
                        
                        <div className="content-dropdown">
                            <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("damage-dropdown-4-caret")!, document.getElementById("damage-dropdown-4")!) } }>
                                <p>If the <span className="attacker special-text">ATTACKER</span> is using the Brawling Skill:</p>
                                <i className="fa-solid fa-caret-up" id="damage-dropdown-4-caret"></i>
                            </div>
                            <div className="content-dropdown-content" id="damage-dropdown-4">
                                <div className="dashed-divider"></div>
                                <div className="centered-content" style={{ width: "75%" }}>
                                    <div className="roll-information-content" style={{ width: "100%" }}>
                                        <p>The <span className="attacker special-text">ATTACKER</span> uses their BODY stat to determine what dice they roll on the table below, if the <span className="attacker special-text">ATTACKER</span> has a cyberarm, the minumum they should roll is <i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 2 D6:</p>
                                        <div className="information-divider"></div>
                                        <img src={ BrawlingTable } alt="brawling table" style={{ height: "100px", objectFit: "contain" }} />
                                    </div>
                                    <div className="dashed-divider"></div>
                                    <p>If the <span className="defender special-text">DEFENDER</span> has <b>Armor</b>, the amount of damage done is reduced by the number of SP (stopping power) remaining in the <span className="defender special-text">DEFENDER</span>'s <b>Armor</b>. If the amount of damage rolled by the <span className="attacker special-text">ATTACKER</span> outweighs the amount of SP in the <span className="defender special-text">DEFENDER</span>'s <b>Armor</b>, the <span className="defender special-text">DEFENDER</span>'s <b>Armor's</b> SP is reduced by 1 until repaired.</p>
                                    <p>The <span className="defender special-text">DEFENDER</span> takes whatever damage points are left directly to their Health (HP).</p>
                                </div>
                            </div>
                        </div>

                        <div className="information-divider"></div>
                        
                        <div className="content-dropdown">
                            <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("damage-dropdown-5-caret")!, document.getElementById("damage-dropdown-5")!) } }>
                                <p>If the <span className="attacker special-text">ATTACKER</span> is using the <button className="change-search-button" onClick={ () => { UpdateSearch("Martial Arts") }}>Martial Arts Skill</button> to make a melee attack:</p>
                                <i className="fa-solid fa-caret-up" id="damage-dropdown-5-caret"></i>
                            </div>
                            <div className="content-dropdown-content" id="damage-dropdown-5">
                                <div className="dashed-divider"></div>
                                <div className="centered-content" style={{ width: "75%" }}>
                                    <div className="roll-information-content" style={{ width: "100%" }}>
                                        <p>The <span className="attacker special-text">ATTACKER</span> uses their BODY stat to determine what dice they roll on the table below:</p>
                                        <div className="information-divider"></div>
                                        <img src={ MartialArtsTable } alt="brawling table" style={{ height: "100px", objectFit: "contain" }} />
                                    </div>
                                    <div className="dashed-divider"></div>
                                    <p>Attacks using the <button className="change-search-button" onClick={ () => { UpdateSearch("Martial Arts") }}>Martial Arts Skill</button> ignore half of a <span className="defender special-text">DEFENDER</span>'s Armor's SP, rounded up.</p>
                                    <p>If the <span className="defender special-text">DEFENDER</span> has <b>Armor</b>, the amount of damage done is reduced by half the number of SP (stopping power) remaining in the <span className="defender special-text">DEFENDER</span>'s <b>Armor</b>, rounded up. If the amount of damage rolled by the <span className="attacker special-text">ATTACKER</span> outweighs the half amount of SP in the <span className="defender special-text">DEFENDER</span>'s <b>Armor</b>, the <span className="defender special-text">DEFENDER</span>'s <b>Armor's</b> SP is reduced by 1 until repaired.</p>
                                    <p>The <span className="defender special-text">DEFENDER</span> takes whatever damage points are left directly to their Health (HP).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                


                <div className="information-divider"></div>
                
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("damage-dropdown-6-caret")!, document.getElementById("damage-dropdown-6")!) } }>
                        <p>If the <span className="attacker special-text">ATTACKER</span> is making a ranged attack or aimed shot (not using any alternate fire modes):</p>
                        <i className="fa-solid fa-caret-up" id="damage-dropdown-6-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="damage-dropdown-6">
                        <div className="dashed-divider"></div>
                        <div className="centered-content" style={{ width: "75%" }}>
                            <div className="roll-information-content" style={{ width: "100%" }}>
                                <p>The <span className="attacker special-text">ATTACKER</span> makes the roll that relates to the weapon type they used to attack with:</p>
                                <div className="information-divider"></div>
                                <img src={ RangedWeaponTable } alt="melee weapon table" style={{ height: "900px", objectFit: "contain" }} />
                            </div>
                            <div className="dashed-divider"></div>
                            <p>If the <span className="defender special-text">DEFENDER</span> is in <button className="change-search-button" onClick={ () => { UpdateSearch("Cover") }}>cover</button> or using a <button className="change-search-button" onClick={ () => { UpdateSearch("Shields") }}>shield</button>, the cover takes the full damage of the roll. If the cover's HP drops below 0, the cover is destroyed and the <span className="defender special-text">DEFENDER</span> takes no damage.</p>
                            <p>If the <span className="defender special-text">DEFENDER</span> has <b>Armor</b>, the amount of damage done is reduced by the number of SP (stopping power) remaining in the <span className="defender special-text">DEFENDER</span>'s <b>Armor</b>. If the amount of damage rolled by the <span className="attacker special-text">ATTACKER</span> outweighs the amount of SP in the <span className="defender special-text">DEFENDER</span>'s <b>Armor</b>, the <span className="defender special-text">DEFENDER</span>'s <b>Armor's</b> SP is reduced by 1 until repaired.</p>
                            <p>The <span className="defender special-text">DEFENDER</span> takes whatever damage points are left directly to their Health (HP).</p>
                        </div>
                    </div>
                </div>

                <div className="information-divider"></div>

                <p>Any <span className="defender special-text">character</span> can take damage from certain elements if they are being affected by them on their turn.</p>

                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("damage-dropdown-7-caret")!, document.getElementById("damage-dropdown-7")!) } }>
                        <p>If the <span className="defender special-text">character</span> is on fire:</p>
                        <i className="fa-solid fa-caret-up" id="damage-dropdown-7-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="damage-dropdown-7">
                        <div className="dashed-divider"></div>
                        <div className="centered-content" style={{ width: "75%" }}>
                            <div className="roll-information-content" style={{ width: "100%" }}>
                                <p>Until the <span className="defender special-text">character</span> uses an action to put themselves out, they take damage directly the their health based on the severity of which they are on fire.</p>
                                <img src={ FireDamage } style={{ height: "200px", objectFit: "contain" }} alt="fire damage table" />
                                <p>Damage caused from being on fire ignores <b>Armor</b>.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="information-divider"></div>
                
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("damage-dropdown-8-caret")!, document.getElementById("damage-dropdown-8")!) } }>
                        <p>If the <span className="defender special-text">character</span> is drowning or being choked:</p>
                        <i className="fa-solid fa-caret-up" id="damage-dropdown-8-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="damage-dropdown-8">
                        <div className="dashed-divider"></div>
                        <div className="centered-content" style={{ width: "75%" }}>
                            <p><span className="defender special-text">Characters</span> can hold their breath for a number of minutes equal to their BODY stat. Once a <span className="defender special-text">character</span> is out of breath, they will start drowning.</p>
                            <p>At the beginning of a <span className="defender special-text">character</span> who is drowning or being asphyxiated's turn, they receive damage equal to their BODY stat directly to their health (HP), ignoring <b>Armor</b></p>
                            <p>If a <span className="defender special-text">character</span> is being asphyxiated in the vacuum of space, they receive a <i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D6 decrease in their INT, REF, and DEX stats of at the end of their turn. If their INT reaches 0, they immediately die. If the <span className="defender special-text">character</span> gets a breath of air before dying, they get all lost stat points from space asphyxiation back.</p>
                        </div>
                    </div>
                </div>

                <div className="information-divider"></div>
                
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("damage-dropdown-9-caret")!, document.getElementById("damage-dropdown-9")!) } }>
                        <p>If the <span className="defender special-text">character</span> is being electrocuted:</p>
                        <i className="fa-solid fa-caret-up" id="damage-dropdown-9-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="damage-dropdown-9">
                        <div className="dashed-divider"></div>
                        <div className="centered-content" style={{ width: "75%" }}>
                            <p>When a <span className="defender special-text">character</span> is electrocuted, they immediately take <i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 6 D6 damage.</p>
                            <p>If the <span className="defender special-text">character</span> has <b>Armor</b>, the amount of damage done is reduced by the number of SP (stopping power) remaining in the <span className="defender special-text">DEFENDER</span>'s <b>Armor</b>. If the amount of damage rolled outweighs the amount of SP in the <span className="defender special-text">character</span>'s <b>Armor</b>, the <span className="defender special-text">character</span>'s <b>Armor's</b> SP is reduced by 1 until repaired.</p>
                            <p>The <span className="defender special-text">character</span> takes whatever damage points are left directly to their Health (HP).</p>
                            <p>If the <span className="defender special-text">character</span> does not move away from the source of the electrocution, they are damaged by electricity again at the end of each of their turns until they are no longer being electrocuted.</p>
                        </div>
                    </div>
                </div>

                <div className="information-divider"></div>
                
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("damage-dropdown-10-caret")!, document.getElementById("damage-dropdown-10")!) } }>
                        <p>If the <span className="defender special-text">character</span> is under extreme exposure to the elements (Freezing Snow, Storm, Desert Heat)</p>
                        <i className="fa-solid fa-caret-up" id="damage-dropdown-10-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="damage-dropdown-10">
                        <div className="dashed-divider"></div>
                        <div className="centered-content" style={{ width: "75%" }}>
                            <p>At the end of each day a <span className="defender special-text">character</span> remains under the effects of extreme elements, they take <i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D6 damage directly to their HP. Ignoring Armor.</p>
                            <p>Unless the <span className="defender special-text">character</span> is actively using proper equipment to counteract the specific effects of the extreme elements they are facing, they can not heal while under the effects of extreme elements.</p>
                        </div>
                    </div>
                </div>

                <div className="information-divider"></div>
                
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("damage-dropdown-11-caret")!, document.getElementById("damage-dropdown-11")!) } }>
                        <p>If the <span className="defender special-text">character</span> is taking fall damage:</p>
                        <i className="fa-solid fa-caret-up" id="damage-dropdown-11-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="damage-dropdown-11">
                        <div className="dashed-divider"></div>
                        <div className="centered-content" style={{ width: "75%" }}>
                            <p>For every 10m/yds or 5 squares a <span className="defender special-text">character</span> has fallen, upon hitting the ground, they immediately take <i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 2 D6 damage</p>
                            <p>If the <span className="defender special-text">character</span> has <b>Armor</b>, the amount of damage done is reduced by the number of SP (stopping power) remaining in the <span className="defender special-text">DEFENDER</span>'s <b>Armor</b>. If the amount of damage rolled outweighs the amount of SP in the <span className="defender special-text">character</span>'s <b>Armor</b>, the <span className="defender special-text">character</span>'s <b>Armor's</b> SP is reduced by 1 until repaired.</p>
                            <p>The <span className="defender special-text">character</span> takes whatever damage points are left directly to their Health (HP).</p>
                            <p>Unless the <span className="defender special-text">character</span> has 2 cyberlegs and has fallen less than 30 m/yrds (or 6 squares), they must roll:</p>
                        <div className="dashed-divider"></div>
                        <div className="roll-information-container">
                            <div className="roll-information-rolls">
                                <div className="roll-information-content">
                                    <p><span className="defender special-text">character</span>'s Athletics Skill</p>
                                    <p>+</p> 
                                    <p><i className="fa-solid fa-dice-d20 dice-roll-icon"></i> 1 D10</p>
                                </div>
                                <p className="vs special-text">VS</p>
                                <div className="roll-information-content" style={{ justifyContent: "center" }}>
                                    <p style={{ fontSize: "50px" }}>15</p>
                                </div>
                            </div>
                        </div>
                        <div className="dashed-divider"></div>
                            <p>Failing the check immediately applies the Broken Leg <button className="change-search-button" onClick={ () => { UpdateSearch("Critical Injury") }}>Critical Injury</button></p>
                        </div>
                    </div>
                </div>

                <div className="information-divider"></div>
                
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("damage-dropdown-12-caret")!, document.getElementById("damage-dropdown-12")!) } }>
                        <p>If the <span className="defender special-text">character</span> is being poisoned or drugged:</p>
                        <i className="fa-solid fa-caret-up" id="damage-dropdown-12-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="damage-dropdown-12">
                        {/* Content goes here */}
                    </div>
                </div>

                <div className="information-divider"></div>
                
                <div className="content-dropdown">
                    <div className="content-dropdown-title" onClick={ () => { props.ToggleDropdown(document.getElementById("damage-dropdown-13-caret")!, document.getElementById("damage-dropdown-13")!) } }>
                        <p>If the <span className="defender special-text">character</span> is under the effects of radiation:</p>
                        <i className="fa-solid fa-caret-up" id="damage-dropdown-13-caret"></i>
                    </div>
                    <div className="content-dropdown-content" id="damage-dropdown-13">
                        {/* Content goes here */}
                    </div>
                </div>

                <div className="information-divider"></div>
                
            </div>
            
            
            : ""

            }
        </>
    )
}