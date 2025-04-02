import { FC, useState } from "react"
import { Formik, Form as Formikform } from 'formik';
import { Button, Stepper, Step, StepLabel } from '@mui/material';
import { personalInfoSchema, educationSchema, experienceSchema, technicalSkillsSchema, interviewPreferencesSchema } from './validationSchema'
import PersonalInfoForm from "../Form/PersonalInfo";
import ExperienceForm from "../Form/Experience";
import EducationForm from "../Form/Education";
import TechnicalSkillsForm from "../Form/TechnicalSkillform";
import InterviewPreferencesForm from "../Form/InterviewPref";
import { MoveLeft, MoveRight } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import BasicModal from "../Modal";
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const steps = [
  {
    id: 1,
    title: "Personal Information",
    des: "Basic contact details"
  },
  {
    id: 2,
    title: "Education",
    des: "Your academic qualifications"
  },
  {
    id: 3,
    title: "Technical Skills",
    des: "Your technical expertise"
  },
  {
    id: 4,
    title: "Experience",
    des: "Professional background"
  },
  {
    id: 5,
    title: "Perferences",
    des: "Interview preferences"
  }
];

const Form: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    degree: '',
    university: '',
    graduationYear: '',
    yearsOfExperience: '',
    projects: '',
    programmingLanguages: '',
    frameworksAndLibraries: '',
    otherTechnicalSkills: '',
    preferredRoles: [],
    availableDays: [],
    preferredTime: '',
    additionalInformation: ''
  };
  const validationSchemas = [personalInfoSchema, educationSchema, technicalSkillsSchema, experienceSchema, interviewPreferencesSchema];

  const handleNext = (values: any, actions: any) => {

    if (activeStep === steps.length - 1) {
      setOpen(true);
      toast.success("Form submitted successfully", { duration: 2000 });
      setValues(values);
      actions.resetForm();
      setActiveStep(0)
    } else {
      setActiveStep((prev) => prev + 1);
      actions.setTouched({});
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center my-4 gap-4 lg:w-4/5">
        <h1 className="font-semibold lg:text-3xl md:text-2xl text-lg">Ready To Get Started?</h1>
        <small className="text-gray-700">Complete the form below to access your interview readiness.</small>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemas[activeStep]}
          onSubmit={handleNext}
        >
          {() => (
            <Formikform className="lg:w-5/6">
              <Stepper activeStep={activeStep} orientation={isMobile ? 'vertical' : 'horizontal'}>
                {steps.map((label, index) => (
                  <Step key={index}>
                    <StepLabel>
                      <div className={`${activeStep === index ? "text-blue-700" : ""}`}>
                        <h2 className={`${activeStep === index ? "font-bold" : ""}`}>{label.title}</h2>
                        <small>{label.des}</small>
                      </div>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div className="flex justify-center mt-5">
                <div className="bg-white px-6 py-4  lg:w-4/5 rounded-2xl" >
                  {activeStep === 0 && <PersonalInfoForm />}
                  {activeStep === 1 && <EducationForm />}
                  {activeStep === 2 && <TechnicalSkillsForm />}
                  {activeStep === 3 && <ExperienceForm />}
                  {activeStep === 4 && <InterviewPreferencesForm />}
                  <div className="flex justify-between mt-2">
                    {activeStep > 0 && (
                      <Button variant="outlined" sx={{ color: 'black', borderRadius: '8px', border: '1px solid gray' }}
                        onClick={handleBack}>
                        <MoveLeft className="mr-2" />  <span className="hidden md:block lg:block">Previous</span>
                      </Button>
                    )}
                    <Button variant="contained" sx={{ bgcolor: 'black', borderRadius: '8px' }} type="submit" >
                      <span className="hidden md:block lg:block">{activeStep === steps.length - 1 ? 'Submit' : 'Next'}</span> <MoveRight className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>

            </Formikform>
          )}
        </Formik>
        {open && !isMobile && <BasicModal open={open} setOpen={setOpen} data={values} />}
      </div>
      <Toaster />
    </div>
  )
}

export default Form