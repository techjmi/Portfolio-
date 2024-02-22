import React from 'react'

const Images = ({src}) => {
  return (
   <>
   <>
    <div className="col-md-5 d-flex align-items-center img_prjct">
      <img
        src={src}
        alt="Your Image"
        width="300"
        height="auto"
        className="img_res img-fluid mx-auto d-block mt-2"
      />
    </div>
    
      </>
   </>
  )
}

export default Images
