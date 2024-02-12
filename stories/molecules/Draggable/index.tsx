import PropTypes from 'prop-types'
import React, {
  useCallback,
  useEffect,
  useRef
} from 'react'

export const Draggable = ({
  children,
  moveY = false,
  moveX = false,
  minX,
  minY,
  maxX,
  maxY
}) => {
  const elemRef = useRef(null)
  const dragProps = useRef()
  useEffect(() => {
    if (elemRef.current) {
      elemRef.current.style.left = `${minX | 0}px`
      elemRef.current.style.top = `${minY | 0}px`
    }
  }, [minX, minY])

  const initialiseDrag = event => {
    const { target, clientX, clientY } = event
    const { offsetTop, offsetLeft } = target
    const { left, top } = elemRef.current.getBoundingClientRect()
    dragProps.current = {
      dragStartLeft: left - offsetLeft,
      dragStartTop: top - offsetTop,
      dragStartX: clientX,
      dragStartY: clientY
    }
    window.addEventListener('mousemove', startDragging, false)
    window.addEventListener('mouseup', stopDragging, false)
  }
  const stopDragging = useCallback(() => {
    window.removeEventListener('mousemove', startDragging, false)
    window.removeEventListener('mouseup', stopDragging, false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleChange = ({ touches }) => {
    const { clientX, clientY } = touches[0]
    handleValidation({ valueX: clientX, valueY: clientY })
  }
  const startDragging = useCallback(({ clientX, clientY }) => {
    const valueX = dragProps.current.dragStartLeft + clientX - dragProps.current.dragStartX
    const valueY = dragProps.current.dragStartTop + clientY - dragProps.current.dragStartY
    handleValidation({ valueX, valueY })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', startDragging, false)
      window.removeEventListener('mouseup', stopDragging, false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleValidation = useCallback(({ valueX, valueY }) => {
    if (moveX) {
      if (maxX && maxX > valueX) {
        valueX = maxX
      }
      else if (minX && minX < valueX) {
        valueX = minX
      }
      elemRef.current.style.left = `${valueX}px`
    }
    if (moveY) {
      if (maxY && maxY > valueY) {
        valueY = maxY
      }
      else if (minY && minY < valueY) {
        valueY = minY
      }
      elemRef.current.style.top = `${valueY}px`
    }
  }, [maxX, maxY, minX, minY, moveX, moveY])
  return (
    <div
      data-testid='draggable-element'
      onMouseDown={initialiseDrag}
      onTouchMove={handleChange}
      ref={elemRef}
      style={{
        width: '100%',
        position: 'fixed',
        touchAction: 'none'
      }}
    >
      {children}
    </div >
  )
}
Draggable.propTypes = {
  children: PropTypes.any,
  maxX: PropTypes.any,
  maxY: PropTypes.any,
  minX: PropTypes.number,
  minY: PropTypes.number,
  moveX: PropTypes.bool,
  moveY: PropTypes.bool
}
  