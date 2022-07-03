import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image.") // Images field is required
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    icon: "floor-lamp",
    backgroundColor: "red",
  },
  { label: "Cars", value: 2, icon: "car", backgroundColor: "orange" },
  { label: "Cameras", value: 3, icon: "camera", backgroundColor: "yellow" },
  { label: "Games", value: 4, icon: "cards-outline", backgroundColor: "green" },
  {
    label: "Clothing",
    value: 5,
    icon: "shoe-heel",
    backgroundColor: "lightblue",
  },
  {
    label: "Sports",
    value: 6,
    icon: "basketball",
    backgroundColor: "blue",
  },
  {
    label: "Movies & Music",
    value: 7,
    icon: "music",
    backgroundColor: "red",
  },
  {
    label: "Books",
    value: 8,
    icon: "book-open-variant",
    backgroundColor: "purple",
  },
  { label: "Others", value: 9, icon: "application", backgroundColor: "gray" },
];

export default function ListingEditScreen() {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});