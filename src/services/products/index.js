import { Router } from "express";
import {Products, Review, Categories, Users, productCategory} from "../../utils/db/models/relation.js";
import Sequelize from "sequelize"

const productRouter = Router();
//1 
productRouter.post("/", async (req, res, next) => {
  try {
   const product = await Products.create(req.body)
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//2.
productRouter.get("/", async (req, res, next) => {
  try {
    const product = await Products.findAll({
  include: Review
    //   include: [
    //     {
    //       model: Categories,
    //       through: { attributes: [] }, 
        
    //       where: {
    //         ...(req.query.Categories && {
              
    //           name: {
    //             [Op.in]: req.Categories.name.split(","),
    //           },
    //         }),
    //       },
    //     },
    //     { model: Review, include: Users }, 
    //     Users,
    //   ],
    //   where: {
    //     ...(req.query.search && {
    //       //filters to serach by title OR content OR name (in included User)
    //       [Op.or]: [
    //         {
    //           title: { [Op.iLike]: `%${req.query.search}%` },
    //         },
    //         {
    //           content: { [Op.iLike]: `%${req.query.search}%` },
    //         },

    //         //Option 1
    //         {
    //           "$user.name$": {
    //             //syntax to filters on included table because name of the User doesn't exist on Article table
    //             [Op.iLike]: "%" + req.query.search + "%",
    //           },
    //         },
    //       ],
    //     }),

    //   },
    });



    res.send(product);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
 
// //3 
productRouter.get("/:id", async (req, res, next) => {
  try {
    const product = await Products.findByPk(req.params.id);
if (product) {
  res.send(product)
  } else {
        res.status(404).send("Not found");
      }
    } catch (e) {
      console.log(e);
      next(e);
    }
});

// //4.
 
productRouter.put("/:id", async (req, res, next) => {
  try {
     const updateUser = await Products.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });

      res.send(updateUser[1][0]);
    } catch (e) {
      console.log(e);
      next(e);
    }
  });
 
//5.

productRouter.delete("/:id", async (req, res, next) => {
  try {
   const result = await Products.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (result > 0) {
        res.send("ok");
      } else {
        res.status(404).send("not found");
      }
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

export default productRouter;