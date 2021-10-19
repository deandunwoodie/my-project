import React from "react";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Alert from "@mui/material/Alert";

import "./Create.css";

const validate = yup.object({
  quotePrefix: yup.string().required("Required"),
  quoteFirstName: yup
    .string()
    .required("Required")
    .max(20, "Must be 20 characters or less"),
  quoteLastName: yup
    .string()
    .required("Required")
    .max(20, "Must be 20 characters or less"),
  quoteMobile: yup.string().required("Required"),
  quoteAddressLine1: yup.string().required("First line of address is required"),
  quoteAddressLine2: yup.string().required(),
  quoteCity: yup.string().required("City is required"),
  quotePostcode: yup.string().required("Postcode is required"),

  quoteVehicleType: yup.string().required("Please select vehicle type"),
  quoteEngineSize: yup.number().required(),
  quoteIsCommercial: yup.string().required(),
  quoteIsRegistered: yup.string().required(),
  quoteVehicleValue: yup.string().required(),
  quoteRegistrationDate: yup.date().required(),
  quoteNoAdditionalDrivers: yup
    .string()
    .required("Number of additional drivers is required"),
});

export default function WithMaterialUI() {
  const [value, setValue] = React.useState(new Date("2021-08-18T21:11:54"));
  const marks = [
    {
      value: 1000,
      label: "1000",
    },
    {
      value: 1200,
      label: "1200",
    },
    {
      value: 1400,
      label: "1400",
    },
    {
      value: 1600,
      label: "1600",
    },
    {
      value: 1800,
      label: "1800",
    },
    {
      value: 2000,
      label: "2000",
    },
    {
      value: 2500,
      label: "2500",
    },
    {
      value: 3000,
      label: "3000",
    },
  ];

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [isSuccess, setIsSuccess] = React.useState(false);

  const callMockAPI = (values) => {
    // const endpointURL = "http://localhost:8080/quotes";
    const endpointURL = "https://6150fecbd0a7c100170168dd.mockapi.io/quotes";

    axios
      .post(endpointURL, values)
      .then(() => setIsSuccess(true))
      .catch(() => setIsSuccess(false));
  };

  const formik = useFormik({
    initialValues: {
      quotePrefix: "",
      quoteFirstName: "",
      quoteLastName: "",
      quoteMobile: "",
      quoteAddressLine1: "",
      quoteAddressLine2: "",
      quoteCity: "",
      quotePostcode: "",
      quoteVehicleType: "",
      quoteEngineSize: null,
      quoteIsCommercial: "",
      quoteIsRegistered: "",
      quoteVehicleValue: null,
      quoteRegistrationDate: new Date("2014-08-18T21:11:54"),
      quoteNoAdditionalDrivers: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      callMockAPI(values);
    },
  });

  return (
    <div>
      <Box className="box" sx={{ flexGrow: 1 }}>
        {/* <Form> */}
        <Grid container spacing={5}>
          <Grid item xs={2}>
            <ToggleButtonGroup
              color="primary"
              exclusive
              onChange={formik.handleChange}
            >
              <ToggleButton name="quotePrefix" value="Mr">
                Mr
              </ToggleButton>
              <ToggleButton name="quotePrefix" value="Mrs">
                Mrs
              </ToggleButton>
              <ToggleButton name="quotePrefix" value="Miss">
                Miss
              </ToggleButton>
              <ToggleButton name="quotePrefix" value="Ms">
                Ms
              </ToggleButton>
              <div>Picked: {formik.values.quotePrefix}</div>
            </ToggleButtonGroup>

            <TextField
              name="quoteFirstName"
              color="secondary"
              className="text"
              required
              fullWidth
              label="First Name"
              variant="outlined"
              value={formik.values.quoteFirstName}
              onChange={formik.handleChange}
              error={
                formik.touched.quoteFirstName &&
                Boolean(formik.errors.quoteFirstName)
              }
              helperText={
                formik.touched.quoteFirstName && formik.errors.quoteFirstName
              }
            />

            <TextField
              label="Last Name"
              name="quoteLastName"
              className="text"
              fullWidth
              required
              variant="outlined"
              value={formik.values.quoteLastName}
              onChange={formik.handleChange}
              error={
                formik.touched.quoteLastName &&
                Boolean(formik.errors.quoteLastName)
              }
              helperText={
                formik.touched.quoteLastName && formik.errors.quoteLastName
              }
            />
            {/* <MuiPhoneNumber defaultCountry={"us"} /> */}

            {console.log(formik.values)}

            <TextField
              label="Address Line 1"
              name="quoteAddressLine1"
              className="text"
              fullWidth
              required
              variant="outlined"
              value={formik.values.quoteAddressLine1}
              onChange={formik.handleChange}
              error={
                formik.touched.quoteAddressLine1 &&
                Boolean(formik.errors.quoteAddressLine1)
              }
              helperText={
                formik.touched.quoteAddressLine1 &&
                formik.errors.quoteAddressLine1
              }
            />

            <TextField
              label="Address Line 2"
              name="quoteAddressLine2"
              fullWidth
              required
              className="text"
              variant="outlined"
              value={formik.values.quoteAddressLine2}
              onChange={formik.handleChange}
              error={
                formik.touched.quoteAddressLine2 &&
                Boolean(formik.errors.quoteAddressLine2)
              }
              helperText={
                formik.touched.quoteAddressLine2 &&
                formik.errors.quoteAddressLine2
              }
            />

            <TextField
              label="City"
              className="text"
              name="quoteCity"
              fullWidth
              required
              variant="outlined"
              value={formik.values.quoteCity}
              onChange={formik.handleChange}
              error={
                formik.touched.quoteCity && Boolean(formik.errors.quoteCity)
              }
              helperText={formik.touched.quoteCity && formik.errors.quoteCity}
            />

            <TextField
              label="Postcode"
              name="quotePostcode"
              fullWidth
              required
              className="text"
              variant="outlined"
              value={formik.values.quotePostcode}
              onChange={formik.handleChange}
              error={
                formik.touched.quotePostcode &&
                Boolean(formik.errors.quotePostcode)
              }
              helperText={
                formik.touched.quotePostcode && formik.errors.quotePostcode
              }
            />

            <TextField
              label="Mobile"
              name="quoteMobile"
              fullWidth
              required
              variant="outlined"
              value={formik.values.quoteMobile}
              onChange={formik.handleChange}
              error={
                formik.touched.quoteMobile && Boolean(formik.errors.quoteMobile)
              }
              helperText={
                formik.touched.quoteMobile && formik.errors.quoteMobile
              }
            />
          </Grid>
          <Grid item xs={4} md={4}>
            <FormLabel component="legend">What is the vehicle type?</FormLabel>
            <ToggleButtonGroup
              color="primary"
              exclusive
              value="None"
              onChange={formik.handleChange}
            >
              <ToggleButton name="quoteVehicleType" value="Cabriolet">
                Cabriolet
              </ToggleButton>
              <ToggleButton name="quoteVehicleType" value="Coupe">
                Coupe
              </ToggleButton>
              <ToggleButton name="quoteVehicleType" value="Estate">
                Estate
              </ToggleButton>
              <ToggleButton name="quoteVehicleType" value="Hatchback">
                Hatchback
              </ToggleButton>
              <ToggleButton name="quoteVehicleType" value="Other">
                Other
              </ToggleButton>
              <div>Picked: {formik.values.quoteVehicleType}</div>
            </ToggleButtonGroup>
            <FormLabel component="legend">
              What is the engine size (cc) of the vehicle?
            </FormLabel>
            <Slider
              aria-label="Restricted values"
              // valueLabelFormat={valueLabelFormat}
              // getAriaValueText={valuetext}
              step={null}
              marks={marks}
              max={3000}
              min={1000}
              onChange={formik.handleChange}
              name="quoteEngineSize"
            />
            <div>Picked: {formik.values.quoteEngineSize}</div>

            <FormLabel component="legend">
              How many additional drivers will use the vehicle?
            </FormLabel>
            <ToggleButtonGroup
              color="primary"
              // value={alignment}
              exclusive
              onChange={formik.handleChange}
            >
              <ToggleButton name="quoteNoAdditionalDrivers" value="None">
                None
              </ToggleButton>
              <ToggleButton name="quoteNoAdditionalDrivers" value="One">
                One
              </ToggleButton>
              <ToggleButton name="quoteNoAdditionalDrivers" value="Two">
                Two
              </ToggleButton>
              <ToggleButton name="quoteNoAdditionalDrivers" value="Three">
                Three
              </ToggleButton>
              <ToggleButton name="quoteNoAdditionalDrivers" value="Four">
                Four
              </ToggleButton>

              <div>Picked: {formik.values.quoteNoAdditionalDrivers}</div>
            </ToggleButtonGroup>

            <FormControl component="fieldset">
              <FormLabel component="legend">
                Will the vehicle be used for commercial purposes?
              </FormLabel>
              <RadioGroup
                onChange={formik.handleChange}
                row
                name="quoteIsCommercial"
                // value={formValues.quoteIsCommercial}
              >
                <FormControlLabel
                  value="Yes"
                  // onChange={handleOnChange}
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  // onChange={handleOnChange}
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
            <div>Picked: {formik.values.quoteIsCommercial}</div>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Will the vehicle be used outside the registered state?
              </FormLabel>
              <RadioGroup
                onChange={formik.handleChange}
                row
                name="quoteIsRegistered"
                // value={formValues.quoteIsRegistered}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
              <div>Picked: {formik.values.quoteIsRegistered}</div>
            </FormControl>
            <FormLabel component="legend">
              What is the current value of the vehicle?
            </FormLabel>
            <Slider
              defaultValue={0}
              aria-label="Small"
              valueLabelDisplay="on"
              // marks={valueMarks}
              step={100}
              max={50000}
              onChange={formik.handleChange}
              name="quoteVehicleValue"
            />
            <div>Picked: {formik.values.quoteVehicleValue}</div>
          </Grid>
          <Grid item xs={4} md={4}>
            <FormLabel component="legend">
              What date was the vehicle first registered?
            </FormLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        {/* </Form> */}
        <form onSubmit={formik.handleSubmit}>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
        <br></br>
        {isSuccess && (
          <Alert variant="filled" severity="success">
            Alert! Quote Has Been Successfully Created.
          </Alert>
        )}
      </Box>
    </div>
  );
}
