import { Title } from "@/components/Title";
import {
  VStack,
  Text,
  ScrollView,
  Button,
  Input,
  Box,

} from "native-base";
import doctorsData from "../data/doctorsData";
import { Card } from "@/components/Card";

export default function Explorar() {
  return (
    <ScrollView>
      <Box
        alignSelf="center"
        shadow="2"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        borderRadius="1px"
        w="90%"
        p={5}
        mt={5}
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

      <Title color="blue.500">Resultado da busca</Title>

      {doctorsData.map((doctors) => (
        <Card
          especialidade={doctors.especialidade}
          foto={doctors.image}
          medico={doctors.medico}
          search
        />
      ))}
    </ScrollView>
  );
}
