import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const NewItemPage = () => {
  return (
    <div className="max-w-3xl space-y-6">
      {/* Title */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">New item</h1>
        <p className="text-sm text-muted-foreground">
          Add a new item to your wishlist. Copy-paste the product URL, or type the product name.
        </p>
      </div>

      {/* Input */}
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="product">
            URL or name of the product
          </FieldLabel>
          <Input
            id="product"
            type="text"
            placeholder="https://amazon.in/..."
          />
        </Field>
      </FieldGroup>

      {/* Button */}
      <Button className="w-full">
        Continue →
      </Button>
    </div>
  )
}

export default NewItemPage
