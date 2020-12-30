import { FieldValidationFunctionSync } from "@lemoncode/fonk";

const hasItems: FieldValidationFunctionSync = ({ value, message }) => {
  const isValid = Array.isArray(value) && value.length > 0;
  return {
    type: "ARRAY_HAS_ITEMS",
    succeeded: isValid,
    message: isValid ? "" : (message as string),
  };
};

export { hasItems };
