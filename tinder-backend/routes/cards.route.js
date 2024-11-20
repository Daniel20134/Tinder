import { Router } from "express";
const router = Router()
import { getAllCards,createNewCard ,updateCard ,deleteSingleCard ,getSingleCard} from "../controllers/CardsController.js";


router.post("/" ,createNewCard)

router.get("/" , getAllCards)

router.get("/:id", getSingleCard)

router.put("/:id" , updateCard)

router.delete("/:id" , deleteSingleCard)

export default router  