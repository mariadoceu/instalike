import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export default async function getTodosOsPosts() {
    const db = conexao.db("imersao-instabytes")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}
