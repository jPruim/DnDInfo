export enum Stat {
    STR= 0,
    DEX,
    CON,
    INT,
    WIS,
    CHA,
}
export enum Skill {
    ACROBATICS=0,
ANIMALHANDLING,
ARCANA,
ATHLETICS,
DECEPTION,
ENDURANCE,
HISTORY,
INSIGHT,
INTIMIDATION,
INVESTIGATION,
MEDICINE,
NATURE,
PERCEPTION,
PERFORMANCE,
PERSUASION,
RELIGION,
SLEIGHTOFHAND,
STEALTH,
SURVIVAL,
}

const SkillMod= [
    Stat.DEX,//ACROBATICS
    Stat.WIS,//ANIMALHANDLING
    Stat.INT,//ARCANA
    Stat.STR,//ATHLETICS
    Stat.CHA,//DECEPTION
    Stat.CON,//ENDURANCE
    Stat.INT,//HISTORY
    Stat.WIS,//INSIGHT
    Stat.CHA,//INTIMIDATION
    Stat.INT,//INVESTIGATION
    Stat.WIS,//MEDICINE
    Stat.INT,//NATURE
    Stat.WIS,//PERCEPTION
    Stat.CHA,//PERFORMANCE
    Stat.CHA,//PERSUASION
    Stat.INT,//RELIGION
    Stat.DEX,//SLEIGHTOFHAND
    Stat.WIS//Survival
]


