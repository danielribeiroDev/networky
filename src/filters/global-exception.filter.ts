import { ArgumentsHost, Catch, ConflictException, ExceptionFilter, HttpException, HttpStatus, Logger, NotFoundException } from '@nestjs/common';
import { Request, Response } from 'express';
import { QueryFailedError, EntityNotFoundError, CannotCreateEntityIdMapError } from 'typeorm';
import { GlobalResponseError } from './global.response.error';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        let message = (exception as any).message.message;
        let code = 'HttpException';

        Logger.error(message, (exception as any).stack, `${request.method} ${request.url}`);

        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        
        switch (exception.constructor) {
            case HttpException:
                status = (exception as HttpException).getStatus();
                break;
            case ConflictException:
                status = (exception as ConflictException).getStatus();
                message = (exception as ConflictException).message;
                break;
            case NotFoundException:
                status = (exception as NotFoundException).getStatus();
                message = (exception as NotFoundException).message;
            case QueryFailedError:  // this is a TypeOrm error
                status = HttpStatus.UNPROCESSABLE_ENTITY
                message = (exception as QueryFailedError).message;
                code = (exception as any).code;
                break;
            case EntityNotFoundError:  // this is another TypeOrm error
                status = HttpStatus.UNPROCESSABLE_ENTITY
                message = (exception as EntityNotFoundError).message;
                code = (exception as any).code;
                break;
            case CannotCreateEntityIdMapError: // and another
                status = HttpStatus.UNPROCESSABLE_ENTITY
                message = (exception as CannotCreateEntityIdMapError).message;
                code = (exception as any).code;
                break;
            default:
                status = HttpStatus.INTERNAL_SERVER_ERROR
        }

        response.status(status).json(GlobalResponseError(status, message, code, request));
    }
}