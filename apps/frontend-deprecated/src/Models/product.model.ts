export type ProductModel = {
  category: string,
  description: string,
  format_of_size_chart: string,
  id: string,
  images: string[],
  name: string,
  price: number,
  quantity: number,
  stock: number,
  top_seller: boolean,
  is_an_essential_outfit?: boolean,
  essential_outfit?: string,
  essential_outfit_image?: string,
  size: string,
  key?: string,
  index?: number,
};