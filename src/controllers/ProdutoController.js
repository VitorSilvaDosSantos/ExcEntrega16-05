const Produto = require('../models/produto');

async function getAll(req, res) {
    try {
        const produtos = await Produto.find();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar produtos", erro: error });
    }
}

async function getById(req, res) {
    try {
        const produto = await Produto.findById(req.params.id);
        if (!produto) return res.status(404).json({ mensagem: "Produto não encontrado" });
        res.json(produto);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar produto", erro: error });
    }
}

async function create(req, res) {
    try {
        const produto = new Produto(req.body);
        const produtoCriado = await produto.save();
        res.status(201).json(produtoCriado);
    } catch (error) {
        res.status(500).json({ mensagem: "Ocorreu um erro ao cadastrar produto", erro: error });
    }
}

async function update(req, res) {
    try {
        const produto = await Produto
        .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!produto) return res
        .status(404).json({ mensagem: "Produto não encontrado" });
        res.json(produto);
    } catch (error) {
        res.status(500)
        .json({ mensagem: "Erro ao atualizar produto", erro: error });
    }
}

async function remove(req, res) {
    try {
        const produto = await Produto.findByIdAndDelete(req.params.id);
        if (!produto) return res.status(404).json({ mensagem: "Produto não encontrado" });
        res.json({ mensagem: "Produto removido com sucesso" });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao remover produto", erro: error });
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
