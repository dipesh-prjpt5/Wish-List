import { SignInForm } from "@/components/auth/SignInForm";
import AuthPageLayout from "../../Layout/AuthPageLayout";

export const SignIn = () => {
    return (
        <AuthPageLayout>
            <SignInForm />
        </AuthPageLayout>
    );
};