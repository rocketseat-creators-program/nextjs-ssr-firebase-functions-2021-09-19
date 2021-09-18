
export default function handler(req, res) {
    res.status(200).json({ title: 'Titulo do blog', content: 'Conteudo do blog' });
}