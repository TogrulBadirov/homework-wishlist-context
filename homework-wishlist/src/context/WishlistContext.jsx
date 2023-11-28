import React, { createContext, useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const WishlistContext = createContext()

const WishlistProvider = ({children}) => {
  const [WishlistArr, setwishlistArr] = useState( localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [])

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(WishlistArr))
  }, [WishlistArr])
  



  const isProductInWishlist = (item)=>{
    return WishlistArr.find((wishlistItem) => wishlistItem.id === item.id) !== undefined;
  }

  const addToWishlist = (product)=>{
    setwishlistArr([...WishlistArr,product])
    toast.success('Product added to Wishlist successfully!', {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  
  const alertInWishlist = ()=>{
    toast.warn('Already in Wishlist! Cannot add again!', {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const removeWishlist = (item)=>{
    setwishlistArr(WishlistArr.filter(x=> x.id !== item.id))
    toast.info('Product removed from Wishlist!', {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const data = {
    WishlistArr,
    addToWishlist,
    alertInWishlist,
    removeWishlist,
    isProductInWishlist
  }

  return (
    <WishlistContext.Provider value={data}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider