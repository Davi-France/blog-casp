'use client';

import { useState } from 'react';
import axios from 'axios';

export default function AdminPage() {
    const [form, setForm] = useState({
        title: '',
        slug: '',
        content: '',
        author: '',
        coverImage: '', // 👈 adicione isso
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        function generateSlug(text: string) {
            return text
                .toLowerCase()
                .trim()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9\-]/g, '');
        }

        const slug = form.slug ? generateSlug(form.slug) : generateSlug(form.title);

        const { data: posts } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
        if (posts.find((p: any) => p.slug === slug)) {
            alert('Esse slug já existe! Use outro.');
            return;
        }

        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/posts`, { ...form, slug });
        alert('Post criado com sucesso!');
        setForm({ title: '', slug: '', content: '', author: '', coverImage: '' });
    };

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/posts/upload`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        setForm({ ...form, coverImage: res.data.filePath });

    };

    return (
        <main className="max-w-xl mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Criar novo post</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Título"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    name="slug"
                    placeholder="Slug (ex: meu-post)"
                    value={form.slug}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    className="w-full p-2 border rounded"
                />
                <textarea
                    name="content"
                    placeholder="Conteúdo"
                    value={form.content}
                    onChange={handleChange}
                    className="w-full p-2 border rounded h-40"
                />
                <input
                    type="text"
                    name="author"
                    placeholder="Autor"
                    value={form.author}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Publicar
                </button>
            </form>
        </main>
    );
}
