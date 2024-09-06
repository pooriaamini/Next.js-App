'use client'
import Lottie from 'lottie-react';
import Animation from '@/public/lottiefiles/Animation-Forgot.json'

function ForgotAnimation() {
   
  
    return ( 
      <div className='bg-blue-500 rounded-2xl '>
        <Lottie className='  w-[80%] lg:w-auto p-4   '
        animationData={Animation}
        loop={true}
            />
      </div>
     );
}

export default ForgotAnimation;