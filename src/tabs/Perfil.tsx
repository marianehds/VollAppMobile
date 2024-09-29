import { Title } from "@/components/Title";
import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import profileDefault from "../assets/profileDefault.png";

export default function Perfil() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Title color="blue.500">Meu Perfil</Title>

        <Avatar size="xl" source={profileDefault} mt={5} />

        <Title color="blue.500">Informações pessoais</Title>
        <Title fontSize="lg" mb={1}>
          Name
        </Title>
        <Text>Data Nasc</Text>
        <Text>Cidade</Text>

        <Divider mt={5} />

        <Title color="blue.500" mb={1}>
          Histórico médico
        </Title>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>
  );
}
