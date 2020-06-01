abstract class Chess {
    x:number = 0
    y:number = 0

    abstract readonly name: string;

    move(targetX:number,targetY:number) : boolean {
        console.log('1.边界判断');
        console.log('2.目标位置判断');
        //3.判断规则
        if(this.rule(targetX,targetY)) {
            this.x = targetX;
            this.y = targetY;
            console.log(`${this.name}移动成功`)
            return true;
        }
        return false;
        
    }

    protected abstract rule(targetX:number,targetY:number):boolean;

    
}

class Horse extends Chess {
    protected rule(targetX: number, targetY: number): boolean {
        return true;
    }
   
    readonly name: string ="马"
}

class Pao extends Chess {
    protected rule(targetX: number, targetY: number): boolean {
        return true;
    }
   
    readonly name:string;
    constructor () {
        super();
        this.name = "炮"
    }

}

class Solder extends Chess {
    protected rule(targetX: number, targetY: number): boolean {
        return true;
    }
    
    get name () {
        return '兵'
    }
}

const h = new Horse();
const P = new Pao();
const s = new Solder();
h.move(2,4);
P.move(3,5);
s.move(5,7);
// const c = new Chess();