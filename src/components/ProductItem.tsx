import { Product, products } from "@/types/product" ;
interface ProductItemProps {
  id : string ;
}
export default function ProductItem({id}:ProductItemProps) {
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
    </div>
  )
}
