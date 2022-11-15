const {Pirate} = require("../models/pirate.model");

module.exports.createPirate = async (data) => {
    console.log('service: createPirate');
    const pirate = await Pirate.create(data);
    return pirate;
}

module.exports.findPirates = async () => {
    console.log('service: findPirates');
    const allPirates = await Pirate.find().collation({locale: "en"}).sort({"name": "asc"});
    return allPirates;
}

module.exports.findAPirate = async (id) => {
    console.log('service: findAPirate');
    const pirate = await Pirate.findById(id);
    return pirate;
}

module.exports.findAPirateByPosition = async () => {
    console.log('service: findAPirateByPosition');
    const pirate = await Pirate.find({position: "Captain"});
    return pirate;
}

module.exports.updatePirate = async (id, data) => {
    console.log("service: updatePirate");
    const updatedPirate = await Pirate.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    });
    return updatedPirate;
}

module.exports.deletePirate = async (id) => {
    console.log("service: deletePirate");
    const deletedPirate = await Pirate.findByIdAndDelete(id);
    return deletedPirate;
}