import classNames from "classnames"
import { ErrorMessage, Field, Formik, Form } from "formik"
import { Alert, Button, FormControl } from "react-bootstrap"
import { ChevronRightIcon } from "@heroicons/react/20/solid"
import * as yup from "yup"

const validationSchema = yup.object().shape({
    search: yup.string().required()
})

const initialValues = {
    search: ""
}

const FormikSearch = ({ onSubmit }) => (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        <Form className="d-flex flex-column align-items-center">
            <FormControl 
                as={Field} 
                size="lg" 
                placeholder="Search for events" 
                className="mb-3" 
                name="search"
            />
            <ErrorMessage component="span" name="search" className="small text-danger mb-3"/>
            <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="text-white" 
                title="Search"
            >
                <ChevronRightIcon width={20} />
            </Button>
        </Form>
    </Formik>
)

export default FormikSearch