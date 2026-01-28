import { Button } from "@/components/ui/button"
import {
    Field,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

export function SignInForm() {
    return (
        <FieldGroup>
            <Field>
                <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
                <Input
                    id="fieldgroup-email"
                    type="email"
                    placeholder="name@example.com"
                />

            </Field>
            <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>

                <Input id="password" type="password" placeholder="••••••••" />
            </Field>
            <Field orientation="horizontal">

                <Button type="submit">Submit</Button>
            </Field>
            <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary font-medium hover:underline">
                    Sign Up
                </Link>
            </p>
        </FieldGroup>
    )
}
