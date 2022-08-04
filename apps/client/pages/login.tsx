import { getCsrfToken, signIn } from "next-auth/react";
import { FormControl, FormLabel, Input, Button, Container } from "@chakra-ui/react";
import { Formik, Form, Field, FormikProps, FieldInputProps } from "formik";

export default function Login({ csrfToken }) {
    return (
        <Formik
            initialValues={{
                username: "",
                password: "",
            }}
            onSubmit={async (values) => {
                const response = await signIn("credentials", {
                    redirect: true,
                    username: values.username,
                    password: values.password,
                    csrfToken: csrfToken,
                    callbackUrl: `${window.location.origin}`,
                });
            }}
        >
            {(props) => (
                <Container paddingTop={4}>
                    <Form>
                        <Field name="username">
                            {({ field, form }: { field: FieldInputProps<string>; form: FormikProps<{ username: string }> }): JSX.Element => (
                                <FormControl>
                                    <FormLabel>Username</FormLabel>
                                    <Input {...field} type="text" name="username" />
                                </FormControl>
                            )}
                        </Field>
                        <Field name="password">
                            {({ field, form }: { field: FieldInputProps<string>; form: FormikProps<{ password: string }> }): JSX.Element => (
                                <FormControl>
                                    <FormLabel>Password</FormLabel>
                                    <Input {...field} type="text" name="password" />
                                </FormControl>
                            )}
                        </Field>
                        <Button type="submit">Log in</Button>
                    </Form>
                </Container>
            )}
        </Formik>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    };
}
