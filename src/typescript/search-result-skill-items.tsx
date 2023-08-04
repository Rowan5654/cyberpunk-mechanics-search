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

export default function GetSearchResultSkillItem(item: string) {
    if (item === "Concentration") {
        return (
            <img src={ concentrationImage } alt="concentration" />
        )
    }
    if (item === "Conceal/Reveal Object") {
        return (
            <img src={ concealRevealObjectImage } alt="conceal/reveal object" />
        )
    }
    if (item === "Lip Reading") {
        return (
            <img src={ lipReadingImage } alt="lip reading" />
        )
    }
    if (item === "Perception") {
        return (
            <img src={ perceptionImage } alt="perception" />
        )
    }
    if (item === "Tracking") {
        return (
            <img src={ trackingImage } alt="tracking" />
        )
    }
    if (item === "Athletics") {
        return (
            <img src={ athleticsImage } alt="athletics" />
        )
    }
    if (item === "Contortionist") {
        return (
            <img src={ contortionistImage } alt="contortionist" />
        )
    }
    if (item === "Dance") {
        return (
            <img src={ danceImage } alt="dance" />
        )
    }
    if (item === "Endurance") {
        return (
            <img src={ enduranceImage } alt="endurance" />
        )
    }
    if (item === "Resist Torture/Drugs") {
        return (
            <img src={ resistTortureDrugsImage } alt="resist torture/drugs" />
        )
    }
    if (item === "Stealth") {
        return (
            <img src={ stealthImage } alt="stealth" />
        )
    }
    if (item === "Drive Land Vehicle") {
        return (
            <img src={ driveLandVehiclesImage } alt="drive land vehicle" />
        )
    }
    if (item === "Pilot Air Vehicle (x2)") {
        return (
            <img src={ pilotAirVehicleImage } alt="pilot air vehicle" />
        )
    }
    if (item === "Pilot Sea Vehicle") {
        return (
            <img src={ pilotSeaVehicleImage } alt="pilot sea vehicle" />
        )
    }
    if (item === "Riding") {
        return (
            <img src={ ridingImage } alt="riding" />
        )
    }
    if (item === "Accounting") {
        return (
            <img src={ accountingImage } alt="accounting" />
        )
    }
    if (item === "Animal Handling") {
        return (
            <img src={ animalHandlingImage } alt="animal handling" />
        )
    }
    if (item === "Bureaucracy") {
        return (
            <img src={ bureaucracyImage } alt="bureaucracy" />
        )
    }
    if (item === "Business") {
        return (
            <img src={ businessImage } alt="business" />
        )
    }
    if (item === "Composition") {
        return (
            <img src={ compositionImage } alt="composition" />
        )
    }
    if (item === "Criminology") {
        return (
            <img src={ criminologyImage } alt="criminology" />
        )
    }
    if (item === "Cryptography") {
        return (
            <img src={ cryptographyImage } alt="cryptography" />
        )
    }
    if (item === "Deduction") {
        return (
            <img src={ deductionImage } alt="deduction" />
        )
    }
    if (item === "Education") {
        return (
            <img src={ eductionImage } alt="education" />
        )
    }
    if (item === "Gamble") {
        return (
            <img src={ gambleImage } alt="gamble" />
        )
    }
    if (item === "Language") {
        return (
            <img src={ languageImage } alt="language" />
        )
    }
    if (item === "Library Search") {
        return (
            <img src={ librarySearchImage } alt="library search" />
        )
    }
    if (item === "Local Expert") {
        return (
            <img src={ localExpertImage } alt="local expert" />
        )
    }
    if (item === "Science") {
        return (
            <img src={ scienceImage } alt="science" />
        )
    }
    if (item === "Tactics") {
        return (
            <img src={ tacticsImage } alt="tactics" />
        )
    }
    if (item === "Wilderness Survival") {
        return (
            <img src={ wildernessSurvivalImage } alt="wilderness survival" />
        )
    }
    if (item === "Brawling") {
        return (
            <img src={ brawlingImage } alt="brawling" />
        )
    }
    if (item === "Evasion") {
        return (
            <img src={ evasionImage } alt="evasion" />
        )
    }
    if (item === "Martial Arts (x2)") {
        return (
            <img src={ martialArtsImage } alt="martial arts" />
        )
    }
    if (item === "Melee Weapon") {
        return (
            <img src={ meleeWeaponImage } alt="melee weapon" />
        )
    }
    if (item === "Acting") {
        return (
            <img src={ actingImage } alt="acting" />
        )
    }
    if (item === "Play Instrument") {
        return (
            <img src={ playInstrumentImage } alt="play instrument" />
        )
    }
    if (item === "Archery") {
        return (
            <img src={ archeryImage } alt="archery" />
        )
    }
    if (item === "Autofire (x2)") {
        return (
            <img src={ autofireImage } alt="autofire" />
        )
    }
    if (item === "Handgun") {
        return (
            <img src={ handgunImage } alt="handgun" />
        )
    }
    if (item === "Heavy Weapons (x2)") {
        return (
            <img src={ heavyWeaponsImage } alt="heavy weapons" />
        )
    }
    if (item === "Shoulder Arms") {
        return (
            <img src={ shoulderArmsImage } alt="shoulder arms" />
        )
    }
    if (item === "Bribery") {
        return (
            <img src={ briberyImage } alt="bribery" />
        )
    }
    if (item === "Conversation") {
        return (
            <img src={ conversationImage } alt="conversation" />
        )
    }
    if (item === "Human Perception") {
        return (
            <img src={ humanPerceptionImage } alt="human perception" />
        )
    }
    if (item === "Interrogation") {
        return (
            <img src={ interrogationImage } alt="interrogation" />
        )
    }
    if (item === "Persuasion") {
        return (
            <img src={ persuasionImage } alt="persuasion" />
        )
    }
    if (item === "Personal Grooming") {
        return (
            <img src={ personalGroomingImage } alt="personal grooming" />
        )
    }
    if (item === "Streetwise") {
        return (
            <img src={ streetwiseImage } alt="streetwise" />
        )
    }
    if (item === "Trading") {
        return (
            <img src={ tradingImage } alt="trading" />
        )
    }
    if (item === "Wardrobe and Style") {
        return (
            <img src={ wardrobeAndStyleImage } alt="wardrobe and style" />
        )
    }
    if (item === "Air Vehicle Tech") {
        return (
            <img src={ airVehicleTechImage } alt="air vehicle" />
        )
    }
    if (item === "Basic Tech") {
        return (
            <img src={ basicTechImage } alt="basic tech" />
        )
    }
    if (item === "Cybertech") {
        return (
            <img src={ cybertechImage } alt="cybertech" />
        )
    }
    if (item === "Demolitions (x2)") {
        return (
            <img src={ demolitionsImage } alt="demolitions" />
        )
    }
    if (item === "Electronics/Security Tech (x2)") {
        return (
            <img src={ electronicsSecurityTechImage } alt="electronics security tech" />
        )
    }
    if (item === "First Aid") {
        return (
            <img src={ firstAidImage } alt="first aid" />
        )
    }
    if (item === "Forgery") {
        return (
            <img src={ forgeryImage } alt="forgery" />
        )
    }
    if (item === "Land Vehicle Tech") {
        return (
            <img src={ landVehicleTechImage } alt="land vehicle tech" />
        )
    }
    if (item === "Paint/Draw/Sculpt") {
        return (
            <img src={ paintDrawSculptImage } alt="paint/draw/sculpt" />
        )
    }
    if (item === "Paramedic (x2)") {
        return (
            <img src={ paramedicImage } alt="paramedic" />
        )
    }
    if (item === "Photography/Film") {
        return (
            <img src={ photographyFilmImage } alt="photography/film" />
        )
    }
    if (item === "Pick Lock") {
        return (
            <img src={ pickLockImage } alt="pick lock" />
        )
    }
    if (item === "Pick Pocket") {
        return (
            <img src={ pickPocketImage } alt="pick pocket" />
        )
    }
    if (item === "Sea Vehicle Tech") {
        return (
            <img src={ seaVechicleTechImage } alt="sea vehicle" />
        )
    }
    if (item === "Weaponstech") {
        return (
            <img src={ weaponstechImage } alt="weapons tech" />
        )
    }
}