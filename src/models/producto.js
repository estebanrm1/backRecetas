import { Schema, model } from "mongoose";

const recetaSchema = new Schema({
    nombreReceta: {
        type: String,
        minLength: 2,
        maxLength: 150,
        required: true,
        unique: true
    },
    imagenUrl:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    duracion:{
        type: Number,
        required: true
    },
    ingredientes:{
        type: String,
        required: true
    },
    preparacion:{
        type: String,
        minLength: 20,
        required: true
    }
});

const Receta = model('receta', recetaSchema);

export default Receta;