/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Branch = {
  __typename?: 'Branch';
  _id: Scalars['ID']['output'];
  address?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  pharmacy: Pharmacy;
  phone?: Maybe<Scalars['String']['output']>;
};

export type BranchResponse = {
  __typename?: 'BranchResponse';
  data?: Maybe<Array<Maybe<Branch>>>;
  pagination?: Maybe<Pagination_Result>;
};

export type CreatePharmacistInput = {
  branch: Scalars['ID']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  pharmacy: Scalars['ID']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type Drug = {
  __typename?: 'Drug';
  _id?: Maybe<Scalars['ID']['output']>;
  branch?: Maybe<Branch>;
  costPrice?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pharmacy?: Maybe<Pharmacy>;
  qtyInStock?: Maybe<Scalars['Int']['output']>;
  requiresPrescription?: Maybe<Scalars['Boolean']['output']>;
  sellingPrice?: Maybe<Scalars['Float']['output']>;
  sideEffects?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type DrugResponse = {
  __typename?: 'DrugResponse';
  data?: Maybe<Array<Maybe<Drug>>>;
  pagination?: Maybe<Pagination_Result>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBranch: Branch;
  createDrug?: Maybe<Drug>;
  createPharmacist?: Maybe<Pharmacist>;
  createPharmacy: Pharmacy;
  createUser?: Maybe<Scalars['Boolean']['output']>;
  deleteBranch: Scalars['Boolean']['output'];
  deleteDrug?: Maybe<Scalars['Boolean']['output']>;
  deletePharmacist?: Maybe<Scalars['Boolean']['output']>;
  deletePharmacy: Scalars['Boolean']['output'];
  deleteUser?: Maybe<Scalars['Boolean']['output']>;
  signIn?: Maybe<SignInResponse>;
  updateBranch?: Maybe<Branch>;
  updateDrug?: Maybe<Drug>;
  updatePharmacist?: Maybe<Pharmacist>;
  updatePharmacy?: Maybe<Pharmacy>;
  updateUser?: Maybe<User>;
};


export type MutationCreateBranchArgs = {
  payload: CreateBranchContent;
};


export type MutationCreateDrugArgs = {
  payload: CreateDrugContent;
};


export type MutationCreatePharmacistArgs = {
  input: CreatePharmacistInput;
};


export type MutationCreatePharmacyArgs = {
  payload: CreatePharmacyContent;
};


export type MutationCreateUserArgs = {
  payload: CreateUserContent;
};


export type MutationDeleteBranchArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDrugArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePharmacistArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePharmacyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSignInArgs = {
  payload: SignInInput;
};


export type MutationUpdateBranchArgs = {
  payload: UpdateBranchContent;
};


export type MutationUpdateDrugArgs = {
  payload: UpdateDrugContent;
};


export type MutationUpdatePharmacistArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePharmacistInput;
};


export type MutationUpdatePharmacyArgs = {
  payload: UpdatePharmacyContent;
};


export type MutationUpdateUserArgs = {
  payload: UpdateUserContent;
};

export type Pagination = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type Pagination_Result = {
  __typename?: 'Pagination_Result';
  limit?: Maybe<Scalars['Int']['output']>;
  skip?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Pharmacist = {
  __typename?: 'Pharmacist';
  _id: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type PharmacistResponse = {
  __typename?: 'PharmacistResponse';
  data?: Maybe<Array<Maybe<Pharmacist>>>;
  pagination?: Maybe<Pagination_Result>;
};

export type Pharmacy = {
  __typename?: 'Pharmacy';
  _id?: Maybe<Scalars['ID']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type PharmacyResponse = {
  __typename?: 'PharmacyResponse';
  data?: Maybe<Array<Maybe<Pharmacy>>>;
  pagination?: Maybe<Pagination_Result>;
};

export type Query = {
  __typename?: 'Query';
  branch?: Maybe<Branch>;
  branches?: Maybe<BranchResponse>;
  drug?: Maybe<Drug>;
  drugs?: Maybe<DrugResponse>;
  pharmacies?: Maybe<PharmacyResponse>;
  pharmacist?: Maybe<Pharmacist>;
  pharmacists?: Maybe<PharmacistResponse>;
  pharmacy?: Maybe<Pharmacy>;
  user?: Maybe<User>;
  users?: Maybe<UserResponse>;
};


export type QueryBranchArgs = {
  filter?: InputMaybe<BranchFilter>;
};


export type QueryBranchesArgs = {
  filter?: InputMaybe<BranchFilter>;
  pagination?: InputMaybe<Pagination>;
};


export type QueryDrugArgs = {
  filter?: InputMaybe<DrugFilter>;
};


export type QueryDrugsArgs = {
  filter?: InputMaybe<DrugFilter>;
  pagination?: InputMaybe<Pagination>;
};


export type QueryPharmaciesArgs = {
  filter?: InputMaybe<PharmacyFilter>;
  pagination?: InputMaybe<Pagination>;
};


export type QueryPharmacistArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPharmacistsArgs = {
  filter?: InputMaybe<PharmacistFilter>;
};


export type QueryPharmacyArgs = {
  filter?: InputMaybe<PharmacyFilter>;
};


export type QueryUserArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UsersFilter>;
  pagination?: InputMaybe<Pagination>;
};

export type SignInInput = {
  id: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  auth_token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UpdatePharmacistInput = {
  _id: Scalars['ID']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  pharmacy?: Maybe<Pharmacy>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UserRole>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  data?: Maybe<Array<Maybe<User>>>;
  pagination?: Maybe<Pagination_Result>;
};

export enum UserRole {
  Pharmacist = 'PHARMACIST',
  PharmacyAdmin = 'PHARMACY_ADMIN',
  SalesRep = 'SALES_REP',
  SuperAdmin = 'SUPER_ADMIN'
}

export type BranchFilter = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pharmacy?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBranchContent = {
  address?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDrugContent = {
  branch: Scalars['ID']['input'];
  costPrice?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  pharmacy: Scalars['ID']['input'];
  qtyInStock?: InputMaybe<Scalars['Int']['input']>;
  requiresPrescription?: InputMaybe<Scalars['Boolean']['input']>;
  sellingPrice?: InputMaybe<Scalars['Float']['input']>;
  sideEffects?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CreatePharmacyContent = {
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CreateUserContent = {
  branch?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
};

export type DrugFilter = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  branch?: InputMaybe<Scalars['ID']['input']>;
  pharmacy?: InputMaybe<Scalars['ID']['input']>;
  requiresPrescription?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PharmacistFilter = {
  branch?: InputMaybe<Scalars['ID']['input']>;
  pharmacy?: InputMaybe<Scalars['ID']['input']>;
};

export type PharmacyFilter = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBranchContent = {
  _id: Scalars['ID']['input'];
  address?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pharmacy?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDrugContent = {
  _id: Scalars['ID']['input'];
  branch?: InputMaybe<Scalars['ID']['input']>;
  costPrice?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pharmacy?: InputMaybe<Scalars['ID']['input']>;
  qtyInStock?: InputMaybe<Scalars['Int']['input']>;
  requiresPrescription?: InputMaybe<Scalars['Boolean']['input']>;
  sellingPrice?: InputMaybe<Scalars['Float']['input']>;
  sideEffects?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdatePharmacyContent = {
  _id: Scalars['ID']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserContent = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  branch?: InputMaybe<Scalars['ID']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRole>;
};

export type UserFilter = {
  _id?: InputMaybe<Scalars['ID']['input']>;
};

export type UsersFilter = {
  branch?: InputMaybe<Scalars['ID']['input']>;
  pharmacy?: InputMaybe<Scalars['ID']['input']>;
};
