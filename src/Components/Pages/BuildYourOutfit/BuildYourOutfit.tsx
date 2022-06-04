import React, { useState } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import { ProductModel } from '../../Context/CartContext'; 
import { motion } from 'framer-motion';
import OutfitProducts from './OutfitProducts/OutfitProducts';
import './BuildYourOutfit.scss';

const BuildYourOutfit = () => {
  const [ shirt, setShirt ] = useState("https://freres.ar/wp-content/uploads/2021/07/10-1-scaled.jpg")
  const [ pants, setPants ] = useState("https://freres.ar/wp-content/uploads/2021/09/Pantalones-4-scaled.jpg")
  const [ shoes, setShoes ] = useState("https://freres.ar/wp-content/uploads/2021/12/productos-noviembre-3-scaled.jpeg")
  const [ loader, setLoader ] = useState<boolean>(false)
  const [ category, setCategory ] = useState<string>("")
  const [ products, setProducts ] = useState<ProductModel[]>([])
  const [ showItems, setShowItems ] = useState<boolean>(false)

  const handleShowItems = (categorySelected:string) => {
    setLoader(true)
    setCategory(categorySelected)
    handleGetItems(categorySelected)
    if(!showItems){
      setShowItems(!showItems)
    } else {
      setLoader(true)
      setProducts([])
    }
  }

  const handleGetItems = async (categorySelected:string) => {
    const dataBase = getFirestore();
    let queryCollection = query(collection(dataBase, 'products'), where('category', '==', categorySelected))
  
    await getDocs(queryCollection)
      .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}) as ProductModel)))
      .catch(err => console.log(err))
      .finally(() => {
        setShowItems(true)
        setLoader(false)
    })
  }

  const handleSetItem = (product: ProductModel) => {
    if(category === "remeras" || category === "camperasybuzos") {
      setShoes(product.images[0])
    } else if(category === "calzado") {
      setShirt(product.images[0])
    } else if(category === "pantalones") {
      setPants(product.images[0])
    }
  }

  return (
    <motion.div
      initial={{  x:-100, opacity: 0  }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ ease: "linear", duration: 0.25 }}
      className="build_your_outfit">
      <div className='products'>
        <div className='products_div'>
          <button className={`products_div_button ${category === "camperasybuzos" && 'selected'}`} onClick={() => handleShowItems("camperasybuzos")}>Camperas y Buzos</button>
          <button className={`products_div_button ${category === "remeras" && 'selected'}`} onClick={() => handleShowItems("remeras")}>Remeras</button>
          <button className={`products_div_button ${category === "pantalones" && 'selected'}`} onClick={() => handleShowItems("pantalones")}>Pantalones y Shorts</button>
          <button className={`products_div_button ${category === "calzado" && 'selected'}`} onClick={() => handleShowItems("calzado")}>Calzado</button>
        </div>
        <OutfitProducts showItems={showItems} products={products} loader={loader} handleSetItem={handleSetItem} />
      </div>
      <div className='outfit'>
        <img className='outfit_img' src={shoes} alt="Remera/Capera" />
        <img className='outfit_img pants' src={pants} alt="Pantalón" />
        <img className='outfit_img' src={shirt} alt="Calzado" />
      </div>
    </motion.div>
  );
}

export default BuildYourOutfit;