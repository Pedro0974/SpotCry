// hooks/useForm

import { useState } from "react";
export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const cleanFields = () => {
    setValues(initialValues)
   }
  return { values, handleInputChange, cleanFields };
};
