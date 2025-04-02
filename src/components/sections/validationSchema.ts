import * as Yup from 'yup';

export const personalInfoSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
});

export const educationSchema = Yup.object({
  degree: Yup.string().required('Degree is required'),
  university: Yup.string().required('University/College is required'),
  graduationYear: Yup.number().min(2010, 'Enter a valid year').max(new Date().getFullYear(), 'Graduation year cannot be in the future').required('Graduation Year is required'),
});

export const experienceSchema = Yup.object({
  yearsOfExperience: Yup.number().min(0, 'Years of experience cannot be negative').required('Years of experience is required'),
  projects: Yup.string().required('Project & Experience details are required'),
});

export const technicalSkillsSchema = Yup.object({
  programmingLanguages: Yup.string().required('Programming Languages are required'),
  frameworksAndLibraries: Yup.string().required('Frameworks and Libraries are required'),
  otherTechnicalSkills: Yup.string().required('Other Technical Skills are required'),
});

export const interviewPreferencesSchema = Yup.object({
  preferredRoles: Yup.array()
    .min(1, 'At least one preferred role is required')
    .required('Preferred roles are required'),
  availableDays: Yup.array()
    .min(1, 'At least one Day is required')
    .required('Available days are required'),
  preferredTime: Yup.string().required('Preferred time is required'),
  additionalInformation: Yup.string().required('Additional Information is required'),
}); 
