import { extendTheme } from '@chakra-ui/react';

import colors from './components/colors';
import fonts from './components/fonts';
import Button from './components/Button';
import styles from './components/styles';
import Text from './components/Text';

const theme = extendTheme({
  colors,
  fonts,
  styles,
  components: {
    Button,
    Text,
  },
});

export default theme;
