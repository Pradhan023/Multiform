import { Field, ErrorMessage } from 'formik';
import { TextField } from '@mui/material';

const EducationForm = () => (
  <>
    <Field name="degree" as={TextField} label="Degree" fullWidth margin="normal" />
    <ErrorMessage className="text-red-500" name="degree" component="div" />
    
    <Field name="university" as={TextField} label="University/College" fullWidth margin="normal" />
    <ErrorMessage className="text-red-500" name="university" component="div" />
    
    <Field name="graduationYear" as={TextField} label="Graduation Year" type="number" fullWidth margin="normal" />
    <ErrorMessage className="text-red-500" name="graduationYear" component="div" />
  </>
);

export default EducationForm;
