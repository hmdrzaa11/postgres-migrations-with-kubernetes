import { createConnection } from "typeorm";
import { app } from "./app";

app.listen(3000, async () => {
  try {
    await createConnection();
    console.log("Successfully connected to DB!");
    console.log("Auth listening on 3000!!");
  } catch (err) {
    console.error(err);
  }
});
