import { Box, Skeleton, Stack, useColorModeValue } from '@chakra-ui/react';

const PageLoadingScreen = () => {
  return (
    <Stack spacing="5" zIndex={3}>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        rounded="xl"
        transitionDuration="200ms"
        p="4"
        shadow="sm"
        align="stretch"
      >
        <Stack>
          <Skeleton w="full" h="20px" rounded="xl" />
          <Skeleton w="full" h="20px" rounded="xl" />
          <Skeleton w="full" h="20px" rounded="xl" />
          <Skeleton w="full" h="20px" rounded="xl" />
          <Skeleton w="full" h="20px" rounded="xl" />
        </Stack>
      </Box>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        rounded="xl"
        transitionDuration="200ms"
        p="4"
        shadow="sm"
        align="stretch"
      >
        <Stack>
          <Skeleton w="full" h="20px" rounded="xl" />
          <Skeleton w="full" h="20px" rounded="xl" />
          <Skeleton w="full" h="20px" rounded="xl" />
          <Skeleton w="full" h="20px" rounded="xl" />
          <Skeleton w="full" h="20px" rounded="xl" />
        </Stack>
      </Box>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        rounded="xl"
        transitionDuration="200ms"
        p="4"
        shadow="sm"
        align="stretch"
      >
        <Stack>
          <Skeleton w="full" h="20px" rounded="xl" />
          <Skeleton w="full" h="20px" rounded="xl" />
          <Skeleton w="full" h="20px" rounded="xl" />
          <Skeleton w="full" h="20px" rounded="xl" />
          <Skeleton w="full" h="20px" rounded="xl" />
        </Stack>
      </Box>
    </Stack>
  );
};

export default PageLoadingScreen;
