import { Component, ReactNode } from "react";
import * as yup from "yup";
import {Box,Button,TextField} from "@material-ui/core";
import { Formik } from "formik";

export class Form extends Component{
    render(): ReactNode {

        const validationSchema = yup.object().shape({
              email: yup.string().required("Email is required"),  
             password:yup.string().required("Password is Required")
          }
          );


        return <>
             <Formik
      validateOnChange={false}
        initialValues={{
          email:"",
          password:"",
        }}
        onSubmit={(values:Record<string,string>) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit}>
             <Box display={"flex"} flexDirection={"column"}>
             <Box>Email</Box>
             <TextField onChange={formikProps.handleChange} variant={"outlined"} placeholder="Email" name="email"/>
             <Box>
             {formikProps.errors.email}
             </Box>
             <Box>Password</Box>
             <TextField onChange={formikProps.handleChange} variant={"outlined"} placeholder="Password" name="password"/>
             <Box>
             {formikProps.errors.password}
             </Box>
             <Box></Box>
             <Button variant={"outlined"} type={"submit"}>Submit</Button>   

             </Box>
          </form>
        )}
      </Formik>
        </>
    }
}
