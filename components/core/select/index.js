import {
  HStack,
  useToken,
  useFormControlContext,
  useColorModeValue,
} from '@chakra-ui/react';
import ReactSelect, { components } from 'react-select';
import makeAnimated from 'react-select/animated';
import controlFlow from './helper/controlFlow';

const Select = ({
  styles: _styles,
  onChange,
  value,
  isClearable,
  menuPlacement,
  icon,
  ...props
}) => {
  const controlContext = useFormControlContext();

  const isDisabled =
    controlContext && controlContext.isReadOnly
      ? controlContext.isReadOnly
      : undefined;
  const fontSizeSm = useToken('fontSizes', 'sm');

  const customStyles = {
    indicatorSeparator: () => ({
      display: 'none',
    }),
    clearIndicator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: useColorModeValue('gray', 'white'),
    }),
    container: (provided) => ({
      ...provided,
      fontSize: fontSizeSm,
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: useColorModeValue('white', '#2D3748'),
    }),
    input: (provided) => ({
      ...provided,
      borderColor: 'none',
      color: 'white',
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: useColorModeValue('white', '#2D3748'),
      borderColor: 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      color: controlFlow({
        if: [state.isFocused, 'white'],
        elseif: [state.isSelected, 'white'],
        else: useColorModeValue('black', 'white'),
      }),
      backgroundColor: controlFlow({
        if: [state.isFocused, '#197BBD'],
        elseif: [state.isSelected, '#197BBD'],
        else: useColorModeValue('white', '#2D3748'),
      }),
      ':active': {
        color: 'white',
        backgroundColor: '#2D3748',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: useColorModeValue('black', 'white'),
    }),
  };

  return (
    <ReactSelect
      value={value}
      styles={customStyles}
      isClearable={isClearable ? isClearable : false}
      menuPlacement={menuPlacement ? menuPlacement : 'top'}
      onChange={onChange}
      isDisabled={isDisabled}
      components={{
        Control: ({ children, ...rest }) => (
          <components.Control {...rest}>
            {icon ? (
              <HStack pl="3" spacing="0" w="full">
                {icon}
                {children}
              </HStack>
            ) : (
              children
            )}
          </components.Control>
        ),
      }}
      {...props}
    />
  );
};

export default Select;
