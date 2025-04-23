import Link from "next/link"
export default function ProductDetail() {
  return (
    <div className="mt-10">
      ProductDetail

      <div className="hover:bg-amber-50 mt-10">
        <Link href="/productlist2">
          [이전]
        </Link>
      </div>
    </div>
  )
}
