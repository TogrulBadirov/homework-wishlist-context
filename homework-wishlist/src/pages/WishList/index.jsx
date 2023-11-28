import React, { useContext } from "react";
import "./index.scss";
import { WishlistContext } from "../../context/WishlistContext";

import { LiaCartPlusSolid } from "react-icons/lia";

import { ToastContainer } from "react-toastify";

const WishList = () => {
  const { WishlistArr, removeWishlist } = useContext(WishlistContext);
  return (
    <section id="wishlist">
      <ToastContainer
        position="top-center"
        autoClose={800}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock Status</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {WishlistArr &&
            WishlistArr.map((product) => {
              return (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt="" />

                    {product.name}
                  </td>
                  <td>${product.price}</td>
                  <td>In stock</td>
                  <td>
                    <button>
                      <LiaCartPlusSolid />
                      Add to Card
                    </button>
                  </td>
                  <td>
                    <button onClick={() => removeWishlist(product)}>X</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default WishList;
