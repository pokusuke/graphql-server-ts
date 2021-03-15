export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Movie = {
  __typename?: 'Movie';
  title?: Maybe<Scalars['String']>;
  director?: Maybe<Scalars['String']>;
};

export type MovieInput = {
  title: Scalars['String'];
  director: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  movies?: Maybe<Array<Maybe<Movie>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMovie?: Maybe<Movie>;
  updateMoive?: Maybe<Movie>;
};


export type MutationCreateMovieArgs = {
  title?: Maybe<Scalars['String']>;
  director?: Maybe<Scalars['String']>;
};


export type MutationUpdateMoiveArgs = {
  input?: Maybe<MovieInput>;
};
