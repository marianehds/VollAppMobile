import { Image, VStack, Box, Button, Text, Checkbox } from "native-base";
import Logo from "./assets/Logo.png";
import { Title } from "@/components/Title";
import section from "./data/sectionsData";
import { InputBox } from "@/components/InputBox";
import { SecaoContext } from "./SecaoContext";
import { useContext } from "react";

export default function Register() {
  const secaoContext = useContext(SecaoContext);

  const { numSecao, setNumeroSecao } = secaoContext;

  function avancarSecao() {
    setNumeroSecao(numSecao < section.length - 1 ? numSecao + 1 : numSecao);
  }

  function retornarSecao() {
    setNumeroSecao(numSecao > 0 ? numSecao - 1 : numSecao);
  }

  return (
    <VStack flex={1} alignItems="start" p={5}>
      <Image source={Logo} alt="logo Voll" alignSelf="center" />
      <Title>{section[numSecao].titulo}</Title>
      <Box>
        {section[numSecao].entradaTexto.map((entrada) => {
          return (
            <>
              {section[numSecao].component === "input" ? (
                <InputBox
                  placeholder={entrada.placeholder}
                  label={entrada.label}
                  type={entrada.type}
                  key={entrada.id}
                  fontWeightLabel="bold"
                  colorLabel="blue.800"
                />
              ) : (
                <VStack key={entrada.id} space={1}>
                  <Text color="blue.800" fontWeight="bold" mt={10}>
                    {entrada.label}
                  </Text>
                  {entrada.options.map((option, index) => (
                    <Checkbox key={index} value={option}>
                      {option}
                    </Checkbox>
                  ))}
                </VStack>
              )}
            </>
          );
        })}
      </Box>

      <Button
        w="100%"
        bg="blue.800"
        mt={10}
        borderRadius="lg"
        onPress={() => avancarSecao()}
      >
        Avançar
      </Button>
      {numSecao > 0 && (
        <Button
          w="100%"
          bg="gray.400"
          mt={5}
          borderRadius="lg"
          onPress={() => retornarSecao()}
        >
          Voltar
        </Button>
      )}
    </VStack>
  );
}
