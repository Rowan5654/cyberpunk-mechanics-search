// Images
import concentrationImage from "../images/skills/Concentration.png";
import concealRevealObjectImage from "../images/skills/Conceal-Reveal Object.png";
import lipReadingImage from "../images/skills/Lip Reading.png";
import perceptionImage from "../images/skills/Perception.png";
import trackingImage from "../images/skills/Tracking.png";
import athleticsImage from "../images/skills/Athletics.png";
import contortionistImage from "../images/skills/Contortionist.png";
import danceImage from "../images/skills/Dance.png";
import enduranceImage from "../images/skills/Endurance.png";
import resistTortureDrugsImage from "../images/skills/Resist Torture-Drugs.png";
import stealthImage from "../images/skills/Stealth.png";
import driveLandVehiclesImage from "../images/skills/Drive Land Vehicle.png";
import pilotAirVehicleImage from "../images/skills/Pilot Air Vehicle.png";
import pilotSeaVehicleImage from "../images/skills/Pilot Sea Vehicle.png";
import ridingImage from "../images/skills/Riding.png";
import accountingImage from "../images/skills/Accounting.png";
import animalHandlingImage from "../images/skills/Animal Handling.png";
import bureaucracyImage from "../images/skills/Bureaucracy.png";
import businessImage from "../images/skills/Business.png";
import compositionImage from "../images/skills/Composition.png";
import criminologyImage from "../images/skills/Criminology.png";
import cryptographyImage from "../images/skills/Cryptography.png";
import deductionImage from "../images/skills/Deduction.png";
import eductionImage from "../images/skills/Education.png";
import gambleImage from "../images/skills/Gamble.png";
import languageImage from "../images/skills/Language.png";
import librarySearchImage from "../images/skills/Library Search.png";
import localExpertImage from "../images/skills/Local Expert.png";
import scienceImage from "../images/skills/Science.png";
import tacticsImage from "../images/skills/Tactics.png";
import wildernessSurvivalImage from "../images/skills/Wilderness Survival.png";
import brawlingImage from "../images/skills/Brawling.png";
import evasionImage from "../images/skills/Evasion.png";
import martialArtsImage from "../images/skills/Martial Arts.png";
import meleeWeaponImage from "../images/skills/Melee Weapon.png";
import actingImage from "../images/skills/Acting.png";
import playInstrumentImage from "../images/skills/Play Instrument.png";
import archeryImage from "../images/skills/Archery.png";
import autofireImage from "../images/skills/Autofire.png";
import handgunImage from "../images/skills/Handgun.png";
import heavyWeaponsImage from "../images/skills/Heavy Weapons.png";
import shoulderArmsImage from "../images/skills/Shoulder Arms.png";
import briberyImage from "../images/skills/Bribery.png";
import conversationImage from "../images/skills/Conversation.png";
import humanPerceptionImage from "../images/skills/Human Perception.png";
import interrogationImage from "../images/skills/Interrogation.png";
import persuasionImage from "../images/skills/Persuasion.png";
import personalGroomingImage from "../images/skills/Personal Grooming.png";
import streetwiseImage from "../images/skills/Streetwise.png";
import tradingImage from "../images/skills/Trading.png";
import wardrobeAndStyleImage from "../images/skills/Wardrobe & Style.png";
import airVehicleTechImage from "../images/skills/Air Vehicle Tech.png";
import basicTechImage from "../images/skills/Basic Tech.png";
import cybertechImage from "../images/skills/Cybertech.png";
import demolitionsImage from "../images/skills/Demolitions.png";
import electronicsSecurityTechImage from "../images/skills/Electronics-Security Tech.png";
import firstAidImage from "../images/skills/First Aid.png";
import forgeryImage from "../images/skills/Forgery.png";
import landVehicleTechImage from "../images/skills/Land Vehicle Tech.png";
import paintDrawSculptImage from "../images/skills/Paint-Draw-Sculpt.png";
import paramedicImage from "../images/skills/Paramedic.png";
import photographyFilmImage from "../images/skills/Photography-Film.png";
import pickLockImage from "../images/skills/Pick Lock.png";
import pickPocketImage from "../images/skills/Pick Pocket.png";
import seaVechicleTechImage from "../images/skills/Sea Vehicle Tech.png";
import weaponstechImage from "../images/skills/Weaponstech.png";

type SearchResultSkillitemParams = {
    itemID: number
}

