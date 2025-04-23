'use client'
import {Product, products } from "@/types/product" ;
import ProductItem from "@/components/ProductItem";
import { useState } from "react"

export default function ProductList() {
  const [clickId , setClickId] = useState<string>('') ;

  const handleClick  = (id : string) => {
    setClickId(id) ;
  }
  return (
    <div className="w-full mt-10 flex flex-col justify-center items-center">
      <ul className="w-1/2">
        {
          products.map((item : Product) =>
                        <li key={item.id} 
                            className="hover:text-amber-700 hover:cursor-pointer"
                            onClick={() => handleClick(`${item.id}`)}>
                          [{item.id}] {item.name}
                        </li>
                        )
        }
      </ul>
      <ProductItem id={clickId} />
    </div>
  )
}
