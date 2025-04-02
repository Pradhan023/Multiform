import { Field, ErrorMessage } from "formik";
import { TextField, Typography } from "@mui/material";

const TechnicalSkillsForm = () => (
  <>
    <Field
      name="programmingLanguages"
      as={TextField}
      label="Programming Languages"
      multiline
      rows={4}
      fullWidth
      margin="normal"
    />
    <ErrorMessage
      className="text-red-500"
      name="programmingLanguages"
      component="div"
    />
    <Typography className="text-gray-500" variant="caption">
      Separate multiple languages with commas
    </Typography>

    <Field
      name="frameworksAndLibraries"
      as={TextField}
      label="Frameworks and Libraries"
      multiline
      rows={4}
      fullWidth
      margin="normal"
    />
    <ErrorMessage
      className="text-red-500"
      name="frameworksAndLibraries"
      component="div"
    />
    <Typography className="text-gray-500" variant="caption">
      Separate multiple frameworks with commas
    </Typography>

    <Field
      name="otherTechnicalSkills"
      as={TextField}
      label="Other Technical Skills"
      multiline
      rows={4}
      fullWidth
      margin="normal"
    />
    <ErrorMessage
      className="text-red-500"
      name="otherTechnicalSkills"
      component="div"
    />
  </>
);

export default TechnicalSkillsForm;
