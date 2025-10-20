import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    uploadFile(file: Express.Multer.File): {
        filePath: string;
    };
    create(createPostDto: CreatePostDto): Promise<import("./entities/post.entity").Post>;
    findAll(): Promise<import("./entities/post.entity").Post[]>;
    findOne(id: string): Promise<import("./entities/post.entity").Post | null>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
