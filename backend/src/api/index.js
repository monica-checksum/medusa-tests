import { Router } from "express"
import {unlinkSync,copyFileSync, chmodSync, readFileSync, writeFileSync} from "fs"

export default () => {
  const router = Router()

  router.get("/reset-db", async (req, res) => {
    unlinkSync("medusa-db.sql");
    copyFileSync("_medusa-db.sql", "medusa-db.sql");
    // chmodSync("medusa-db.sql", '0777');
    const thisFile = readFileSync("./src/api/index.js", 'utf8');

    const newFile = (thisFile).replace(/(\/\/timestamp:\d*)(?=[^(\/\/timestamp:\d*)]*$)/, `//timestamp:${Date.now()}`)
    writeFileSync("./src/api/index.js", newFile, 'utf8');

    setTimeout(() => {
      process.exit(0);
    }, 10);

    res.json({});
  })

  return router;
}

//timestamp:1729014913721