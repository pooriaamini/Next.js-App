// "use client";

// import { useState, useEffect } from "react";

// function ScrollToTop() {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => {
//     if (window.scrollY > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", toggleVisibility);
//     return () => {
//       window.removeEventListener("scroll", toggleVisibility);
//     };
//   }, []);

//   return (
//     <div>
//       {isVisible && (
//         <button
//           onClick={scrollToTop}
//           className="  fixed bottom-8  bg-[#0070f3] left-auto right-8 z-[999] flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-primary text-white shadow-md transition"
//         >
//           <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
//         </button>
//       )}
//     </div>
//   );
// }

// export default ScrollToTop;
