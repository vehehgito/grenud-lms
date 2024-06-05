import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";

export const getUserDetails = catchAsyncErrors(async (req, res) => {
    res.send("User Details");
})

