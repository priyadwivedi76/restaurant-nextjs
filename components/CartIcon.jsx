import Image from "next/image";
import React from "react";

const CartIcon = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-6 md:h-6">
        <Image
          src="/cart.png"
          alt="cart"
          fill
          sizes="(max-width: 768px) 32px, 24px"
          className="object-contain"
        />
      </div>
      <span>Cart (3)</span>
    </div>
  );
};

export default CartIcon;