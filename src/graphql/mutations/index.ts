import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SignIn($payload: SignInInput!) {
    signIn(payload: $payload) {
      auth_token
      user {
        _id
        firstName
        lastName
        email
        phone
        role
        pharmacy {
          _id
          name
          phone
          email
        }
        isActive
        isEmailVerified
        createdAt
        updatedAt
      }
    }
  }
`;

export const CREATE_BRANCH = gql`
  mutation CreateBranch($payload: createBranchContent!) {
    createBranch(payload: $payload) {
      _id
      name
      phone
      address
      pharmacy {
        _id
        name
        phone
        email
      }
    }
  }
`;
