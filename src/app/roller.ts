export class Roller {
    constructor(){

    }
    static rollD(n: number){
        return Math.ceil(Math.random()*n)
    }
    static rollStats(){
        const n = 4;
        let statArray = [];
        let numberArray = [];
        for(let i =0;i <6;i++){
            for(let j=0;j<n; j++){
                numberArray.push(this.rollD(6));
            }
            numberArray.sort((a,b)=>a-b);
            numberArray.shift();
            statArray[i]=numberArray.reduce((acc,val)=>acc+val);
        }
        return statArray;
    }
}
