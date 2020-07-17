import React, { useRef, useState, useLayoutEffect, useCallback } from 'react'
import classnames from 'classnames'
import { default as colorUtils } from '../../helpers/color'
import ripple, { rippleCut, rippleReverse } from '../../helpers/ripple'
import './style.scss'

export default (props) => {
  const {
    animateInactive,
    animationType = '',
    block,
    border,
    circle,
    color,
    active,
    flat,
    floating,
    gradient,
    icon,
    loading = false,
    relief,
    shadow,
    size = '',
    square,
    transparent,
    disabled,
    upload
  } = props

  const animate = props.children[1].type
  const ButtonRef = useRef(null)
  const [componentColor, setComponentColor] = useState('')

  const Classes = classnames([
    'rx-button',
    `rx-button--${componentColor}`,
    `rx-button--size-${size}`,
    { [`rx-button--fff`]: color === '#fff' },
    { [`rx-button--active`]: !!active },
    { [`rx-button--active-disabled`]: !!disabled },
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
        !flat &&
        !border &&
        !gradient &&
        !relief &&
        !transparent &&
        !shadow &&
        !floating
    },
    { [`rx-button--flat`]: !!flat },
    { [`rx-button--border`]: !!border },
    { [`rx-button--gradient`]: !!gradient },
    { [`rx-button--relief`]: !!relief },
    { [`rx-button--transparent`]: !!transparent },
    { [`rx-button--shadow`]: !!shadow },
    { [`rx-button--floating`]: !!floating }
  ])

  const setColor = useCallback(() => {
    setComponentColor(
      colorUtils(
        ButtonRef.current,
        props.primary,
        props.success,
        props.warning,
        props.seconadry,
        props.danger,
        props.dark,
        props.light,
        props.color
      )
    )
  }, [props, ButtonRef])

  useLayoutEffect(() => {
    ButtonRef && ButtonRef.current && setColor(ButtonRef.current, props)
  }, [ButtonRef, setColor, props])

  const mouseDown = (evt) => {
    // ripple effect
    if (ripple === 'reverse') {
      rippleReverse(evt)
    } else if (ripple === 'cut') {
      rippleCut(evt)
    } else {
      if (flat) {
        ripple(
          evt,
          (componentColor || color || 'primary') &&
            !active &&
            document.activeElement !== ButtonRef.current
            ? componentColor || color
            : null,
          flat && !active && document.activeElement !== ButtonRef.current
        )
      } else {
        ripple(evt, null, false)
      }
    }
  }

  const animateContent = () => (
    <div className={`rx-button__animate rx-button__animate--${animationType}`}>
      {animate}
    </div>
  )
  const loadingElement = () => <div className='rx-button__loading'></div>

  const childs = React.Children.map(
    props.children,
    (child) => child.type !== 'animate' && child
  )

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