export default function SearchResultSkillitem(props: SearchResultSkillitemParams) {
    return (
        <>
            { props.itemID === 1 ?
                <img src={ concentrationImage } alt="concentration" />
            : props.itemID === 2 ? 
                <img src={ concealRevealObjectImage } alt="conceal/reveal object" />
            : props.itemID === 3 ? 
                <img src={ lipReadingImage } alt="lip reading" />
            : props.itemID === 4 ? 
                <img src={ perceptionImage } alt="perception" />
            : props.itemID === 5 ? 
                <img src={ trackingImage } alt="tracking" />
            : props.itemID === 6 ? 
                <img src={ athleticsImage } alt="athletics" />
            : props.itemID === 7 ? 
                <img src={ contortionistImage } alt="contortionist" />
            : props.itemID === 8 ? 
                <img src={ danceImage } alt="dance" />
            : props.itemID === 9 ? 
                <img src={ enduranceImage } alt="endurance" />
            : props.itemID === 10 ? 
                <img src={ resistTortureDrugsImage } alt="resist torture/drugs" />
            : props.itemID === 11 ? 
                <img src={ stealthImage } alt="stealth" />
            : props.itemID === 12 ? 
                <img src={ driveLandVehiclesImage } alt="drive land vehicle" />
            : props.itemID === 13 ? 
                <img src={ pilotAirVehicleImage } alt="pilot air vehicle" />
            : props.itemID === 14 ? 
                <img src={ pilotSeaVehicleImage } alt="pilot sea vehicle" />
            : props.itemID === 15 ? 
                <img src={ ridingImage } alt="riding" />
            : props.itemID === 16 ? 
                <img src={ accountingImage } alt="accounting" />
            : props.itemID === 17 ? 
                <img src={ animalHandlingImage } alt="animal handling" />
            : props.itemID === 18 ? 
                <img src={ bureaucracyImage } alt="bureaucracy" />
            : props.itemID === 19 ? 
                <img src={ businessImage } alt="business" />
            : props.itemID === 20 ? 
                <img src={ compositionImage } alt="composition" />
            : props.itemID === 21 ? 
                <img src={ criminologyImage } alt="criminology" />
            : props.itemID === 22 ? 
                <img src={ cryptographyImage } alt="cryptography" />
            : props.itemID === 23 ? 
                <img src={ deductionImage } alt="deduction" />
            : props.itemID === 24 ? 
                <img src={ eductionImage } alt="education" />
            : props.itemID === 25 ? 
                <img src={ gambleImage } alt="gamble" />
            : props.itemID === 26 ? 
                <img src={ languageImage } alt="language" />
            : props.itemID === 27 ? 
                <img src={ librarySearchImage } alt="library search" />
            : props.itemID === 28 ? 
                <img src={ localExpertImage } alt="local expert" />
            : props.itemID === 29 ? 
                <img src={ scienceImage } alt="science" />
            : props.itemID === 30 ? 
                <img src={ tacticsImage } alt="tactics" />
            : props.itemID === 31 ? 
                <img src={ wildernessSurvivalImage } alt="Wilderness Survival" />
            : props.itemID === 32 ? 
                <img src={ brawlingImage } alt="brawling" />
            : props.itemID === 33 ? 
                <img src={ evasionImage } alt="evasion" />
            : props.itemID === 34 ? 
                <img src={ martialArtsImage } alt="martial arts" />
            : props.itemID === 35 ? 
                <img src={ meleeWeaponImage } alt="melee weapon" />
            : props.itemID === 36 ? 
                <img src={ actingImage } alt="acting" />
            : props.itemID === 37 ? 
                <img src={ playInstrumentImage } alt="play instrument" />
            : props.itemID === 38 ? 
                <img src={ archeryImage } alt="archery" />
            : props.itemID === 39 ? 
                <img src={ autofireImage } alt="autofire" />
            : props.itemID === 40 ? 
                <img src={ handgunImage } alt="handgun" />
            : props.itemID === 41 ? 
                <img src={ heavyWeaponsImage } alt="heavy weapons" />
            : props.itemID === 42 ? 
                <img src={ shoulderArmsImage } alt="shoulder arms" />
            : props.itemID === 43 ? 
                <img src={ briberyImage } alt="bribery" />
            : props.itemID === 44 ? 
                <img src={ conversationImage } alt="conversation" />
            : props.itemID === 45 ? 
                <img src={ humanPerceptionImage } alt="human perception" />
            : props.itemID === 46 ? 
                <img src={ interrogationImage } alt="interrogation" />
            : props.itemID === 47 ? 
                <img src={ persuasionImage } alt="persuasion" />
            : props.itemID === 48 ? 
                <img src={ personalGroomingImage } alt="personal grooming" />
            : props.itemID === 49 ? 
                <img src={ streetwiseImage } alt="streetwise" />
            : props.itemID === 50 ? 
                <img src={ tradingImage } alt="trading" />
            : props.itemID === 51 ? 
                <img src={ wardrobeAndStyleImage } alt="wardrobe and style" />
            : props.itemID === 52 ? 
                <img src={ airVehicleTechImage } alt="air vehicle" />
            : props.itemID === 53 ? 
                <img src={ basicTechImage } alt="basic tech" />
            : props.itemID === 54 ? 
                <img src={ cybertechImage } alt="cybertech" />
            : props.itemID === 55 ? 
                <img src={ demolitionsImage } alt="demolitions" />
            : props.itemID === 56 ? 
                <img src={ electronicsSecurityTechImage } alt="electronics security tech" />
            : props.itemID === 57 ? 
                <img src={ firstAidImage } alt="first aid" />
            : props.itemID === 58 ? 
                <img src={ forgeryImage } alt="forgery" />
            : props.itemID === 59 ? 
                <img src={ landVehicleTechImage } alt="land vehicle tech" />
            : props.itemID === 60 ? 
                <img src={ paintDrawSculptImage } alt="paint/draw/sculpt" />
            : props.itemID === 61 ? 
                <img src={ paramedicImage } alt="paramedic" />
            : props.itemID === 62 ? 
                <img src={ photographyFilmImage } alt="photography/film" />
            : props.itemID === 63 ? 
                <img src={ pickLockImage } alt="pick lock" />
            : props.itemID === 64 ? 
                <img src={ pickPocketImage } alt="pick pocket" />
            : props.itemID === 65 ? 
                <img src={ seaVechicleTechImage } alt="sea vehicle" />
            : props.itemID === 66 ? 
                <img src={ weaponstechImage } alt="weapons tech" />
            : 
                <p style={{ color: "white" }}>No Skill Item Found</p>
            } 
        </>
    );
}