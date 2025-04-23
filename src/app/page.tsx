'use client'
import { useAtom } from "jotai";
import { isLogin } from "@/atoms/IsLoginAtom";
import Login from "@/components/Login";
import { useEffect , useState} from "react";

export default function Home() {
  const [login, setLogin] = useAtom(isLogin);
  const [email, setEmail] = useState<string|null>('') ;

  useEffect(()=>{
    const localEmail : string | null = localStorage.getItem("email") ;
    if (localEmail) {
      setLogin(true) ;
      setEmail(localEmail) ;
    }
  }, [setLogin, setEmail]);

  return (
    <div className="w-full h-full flex justify-center">
      {
        login ? <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                  <h1 className="text-2xl font-bold flex justify-center">
                    <span className="text-blue-700">{`${email}`}</span>
                    님 로그인이 되었습니다.
                  </h1>
                </div>
               : <Login />
      }
    </div>
  )
}

