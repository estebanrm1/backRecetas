import Receta from "../models/receta";

export const crearReceta = async (req, res)=>{
    try {
        const recetaNueva = new Receta(req.body);
        await recetaNueva.save();
        res.status(201).json({
            mensaje:'La receta se creo correctamente'
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al crear la receta'
        });
    }
};

export const obtenerRecetas = async (req, res)=>{
    try {
        const recetas = await Receta.find();
        res.status(200).json(recetas);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:'Error al buscar la lista de recetas'
        });
    }
};

export const obtenerReceta = async (req, res)=>{
    try {
        const receta = await Receta.findById(req.params.id);
        res.status(200).json(receta);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:'Error al buscar la lista de recetas'
        });
    }
};

export const borrarReceta = async (req, res)=>{
    try {
        await Receta.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje:'La receta fue eliminada correctamente'
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:'Error, no se pudo eliminar la receta'
        });
    }
};

export const editarReceta = async (req, res)=>{
    try {
        await Receta.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje:'La receta fue editada correctamente'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al editar la receta'
        });
    }
};