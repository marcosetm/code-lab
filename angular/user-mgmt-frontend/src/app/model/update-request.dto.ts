export interface UpdateRequestDto {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    password: string; // format: "yyyy-MM-dd"
    confirmPassword: string;
}
