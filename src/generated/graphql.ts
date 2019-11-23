import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};



/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>,
  _gt?: Maybe<Scalars['Int']>,
  _gte?: Maybe<Scalars['Int']>,
  _in?: Maybe<Array<Scalars['Int']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Int']>,
  _lte?: Maybe<Scalars['Int']>,
  _neq?: Maybe<Scalars['Int']>,
  _nin?: Maybe<Array<Scalars['Int']>>,
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root',
  /** delete data from the table: "names" */
  delete_names?: Maybe<Names_Mutation_Response>,
  /** insert data into the table: "names" */
  insert_names?: Maybe<Names_Mutation_Response>,
  /** update data of the table: "names" */
  update_names?: Maybe<Names_Mutation_Response>,
};


/** mutation root */
export type Mutation_RootDelete_NamesArgs = {
  where: Names_Bool_Exp
};


/** mutation root */
export type Mutation_RootInsert_NamesArgs = {
  objects: Array<Names_Insert_Input>,
  on_conflict?: Maybe<Names_On_Conflict>
};


/** mutation root */
export type Mutation_RootUpdate_NamesArgs = {
  _inc?: Maybe<Names_Inc_Input>,
  _set?: Maybe<Names_Set_Input>,
  where: Names_Bool_Exp
};

/** columns and relationships of "names" */
export type Names = {
   __typename?: 'names',
  colour?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
  name: Scalars['String'],
  number?: Maybe<Scalars['Int']>,
};

/** aggregated selection of "names" */
export type Names_Aggregate = {
   __typename?: 'names_aggregate',
  aggregate?: Maybe<Names_Aggregate_Fields>,
  nodes: Array<Names>,
};

/** aggregate fields of "names" */
export type Names_Aggregate_Fields = {
   __typename?: 'names_aggregate_fields',
  avg?: Maybe<Names_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Names_Max_Fields>,
  min?: Maybe<Names_Min_Fields>,
  stddev?: Maybe<Names_Stddev_Fields>,
  stddev_pop?: Maybe<Names_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Names_Stddev_Samp_Fields>,
  sum?: Maybe<Names_Sum_Fields>,
  var_pop?: Maybe<Names_Var_Pop_Fields>,
  var_samp?: Maybe<Names_Var_Samp_Fields>,
  variance?: Maybe<Names_Variance_Fields>,
};


