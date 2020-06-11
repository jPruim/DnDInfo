// Class to hold Character info
export class Character {
    name: string;
    level: number;
    background = '';
    ali = '';
    statArray = [10,10,10,10,10,10];
    modArray = [0,0,0,0,0,0]
  key: number;



    constructor(name){
        this.name = name;
        this.level = 1;
        this.ali = 'N'
    }
    
}
