import { Product, products } from "../../../types/product"
import Link from "next/link";

export default async function ProductDetailPage({
  params
} : {
  params : Promise<{id:string}>
}) {

  const { id } = await params ;
  const item : Product | undefined = products.find((item : Product) => item.id === id) ;

  if (!item) {
    return <div>해당 아이템이 없습니다.</div>
  }

  return (
    <div className="mt-10 bg-amber-100 w-1/2 p-10">
      <ol>
        <li>{item.id}</li>
        <li>{item.name}</li>
        <li>{item.category}</li>
        <li>{item.price}</li>
        <li>{item.description}</li>
      </ol>

      <div className="hover:bg-amber-50 mt-10 text-amber-800">
        <Link href='/productlist2'>[이전]</Link>
      </div>
    </div>
  )
}
