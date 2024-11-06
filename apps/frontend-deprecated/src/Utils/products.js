export const formatProducts = (products) => {
  return products.map((prod) => ({ id: prod.id, ...prod.data() }));
};

export const handleFormatDescription = (description) => {
  let productDescription = description.split(".");
  productDescription.pop();

  return productDescription;
};
