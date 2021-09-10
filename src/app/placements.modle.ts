export class SignUpRequest {
    public firstName : string
    public lastName : string
    // public userName : string
    public email : string
    public password: string
}

export class SignInRequest {
    id : any
    email : string
    password : string
}

export class ErrorMessage{
    status : any
    error_message : String =''
    errors : any
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

export class Student{
    studentId : number
    firstName : string
    lastName : string
    fatherName : string
    fatherOccupation : string 
    motherName : string
    motherOccupation : string
    dateofBirth : string
    gender : string
    collegeEmail : string
    personalEmail : string
    mobileNumber : number
    password : string
    cGPA : number
    villageOrCity : string
    state : string
    country : string
    nationality : string
    pinCode : number
    tenthMarks : number
    twelthMarks : number
    stream : string
    branch : string
    vITEE_Rank : number
    institution : string
}
