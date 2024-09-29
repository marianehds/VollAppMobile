import { Text, ITextProps, VStack, Avatar, Button } from "native-base";
import { ReactNode } from "react";
import profileDefault from "../src/assets/profileDefault.png";
import { ImageSourcePropType } from "react-native";
interface CardProps extends ITextProps {
  consultaAtiva?: boolean;
  medico: string;
  especialidade: string;
  data?: string;
  foto: ImageSourcePropType;
  search?: boolean;
}

export function Card({
  consultaAtiva,
  medico,
  especialidade,
  data,
  foto,
  search,
}: CardProps) {
  return (
    <VStack
      w="100%"
      borderRadius="lg"
      shadow={2}
      p={5}
      bg={consultaAtiva || search ? "#fff" : "blue.100"}
      mb={6}
    >
      <VStack flexDirection="row" alignItems="center">
        <Avatar size="xl" source={foto} mt={5} />
        <VStack flexDirection="column" pl={4}>
          <Text fontWeight="700" color="gray.500">
            {medico}
          </Text>
          <Text color="gray.500">{especialidade}</Text>
          {data && <Text color="gray.500">{data}</Text>}
        </VStack>
      </VStack>
      <Button w="100%" bg="blue.800" mt={4} borderRadius="lg">
        {consultaAtiva ? "Cancelar" : "Agendar Consulta"}
      </Button>
    </VStack>
  );
}
