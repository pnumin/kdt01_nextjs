import { Product, products } from "@/types/product" 
import Link from "next/link"

export default function ProductList3() {
  return (
    <div className="w-full mt-10 flex flex-col justify-center items-center">
      <ul className="w-1/2">
        {
          products.map((item : Product) =>
                        <li key={item.id} 
                            className="hover:text-amber-700 hover:cursor-pointer"
                           >
                          <Link href={`/productdetail3?id=${item.id}`}>
                            [{item.id}] {item.name}
                          </Link>
                        </li>
                        )
        }
      </ul>      
    </div>
  )
}
