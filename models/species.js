const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const speciesSchema = new mongoose.Schema({
    commonName: { type: String, required: true },
    scientificName: { type: String, required: true },
    statusPL: String,
    AERCcategoryPL: String
});

const Species = mongoose.model('Species', speciesSchema);

function validateSpecies(species) {
    const schema = Joi.object({
        commonName: Joi.string()
            .min(3)
            .max(255)
            .required(),
        scientificName: Joi.string()
            .min(3)
            .max(255)
            .required(),
        statusPL: Joi.string()
            .min(1)
            .max(3),
        AERCcategoryPL: Joi.string()
            .length(1)
            .uppercase()
    });

    return schema.validate(species);
}

module.exports.speciesSchema = speciesSchema;
module.exports.Species = Species;
module.exports.validateSpecies = validateSpecies;