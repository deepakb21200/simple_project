
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Productcontext from "../Context/context";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

export default function ShopCategory() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { values } = useContext(Productcontext);

  const reduxUser = useSelector((state) => state.user);
  const [user, setUser] = useState(reduxUser);//ye hoga profile ke login function me hoga 

  useEffect(() => {
    const checkLogin = async () => {
      console.log("shop category");
      
      try {
        const res = await fetch("http://localhost:3000/user/getProfile", {
          method: "GET",
          credentials: "include",
        });


 
        const data = await res.json();
        if (res.ok && data.user) {
          //this
          setUser({
            id: data.user._id,
            name: data.user.firstName + " " + data.user.lastName,
            userName: data.user.userName,
          }); //ye hoga


            //this
          dispatch({
            type: "set-user",
            payload: {
              id: data.user._id,
              name: data.user.firstName + " " + data.user.lastName,
              userName: data.user.userName,
            },
          }); //ye hoga
        } else setUser(null);
      } catch (err) {
        console.error("Failed to check login:", err);
        setUser(null);
      }
    };
    checkLogin();
  // }, [dispatch]);
    }, []);












  const filteredProducts = values.filter(
    (product) => product.productCategory.toLowerCase() === category.toLowerCase()
  );





  const addToCart = async (product) => {
    if (!user?.id) {
      alert("Please login to add items to the cart!");
      return;
    }

    const shippingCost = product.productPrice >= 1000 ? 0 : 50;

    dispatch({
      type: "product-add",
      payload: {
        item: product,
        price: product.productPrice,
        shipping: shippingCost,
        userId: user.id, //mera question hai ki hum isko kyu bhej rahe hai
      },
    });

    try {
      const res = await fetch("http://localhost:3000/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          userId: user.id,
          productId: product._id,
          price: product.productPrice,
          shipping: shippingCost,
        }),
      });
      if (!res.ok) console.error("Failed to add to cart on backend");
    } catch (err) {
      console.error(err);
    }
  };












  //mycss

  let images = useRef()
    function changeimage(newSrc) {

  if (images.current.src.includes(newSrc)){
    return
  }

  images.current.classList.add("fade-out")
  setTimeout(() => {
    images.current.src = newSrc;
    images.current.classList.remove("fade-out");
  }, 300)
}

  return (
  //   <div style={{ padding: "20px" }}>
  //     <h2>Shop for: {category}</h2>
  //     {filteredProducts.length > 0 ? (
  //       <div
  //         style={{
  //           display: "grid",
  //           gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  //           gap: "20px",
  //         }}
  //       >
  //         {filteredProducts.map((p) => (
  //           <div
  //             key={p._id}
  //             style={{
  //               border: "1px solid #ccc",
  //               padding: "10px",
  //               borderRadius: "8px",
  //             }}
  //           >
  //             <h3>{p.productName}</h3>
  //             <p>Price: ₹{p.productPrice}</p>
  //             <p>{p.description}</p>

  //  {Array.isArray(p.productImage) &&
  //               p.productImage.map((img, idx) => (
  //                 <img
  //                   key={idx}
  //                   src={img}
  //                   alt={p.productName}
  //                   style={{ width: "100%", marginBottom: "5px" }}
  //                 />
  //               ))}
  //             <button
  //               onClick={() => addToCart(p)}
  //               style={{
  //                 marginTop: "10px",
  //                 padding: "8px 12px",
  //                 backgroundColor: "#4CAF50",
  //                 color: "white",
  //                 border: "none",
  //                 borderRadius: "4px",
  //                 cursor: "pointer",
  //               }}
  //             >
  //               Add to Cart
  //             </button>
  //           </div>
  //         ))}
  //       </div>






  //     ) : (
  //       <p>No products found in this category.</p>
  //     )}
  //   </div>





  <div style={{ padding: "20px" }}>
      <h2>Shop for: {category}</h2>
     {filteredProducts.length > 0 ? (
  filteredProducts.map((p) => (
    <div key={p._id} className={`product-card justify-between pt-0 pr-4 pb-4 pl-4 
         mx-[15px] 2xl:mx-[10px] `} style={{boxShadow: '0px 4px 12px rgba(0,0,0,0.5)'}}>
      <img src={p.productImage[0]} alt="" className="fade-image"   ref={images} /> 
      <div>
        <div className="product-title">{p.productName}</div>
 
        <div className="product-price">₹{p.productPrice}
     
        </div>
 

        {p.productImage.length > 0 && (
  <div className="gallery flex gap-2 mt-2">
    {p.productImage.map((img, idx) => (
      <img
        key={idx}
        src={img}
        alt={`${p.productName} ${idx + 1}`}
        className="w-16 h-16 object-cover rounded cursor-pointer hover:ring-2 hover:ring-blue-500"
        onClick={() => changeimage(img)} // click par main image change karega
      />
    ))}
  </div>
)}


        <div>
          <button className="add-btn" onClick={() => addToCart(p)}>
            Add to Cart 
          </button>

    
        </div>
      </div>
    </div>
  ))
) : (
  <p>No products found in this category.</p>
)}

    </div>


















  );
}
