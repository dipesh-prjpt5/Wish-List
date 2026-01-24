import AuthPageLayout from "../../Layout/AuthPageLayout";
import { SignupForm } from "../../components/auth/SignupForm";

export const SignUp = () => {
    return (
        <AuthPageLayout>
            <SignupForm />
        </AuthPageLayout>
    );
};