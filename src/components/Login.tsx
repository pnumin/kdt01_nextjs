'use client'
import { useRef } from "react" 
import { useAtom } from "jotai";
import { isLogin } from "../atoms/IsLoginAtom";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react"; 
import axios from "axios";

const baseurl = "http://localhost:3000/api/user"
 
export default function Login() {
  const [, setLogin] = useAtom(isLogin) ;
  const emailRef = useRef<HTMLInputElement>(null) ;
  const pwdRef = useRef<HTMLInputElement>(null) ;

  const router = useRouter();
 
   
  const handleOk = async (e:MouseEvent<HTMLButtonElement>) => {
      e.preventDefault(); 
      const email = emailRef.current?.value || '' ;
      const pwd = pwdRef.current?.value || '' ;

      if ( email == '') {
        alert("이메일을 입력하세요.");
        emailRef.current?.focus() ;
        return ;
      }

      if ( pwd  == '') {
        alert("비밀번호를 입력하세요.");
        pwdRef.current?.focus() ;
        return ;
      }

      try {
        const response = await axios.get(`${baseurl}?id=${email}`);
        const user = response.data ;

        if (!user) {
          alert("사용자가 존재하지 않습니다.")
          return;
        }

        if (user.pwd !== pwd) {
          alert("비밀번호가 일치하지 않습니다.") ;
          return ;
        }

        localStorage.setItem("email", email );
        setLogin(true);
        window.location.reload();
      } catch ( err : any) {
        if (err.response?.status === 404) {
          alert('존재하지 않는 사용자입니다.');
        } else {
          alert('로그인 중 오류가 발생했습니다.');
        }
        return;
      }
  }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <div className="flex items-center justify-start">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
            </div>
            <div className="mt-2">
              <input type="email" name="email" id="email"  
                      ref = {emailRef}
                      required 
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-start">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
            </div>
            <div className="mt-2">
              <input type="password" name="password" id="password"  
                      ref={pwdRef}
                      required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>

          <div>
            <button type="button" 
                    onClick={handleOk}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>

      </div>
    </div>
  )
}
