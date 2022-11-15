const {createPirate, findPirates, findAPirate, deletePirate, updatePirate, findAPirateByPosition} = require("../services/pirate.service")

module.exports.handleFindAllPirates = async (req, res) => {
    console.log("controller: handleFindAllPirates");
    try {
        const allPirates = await findPirates();
        return res.json(allPirates);
    }
    catch(error) {
        return res.status(400).json(error);
    }
};

module.exports.handleFindOnePirate = async (req, res) => {
    console.log("controller: handleFindOnePirate");
    try{
        const onePirate = await findAPirate(req.params.id);
        return res.json(onePirate);
    }
    catch(error) {
        return res.status(400).json(error);
    }
};

module.exports.handleFindOnePirateByPosition = async (req, res) => {
    console.log("controller: handleFindOnePirateByPosition");
    try{
        const onePirate = await findAPirateByPosition();
        return res.json(onePirate);
    }
    catch(error) {
        return res.status(400).json(error);
    }
};

module.exports.handleCreateNewPirate = async (req, res) => {
    console.log("controller: handleCreateNewPirate")
    try {
        const newPirate = await createPirate(req.body);
        return res.json(newPirate);
    }
    catch(error) {
        return res.status(400).json(error)
    }
};

module.exports.handleUpdatePirate = async (req, res) => {
    console.log("controller: handleUpdatePirate");
    try {
        const updatedPirate = await updatePirate(req.params.id, req.body);
        return res.json(updatedPirate);
    }
    catch(error) {
        return res.status(400).json(error)
    }
};

module.exports.handleDeletePirate = async (req, res) => {
    console.log("controller: handleDeletePirate");
    try {
        const deletedPirate = await deletePirate(req.params.id);
        return res.json(deletedPirate);
    }
    catch(error) {
        return res.status(400).json(error)
    }
};