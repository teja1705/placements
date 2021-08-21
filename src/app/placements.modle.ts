export class SignUpRequest {
    public firstName : string
    public lastName : string
    public login : string
    public email : string
    public password: string

}

export class SignInRequest {
    username : string
    password : string
    rememberMe : boolean
}