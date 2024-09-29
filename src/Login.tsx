import {
  Image,
  VStack,
  Text,
  FormControl,
  Box,
  Input,
  Button,
  Link,
} from "native-base";
import Logo from "./assets/Logo.png";
import { Touchable, TouchableOpacity } from "react-native";
import { Title } from "@/components/Title";
export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="logo Voll" />
      <Title>Faça login em sua conta</Title>
      <Box>
        <FormControl mt={3}>
          <FormControl.Label>Email</FormControl.Label>
        </FormControl>
        <Input
          placeholder="Insira seu email"
          w="100%"
          bgColor="gray.100"
          shadow={3}
          borderRadius="lg"
        />

        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
        </FormControl>
        <Input
          placeholder="Insira sua senha"
          w="100%"
          bgColor="gray.100"
          shadow={3}
          borderRadius="lg"
          type="password"
        />
      </Box>

      <Button w="100%" bg="blue.800" mt={10} borderRadius="lg" onPress={() => navigation.navigate('Tabs')}>
        Entrar
      </Button>

      <Link href="https://www.google.com" mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500">Faça seu cadastro</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
