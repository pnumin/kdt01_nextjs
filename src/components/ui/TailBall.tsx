//props 타입 정의 
interface TailBallProps {
  n : number | string ;
}

// interface BgColorT {
//   "n0" : string;
//   "n1" : string;
//   "n2" : string;
//   "n3" : string;
//   "n4" : string;
// }

//Record 유틸리티 타입과 템플릿 리터럴 타입을 결합
//K라는 key를 가진 객체이고, value는 T 타입
type BgColorT = Record<`n${0|1|2|3|4}`, string>

export default function TailBall({n}:TailBallProps) {
  const bgColor:BgColorT = {
    "n0" : "bg-amber-700",
    "n1" : "bg-emerald-700",
    "n2" : "bg-blue-700",
    "n3" : "bg-fuchsia-700",
    "n4" : "bg-pink-700",
  }

  // n이 string으로 넘어 올 수 있음으로 숫자로 명확히 해줌 
  const num = typeof n === 'string' ? parseInt(n) : n ;
  // bgColor의 키는 반드시 BgColorT의 키만 가질 수 있음 
  const colorIdx = "n"+ Math.floor(num / 10) as keyof BgColorT  ;
  return (
    <div className={`w-16 h-16 ${bgColor[colorIdx]}
                    flex justify-center items-center
                    p-10 rounded-full mr-5
                    text-4xl text-white font-bold`}>
      {n}
    </div>
  )
}
