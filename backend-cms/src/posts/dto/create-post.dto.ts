import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    slug: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsNotEmpty()
    author: string;

    @IsString()
    @IsOptional()
    coverImage?: string;
}
