import { setColor } from './utils'
export default function colorUtils(selector, props) {
  if (!selector || selector.nodeName === '#comment') return

  const {
    primary = false,
    success = false,
    warning = false,
    danger = false,
    dark = false,
    white = false,
    light = false,
    color = ''
  } = props

  const componentColor =
    ((danger || color === 'danger') && 'danger') ||
    ((success || color === 'success') && 'success') ||
    ((warning || color === 'warning') && 'warn') ||
    ((dark || color === 'dark') && 'dark') ||
    ((white || light || color === 'light' || color === 'white') && 'light') ||
    ((primary || color === 'primary') && 'primary')

  if (color || componentColor) {
    setColor('color', componentColor || color || 'primary', selector, true)

    // if ($refs.options) {
    //   setColor(
    //     'color',
    //     componentColor || color || 'primary',
    //     $refs.options,
    //     true
    //   )
    // }

    // if ($refs.tooltip) {
    //   setColor(
    //     'color',
    //     componentColor || color || 'primary',
    //     $refs.tooltip,
    //     true
    //   )
    // }
  }
  if (componentColor === 'dark' || color === 'dark')
    selector.classList.add('rx-component-dark')
  else selector.classList.remove('rx-component-dark')

  if (componentColor === 'white') selector.classList.add('rx-component-white')
  else selector.classList.remove('rx-component-white')

  return componentColor
}
