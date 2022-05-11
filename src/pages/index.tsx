import { Button, Flex, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório.').email('E-mail inválido.'),
  password: yup.string().required('Senha obrigatória.'),
})

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const { isSubmitting, errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setInterval(resolve, 2000));
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack>
          
          <Input
            name="email" 
            type="email" 
            label="E-mail"
            error={errors.email}
            {...register('email')}
          />

          <Input
            name="password" 
            type="password" 
            label="Senha"
            error={errors.password} 
            {...register('password')}
          />
        </Stack>
        <Button 
          type="submit"  
          mt="6" 
          colorScheme="pink" 
          size="lg"
          isLoading={isSubmitting} 
        >
            Entrar
          </Button>
      </Flex>
    </Flex>
  )
}
