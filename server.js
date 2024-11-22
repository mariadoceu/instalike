import express from "express";
import conectarAoBanco from "./dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

async function getTodosOsPosts() {
    const db = conexao.db("imersao-instabytes")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}

/* const posts = [
    {
        id: 1,
        descricao: "Descricao de foto",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Gato preto brincando com um novelo de lã",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 3,
        descricao: "Gato branco dormindo em uma caixa de papelão",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 4,
        descricao: "Gato malhado caçando um pássaro",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 5,
        descricao: "Gato siamês olhando pela janela",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 6,
        descricao: "Gato persa com pelos longos",
        imagem: "https://placecats.com/millie/300/150",
    }
] */

const app = express();
app.use(express.json())

app.listen(3000,() => {
    console.log("Servidor escutando...");
});

app.get("/posts",async (req, res) => {
    const posts = await getTodosOsPosts()
    res.status(200).json(posts);
});

/* function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
}); */


