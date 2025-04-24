import { Suspense } from "react"
import Products from "@/components/Products"
export default function productdetail3() {
  return (
    <Suspense fallback= {<div>로딩중....</div>}>
      <Products />
    </Suspense>
  )
}
