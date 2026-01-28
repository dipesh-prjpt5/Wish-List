import {
    Field,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const FriendsPage = () => {
    return (
        <div>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="email">Enter Email</FieldLabel>
                    <Input
                        id="fieldgroup-email"
                        type="email"
                        placeholder="friend@email.com"
                    />
                </Field>
            </FieldGroup>
            
        </div>
    )
}

export default FriendsPage