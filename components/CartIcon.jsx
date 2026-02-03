import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href={'/cart'} className="flex items-center gap-2">
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
    </Link>
  );
};

export default CartIcon;