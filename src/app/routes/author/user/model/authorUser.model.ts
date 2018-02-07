/**
 * @author Mr.zhou
 */
export class AuthorUserModel {
    userId: number;
    userName: string;
    passWord: string;
    salt: string;
    realName: string;
    avatar: string;
    phone: string;
    email: string;
    sex: number;
    locked: number;
    createTime: number;
}
