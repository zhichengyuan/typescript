class User {
    static users:User[] = [];
    constructor(
        public loginId:string,
        public loginPwd:string,
        public name:string,
        public age:number
    ){
        //需要将新建的用户加入到数组中
        User.users.push(this);
    }

    sayHello() {
        console.log(`大家好，我叫${this.name}今年${this.age}岁了，我的账号是${this.loginId}`);
    }

    static login(loginId:string,loginPwd:string):User | undefined {
        return User.users.find(u => u.loginId === loginId && u.loginPwd === loginPwd)
    }
}

//登录


const u1 = new User('u1','121','困困',12);
const u2 = new User('u2','123','坤坤',12);
const u3 = new User('u3','123','困困3',12);

u1.sayHello();
u2.sayHello();
u3.sayHello();
const result = User.login('u1','121');
console.log(result);

class Board {
    width:number = 500;
    height:number = 700;

    init() {
        console.log('初始化棋盘');
    }

    private constructor() {

    }

    private static _board?:Board;

    static createBoard() :Board {
        if(this._board) {
            return this._board;
        }
        this._board = new Board()

        return this._board;
    }
}

const b = Board.createBoard();
const b1 = Board.createBoard();
console.log(b === b1);