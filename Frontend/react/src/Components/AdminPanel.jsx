import { useEffect, useState } from "react";

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: [null, null],
    count: 0,
    category: "Men",
  });

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/products");
      // const data = await res.json();
      // setProducts(Array.isArray(data) ? data : []);
      const data = await res.json();
setProducts(Array.isArray(data.products) ? data.products : []);

    } catch (error) {
      console.error("Error fetching products:sss", error)
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = async () => { 
    if (!newProduct.image[0] && !newProduct.image[1]) {
      alert("Please select at least 1 image!");
      return;
    }

    const formData = new FormData();
    formData.append("productName", newProduct.name);
    formData.append("productPrice", newProduct.price);
    formData.append("description", newProduct.description);
    formData.append("productCategory", newProduct.category);
    formData.append("productCount", newProduct.count);

    newProduct.image.forEach((img) => {
      if (img) formData.append("image", img);
    });

    try {
      const res = await fetch("http://localhost:3000/products/add-product", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setNewProduct({ name: "", price: "", description: "", image: [null, null], count: 0, category: "Men" });
        fetchProducts();
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleUpdate = async (id, updatedProduct) => {
    try {
      const res = await fetch(`http://localhost:3000/products/update-product/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });
      if (res.ok) fetchProducts();
      else alert("Failed to update product");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/products/delete-product/${id}`, {
        method: "DELETE",
      });
      if (res.ok) fetchProducts();
      else alert("Failed to delete product");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleChange = (id, field, value) => {
    setProducts((prev) =>
      prev.map((p) => (p._id === id ? { ...p, [field]: value } : p))
    );
  };

  return (
    // <div style={{ padding: "20px" }}>
    //   <h1>🛒 Admin Panel - Product Management</h1>
    //   <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}
    //   className="border-2">
    //     <thead>
    //       <tr>
    //        <th className="border border-gray-400 px-4 py-2">Image URLs</th>
    //   <th className="border border-gray-400 px-4 py-2">Name</th>
    //   <th className="border border-gray-400 px-4 py-2">Price (₹)</th>
    //   <th className="border border-gray-400 px-4 py-2">Description</th>
    //   <th className="border border-gray-400 px-4 py-2">Count</th>
    //   <th className="border border-gray-400 px-4 py-2">Category</th>
    //   <th className="border border-gray-400 px-4 py-2">Actions</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {products.length > 0 ? (
    //         products.map((p) => (
    //           <tr key={p._id}>
    //             <td>
    //               {Array.isArray(p.productImage) ? (
    //                 p.productImage.map((img, idx) => (
    //                   <div key={idx}>
    //                     <input
    //                       type="text"
    //                       value={img}
    //                       onChange={(e) => {
    //                         const updatedImages = [...p.productImage];
    //                         updatedImages[idx] = e.target.value;
    //                         handleChange(p._id, "productImage", updatedImages);
    //                       }}
    //                     />
    //                   </div>
    //                 ))
    //               ) : (
    //                 <input
    //                   type="text"
    //                   value={p.productImage || ""}
    //                   onChange={(e) => handleChange(p._id, "productImage", e.target.value)}
    //                 />
    //               )}
    //             </td>
    //             <td>
    //               <input type="text" value={p.productName} onChange={(e) => handleChange(p._id, "productName", e.target.value)} />
    //             </td>
    //             <td>
    //               <input type="number" value={p.productPrice} onChange={(e) => handleChange(p._id, "productPrice", e.target.value)} />
    //             </td>
    //             <td>
    //               <input type="text" value={p.description} onChange={(e) => handleChange(p._id, "description", e.target.value)} />
    //             </td>
    //             <td>
    //               <input type="number" value={p.productCount} onChange={(e) => handleChange(p._id, "productCount", e.target.value)} />
    //             </td>
    //             <td>
    //               <select value={p.productCategory} onChange={(e) => handleChange(p._id, "productCategory", e.target.value)}>
    //                 <option value="Men">Men</option>
    //                 <option value="Women">Women</option>
    //                 <option value="Kids">Kids</option>
    //               </select>
    //             </td>
    //             <td>
    //               <button onClick={() => handleUpdate(p._id, p)}>✅ Update</button>
    //               <button onClick={() => handleDelete(p._id)}>🗑️ Delete</button>
    //             </td>
    //           </tr>
    //         ))
    //       ) : 
    //       (
    //         <tr>
    //           <td colSpan={7}>No products found</td>
    //         </tr>
    //       )}
    //       <tr>
    //         <td>
    //           <div>
    //             <label>Image 1: </label>
    //             <input
    //               type="file"
    //               accept="image/*"
    //               onChange={(e) => setNewProduct({ ...newProduct, image: [e.target.files[0], newProduct.image[1]] })} />
    //           </div>
    //           <div>
    //             <label>Image 2: </label>
    //             <input
    //               type="file"
    //               accept="image/*"
    //               onChange={(e) => setNewProduct({ ...newProduct, image: [newProduct.image[0], e.target.files[0]] })}
    //             />
    //           </div>
    //         </td>
    //         <td>
    //           <input type="text" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
    //         </td>
    //         <td>
    //           <input type="number" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
    //         </td>
    //         <td>
    //           <input type="text" placeholder="Description" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
    //         </td>
    //         <td>
    //           <input type="number" placeholder="Count" value={newProduct.count} onChange={(e) => setNewProduct({ ...newProduct, count: e.target.value })} />
    //         </td>
    //         <td>
    //           <select value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}>
    //             <option value="Men">Men</option>
    //             <option value="Women">Women</option>
    //             <option value="Kids">Kids</option>
    //           </select>
    //         </td>
    //         <td>
    //           <button onClick={handleAdd}>➕ Add</button>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>


<div className="p-5">
  <h1 className="text-2xl font-bold mb-4">🛒 Admin Panel - Product Management</h1>

  <table className="w-full border border-gray-400 border-collapse">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-400 px-2 py-1">Image URLs</th>
        <th className="border border-gray-400 px-2 py-1">Name</th>
        <th className="border border-gray-400 px-2 py-1">Price (₹)</th>
        <th className="border border-gray-400 px-2 py-1">Description</th>
        <th className="border border-gray-400 px-2 py-1">Count</th>
        <th className="border border-gray-400 px-2 py-1">Category</th>
        <th className="border border-gray-400 px-2 py-1">Actions</th>
      </tr>
    </thead>

    <tbody>
      {products.length > 0 ? (
        products.map((p) => (
          <tr key={p._id}>
            <td className="border border-gray-400 px-2 py-1">
              {Array.isArray(p.productImage) ? (
                p.productImage.map((img, idx) => (
                  <div key={idx}>
                    <input
                      type="text"
                      value={img}
                      onChange={(e) => {
                        const updatedImages = [...p.productImage];
                        updatedImages[idx] = e.target.value;
                        handleChange(p._id, "productImage", updatedImages);
                      }}
                      className="w-full border border-gray-300 px-1 py-1"
                    />
                  </div>
                ))
              ) : (
                <input
                  type="text"
                  value={p.productImage || ""}
                  onChange={(e) => handleChange(p._id, "productImage", e.target.value)}
                  className="w-full border border-gray-300 px-1 py-1"
                />
              )}
            </td>

            <td className="border border-gray-400 px-2 py-1">
              <input
                type="text"
                value={p.productName}
                onChange={(e) => handleChange(p._id, "productName", e.target.value)}
                className="w-full border border-gray-300 px-1 py-1"
              />
            </td>

            <td className="border border-gray-400 px-2 py-1">
              <input
                type="number"
                value={p.productPrice}
                onChange={(e) => handleChange(p._id, "productPrice", e.target.value)}
                className="w-full border border-gray-300 px-1 py-1"
              />
            </td>

            <td className="border border-gray-400 px-2 py-1">
              <input
                type="text"
                value={p.description}
                onChange={(e) => handleChange(p._id, "description", e.target.value)}
                className="w-full border border-gray-300 px-1 py-1"
              />
            </td>

            <td className="border border-gray-400 px-2 py-1">
              <input
                type="number"
                value={p.productCount}
                onChange={(e) => handleChange(p._id, "productCount", e.target.value)}
                className="w-full border border-gray-300 px-1 py-1"
              />
            </td>

            <td className="border border-gray-400 px-2 py-1">
              <select
                value={p.productCategory}
                onChange={(e) => handleChange(p._id, "productCategory", e.target.value)}
                className="w-full border border-gray-300 px-1 py-1"
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </td>

            <td className="border border-gray-400 px-2 py-1 flex gap-1">
              <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={() => handleUpdate(p._id, p)}>✅ Update</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(p._id)}>🗑️ Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={7} className="border border-gray-400 px-2 py-1 text-center">No products found</td>
        </tr>
      )}

      {/* Add New Product Row */}
      <tr>
        <td className="border border-gray-400 px-2 py-1">
          <div>
            <label>Image 1: </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewProduct({ ...newProduct, image: [e.target.files[0], newProduct.image[1]] })}
              className="border border-gray-300 px-1 py-1 w-full"
            />
          </div>
          <div>
            <label>Image 2: </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewProduct({ ...newProduct, image: [newProduct.image[0], e.target.files[0]] })}
              className="border border-gray-300 px-1 py-1 w-full"
            />
          </div>
        </td>
        <td className="border border-gray-400 px-2 py-1">
          <input
            type="text"
            placeholder="Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="w-full border border-gray-300 px-1 py-1"
          />
        </td>
        <td className="border border-gray-400 px-2 py-1">
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="w-full border border-gray-300 px-1 py-1"
          />
        </td>
        <td className="border border-gray-400 px-2 py-1">
          <input
            type="text"
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            className="w-full border border-gray-300 px-1 py-1"
          />
        </td>
        <td className="border border-gray-400 px-2 py-1">
          <input
            type="number"
            placeholder="Count"
            value={newProduct.count}
            onChange={(e) => setNewProduct({ ...newProduct, count: e.target.value })}
            className="w-full border border-gray-300 px-1 py-1"
          />
        </td>
        <td className="border border-gray-400 px-2 py-1">
          <select
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            className="w-full border border-gray-300 px-1 py-1"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </td>
        <td className="border border-gray-400 px-2 py-1">
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-2  rounded"
          >
            ➕ Add
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

















  );
}

export default AdminPanel;
