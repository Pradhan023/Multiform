import { Field, ErrorMessage } from 'formik';
import { TextField } from '@mui/material';

const ExperienceForm = () => (
  <>
    <Field name="yearsOfExperience" as={TextField} label="Years of Experience" type="number" fullWidth margin="normal" />
    <ErrorMessage className="text-red-500" name="yearsOfExperience" component="div" />
    
    <Field name="projects" as={TextField} label="Projects & Experience" multiline rows={4} fullWidth margin="normal" />
    <ErrorMessage className="text-red-500" name="projects" component="div" />
  </>
);

export default ExperienceForm;
