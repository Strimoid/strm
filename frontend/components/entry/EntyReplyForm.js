import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Formik, Form, Field } from 'formik';

const CREATE_ENTRY_REPLY = gql`
    mutation CreateEntryReply($entry: ID!, $text: String!) {
        createEntryReply(entry: $entry, text: $text) {
            id
            text
        }
    }
`;

export default ({ entry }) => {
    const [createEntryReply, { data }] = useMutation(CREATE_ENTRY_REPLY);

    return <Formik
        initialValues={{text: ''}}
        onSubmit={(values, actions) => {
            createEntryReply({ variables: {
                entry: entry.id,
                text: values.text
            } })
            actions.resetForm()
        }}
        >
        <Form>
            <Field as="textarea" name="text" className="w-full border rounded p-4" placeholder="your reply..."/>
            
            <div className="flex justify-end mt-1">
                <button className="btn btn-primary float-right">Reply</button>
            </div>
        </Form>
    </Formik>
}
