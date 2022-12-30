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
import { FiMail } from 'react-icons/fi';

const DashboardMessage = () => {
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
            icon={<FiMail />}
            aria-label="Notifications"
          />
        </Box>
      </PopoverTrigger>
      <Portal>
        <PopoverContent shadow="md !important">
          <PopoverArrow />
          <PopoverBody>Tidak Ada Pesan</PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default DashboardMessage;
