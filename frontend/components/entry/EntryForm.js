import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Formik, Form, Field } from 'formik';

const CREATE_ENTRY = gql`
    mutation CreateEntry($group: ID!, $text: String!) {
        createEntry(group: $group, text: $text) {
            id
            text
        }
    }
`;

export default (props) => {
    const [createEntry, { data }] = useMutation(CREATE_ENTRY);

    return <Formik
        initialValues={{group: '', text: ''}}
        onSubmit={(values, actions) => {
            createEntry({ variables: values })
            actions.resetForm()
        }}
        >
        <Form>
            <Field as="textarea" name="text" className="w-full border rounded p-4" placeholder="Add new entry..."/>
            
            <div className="flex justify-end mt-1">
                <Field type="text" name="group" className="border rounded px-4 mr-4" placeholder="Group" />
                <button className="btn btn-primary float-right">Add</button>
            </div>
        </Form>
    </Formik>
}
