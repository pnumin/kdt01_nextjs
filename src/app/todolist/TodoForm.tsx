'use client'
import TailButton from "@/components/ui/TailButton" 
import { useRef } from "react"
import { completedT } from "@/types/Todo";
import { MouseEvent } from "react";

//Props의 타입 정의
interface TodoFormProps {
  addTodo : (text:string,completed:completedT) => void ;
}

//Props의 타입 선언 
export default function TodoForm({addTodo}:TodoFormProps) {
  //useRef 훅 타입 선언 
  const selRef = useRef<HTMLSelectElement>(null) ;
  const inRef = useRef<HTMLInputElement>(null) ;

  const handleClick = (e:MouseEvent<HTMLButtonElement>) => {
    e.preventDefault() ;

    if (inRef.current?.value == "" ) {
      alert("값을 입력하세요.");
      inRef.current.focus() ;
      return ;
    }

    // 입력값이 undefinded가 될경우를 고려하고
    // select 값이 "O" 와 "X"
    if (inRef.current)
        addTodo(inRef.current?.value, selRef.current?.value as completedT) ;
  }

  const handleCancel = (e:MouseEvent<HTMLButtonElement>) => {
    e.preventDefault() ;

    // 입력값이 undefinded가 될경우를 고려
    if (inRef.current) inRef.current.value = "";
    if (selRef.current) selRef.current.value = "X" ;

    inRef.current?.focus() ;
  }

  return (
    <form className="w-10/12 grid grid-cols-5 gap-4">
      <select id="sel1"  
        ref = {selRef}
        className="bg-gray-50 border border-gray-300
                               text-gray-900 text-sm rounded-lg
                                focus:ring-blue-500 focus:border-blue-500 
                                block w-full p-2 m-2">
        <option value="X">X</option> 
        <option value="O">O</option> 
      </select>
      <div className="col-span-2 h-full">
        <input type="text" id="txt1" 
          ref ={inRef}
          className="bg-gray-50 border border-gray-300
                         text-gray-900 text-lg rounded-lg  text-center
                         focus:ring-blue-500 focus:border-blue-500 block w-full  
                         p-2 m-2"/>
      </div>
      <TailButton caption="확인"
        color="blue"
        onClick={handleClick} />
      <TailButton caption="취소"
        color="orange"
        onClick={handleCancel} />
    </form>
  )
}
