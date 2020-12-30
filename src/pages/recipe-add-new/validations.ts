import {
  createFormValidation,
  Validators,
  ValidationSchema,
} from "@lemoncode/fonk";
import { hasItems } from "../../common/validations/hasItems";

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    imgUrl: [Validators.required],
    ingredients: [
      {
        validator: hasItems,
        customArgs: { field: "ingredients" },
        message: "Should has one or more ingredients",
      },
    ],
    description: [
      {
        validator: Validators.minLength,
        customArgs: { length: 50 },
        message: "Description must have 50 characters at least",
      },
      {
        validator: Validators.required,
      },
    ],
  },
};

export const validations = createFormValidation(validationSchema);
