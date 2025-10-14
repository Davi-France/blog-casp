import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    slug: string;

    @IsString()
    content: string;

    @IsString()
    author: string;
}
