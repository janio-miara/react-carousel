import React from 'react'
import Carousel from './Carousel/Carousel'
import './Slider.css'
import useCarousel from "../../hooks/useCarousel";
import {FiChevronLeft, FiChevronRight} from "react-icons/all";

const Slider = ({children}) => {

  const {
    activeItem,
    goToNext,
    goToPrev,
    handleTotalItens,
    handleClearInterval,
    handleActiveInterval,
  } = useCarousel()


  return (
    <div
      className='containerSlider'
      onMouseOver={handleClearInterval}
      onMouseLeave={handleActiveInterval}
    >
      <div className='carousel'>
        <Carousel
          handleTotalItens={handleTotalItens}
          activeItem={activeItem}
          goToPrev={goToPrev}
          goToNext={goToNext}
        >
          {children}
        </Carousel>
          <>
            <button
              className='float-buttons-left'
              onClick={() => goToPrev()}
            ><FiChevronLeft size='30px'/></button>
            <button
              className='float-buttons-right'
              onClick={() => goToNext()}
            ><FiChevronRight   size='30px'/></button>
          </>
      </div>
    </div>
  )
}
export default Slider
