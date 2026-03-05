import useCreateBranch from "@/hooks/use-create-branch";
import CustomInput from "./app-Input";
import useToast from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import type { CreateBranchContent } from "@/gql/graphql";

import { Button } from "../ui/button";
import ButtonSpinner from "./app-spinner";
import { useUrlBoolean } from "@/hooks/use-url-state";

const NewBranchForm = () => {
  const [, , clearShowModal] = useUrlBoolean("show-modal");

  const { createBranch, loading } = useCreateBranch();
  const { error, success } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBranchContent>();

  const onSubmit = (data: CreateBranchContent) => {
    createBranch({
      variables: {
        payload: {
          name: data.name,
          phone: data.phone,
          address: data.address,
        },
      },
      onCompleted: (res) => {
        console.log("Branch created successfully:", res);
        clearShowModal();
        success("Branch Created Successfully", {
          description: "The branch has been created successfully.",
        });
      },
      onError: (err) => {
        error("Branch Creation Failed", {
          description:
            err?.message ?? "An error occurred while creating the branch.",
        });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        label="Branch Name"
        id="name"
        type="text"
        placeholder="Branch name"
        required
        className="p-3"
        {...register("name", {
          required: "Branch name is required",
        })}
        error={errors?.name?.message}
      />
      <div className="my-4">
        <CustomInput
          label="Branch Phone"
          id="phone"
          type="text"
          placeholder="Branch phone"
          className="p-3"
          {...register("phone", {
            required: "Branch phone is required",
          })}
          error={errors?.phone?.message}
        />
      </div>

      <CustomInput
        label="Branch Address"
        id="address"
        type="text"
        placeholder="Branch address"
        className="p-3"
        {...register("address", {
          required: "Branch address is required",
        })}
        error={errors?.address?.message}
      />

      <div className="mt-6 flex flex-row items-center space-x-2 justify-end">
        <Button variant="outline" className="cursor-pointer">
          Cancel
        </Button>
        <Button type="submit" className="cursor-pointer">
          {loading ? <ButtonSpinner /> : <p>Create</p>}
        </Button>
      </div>
    </form>
  );
};

export default NewBranchForm;
