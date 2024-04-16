import { IsEmail, IsEnum, IsInt, IsString, Length, Min, Max, IsNotEmpty, IsNumber, MinLength, IsUUID } from 'class-validator';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { EducationalBackground } from "src/enums/educationalBackground.enum";
import { ProfessionalExp } from "src/enums/professionalExp.enum";

export class CreateUserDto {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsUUID()
    companyId : string

    // @IsString()
    // @IsNotEmpty()
    // lastName: string;

    // @IsNotEmpty()
    // @IsNumber()
    // age: number

    // @IsString()
    // @IsNotEmpty()
    // title: string

    // @IsNotEmpty()
    // @IsString()
    // cellphone: string

    // @IsNotEmpty()
    // @IsEnum(ProfessionalExp)
    // professionalExp: ProfessionalExp

    // @IsNotEmpty()
    // @IsEnum(EducationalBackground)
    // educationalBackground: EducationalBackground
    
    // @IsNotEmpty()
    // @IsString()
    // coordinates: string

    // company: CompanyEntity
}

/*
const validCreateUserDto: CreateUserDto = {
    email: 'test@example.com',
    password: 'password123',
    name: 'John',
    lastName: 'Doe',
    age: 25,
    educationalBackground: 'HighSchool',
    professionalExp: 'Beginner',
    companyName: 'Test Company',
    companyFocus: 'Product',
    companyIndustry: 'Technology',
    marketPresence: 'Local',
    technologicalCapabilities: 'Advanced'
};
*/
