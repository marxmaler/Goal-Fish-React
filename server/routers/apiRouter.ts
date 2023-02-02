import express from "express"
import { hey } from "../controllers/goalController";

const apiRouter = express.Router();
apiRouter.route("/welcome").get(hey);

export default apiRouter;