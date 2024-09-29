import { Input, IInputProps, FormControl, Text } from "native-base";
import { ReactNode } from "react";

interface InputBoxProps extends IInputProps {
  label: string;
  colorLabel: string;
}

export function InputBox({
  placeholder,
  label,
  type,
  colorLabel,
  fontWeightLabel,
  ...rest
}: InputBoxProps) {
  return (
    <>
      <FormControl mt={3}>
        <Text color={colorLabel} fontWeight={fontWeightLabel}>{label}</Text>
      </FormControl>
      <Input
        aria-label={label}
        placeholder={placeholder}
        w="100%"
        bgColor="gray.100"
        shadow={3}
        borderRadius="lg"
        type={type}
        {...rest}
      />
    </>
  );
}
