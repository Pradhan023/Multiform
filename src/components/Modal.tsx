import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export default function BasicModal({ open, setOpen, data }: any) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            className="text-center text-cyan-700 font-semibold "
            variant="h4"
            component="h4"
          >
            Details
          </Typography>
          <Typography id="modal-modal-title" variant="h5" component="h5">
            Personal Information
          </Typography>

          <Typography id="modal-modal-title" variant="subtitle1" component="p">
            FullName - {data.fullName} , Email - {data.email}, PhoneNumber -{" "}
            {data.phoneNumber}
          </Typography>
          <br />
          <Typography id="modal-modal-title" variant="h5" component="h5">
            Education
          </Typography>
          <Typography id="modal-modal-title" variant="subtitle1" component="p">
            Degree - {data.degree}, University/College - {data.university},
            GraduationYear - {data.graduationYear}
          </Typography>
          <br />
          <Typography id="modal-modal-title" variant="h5" component="h5">
            Technical Skills
          </Typography>
          <Typography id="modal-modal-title" variant="subtitle1" component="p">
            Programming Language - {data.programmingLanguages}, Frameworks and
            Libraries - {data.frameworksAndLibraries}, Other Technical Skills -{" "}
            {data.otherTechnicalSkills}
          </Typography>
          <br />
          <Typography id="modal-modal-title" variant="h5" component="h5">
            Experience
          </Typography>
          <Typography id="modal-modal-title" variant="subtitle1" component="p">
            Years of Experience - {data.yearsOfExperience}, Projects and
            Experience - {data.projects}
          </Typography>
          <br />
          <Typography id="modal-modal-title" variant="h5" component="h5">
            Preferences
          </Typography>
          <Typography id="modal-modal-title" variant="subtitle1" component="p">
            Prefered Roles - {data.preferredRoles}, Available Days -{" "}
            {data.availableDays}, Prefered Time - {data.preferredTime},
            Additional Information - {data.additionalInformation}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
