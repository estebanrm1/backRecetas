import { Router } from "express";
import { borrarReceta, crearReceta, editarReceta, obtenerReceta, obtenerRecetas } from "../controllers/recetas.controllers";

const router = Router();

router.route('/recetas')
.get(obtenerRecetas)
.post(crearReceta)

router.route('/recetas/:id')
.get(obtenerReceta)
.put(editarReceta)
.delete(borrarReceta)

export default router;