import { setColor } from '../utils'
import './style.scss'

const ripple = (evt, color = '', solid = false) => {
  const el = evt.currentTarget
  const offset = el.getBoundingClientRect()
  const x = evt.clientX - offset.left
  const y = evt.clientY - offset.top

  let time = 0.6

  if (el.clientWidth > 150) time = 1.2

  const effectContent = document.createElement('div')

  effectContent.className = 'rx-ripple-content'

  const effect = document.createElement('div')
  setColor('color', color, effectContent)

  effect.className = 'rx-ripple'
  if (solid) {
    effect.classList.add('rx-ripple--solid')
    setColor('color', color || 'primary', effectContent)
  }
  effect.style.transition = `all ${time}s ease`

  effect.style.left = `${x}px`
  effect.style.top = `${y}px`

  effectContent.appendChild(effect)

  el.appendChild(effectContent)

  effect.style.width = `${el.clientWidth * 2.5}px`
  effect.style.height = `${el.clientWidth * 2.5}px`
  effect.style.opacity = `1`

  let noTime = false
  setTimeout(() => {
    noTime = true
  }, 300)

  function removeEffect(evt) {
    effect.style.transition = `all 0.${time * 600}s ease`
    setTimeout(
      () => {
        effect.style.opacity = `0`
        setTimeout(() => {
          el.removeChild(effectContent)
        }, time * 300)
      },
      noTime ? 0 : time * 400
    )

    evt.target.removeEventListener('mouseup', removeEffect)
    evt.target.removeEventListener('mouseleave', removeEffect)
  }

  evt.target.addEventListener('mouseup', removeEffect)
  evt.target.addEventListener('mouseleave', removeEffect)
}

export const rippleReverse = (evt) => {
  const el = evt.currentTarget
  const offset = el.getBoundingClientRect()
  const x = evt.clientX - offset.left
  const y = evt.clientY - offset.top

  let time = 0.6

  if (el.clientWidth > 150) {
    time = 1.2
  }

  const effectContent = document.createElement('div')

  effectContent.className = 'rx-ripple-content'

  const effect = document.createElement('div')

  effect.className = 'rx-ripple-invert'

  effect.style.left = `${x}px`
  effect.style.top = `${y}px`
  effect.style.width = `${el.clientWidth * 2.5}px`
  effect.style.height = `${el.clientWidth * 2.5}px`
  effect.style.opacity = `0`

  effectContent.appendChild(effect)

  el.appendChild(effectContent)

  setTimeout(() => {
    effect.style.width = `0px`
    effect.style.height = `0px`
    effect.style.opacity = `0.5`
  }, 1)

  let noTime = false
  setTimeout(() => {
    noTime = true
  }, 300)

  function removeEffect(evt) {
    effect.style.transition = `all 0.${time * 600}s ease`
    setTimeout(
      () => {
        effect.style.opacity = `0`
        setTimeout(() => {
          el.removeChild(effectContent)
        }, time * 300)
      },
      noTime ? 0 : time * 400
    )

    evt.target.removeEventListener('mouseup', removeEffect)
    evt.target.removeEventListener('mouseleave', removeEffect)
  }

  evt.target.addEventListener('mouseup', removeEffect)
  evt.target.addEventListener('mouseleave', removeEffect)
}

export const rippleCut = (evt) => {
  const el = evt.currentTarget
  const offset = el.getBoundingClientRect()
  const x = evt.clientX - offset.left
  const y = evt.clientY - offset.top

  let time = 0.6

  if (el.clientWidth > 150) {
    time = 1.2
  }

  const effectContent = document.createElement('div')

  effectContent.className = 'rx-ripple-content'

  const effect = document.createElement('div')
  const effect2 = document.createElement('div')

  effect.className = 'rx-ripple-cut-1'
  effect2.className = 'rx-ripple-cut-2'

  effect.style.left = effect2.style.left = `${x}px`
  effect.style.top = effect2.style.top = `${y}px`
  effect.style.width = effect2.style.width = `${el.clientWidth * 2.5}px`
  effect.style.height = effect2.style.height = `${el.clientWidth * 2.5}px`
  effect.style.opacity = effect2.style.opacity = `1`

  effectContent.appendChild(effect)
  effectContent.appendChild(effect2)

  el.appendChild(effectContent)

  setTimeout(() => {
    effect.style.left = `-${el.clientWidth * 1.3}px`
    effect.style.opacity = `1`

    effect2.style.left = `${el.clientWidth * 1.3}px`
    effect2.style.opacity = `1`
  }, 1)

  let noTime = false
  setTimeout(() => {
    noTime = true
  }, 300)

  function removeEffect(evt) {
    effect.style.transition = `all 0.${time * 600}s ease`
    setTimeout(
      () => {
        effect.style.opacity = `0`
        setTimeout(() => {
          el.removeChild(effectContent)
        }, time * 300)
      },
      noTime ? 0 : time * 400
    )

    evt.target.removeEventListener('mouseup', removeEffect)
    evt.target.removeEventListener('mouseleave', removeEffect)
  }

  evt.target.addEventListener('mouseup', removeEffect)
  evt.target.addEventListener('mouseleave', removeEffect)
}

export default ripple
