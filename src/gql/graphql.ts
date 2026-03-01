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
  name: Scalars['String']['output'];
  pharmacy: Pharmacy;
  phone?: Maybe<Scalars['String']['output']>;
};

export type BranchResponse = {
  __typename?: 'BranchResponse';
  data?: Maybe<Array<Maybe<Branch>>>;
  pagination?: Maybe<Pagination_Result>;
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
  createPharmacy: Pharmacy;
  deleteBranch: Scalars['Boolean']['output'];
  deleteDrug?: Maybe<Scalars['Boolean']['output']>;
  deletePharmacy: Scalars['Boolean']['output'];
  updateBranch?: Maybe<Branch>;
  updateDrug?: Maybe<Drug>;
  updatePharmacy?: Maybe<Pharmacy>;
};


export type MutationCreateBranchArgs = {
  payload: CreateBranchContent;
};


export type MutationCreateDrugArgs = {
  payload: CreateDrugContent;
};


export type MutationCreatePharmacyArgs = {
  payload: CreatePharmacyContent;
};


export type MutationDeleteBranchArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDrugArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePharmacyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateBranchArgs = {
  payload: UpdateBranchContent;
};


export type MutationUpdateDrugArgs = {
  payload: UpdateDrugContent;
};


export type MutationUpdatePharmacyArgs = {
  payload: UpdatePharmacyContent;
};

export type Pagination = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type Pagination_Result = {
  __typename?: 'Pagination_Result';
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Pharmacy = {
  __typename?: 'Pharmacy';
  _id: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
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
  pharmacy?: Maybe<Pharmacy>;
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


export type QueryPharmacyArgs = {
  filter?: InputMaybe<PharmacyFilter>;
};

export type BranchFilter = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pharmacy?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBranchContent = {
  name: Scalars['String']['input'];
  pharmacy: Scalars['ID']['input'];
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

export type DrugFilter = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  branch?: InputMaybe<Scalars['ID']['input']>;
  pharmacy?: InputMaybe<Scalars['ID']['input']>;
  requiresPrescription?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PharmacyFilter = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBranchContent = {
  _id: Scalars['ID']['input'];
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
