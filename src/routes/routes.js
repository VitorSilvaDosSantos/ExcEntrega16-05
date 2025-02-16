const express = require('express');
const router = express.Router();

const ProdutoController = require('../controllers/ProdutoController');

router.get('/', (req, res) => {
    res.json("OK");
});

// Rotas de Produtos
router.get('/produtos', ProdutoController.getAll);
router.get('/produtos/:id', ProdutoController.getById);
router.post('/produtos', ProdutoController.create);
router.put('/produtos/:id', ProdutoController.update);
router.delete('/produtos/:id', ProdutoController.remove);

module.exports = router;
