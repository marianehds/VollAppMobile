const sectionData = [
  {
    id: 1,
    titulo: "Insira alguns dados básicos",
    component: "input",
    entradaTexto: [
      {
        id: 1,
        label: "Nome",
        placeholder: "Digite seu nome completo",
      },
      {
        id: 2,
        label: "Email",
        placeholder: "Digite seu email",
      },
      {
        id: 3,
        label: "Crie uma senha",
        placeholder: "Digite sua senha",
        type: "password",
      },
      {
        id: 4,
        label: "Repita a senha",
        placeholder: "Repita sua senha",
        type: "password",
      },
    ],
  },
  {
    id: 2,
    titulo: "Agora, mais alguns dados sobre você:",
    component: 'input',
    entradaTexto: [
      {
        id: 1,
        label: "CEP",
        placeholder: "Digite seu CEP",
      },
      {
        id: 2,
        label: "Endereço",
        placeholder: "Digite seu endereço",
      },
      {
        id: 3,
        label: "Número",
        placeholder: "Digite o número",
      },
      {
        id: 4,
        label: "Complemento",
        placeholder: "Digite o complemento (opcional)",
      },
      {
        id: 5,
        label: "Telefone",
        placeholder: "Digite seu telefone",
      },
    ],
  },
  {
    id: 3,
    titulo: "Para finalizar, qual seu plano de saúde?",
    component: 'checkbox',
    entradaTexto: [
      {
        id: 1,
        label: "Selecione os planos:",
        options: [
          "Bradesco",
          "Sulamérica",
          "Unimed",
          "Amil",
          "Porto Seguro",
          "Golden Cross",
          "SulAmérica",
          "Notre Dame",
        ],
      },
    ],
  },
];

export default sectionData;
