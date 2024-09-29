import {
  Image,
  VStack,
  Text,
  Box,
  Input,
  Button,
  Divider,
  ScrollView,
} from "native-base";
import Logo from "../assets/Logo.png";
import { Title } from "@/components/Title";
import { TouchableOpacity } from "react-native";
import clientTestimonials from "../data/clientTestimonials";
export default function Principal() {
  return (
    <ScrollView p={10}>
      <Image source={Logo} alt="logo Voll" />
      <Title color="blue.500">Boas-vindas</Title>

      <Box
        alignSelf="center"
        shadow={3}
        m={5}
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        w="90%"
      >
        <Input
          placeholder="Digite a especialidade "
          bgColor="gray.100"
          shadow={3}
          mb={4}
          borderRadius="lg"
          type="password"
        />
        <Input
          placeholder="Digite sua localização"
          bgColor="gray.100"
          shadow={3}
          borderRadius="lg"
          type="password"
        />
        <Button w="100%" bg="blue.800" mt={4} borderRadius="lg">
          Buscar
        </Button>
      </Box>

      <Title color="blue.800" mb={10}>
        Depoimentos
      </Title>
      {clientTestimonials.map((clientTestimonial, index) => (
        <VStack key={index}>
          <Text alignSelf="center" color="gray.300">
            {clientTestimonial.testimonial}
          </Text>
          <Text fontWeight={700} alignSelf="center" color="gray.500" mt={2}>
            {clientTestimonial.name}, {clientTestimonial.age} anos,{" "}
            {clientTestimonial.city}/{clientTestimonial.state}
          </Text>

          <Divider mt={5} mb={5} />
        </VStack>
      ))}
    </ScrollView>
  );
}
