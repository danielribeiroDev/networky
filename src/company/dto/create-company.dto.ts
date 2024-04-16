import { IsEnum, IsNotEmpty, IsNumberString, IsString, IsUUID } from "class-validator"
import { CompanyFocus } from "src/enums/companyFocus.enum"
import { CompanyIndustry } from "src/enums/companyIndustry.enum"
import { MarketPresence } from "src/enums/marketPresence.enum"
import { TechnologicalCapabilities } from "src/enums/technologicalCapabilities.enum"

export class CreateCompanyDto {
    @IsNotEmpty()
    @IsEnum(CompanyFocus)
    focus: CompanyFocus

    @IsNotEmpty()
    @IsString()
    industry: CompanyIndustry

    @IsNotEmpty()
    @IsEnum(MarketPresence)
    marketPresence: MarketPresence

    @IsNotEmpty()
    @IsEnum(TechnologicalCapabilities)
    technologicalCapabilities: TechnologicalCapabilities

    @IsString()
    @IsNotEmpty()
    name: string
}