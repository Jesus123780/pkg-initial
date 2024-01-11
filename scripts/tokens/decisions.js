const choices = require('./choices')

const {
  color: {
    brand,
    base
  },
  boxShadow,
  borderWidth,
  borderRadius,
  filter,
  fontFamily,
  fontSize,
  fontSizeTitles,
  fontWeight,
  lineHeight,
  letterSpacing,
  opacity,
  width,
  zIndex
} = choices

const decisions = {
  color: {
    base:{
      black: base.mineShaft,
      white: base.white,
      transparent: base.transparent
    },
    loaders:{
      background:brand.backgroundLoader,
      foreGround:brand.foreGroundLoader
    },
    primary: {
      OrangeRed: brand.alizarinCrimson,
      OrangeRed2: brand.guardsmanOrangeRed,
      OrangeRedDark: brand.tabasco,
      OrangeRedHeader: brand.orangeRedGradient,
      orangeRedGradientButton: brand.orangeRedGradientButton,
      redBg: brand.chablis,
      disabled: brand.paleSlate,
      pinkLight: brand.pinkLight
    },
    secondary: {
      orangeRedDark: brand.orangeRedStone,
      orangeRedBg: brand.foam,
      blue: brand.blue
    },
    neutral: {
      black: brand.mineShaft,
      gray: brand.mercury,
      grayLight: brand.wildSand,
      grayDark: brand.doveGray,
      graySilver: brand.silver,
      grayWhite: brand.alabaster,
      white: brand.white
    },
    campaigns: {
      red: brand.lust,
      black: brand.heavyMetal,
      orangeRed: brand.orangeRedTag,
      orange: brand.orangeTag,
      yellow: brand.schoolBusYellow,
      turquoise: brand.turquoise
    },
    feedback: {
      successLight: brand.kellyOrangeRed,
      successDark: brand.japaneseLaurel,
      errorLight: brand.red,
      errorDark: brand.kuCrimson,
      warningLight: brand.fuelYellow,
      warningDark: brand.meteor
    },
    text: {
      primary: brand.lust,
      secondary: brand.easternorangeRed,
      grayLight: brand.steel,
      inactive: brand.silver,
      black: brand.bokaraGray,
      white: brand.white,
      success: brand.japaneseLaurel,
      error: brand.kuCrimson,
      warning: brand.meteor
    },
    background: {
      primary: brand.lust,
      primaryLight: brand.chablis,
      secondary: brand.deepCerulean,
      secondaryLight: brand.foam,
      gray: brand.mercury,
      grayLight: brand.whiteSmoke,
      white: brand.white,
      pink: brand.sweetPink,
      blue: brand.blue

    },
    icons: {
      primary: brand.alizarinCrimson,
      secondary: brand.deepCerulean,
      gray: brand.doveGray,
      grayLight: brand.silver,
      black: brand.mineShaft,
      white: brand.white,
      success: brand.kellyOrangeRed,
      error: brand.red,
      warning: brand.fuelYellow
    }
  },
  fontFamily: {
    sans: fontFamily.sans
  },
  fontSize: {
    base: fontSize.base,
    xs: fontSize.xs,
    '2xs': fontSize['2xs'],
    sm: fontSize.sm,
    md: fontSize.md,
    lg: fontSize.lg,
    xl: fontSize.xl,
    '2xl': fontSize['2xl'],
    '3xl': fontSize['3xl'],
    '5xl': fontSize['5xl'],
    '6xl': fontSize['6xl'],
    '9xl': fontSize['9xl'],
    '10xl': fontSize['10xl']
  },
  spacing: {
    none: 0,
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '3rem',
    '5xl': '3.5rem'//64 - pendiente validar
  },
  fontSizeTitles: {
    base: fontSizeTitles.base,
    '2xs': fontSizeTitles['2xs'],
    '3xs': fontSizeTitles['3xs'],
    xs: fontSizeTitles.xs,
    sm: fontSizeTitles.sm,
    md: fontSizeTitles.md,
    'md2': fontSizeTitles['md2'],
    lg: fontSizeTitles.lg,
    xl: fontSizeTitles.xl,
    '2xl': fontSizeTitles['2xl']
  },
  fontWeight: {
    none: fontWeight.none,
    hairline: fontWeight.hairline,
    thin: fontWeight.thin,
    light: fontWeight.light,
    normal: fontWeight.normal,
    medium: fontWeight.medium,
    semibold: fontWeight.semibold,
    bold: fontWeight.bold,
    extrabold: fontWeight.extrabold,
    black: fontWeight.black
  },
  lineHeight: {
    none: lineHeight.none,
    xs: lineHeight.xs,
    '2xs': lineHeight['2xs'],
    sm: lineHeight.sm,
    md: lineHeight.md,
    lg: lineHeight.lg,
    xl: lineHeight.xl,
    '2xl': lineHeight['2xl'],
    '3xl': lineHeight['3xl'],
    '4xl': lineHeight['4xl'],
    '5xl': lineHeight['5xl'],
    '6xl': lineHeight['6xl'],
    '9xl': lineHeight['9xl'],
    '10xl': lineHeight['10xl']
  },
  letterSpacing: {
    tightest: letterSpacing.tightest,
    tighter: letterSpacing.tighter,
    tight: letterSpacing.tight,
    normal: letterSpacing.normal,
    wider: letterSpacing.wider,
    widest: letterSpacing.widest
  },
  boxShadow: {
    none: boxShadow.none,
    xs: boxShadow.xs,
    '2xs': boxShadow['2xs'],
    sm: boxShadow.sm,
    md: boxShadow.md,
    lg: boxShadow.lg,
    xl: boxShadow.xl
  },
  filter: {
    none: filter.none,
    xs: filter.xs
  },
  borderRadius: {
    none: borderRadius.none,
    '2xs': borderRadius['2xs'],
    xs: borderRadius.xs,
    sm: borderRadius.sm,
    md: borderRadius.md,
    lg: borderRadius.lg,
    full: borderRadius.full
  },
  borderWidth: {
    none: borderWidth.none,
    xs: borderWidth.xs,
    md: borderWidth.md,
    lg: borderWidth.lg,
    xl: borderWidth.xl
  },
  opacity: {
    0: opacity['0'],
    25: opacity['25'],
    40: opacity['40'],
    50: opacity['50'],
    75: opacity['75'],
    100: opacity['100']
  },
  width:{
    maxDesktop: width.maxDesktop,
    maxMobile: width.maxMobile
  },
  zIndex: {
    auto: zIndex.auto,
    ['-2']: zIndex['-2'],
    ['-1']: zIndex['-1'],
    0: zIndex['0'],
    5: zIndex['5'],
    10: zIndex['10'],
    20: zIndex['20'],
    30: zIndex['30'],
    40: zIndex['40'],
    50: zIndex['50'],
    999: zIndex['999'],
    9999: zIndex['9999'],
    99999: zIndex['99999']
  }
}
module.exports = decisions