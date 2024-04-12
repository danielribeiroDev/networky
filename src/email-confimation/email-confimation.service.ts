import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class EmailConfimationService {
    constructor(private readonly jwtService: JwtService) {}

    async confirmEmail(token: string) : Promise<any> { 
        const user =  await this.jwtService.verifyAsync(token)
        //Save email confirmation in the database
        return user;
    } 
}
