import { useSession, signIn, signOut } from "next-auth/react";
import { Text, Button, Container } from "@chakra-ui/react";

export default function Session() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                <Container paddingTop={4}>
                    <Text>Signed in {session.user.username}</Text> <br />
                    <Button onClick={() => signOut()}>Sign out</Button>
                </Container>
            </>
        );
    }
    return (
        <>
            <Container paddingTop={4}>
                Not signed in <br />
                <Button onClick={() => signIn()}>Sign in</Button>
            </Container>
        </>
    );
}

// Username
// Password
// id
