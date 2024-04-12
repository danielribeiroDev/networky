import { IsEmail, IsEnum, IsInt, IsString, Length, Min, Max } from 'class-validator';
import { CompanyFocus } from "src/enums/companyFocus.enum";
import { CompanyIndustry } from "src/enums/companyIndustry.enum";
import { EducationalBackground } from "src/enums/educationalBackground.enum";
import { MarketPresence } from "src/enums/marketPresence.enum";
import { ProfessionalExp } from "src/enums/professionalExp.enum";
import { TechnologicalCapabilities } from "src/enums/technologicalCapabilities.enum";

export class CreateUserDto {

    @IsEmail()
    email: string;

    @IsString()
    @Length(8, 20)
    password: string;

    @IsString()
    @Length(1, 50)
    name: string;

    @IsString()
    @Length(1, 50)
    lastName: string;

    @IsInt()
    @Min(18)
    @Max(100)
    age: number;

    @IsEnum(EducationalBackground)
    educationalBackground: EducationalBackground;

    @IsEnum(ProfessionalExp)
    professionalExp: ProfessionalExp;
    
    @IsString()
    @Length(1, 100)
    companyName: string;

    @IsEnum(CompanyFocus)
    companyFocus: CompanyFocus;

    @IsEnum(CompanyIndustry)
    companyIndustry: CompanyIndustry;

    @IsEnum(MarketPresence)
    marketPresence: MarketPresence;

    @IsEnum(TechnologicalCapabilities)
    technologicalCapabilities: TechnologicalCapabilities;
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
