import { Field, ErrorMessage } from 'formik';
import { TextField } from '@mui/material';

const PersonalInfoForm = () => (
  <>
    <Field name="fullName" as={TextField} label="Full Name" fullWidth margin="normal" />
    <ErrorMessage className="text-red-500" name="fullName" component="div" />
    
    <Field name="email" as={TextField} label="Email" type="email" fullWidth margin="normal" />
    <ErrorMessage className="text-red-500" name="email" component="div" />
    
    <Field name="phoneNumber" as={TextField} label="Phone Number" fullWidth margin="normal" />
    <ErrorMessage className="text-red-500" name="phoneNumber" component="div" />
  </>
);

export default PersonalInfoForm;
