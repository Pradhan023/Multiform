import { Field, ErrorMessage, useFormikContext, FormikValues } from 'formik';
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  FormHelperText,
  TextField,
} from '@mui/material';


type Props = {
    values: FormikValues;
}

const InterviewPreferencesForm = () => {
  const { values }:Props = useFormikContext();

  return (
    <div className='flex flex-col'>
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Preferred Roles</FormLabel>
        <FormGroup className='flex justify-between'>
          {['Frontend Developer', 'Mobile Developer','Full Stack Developer', 'Backend Developer'].map((role) => (
            <FormControlLabel 
              key={role}
              control={
                <Field
                  as={Checkbox}
                  name="preferredRoles"
                  value={role}
                  checked={values.preferredRoles?.includes(role)}
                />
              }
              label={role}
            />
          ))}
        </FormGroup>
        <ErrorMessage className='text-red-500' name="preferredRoles" component={FormHelperText} />
      </FormControl>

      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Available Days</FormLabel>
        <FormGroup>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
            <FormControlLabel
              key={day}
              control={
                <Field
                  as={Checkbox}
                  name="availableDays"
                  value={day}
                  checked={values.availableDays?.includes(day)}
                />
              }
              label={day}
            />
          ))}
        </FormGroup>
        <ErrorMessage className='text-red-500' name="availableDays" component={FormHelperText} />
      </FormControl>

      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Preferred Time</FormLabel>
        <Field as={RadioGroup} name="preferredTime">
          {['Morning (9am-12pm)', 'Afternoon (12pm-5pm)', 'Evening (5pm-9pm)'].map((time) => (
            <FormControlLabel key={time} value={time} control={<Radio />} label={time} />
          ))}
        </Field>
        <ErrorMessage name="preferredTime" component={FormHelperText} />
      </FormControl>
      
      <FormControl component="fieldset" margin="normal">
      <FormLabel component="legend">Additional Information</FormLabel>
      <Field
            name="additionalInformation"
            as={TextField}
            label="Additional Information"
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
          <ErrorMessage className='text-red-500' name="additionalInformation" component="div" />
    </FormControl>
    </div>
  );
};

export default InterviewPreferencesForm;
