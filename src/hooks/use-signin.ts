import { SIGN_IN } from "@/graphql/mutations";
import { useMutation } from "@apollo/client/react";
import type { SignInResponse, MutationSignInArgs } from "@/gql/graphql";

const useSignIn = () => {
  const [signIn, { loading, ...rest }] = useMutation<
    { signIn: SignInResponse },
    MutationSignInArgs
  >(SIGN_IN);

  return {
    signIn,
    loading,
    ...rest,
  };
};

export default useSignIn;
