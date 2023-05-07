import { FC } from "react";
import { DefaultLayout } from "../../layouts";
import {
  StyledButtonsRow,
  StyledProductContainer,
  StyledProductContent,
  StyledRow,
} from "./newProduct.styles";
import {
  Button,
  TextAreaControlled,
  TextFieldControlled,
} from "../../components";
import { useNewProductViewModel } from "../../viewModels";

export const NewProduct: FC = () => {
  const {
    handleSubmit,
    control,
    errors,
    isDirty,

    handleCancel,
    handleSaveProduct,
  } = useNewProductViewModel();
  return (
    <DefaultLayout>
      <StyledProductContainer>
        <h1 className="text-2xl text-gray-800">New product</h1>
        <StyledProductContent>
          <StyledRow>
            <p>Reference:</p>
            <TextFieldControlled
              id={"reference"}
              name={"reference"}
              control={control}
              error={!!errors.reference}
              helperText={errors.reference?.message}
            />
          </StyledRow>
          <StyledRow>
            <p>Name:</p>
            <TextFieldControlled
              id={"name"}
              name={"name"}
              control={control}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </StyledRow>
          <StyledRow>
            <p>Description:</p>
            <TextAreaControlled
              maxLength={160}
              id={"description"}
              name={"description"}
              control={control}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          </StyledRow>
          <StyledRow>
            <p>Price ($):</p>
            <TextFieldControlled
              id={"price"}
              name={"price"}
              type="number"
              control={control}
              error={!!errors.price}
              helperText={errors.price?.message}
            />
          </StyledRow>
          <StyledRow>
            <p>Taxes (%):</p>
            <TextFieldControlled
              id={"taxes"}
              name={"taxes"}
              type="number"
              control={control}
              error={!!errors.taxes}
              helperText={errors.taxes?.message}
            />
          </StyledRow>
          <StyledButtonsRow>
            <Button onClick={handleSubmit(handleSaveProduct)} color="primary">
              Save
            </Button>
            <Button
              color="secondary"
              onClick={handleCancel}
              disabled={!isDirty}
            >
              Cancel
            </Button>
          </StyledButtonsRow>
        </StyledProductContent>
      </StyledProductContainer>
    </DefaultLayout>
  );
};
