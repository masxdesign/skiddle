import classNames from "classnames"
import { ErrorMessage, Field, Formik, Form } from "formik"
import { Alert, Button, ButtonGroup, FormControl, InputGroup } from "react-bootstrap"
import { ChevronRightIcon } from "@heroicons/react/20/solid"
import * as yup from "yup"

const validationSchema = yup.object().shape({
    search: yup.string().required()
})

const FormikTopBarSearch = ({ initialValues, onSubmit, isSearching }) => (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
    >
        <Form>
            <InputGroup>
                <FormControl 
                    as={Field} 
                    placeholder="Search for events"
                    name="search"
                    disabled={isSearching}
                />
                <Button 
                    type="submit" 
                    variant="primary" 
                    className="text-white" 
                    title="Search"
                    disabled={isSearching}
                >
                    {isSearching ? (
                        <span className="small">Searching...</span>
                    ) : (
                        <ChevronRightIcon width={20} />
                    )}
                </Button>
            </InputGroup>
            <ErrorMessage component="span" name="search" className="small text-danger mb-3"/>
        </Form>
    </Formik>
)

export default FormikTopBarSearch