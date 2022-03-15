import { Request, Response, Router } from "express";

import { User } from "../entities/user.entity";

let router = Router();

router.post("/api/users/signup", async (req: Request, res: Response) => {
  let user = new User();
  user.email = "asdf@asdf.com";
  user.password = "asdf";
  await user.save();
  res.send({ msg: "all good", user });
});

export { router as signupRouter };
