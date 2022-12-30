import {
  Box,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { FiBell } from 'react-icons/fi';

const DashboardNotifications = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      trigger="hover"
      placement="bottom-end"
    >
      <PopoverTrigger>
        <Box>
          <IconButton
            variant="ghost"
            fontSize="xl"
            rounded="full"
            color="gray"
            icon={<FiBell />}
            aria-label="Notifications"
          />
        </Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent shadow="md !important">
          <PopoverArrow />
          <PopoverBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default DashboardNotifications;
