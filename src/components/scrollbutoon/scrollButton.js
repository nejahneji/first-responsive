import { useState } from "react";
import './scrollButton.css'

const ScrollButton = () =>{
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 350){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
        <div className="scroll">
        <i class="far fa-arrow-alt-circle-up fa-2x" onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}} >
        </i>
        </div>
      
    );
  }
    
  export default ScrollButton;