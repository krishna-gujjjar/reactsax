import React, { useRef, useState, useLayoutEffect, useCallback } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import colorUtils from '../../helpers/color'
import ripple, { rippleCut, rippleReverse } from '../../helpers/ripple'
import './style.scss'

export default function Button(props) {
  const {
    animateInactive = false,
    animationType = '',
    block = false,
    circle = false,
    active = false,
    icon = false,
    loading = false,
    size = '',
    square = false,
    upload = false
  } = props

  const animate = props.children[1].type
  const ButtonRef = useRef(null)
  const [componentColor, setComponentColor] = useState('')

  const Classes = classnames([
    'rx-button',
    `rx-button--${componentColor}`,
    `rx-button--size-${size}`,
    {
      [`rx-button--light`]:
        props.color === '#fff' ||
        props.color === 'light' ||
        props.color === 'white' ||
        props.white ||
        props.light
    },
    { [`rx-button--active`]: !!active },
    { [`rx-button--active-disabled`]: !!props.disabled },
    { [`rx-button--icon`]: !!icon },
    { [`rx-button--circle`]: !!circle },
    { [`rx-button--square`]: !!square },
    { [`rx-button--loading`]: !!loading },
    { [`rx-button--upload`]: !!upload },
    { [`rx-button--block`]: !!block },
    { [`rx-button--animate`]: !!animate },
    { [`rx-button--animate-${animationType}`]: !!animationType },
    { [`rx-button--animate-inactive`]: !!animateInactive },

    {
      [`rx-button--default`]:
        props.styleType === undefined &&
        !props.flat &&
        !props.border &&
        !props.gradient &&
        !props.relief &&
        !props.transparent &&
        !props.shadow &&
        !props.floating
    },
    { [`rx-button--flat`]: props.styleType === 'flat' || !!props.flat },
    { [`rx-button--border`]: props.styleType === 'border' || !!props.border },
    {
      [`rx-button--gradient`]:
        props.styleType === 'gradient' || !!props.gradient
    },
    { [`rx-button--relief`]: props.styleType === 'relief' || !!props.relief },
    {
      [`rx-button--transparent`]:
        props.styleType === 'transparent' || !!props.transparent
    },
    { [`rx-button--shadow`]: props.styleType === 'shadow' || !!props.shadow },
    {
      [`rx-button--floating`]:
        props.styleType === 'floating' || !!props.floating
    }
  ])

  const setColor = useCallback(() => {
    setComponentColor(colorUtils(ButtonRef.current, props))
  }, [props, ButtonRef])

  useLayoutEffect(() => {
    ButtonRef && ButtonRef.current && setColor(ButtonRef.current, props)
  }, [ButtonRef, setColor, props])

  const mouseDown = (evt) => {
    // ripple effect
    const rippleColor =
      (componentColor || props.color || 'primary') &&
      !active &&
      document.activeElement !== ButtonRef.current
        ? componentColor || props.color
        : null

    switch (ripple) {
      case 'reverse':
        rippleReverse(evt)
        break

      case 'cut':
        rippleCut(evt)
        break

      default:
        if (props.styleType === 'flat' || props.flat)
          return ripple(
            evt,
            rippleColor,
            (props.styleType === 'flat' || props.flat) &&
              !active &&
              document.activeElement !== ButtonRef.current
          )
        return ripple(evt, null, false)
    }
  }

  const animateContent = () => (
    <div className={`rx-button__animate rx-button__animate--${animationType}`}>
      {animate}
    </div>
  )
  const loadingElement = () => <div className='rx-button__loading' />

  const childs = React.Children.map(
    props.children,
    (child) => child.type !== 'animate' && child
  )

  console.log(props.styleType)

  return (
    <button
      ref={ButtonRef}
      className={Classes}
      {...props}
      onMouseDown={(evt) => mouseDown(evt)}
    >
      <div className='rx-button__content'>{childs}</div>
      {animate === 'animate' ? animateContent() : ''}
      {loading ? loadingElement() : ''}
    </button>
  )
}

Button.defaultProps = {
  color: 'primary'
}

Button.propTypes = {
  /** You Can Use `RGB color`, `HEX color` or Main colors of `Reactsax` */
  color: PropTypes.oneOfType([
    PropTypes.oneOf([
      'primary',
      'success',
      'warning',
      'danger',
      'dark',
      'light'
    ]),
    PropTypes.string
  ]),

  /** Button Style */
  styleType: PropTypes.oneOf([
    'flat',
    'border',
    'gradient',
    'relief',
    'transparent',
    'shadow',
    'floating'
  ])
}
