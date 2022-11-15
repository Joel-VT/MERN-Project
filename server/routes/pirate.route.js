const express = require('express');

const PirateController = require("../controllers/pirate.controller");

const router = express.Router();

router.post('/', PirateController.handleCreateNewPirate);
router.get('/', PirateController.handleFindAllPirates);
router.get('/findcaptain', PirateController.handleFindOnePirateByPosition);
router.get('/:id', PirateController.handleFindOnePirate);
router.delete('/:id', PirateController.handleDeletePirate);
router.put('/:id', PirateController.handleUpdatePirate); 

module.exports = {pirateRouter: router};