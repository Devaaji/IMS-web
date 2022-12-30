import React from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { FaUserLock } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { changePasswordSchema } from '../../utils/schema/AuthenticationSchema';

const ResetPasswordPage = () => {
  const toast = useToast();
  const { isOpen: isPasswordOpen, onToggle: onPasswordToggle } =
    useDisclosure();

  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const onSubmit = (data) => console.log(data);

  const handleClickButton = () => {
    toast({
      title: 'Password Berhasil di ubah',
      position: 'top',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <React.Fragment>
      <NextSeo title="Reset Password" titleTemplate="%s | IMS" />
      <Flex
        flexDirection="column"
        w="100wh"
        h="100vh"
        justifyContent="center"
        align="center"
      >
        <Stack
          as="form"
          flexDir="column"
          onSubmit={handleSubmit(onSubmit)}
          m="4"
          justifyContent="center"
          alignItems="center"
        >
          <Heading w="370px" textAlign="center" color="ims-primary">
            Silahkan Masuk Akun IMS Kamu!
          </Heading>
          <Box
            w={{ base: 'full', md: '400px' }}
            h="max"
            bg="white"
            p="34px"
            boxShadow={'0px 0px 6px 1px rgba(0, 0, 0, 0.25);'}
            borderRadius="15px"
          >
            <Center>
              <Box mt="10px">
                <Icon as={FaUserLock} w={20} h={20} color="ims-primary" />
              </Box>
            </Center>
            <Stack spacing="8">
              <Box textAlign={'center'}>
                <Text fontSize="2xl" fontWeight="semibold">
                  Kata Sandi Baru
                </Text>
                <Text fontSize="md">
                  Buat Kata sandi baru dengan memasukan password dan konfimasi
                  password terbaru.
                </Text>
              </Box>
              <FormControl
                id="password"
                isInvalid={!!formState.errors?.password}
                errortext={formState.errors?.password?.message}
              >
                <Box>
                  <FormLabel>Kata Sandi Baru*</FormLabel>
                </Box>
                <InputGroup>
                  <Input
                    placeholder="Mohon isi kata sandi Anda"
                    type={isPasswordOpen ? 'text' : 'password'}
                    {...register('password')}
                  />
                  <InputRightElement>
                    <IconButton
                      bg="transparent"
                      _hover={{ bg: 'transparent' }}
                      variant="ghost"
                      color="ims-linebox"
                      aria-label={
                        isPasswordOpen ? 'Mask password' : 'Reveal password'
                      }
                      icon={
                        isPasswordOpen ? (
                          <BsFillEyeFill />
                        ) : (
                          <BsFillEyeSlashFill />
                        )
                      }
                      onClick={onPasswordToggle}
                    />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage fontSize="xs">
                  {formState.errors?.password?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="repassword"
                isInvalid={!!formState.errors?.repassword}
                errortext={formState.errors?.repassword?.message}
              >
                <Box>
                  <FormLabel>Konfirmasi Kata Sandi Baru*</FormLabel>
                </Box>
                <InputGroup>
                  <Input
                    placeholder="Mohon isi kata sandi Anda"
                    type={isPasswordOpen ? 'text' : 'password'}
                    {...register('repassword')}
                  />

                  <InputRightElement>
                    <IconButton
                      bg="transparent"
                      _hover={{ bg: 'transparent' }}
                      variant="ghost"
                      color="ims-linebox"
                      aria-label={
                        isPasswordOpen ? 'Mask password' : 'Reveal password'
                      }
                      icon={
                        isPasswordOpen ? (
                          <BsFillEyeFill />
                        ) : (
                          <BsFillEyeSlashFill />
                        )
                      }
                      onClick={onPasswordToggle}
                    />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage fontSize="xs">
                  {formState.errors?.repassword?.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                bg="ims-primary"
                color="white"
                _hover={{ bg: 'button-hover' }}
                fontWeight="bold"
              >
                Simpan
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </React.Fragment>
  );
};

export default ResetPasswordPage;
