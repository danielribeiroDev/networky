import { IsEmail, IsEnum, IsNotEmpty, IsNumberString, IsString, MinLength, isInt, isNumber } from 'class-validator';
import { CompanyFocus } from 'src/enums/companyFocus.enum';
import { CompanyIndustry } from 'src/enums/companyIndustry.enum';
import { EducationalBackground } from 'src/enums/educationalBackground.enum';
import { MarketPresence } from 'src/enums/marketPresence.enum';
import { ProfessionalExp } from 'src/enums/professionalExp.enum';
import { TechnologicalCapabilities } from 'src/enums/technologicalCapabilities.enum';

export class SignUpDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsEmail()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumberString()
    age: number

    @IsString()
    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    @IsEnum(CompanyFocus)
    companyFocus: CompanyFocus

    @IsNotEmpty()
    @IsNumberString()
    companyID?: number

    @IsNotEmpty()
    @IsString()
    companyIndustry?: CompanyIndustry

    @IsNotEmpty()
    @IsString()
    cellphone: string

    @IsNotEmpty()
    @IsEnum(ProfessionalExp)
    professionalExp: ProfessionalExp

    @IsNotEmpty()
    @IsEnum(EducationalBackground)
    educationalBackground: EducationalBackground

    @IsNotEmpty()
    @IsEnum(MarketPresence)
    marketPresence: MarketPresence

    @IsNotEmpty()
    @IsEnum(TechnologicalCapabilities)
    technologyCapabilities: TechnologicalCapabilities

    @IsNotEmpty()
    @IsString()
    coordinates: string

}

/*
Basic Information:

Name: [Excluded]
Title/Position: [Excluded]
Company Name: [Excluded]
Contact Information (Email, Phone Number, Address): [Excluded]
Company Background:

Industry: [Checklist: Technology, Finance, Healthcare, Retail]
Size (number of employees, annual revenue): [Checklist: Small, Medium, Large]
Market Presence (local, national, international): [Checklist: Local, National, International]
Mission and Values: [Excluded]
Key Products/Services: [Excluded]
CEO's Background:

Professional Experience: [Checklist: Entry-level, Mid-level, Senior, Executive]
Educational Background: [Checklist: High School, Bachelor's Degree, Master's Degree, Doctorate]
Achievements/Awards: [Checklist: None, Some, Significant, Numerous]
Publications or Speaking Engagements: [Checklist: None, Occasional, Frequent, Prolific]
Current Projects/Initiatives:

Ongoing Projects: [Checklist: None, Few, Several, Many]
Recent Accomplishments: [Checklist: None, Minor, Significant, Major]
Future Plans: [Checklist: Uncertain, Minimal, Moderate, Ambitious]
Financial Information:

Financial Performance (revenue, profit margin, growth rate): [Excluded]
Funding Rounds (if applicable): [Excluded]
Financial Health: [Excluded]
Market Positioning:

Competitive Landscape: [Checklist: Low, Moderate, High, Dominant]
Unique Selling Proposition: [Checklist: Weak, Moderate, Strong, Distinctive]
Target Market: [Checklist: Narrow, Defined, Broad, Diverse]
Technology and Innovation:

Technological Capabilities: [Checklist: Basic, Intermediate, Advanced, Cutting-edge]
Innovative Solutions or Products: [Checklist: None, Few, Some, Many]
Intellectual Property (patents, trademarks, copyrights): [Checklist: None, Few, Some, Extensive]
Partnerships and Collaborations:

Existing Partnerships: [Checklist: None, Few, Several, Many]
Potential Areas for Collaboration: [Checklist: Limited, Moderate, Extensive, Diverse]
Strategic Goals and Objectives:

Short-term and Long-term Goals: [Checklist: Vague, Defined, Ambitious, Achievable]
Strategic Priorities: [Checklist: Few, Defined, Balanced, Comprehensive]
Challenges and Opportunities:

Market Challenges: [Checklist: Minor, Moderate, Significant, Severe]
Industry Trends: [Checklist: Ignoring, Aware, Adapting, Leading]
Potential Opportunities for Growth: [Checklist: Limited, Moderate, Substantial, Vast]
Meeting Objectives:

Clearly defined goals for the meeting: [Excluded]
Desired outcomes or next steps: [Excluded]
Logistics:

Meeting Date and Time: [Excluded]
Meeting Location (virtual or physical): [Excluded]
Duration of the Meeting: [Excluded]
*/