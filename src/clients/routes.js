const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getClients);
router.get('/:id', controller.getClientById);
router.post('/', controller.addClient);
router.delete('/:id', controller.removeClient);
router.put('/:id', controller.updateClient);

module.exports = router;
