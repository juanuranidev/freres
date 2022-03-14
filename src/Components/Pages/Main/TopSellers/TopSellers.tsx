import React, { useEffect, useState } from 'react';
import {query, collection, getDocs, getFirestore} from 'firebase/firestore';
import Loader from '../../../Loader/Loader';
import ProductList from '../../../ProductList/ProductList';
import './TopSellers.scss';

const TopSellers = () => {
  const [data, setData] = useState<any>([])
  const [loader, setLoader] = useState<boolean>(true)

  useEffect(() => {
    const dataBase = getFirestore()
    const queryCollection = query(collection(dataBase, 'products'))
    getDocs(queryCollection)
        .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
  },[])

  console.log(data)

  return (
    <section className='topSellers'>
        <h2 className='topSellers_h2'>TOP SELLERS</h2>
        <div className='topSellers_div'>
          {loader===true
          ? <Loader/>
          : <ProductList products={data}/>}
        </div>
    </section>
  );
}

export default TopSellers;