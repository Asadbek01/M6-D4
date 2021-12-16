import express from "express";
import {Categories, Products} from "../../utils/db/models/relation.js";
import { Op } from "sequelize";
const categoryRouter = express.Router();

// 1 
categoryRouter.get("/", async (req, res, next) => {
    try {
      const data = await Categories.findAll();
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  // 2
  categoryRouter.post("/", async (req, res, next) => {
      try {
        const categories = await Categories.create(req.body)
        res.status(201).send(categories)
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

// router.route("/bulk").post(async (req, res, next) => {
//   try {
//     const data = await Category.bulkCreate([
//       { name: "SQL" },
//       { name: "React.js" },
//       { name: "Databases" },
//       { name: "Frontend" },
//     ]);

//     res.send(data);
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// });

// router
//   .route("/:id")
//   .get(async (req, res, next) => {
//     try {
//     } catch (e) {
//       console.log(e);
//       next(e);
//     }
//   })
//   .put(async (req, res, next) => {
//     try {
//     } catch (e) {
//       console.log(e);
//       next(e);
//     }
//   })
//   .delete(async (req, res, next) => {
//     try {
//     } catch (e) {
//       console.log(e);
//       next(e);
//     }
//   });

export default categoryRouter;