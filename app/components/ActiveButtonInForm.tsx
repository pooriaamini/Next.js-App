'use client'

import { usePathname } from "next/navigation";
import { useActive } from "../contexts/activeContext";
import EmailForm from "./EmailForm";
import SigninPassword from "./SigninPassword";
import SignupPassword from "./SignupPassword";

function ActiveButton() {

   const pathname= usePathname()

   const isSignUp=pathname.includes('signup')==true

    console.log(isSignUp);
    



   

    const {isActive}=useActive()
    return ( 
        <>
        
        {isActive ? isSignUp ? <SignupPassword/> : <SigninPassword/> : <EmailForm />}
        
        </>
     );
}

export default ActiveButton;