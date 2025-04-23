'use client'
import TailBall from "../../components/ui/TailBall";
import TailButton from "../../components/ui/TailButton";
import { useState } from "react"

export default function Lotto() {
  //useState 타입 선언 
  const [lottoTags, setLottoTags ] = useState<React.ReactNode[]>([]) ;

  const handleLottoNum = () => {
    //숫자배열
    const lottoNum: number[] = [] ;

    while(lottoNum.length < 7) {
      const n:number = Math.floor(Math.random() * 45) + 1 ; //1~45

      //랜덤수를 배열에 넣기 
      if (!lottoNum.includes(n)) lottoNum.push(n) ;
    }

    //보너스 번호 => 배열 
    const bonus:number[] = lottoNum.splice(-1) ;

    //로또 번호 정렬 
    lottoNum.sort((a:number,b:number) => a-b) ;

    //로또 배열 다시 생성
    // + 문자열을 추가함으로 string이 올수 있음으로 변수를 변경 
    const lottoNum2 : (number|string)[] = [...lottoNum, '+', ...bonus] ;

    //TailBall 만들기
    const tm = lottoNum2.map((item: number|string) => item === '+' ? 
                                                  <span   key="nplus"
                                                          className="w-16 h-16 text-4xl font-bold mr-5
                                                                  flex justify-center items-center">
                                                  {item}
                                                 </span>
                                                : <TailBall key={'n'+item} n={item}/> 
                          );
    setLottoTags(tm) ; 
    // console.log("lottoNum", lottoNum);
  }
  
  return (
    <div className="w-11/12 h-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center mb-10">
       {lottoTags}
      </div>
      <div>
        <TailButton caption="로또번호생성" color="blue" onClick={handleLottoNum} /> 
      </div>
    </div>
  )
}
