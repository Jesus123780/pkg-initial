/* eslint-disable consistent-return */
import React, { Fragment, useEffect, useRef, useState } from 'react'

function ___$insertStyle(css) {
  if (!css || typeof window === 'undefined') {
    return
  }
  const style = document.createElement('style')
  style.setAttribute('type', 'text/css')
  style.innerHTML = css
  document.head.appendChild(style)
  return css
}

// Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e }
}

let React__default = /*#__PURE__*/ _interopDefaultLegacy(React)

let __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (let s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i]
        for (let p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
      }
      return t
    }
  return __assign.apply(this, arguments)
}

___$insertStyle(
  // eslint-disable-next-line max-len
  '.marquee-container {\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: let(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: let(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, let(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: let(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll let(--duration) linear let(--delay) let(--iteration-count);\n  animation-play-state: let(--play);\n  animation-delay: let(--delay);\n  animation-direction: let(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}'
)

export const Marquee = function (_a) {
  let _b; let _c; let _d; let _e
  let _f = _a.style
  let style = _f === void 0 ? {} : _f
  let _g = _a.className
  let className = _g === void 0 ? '' : _g
  let _h = _a.play
  let play = _h === void 0 ? true : _h
  let _j = _a.pauseOnHover
  let pauseOnHover = _j === void 0 ? false : _j
  let _k = _a.pauseOnClick
  let pauseOnClick = _k === void 0 ? false : _k
  let _l = _a.direction
  let direction = _l === void 0 ? 'left' : _l
  let _m = _a.speed
  let speed = _m === void 0 ? 20 : _m
  let _o = _a.delay
  let delay = _o === void 0 ? 0 : _o
  let _p = _a.loop
  let loop = _p === void 0 ? 0 : _p
  let _q = _a.gradient
  let gradient = _q === void 0 ? true : _q
  let _r = _a.gradientColor
  let gradientColor = _r === void 0 ? [255, 255, 255] : _r
  let _s = _a.gradientWidth
  let gradientWidth = _s === void 0 ? 200 : _s
  let onFinish = _a.onFinish
  let onCycleComplete = _a.onCycleComplete
  let children = _a.children
  // React Hooks
  let _t = useState(0)
  let containerWidth = _t[0]
  let setContainerWidth = _t[1]
  let _u = useState(0)
  let marqueeWidth = _u[0]
  let setMarqueeWidth = _u[1]
  let _v = useState(false)
  let isMounted = _v[0]
  let setIsMounted = _v[1]
  let containerRef = useRef(null)
  let marqueeRef = useRef(null)
  useEffect(
    function () {
      if (!isMounted) return
      let calculateWidth = function () {
        // Find width of container and width of marquee
        if (marqueeRef.current && containerRef.current) {
          setContainerWidth(containerRef.current.getBoundingClientRect().width)
          setMarqueeWidth(marqueeRef.current.getBoundingClientRect().width)
        }
      }
      calculateWidth()
      // Rerender on window resize
      window.addEventListener('resize', calculateWidth)
      return function () {
        window.removeEventListener('resize', calculateWidth)
      }
    },
    [isMounted]
  )
  useEffect(function () {
    setIsMounted(true)
  }, [])
  // Gradient color in an unfinished rgba format
  let rgbaGradientColor = 'rgba(' + gradientColor[0] + ', ' + gradientColor[1] + ', ' + gradientColor[2]
  // Animation duration
  let duration = marqueeWidth < containerWidth ? containerWidth / speed : marqueeWidth / speed
  return React__default['default'].createElement(
    Fragment,
    null,
    !isMounted
      ? null
      : React__default['default'].createElement(
        'div',
        { ref: containerRef, style: __assign(__assign({}, style), ((_b = {}), (_b['--pause-on-hover'] = !play || pauseOnHover ? 'paused' : 'running'), (_b['--pause-on-click'] = !play || (pauseOnHover && !pauseOnClick) || pauseOnClick ? 'paused' : 'running'), _b)), className: className + ' marquee-container' },
        gradient && React__default['default'].createElement('div', { style: ((_c = {}), (_c['--gradient-color'] = rgbaGradientColor + ', 1), ' + rgbaGradientColor + ', 0)'), (_c['--gradient-width'] = typeof gradientWidth === 'number' ? gradientWidth + 'px' : gradientWidth), _c), className: 'overlay' }),
        React__default['default'].createElement('div', { ref: marqueeRef, style: ((_d = {}), (_d['--play'] = play ? 'running' : 'paused'), (_d['--direction'] = direction === 'left' ? 'normal' : 'reverse'), (_d['--duration'] = duration + 's'), (_d['--delay'] = delay + 's'), (_d['--iteration-count'] = loop ? '' + loop : 'infinite'), _d), className: 'marquee', onAnimationIteration: onCycleComplete, onAnimationEnd: onFinish }, children),
        React__default['default'].createElement('div', { style: ((_e = {}), (_e['--play'] = play ? 'running' : 'paused'), (_e['--direction'] = direction === 'left' ? 'normal' : 'reverse'), (_e['--duration'] = duration + 's'), (_e['--delay'] = delay + 's'), (_e['--iteration-count'] = loop ? '' + loop : 'infinite'), _e), className: 'marquee', 'aria-hidden': 'true' }, children)
      )
  )
}
