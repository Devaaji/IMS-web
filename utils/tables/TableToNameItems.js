import { Box, Flex, HStack, Text } from '@chakra-ui/react';

export const TableToNameItems = ({
  item,
  fontSize,
  tableName,
  fontWeight,
  weightName,
  weightValue,
}) => {
  return (
    <HStack mt="1" w="full" align="flex-start">
      <Box
        fontSize={fontSize ? fontSize : 'sm'}
        w={weightName ? weightName : '150px'}
      >
        <Flex justify="space-between">
          <Text fontWeight={fontWeight ? fontWeight : 'semibold'}>
            {tableName}
          </Text>
          <Text>:</Text>
        </Flex>
      </Box>
      <Box
        fontSize={fontSize ? fontSize : 'sm'}
        w={weightValue ? weightValue : '200px'}
        wordBreak="break-word"
      >
        <Text>{item}</Text>
      </Box>
    </HStack>
  );
};
