import { ShoppingBag } from "lucide-react";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center   ">
      <div className="bg-pink-50 p-6 rounded-full mb-4">
        <ShoppingBag size={50} className="text-[#8c0d4f]" />
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Your Cart is Empty
      </h2>
      <p className="text-gray-500 mb-6">
        Looks like you haven’t added anything to your cart yet.
      </p>
      <button
        onClick={() => (window.location.href = "/shop")}
        className="bg-[#8c0d4f] text-white px-6 py-2 rounded-lg hover:bg-[#a3135e] transition-colors"
      >
        Start Shopping
      </button>
    </div>
  );
}
