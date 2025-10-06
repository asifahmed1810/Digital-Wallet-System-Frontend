

import RegisterForm from "@/components/modules/authentication/RegisterForm";



export default function Register() {
  return (
    <div className="grid min-h-svh ">
     
      <div className="flex flex-col gap-4 p-6 md:p-10">
        
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm></RegisterForm>
          </div>
        </div>
      </div>
    </div>
  );
}