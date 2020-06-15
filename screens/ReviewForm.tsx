import React, { useEffect } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { globalStyles } from "../styles/global";
import * as yup from "yup";

export interface ReviewFormProps {
  addReview: any;
}

type FormData = {
  title: string;
  review: string;
  rating: number;
};

const schema = yup.object().shape({
  title: yup.string().defined(),
  review: yup.string().defined(),
  rating: yup.number().defined().integer().min(1).max(5)
});

const defaultValues = {
  title: "",
  review: "",
  rating: 1
};

const ReviewForm: React.SFC<ReviewFormProps> = ({ addReview }) => {
  const { register, setValue, handleSubmit, errors, reset, watch } = useForm<
    FormData
  >({
    validationSchema: schema,
    mode: "onBlur",
    defaultValues
  });

  const values = watch();

  const onSubmit = (data: object) => {
    addReview(data);
    reset(defaultValues);
  };

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
        value={values.title}
        style={globalStyles.input}
      />
      {errors.title && <Text>This is required</Text>}

      <TextInput
        placeholder="Review"
        onChangeText={text => setValue("review", text)}
        value={values.review}
        style={globalStyles.input}
      />
      {errors.title && <Text>This is required</Text>}

      <TextInput
        placeholder="Rating (1-5)"
        onChangeText={text => setValue("rating", Number(text))}
        value={values.rating.toString()}
        style={globalStyles.input}
        keyboardType="numeric"
      />
      {errors.rating && <Text>This is required and has to be a number</Text>}

      <Button color="orange" title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default ReviewForm;

const styles = StyleSheet.create({
  form: {
    paddingVertical: 20
  }
});
