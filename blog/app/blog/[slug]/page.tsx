import axios from 'axios';

async function getPost(slug: string) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const post = res.data.find((p: any) => p.slug === slug);
  return post;
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) return <div className="text-center py-20">Post não encontrado</div>;

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">Por {post.author}</p>
      {post.coverImage && (
        <img
          src={`${process.env.NEXT_PUBLIC_API_URL}${post.coverImage}`}
          alt={post.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
      )}
      <article className="prose">{post.content}</article>

    </main>
  );
}
