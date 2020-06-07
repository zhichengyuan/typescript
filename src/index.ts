import "reflect-metadata";
import { plainToClass} from 'class-transformer'

class User {
    id:number
    firstName:string
    lastName:string
    age:number

    getName() {
        return this.firstName + " " + this.lastName
    }
    isAdult() {
        return this.age > 36 && this.age<60;
    }
}

var arr = [{
    "id": 1,
    "firstName": "Johny",
    "lastName": "Cage",
    "age": 27
  },
  {
    "id": 2,
    "firstName": "Ismoil",
    "lastName": "Somoni",
    "age": 50
  },
  {
    "id": 3,
    "firstName": "Luke",
    "lastName": "Dacascos",
    "age": 12
  }]
 function plain(users:any):any{
     for(const u of users) {
         const user = plainToClass(User,u);
        //  console.log(user.getName(),user.isAdult())
        
     }
 }

 plain(arr);





// import "reflect-metadata"

// import {IsNotEmpty, validate,MaxLength, MinLength, Min, Max} from 'class-validator'

// class RegUser{
//     @IsNotEmpty({message:'账号不能为空'})
//     @MaxLength(4,{message:'账号不能超过4个字符'})
//     @MinLength(2,{message:"最少不能少于两个字符"})
//     loginId:string
//     loginPwd:string

//     @Min(0,{message:"年龄不能少于0"})
//     @Max(200,{message:"年龄不能大于200岁"})
//     age:number
//     gender:"男" | "女"
// }

// const post = new RegUser();
// post.loginId = '1'
// post.age = -1


// validate(post).then(errors => {
//     console.log(errors);
// });


