import {
  TextField,
  Radio,
  RadioGroup,
  Checkbox,
  FormControlLabel,
  Button,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
  Select,
  MenuItem,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const PersonalInfoForm = () => {
  const initialValues = {
    name: "",
    email: "",
    age: 0,
    gender: "",
    educationLevel: "", // Added educationLevel field
    interests: [],
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    age: Yup.number()
      .required("Age is required")
      .positive("Age must be a positive number")
      .integer("Age must be an integer"),
    gender: Yup.string().required("Gender is required"),
    educationLevel: Yup.string().required("Education level is required"), // Validation for educationLevel
    interests: Yup.array().min(1, "At least one interest must be selected"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    alert(values);
    // You can handle form submission here, like sending data to backend
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "800px",
            justifyItems: "center",
            margin: "20px",
            alignItems: "center",
          }}
        >
          <Field
            as={TextField}
            name="name"
            label="Name"
            fullWidth
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />

          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />

          <Field
            as={TextField}
            name="age"
            label="Age"
            fullWidth
            type="number"
            error={touched.age && Boolean(errors.age)}
            helperText={touched.age && errors.age}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
          />

          <FormControl
            fullWidth
            error={touched.gender && Boolean(errors.gender)}
          >
            <FormLabel component="legend">Gender</FormLabel>
            <Field as={RadioGroup} name="gender">
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </Field>
            {touched.gender && <FormHelperText>{errors.gender}</FormHelperText>}
          </FormControl>

          <FormControl
            fullWidth
            error={touched.educationLevel && Boolean(errors.educationLevel)}
          >
            <FormLabel component="legend">Education Level</FormLabel>
            <Select
              name="educationLevel"
              value={values.educationLevel}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <MenuItem value="">Select Education Level</MenuItem>
              <MenuItem value="school">School</MenuItem>
              <MenuItem value="college">College</MenuItem>
              <MenuItem value="graduate">Graduate</MenuItem>
              <MenuItem value="postgraduate">Post Graduate</MenuItem>
            </Select>
            {touched.educationLevel && (
              <FormHelperText>{errors.educationLevel}</FormHelperText>
            )}
          </FormControl>

          <FormControl
            fullWidth
            error={touched.interests && Boolean(errors.interests)}
          >
            <FormLabel component="legend">Interests</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Field
                    as={Checkbox}
                    type="checkbox"
                    name="interests"
                    value="sports"
                  />
                }
                label="Sports"
              />
              <FormControlLabel
                control={
                  <Field
                    as={Checkbox}
                    type="checkbox"
                    name="interests"
                    value="music"
                  />
                }
                label="Music"
              />
              <FormControlLabel
                control={
                  <Field
                    as={Checkbox}
                    type="checkbox"
                    name="interests"
                    value="reading"
                  />
                }
                label="Reading"
              />
            </FormGroup>
            {touched.interests && (
              <FormHelperText>{errors.interests}</FormHelperText>
            )}
          </FormControl>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalInfoForm;
