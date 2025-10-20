import Link from 'next/link';
import axios from 'axios';

async function getRecentPosts() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  return res.data.slice(0, 3); // últimos 3 posts
}

export default async function HomePage() {
  const posts = await getRecentPosts();

  return (
    <main className="space-y-16">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">Bem-vindo ao Blog!</h1>
        <p className="text-gray-600 mt-2">Compartilhando ideias, novidades e mais.</p>
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Últimos Posts</h2>
        <ul className="space-y-4">
          {posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-right">
          <Link href="/blog" className="text-blue-600 hover:underline">
            Ver todos os posts →
          </Link>
        </div>
      </section>

      <section className="bg-gray-100 py-10 text-center">
        <h2 className="text-2xl font-semibold mb-2">Quem Somos</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          Somos uma equipe apaixonada por tecnologia, desenvolvimento e boas histórias.
        </p>
        <Link href="/sobre" className="text-blue-600 hover:underline block mt-3">
          Saiba mais →
        </Link>
      </section>

      <section className="text-center py-10">
        <h2 className="text-2xl font-semibold mb-2">Entre em Contato</h2>
        <Link href="/contato" className="text-blue-600 hover:underline">
          Fale conosco →
        </Link>
      </section>
    </main>
  );
}
