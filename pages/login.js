import React, { useState } from 'react';

import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useBoolean,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { loginSchema } from '../utils/schema/AuthenticationSchema';
import PindadLogo from '../components/core/pindadlogo';
import useAxios from '../components/hooks/useAxios';
import useAuthUserStore from '../store/useAuthUserStore';
import useToastNetworkError from '../components/hooks/useToastNetworkError';
import PindadLogoWhite from '../components/core/pindadlogowhite';
import { getServerSidePropsWithNoAuth } from '../utils/getServerSidePropsWithAuth';
import setDetectedDevices from '../utils/setDetectedDevices';

const LoginPage = () => {
  const router = useRouter();

  const [errors, setErrors] = useState();
  const [isLoading, setIsloading] = useBoolean();
  const showToastNetworkError = useToastNetworkError();

  const { isOpen: isPasswordOpen, onToggle: onPasswordToggle } =
    useDisclosure();

  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { deviceId, deviceTypes } = setDetectedDevices();

  const setCreateToken = useAuthUserStore((state) => state.setCreateToken);
  const setLogin = useAuthUserStore((state) => state.setLogin);

  const [, createToken] = useAxios(
    {
      url: '/create-token',
      method: 'POST',
    },
    { manual: true }
  );

  const [, makeLogin] = useAxios(
    { url: '/auth/login', method: 'POST' },
    { manual: true }
  );

  const onSubmit = async (data) => {
    setIsloading.on();
    const create = await createToken({
      data: {
        name: 'ims-services',
        device_id: deviceId,
        device_type: deviceTypes,
        secret_key: '1m5-servic3',
      },
    });
    setCreateToken(create.data.data.token);

    await makeLogin({ data })
      .then((response) => {
        const { data: responseData } = response.data;
        setLogin(
          responseData[0].id,
          responseData[0].username,
          responseData[0].is_active
        );
        router.push('/');
      })
      .catch((error) => {
        setIsloading.off();

        if (error.response) {
          setErrors(error.response.data.message);
        } else showToastNetworkError();
      });
  };

  return (
    <React.Fragment>
      <NextSeo title="Login" titleTemplate="%s | IMS" />
      <Flex flexDirection="row" w="100wh" h="100vh">
        <Box
          display={{ base: 'none', md: 'none', xl: 'block' }}
          h="full"
          py="20px"
          px="60px"
          w="50%"
          bgGradient="linear-gradient(to right top, #010080, #461174)"
          boxShadow={'0px 0px 6px 1px rgba(0, 0, 0, 0.25);'}
        >
          <Flex
            position="relative"
            direction="column"
            justify="center"
            h="full"
          >
            <Box position="absolute" top={0} left={0}>
              <PindadLogoWhite multiplySize={1} />
            </Box>
            <Text fontWeight="bold" color="white" fontSize="6xl">
              Inventory
            </Text>
            <Text fontWeight="bold" color="white" fontSize="6xl">
              Monitoring
            </Text>
            <Text fontWeight="bold" color="white" fontSize="6xl">
              System
            </Text>
          </Flex>
        </Box>
        <Flex
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          w={{ base: 'full', md: 'full', xl: '50%' }}
          h="full"
          position="relative"
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Flex
            display={{ xl: 'none' }}
            position="absolute"
            top={0}
            py="5"
            justify="center"
            w="full"
          >
            <Center>
              <PindadLogo multiplySize={0.8} />
            </Center>
          </Flex>
          <Box
            w="full"
            p={{ base: '25px', md: '120px', xl: '157px' }}
            rounded="sm"
          >
            <Stack spacing="6">
              <Box>
                <Text
                  bgClip="text"
                  color={useColorModeValue('ims-primary', 'white')}
                  fontSize={{ base: '2xl', md: '4xl' }}
                  fontWeight="bold"
                >
                  Login
                </Text>
              </Box>
              {errors && (
                <Alert status="error" variant="left-accent">
                  <AlertIcon />
                  {errors}
                </Alert>
              )}
              <FormControl
                id="username"
                isInvalid={!!formState.errors?.username}
                errortext={formState.errors?.username?.message}
              >
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  placeholder="Username"
                  {...register('username')}
                />
                <FormErrorMessage fontSize="xs">
                  {formState.errors?.username?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                id="password"
                isInvalid={!!formState.errors?.password}
                errortext={formState.errors?.password?.message}
              >
                <Box>
                  <FormLabel>Password</FormLabel>
                </Box>
                <InputGroup>
                  <Input
                    placeholder="Password"
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
              {/* <Box textAlign="end">
                <NextLink href="/reset-password" passHref>
                  <Link size="button-bold" textAlign="end">
                    Lupa Password?
                  </Link>
                </NextLink>
              </Box> */}
              <Button
                type="submit"
                bg="ims-primary"
                color="white"
                transitionProperty="common"
                transitionDuration="normal"
                _hover={{
                  bgGradient:"linear-gradient(to right top, #010080, #461174)",
                  transform: 'scale(1.01)',
                }}
                fontWeight="bold"
                isLoading={isLoading}
              >
                Masuk
              </Button>
            </Stack>
          </Box>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export const getServerSideProps = async (context) =>
  getServerSidePropsWithNoAuth(context);

export default LoginPage;
