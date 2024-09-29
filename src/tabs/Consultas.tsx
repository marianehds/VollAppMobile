import { Card } from "@/components/Card";
import { Title } from "@/components/Title";
import { VStack, Text, ScrollView, Button } from "native-base";
import doctorsData from "../data/doctorsData";

export default function Consultas() {
  return (
    <ScrollView p={5}>
      <Title color="blue.500">Minhas consultas</Title>
      <Button w="100%" bg="blue.800" mt={4} borderRadius="lg" mb={10} >
        Agendar outra consulta
      </Button>

      <Text color="blue.500" fontWeight={700} mb={6}>
        Próximas consultas
      </Text>

      {doctorsData.filter((doctor)=> doctor.consultaAtiva).map((doctors) => (
        <Card
          consultaAtiva={doctors.consultaAtiva}
          data={doctors.data}
          especialidade={doctors.especialidade}
          foto={doctors.image}
          medico={doctors.medico}
        />
      ))}

      <Text color="blue.500" fontWeight={700} mb={6}>
        Consultas Passadas
      </Text>

      {doctorsData.filter((doctor) => !doctor.consultaAtiva).map((doctors) => (
        <Card
          consultaAtiva={doctors.consultaAtiva}
          data={doctors.data}
          especialidade={doctors.especialidade}
          foto={doctors.image}
          medico={doctors.medico}
        />
      ))}
    </ScrollView>
  );
}
