import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import { Request, Response } from "express";

export const getUserDetails = catchAsyncErrors(async (req: Request, res: Response) => {
    res.send({msg: "success", data: "User Details"});
})

