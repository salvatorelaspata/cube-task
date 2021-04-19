import React from 'react'
import './figata.css'
import { useAnimation } from './useAnimation'

/**
 * @credit https://codepen.io/arc-coder/pen/ExyMNvY
 */

const Figata: React.FC = () => {
     const { cardRef,
          sneakerRef,
          titleRef,
          descriptionRef,
          sizesRef,
          purchaseRef,
          mousemove,
          mouseenter,
          mouseLeave } = useAnimation()


     return (
          <>
               <div onMouseLeave={mouseLeave} onMouseEnter={mouseenter} onMouseMove={mousemove} className="container">
                    <div className="card" ref={cardRef} >
                         <div className="sneaker" ref={sneakerRef} >
                              <div className="circle"></div>
                              <img src="https://dev-to-uploads.s3.amazonaws.com/i/bzs1j4p3vo2uai19pv17.png" alt="adidas" />
                         </div>
                         <div className="info" ref={descriptionRef}>
                              <h1 className="title" ref={titleRef}>Adidas ZX</h1>
                              <h3>
                                   FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION
                                   COMFORT.
                         </h3>
                              <div className="sizes" ref={sizesRef}>
                                   <button>39</button>
                                   <button>40</button>
                                   <button className="active" >42</button>
                                   <button>44</button>
                              </div>
                              <div className="purchase" ref={purchaseRef}>
                                   <button>Purchase</button>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Figata
