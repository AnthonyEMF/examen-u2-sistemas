import React from "react";
import { View, Text, TextInput, TouchableOpacity, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFormulario } from "@/presentation/hooks/useFormulario";

const Index = () => {

  // declarar propiedades y metodos de nuestro hook
  const { 
    values, 
    errors, 
    isSubmitting, 
    handleChange, 
    handleSubmit, 
    isValid 
  } = useFormulario();

  // propiedades para el manejo del datetiempicker
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const onDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      handleChange("fechaIngreso", selectedDate.toISOString().split("T")[0]);
    }
  };

  return (
    <View className="bg-slate-700 flex flex-1">

      {/* Header */}
      <View className="mb-2">
        <Text className="text-white text-2xl text-center mt-20 font-bold">
          Examen II - Anthony Miranda
        </Text>
        <Text className="text-white text-2xl text-center mt-2 font-semibold">
          App de Gestion de Inventario
        </Text>
      </View>

      {/* Formulario */}
      <View className="px-6 gap-1 mt-4">

        {/* codigo */}
        <Text className="text-white font-medium mb-1">Codigo:</Text>
        <TextInput
          className={`bg-white p-2 border ${
            errors.codigo ? "border-red-500" : "border-gray-300"
          } rounded mb-2`}
          value={values.codigo}
          onChangeText={(text) => handleChange("codigo", text)}
          maxLength={10}
        />
        {errors.codigo && (
          <Text className="text-red-500 text-sm mb-2">{errors.codigo}</Text>
        )}

        {/* nombre */}
        <Text className="text-white font-medium mb-1">Nombre:</Text>
        <TextInput
          className={`bg-white p-2 border ${
            errors.nombre ? "border-red-500" : "border-gray-300"
          } rounded mb-2`}
          value={values.nombre}
          onChangeText={(text) => handleChange("nombre", text)}
        />
        {errors.nombre && (
          <Text className="text-red-500 text-sm mb-2">{errors.nombre}</Text>
        )}

        {/* selector de categoria */}
        <Text className="text-white font-medium mb-1">Categoria:</Text>
        <View className="bg-white px-1 mb-2 rounded-md">
          <Picker
            selectedValue={values.categoria}
            onValueChange={(itemValue) => handleChange("categoria", itemValue)}
            className="mb-2"
          >
            <Picker.Item label="Seleccione una categoría" value="" />
            <Picker.Item label="Categoria 1" value="Categoria 1" />
            <Picker.Item label="Categoria 2" value="Categoria 2" />
            <Picker.Item label="Categoria 3" value="Categoria 3" />
          </Picker>
        </View>
        {errors.categoria && (
          <Text className="text-red-500 text-sm mb-2">{errors.categoria}</Text>
        )}

        {/* cantidad */}
        <Text className="text-white font-medium mb-1">Cantidad:</Text>
        <TextInput
          className={`bg-white p-2 ${
            errors.cantidad ? "border-red-500" : "border-gray-300"
          } rounded mb-2`}
          value={values.cantidad}
          onChangeText={(text) => handleChange("cantidad", text)}
          keyboardType="numeric"
        />
        {errors.cantidad && (
          <Text className="text-red-500 text-sm mb-2">{errors.cantidad}</Text>
        )}

        {/* precio */}
        <Text className="text-white font-medium mb-1">Precio:</Text>
        <TextInput
          className={`bg-white p-2 border ${
            errors.precio ? "border-red-500" : "border-gray-300"
          } rounded mb-2`}
          value={values.precio}
          onChangeText={(text) => handleChange("precio", text)}
          keyboardType="numeric"
        />
        {errors.precio && (
          <Text className="text-red-500 text-sm mb-2">{errors.precio}</Text>
        )}

        {/* fecha */}
        <Text className="text-white font-medium mb-1">Fecha:</Text>
        <TouchableOpacity
          className={`bg-white p-2 border ${
            errors.fechaIngreso ? "border-red-500" : "border-gray-300"
          } rounded mb-2`}
          onPress={() => setShowDatePicker(true)}
        >
          <Text>{values.fechaIngreso || "Seleccione una fecha"}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
        {errors.fechaIngreso && (
          <Text className="text-red-500 text-sm mb-2">
            {errors.fechaIngreso}
          </Text>
        )}

        {/* observaciones */}
        <Text className="text-white font-medium mb-1">Observaciones</Text>
        <TextInput
          className="bg-white p-2 border border-gray-300 rounded mb-4"
          value={values.observaciones}
          onChangeText={(text) => handleChange("observaciones", text)}
          multiline
        />

        {/* boton de envio */}
        <Pressable
          className="bg-green-500 py-6 my-2 mt-5 rounded-md"
          onPress={handleSubmit}
          disabled={!isValid() || isSubmitting}
        >
          <Text className="text-white text-2xl font-bold text-center">
            {isSubmitting ? "Registrando..." : "Registrar"}
          </Text>
        </Pressable>
        
      </View>
    </View>
  );
};

export default Index;
