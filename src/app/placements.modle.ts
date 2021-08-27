export class SignUpRequest {
    public firstName : string
    public lastName : string
    public login : string
    public email : string
    public password: string
    public langKey : string = 'en'
}

export class SignInRequest {
    username : string
    password : string
    rememberMe : boolean
}

export class PlacementsData {
    id: number
    companyName : string
    startDate : string
    endDate : string
    companyDetails : string
    placementType : PlacementType
    salaryPackage : string
    stage : Stage
}

export enum PlacementType{
    INTERNSHIP,
    FULLTIME
}

export enum Stage{
    NOTSTARTED,
    STARTED,
    ONGOING,
    COMPLETED,
    SELECTED,
    REJECTEDBYME,
    NOOFFERRECEIVED,
    NOTSELECTED,
}
