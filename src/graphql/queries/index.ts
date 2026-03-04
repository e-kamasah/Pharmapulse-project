import { gql } from "@apollo/client";

export const GET_BRANCHES = gql`
  query Branches($filter: branchFilter) {
    branches(filter: $filter) {
      data {
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
      pagination {
        total
        limit
        skip
      }
    }
  }
`;

export const GET_DRUGS = gql`
  query Drugs($filter: drugFilter, $pagination: Pagination) {
    drugs(filter: $filter, pagination: $pagination) {
      data {
        _id
        name
        pharmacy {
          _id
          name
          phone
          email
        }
        branch {
          _id
          name
          phone
        }
        description
        requiresPrescription
        sideEffects
        costPrice
        sellingPrice
        qtyInStock
        createdAt
        updatedAt
      }
      pagination {
        total
        limit
        skip
      }
    }
  }
`;
