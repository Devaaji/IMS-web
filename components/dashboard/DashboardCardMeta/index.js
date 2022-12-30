import React from 'react';
import {
  Box,
  Icon,
  Skeleton,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

const DasboardCardMeta = ({ icon, children, metaName }) => {
  const isLoading = false;
  return (
    <>
      <Box
        py="8"
        borderWidth="1px"
        bg={useColorModeValue('white', 'gray.800')}
        transitionDuration="200ms"
        cursor="pointer"
        rounded="xl"
        boxShadow="md"
        _hover={{ boxShadow: 'xl' }}
        overflow="hidden"
      >
        <VStack>
          {isLoading ? (
            <>
              <Skeleton width="16" h="9" />
              <Skeleton width="16" h="9" />
              <Skeleton width="50%" h="21px" />
            </>
          ) : (
            <>
              <Icon as={icon} fontSize="4xl" />
              <Text fontSize="xl">{children}</Text>
              <Text fontSize="md" color={useColorModeValue('black', 'white')}>
                {metaName}
              </Text>
            </>
          )}
        </VStack>
      </Box>
    </>
  );
};

export default DasboardCardMeta;
