import { useState } from "react";

// props del formulario
interface FormValues {
  codigo: string;
  nombre: string;
  categoria: string;
  cantidad: string;
  precio: string;
  fechaIngreso: string;
  observaciones: string;
}

// props para posibles errores
interface FormErrors {
  codigo?: string;
  nombre?: string;
  categoria?: string;
  cantidad?: string;
  precio?: string;
  fechaIngreso?: string;
}

export const useFormulario = () => {

  // valores del formulario
  const [values, setValues] = useState<FormValues>({
    codigo: "",
    nombre: "",
    categoria: "",
    cantidad: "",
    precio: "",
    fechaIngreso: "",
    observaciones: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // manejo de cambios
  const handleChange = (name: keyof FormValues, value: string) => {
    setValues({
      ...values,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (name: keyof FormValues, value: string) => {
    let error = "";

    switch (name) {
      case "codigo":
        if (!value) {
          error = "Porfavor ingrese un codigo";
        } else if (value.length > 10) {
          error = "El codigo no puede tener mas de 10 caraacteres";
        }
        break;
      case "nombre":
        if (!value) {
          error = "Porfavor ingrese un numbre";
        } else if (value.length < 3) {
          error = "El nombre debe tener al menos 3 caracteres";
        }
        break;
      case "categoria":
        if (value = "") {
          error = "Porfavor ingrese una categoria";
        }
        break;
      case "cantidad":
        if (!value) {
          error = "Porfavor ingrese una cantidad";
        } else if (isNaN(Number(value)) || Number(value) < 1) {
          error = "La cantidad debe ser un entero positivo";
        }
        break;
      case "precio":
        if (!value) {
          error = "Porfavorr ingrese un precio";
        } else if (isNaN(Number(value)) || Number(value) <= 0) {
          error = "El precio debe ser positivo";
        }
        break;
      case "fechaIngreso":
        if (!value) {
          error = "Porfavor ingrese una fecha";
        }
        break;
      case "observaciones":
        if (!value) {
          error = "Porfavor ingrese una observacion";
        } 
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  // verificar el formulario
  const isValid = () => {
    return (
      Object.values(errors).every((error) => !error) &&
      Object.values(values).every((value) => value !== "")
    );
  };

  // envio del formulario con el settimeout de 2 segundos
  const handleSubmit = () => {
    if (isValid()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        alert("Producto registrado :)");
      }, 2000);
    }
  };

  return {
    // properties
    values,
    errors,
    isSubmitting,

    // methods
    handleChange,
    handleSubmit,
    isValid,
  };
};
