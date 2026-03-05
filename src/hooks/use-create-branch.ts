import type {
  CreateBranchContent,
  MutationCreateBranchArgs,
} from "@/gql/graphql";
import { CREATE_BRANCH } from "@/graphql/mutations";
import { GET_BRANCHES } from "@/graphql/queries";
import { useMutation } from "@apollo/client/react";

const useCreateBranch = () => {
  const [createBranch, { loading, ...rest }] = useMutation<
    CreateBranchContent,
    MutationCreateBranchArgs
  >(CREATE_BRANCH, {
    refetchQueries: [GET_BRANCHES],
  });

  return { createBranch, loading, ...rest };
};

export default useCreateBranch;
