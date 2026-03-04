import type { Query, QueryBranchesArgs } from "@/gql/graphql";
import { GET_BRANCHES } from "@/graphql/queries";
import { useQuery } from "@apollo/client/react";

const useGetBranches = (variables: QueryBranchesArgs) => {
  const { data, ...rest } = useQuery<Query, QueryBranchesArgs>(GET_BRANCHES, {
    variables,
    fetchPolicy: "network-only",
  });

  return { branches: data?.branches?.data ?? [], ...rest };
};

export default useGetBranches;
