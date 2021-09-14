import React, { Children, cloneElement, useRef } from 'react'
import PropTypes from 'prop-types'
import memoize from 'memoize-one'
import './Carousel.css'
import { useSwipeable } from 'react-swipeable'

const addSliderClassToElement = memoize(element => {
  return cloneElement(element, {
    className: 'slide',
  })
})

const Carousel = ({ children, handleTotalItens, activeItem, goToPrev, goToNext }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrev(),
  })
  const myRef = useRef()
  const totalItems = Children.count(children)
  handleTotalItens(totalItems)

  const refPassthrough = el => {
    handlers.ref(el)
    myRef.current = el
  }

  return (
    <div
      ref={refPassthrough}
      className={'slider'}
      style={{ transform: `translate3d(-${activeItem * 100}%,0,0)` }}
    >
      {children?.map(children => addSliderClassToElement(children))}
    </div>
  )
}

Carousel.propTypes = {
  goToNext: PropTypes.func.isRequired,
  goToPrev: PropTypes.func.isRequired,
  handleTotalItens: PropTypes.func.isRequired,
  activeItem: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Carousel
