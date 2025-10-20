export default function ContatoPage() {
    return (
        <main className="max-w-3xl mx-auto py-10">
            <h1 className="text-3xl font-bold mb-4">Entre em Contato</h1>
            <form className="space-y-4">
                <input type="text" placeholder="Seu nome" className="w-full p-2 border rounded" />
                <input type="email" placeholder="Seu e-mail" className="w-full p-2 border rounded" />
                <textarea placeholder="Sua mensagem" className="w-full p-2 border rounded h-40" />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Enviar</button>
            </form>
        </main>
    );
}
