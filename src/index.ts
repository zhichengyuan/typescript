import { classDescriptor, propDescriptor, printObj } from "./Descriptor";

@classDescriptor("用户")
class User{
    @propDescriptor('用户')
    loginId:string
    @propDescriptor('密码')
    loginPwd:string
}
const u = new User();
u.loginId = 'sss'
u.loginPwd = '123'
printObj(u);

