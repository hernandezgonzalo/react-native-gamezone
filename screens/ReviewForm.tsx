import React, { useEffect } from "react";
import { Text, View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { globalStyles } from "../styles/global";
import * as yup from "yup";

export interface ReviewFormProps {}

type FormData = {
  title: string;
  review: string;
  rating: number;
};

const schema = yup.object().shape({
  title: yup.string().defined(),
  review: yup.string(),
  rating: yup.number().defined().integer().min(1).max(5)
});

const ReviewForm: React.SFC<ReviewFormProps> = () => {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>({
    validationSchema: schema,
    mode: "onBlur"
  });

  const onSubmit = (data: object) =>
    Alert.alert("Form Data", JSON.stringify(data));

  useEffect(() => {
    register({ name: "title" });
    register({ name: "review" });
    register({ name: "rating" });
  }, [register]);

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Title"
        onChangeText={text => setValue("title", text, true)}
        style={globalStyles.input}
      />
      {errors.title && <Text>This is required</Text>}

      <TextInput
        placeholder="Review"
        onChangeText={text => setValue("review", text)}
        style={globalStyles.input}
      />

      <TextInput
        placeholder="Rating (1-5)"
        onChangeText={text => setValue("rating", Number(text))}
        style={globalStyles.input}
        keyboardType="numeric"
      />
      {errors.rating && <Text>This is required and has to be a number</Text>}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default ReviewForm;

const styles = StyleSheet.create({
  form: {
    paddingVertical: 20
  }
});
