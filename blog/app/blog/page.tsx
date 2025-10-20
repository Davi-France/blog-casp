import axios from 'axios';
import Link from 'next/link';

async function getPosts() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    return res.data;
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <main className="max-w-4xl mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>
            <ul className="space-y-6">
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline text-xl font-semibold">
                            {post.title}
                        </Link>
                        <p className="text-gray-600">{post.author}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
