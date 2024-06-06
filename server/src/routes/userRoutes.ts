import express from 'express';

import { getUserDetails } from '../controllers/userController.js';


const userRouter = express.Router();


// User CRUD

userRouter.get("/me", getUserDetails);


export default userRouter;