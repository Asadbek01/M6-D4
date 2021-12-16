import Products from "./products.js";
import Review from "./reviews.js";
import Categories from "./category.js"
import Users from "./user.js"
import productCategory from "./productCategory.js"

Products.hasMany(Review, { onDelete: "CASCADE"  });
Review.belongsTo(Products,  { onDelete: "CASCADE"  });

Users.hasMany(Review, { onDelete: "CASCADE"  });
Review.belongsTo(Users,  { onDelete: "CASCADE"  })

// many-to-many between product  and category
Products.belongsToMany(Categories, {
    through: productCategory,
    onDelete: "CASCADE",  }); 
    Categories.belongsToMany(Products, {
    through: productCategory,
    onDelete: "CASCADE",
  }); 

export {Products, Review, Users, Categories, productCategory }