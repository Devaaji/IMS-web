import {
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import useAxios from '../../components/hooks/useAxios';
import useAuthUserStore from '../../store/useAuthUserStore';

export function ModalExpiredToken() {
  const router = useRouter();
  const removeCookies = useAuthUserStore((state) => state.setLogout);

  const [, actionLogout] = useAxios(
    {
      url: '/auth/logout',
      method: 'POST',
    },
    { manual: true }
  );

  useEffect(() => {
    setTimeout(() => {
      actionLogout()
        .then(() => {
          removeCookies();
          router.reload('/login');
        })
        .catch((error) => console.log(error));
    }, 2000);
  }, []);

  return (
    <Modal closeOnOverlayClick={false} isOpen={true} isCentered>
      <ModalOverlay />
      <ModalContent rounded="xl">
        <ModalBody py="10">
          <VStack>
            <Icon as={IoCloseCircleOutline} fontSize="5xl" color="ims-red" />
            <Text fontSize="xl" fontWeight="semibold">
              Your Session has expired
            </Text>
            <Text fontSize="md">Session ended, You Direct to Login again!</Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
