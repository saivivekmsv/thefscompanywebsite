import React from "react";
import {Button, Form} from "react-bootstrap";
import { Formik, Field } from "formik";
import { isEmpty } from "lodash";
const initialValues=[];
// const pizzaSize = [
//     {
//         lable: "small",
//         value: 1
//     },
//     {
//         lable: "medium",
//         value: 2
//     },
//     {
//         lable: "large",
//         value: 3
//     },

// ]
export const BackSide = (props) => {
    const {userClick} = props;
    const onFormSubmit = (values,{setFieldError}) => {

    }

    return (
        <div>
        <Formik
        initialValues={initialValues}
        onSubmit={onFormSubmit}
        enableReinitialize
        validateOnChange={false}>
        {({ handleChange, setFieldValue, handleSubmit, values, ...rest })=>{
            return (
                <Form
                    autoComplete="off"
                    className="h-100"
                    onSubmit={handleSubmit}
                    validated={!isEmpty(rest.errors)}>
                <Field 
                isRequired
                label="Size"
                placeholer="please select size"
                />


                </Form>
                
            )
        }}
        
        </Formik>
        <Button onClick={userClick}>backTofront</Button>
        </div>
    )
}