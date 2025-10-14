import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from 'typeorm';

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ unique: true })
    slug: string;

    @Column({ type: 'text' })
    content: string;

    @Column({ nullable: true })
    coverImage: string;

    @Column()
    author: string;

    @CreateDateColumn()
    createdAt: Date;
}
