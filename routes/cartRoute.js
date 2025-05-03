import mongoose from "mongoose";
import authUser from "../middleware/authUser.js";
import { updateCart } from "../controllers/cartController.js";

import express from 'express';

const cartRouter = express.Router();


// const cartRouter = mongoose.Router();

cartRouter.post('/update',authUser,updateCart)


export default cartRouter;