import React, { useContext, useEffect, useState } from "react";

import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import useFetch from "../../hooks/UseFetch";

import ProductPriceFilter from "../../components/ProductPriceFilter";
import ProductCategoryFilter from "../../components/ProductCategoryFilter";
import ProductSizeFilter from "../../components/ProductSizeFilter";
import ProductColourFilter from "../../components/ProductColourFilter";
import ProductBrandFilter from "../../components/ProductBrandFilter";
import { WishlistContext } from "../../context/WishlistContext";

import { MdFavoriteBorder } from "react-icons/md";
import { LiaBinocularsSolid } from "react-icons/lia";
import { TiArrowShuffle } from "react-icons/ti";
import { MdFavorite } from "react-icons/md";

import { ToastContainer } from "react-toastify";

const Category = () => {
  const { data, loading } = useFetch("http://localhost:3000/products");
  const [filteredData, setFilteredData] = useState([]);
  const [sort, setSort] = useState("Most Popular");
  const [filters, setFilters] = useState({
    category: [],
    size: [],
    colour: [],
    brand: [],
    price: [],
  });

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleFilter = (category, value) => {
    setFilters({ ...filters, [category]: value });
  };

  const [numCols, setNumCols] = useState(3);

  const handleCategoryFilter = (category, value) => {
    setFilters((prevFilters) => {
      if (!prevFilters[category].includes(value)) {
        return {
          ...prevFilters,
          [category]: [...prevFilters[category], value],
        };
      } else {
        return {
          ...prevFilters,
          [category]: prevFilters[category].filter((x) => x !== value),
        };
      }
    });
  };

  function filterData() {
    if (!data) {
      return [];
    }

    const newFilteredData = data.filter((product) => {
      return (
        (filters.price.length === 0 ||
          (product.price >= filters.price[0] &&
            product.price <= filters.price[1])) &&
        (filters.category.length === 0 ||
          filters.category.includes(product.category)) &&
        (filters.size.length === 0 || filters.size.includes(product.size)) &&
        (filters.colour.length === 0 ||
          filters.colour.includes(product.color)) &&
        (filters.brand.length === 0 || filters.brand.includes(product.brand))
      );
    });

    setFilteredData(newFilteredData);
  }

  const resetFilters = () => {
    setFilters({
      category: [],
      size: [],
      colour: [],
      brand: [],
      price: [],
    });
  };

  useEffect(() => {
    filterData();
  }, [filters]);

  function handleProductSort() {
    switch (sort) {
      case "Most Popular":
        setFilteredData(filterData);
        break;

      case "Most Rated":
        if (filteredData.length !== 0) {
          const sortedData = [...filteredData].sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          setFilteredData(sortedData);
        }
        break;

      case "Date":
        if (filteredData.length !== 0) {
          const sortedData = [...filteredData].sort((b, a) =>
            a.name.localeCompare(b.name)
          );
          setFilteredData(sortedData);
        }
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    handleProductSort();
  }, [sort]);

  const { WishlistArr, addToWishlist, alertInWishlist, isProductInWishlist } =
    useContext(WishlistContext);

  return (
    <>
      <section id="category">
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
        <div className="breadcrumb">
          <a href="#">Home</a>
          &gt;
          <a href="#">Shop</a>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 product-filter">
              <div className="filter-clean">
                filter
                <a href="#" onClick={() => resetFilters()}>
                  Clean All
                </a>
              </div>
              <ProductCategoryFilter
                props={{ filters, handleCategoryFilter }}
              />
              <ProductSizeFilter props={{ filters, handleCategoryFilter }} />

              <ProductColourFilter props={{ filters, handleCategoryFilter }} />
              <ProductBrandFilter props={{ filters, handleCategoryFilter }} />

              <ProductPriceFilter props={{ handleFilter, setFilters }} />
            </div>
            <div className="col-lg-9 products">
              <div className="product-sort">
                <div>Showing 9 of 9 Products</div>
                <div>
                  sort by:
                  <select
                    name=""
                    id=""
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="Most Popular">Most Popular</option>
                    <option value="Most Rated">Most Rated</option>
                    <option value="Date">Date</option>
                  </select>
                  <button onClick={() => setNumCols(12)}>
                    <svg width="16" height="10">
                      <rect x="0" y="0" width="4" height="4"></rect>
                      <rect x="6" y="0" width="10" height="4"></rect>
                      <rect x="0" y="6" width="4" height="4"></rect>
                      <rect x="6" y="6" width="10" height="4"></rect>
                    </svg>
                  </button>
                  <button onClick={() => setNumCols(6)}>
                    <svg width="10" height="10">
                      <rect x="0" y="0" width="4" height="4"></rect>
                      <rect x="6" y="0" width="4" height="4"></rect>
                      <rect x="0" y="6" width="4" height="4"></rect>
                      <rect x="6" y="6" width="4" height="4"></rect>
                    </svg>
                  </button>
                  <button onClick={() => setNumCols(4)}>
                    <svg width="16" height="10">
                      <rect x="0" y="0" width="4" height="4"></rect>
                      <rect x="6" y="0" width="4" height="4"></rect>
                      <rect x="12" y="0" width="4" height="4"></rect>
                      <rect x="0" y="6" width="4" height="4"></rect>
                      <rect x="6" y="6" width="4" height="4"></rect>
                      <rect x="12" y="6" width="4" height="4"></rect>
                    </svg>
                  </button>
                  <button onClick={() => setNumCols(3)}>
                    <svg width="22" height="10">
                      <rect x="0" y="0" width="4" height="4"></rect>
                      <rect x="6" y="0" width="4" height="4"></rect>
                      <rect x="12" y="0" width="4" height="4"></rect>
                      <rect x="18" y="0" width="4" height="4"></rect>
                      <rect x="0" y="6" width="4" height="4"></rect>
                      <rect x="6" y="6" width="4" height="4"></rect>
                      <rect x="12" y="6" width="4" height="4"></rect>
                      <rect x="18" y="6" width="4" height="4"></rect>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="row">
                {loading
                  ? "Loading..."
                  : filteredData &&
                    filteredData.map((item) => {
                      return (
                        <div
                          className={`product col-lg-${numCols} col-md-6`}
                          key={item.id}
                        >
                          <div className="product-image">
                            <img src={item.image} alt="" />
                            <div className="product-buttons">
                              <button
                                onClick={() =>
                                  isProductInWishlist(item)
                                    ? alertInWishlist()
                                    : addToWishlist(item)
                                }
                              >
                                {isProductInWishlist(item) ? (
                                  <MdFavorite />
                                ) : (
                                  <MdFavoriteBorder />
                                )}
                              </button>
                              <button>
                                <LiaBinocularsSolid />
                              </button>
                              <button>
                                <TiArrowShuffle />
                              </button>
                            </div>
                          </div>
                          <div className="product-content">
                            <span className="product-category">
                              {item.category}
                            </span>
                            <h6>{item.name}</h6>
                            <span className="product-price">${item.price}</span>
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
