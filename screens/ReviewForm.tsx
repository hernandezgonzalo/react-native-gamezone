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
  rating: string;
};

const reviewSchema = yup.object().shape({
  title: yup.string().required(),
  review: yup.string().required().min(4),
  rating: yup
    .string()
    .required()
    .test(
      "is-num-1-5",
      "rating must be a number (1-5)",
      val => parseInt(val) > 0 && parseInt(val) < 6
    )
});

const defaultValues = {
  title: "",
  review: "",
  rating: ""
};

const ReviewForm: React.SFC<ReviewFormProps> = ({ addReview }) => {
  const { register, setValue, handleSubmit, errors, reset, watch } = useForm<
    FormData
  >({
    validationSchema: reviewSchema,
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
      <Text style={globalStyles.error}>{errors.title?.message}</Text>

      <TextInput
        placeholder="Review"
        onChangeText={text => setValue("review", text)}
        value={values.review}
        style={globalStyles.input}
      />
      <Text style={globalStyles.error}>{errors.review?.message}</Text>

      <TextInput
        placeholder="Rating (1-5)"
        onChangeText={text => setValue("rating", text)}
        value={values.rating.toString()}
        style={globalStyles.input}
        keyboardType="numeric"
      />
      <Text style={globalStyles.error}>{errors.rating?.message}</Text>

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
