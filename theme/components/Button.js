const baseStyle = {
  fontFamily: 'Sans-Serif',
};

const sizeLg = {
  lg: {
    fontSize: 'md',
  },
};

const sizesMd = {
  md: {
    fontSize: 'sm',
  },
};

const baseVariantOutline = {
  rounded: 'md',
  px: '4',
};

const baseVariantOutlineSecond = {
  rounded: '3xl',
  px: '8',
};

const baseVariantSolid = {
  ...baseVariantOutline,
  color: 'white',
};

const variantSolidDanger = {
  'solid-danger': {
    ...baseVariantSolid,
    color: 'white',
    bg: 'ims-red',
    _hover: { bg: 'ims-red' },
    _active: { bg: 'ims-red' },
    _loading: { _hover: { bg: 'ims-red' } },
  },
};

const variantAccept = {
  'solid-acc': {
    ...baseVariantSolid,
    color: 'white',
    bg: 'ims-primary',
    _hover: { bg: 'button-hover' },
    _active: { bg: 'ims-primary' },
    _loading: { _hover: { bg: 'ims-ims-primary' } },
  },
};

const variantButtonNew = {
'solid-blue': {
  ...baseVariantSolid,
  color: 'black',
  bg: '#A4CDE8',
  cursor: "pointer",
  _hover: { bg: 'ims-primary-new' },
  _loading: { _hover: { bg: 'ims-ims-primary-new' } },
}
};

const variantButtonAction = {
'button-blue': {
  ...baseVariantSolid,
  color: 'white',
  bg: 'ims-primary-new',
  cursor: "pointer",
  _hover: { bg: '#225f87' },
}
}

const Button = {
  baseStyle,
  sizes: {
    ...sizeLg,
    ...sizesMd,
  },
  variants: {
    ...variantSolidDanger,
    ...variantAccept,
    ...variantButtonNew,
    ...variantButtonAction
  },
};

export default Button;
