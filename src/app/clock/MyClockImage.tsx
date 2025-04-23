import Image from "next/image" 
export default function MyClockImage() {
  return (
    <div className="flex justify-center items-center mt-10">
      <Image src="/clock.png"  alt="시계" width={240} height={240}/>
    </div>
  )
}