/** aggregate fields of "names" */
export type Names_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Names_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "names" */
export type Names_Aggregate_Order_By = {
  avg?: Maybe<Names_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Names_Max_Order_By>,
  min?: Maybe<Names_Min_Order_By>,
  stddev?: Maybe<Names_Stddev_Order_By>,
  stddev_pop?: Maybe<Names_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Names_Stddev_Samp_Order_By>,
  sum?: Maybe<Names_Sum_Order_By>,
  var_pop?: Maybe<Names_Var_Pop_Order_By>,
  var_samp?: Maybe<Names_Var_Samp_Order_By>,
  variance?: Maybe<Names_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "names" */
export type Names_Arr_Rel_Insert_Input = {
  data: Array<Names_Insert_Input>,
  on_conflict?: Maybe<Names_On_Conflict>,
};

/** aggregate avg on columns */
export type Names_Avg_Fields = {
   __typename?: 'names_avg_fields',
  id?: Maybe<Scalars['Float']>,
  number?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "names" */
export type Names_Avg_Order_By = {
  id?: Maybe<Order_By>,
  number?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "names". All fields are combined with a logical 'AND'. */
export type Names_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Names_Bool_Exp>>>,
  _not?: Maybe<Names_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Names_Bool_Exp>>>,
  colour?: Maybe<String_Comparison_Exp>,
  id?: Maybe<Int_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  number?: Maybe<Int_Comparison_Exp>,
};

/** unique or primary key constraints on table "names" */
export enum Names_Constraint {
  /** unique or primary key constraint */
  NamesPkey = 'names_pkey'
}

/** input type for incrementing integer columne in table "names" */
export type Names_Inc_Input = {
  id?: Maybe<Scalars['Int']>,
  number?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "names" */
export type Names_Insert_Input = {
  colour?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
};

/** aggregate max on columns */
export type Names_Max_Fields = {
   __typename?: 'names_max_fields',
  colour?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
};

/** order by max() on columns of table "names" */
export type Names_Max_Order_By = {
  colour?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  number?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Names_Min_Fields = {
   __typename?: 'names_min_fields',
  colour?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
};

/** order by min() on columns of table "names" */
export type Names_Min_Order_By = {
  colour?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  number?: Maybe<Order_By>,
};

/** response of any mutation on the table "names" */
export type Names_Mutation_Response = {
   __typename?: 'names_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Names>,
};

/** input type for inserting object relation for remote table "names" */
export type Names_Obj_Rel_Insert_Input = {
  data: Names_Insert_Input,
  on_conflict?: Maybe<Names_On_Conflict>,
};

/** on conflict condition type for table "names" */
export type Names_On_Conflict = {
  constraint: Names_Constraint,
  update_columns: Array<Names_Update_Column>,
  where?: Maybe<Names_Bool_Exp>,
};

/** ordering options when selecting data from "names" */
export type Names_Order_By = {
  colour?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  number?: Maybe<Order_By>,
};

/** select columns of table "names" */
export enum Names_Select_Column {
  /** column name */
  Colour = 'colour',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Number = 'number'
}

/** input type for updating data in table "names" */
export type Names_Set_Input = {
  colour?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
};

/** aggregate stddev on columns */
export type Names_Stddev_Fields = {
   __typename?: 'names_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  number?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "names" */
export type Names_Stddev_Order_By = {
  id?: Maybe<Order_By>,
  number?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Names_Stddev_Pop_Fields = {
   __typename?: 'names_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  number?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "names" */
export type Names_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>,
  number?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Names_Stddev_Samp_Fields = {
   __typename?: 'names_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  number?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "names" */
export type Names_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>,
  number?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Names_Sum_Fields = {
   __typename?: 'names_sum_fields',
  id?: Maybe<Scalars['Int']>,
  number?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "names" */
export type Names_Sum_Order_By = {
  id?: Maybe<Order_By>,
  number?: Maybe<Order_By>,
};

/** update columns of table "names" */
export enum Names_Update_Column {
  /** column name */
  Colour = 'colour',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Number = 'number'
}

/** aggregate var_pop on columns */
export type Names_Var_Pop_Fields = {
   __typename?: 'names_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  number?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "names" */
export type Names_Var_Pop_Order_By = {
  id?: Maybe<Order_By>,
  number?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Names_Var_Samp_Fields = {
   __typename?: 'names_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  number?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "names" */
export type Names_Var_Samp_Order_By = {
  id?: Maybe<Order_By>,
  number?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Names_Variance_Fields = {
   __typename?: 'names_variance_fields',
  id?: Maybe<Scalars['Float']>,
  number?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "names" */
export type Names_Variance_Order_By = {
  id?: Maybe<Order_By>,
  number?: Maybe<Order_By>,
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
   __typename?: 'query_root',
  /** fetch data from the table: "names" */
  names: Array<Names>,
  /** fetch aggregated fields from the table: "names" */
  names_aggregate: Names_Aggregate,
  /** fetch data from the table: "names" using primary key columns */
  names_by_pk?: Maybe<Names>,
};


/** query root */
export type Query_RootNamesArgs = {
  distinct_on?: Maybe<Array<Names_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Names_Order_By>>,
  where?: Maybe<Names_Bool_Exp>
};


/** query root */
export type Query_RootNames_AggregateArgs = {
  distinct_on?: Maybe<Array<Names_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Names_Order_By>>,
  where?: Maybe<Names_Bool_Exp>
};


/** query root */
export type Query_RootNames_By_PkArgs = {
  id: Scalars['Int']
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Scalars['String']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Scalars['String']>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root',
  /** fetch data from the table: "names" */
  names: Array<Names>,
  /** fetch aggregated fields from the table: "names" */
  names_aggregate: Names_Aggregate,
  /** fetch data from the table: "names" using primary key columns */
  names_by_pk?: Maybe<Names>,
};


/** subscription root */
export type Subscription_RootNamesArgs = {
  distinct_on?: Maybe<Array<Names_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Names_Order_By>>,
  where?: Maybe<Names_Bool_Exp>
};


/** subscription root */
export type Subscription_RootNames_AggregateArgs = {
  distinct_on?: Maybe<Array<Names_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Names_Order_By>>,
  where?: Maybe<Names_Bool_Exp>
};


/** subscription root */
export type Subscription_RootNames_By_PkArgs = {
  id: Scalars['Int']
};

export type NamesQueryVariables = {};


export type NamesQuery = (
  { __typename?: 'query_root' }
  & { names: Array<(
    { __typename?: 'names' }
    & Pick<Names, 'id' | 'name' | 'number' | 'colour'>
  )> }
);

export type NamesSubscriptionSubscriptionVariables = {};


export type NamesSubscriptionSubscription = (
  { __typename?: 'subscription_root' }
  & { names: Array<(
    { __typename?: 'names' }
    & Pick<Names, 'id' | 'name' | 'number' | 'colour'>
  )> }
);

export type AddNameMutationVariables = {
  name?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  color?: Maybe<Scalars['String']>
};


export type AddNameMutation = (
  { __typename: 'mutation_root' }
  & { insert_names: Maybe<(
    { __typename?: 'names_mutation_response' }
    & { returning: Array<(
      { __typename?: 'names' }
      & Pick<Names, 'id'>
    )> }
  )> }
);

export type DelNameMutationVariables = {
  id?: Maybe<Scalars['Int']>
};


export type DelNameMutation = (
  { __typename: 'mutation_root' }
  & { delete_names: Maybe<(
    { __typename?: 'names_mutation_response' }
    & { returning: Array<(
      { __typename?: 'names' }
      & Pick<Names, 'id'>
    )> }
  )> }
);


export const NamesDocument = gql`
    query Names {
  names {
    id
    name
    number
    colour
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NamesGQL extends Apollo.Query<NamesQuery, NamesQueryVariables> {
    document = NamesDocument;
    
  }
export const NamesSubscriptionDocument = gql`
    subscription NamesSubscription {
  names {
    id
    name
    number
    colour
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class NamesSubscriptionGQL extends Apollo.Subscription<NamesSubscriptionSubscription, NamesSubscriptionSubscriptionVariables> {
    document = NamesSubscriptionDocument;
    
  }
export const AddNameDocument = gql`
    mutation addName($name: String, $number: Int = 0, $color: String = "black") {
  __typename
  insert_names(objects: {colour: $color, name: $name, number: $number}) {
    returning {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddNameGQL extends Apollo.Mutation<AddNameMutation, AddNameMutationVariables> {
    document = AddNameDocument;
    
  }
export const DelNameDocument = gql`
    mutation delName($id: Int) {
  __typename
  delete_names(where: {id: {_eq: $id}}) {
    returning {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DelNameGQL extends Apollo.Mutation<DelNameMutation, DelNameMutationVariables> {
    document = DelNameDocument;
    
  }