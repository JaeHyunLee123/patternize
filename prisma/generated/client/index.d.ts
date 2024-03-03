
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model RoutineControl
 * 
 */
export type RoutineControl = $Result.DefaultSelection<Prisma.$RoutineControlPayload>
/**
 * Model DailyRoutine
 * 
 */
export type DailyRoutine = $Result.DefaultSelection<Prisma.$DailyRoutinePayload>
/**
 * Model Days
 * 
 */
export type Days = $Result.DefaultSelection<Prisma.$DaysPayload>
/**
 * Model WeeklyRoutine
 * 
 */
export type WeeklyRoutine = $Result.DefaultSelection<Prisma.$WeeklyRoutinePayload>
/**
 * Model MonthlyRoutine
 * 
 */
export type MonthlyRoutine = $Result.DefaultSelection<Prisma.$MonthlyRoutinePayload>
/**
 * Model WeekAndDay
 * 
 */
export type WeekAndDay = $Result.DefaultSelection<Prisma.$WeekAndDayPayload>
/**
 * Model Date
 * 
 */
export type Date = $Result.DefaultSelection<Prisma.$DatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Day: {
  SUN: 'SUN',
  MON: 'MON',
  TUE: 'TUE',
  WED: 'WED',
  THU: 'THU',
  FRI: 'FRI',
  SAT: 'SAT'
};

export type Day = (typeof Day)[keyof typeof Day]

}

export type Day = $Enums.Day

export const Day: typeof $Enums.Day

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.routineControl`: Exposes CRUD operations for the **RoutineControl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoutineControls
    * const routineControls = await prisma.routineControl.findMany()
    * ```
    */
  get routineControl(): Prisma.RoutineControlDelegate<ExtArgs>;

  /**
   * `prisma.dailyRoutine`: Exposes CRUD operations for the **DailyRoutine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyRoutines
    * const dailyRoutines = await prisma.dailyRoutine.findMany()
    * ```
    */
  get dailyRoutine(): Prisma.DailyRoutineDelegate<ExtArgs>;

  /**
   * `prisma.days`: Exposes CRUD operations for the **Days** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Days
    * const days = await prisma.days.findMany()
    * ```
    */
  get days(): Prisma.DaysDelegate<ExtArgs>;

  /**
   * `prisma.weeklyRoutine`: Exposes CRUD operations for the **WeeklyRoutine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklyRoutines
    * const weeklyRoutines = await prisma.weeklyRoutine.findMany()
    * ```
    */
  get weeklyRoutine(): Prisma.WeeklyRoutineDelegate<ExtArgs>;

  /**
   * `prisma.monthlyRoutine`: Exposes CRUD operations for the **MonthlyRoutine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlyRoutines
    * const monthlyRoutines = await prisma.monthlyRoutine.findMany()
    * ```
    */
  get monthlyRoutine(): Prisma.MonthlyRoutineDelegate<ExtArgs>;

  /**
   * `prisma.weekAndDay`: Exposes CRUD operations for the **WeekAndDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeekAndDays
    * const weekAndDays = await prisma.weekAndDay.findMany()
    * ```
    */
  get weekAndDay(): Prisma.WeekAndDayDelegate<ExtArgs>;

  /**
   * `prisma.date`: Exposes CRUD operations for the **Date** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dates
    * const dates = await prisma.date.findMany()
    * ```
    */
  get date(): Prisma.DateDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    RoutineControl: 'RoutineControl',
    DailyRoutine: 'DailyRoutine',
    Days: 'Days',
    WeeklyRoutine: 'WeeklyRoutine',
    MonthlyRoutine: 'MonthlyRoutine',
    WeekAndDay: 'WeekAndDay',
    Date: 'Date'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'account' | 'session' | 'user' | 'verificationToken' | 'routineControl' | 'dailyRoutine' | 'days' | 'weeklyRoutine' | 'monthlyRoutine' | 'weekAndDay' | 'date'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      RoutineControl: {
        payload: Prisma.$RoutineControlPayload<ExtArgs>
        fields: Prisma.RoutineControlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutineControlFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutineControlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutineControlFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutineControlPayload>
          }
          findFirst: {
            args: Prisma.RoutineControlFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutineControlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutineControlFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutineControlPayload>
          }
          findMany: {
            args: Prisma.RoutineControlFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutineControlPayload>[]
          }
          create: {
            args: Prisma.RoutineControlCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutineControlPayload>
          }
          createMany: {
            args: Prisma.RoutineControlCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RoutineControlDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutineControlPayload>
          }
          update: {
            args: Prisma.RoutineControlUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutineControlPayload>
          }
          deleteMany: {
            args: Prisma.RoutineControlDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoutineControlUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoutineControlUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoutineControlPayload>
          }
          aggregate: {
            args: Prisma.RoutineControlAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoutineControl>
          }
          groupBy: {
            args: Prisma.RoutineControlGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoutineControlGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutineControlCountArgs<ExtArgs>,
            result: $Utils.Optional<RoutineControlCountAggregateOutputType> | number
          }
        }
      }
      DailyRoutine: {
        payload: Prisma.$DailyRoutinePayload<ExtArgs>
        fields: Prisma.DailyRoutineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyRoutineFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyRoutinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyRoutineFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyRoutinePayload>
          }
          findFirst: {
            args: Prisma.DailyRoutineFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyRoutinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyRoutineFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyRoutinePayload>
          }
          findMany: {
            args: Prisma.DailyRoutineFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyRoutinePayload>[]
          }
          create: {
            args: Prisma.DailyRoutineCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyRoutinePayload>
          }
          createMany: {
            args: Prisma.DailyRoutineCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DailyRoutineDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyRoutinePayload>
          }
          update: {
            args: Prisma.DailyRoutineUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyRoutinePayload>
          }
          deleteMany: {
            args: Prisma.DailyRoutineDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DailyRoutineUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DailyRoutineUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyRoutinePayload>
          }
          aggregate: {
            args: Prisma.DailyRoutineAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDailyRoutine>
          }
          groupBy: {
            args: Prisma.DailyRoutineGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DailyRoutineGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyRoutineCountArgs<ExtArgs>,
            result: $Utils.Optional<DailyRoutineCountAggregateOutputType> | number
          }
        }
      }
      Days: {
        payload: Prisma.$DaysPayload<ExtArgs>
        fields: Prisma.DaysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DaysFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DaysFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaysPayload>
          }
          findFirst: {
            args: Prisma.DaysFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DaysFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaysPayload>
          }
          findMany: {
            args: Prisma.DaysFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaysPayload>[]
          }
          create: {
            args: Prisma.DaysCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaysPayload>
          }
          createMany: {
            args: Prisma.DaysCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DaysDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaysPayload>
          }
          update: {
            args: Prisma.DaysUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaysPayload>
          }
          deleteMany: {
            args: Prisma.DaysDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DaysUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DaysUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaysPayload>
          }
          aggregate: {
            args: Prisma.DaysAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDays>
          }
          groupBy: {
            args: Prisma.DaysGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DaysGroupByOutputType>[]
          }
          count: {
            args: Prisma.DaysCountArgs<ExtArgs>,
            result: $Utils.Optional<DaysCountAggregateOutputType> | number
          }
        }
      }
      WeeklyRoutine: {
        payload: Prisma.$WeeklyRoutinePayload<ExtArgs>
        fields: Prisma.WeeklyRoutineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklyRoutineFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeeklyRoutinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklyRoutineFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeeklyRoutinePayload>
          }
          findFirst: {
            args: Prisma.WeeklyRoutineFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeeklyRoutinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklyRoutineFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeeklyRoutinePayload>
          }
          findMany: {
            args: Prisma.WeeklyRoutineFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeeklyRoutinePayload>[]
          }
          create: {
            args: Prisma.WeeklyRoutineCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeeklyRoutinePayload>
          }
          createMany: {
            args: Prisma.WeeklyRoutineCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WeeklyRoutineDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeeklyRoutinePayload>
          }
          update: {
            args: Prisma.WeeklyRoutineUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeeklyRoutinePayload>
          }
          deleteMany: {
            args: Prisma.WeeklyRoutineDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklyRoutineUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WeeklyRoutineUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeeklyRoutinePayload>
          }
          aggregate: {
            args: Prisma.WeeklyRoutineAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWeeklyRoutine>
          }
          groupBy: {
            args: Prisma.WeeklyRoutineGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WeeklyRoutineGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklyRoutineCountArgs<ExtArgs>,
            result: $Utils.Optional<WeeklyRoutineCountAggregateOutputType> | number
          }
        }
      }
      MonthlyRoutine: {
        payload: Prisma.$MonthlyRoutinePayload<ExtArgs>
        fields: Prisma.MonthlyRoutineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlyRoutineFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonthlyRoutinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlyRoutineFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonthlyRoutinePayload>
          }
          findFirst: {
            args: Prisma.MonthlyRoutineFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonthlyRoutinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlyRoutineFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonthlyRoutinePayload>
          }
          findMany: {
            args: Prisma.MonthlyRoutineFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonthlyRoutinePayload>[]
          }
          create: {
            args: Prisma.MonthlyRoutineCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonthlyRoutinePayload>
          }
          createMany: {
            args: Prisma.MonthlyRoutineCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MonthlyRoutineDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonthlyRoutinePayload>
          }
          update: {
            args: Prisma.MonthlyRoutineUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonthlyRoutinePayload>
          }
          deleteMany: {
            args: Prisma.MonthlyRoutineDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlyRoutineUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MonthlyRoutineUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonthlyRoutinePayload>
          }
          aggregate: {
            args: Prisma.MonthlyRoutineAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMonthlyRoutine>
          }
          groupBy: {
            args: Prisma.MonthlyRoutineGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MonthlyRoutineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlyRoutineCountArgs<ExtArgs>,
            result: $Utils.Optional<MonthlyRoutineCountAggregateOutputType> | number
          }
        }
      }
      WeekAndDay: {
        payload: Prisma.$WeekAndDayPayload<ExtArgs>
        fields: Prisma.WeekAndDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeekAndDayFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeekAndDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeekAndDayFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeekAndDayPayload>
          }
          findFirst: {
            args: Prisma.WeekAndDayFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeekAndDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeekAndDayFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeekAndDayPayload>
          }
          findMany: {
            args: Prisma.WeekAndDayFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeekAndDayPayload>[]
          }
          create: {
            args: Prisma.WeekAndDayCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeekAndDayPayload>
          }
          createMany: {
            args: Prisma.WeekAndDayCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WeekAndDayDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeekAndDayPayload>
          }
          update: {
            args: Prisma.WeekAndDayUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeekAndDayPayload>
          }
          deleteMany: {
            args: Prisma.WeekAndDayDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WeekAndDayUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WeekAndDayUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeekAndDayPayload>
          }
          aggregate: {
            args: Prisma.WeekAndDayAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWeekAndDay>
          }
          groupBy: {
            args: Prisma.WeekAndDayGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WeekAndDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeekAndDayCountArgs<ExtArgs>,
            result: $Utils.Optional<WeekAndDayCountAggregateOutputType> | number
          }
        }
      }
      Date: {
        payload: Prisma.$DatePayload<ExtArgs>
        fields: Prisma.DateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatePayload>
          }
          findFirst: {
            args: Prisma.DateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatePayload>
          }
          findMany: {
            args: Prisma.DateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatePayload>[]
          }
          create: {
            args: Prisma.DateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatePayload>
          }
          createMany: {
            args: Prisma.DateCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatePayload>
          }
          update: {
            args: Prisma.DateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatePayload>
          }
          deleteMany: {
            args: Prisma.DateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatePayload>
          }
          aggregate: {
            args: Prisma.DateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDate>
          }
          groupBy: {
            args: Prisma.DateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DateGroupByOutputType>[]
          }
          count: {
            args: Prisma.DateCountArgs<ExtArgs>,
            result: $Utils.Optional<DateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }



  /**
   * Count Type RoutineControlCountOutputType
   */

  export type RoutineControlCountOutputType = {
    dailyRoutines: number
    weeklyRoutines: number
    monthlyRoutines: number
  }

  export type RoutineControlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyRoutines?: boolean | RoutineControlCountOutputTypeCountDailyRoutinesArgs
    weeklyRoutines?: boolean | RoutineControlCountOutputTypeCountWeeklyRoutinesArgs
    monthlyRoutines?: boolean | RoutineControlCountOutputTypeCountMonthlyRoutinesArgs
  }

  // Custom InputTypes

  /**
   * RoutineControlCountOutputType without action
   */
  export type RoutineControlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineControlCountOutputType
     */
    select?: RoutineControlCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RoutineControlCountOutputType without action
   */
  export type RoutineControlCountOutputTypeCountDailyRoutinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyRoutineWhereInput
  }


  /**
   * RoutineControlCountOutputType without action
   */
  export type RoutineControlCountOutputTypeCountWeeklyRoutinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyRoutineWhereInput
  }


  /**
   * RoutineControlCountOutputType without action
   */
  export type RoutineControlCountOutputTypeCountMonthlyRoutinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyRoutineWhereInput
  }



  /**
   * Count Type DaysCountOutputType
   */

  export type DaysCountOutputType = {
    WeeklyRoutine: number
  }

  export type DaysCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WeeklyRoutine?: boolean | DaysCountOutputTypeCountWeeklyRoutineArgs
  }

  // Custom InputTypes

  /**
   * DaysCountOutputType without action
   */
  export type DaysCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaysCountOutputType
     */
    select?: DaysCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DaysCountOutputType without action
   */
  export type DaysCountOutputTypeCountWeeklyRoutineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyRoutineWhereInput
  }



  /**
   * Count Type WeekAndDayCountOutputType
   */

  export type WeekAndDayCountOutputType = {
    MonthlyRoutine: number
  }

  export type WeekAndDayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MonthlyRoutine?: boolean | WeekAndDayCountOutputTypeCountMonthlyRoutineArgs
  }

  // Custom InputTypes

  /**
   * WeekAndDayCountOutputType without action
   */
  export type WeekAndDayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekAndDayCountOutputType
     */
    select?: WeekAndDayCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WeekAndDayCountOutputType without action
   */
  export type WeekAndDayCountOutputTypeCountMonthlyRoutineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyRoutineWhereInput
  }



  /**
   * Count Type DateCountOutputType
   */

  export type DateCountOutputType = {
    MonthlyRoutine: number
  }

  export type DateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MonthlyRoutine?: boolean | DateCountOutputTypeCountMonthlyRoutineArgs
  }

  // Custom InputTypes

  /**
   * DateCountOutputType without action
   */
  export type DateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateCountOutputType
     */
    select?: DateCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DateCountOutputType without action
   */
  export type DateCountOutputTypeCountMonthlyRoutineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyRoutineWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    username: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    username: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    username: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    username?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    username?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    username?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    username: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    routineControl?: boolean | User$routineControlArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    routineControl?: boolean | User$routineControlArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      routineControl: Prisma.$RoutineControlPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      username: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    routineControl<T extends User$routineControlArgs<ExtArgs> = {}>(args?: Subset<T, User$routineControlArgs<ExtArgs>>): Prisma__RoutineControlClient<$Result.GetResult<Prisma.$RoutineControlPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * User.routineControl
   */
  export type User$routineControlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineControl
     */
    select?: RoutineControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineControlInclude<ExtArgs> | null
    where?: RoutineControlWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }


  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     *     @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     *     @example
     *     // Create many VerificationTokens
     *     const verificationToken = await prisma.verificationToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }


  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }


  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }



  /**
   * Model RoutineControl
   */

  export type AggregateRoutineControl = {
    _count: RoutineControlCountAggregateOutputType | null
    _min: RoutineControlMinAggregateOutputType | null
    _max: RoutineControlMaxAggregateOutputType | null
  }

  export type RoutineControlMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type RoutineControlMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type RoutineControlCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type RoutineControlMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type RoutineControlMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type RoutineControlCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type RoutineControlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineControl to aggregate.
     */
    where?: RoutineControlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineControls to fetch.
     */
    orderBy?: RoutineControlOrderByWithRelationInput | RoutineControlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutineControlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineControls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineControls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoutineControls
    **/
    _count?: true | RoutineControlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutineControlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutineControlMaxAggregateInputType
  }

  export type GetRoutineControlAggregateType<T extends RoutineControlAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutineControl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutineControl[P]>
      : GetScalarType<T[P], AggregateRoutineControl[P]>
  }




  export type RoutineControlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineControlWhereInput
    orderBy?: RoutineControlOrderByWithAggregationInput | RoutineControlOrderByWithAggregationInput[]
    by: RoutineControlScalarFieldEnum[] | RoutineControlScalarFieldEnum
    having?: RoutineControlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutineControlCountAggregateInputType | true
    _min?: RoutineControlMinAggregateInputType
    _max?: RoutineControlMaxAggregateInputType
  }

  export type RoutineControlGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: RoutineControlCountAggregateOutputType | null
    _min: RoutineControlMinAggregateOutputType | null
    _max: RoutineControlMaxAggregateOutputType | null
  }

  type GetRoutineControlGroupByPayload<T extends RoutineControlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutineControlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutineControlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutineControlGroupByOutputType[P]>
            : GetScalarType<T[P], RoutineControlGroupByOutputType[P]>
        }
      >
    >


  export type RoutineControlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dailyRoutines?: boolean | RoutineControl$dailyRoutinesArgs<ExtArgs>
    weeklyRoutines?: boolean | RoutineControl$weeklyRoutinesArgs<ExtArgs>
    monthlyRoutines?: boolean | RoutineControl$monthlyRoutinesArgs<ExtArgs>
    _count?: boolean | RoutineControlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routineControl"]>

  export type RoutineControlSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type RoutineControlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dailyRoutines?: boolean | RoutineControl$dailyRoutinesArgs<ExtArgs>
    weeklyRoutines?: boolean | RoutineControl$weeklyRoutinesArgs<ExtArgs>
    monthlyRoutines?: boolean | RoutineControl$monthlyRoutinesArgs<ExtArgs>
    _count?: boolean | RoutineControlCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RoutineControlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoutineControl"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      dailyRoutines: Prisma.$DailyRoutinePayload<ExtArgs>[]
      weeklyRoutines: Prisma.$WeeklyRoutinePayload<ExtArgs>[]
      monthlyRoutines: Prisma.$MonthlyRoutinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["routineControl"]>
    composites: {}
  }


  type RoutineControlGetPayload<S extends boolean | null | undefined | RoutineControlDefaultArgs> = $Result.GetResult<Prisma.$RoutineControlPayload, S>

  type RoutineControlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoutineControlFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: RoutineControlCountAggregateInputType | true
    }

  export interface RoutineControlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoutineControl'], meta: { name: 'RoutineControl' } }
    /**
     * Find zero or one RoutineControl that matches the filter.
     * @param {RoutineControlFindUniqueArgs} args - Arguments to find a RoutineControl
     * @example
     * // Get one RoutineControl
     * const routineControl = await prisma.routineControl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoutineControlFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoutineControlFindUniqueArgs<ExtArgs>>
    ): Prisma__RoutineControlClient<$Result.GetResult<Prisma.$RoutineControlPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RoutineControl that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoutineControlFindUniqueOrThrowArgs} args - Arguments to find a RoutineControl
     * @example
     * // Get one RoutineControl
     * const routineControl = await prisma.routineControl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoutineControlFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoutineControlFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoutineControlClient<$Result.GetResult<Prisma.$RoutineControlPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RoutineControl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineControlFindFirstArgs} args - Arguments to find a RoutineControl
     * @example
     * // Get one RoutineControl
     * const routineControl = await prisma.routineControl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoutineControlFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoutineControlFindFirstArgs<ExtArgs>>
    ): Prisma__RoutineControlClient<$Result.GetResult<Prisma.$RoutineControlPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RoutineControl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineControlFindFirstOrThrowArgs} args - Arguments to find a RoutineControl
     * @example
     * // Get one RoutineControl
     * const routineControl = await prisma.routineControl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoutineControlFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoutineControlFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoutineControlClient<$Result.GetResult<Prisma.$RoutineControlPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RoutineControls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineControlFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoutineControls
     * const routineControls = await prisma.routineControl.findMany()
     * 
     * // Get first 10 RoutineControls
     * const routineControls = await prisma.routineControl.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routineControlWithIdOnly = await prisma.routineControl.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoutineControlFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoutineControlFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineControlPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RoutineControl.
     * @param {RoutineControlCreateArgs} args - Arguments to create a RoutineControl.
     * @example
     * // Create one RoutineControl
     * const RoutineControl = await prisma.routineControl.create({
     *   data: {
     *     // ... data to create a RoutineControl
     *   }
     * })
     * 
    **/
    create<T extends RoutineControlCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoutineControlCreateArgs<ExtArgs>>
    ): Prisma__RoutineControlClient<$Result.GetResult<Prisma.$RoutineControlPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RoutineControls.
     *     @param {RoutineControlCreateManyArgs} args - Arguments to create many RoutineControls.
     *     @example
     *     // Create many RoutineControls
     *     const routineControl = await prisma.routineControl.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoutineControlCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoutineControlCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoutineControl.
     * @param {RoutineControlDeleteArgs} args - Arguments to delete one RoutineControl.
     * @example
     * // Delete one RoutineControl
     * const RoutineControl = await prisma.routineControl.delete({
     *   where: {
     *     // ... filter to delete one RoutineControl
     *   }
     * })
     * 
    **/
    delete<T extends RoutineControlDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoutineControlDeleteArgs<ExtArgs>>
    ): Prisma__RoutineControlClient<$Result.GetResult<Prisma.$RoutineControlPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RoutineControl.
     * @param {RoutineControlUpdateArgs} args - Arguments to update one RoutineControl.
     * @example
     * // Update one RoutineControl
     * const routineControl = await prisma.routineControl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoutineControlUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoutineControlUpdateArgs<ExtArgs>>
    ): Prisma__RoutineControlClient<$Result.GetResult<Prisma.$RoutineControlPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RoutineControls.
     * @param {RoutineControlDeleteManyArgs} args - Arguments to filter RoutineControls to delete.
     * @example
     * // Delete a few RoutineControls
     * const { count } = await prisma.routineControl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoutineControlDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoutineControlDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutineControls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineControlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoutineControls
     * const routineControl = await prisma.routineControl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoutineControlUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoutineControlUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoutineControl.
     * @param {RoutineControlUpsertArgs} args - Arguments to update or create a RoutineControl.
     * @example
     * // Update or create a RoutineControl
     * const routineControl = await prisma.routineControl.upsert({
     *   create: {
     *     // ... data to create a RoutineControl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoutineControl we want to update
     *   }
     * })
    **/
    upsert<T extends RoutineControlUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoutineControlUpsertArgs<ExtArgs>>
    ): Prisma__RoutineControlClient<$Result.GetResult<Prisma.$RoutineControlPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RoutineControls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineControlCountArgs} args - Arguments to filter RoutineControls to count.
     * @example
     * // Count the number of RoutineControls
     * const count = await prisma.routineControl.count({
     *   where: {
     *     // ... the filter for the RoutineControls we want to count
     *   }
     * })
    **/
    count<T extends RoutineControlCountArgs>(
      args?: Subset<T, RoutineControlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutineControlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoutineControl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineControlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoutineControlAggregateArgs>(args: Subset<T, RoutineControlAggregateArgs>): Prisma.PrismaPromise<GetRoutineControlAggregateType<T>>

    /**
     * Group by RoutineControl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineControlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoutineControlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutineControlGroupByArgs['orderBy'] }
        : { orderBy?: RoutineControlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoutineControlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutineControlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoutineControl model
   */
  readonly fields: RoutineControlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoutineControl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutineControlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    dailyRoutines<T extends RoutineControl$dailyRoutinesArgs<ExtArgs> = {}>(args?: Subset<T, RoutineControl$dailyRoutinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, 'findMany'> | Null>;

    weeklyRoutines<T extends RoutineControl$weeklyRoutinesArgs<ExtArgs> = {}>(args?: Subset<T, RoutineControl$weeklyRoutinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyRoutinePayload<ExtArgs>, T, 'findMany'> | Null>;

    monthlyRoutines<T extends RoutineControl$monthlyRoutinesArgs<ExtArgs> = {}>(args?: Subset<T, RoutineControl$monthlyRoutinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyRoutinePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RoutineControl model
   */ 
  interface RoutineControlFieldRefs {
    readonly id: FieldRef<"RoutineControl", 'String'>
    readonly createdAt: FieldRef<"RoutineControl", 'DateTime'>
    readonly updatedAt: FieldRef<"RoutineControl", 'DateTime'>
    readonly userId: FieldRef<"RoutineControl", 'String'>
  }
    

  // Custom InputTypes

  /**
   * RoutineControl findUnique
   */
  export type RoutineControlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineControl
     */
    select?: RoutineControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineControlInclude<ExtArgs> | null
    /**
     * Filter, which RoutineControl to fetch.
     */
    where: RoutineControlWhereUniqueInput
  }


  /**
   * RoutineControl findUniqueOrThrow
   */
  export type RoutineControlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineControl
     */
    select?: RoutineControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineControlInclude<ExtArgs> | null
    /**
     * Filter, which RoutineControl to fetch.
     */
    where: RoutineControlWhereUniqueInput
  }


  /**
   * RoutineControl findFirst
   */
  export type RoutineControlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineControl
     */
    select?: RoutineControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineControlInclude<ExtArgs> | null
    /**
     * Filter, which RoutineControl to fetch.
     */
    where?: RoutineControlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineControls to fetch.
     */
    orderBy?: RoutineControlOrderByWithRelationInput | RoutineControlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineControls.
     */
    cursor?: RoutineControlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineControls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineControls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineControls.
     */
    distinct?: RoutineControlScalarFieldEnum | RoutineControlScalarFieldEnum[]
  }


  /**
   * RoutineControl findFirstOrThrow
   */
  export type RoutineControlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineControl
     */
    select?: RoutineControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineControlInclude<ExtArgs> | null
    /**
     * Filter, which RoutineControl to fetch.
     */
    where?: RoutineControlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineControls to fetch.
     */
    orderBy?: RoutineControlOrderByWithRelationInput | RoutineControlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineControls.
     */
    cursor?: RoutineControlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineControls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineControls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineControls.
     */
    distinct?: RoutineControlScalarFieldEnum | RoutineControlScalarFieldEnum[]
  }


  /**
   * RoutineControl findMany
   */
  export type RoutineControlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineControl
     */
    select?: RoutineControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineControlInclude<ExtArgs> | null
    /**
     * Filter, which RoutineControls to fetch.
     */
    where?: RoutineControlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineControls to fetch.
     */
    orderBy?: RoutineControlOrderByWithRelationInput | RoutineControlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoutineControls.
     */
    cursor?: RoutineControlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineControls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineControls.
     */
    skip?: number
    distinct?: RoutineControlScalarFieldEnum | RoutineControlScalarFieldEnum[]
  }


  /**
   * RoutineControl create
   */
  export type RoutineControlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineControl
     */
    select?: RoutineControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineControlInclude<ExtArgs> | null
    /**
     * The data needed to create a RoutineControl.
     */
    data: XOR<RoutineControlCreateInput, RoutineControlUncheckedCreateInput>
  }


  /**
   * RoutineControl createMany
   */
  export type RoutineControlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoutineControls.
     */
    data: RoutineControlCreateManyInput | RoutineControlCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * RoutineControl update
   */
  export type RoutineControlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineControl
     */
    select?: RoutineControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineControlInclude<ExtArgs> | null
    /**
     * The data needed to update a RoutineControl.
     */
    data: XOR<RoutineControlUpdateInput, RoutineControlUncheckedUpdateInput>
    /**
     * Choose, which RoutineControl to update.
     */
    where: RoutineControlWhereUniqueInput
  }


  /**
   * RoutineControl updateMany
   */
  export type RoutineControlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoutineControls.
     */
    data: XOR<RoutineControlUpdateManyMutationInput, RoutineControlUncheckedUpdateManyInput>
    /**
     * Filter which RoutineControls to update
     */
    where?: RoutineControlWhereInput
  }


  /**
   * RoutineControl upsert
   */
  export type RoutineControlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineControl
     */
    select?: RoutineControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineControlInclude<ExtArgs> | null
    /**
     * The filter to search for the RoutineControl to update in case it exists.
     */
    where: RoutineControlWhereUniqueInput
    /**
     * In case the RoutineControl found by the `where` argument doesn't exist, create a new RoutineControl with this data.
     */
    create: XOR<RoutineControlCreateInput, RoutineControlUncheckedCreateInput>
    /**
     * In case the RoutineControl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutineControlUpdateInput, RoutineControlUncheckedUpdateInput>
  }


  /**
   * RoutineControl delete
   */
  export type RoutineControlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineControl
     */
    select?: RoutineControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineControlInclude<ExtArgs> | null
    /**
     * Filter which RoutineControl to delete.
     */
    where: RoutineControlWhereUniqueInput
  }


  /**
   * RoutineControl deleteMany
   */
  export type RoutineControlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineControls to delete
     */
    where?: RoutineControlWhereInput
  }


  /**
   * RoutineControl.dailyRoutines
   */
  export type RoutineControl$dailyRoutinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRoutineInclude<ExtArgs> | null
    where?: DailyRoutineWhereInput
    orderBy?: DailyRoutineOrderByWithRelationInput | DailyRoutineOrderByWithRelationInput[]
    cursor?: DailyRoutineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyRoutineScalarFieldEnum | DailyRoutineScalarFieldEnum[]
  }


  /**
   * RoutineControl.weeklyRoutines
   */
  export type RoutineControl$weeklyRoutinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoutine
     */
    select?: WeeklyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeeklyRoutineInclude<ExtArgs> | null
    where?: WeeklyRoutineWhereInput
    orderBy?: WeeklyRoutineOrderByWithRelationInput | WeeklyRoutineOrderByWithRelationInput[]
    cursor?: WeeklyRoutineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklyRoutineScalarFieldEnum | WeeklyRoutineScalarFieldEnum[]
  }


  /**
   * RoutineControl.monthlyRoutines
   */
  export type RoutineControl$monthlyRoutinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRoutine
     */
    select?: MonthlyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthlyRoutineInclude<ExtArgs> | null
    where?: MonthlyRoutineWhereInput
    orderBy?: MonthlyRoutineOrderByWithRelationInput | MonthlyRoutineOrderByWithRelationInput[]
    cursor?: MonthlyRoutineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyRoutineScalarFieldEnum | MonthlyRoutineScalarFieldEnum[]
  }


  /**
   * RoutineControl without action
   */
  export type RoutineControlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineControl
     */
    select?: RoutineControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineControlInclude<ExtArgs> | null
  }



  /**
   * Model DailyRoutine
   */

  export type AggregateDailyRoutine = {
    _count: DailyRoutineCountAggregateOutputType | null
    _min: DailyRoutineMinAggregateOutputType | null
    _max: DailyRoutineMaxAggregateOutputType | null
  }

  export type DailyRoutineMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    routineControlId: string | null
  }

  export type DailyRoutineMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    routineControlId: string | null
  }

  export type DailyRoutineCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    content: number
    routineControlId: number
    _all: number
  }


  export type DailyRoutineMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    routineControlId?: true
  }

  export type DailyRoutineMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    routineControlId?: true
  }

  export type DailyRoutineCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    routineControlId?: true
    _all?: true
  }

  export type DailyRoutineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyRoutine to aggregate.
     */
    where?: DailyRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRoutines to fetch.
     */
    orderBy?: DailyRoutineOrderByWithRelationInput | DailyRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyRoutines
    **/
    _count?: true | DailyRoutineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyRoutineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyRoutineMaxAggregateInputType
  }

  export type GetDailyRoutineAggregateType<T extends DailyRoutineAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyRoutine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyRoutine[P]>
      : GetScalarType<T[P], AggregateDailyRoutine[P]>
  }




  export type DailyRoutineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyRoutineWhereInput
    orderBy?: DailyRoutineOrderByWithAggregationInput | DailyRoutineOrderByWithAggregationInput[]
    by: DailyRoutineScalarFieldEnum[] | DailyRoutineScalarFieldEnum
    having?: DailyRoutineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyRoutineCountAggregateInputType | true
    _min?: DailyRoutineMinAggregateInputType
    _max?: DailyRoutineMaxAggregateInputType
  }

  export type DailyRoutineGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    content: string
    routineControlId: string | null
    _count: DailyRoutineCountAggregateOutputType | null
    _min: DailyRoutineMinAggregateOutputType | null
    _max: DailyRoutineMaxAggregateOutputType | null
  }

  type GetDailyRoutineGroupByPayload<T extends DailyRoutineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyRoutineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyRoutineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyRoutineGroupByOutputType[P]>
            : GetScalarType<T[P], DailyRoutineGroupByOutputType[P]>
        }
      >
    >


  export type DailyRoutineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    routineControlId?: boolean
    routineControl?: boolean | DailyRoutine$routineControlArgs<ExtArgs>
  }, ExtArgs["result"]["dailyRoutine"]>

  export type DailyRoutineSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    routineControlId?: boolean
  }

  export type DailyRoutineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routineControl?: boolean | DailyRoutine$routineControlArgs<ExtArgs>
  }


  export type $DailyRoutinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyRoutine"
    objects: {
      routineControl: Prisma.$RoutineControlPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      content: string
      routineControlId: string | null
    }, ExtArgs["result"]["dailyRoutine"]>
    composites: {}
  }


  type DailyRoutineGetPayload<S extends boolean | null | undefined | DailyRoutineDefaultArgs> = $Result.GetResult<Prisma.$DailyRoutinePayload, S>

  type DailyRoutineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailyRoutineFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DailyRoutineCountAggregateInputType | true
    }

  export interface DailyRoutineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyRoutine'], meta: { name: 'DailyRoutine' } }
    /**
     * Find zero or one DailyRoutine that matches the filter.
     * @param {DailyRoutineFindUniqueArgs} args - Arguments to find a DailyRoutine
     * @example
     * // Get one DailyRoutine
     * const dailyRoutine = await prisma.dailyRoutine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DailyRoutineFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DailyRoutineFindUniqueArgs<ExtArgs>>
    ): Prisma__DailyRoutineClient<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DailyRoutine that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DailyRoutineFindUniqueOrThrowArgs} args - Arguments to find a DailyRoutine
     * @example
     * // Get one DailyRoutine
     * const dailyRoutine = await prisma.dailyRoutine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DailyRoutineFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyRoutineFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DailyRoutineClient<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DailyRoutine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRoutineFindFirstArgs} args - Arguments to find a DailyRoutine
     * @example
     * // Get one DailyRoutine
     * const dailyRoutine = await prisma.dailyRoutine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DailyRoutineFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyRoutineFindFirstArgs<ExtArgs>>
    ): Prisma__DailyRoutineClient<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DailyRoutine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRoutineFindFirstOrThrowArgs} args - Arguments to find a DailyRoutine
     * @example
     * // Get one DailyRoutine
     * const dailyRoutine = await prisma.dailyRoutine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DailyRoutineFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyRoutineFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DailyRoutineClient<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DailyRoutines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRoutineFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyRoutines
     * const dailyRoutines = await prisma.dailyRoutine.findMany()
     * 
     * // Get first 10 DailyRoutines
     * const dailyRoutines = await prisma.dailyRoutine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyRoutineWithIdOnly = await prisma.dailyRoutine.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DailyRoutineFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyRoutineFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DailyRoutine.
     * @param {DailyRoutineCreateArgs} args - Arguments to create a DailyRoutine.
     * @example
     * // Create one DailyRoutine
     * const DailyRoutine = await prisma.dailyRoutine.create({
     *   data: {
     *     // ... data to create a DailyRoutine
     *   }
     * })
     * 
    **/
    create<T extends DailyRoutineCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DailyRoutineCreateArgs<ExtArgs>>
    ): Prisma__DailyRoutineClient<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DailyRoutines.
     *     @param {DailyRoutineCreateManyArgs} args - Arguments to create many DailyRoutines.
     *     @example
     *     // Create many DailyRoutines
     *     const dailyRoutine = await prisma.dailyRoutine.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DailyRoutineCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyRoutineCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DailyRoutine.
     * @param {DailyRoutineDeleteArgs} args - Arguments to delete one DailyRoutine.
     * @example
     * // Delete one DailyRoutine
     * const DailyRoutine = await prisma.dailyRoutine.delete({
     *   where: {
     *     // ... filter to delete one DailyRoutine
     *   }
     * })
     * 
    **/
    delete<T extends DailyRoutineDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DailyRoutineDeleteArgs<ExtArgs>>
    ): Prisma__DailyRoutineClient<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DailyRoutine.
     * @param {DailyRoutineUpdateArgs} args - Arguments to update one DailyRoutine.
     * @example
     * // Update one DailyRoutine
     * const dailyRoutine = await prisma.dailyRoutine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DailyRoutineUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DailyRoutineUpdateArgs<ExtArgs>>
    ): Prisma__DailyRoutineClient<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DailyRoutines.
     * @param {DailyRoutineDeleteManyArgs} args - Arguments to filter DailyRoutines to delete.
     * @example
     * // Delete a few DailyRoutines
     * const { count } = await prisma.dailyRoutine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DailyRoutineDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyRoutineDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyRoutines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRoutineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyRoutines
     * const dailyRoutine = await prisma.dailyRoutine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DailyRoutineUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DailyRoutineUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyRoutine.
     * @param {DailyRoutineUpsertArgs} args - Arguments to update or create a DailyRoutine.
     * @example
     * // Update or create a DailyRoutine
     * const dailyRoutine = await prisma.dailyRoutine.upsert({
     *   create: {
     *     // ... data to create a DailyRoutine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyRoutine we want to update
     *   }
     * })
    **/
    upsert<T extends DailyRoutineUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DailyRoutineUpsertArgs<ExtArgs>>
    ): Prisma__DailyRoutineClient<$Result.GetResult<Prisma.$DailyRoutinePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DailyRoutines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRoutineCountArgs} args - Arguments to filter DailyRoutines to count.
     * @example
     * // Count the number of DailyRoutines
     * const count = await prisma.dailyRoutine.count({
     *   where: {
     *     // ... the filter for the DailyRoutines we want to count
     *   }
     * })
    **/
    count<T extends DailyRoutineCountArgs>(
      args?: Subset<T, DailyRoutineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyRoutineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyRoutine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRoutineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyRoutineAggregateArgs>(args: Subset<T, DailyRoutineAggregateArgs>): Prisma.PrismaPromise<GetDailyRoutineAggregateType<T>>

    /**
     * Group by DailyRoutine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRoutineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyRoutineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyRoutineGroupByArgs['orderBy'] }
        : { orderBy?: DailyRoutineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyRoutineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyRoutineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyRoutine model
   */
  readonly fields: DailyRoutineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyRoutine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyRoutineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    routineControl<T extends DailyRoutine$routineControlArgs<ExtArgs> = {}>(args?: Subset<T, DailyRoutine$routineControlArgs<ExtArgs>>): Prisma__RoutineControlClient<$Result.GetResult<Prisma.$RoutineControlPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DailyRoutine model
   */ 
  interface DailyRoutineFieldRefs {
    readonly id: FieldRef<"DailyRoutine", 'String'>
    readonly createdAt: FieldRef<"DailyRoutine", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyRoutine", 'DateTime'>
    readonly content: FieldRef<"DailyRoutine", 'String'>
    readonly routineControlId: FieldRef<"DailyRoutine", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DailyRoutine findUnique
   */
  export type DailyRoutineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRoutineInclude<ExtArgs> | null
    /**
     * Filter, which DailyRoutine to fetch.
     */
    where: DailyRoutineWhereUniqueInput
  }


  /**
   * DailyRoutine findUniqueOrThrow
   */
  export type DailyRoutineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRoutineInclude<ExtArgs> | null
    /**
     * Filter, which DailyRoutine to fetch.
     */
    where: DailyRoutineWhereUniqueInput
  }


  /**
   * DailyRoutine findFirst
   */
  export type DailyRoutineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRoutineInclude<ExtArgs> | null
    /**
     * Filter, which DailyRoutine to fetch.
     */
    where?: DailyRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRoutines to fetch.
     */
    orderBy?: DailyRoutineOrderByWithRelationInput | DailyRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyRoutines.
     */
    cursor?: DailyRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyRoutines.
     */
    distinct?: DailyRoutineScalarFieldEnum | DailyRoutineScalarFieldEnum[]
  }


  /**
   * DailyRoutine findFirstOrThrow
   */
  export type DailyRoutineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRoutineInclude<ExtArgs> | null
    /**
     * Filter, which DailyRoutine to fetch.
     */
    where?: DailyRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRoutines to fetch.
     */
    orderBy?: DailyRoutineOrderByWithRelationInput | DailyRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyRoutines.
     */
    cursor?: DailyRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyRoutines.
     */
    distinct?: DailyRoutineScalarFieldEnum | DailyRoutineScalarFieldEnum[]
  }


  /**
   * DailyRoutine findMany
   */
  export type DailyRoutineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRoutineInclude<ExtArgs> | null
    /**
     * Filter, which DailyRoutines to fetch.
     */
    where?: DailyRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRoutines to fetch.
     */
    orderBy?: DailyRoutineOrderByWithRelationInput | DailyRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyRoutines.
     */
    cursor?: DailyRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRoutines.
     */
    skip?: number
    distinct?: DailyRoutineScalarFieldEnum | DailyRoutineScalarFieldEnum[]
  }


  /**
   * DailyRoutine create
   */
  export type DailyRoutineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRoutineInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyRoutine.
     */
    data: XOR<DailyRoutineCreateInput, DailyRoutineUncheckedCreateInput>
  }


  /**
   * DailyRoutine createMany
   */
  export type DailyRoutineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyRoutines.
     */
    data: DailyRoutineCreateManyInput | DailyRoutineCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DailyRoutine update
   */
  export type DailyRoutineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRoutineInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyRoutine.
     */
    data: XOR<DailyRoutineUpdateInput, DailyRoutineUncheckedUpdateInput>
    /**
     * Choose, which DailyRoutine to update.
     */
    where: DailyRoutineWhereUniqueInput
  }


  /**
   * DailyRoutine updateMany
   */
  export type DailyRoutineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyRoutines.
     */
    data: XOR<DailyRoutineUpdateManyMutationInput, DailyRoutineUncheckedUpdateManyInput>
    /**
     * Filter which DailyRoutines to update
     */
    where?: DailyRoutineWhereInput
  }


  /**
   * DailyRoutine upsert
   */
  export type DailyRoutineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRoutineInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyRoutine to update in case it exists.
     */
    where: DailyRoutineWhereUniqueInput
    /**
     * In case the DailyRoutine found by the `where` argument doesn't exist, create a new DailyRoutine with this data.
     */
    create: XOR<DailyRoutineCreateInput, DailyRoutineUncheckedCreateInput>
    /**
     * In case the DailyRoutine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyRoutineUpdateInput, DailyRoutineUncheckedUpdateInput>
  }


  /**
   * DailyRoutine delete
   */
  export type DailyRoutineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRoutineInclude<ExtArgs> | null
    /**
     * Filter which DailyRoutine to delete.
     */
    where: DailyRoutineWhereUniqueInput
  }


  /**
   * DailyRoutine deleteMany
   */
  export type DailyRoutineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyRoutines to delete
     */
    where?: DailyRoutineWhereInput
  }


  /**
   * DailyRoutine.routineControl
   */
  export type DailyRoutine$routineControlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineControl
     */
    select?: RoutineControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineControlInclude<ExtArgs> | null
    where?: RoutineControlWhereInput
  }


  /**
   * DailyRoutine without action
   */
  export type DailyRoutineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRoutine
     */
    select?: DailyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DailyRoutineInclude<ExtArgs> | null
  }



  /**
   * Model Days
   */

  export type AggregateDays = {
    _count: DaysCountAggregateOutputType | null
    _min: DaysMinAggregateOutputType | null
    _max: DaysMaxAggregateOutputType | null
  }

  export type DaysMinAggregateOutputType = {
    id: string | null
    sun: boolean | null
    mon: boolean | null
    tue: boolean | null
    wed: boolean | null
    thu: boolean | null
    fri: boolean | null
    sat: boolean | null
  }

  export type DaysMaxAggregateOutputType = {
    id: string | null
    sun: boolean | null
    mon: boolean | null
    tue: boolean | null
    wed: boolean | null
    thu: boolean | null
    fri: boolean | null
    sat: boolean | null
  }

  export type DaysCountAggregateOutputType = {
    id: number
    sun: number
    mon: number
    tue: number
    wed: number
    thu: number
    fri: number
    sat: number
    _all: number
  }


  export type DaysMinAggregateInputType = {
    id?: true
    sun?: true
    mon?: true
    tue?: true
    wed?: true
    thu?: true
    fri?: true
    sat?: true
  }

  export type DaysMaxAggregateInputType = {
    id?: true
    sun?: true
    mon?: true
    tue?: true
    wed?: true
    thu?: true
    fri?: true
    sat?: true
  }

  export type DaysCountAggregateInputType = {
    id?: true
    sun?: true
    mon?: true
    tue?: true
    wed?: true
    thu?: true
    fri?: true
    sat?: true
    _all?: true
  }

  export type DaysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Days to aggregate.
     */
    where?: DaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DaysOrderByWithRelationInput | DaysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Days
    **/
    _count?: true | DaysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DaysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DaysMaxAggregateInputType
  }

  export type GetDaysAggregateType<T extends DaysAggregateArgs> = {
        [P in keyof T & keyof AggregateDays]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDays[P]>
      : GetScalarType<T[P], AggregateDays[P]>
  }




  export type DaysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DaysWhereInput
    orderBy?: DaysOrderByWithAggregationInput | DaysOrderByWithAggregationInput[]
    by: DaysScalarFieldEnum[] | DaysScalarFieldEnum
    having?: DaysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DaysCountAggregateInputType | true
    _min?: DaysMinAggregateInputType
    _max?: DaysMaxAggregateInputType
  }

  export type DaysGroupByOutputType = {
    id: string
    sun: boolean
    mon: boolean
    tue: boolean
    wed: boolean
    thu: boolean
    fri: boolean
    sat: boolean
    _count: DaysCountAggregateOutputType | null
    _min: DaysMinAggregateOutputType | null
    _max: DaysMaxAggregateOutputType | null
  }

  type GetDaysGroupByPayload<T extends DaysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DaysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DaysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DaysGroupByOutputType[P]>
            : GetScalarType<T[P], DaysGroupByOutputType[P]>
        }
      >
    >


  export type DaysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sun?: boolean
    mon?: boolean
    tue?: boolean
    wed?: boolean
    thu?: boolean
    fri?: boolean
    sat?: boolean
    WeeklyRoutine?: boolean | Days$WeeklyRoutineArgs<ExtArgs>
    _count?: boolean | DaysCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["days"]>

  export type DaysSelectScalar = {
    id?: boolean
    sun?: boolean
    mon?: boolean
    tue?: boolean
    wed?: boolean
    thu?: boolean
    fri?: boolean
    sat?: boolean
  }

  export type DaysInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WeeklyRoutine?: boolean | Days$WeeklyRoutineArgs<ExtArgs>
    _count?: boolean | DaysCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DaysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Days"
    objects: {
      WeeklyRoutine: Prisma.$WeeklyRoutinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sun: boolean
      mon: boolean
      tue: boolean
      wed: boolean
      thu: boolean
      fri: boolean
      sat: boolean
    }, ExtArgs["result"]["days"]>
    composites: {}
  }


  type DaysGetPayload<S extends boolean | null | undefined | DaysDefaultArgs> = $Result.GetResult<Prisma.$DaysPayload, S>

  type DaysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DaysFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DaysCountAggregateInputType | true
    }

  export interface DaysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Days'], meta: { name: 'Days' } }
    /**
     * Find zero or one Days that matches the filter.
     * @param {DaysFindUniqueArgs} args - Arguments to find a Days
     * @example
     * // Get one Days
     * const days = await prisma.days.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DaysFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DaysFindUniqueArgs<ExtArgs>>
    ): Prisma__DaysClient<$Result.GetResult<Prisma.$DaysPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Days that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DaysFindUniqueOrThrowArgs} args - Arguments to find a Days
     * @example
     * // Get one Days
     * const days = await prisma.days.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DaysFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DaysFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DaysClient<$Result.GetResult<Prisma.$DaysPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaysFindFirstArgs} args - Arguments to find a Days
     * @example
     * // Get one Days
     * const days = await prisma.days.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DaysFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DaysFindFirstArgs<ExtArgs>>
    ): Prisma__DaysClient<$Result.GetResult<Prisma.$DaysPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Days that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaysFindFirstOrThrowArgs} args - Arguments to find a Days
     * @example
     * // Get one Days
     * const days = await prisma.days.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DaysFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DaysFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DaysClient<$Result.GetResult<Prisma.$DaysPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaysFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Days
     * const days = await prisma.days.findMany()
     * 
     * // Get first 10 Days
     * const days = await prisma.days.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const daysWithIdOnly = await prisma.days.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DaysFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DaysFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DaysPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Days.
     * @param {DaysCreateArgs} args - Arguments to create a Days.
     * @example
     * // Create one Days
     * const Days = await prisma.days.create({
     *   data: {
     *     // ... data to create a Days
     *   }
     * })
     * 
    **/
    create<T extends DaysCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DaysCreateArgs<ExtArgs>>
    ): Prisma__DaysClient<$Result.GetResult<Prisma.$DaysPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Days.
     *     @param {DaysCreateManyArgs} args - Arguments to create many Days.
     *     @example
     *     // Create many Days
     *     const days = await prisma.days.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DaysCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DaysCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Days.
     * @param {DaysDeleteArgs} args - Arguments to delete one Days.
     * @example
     * // Delete one Days
     * const Days = await prisma.days.delete({
     *   where: {
     *     // ... filter to delete one Days
     *   }
     * })
     * 
    **/
    delete<T extends DaysDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DaysDeleteArgs<ExtArgs>>
    ): Prisma__DaysClient<$Result.GetResult<Prisma.$DaysPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Days.
     * @param {DaysUpdateArgs} args - Arguments to update one Days.
     * @example
     * // Update one Days
     * const days = await prisma.days.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DaysUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DaysUpdateArgs<ExtArgs>>
    ): Prisma__DaysClient<$Result.GetResult<Prisma.$DaysPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Days.
     * @param {DaysDeleteManyArgs} args - Arguments to filter Days to delete.
     * @example
     * // Delete a few Days
     * const { count } = await prisma.days.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DaysDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DaysDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Days
     * const days = await prisma.days.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DaysUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DaysUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Days.
     * @param {DaysUpsertArgs} args - Arguments to update or create a Days.
     * @example
     * // Update or create a Days
     * const days = await prisma.days.upsert({
     *   create: {
     *     // ... data to create a Days
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Days we want to update
     *   }
     * })
    **/
    upsert<T extends DaysUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DaysUpsertArgs<ExtArgs>>
    ): Prisma__DaysClient<$Result.GetResult<Prisma.$DaysPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaysCountArgs} args - Arguments to filter Days to count.
     * @example
     * // Count the number of Days
     * const count = await prisma.days.count({
     *   where: {
     *     // ... the filter for the Days we want to count
     *   }
     * })
    **/
    count<T extends DaysCountArgs>(
      args?: Subset<T, DaysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DaysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DaysAggregateArgs>(args: Subset<T, DaysAggregateArgs>): Prisma.PrismaPromise<GetDaysAggregateType<T>>

    /**
     * Group by Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DaysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DaysGroupByArgs['orderBy'] }
        : { orderBy?: DaysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DaysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDaysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Days model
   */
  readonly fields: DaysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Days.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DaysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    WeeklyRoutine<T extends Days$WeeklyRoutineArgs<ExtArgs> = {}>(args?: Subset<T, Days$WeeklyRoutineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyRoutinePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Days model
   */ 
  interface DaysFieldRefs {
    readonly id: FieldRef<"Days", 'String'>
    readonly sun: FieldRef<"Days", 'Boolean'>
    readonly mon: FieldRef<"Days", 'Boolean'>
    readonly tue: FieldRef<"Days", 'Boolean'>
    readonly wed: FieldRef<"Days", 'Boolean'>
    readonly thu: FieldRef<"Days", 'Boolean'>
    readonly fri: FieldRef<"Days", 'Boolean'>
    readonly sat: FieldRef<"Days", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Days findUnique
   */
  export type DaysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Days
     */
    select?: DaysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaysInclude<ExtArgs> | null
    /**
     * Filter, which Days to fetch.
     */
    where: DaysWhereUniqueInput
  }


  /**
   * Days findUniqueOrThrow
   */
  export type DaysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Days
     */
    select?: DaysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaysInclude<ExtArgs> | null
    /**
     * Filter, which Days to fetch.
     */
    where: DaysWhereUniqueInput
  }


  /**
   * Days findFirst
   */
  export type DaysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Days
     */
    select?: DaysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaysInclude<ExtArgs> | null
    /**
     * Filter, which Days to fetch.
     */
    where?: DaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DaysOrderByWithRelationInput | DaysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Days.
     */
    cursor?: DaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Days.
     */
    distinct?: DaysScalarFieldEnum | DaysScalarFieldEnum[]
  }


  /**
   * Days findFirstOrThrow
   */
  export type DaysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Days
     */
    select?: DaysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaysInclude<ExtArgs> | null
    /**
     * Filter, which Days to fetch.
     */
    where?: DaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DaysOrderByWithRelationInput | DaysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Days.
     */
    cursor?: DaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Days.
     */
    distinct?: DaysScalarFieldEnum | DaysScalarFieldEnum[]
  }


  /**
   * Days findMany
   */
  export type DaysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Days
     */
    select?: DaysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaysInclude<ExtArgs> | null
    /**
     * Filter, which Days to fetch.
     */
    where?: DaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DaysOrderByWithRelationInput | DaysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Days.
     */
    cursor?: DaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    distinct?: DaysScalarFieldEnum | DaysScalarFieldEnum[]
  }


  /**
   * Days create
   */
  export type DaysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Days
     */
    select?: DaysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaysInclude<ExtArgs> | null
    /**
     * The data needed to create a Days.
     */
    data?: XOR<DaysCreateInput, DaysUncheckedCreateInput>
  }


  /**
   * Days createMany
   */
  export type DaysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Days.
     */
    data: DaysCreateManyInput | DaysCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Days update
   */
  export type DaysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Days
     */
    select?: DaysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaysInclude<ExtArgs> | null
    /**
     * The data needed to update a Days.
     */
    data: XOR<DaysUpdateInput, DaysUncheckedUpdateInput>
    /**
     * Choose, which Days to update.
     */
    where: DaysWhereUniqueInput
  }


  /**
   * Days updateMany
   */
  export type DaysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Days.
     */
    data: XOR<DaysUpdateManyMutationInput, DaysUncheckedUpdateManyInput>
    /**
     * Filter which Days to update
     */
    where?: DaysWhereInput
  }


  /**
   * Days upsert
   */
  export type DaysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Days
     */
    select?: DaysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaysInclude<ExtArgs> | null
    /**
     * The filter to search for the Days to update in case it exists.
     */
    where: DaysWhereUniqueInput
    /**
     * In case the Days found by the `where` argument doesn't exist, create a new Days with this data.
     */
    create: XOR<DaysCreateInput, DaysUncheckedCreateInput>
    /**
     * In case the Days was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DaysUpdateInput, DaysUncheckedUpdateInput>
  }


  /**
   * Days delete
   */
  export type DaysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Days
     */
    select?: DaysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaysInclude<ExtArgs> | null
    /**
     * Filter which Days to delete.
     */
    where: DaysWhereUniqueInput
  }


  /**
   * Days deleteMany
   */
  export type DaysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Days to delete
     */
    where?: DaysWhereInput
  }


  /**
   * Days.WeeklyRoutine
   */
  export type Days$WeeklyRoutineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoutine
     */
    select?: WeeklyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeeklyRoutineInclude<ExtArgs> | null
    where?: WeeklyRoutineWhereInput
    orderBy?: WeeklyRoutineOrderByWithRelationInput | WeeklyRoutineOrderByWithRelationInput[]
    cursor?: WeeklyRoutineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklyRoutineScalarFieldEnum | WeeklyRoutineScalarFieldEnum[]
  }


  /**
   * Days without action
   */
  export type DaysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Days
     */
    select?: DaysSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaysInclude<ExtArgs> | null
  }



  /**
   * Model WeeklyRoutine
   */

  export type AggregateWeeklyRoutine = {
    _count: WeeklyRoutineCountAggregateOutputType | null
    _min: WeeklyRoutineMinAggregateOutputType | null
    _max: WeeklyRoutineMaxAggregateOutputType | null
  }

  export type WeeklyRoutineMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    daysId: string | null
    routineControlId: string | null
  }

  export type WeeklyRoutineMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    daysId: string | null
    routineControlId: string | null
  }

  export type WeeklyRoutineCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    content: number
    daysId: number
    routineControlId: number
    _all: number
  }


  export type WeeklyRoutineMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    daysId?: true
    routineControlId?: true
  }

  export type WeeklyRoutineMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    daysId?: true
    routineControlId?: true
  }

  export type WeeklyRoutineCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    daysId?: true
    routineControlId?: true
    _all?: true
  }

  export type WeeklyRoutineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyRoutine to aggregate.
     */
    where?: WeeklyRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyRoutines to fetch.
     */
    orderBy?: WeeklyRoutineOrderByWithRelationInput | WeeklyRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklyRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklyRoutines
    **/
    _count?: true | WeeklyRoutineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklyRoutineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklyRoutineMaxAggregateInputType
  }

  export type GetWeeklyRoutineAggregateType<T extends WeeklyRoutineAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklyRoutine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklyRoutine[P]>
      : GetScalarType<T[P], AggregateWeeklyRoutine[P]>
  }




  export type WeeklyRoutineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyRoutineWhereInput
    orderBy?: WeeklyRoutineOrderByWithAggregationInput | WeeklyRoutineOrderByWithAggregationInput[]
    by: WeeklyRoutineScalarFieldEnum[] | WeeklyRoutineScalarFieldEnum
    having?: WeeklyRoutineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklyRoutineCountAggregateInputType | true
    _min?: WeeklyRoutineMinAggregateInputType
    _max?: WeeklyRoutineMaxAggregateInputType
  }

  export type WeeklyRoutineGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    content: string
    daysId: string
    routineControlId: string | null
    _count: WeeklyRoutineCountAggregateOutputType | null
    _min: WeeklyRoutineMinAggregateOutputType | null
    _max: WeeklyRoutineMaxAggregateOutputType | null
  }

  type GetWeeklyRoutineGroupByPayload<T extends WeeklyRoutineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklyRoutineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklyRoutineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklyRoutineGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklyRoutineGroupByOutputType[P]>
        }
      >
    >


  export type WeeklyRoutineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    daysId?: boolean
    routineControlId?: boolean
    days?: boolean | DaysDefaultArgs<ExtArgs>
    routineControl?: boolean | WeeklyRoutine$routineControlArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyRoutine"]>

  export type WeeklyRoutineSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    daysId?: boolean
    routineControlId?: boolean
  }

  export type WeeklyRoutineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    days?: boolean | DaysDefaultArgs<ExtArgs>
    routineControl?: boolean | WeeklyRoutine$routineControlArgs<ExtArgs>
  }


  export type $WeeklyRoutinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklyRoutine"
    objects: {
      days: Prisma.$DaysPayload<ExtArgs>
      routineControl: Prisma.$RoutineControlPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      content: string
      daysId: string
      routineControlId: string | null
    }, ExtArgs["result"]["weeklyRoutine"]>
    composites: {}
  }


  type WeeklyRoutineGetPayload<S extends boolean | null | undefined | WeeklyRoutineDefaultArgs> = $Result.GetResult<Prisma.$WeeklyRoutinePayload, S>

  type WeeklyRoutineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WeeklyRoutineFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: WeeklyRoutineCountAggregateInputType | true
    }

  export interface WeeklyRoutineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklyRoutine'], meta: { name: 'WeeklyRoutine' } }
    /**
     * Find zero or one WeeklyRoutine that matches the filter.
     * @param {WeeklyRoutineFindUniqueArgs} args - Arguments to find a WeeklyRoutine
     * @example
     * // Get one WeeklyRoutine
     * const weeklyRoutine = await prisma.weeklyRoutine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WeeklyRoutineFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WeeklyRoutineFindUniqueArgs<ExtArgs>>
    ): Prisma__WeeklyRoutineClient<$Result.GetResult<Prisma.$WeeklyRoutinePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WeeklyRoutine that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WeeklyRoutineFindUniqueOrThrowArgs} args - Arguments to find a WeeklyRoutine
     * @example
     * // Get one WeeklyRoutine
     * const weeklyRoutine = await prisma.weeklyRoutine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WeeklyRoutineFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WeeklyRoutineFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WeeklyRoutineClient<$Result.GetResult<Prisma.$WeeklyRoutinePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WeeklyRoutine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyRoutineFindFirstArgs} args - Arguments to find a WeeklyRoutine
     * @example
     * // Get one WeeklyRoutine
     * const weeklyRoutine = await prisma.weeklyRoutine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WeeklyRoutineFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WeeklyRoutineFindFirstArgs<ExtArgs>>
    ): Prisma__WeeklyRoutineClient<$Result.GetResult<Prisma.$WeeklyRoutinePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WeeklyRoutine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyRoutineFindFirstOrThrowArgs} args - Arguments to find a WeeklyRoutine
     * @example
     * // Get one WeeklyRoutine
     * const weeklyRoutine = await prisma.weeklyRoutine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WeeklyRoutineFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WeeklyRoutineFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WeeklyRoutineClient<$Result.GetResult<Prisma.$WeeklyRoutinePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WeeklyRoutines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyRoutineFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklyRoutines
     * const weeklyRoutines = await prisma.weeklyRoutine.findMany()
     * 
     * // Get first 10 WeeklyRoutines
     * const weeklyRoutines = await prisma.weeklyRoutine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklyRoutineWithIdOnly = await prisma.weeklyRoutine.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WeeklyRoutineFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WeeklyRoutineFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyRoutinePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WeeklyRoutine.
     * @param {WeeklyRoutineCreateArgs} args - Arguments to create a WeeklyRoutine.
     * @example
     * // Create one WeeklyRoutine
     * const WeeklyRoutine = await prisma.weeklyRoutine.create({
     *   data: {
     *     // ... data to create a WeeklyRoutine
     *   }
     * })
     * 
    **/
    create<T extends WeeklyRoutineCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WeeklyRoutineCreateArgs<ExtArgs>>
    ): Prisma__WeeklyRoutineClient<$Result.GetResult<Prisma.$WeeklyRoutinePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WeeklyRoutines.
     *     @param {WeeklyRoutineCreateManyArgs} args - Arguments to create many WeeklyRoutines.
     *     @example
     *     // Create many WeeklyRoutines
     *     const weeklyRoutine = await prisma.weeklyRoutine.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WeeklyRoutineCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WeeklyRoutineCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WeeklyRoutine.
     * @param {WeeklyRoutineDeleteArgs} args - Arguments to delete one WeeklyRoutine.
     * @example
     * // Delete one WeeklyRoutine
     * const WeeklyRoutine = await prisma.weeklyRoutine.delete({
     *   where: {
     *     // ... filter to delete one WeeklyRoutine
     *   }
     * })
     * 
    **/
    delete<T extends WeeklyRoutineDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WeeklyRoutineDeleteArgs<ExtArgs>>
    ): Prisma__WeeklyRoutineClient<$Result.GetResult<Prisma.$WeeklyRoutinePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WeeklyRoutine.
     * @param {WeeklyRoutineUpdateArgs} args - Arguments to update one WeeklyRoutine.
     * @example
     * // Update one WeeklyRoutine
     * const weeklyRoutine = await prisma.weeklyRoutine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WeeklyRoutineUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WeeklyRoutineUpdateArgs<ExtArgs>>
    ): Prisma__WeeklyRoutineClient<$Result.GetResult<Prisma.$WeeklyRoutinePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WeeklyRoutines.
     * @param {WeeklyRoutineDeleteManyArgs} args - Arguments to filter WeeklyRoutines to delete.
     * @example
     * // Delete a few WeeklyRoutines
     * const { count } = await prisma.weeklyRoutine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WeeklyRoutineDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WeeklyRoutineDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyRoutines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyRoutineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklyRoutines
     * const weeklyRoutine = await prisma.weeklyRoutine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WeeklyRoutineUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WeeklyRoutineUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WeeklyRoutine.
     * @param {WeeklyRoutineUpsertArgs} args - Arguments to update or create a WeeklyRoutine.
     * @example
     * // Update or create a WeeklyRoutine
     * const weeklyRoutine = await prisma.weeklyRoutine.upsert({
     *   create: {
     *     // ... data to create a WeeklyRoutine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklyRoutine we want to update
     *   }
     * })
    **/
    upsert<T extends WeeklyRoutineUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WeeklyRoutineUpsertArgs<ExtArgs>>
    ): Prisma__WeeklyRoutineClient<$Result.GetResult<Prisma.$WeeklyRoutinePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WeeklyRoutines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyRoutineCountArgs} args - Arguments to filter WeeklyRoutines to count.
     * @example
     * // Count the number of WeeklyRoutines
     * const count = await prisma.weeklyRoutine.count({
     *   where: {
     *     // ... the filter for the WeeklyRoutines we want to count
     *   }
     * })
    **/
    count<T extends WeeklyRoutineCountArgs>(
      args?: Subset<T, WeeklyRoutineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklyRoutineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklyRoutine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyRoutineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeeklyRoutineAggregateArgs>(args: Subset<T, WeeklyRoutineAggregateArgs>): Prisma.PrismaPromise<GetWeeklyRoutineAggregateType<T>>

    /**
     * Group by WeeklyRoutine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyRoutineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeeklyRoutineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklyRoutineGroupByArgs['orderBy'] }
        : { orderBy?: WeeklyRoutineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeeklyRoutineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklyRoutineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklyRoutine model
   */
  readonly fields: WeeklyRoutineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklyRoutine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklyRoutineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    days<T extends DaysDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DaysDefaultArgs<ExtArgs>>): Prisma__DaysClient<$Result.GetResult<Prisma.$DaysPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    routineControl<T extends WeeklyRoutine$routineControlArgs<ExtArgs> = {}>(args?: Subset<T, WeeklyRoutine$routineControlArgs<ExtArgs>>): Prisma__RoutineControlClient<$Result.GetResult<Prisma.$RoutineControlPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WeeklyRoutine model
   */ 
  interface WeeklyRoutineFieldRefs {
    readonly id: FieldRef<"WeeklyRoutine", 'String'>
    readonly createdAt: FieldRef<"WeeklyRoutine", 'DateTime'>
    readonly updatedAt: FieldRef<"WeeklyRoutine", 'DateTime'>
    readonly content: FieldRef<"WeeklyRoutine", 'String'>
    readonly daysId: FieldRef<"WeeklyRoutine", 'String'>
    readonly routineControlId: FieldRef<"WeeklyRoutine", 'String'>
  }
    

  // Custom InputTypes

  /**
   * WeeklyRoutine findUnique
   */
  export type WeeklyRoutineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoutine
     */
    select?: WeeklyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeeklyRoutineInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyRoutine to fetch.
     */
    where: WeeklyRoutineWhereUniqueInput
  }


  /**
   * WeeklyRoutine findUniqueOrThrow
   */
  export type WeeklyRoutineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoutine
     */
    select?: WeeklyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeeklyRoutineInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyRoutine to fetch.
     */
    where: WeeklyRoutineWhereUniqueInput
  }


  /**
   * WeeklyRoutine findFirst
   */
  export type WeeklyRoutineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoutine
     */
    select?: WeeklyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeeklyRoutineInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyRoutine to fetch.
     */
    where?: WeeklyRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyRoutines to fetch.
     */
    orderBy?: WeeklyRoutineOrderByWithRelationInput | WeeklyRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyRoutines.
     */
    cursor?: WeeklyRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyRoutines.
     */
    distinct?: WeeklyRoutineScalarFieldEnum | WeeklyRoutineScalarFieldEnum[]
  }


  /**
   * WeeklyRoutine findFirstOrThrow
   */
  export type WeeklyRoutineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoutine
     */
    select?: WeeklyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeeklyRoutineInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyRoutine to fetch.
     */
    where?: WeeklyRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyRoutines to fetch.
     */
    orderBy?: WeeklyRoutineOrderByWithRelationInput | WeeklyRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyRoutines.
     */
    cursor?: WeeklyRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyRoutines.
     */
    distinct?: WeeklyRoutineScalarFieldEnum | WeeklyRoutineScalarFieldEnum[]
  }


  /**
   * WeeklyRoutine findMany
   */
  export type WeeklyRoutineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoutine
     */
    select?: WeeklyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeeklyRoutineInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyRoutines to fetch.
     */
    where?: WeeklyRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyRoutines to fetch.
     */
    orderBy?: WeeklyRoutineOrderByWithRelationInput | WeeklyRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklyRoutines.
     */
    cursor?: WeeklyRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyRoutines.
     */
    skip?: number
    distinct?: WeeklyRoutineScalarFieldEnum | WeeklyRoutineScalarFieldEnum[]
  }


  /**
   * WeeklyRoutine create
   */
  export type WeeklyRoutineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoutine
     */
    select?: WeeklyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeeklyRoutineInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklyRoutine.
     */
    data: XOR<WeeklyRoutineCreateInput, WeeklyRoutineUncheckedCreateInput>
  }


  /**
   * WeeklyRoutine createMany
   */
  export type WeeklyRoutineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklyRoutines.
     */
    data: WeeklyRoutineCreateManyInput | WeeklyRoutineCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * WeeklyRoutine update
   */
  export type WeeklyRoutineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoutine
     */
    select?: WeeklyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeeklyRoutineInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklyRoutine.
     */
    data: XOR<WeeklyRoutineUpdateInput, WeeklyRoutineUncheckedUpdateInput>
    /**
     * Choose, which WeeklyRoutine to update.
     */
    where: WeeklyRoutineWhereUniqueInput
  }


  /**
   * WeeklyRoutine updateMany
   */
  export type WeeklyRoutineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklyRoutines.
     */
    data: XOR<WeeklyRoutineUpdateManyMutationInput, WeeklyRoutineUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyRoutines to update
     */
    where?: WeeklyRoutineWhereInput
  }


  /**
   * WeeklyRoutine upsert
   */
  export type WeeklyRoutineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoutine
     */
    select?: WeeklyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeeklyRoutineInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklyRoutine to update in case it exists.
     */
    where: WeeklyRoutineWhereUniqueInput
    /**
     * In case the WeeklyRoutine found by the `where` argument doesn't exist, create a new WeeklyRoutine with this data.
     */
    create: XOR<WeeklyRoutineCreateInput, WeeklyRoutineUncheckedCreateInput>
    /**
     * In case the WeeklyRoutine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklyRoutineUpdateInput, WeeklyRoutineUncheckedUpdateInput>
  }


  /**
   * WeeklyRoutine delete
   */
  export type WeeklyRoutineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoutine
     */
    select?: WeeklyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeeklyRoutineInclude<ExtArgs> | null
    /**
     * Filter which WeeklyRoutine to delete.
     */
    where: WeeklyRoutineWhereUniqueInput
  }


  /**
   * WeeklyRoutine deleteMany
   */
  export type WeeklyRoutineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyRoutines to delete
     */
    where?: WeeklyRoutineWhereInput
  }


  /**
   * WeeklyRoutine.routineControl
   */
  export type WeeklyRoutine$routineControlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineControl
     */
    select?: RoutineControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineControlInclude<ExtArgs> | null
    where?: RoutineControlWhereInput
  }


  /**
   * WeeklyRoutine without action
   */
  export type WeeklyRoutineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyRoutine
     */
    select?: WeeklyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeeklyRoutineInclude<ExtArgs> | null
  }



  /**
   * Model MonthlyRoutine
   */

  export type AggregateMonthlyRoutine = {
    _count: MonthlyRoutineCountAggregateOutputType | null
    _min: MonthlyRoutineMinAggregateOutputType | null
    _max: MonthlyRoutineMaxAggregateOutputType | null
  }

  export type MonthlyRoutineMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDate: boolean | null
    weekAndDayId: string | null
    dateId: string | null
    content: string | null
    routineControlId: string | null
  }

  export type MonthlyRoutineMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDate: boolean | null
    weekAndDayId: string | null
    dateId: string | null
    content: string | null
    routineControlId: string | null
  }

  export type MonthlyRoutineCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isDate: number
    weekAndDayId: number
    dateId: number
    content: number
    routineControlId: number
    _all: number
  }


  export type MonthlyRoutineMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDate?: true
    weekAndDayId?: true
    dateId?: true
    content?: true
    routineControlId?: true
  }

  export type MonthlyRoutineMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDate?: true
    weekAndDayId?: true
    dateId?: true
    content?: true
    routineControlId?: true
  }

  export type MonthlyRoutineCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isDate?: true
    weekAndDayId?: true
    dateId?: true
    content?: true
    routineControlId?: true
    _all?: true
  }

  export type MonthlyRoutineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyRoutine to aggregate.
     */
    where?: MonthlyRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyRoutines to fetch.
     */
    orderBy?: MonthlyRoutineOrderByWithRelationInput | MonthlyRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlyRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlyRoutines
    **/
    _count?: true | MonthlyRoutineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlyRoutineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlyRoutineMaxAggregateInputType
  }

  export type GetMonthlyRoutineAggregateType<T extends MonthlyRoutineAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlyRoutine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlyRoutine[P]>
      : GetScalarType<T[P], AggregateMonthlyRoutine[P]>
  }




  export type MonthlyRoutineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyRoutineWhereInput
    orderBy?: MonthlyRoutineOrderByWithAggregationInput | MonthlyRoutineOrderByWithAggregationInput[]
    by: MonthlyRoutineScalarFieldEnum[] | MonthlyRoutineScalarFieldEnum
    having?: MonthlyRoutineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlyRoutineCountAggregateInputType | true
    _min?: MonthlyRoutineMinAggregateInputType
    _max?: MonthlyRoutineMaxAggregateInputType
  }

  export type MonthlyRoutineGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    isDate: boolean
    weekAndDayId: string | null
    dateId: string | null
    content: string
    routineControlId: string | null
    _count: MonthlyRoutineCountAggregateOutputType | null
    _min: MonthlyRoutineMinAggregateOutputType | null
    _max: MonthlyRoutineMaxAggregateOutputType | null
  }

  type GetMonthlyRoutineGroupByPayload<T extends MonthlyRoutineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlyRoutineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlyRoutineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlyRoutineGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlyRoutineGroupByOutputType[P]>
        }
      >
    >


  export type MonthlyRoutineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDate?: boolean
    weekAndDayId?: boolean
    dateId?: boolean
    content?: boolean
    routineControlId?: boolean
    weekAndDay?: boolean | MonthlyRoutine$weekAndDayArgs<ExtArgs>
    date?: boolean | MonthlyRoutine$dateArgs<ExtArgs>
    routineControl?: boolean | MonthlyRoutine$routineControlArgs<ExtArgs>
  }, ExtArgs["result"]["monthlyRoutine"]>

  export type MonthlyRoutineSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDate?: boolean
    weekAndDayId?: boolean
    dateId?: boolean
    content?: boolean
    routineControlId?: boolean
  }

  export type MonthlyRoutineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weekAndDay?: boolean | MonthlyRoutine$weekAndDayArgs<ExtArgs>
    date?: boolean | MonthlyRoutine$dateArgs<ExtArgs>
    routineControl?: boolean | MonthlyRoutine$routineControlArgs<ExtArgs>
  }


  export type $MonthlyRoutinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlyRoutine"
    objects: {
      weekAndDay: Prisma.$WeekAndDayPayload<ExtArgs> | null
      date: Prisma.$DatePayload<ExtArgs> | null
      routineControl: Prisma.$RoutineControlPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      isDate: boolean
      weekAndDayId: string | null
      dateId: string | null
      content: string
      routineControlId: string | null
    }, ExtArgs["result"]["monthlyRoutine"]>
    composites: {}
  }


  type MonthlyRoutineGetPayload<S extends boolean | null | undefined | MonthlyRoutineDefaultArgs> = $Result.GetResult<Prisma.$MonthlyRoutinePayload, S>

  type MonthlyRoutineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MonthlyRoutineFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MonthlyRoutineCountAggregateInputType | true
    }

  export interface MonthlyRoutineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlyRoutine'], meta: { name: 'MonthlyRoutine' } }
    /**
     * Find zero or one MonthlyRoutine that matches the filter.
     * @param {MonthlyRoutineFindUniqueArgs} args - Arguments to find a MonthlyRoutine
     * @example
     * // Get one MonthlyRoutine
     * const monthlyRoutine = await prisma.monthlyRoutine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MonthlyRoutineFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MonthlyRoutineFindUniqueArgs<ExtArgs>>
    ): Prisma__MonthlyRoutineClient<$Result.GetResult<Prisma.$MonthlyRoutinePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MonthlyRoutine that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MonthlyRoutineFindUniqueOrThrowArgs} args - Arguments to find a MonthlyRoutine
     * @example
     * // Get one MonthlyRoutine
     * const monthlyRoutine = await prisma.monthlyRoutine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MonthlyRoutineFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MonthlyRoutineFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MonthlyRoutineClient<$Result.GetResult<Prisma.$MonthlyRoutinePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MonthlyRoutine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyRoutineFindFirstArgs} args - Arguments to find a MonthlyRoutine
     * @example
     * // Get one MonthlyRoutine
     * const monthlyRoutine = await prisma.monthlyRoutine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MonthlyRoutineFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MonthlyRoutineFindFirstArgs<ExtArgs>>
    ): Prisma__MonthlyRoutineClient<$Result.GetResult<Prisma.$MonthlyRoutinePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MonthlyRoutine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyRoutineFindFirstOrThrowArgs} args - Arguments to find a MonthlyRoutine
     * @example
     * // Get one MonthlyRoutine
     * const monthlyRoutine = await prisma.monthlyRoutine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MonthlyRoutineFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MonthlyRoutineFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MonthlyRoutineClient<$Result.GetResult<Prisma.$MonthlyRoutinePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MonthlyRoutines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyRoutineFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlyRoutines
     * const monthlyRoutines = await prisma.monthlyRoutine.findMany()
     * 
     * // Get first 10 MonthlyRoutines
     * const monthlyRoutines = await prisma.monthlyRoutine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlyRoutineWithIdOnly = await prisma.monthlyRoutine.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MonthlyRoutineFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MonthlyRoutineFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyRoutinePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MonthlyRoutine.
     * @param {MonthlyRoutineCreateArgs} args - Arguments to create a MonthlyRoutine.
     * @example
     * // Create one MonthlyRoutine
     * const MonthlyRoutine = await prisma.monthlyRoutine.create({
     *   data: {
     *     // ... data to create a MonthlyRoutine
     *   }
     * })
     * 
    **/
    create<T extends MonthlyRoutineCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MonthlyRoutineCreateArgs<ExtArgs>>
    ): Prisma__MonthlyRoutineClient<$Result.GetResult<Prisma.$MonthlyRoutinePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MonthlyRoutines.
     *     @param {MonthlyRoutineCreateManyArgs} args - Arguments to create many MonthlyRoutines.
     *     @example
     *     // Create many MonthlyRoutines
     *     const monthlyRoutine = await prisma.monthlyRoutine.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MonthlyRoutineCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MonthlyRoutineCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MonthlyRoutine.
     * @param {MonthlyRoutineDeleteArgs} args - Arguments to delete one MonthlyRoutine.
     * @example
     * // Delete one MonthlyRoutine
     * const MonthlyRoutine = await prisma.monthlyRoutine.delete({
     *   where: {
     *     // ... filter to delete one MonthlyRoutine
     *   }
     * })
     * 
    **/
    delete<T extends MonthlyRoutineDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MonthlyRoutineDeleteArgs<ExtArgs>>
    ): Prisma__MonthlyRoutineClient<$Result.GetResult<Prisma.$MonthlyRoutinePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MonthlyRoutine.
     * @param {MonthlyRoutineUpdateArgs} args - Arguments to update one MonthlyRoutine.
     * @example
     * // Update one MonthlyRoutine
     * const monthlyRoutine = await prisma.monthlyRoutine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MonthlyRoutineUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MonthlyRoutineUpdateArgs<ExtArgs>>
    ): Prisma__MonthlyRoutineClient<$Result.GetResult<Prisma.$MonthlyRoutinePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MonthlyRoutines.
     * @param {MonthlyRoutineDeleteManyArgs} args - Arguments to filter MonthlyRoutines to delete.
     * @example
     * // Delete a few MonthlyRoutines
     * const { count } = await prisma.monthlyRoutine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MonthlyRoutineDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MonthlyRoutineDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyRoutines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyRoutineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlyRoutines
     * const monthlyRoutine = await prisma.monthlyRoutine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MonthlyRoutineUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MonthlyRoutineUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MonthlyRoutine.
     * @param {MonthlyRoutineUpsertArgs} args - Arguments to update or create a MonthlyRoutine.
     * @example
     * // Update or create a MonthlyRoutine
     * const monthlyRoutine = await prisma.monthlyRoutine.upsert({
     *   create: {
     *     // ... data to create a MonthlyRoutine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlyRoutine we want to update
     *   }
     * })
    **/
    upsert<T extends MonthlyRoutineUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MonthlyRoutineUpsertArgs<ExtArgs>>
    ): Prisma__MonthlyRoutineClient<$Result.GetResult<Prisma.$MonthlyRoutinePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MonthlyRoutines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyRoutineCountArgs} args - Arguments to filter MonthlyRoutines to count.
     * @example
     * // Count the number of MonthlyRoutines
     * const count = await prisma.monthlyRoutine.count({
     *   where: {
     *     // ... the filter for the MonthlyRoutines we want to count
     *   }
     * })
    **/
    count<T extends MonthlyRoutineCountArgs>(
      args?: Subset<T, MonthlyRoutineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlyRoutineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlyRoutine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyRoutineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonthlyRoutineAggregateArgs>(args: Subset<T, MonthlyRoutineAggregateArgs>): Prisma.PrismaPromise<GetMonthlyRoutineAggregateType<T>>

    /**
     * Group by MonthlyRoutine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyRoutineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonthlyRoutineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlyRoutineGroupByArgs['orderBy'] }
        : { orderBy?: MonthlyRoutineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonthlyRoutineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyRoutineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlyRoutine model
   */
  readonly fields: MonthlyRoutineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlyRoutine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlyRoutineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    weekAndDay<T extends MonthlyRoutine$weekAndDayArgs<ExtArgs> = {}>(args?: Subset<T, MonthlyRoutine$weekAndDayArgs<ExtArgs>>): Prisma__WeekAndDayClient<$Result.GetResult<Prisma.$WeekAndDayPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    date<T extends MonthlyRoutine$dateArgs<ExtArgs> = {}>(args?: Subset<T, MonthlyRoutine$dateArgs<ExtArgs>>): Prisma__DateClient<$Result.GetResult<Prisma.$DatePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    routineControl<T extends MonthlyRoutine$routineControlArgs<ExtArgs> = {}>(args?: Subset<T, MonthlyRoutine$routineControlArgs<ExtArgs>>): Prisma__RoutineControlClient<$Result.GetResult<Prisma.$RoutineControlPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MonthlyRoutine model
   */ 
  interface MonthlyRoutineFieldRefs {
    readonly id: FieldRef<"MonthlyRoutine", 'String'>
    readonly createdAt: FieldRef<"MonthlyRoutine", 'DateTime'>
    readonly updatedAt: FieldRef<"MonthlyRoutine", 'DateTime'>
    readonly isDate: FieldRef<"MonthlyRoutine", 'Boolean'>
    readonly weekAndDayId: FieldRef<"MonthlyRoutine", 'String'>
    readonly dateId: FieldRef<"MonthlyRoutine", 'String'>
    readonly content: FieldRef<"MonthlyRoutine", 'String'>
    readonly routineControlId: FieldRef<"MonthlyRoutine", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MonthlyRoutine findUnique
   */
  export type MonthlyRoutineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRoutine
     */
    select?: MonthlyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthlyRoutineInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyRoutine to fetch.
     */
    where: MonthlyRoutineWhereUniqueInput
  }


  /**
   * MonthlyRoutine findUniqueOrThrow
   */
  export type MonthlyRoutineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRoutine
     */
    select?: MonthlyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthlyRoutineInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyRoutine to fetch.
     */
    where: MonthlyRoutineWhereUniqueInput
  }


  /**
   * MonthlyRoutine findFirst
   */
  export type MonthlyRoutineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRoutine
     */
    select?: MonthlyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthlyRoutineInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyRoutine to fetch.
     */
    where?: MonthlyRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyRoutines to fetch.
     */
    orderBy?: MonthlyRoutineOrderByWithRelationInput | MonthlyRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyRoutines.
     */
    cursor?: MonthlyRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyRoutines.
     */
    distinct?: MonthlyRoutineScalarFieldEnum | MonthlyRoutineScalarFieldEnum[]
  }


  /**
   * MonthlyRoutine findFirstOrThrow
   */
  export type MonthlyRoutineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRoutine
     */
    select?: MonthlyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthlyRoutineInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyRoutine to fetch.
     */
    where?: MonthlyRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyRoutines to fetch.
     */
    orderBy?: MonthlyRoutineOrderByWithRelationInput | MonthlyRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyRoutines.
     */
    cursor?: MonthlyRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyRoutines.
     */
    distinct?: MonthlyRoutineScalarFieldEnum | MonthlyRoutineScalarFieldEnum[]
  }


  /**
   * MonthlyRoutine findMany
   */
  export type MonthlyRoutineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRoutine
     */
    select?: MonthlyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthlyRoutineInclude<ExtArgs> | null
    /**
     * Filter, which MonthlyRoutines to fetch.
     */
    where?: MonthlyRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyRoutines to fetch.
     */
    orderBy?: MonthlyRoutineOrderByWithRelationInput | MonthlyRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlyRoutines.
     */
    cursor?: MonthlyRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyRoutines.
     */
    skip?: number
    distinct?: MonthlyRoutineScalarFieldEnum | MonthlyRoutineScalarFieldEnum[]
  }


  /**
   * MonthlyRoutine create
   */
  export type MonthlyRoutineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRoutine
     */
    select?: MonthlyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthlyRoutineInclude<ExtArgs> | null
    /**
     * The data needed to create a MonthlyRoutine.
     */
    data: XOR<MonthlyRoutineCreateInput, MonthlyRoutineUncheckedCreateInput>
  }


  /**
   * MonthlyRoutine createMany
   */
  export type MonthlyRoutineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlyRoutines.
     */
    data: MonthlyRoutineCreateManyInput | MonthlyRoutineCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MonthlyRoutine update
   */
  export type MonthlyRoutineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRoutine
     */
    select?: MonthlyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthlyRoutineInclude<ExtArgs> | null
    /**
     * The data needed to update a MonthlyRoutine.
     */
    data: XOR<MonthlyRoutineUpdateInput, MonthlyRoutineUncheckedUpdateInput>
    /**
     * Choose, which MonthlyRoutine to update.
     */
    where: MonthlyRoutineWhereUniqueInput
  }


  /**
   * MonthlyRoutine updateMany
   */
  export type MonthlyRoutineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlyRoutines.
     */
    data: XOR<MonthlyRoutineUpdateManyMutationInput, MonthlyRoutineUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyRoutines to update
     */
    where?: MonthlyRoutineWhereInput
  }


  /**
   * MonthlyRoutine upsert
   */
  export type MonthlyRoutineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRoutine
     */
    select?: MonthlyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthlyRoutineInclude<ExtArgs> | null
    /**
     * The filter to search for the MonthlyRoutine to update in case it exists.
     */
    where: MonthlyRoutineWhereUniqueInput
    /**
     * In case the MonthlyRoutine found by the `where` argument doesn't exist, create a new MonthlyRoutine with this data.
     */
    create: XOR<MonthlyRoutineCreateInput, MonthlyRoutineUncheckedCreateInput>
    /**
     * In case the MonthlyRoutine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlyRoutineUpdateInput, MonthlyRoutineUncheckedUpdateInput>
  }


  /**
   * MonthlyRoutine delete
   */
  export type MonthlyRoutineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRoutine
     */
    select?: MonthlyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthlyRoutineInclude<ExtArgs> | null
    /**
     * Filter which MonthlyRoutine to delete.
     */
    where: MonthlyRoutineWhereUniqueInput
  }


  /**
   * MonthlyRoutine deleteMany
   */
  export type MonthlyRoutineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyRoutines to delete
     */
    where?: MonthlyRoutineWhereInput
  }


  /**
   * MonthlyRoutine.weekAndDay
   */
  export type MonthlyRoutine$weekAndDayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekAndDay
     */
    select?: WeekAndDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeekAndDayInclude<ExtArgs> | null
    where?: WeekAndDayWhereInput
  }


  /**
   * MonthlyRoutine.date
   */
  export type MonthlyRoutine$dateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date
     */
    select?: DateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateInclude<ExtArgs> | null
    where?: DateWhereInput
  }


  /**
   * MonthlyRoutine.routineControl
   */
  export type MonthlyRoutine$routineControlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineControl
     */
    select?: RoutineControlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoutineControlInclude<ExtArgs> | null
    where?: RoutineControlWhereInput
  }


  /**
   * MonthlyRoutine without action
   */
  export type MonthlyRoutineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRoutine
     */
    select?: MonthlyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthlyRoutineInclude<ExtArgs> | null
  }



  /**
   * Model WeekAndDay
   */

  export type AggregateWeekAndDay = {
    _count: WeekAndDayCountAggregateOutputType | null
    _avg: WeekAndDayAvgAggregateOutputType | null
    _sum: WeekAndDaySumAggregateOutputType | null
    _min: WeekAndDayMinAggregateOutputType | null
    _max: WeekAndDayMaxAggregateOutputType | null
  }

  export type WeekAndDayAvgAggregateOutputType = {
    week: number | null
  }

  export type WeekAndDaySumAggregateOutputType = {
    week: number | null
  }

  export type WeekAndDayMinAggregateOutputType = {
    id: string | null
    day: $Enums.Day | null
    week: number | null
  }

  export type WeekAndDayMaxAggregateOutputType = {
    id: string | null
    day: $Enums.Day | null
    week: number | null
  }

  export type WeekAndDayCountAggregateOutputType = {
    id: number
    day: number
    week: number
    _all: number
  }


  export type WeekAndDayAvgAggregateInputType = {
    week?: true
  }

  export type WeekAndDaySumAggregateInputType = {
    week?: true
  }

  export type WeekAndDayMinAggregateInputType = {
    id?: true
    day?: true
    week?: true
  }

  export type WeekAndDayMaxAggregateInputType = {
    id?: true
    day?: true
    week?: true
  }

  export type WeekAndDayCountAggregateInputType = {
    id?: true
    day?: true
    week?: true
    _all?: true
  }

  export type WeekAndDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeekAndDay to aggregate.
     */
    where?: WeekAndDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeekAndDays to fetch.
     */
    orderBy?: WeekAndDayOrderByWithRelationInput | WeekAndDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeekAndDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeekAndDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeekAndDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeekAndDays
    **/
    _count?: true | WeekAndDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeekAndDayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeekAndDaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeekAndDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeekAndDayMaxAggregateInputType
  }

  export type GetWeekAndDayAggregateType<T extends WeekAndDayAggregateArgs> = {
        [P in keyof T & keyof AggregateWeekAndDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeekAndDay[P]>
      : GetScalarType<T[P], AggregateWeekAndDay[P]>
  }




  export type WeekAndDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeekAndDayWhereInput
    orderBy?: WeekAndDayOrderByWithAggregationInput | WeekAndDayOrderByWithAggregationInput[]
    by: WeekAndDayScalarFieldEnum[] | WeekAndDayScalarFieldEnum
    having?: WeekAndDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeekAndDayCountAggregateInputType | true
    _avg?: WeekAndDayAvgAggregateInputType
    _sum?: WeekAndDaySumAggregateInputType
    _min?: WeekAndDayMinAggregateInputType
    _max?: WeekAndDayMaxAggregateInputType
  }

  export type WeekAndDayGroupByOutputType = {
    id: string
    day: $Enums.Day
    week: number
    _count: WeekAndDayCountAggregateOutputType | null
    _avg: WeekAndDayAvgAggregateOutputType | null
    _sum: WeekAndDaySumAggregateOutputType | null
    _min: WeekAndDayMinAggregateOutputType | null
    _max: WeekAndDayMaxAggregateOutputType | null
  }

  type GetWeekAndDayGroupByPayload<T extends WeekAndDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeekAndDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeekAndDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeekAndDayGroupByOutputType[P]>
            : GetScalarType<T[P], WeekAndDayGroupByOutputType[P]>
        }
      >
    >


  export type WeekAndDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    week?: boolean
    MonthlyRoutine?: boolean | WeekAndDay$MonthlyRoutineArgs<ExtArgs>
    _count?: boolean | WeekAndDayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weekAndDay"]>

  export type WeekAndDaySelectScalar = {
    id?: boolean
    day?: boolean
    week?: boolean
  }

  export type WeekAndDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MonthlyRoutine?: boolean | WeekAndDay$MonthlyRoutineArgs<ExtArgs>
    _count?: boolean | WeekAndDayCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WeekAndDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeekAndDay"
    objects: {
      MonthlyRoutine: Prisma.$MonthlyRoutinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      day: $Enums.Day
      week: number
    }, ExtArgs["result"]["weekAndDay"]>
    composites: {}
  }


  type WeekAndDayGetPayload<S extends boolean | null | undefined | WeekAndDayDefaultArgs> = $Result.GetResult<Prisma.$WeekAndDayPayload, S>

  type WeekAndDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WeekAndDayFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: WeekAndDayCountAggregateInputType | true
    }

  export interface WeekAndDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeekAndDay'], meta: { name: 'WeekAndDay' } }
    /**
     * Find zero or one WeekAndDay that matches the filter.
     * @param {WeekAndDayFindUniqueArgs} args - Arguments to find a WeekAndDay
     * @example
     * // Get one WeekAndDay
     * const weekAndDay = await prisma.weekAndDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WeekAndDayFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WeekAndDayFindUniqueArgs<ExtArgs>>
    ): Prisma__WeekAndDayClient<$Result.GetResult<Prisma.$WeekAndDayPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one WeekAndDay that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WeekAndDayFindUniqueOrThrowArgs} args - Arguments to find a WeekAndDay
     * @example
     * // Get one WeekAndDay
     * const weekAndDay = await prisma.weekAndDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WeekAndDayFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WeekAndDayFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WeekAndDayClient<$Result.GetResult<Prisma.$WeekAndDayPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first WeekAndDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekAndDayFindFirstArgs} args - Arguments to find a WeekAndDay
     * @example
     * // Get one WeekAndDay
     * const weekAndDay = await prisma.weekAndDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WeekAndDayFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WeekAndDayFindFirstArgs<ExtArgs>>
    ): Prisma__WeekAndDayClient<$Result.GetResult<Prisma.$WeekAndDayPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first WeekAndDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekAndDayFindFirstOrThrowArgs} args - Arguments to find a WeekAndDay
     * @example
     * // Get one WeekAndDay
     * const weekAndDay = await prisma.weekAndDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WeekAndDayFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WeekAndDayFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WeekAndDayClient<$Result.GetResult<Prisma.$WeekAndDayPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more WeekAndDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekAndDayFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeekAndDays
     * const weekAndDays = await prisma.weekAndDay.findMany()
     * 
     * // Get first 10 WeekAndDays
     * const weekAndDays = await prisma.weekAndDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weekAndDayWithIdOnly = await prisma.weekAndDay.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WeekAndDayFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WeekAndDayFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekAndDayPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a WeekAndDay.
     * @param {WeekAndDayCreateArgs} args - Arguments to create a WeekAndDay.
     * @example
     * // Create one WeekAndDay
     * const WeekAndDay = await prisma.weekAndDay.create({
     *   data: {
     *     // ... data to create a WeekAndDay
     *   }
     * })
     * 
    **/
    create<T extends WeekAndDayCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WeekAndDayCreateArgs<ExtArgs>>
    ): Prisma__WeekAndDayClient<$Result.GetResult<Prisma.$WeekAndDayPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many WeekAndDays.
     *     @param {WeekAndDayCreateManyArgs} args - Arguments to create many WeekAndDays.
     *     @example
     *     // Create many WeekAndDays
     *     const weekAndDay = await prisma.weekAndDay.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WeekAndDayCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WeekAndDayCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WeekAndDay.
     * @param {WeekAndDayDeleteArgs} args - Arguments to delete one WeekAndDay.
     * @example
     * // Delete one WeekAndDay
     * const WeekAndDay = await prisma.weekAndDay.delete({
     *   where: {
     *     // ... filter to delete one WeekAndDay
     *   }
     * })
     * 
    **/
    delete<T extends WeekAndDayDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WeekAndDayDeleteArgs<ExtArgs>>
    ): Prisma__WeekAndDayClient<$Result.GetResult<Prisma.$WeekAndDayPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one WeekAndDay.
     * @param {WeekAndDayUpdateArgs} args - Arguments to update one WeekAndDay.
     * @example
     * // Update one WeekAndDay
     * const weekAndDay = await prisma.weekAndDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WeekAndDayUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WeekAndDayUpdateArgs<ExtArgs>>
    ): Prisma__WeekAndDayClient<$Result.GetResult<Prisma.$WeekAndDayPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more WeekAndDays.
     * @param {WeekAndDayDeleteManyArgs} args - Arguments to filter WeekAndDays to delete.
     * @example
     * // Delete a few WeekAndDays
     * const { count } = await prisma.weekAndDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WeekAndDayDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WeekAndDayDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeekAndDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekAndDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeekAndDays
     * const weekAndDay = await prisma.weekAndDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WeekAndDayUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WeekAndDayUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WeekAndDay.
     * @param {WeekAndDayUpsertArgs} args - Arguments to update or create a WeekAndDay.
     * @example
     * // Update or create a WeekAndDay
     * const weekAndDay = await prisma.weekAndDay.upsert({
     *   create: {
     *     // ... data to create a WeekAndDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeekAndDay we want to update
     *   }
     * })
    **/
    upsert<T extends WeekAndDayUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WeekAndDayUpsertArgs<ExtArgs>>
    ): Prisma__WeekAndDayClient<$Result.GetResult<Prisma.$WeekAndDayPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of WeekAndDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekAndDayCountArgs} args - Arguments to filter WeekAndDays to count.
     * @example
     * // Count the number of WeekAndDays
     * const count = await prisma.weekAndDay.count({
     *   where: {
     *     // ... the filter for the WeekAndDays we want to count
     *   }
     * })
    **/
    count<T extends WeekAndDayCountArgs>(
      args?: Subset<T, WeekAndDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeekAndDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeekAndDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekAndDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeekAndDayAggregateArgs>(args: Subset<T, WeekAndDayAggregateArgs>): Prisma.PrismaPromise<GetWeekAndDayAggregateType<T>>

    /**
     * Group by WeekAndDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekAndDayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeekAndDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeekAndDayGroupByArgs['orderBy'] }
        : { orderBy?: WeekAndDayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeekAndDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeekAndDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeekAndDay model
   */
  readonly fields: WeekAndDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeekAndDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeekAndDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    MonthlyRoutine<T extends WeekAndDay$MonthlyRoutineArgs<ExtArgs> = {}>(args?: Subset<T, WeekAndDay$MonthlyRoutineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyRoutinePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the WeekAndDay model
   */ 
  interface WeekAndDayFieldRefs {
    readonly id: FieldRef<"WeekAndDay", 'String'>
    readonly day: FieldRef<"WeekAndDay", 'Day'>
    readonly week: FieldRef<"WeekAndDay", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * WeekAndDay findUnique
   */
  export type WeekAndDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekAndDay
     */
    select?: WeekAndDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeekAndDayInclude<ExtArgs> | null
    /**
     * Filter, which WeekAndDay to fetch.
     */
    where: WeekAndDayWhereUniqueInput
  }


  /**
   * WeekAndDay findUniqueOrThrow
   */
  export type WeekAndDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekAndDay
     */
    select?: WeekAndDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeekAndDayInclude<ExtArgs> | null
    /**
     * Filter, which WeekAndDay to fetch.
     */
    where: WeekAndDayWhereUniqueInput
  }


  /**
   * WeekAndDay findFirst
   */
  export type WeekAndDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekAndDay
     */
    select?: WeekAndDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeekAndDayInclude<ExtArgs> | null
    /**
     * Filter, which WeekAndDay to fetch.
     */
    where?: WeekAndDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeekAndDays to fetch.
     */
    orderBy?: WeekAndDayOrderByWithRelationInput | WeekAndDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeekAndDays.
     */
    cursor?: WeekAndDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeekAndDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeekAndDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeekAndDays.
     */
    distinct?: WeekAndDayScalarFieldEnum | WeekAndDayScalarFieldEnum[]
  }


  /**
   * WeekAndDay findFirstOrThrow
   */
  export type WeekAndDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekAndDay
     */
    select?: WeekAndDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeekAndDayInclude<ExtArgs> | null
    /**
     * Filter, which WeekAndDay to fetch.
     */
    where?: WeekAndDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeekAndDays to fetch.
     */
    orderBy?: WeekAndDayOrderByWithRelationInput | WeekAndDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeekAndDays.
     */
    cursor?: WeekAndDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeekAndDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeekAndDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeekAndDays.
     */
    distinct?: WeekAndDayScalarFieldEnum | WeekAndDayScalarFieldEnum[]
  }


  /**
   * WeekAndDay findMany
   */
  export type WeekAndDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekAndDay
     */
    select?: WeekAndDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeekAndDayInclude<ExtArgs> | null
    /**
     * Filter, which WeekAndDays to fetch.
     */
    where?: WeekAndDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeekAndDays to fetch.
     */
    orderBy?: WeekAndDayOrderByWithRelationInput | WeekAndDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeekAndDays.
     */
    cursor?: WeekAndDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeekAndDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeekAndDays.
     */
    skip?: number
    distinct?: WeekAndDayScalarFieldEnum | WeekAndDayScalarFieldEnum[]
  }


  /**
   * WeekAndDay create
   */
  export type WeekAndDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekAndDay
     */
    select?: WeekAndDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeekAndDayInclude<ExtArgs> | null
    /**
     * The data needed to create a WeekAndDay.
     */
    data: XOR<WeekAndDayCreateInput, WeekAndDayUncheckedCreateInput>
  }


  /**
   * WeekAndDay createMany
   */
  export type WeekAndDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeekAndDays.
     */
    data: WeekAndDayCreateManyInput | WeekAndDayCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * WeekAndDay update
   */
  export type WeekAndDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekAndDay
     */
    select?: WeekAndDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeekAndDayInclude<ExtArgs> | null
    /**
     * The data needed to update a WeekAndDay.
     */
    data: XOR<WeekAndDayUpdateInput, WeekAndDayUncheckedUpdateInput>
    /**
     * Choose, which WeekAndDay to update.
     */
    where: WeekAndDayWhereUniqueInput
  }


  /**
   * WeekAndDay updateMany
   */
  export type WeekAndDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeekAndDays.
     */
    data: XOR<WeekAndDayUpdateManyMutationInput, WeekAndDayUncheckedUpdateManyInput>
    /**
     * Filter which WeekAndDays to update
     */
    where?: WeekAndDayWhereInput
  }


  /**
   * WeekAndDay upsert
   */
  export type WeekAndDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekAndDay
     */
    select?: WeekAndDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeekAndDayInclude<ExtArgs> | null
    /**
     * The filter to search for the WeekAndDay to update in case it exists.
     */
    where: WeekAndDayWhereUniqueInput
    /**
     * In case the WeekAndDay found by the `where` argument doesn't exist, create a new WeekAndDay with this data.
     */
    create: XOR<WeekAndDayCreateInput, WeekAndDayUncheckedCreateInput>
    /**
     * In case the WeekAndDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeekAndDayUpdateInput, WeekAndDayUncheckedUpdateInput>
  }


  /**
   * WeekAndDay delete
   */
  export type WeekAndDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekAndDay
     */
    select?: WeekAndDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeekAndDayInclude<ExtArgs> | null
    /**
     * Filter which WeekAndDay to delete.
     */
    where: WeekAndDayWhereUniqueInput
  }


  /**
   * WeekAndDay deleteMany
   */
  export type WeekAndDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeekAndDays to delete
     */
    where?: WeekAndDayWhereInput
  }


  /**
   * WeekAndDay.MonthlyRoutine
   */
  export type WeekAndDay$MonthlyRoutineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRoutine
     */
    select?: MonthlyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthlyRoutineInclude<ExtArgs> | null
    where?: MonthlyRoutineWhereInput
    orderBy?: MonthlyRoutineOrderByWithRelationInput | MonthlyRoutineOrderByWithRelationInput[]
    cursor?: MonthlyRoutineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyRoutineScalarFieldEnum | MonthlyRoutineScalarFieldEnum[]
  }


  /**
   * WeekAndDay without action
   */
  export type WeekAndDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekAndDay
     */
    select?: WeekAndDaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeekAndDayInclude<ExtArgs> | null
  }



  /**
   * Model Date
   */

  export type AggregateDate = {
    _count: DateCountAggregateOutputType | null
    _avg: DateAvgAggregateOutputType | null
    _sum: DateSumAggregateOutputType | null
    _min: DateMinAggregateOutputType | null
    _max: DateMaxAggregateOutputType | null
  }

  export type DateAvgAggregateOutputType = {
    date: number | null
  }

  export type DateSumAggregateOutputType = {
    date: number | null
  }

  export type DateMinAggregateOutputType = {
    id: string | null
    date: number | null
  }

  export type DateMaxAggregateOutputType = {
    id: string | null
    date: number | null
  }

  export type DateCountAggregateOutputType = {
    id: number
    date: number
    _all: number
  }


  export type DateAvgAggregateInputType = {
    date?: true
  }

  export type DateSumAggregateInputType = {
    date?: true
  }

  export type DateMinAggregateInputType = {
    id?: true
    date?: true
  }

  export type DateMaxAggregateInputType = {
    id?: true
    date?: true
  }

  export type DateCountAggregateInputType = {
    id?: true
    date?: true
    _all?: true
  }

  export type DateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Date to aggregate.
     */
    where?: DateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dates to fetch.
     */
    orderBy?: DateOrderByWithRelationInput | DateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dates
    **/
    _count?: true | DateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DateMaxAggregateInputType
  }

  export type GetDateAggregateType<T extends DateAggregateArgs> = {
        [P in keyof T & keyof AggregateDate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDate[P]>
      : GetScalarType<T[P], AggregateDate[P]>
  }




  export type DateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DateWhereInput
    orderBy?: DateOrderByWithAggregationInput | DateOrderByWithAggregationInput[]
    by: DateScalarFieldEnum[] | DateScalarFieldEnum
    having?: DateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DateCountAggregateInputType | true
    _avg?: DateAvgAggregateInputType
    _sum?: DateSumAggregateInputType
    _min?: DateMinAggregateInputType
    _max?: DateMaxAggregateInputType
  }

  export type DateGroupByOutputType = {
    id: string
    date: number
    _count: DateCountAggregateOutputType | null
    _avg: DateAvgAggregateOutputType | null
    _sum: DateSumAggregateOutputType | null
    _min: DateMinAggregateOutputType | null
    _max: DateMaxAggregateOutputType | null
  }

  type GetDateGroupByPayload<T extends DateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DateGroupByOutputType[P]>
            : GetScalarType<T[P], DateGroupByOutputType[P]>
        }
      >
    >


  export type DateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    MonthlyRoutine?: boolean | Date$MonthlyRoutineArgs<ExtArgs>
    _count?: boolean | DateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["date"]>

  export type DateSelectScalar = {
    id?: boolean
    date?: boolean
  }

  export type DateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MonthlyRoutine?: boolean | Date$MonthlyRoutineArgs<ExtArgs>
    _count?: boolean | DateCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Date"
    objects: {
      MonthlyRoutine: Prisma.$MonthlyRoutinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: number
    }, ExtArgs["result"]["date"]>
    composites: {}
  }


  type DateGetPayload<S extends boolean | null | undefined | DateDefaultArgs> = $Result.GetResult<Prisma.$DatePayload, S>

  type DateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DateFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DateCountAggregateInputType | true
    }

  export interface DateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Date'], meta: { name: 'Date' } }
    /**
     * Find zero or one Date that matches the filter.
     * @param {DateFindUniqueArgs} args - Arguments to find a Date
     * @example
     * // Get one Date
     * const date = await prisma.date.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DateFindUniqueArgs<ExtArgs>>
    ): Prisma__DateClient<$Result.GetResult<Prisma.$DatePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Date that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DateFindUniqueOrThrowArgs} args - Arguments to find a Date
     * @example
     * // Get one Date
     * const date = await prisma.date.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DateClient<$Result.GetResult<Prisma.$DatePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Date that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateFindFirstArgs} args - Arguments to find a Date
     * @example
     * // Get one Date
     * const date = await prisma.date.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DateFindFirstArgs<ExtArgs>>
    ): Prisma__DateClient<$Result.GetResult<Prisma.$DatePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Date that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateFindFirstOrThrowArgs} args - Arguments to find a Date
     * @example
     * // Get one Date
     * const date = await prisma.date.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DateClient<$Result.GetResult<Prisma.$DatePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Dates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dates
     * const dates = await prisma.date.findMany()
     * 
     * // Get first 10 Dates
     * const dates = await prisma.date.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dateWithIdOnly = await prisma.date.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Date.
     * @param {DateCreateArgs} args - Arguments to create a Date.
     * @example
     * // Create one Date
     * const Date = await prisma.date.create({
     *   data: {
     *     // ... data to create a Date
     *   }
     * })
     * 
    **/
    create<T extends DateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DateCreateArgs<ExtArgs>>
    ): Prisma__DateClient<$Result.GetResult<Prisma.$DatePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Dates.
     *     @param {DateCreateManyArgs} args - Arguments to create many Dates.
     *     @example
     *     // Create many Dates
     *     const date = await prisma.date.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Date.
     * @param {DateDeleteArgs} args - Arguments to delete one Date.
     * @example
     * // Delete one Date
     * const Date = await prisma.date.delete({
     *   where: {
     *     // ... filter to delete one Date
     *   }
     * })
     * 
    **/
    delete<T extends DateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DateDeleteArgs<ExtArgs>>
    ): Prisma__DateClient<$Result.GetResult<Prisma.$DatePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Date.
     * @param {DateUpdateArgs} args - Arguments to update one Date.
     * @example
     * // Update one Date
     * const date = await prisma.date.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DateUpdateArgs<ExtArgs>>
    ): Prisma__DateClient<$Result.GetResult<Prisma.$DatePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Dates.
     * @param {DateDeleteManyArgs} args - Arguments to filter Dates to delete.
     * @example
     * // Delete a few Dates
     * const { count } = await prisma.date.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dates
     * const date = await prisma.date.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Date.
     * @param {DateUpsertArgs} args - Arguments to update or create a Date.
     * @example
     * // Update or create a Date
     * const date = await prisma.date.upsert({
     *   create: {
     *     // ... data to create a Date
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Date we want to update
     *   }
     * })
    **/
    upsert<T extends DateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DateUpsertArgs<ExtArgs>>
    ): Prisma__DateClient<$Result.GetResult<Prisma.$DatePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Dates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateCountArgs} args - Arguments to filter Dates to count.
     * @example
     * // Count the number of Dates
     * const count = await prisma.date.count({
     *   where: {
     *     // ... the filter for the Dates we want to count
     *   }
     * })
    **/
    count<T extends DateCountArgs>(
      args?: Subset<T, DateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Date.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DateAggregateArgs>(args: Subset<T, DateAggregateArgs>): Prisma.PrismaPromise<GetDateAggregateType<T>>

    /**
     * Group by Date.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DateGroupByArgs['orderBy'] }
        : { orderBy?: DateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Date model
   */
  readonly fields: DateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Date.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    MonthlyRoutine<T extends Date$MonthlyRoutineArgs<ExtArgs> = {}>(args?: Subset<T, Date$MonthlyRoutineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyRoutinePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Date model
   */ 
  interface DateFieldRefs {
    readonly id: FieldRef<"Date", 'String'>
    readonly date: FieldRef<"Date", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Date findUnique
   */
  export type DateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date
     */
    select?: DateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateInclude<ExtArgs> | null
    /**
     * Filter, which Date to fetch.
     */
    where: DateWhereUniqueInput
  }


  /**
   * Date findUniqueOrThrow
   */
  export type DateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date
     */
    select?: DateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateInclude<ExtArgs> | null
    /**
     * Filter, which Date to fetch.
     */
    where: DateWhereUniqueInput
  }


  /**
   * Date findFirst
   */
  export type DateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date
     */
    select?: DateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateInclude<ExtArgs> | null
    /**
     * Filter, which Date to fetch.
     */
    where?: DateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dates to fetch.
     */
    orderBy?: DateOrderByWithRelationInput | DateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dates.
     */
    cursor?: DateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dates.
     */
    distinct?: DateScalarFieldEnum | DateScalarFieldEnum[]
  }


  /**
   * Date findFirstOrThrow
   */
  export type DateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date
     */
    select?: DateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateInclude<ExtArgs> | null
    /**
     * Filter, which Date to fetch.
     */
    where?: DateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dates to fetch.
     */
    orderBy?: DateOrderByWithRelationInput | DateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dates.
     */
    cursor?: DateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dates.
     */
    distinct?: DateScalarFieldEnum | DateScalarFieldEnum[]
  }


  /**
   * Date findMany
   */
  export type DateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date
     */
    select?: DateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateInclude<ExtArgs> | null
    /**
     * Filter, which Dates to fetch.
     */
    where?: DateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dates to fetch.
     */
    orderBy?: DateOrderByWithRelationInput | DateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dates.
     */
    cursor?: DateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dates.
     */
    skip?: number
    distinct?: DateScalarFieldEnum | DateScalarFieldEnum[]
  }


  /**
   * Date create
   */
  export type DateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date
     */
    select?: DateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateInclude<ExtArgs> | null
    /**
     * The data needed to create a Date.
     */
    data: XOR<DateCreateInput, DateUncheckedCreateInput>
  }


  /**
   * Date createMany
   */
  export type DateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dates.
     */
    data: DateCreateManyInput | DateCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Date update
   */
  export type DateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date
     */
    select?: DateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateInclude<ExtArgs> | null
    /**
     * The data needed to update a Date.
     */
    data: XOR<DateUpdateInput, DateUncheckedUpdateInput>
    /**
     * Choose, which Date to update.
     */
    where: DateWhereUniqueInput
  }


  /**
   * Date updateMany
   */
  export type DateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dates.
     */
    data: XOR<DateUpdateManyMutationInput, DateUncheckedUpdateManyInput>
    /**
     * Filter which Dates to update
     */
    where?: DateWhereInput
  }


  /**
   * Date upsert
   */
  export type DateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date
     */
    select?: DateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateInclude<ExtArgs> | null
    /**
     * The filter to search for the Date to update in case it exists.
     */
    where: DateWhereUniqueInput
    /**
     * In case the Date found by the `where` argument doesn't exist, create a new Date with this data.
     */
    create: XOR<DateCreateInput, DateUncheckedCreateInput>
    /**
     * In case the Date was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DateUpdateInput, DateUncheckedUpdateInput>
  }


  /**
   * Date delete
   */
  export type DateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date
     */
    select?: DateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateInclude<ExtArgs> | null
    /**
     * Filter which Date to delete.
     */
    where: DateWhereUniqueInput
  }


  /**
   * Date deleteMany
   */
  export type DateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dates to delete
     */
    where?: DateWhereInput
  }


  /**
   * Date.MonthlyRoutine
   */
  export type Date$MonthlyRoutineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyRoutine
     */
    select?: MonthlyRoutineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonthlyRoutineInclude<ExtArgs> | null
    where?: MonthlyRoutineWhereInput
    orderBy?: MonthlyRoutineOrderByWithRelationInput | MonthlyRoutineOrderByWithRelationInput[]
    cursor?: MonthlyRoutineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthlyRoutineScalarFieldEnum | MonthlyRoutineScalarFieldEnum[]
  }


  /**
   * Date without action
   */
  export type DateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date
     */
    select?: DateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DateInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    username: 'username',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const RoutineControlScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type RoutineControlScalarFieldEnum = (typeof RoutineControlScalarFieldEnum)[keyof typeof RoutineControlScalarFieldEnum]


  export const DailyRoutineScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    content: 'content',
    routineControlId: 'routineControlId'
  };

  export type DailyRoutineScalarFieldEnum = (typeof DailyRoutineScalarFieldEnum)[keyof typeof DailyRoutineScalarFieldEnum]


  export const DaysScalarFieldEnum: {
    id: 'id',
    sun: 'sun',
    mon: 'mon',
    tue: 'tue',
    wed: 'wed',
    thu: 'thu',
    fri: 'fri',
    sat: 'sat'
  };

  export type DaysScalarFieldEnum = (typeof DaysScalarFieldEnum)[keyof typeof DaysScalarFieldEnum]


  export const WeeklyRoutineScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    content: 'content',
    daysId: 'daysId',
    routineControlId: 'routineControlId'
  };

  export type WeeklyRoutineScalarFieldEnum = (typeof WeeklyRoutineScalarFieldEnum)[keyof typeof WeeklyRoutineScalarFieldEnum]


  export const MonthlyRoutineScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDate: 'isDate',
    weekAndDayId: 'weekAndDayId',
    dateId: 'dateId',
    content: 'content',
    routineControlId: 'routineControlId'
  };

  export type MonthlyRoutineScalarFieldEnum = (typeof MonthlyRoutineScalarFieldEnum)[keyof typeof MonthlyRoutineScalarFieldEnum]


  export const WeekAndDayScalarFieldEnum: {
    id: 'id',
    day: 'day',
    week: 'week'
  };

  export type WeekAndDayScalarFieldEnum = (typeof WeekAndDayScalarFieldEnum)[keyof typeof WeekAndDayScalarFieldEnum]


  export const DateScalarFieldEnum: {
    id: 'id',
    date: 'date'
  };

  export type DateScalarFieldEnum = (typeof DateScalarFieldEnum)[keyof typeof DateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Day'
   */
  export type EnumDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Day'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    routineControl?: XOR<RoutineControlNullableRelationFilter, RoutineControlWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    routineControl?: RoutineControlOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    routineControl?: XOR<RoutineControlNullableRelationFilter, RoutineControlWhereInput> | null
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type RoutineControlWhereInput = {
    AND?: RoutineControlWhereInput | RoutineControlWhereInput[]
    OR?: RoutineControlWhereInput[]
    NOT?: RoutineControlWhereInput | RoutineControlWhereInput[]
    id?: StringFilter<"RoutineControl"> | string
    createdAt?: DateTimeFilter<"RoutineControl"> | Date | string
    updatedAt?: DateTimeFilter<"RoutineControl"> | Date | string
    userId?: StringFilter<"RoutineControl"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    dailyRoutines?: DailyRoutineListRelationFilter
    weeklyRoutines?: WeeklyRoutineListRelationFilter
    monthlyRoutines?: MonthlyRoutineListRelationFilter
  }

  export type RoutineControlOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    dailyRoutines?: DailyRoutineOrderByRelationAggregateInput
    weeklyRoutines?: WeeklyRoutineOrderByRelationAggregateInput
    monthlyRoutines?: MonthlyRoutineOrderByRelationAggregateInput
  }

  export type RoutineControlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: RoutineControlWhereInput | RoutineControlWhereInput[]
    OR?: RoutineControlWhereInput[]
    NOT?: RoutineControlWhereInput | RoutineControlWhereInput[]
    createdAt?: DateTimeFilter<"RoutineControl"> | Date | string
    updatedAt?: DateTimeFilter<"RoutineControl"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    dailyRoutines?: DailyRoutineListRelationFilter
    weeklyRoutines?: WeeklyRoutineListRelationFilter
    monthlyRoutines?: MonthlyRoutineListRelationFilter
  }, "id" | "userId">

  export type RoutineControlOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: RoutineControlCountOrderByAggregateInput
    _max?: RoutineControlMaxOrderByAggregateInput
    _min?: RoutineControlMinOrderByAggregateInput
  }

  export type RoutineControlScalarWhereWithAggregatesInput = {
    AND?: RoutineControlScalarWhereWithAggregatesInput | RoutineControlScalarWhereWithAggregatesInput[]
    OR?: RoutineControlScalarWhereWithAggregatesInput[]
    NOT?: RoutineControlScalarWhereWithAggregatesInput | RoutineControlScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoutineControl"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RoutineControl"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoutineControl"> | Date | string
    userId?: StringWithAggregatesFilter<"RoutineControl"> | string
  }

  export type DailyRoutineWhereInput = {
    AND?: DailyRoutineWhereInput | DailyRoutineWhereInput[]
    OR?: DailyRoutineWhereInput[]
    NOT?: DailyRoutineWhereInput | DailyRoutineWhereInput[]
    id?: StringFilter<"DailyRoutine"> | string
    createdAt?: DateTimeFilter<"DailyRoutine"> | Date | string
    updatedAt?: DateTimeFilter<"DailyRoutine"> | Date | string
    content?: StringFilter<"DailyRoutine"> | string
    routineControlId?: StringNullableFilter<"DailyRoutine"> | string | null
    routineControl?: XOR<RoutineControlNullableRelationFilter, RoutineControlWhereInput> | null
  }

  export type DailyRoutineOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    routineControlId?: SortOrderInput | SortOrder
    routineControl?: RoutineControlOrderByWithRelationInput
  }

  export type DailyRoutineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DailyRoutineWhereInput | DailyRoutineWhereInput[]
    OR?: DailyRoutineWhereInput[]
    NOT?: DailyRoutineWhereInput | DailyRoutineWhereInput[]
    createdAt?: DateTimeFilter<"DailyRoutine"> | Date | string
    updatedAt?: DateTimeFilter<"DailyRoutine"> | Date | string
    content?: StringFilter<"DailyRoutine"> | string
    routineControlId?: StringNullableFilter<"DailyRoutine"> | string | null
    routineControl?: XOR<RoutineControlNullableRelationFilter, RoutineControlWhereInput> | null
  }, "id">

  export type DailyRoutineOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    routineControlId?: SortOrderInput | SortOrder
    _count?: DailyRoutineCountOrderByAggregateInput
    _max?: DailyRoutineMaxOrderByAggregateInput
    _min?: DailyRoutineMinOrderByAggregateInput
  }

  export type DailyRoutineScalarWhereWithAggregatesInput = {
    AND?: DailyRoutineScalarWhereWithAggregatesInput | DailyRoutineScalarWhereWithAggregatesInput[]
    OR?: DailyRoutineScalarWhereWithAggregatesInput[]
    NOT?: DailyRoutineScalarWhereWithAggregatesInput | DailyRoutineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyRoutine"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DailyRoutine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyRoutine"> | Date | string
    content?: StringWithAggregatesFilter<"DailyRoutine"> | string
    routineControlId?: StringNullableWithAggregatesFilter<"DailyRoutine"> | string | null
  }

  export type DaysWhereInput = {
    AND?: DaysWhereInput | DaysWhereInput[]
    OR?: DaysWhereInput[]
    NOT?: DaysWhereInput | DaysWhereInput[]
    id?: StringFilter<"Days"> | string
    sun?: BoolFilter<"Days"> | boolean
    mon?: BoolFilter<"Days"> | boolean
    tue?: BoolFilter<"Days"> | boolean
    wed?: BoolFilter<"Days"> | boolean
    thu?: BoolFilter<"Days"> | boolean
    fri?: BoolFilter<"Days"> | boolean
    sat?: BoolFilter<"Days"> | boolean
    WeeklyRoutine?: WeeklyRoutineListRelationFilter
  }

  export type DaysOrderByWithRelationInput = {
    id?: SortOrder
    sun?: SortOrder
    mon?: SortOrder
    tue?: SortOrder
    wed?: SortOrder
    thu?: SortOrder
    fri?: SortOrder
    sat?: SortOrder
    WeeklyRoutine?: WeeklyRoutineOrderByRelationAggregateInput
  }

  export type DaysWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DaysWhereInput | DaysWhereInput[]
    OR?: DaysWhereInput[]
    NOT?: DaysWhereInput | DaysWhereInput[]
    sun?: BoolFilter<"Days"> | boolean
    mon?: BoolFilter<"Days"> | boolean
    tue?: BoolFilter<"Days"> | boolean
    wed?: BoolFilter<"Days"> | boolean
    thu?: BoolFilter<"Days"> | boolean
    fri?: BoolFilter<"Days"> | boolean
    sat?: BoolFilter<"Days"> | boolean
    WeeklyRoutine?: WeeklyRoutineListRelationFilter
  }, "id">

  export type DaysOrderByWithAggregationInput = {
    id?: SortOrder
    sun?: SortOrder
    mon?: SortOrder
    tue?: SortOrder
    wed?: SortOrder
    thu?: SortOrder
    fri?: SortOrder
    sat?: SortOrder
    _count?: DaysCountOrderByAggregateInput
    _max?: DaysMaxOrderByAggregateInput
    _min?: DaysMinOrderByAggregateInput
  }

  export type DaysScalarWhereWithAggregatesInput = {
    AND?: DaysScalarWhereWithAggregatesInput | DaysScalarWhereWithAggregatesInput[]
    OR?: DaysScalarWhereWithAggregatesInput[]
    NOT?: DaysScalarWhereWithAggregatesInput | DaysScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Days"> | string
    sun?: BoolWithAggregatesFilter<"Days"> | boolean
    mon?: BoolWithAggregatesFilter<"Days"> | boolean
    tue?: BoolWithAggregatesFilter<"Days"> | boolean
    wed?: BoolWithAggregatesFilter<"Days"> | boolean
    thu?: BoolWithAggregatesFilter<"Days"> | boolean
    fri?: BoolWithAggregatesFilter<"Days"> | boolean
    sat?: BoolWithAggregatesFilter<"Days"> | boolean
  }

  export type WeeklyRoutineWhereInput = {
    AND?: WeeklyRoutineWhereInput | WeeklyRoutineWhereInput[]
    OR?: WeeklyRoutineWhereInput[]
    NOT?: WeeklyRoutineWhereInput | WeeklyRoutineWhereInput[]
    id?: StringFilter<"WeeklyRoutine"> | string
    createdAt?: DateTimeFilter<"WeeklyRoutine"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklyRoutine"> | Date | string
    content?: StringFilter<"WeeklyRoutine"> | string
    daysId?: StringFilter<"WeeklyRoutine"> | string
    routineControlId?: StringNullableFilter<"WeeklyRoutine"> | string | null
    days?: XOR<DaysRelationFilter, DaysWhereInput>
    routineControl?: XOR<RoutineControlNullableRelationFilter, RoutineControlWhereInput> | null
  }

  export type WeeklyRoutineOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    daysId?: SortOrder
    routineControlId?: SortOrderInput | SortOrder
    days?: DaysOrderByWithRelationInput
    routineControl?: RoutineControlOrderByWithRelationInput
  }

  export type WeeklyRoutineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WeeklyRoutineWhereInput | WeeklyRoutineWhereInput[]
    OR?: WeeklyRoutineWhereInput[]
    NOT?: WeeklyRoutineWhereInput | WeeklyRoutineWhereInput[]
    createdAt?: DateTimeFilter<"WeeklyRoutine"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklyRoutine"> | Date | string
    content?: StringFilter<"WeeklyRoutine"> | string
    daysId?: StringFilter<"WeeklyRoutine"> | string
    routineControlId?: StringNullableFilter<"WeeklyRoutine"> | string | null
    days?: XOR<DaysRelationFilter, DaysWhereInput>
    routineControl?: XOR<RoutineControlNullableRelationFilter, RoutineControlWhereInput> | null
  }, "id">

  export type WeeklyRoutineOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    daysId?: SortOrder
    routineControlId?: SortOrderInput | SortOrder
    _count?: WeeklyRoutineCountOrderByAggregateInput
    _max?: WeeklyRoutineMaxOrderByAggregateInput
    _min?: WeeklyRoutineMinOrderByAggregateInput
  }

  export type WeeklyRoutineScalarWhereWithAggregatesInput = {
    AND?: WeeklyRoutineScalarWhereWithAggregatesInput | WeeklyRoutineScalarWhereWithAggregatesInput[]
    OR?: WeeklyRoutineScalarWhereWithAggregatesInput[]
    NOT?: WeeklyRoutineScalarWhereWithAggregatesInput | WeeklyRoutineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeeklyRoutine"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WeeklyRoutine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WeeklyRoutine"> | Date | string
    content?: StringWithAggregatesFilter<"WeeklyRoutine"> | string
    daysId?: StringWithAggregatesFilter<"WeeklyRoutine"> | string
    routineControlId?: StringNullableWithAggregatesFilter<"WeeklyRoutine"> | string | null
  }

  export type MonthlyRoutineWhereInput = {
    AND?: MonthlyRoutineWhereInput | MonthlyRoutineWhereInput[]
    OR?: MonthlyRoutineWhereInput[]
    NOT?: MonthlyRoutineWhereInput | MonthlyRoutineWhereInput[]
    id?: StringFilter<"MonthlyRoutine"> | string
    createdAt?: DateTimeFilter<"MonthlyRoutine"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyRoutine"> | Date | string
    isDate?: BoolFilter<"MonthlyRoutine"> | boolean
    weekAndDayId?: StringNullableFilter<"MonthlyRoutine"> | string | null
    dateId?: StringNullableFilter<"MonthlyRoutine"> | string | null
    content?: StringFilter<"MonthlyRoutine"> | string
    routineControlId?: StringNullableFilter<"MonthlyRoutine"> | string | null
    weekAndDay?: XOR<WeekAndDayNullableRelationFilter, WeekAndDayWhereInput> | null
    date?: XOR<DateNullableRelationFilter, DateWhereInput> | null
    routineControl?: XOR<RoutineControlNullableRelationFilter, RoutineControlWhereInput> | null
  }

  export type MonthlyRoutineOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDate?: SortOrder
    weekAndDayId?: SortOrderInput | SortOrder
    dateId?: SortOrderInput | SortOrder
    content?: SortOrder
    routineControlId?: SortOrderInput | SortOrder
    weekAndDay?: WeekAndDayOrderByWithRelationInput
    date?: DateOrderByWithRelationInput
    routineControl?: RoutineControlOrderByWithRelationInput
  }

  export type MonthlyRoutineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonthlyRoutineWhereInput | MonthlyRoutineWhereInput[]
    OR?: MonthlyRoutineWhereInput[]
    NOT?: MonthlyRoutineWhereInput | MonthlyRoutineWhereInput[]
    createdAt?: DateTimeFilter<"MonthlyRoutine"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyRoutine"> | Date | string
    isDate?: BoolFilter<"MonthlyRoutine"> | boolean
    weekAndDayId?: StringNullableFilter<"MonthlyRoutine"> | string | null
    dateId?: StringNullableFilter<"MonthlyRoutine"> | string | null
    content?: StringFilter<"MonthlyRoutine"> | string
    routineControlId?: StringNullableFilter<"MonthlyRoutine"> | string | null
    weekAndDay?: XOR<WeekAndDayNullableRelationFilter, WeekAndDayWhereInput> | null
    date?: XOR<DateNullableRelationFilter, DateWhereInput> | null
    routineControl?: XOR<RoutineControlNullableRelationFilter, RoutineControlWhereInput> | null
  }, "id">

  export type MonthlyRoutineOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDate?: SortOrder
    weekAndDayId?: SortOrderInput | SortOrder
    dateId?: SortOrderInput | SortOrder
    content?: SortOrder
    routineControlId?: SortOrderInput | SortOrder
    _count?: MonthlyRoutineCountOrderByAggregateInput
    _max?: MonthlyRoutineMaxOrderByAggregateInput
    _min?: MonthlyRoutineMinOrderByAggregateInput
  }

  export type MonthlyRoutineScalarWhereWithAggregatesInput = {
    AND?: MonthlyRoutineScalarWhereWithAggregatesInput | MonthlyRoutineScalarWhereWithAggregatesInput[]
    OR?: MonthlyRoutineScalarWhereWithAggregatesInput[]
    NOT?: MonthlyRoutineScalarWhereWithAggregatesInput | MonthlyRoutineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonthlyRoutine"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MonthlyRoutine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MonthlyRoutine"> | Date | string
    isDate?: BoolWithAggregatesFilter<"MonthlyRoutine"> | boolean
    weekAndDayId?: StringNullableWithAggregatesFilter<"MonthlyRoutine"> | string | null
    dateId?: StringNullableWithAggregatesFilter<"MonthlyRoutine"> | string | null
    content?: StringWithAggregatesFilter<"MonthlyRoutine"> | string
    routineControlId?: StringNullableWithAggregatesFilter<"MonthlyRoutine"> | string | null
  }

  export type WeekAndDayWhereInput = {
    AND?: WeekAndDayWhereInput | WeekAndDayWhereInput[]
    OR?: WeekAndDayWhereInput[]
    NOT?: WeekAndDayWhereInput | WeekAndDayWhereInput[]
    id?: StringFilter<"WeekAndDay"> | string
    day?: EnumDayFilter<"WeekAndDay"> | $Enums.Day
    week?: IntFilter<"WeekAndDay"> | number
    MonthlyRoutine?: MonthlyRoutineListRelationFilter
  }

  export type WeekAndDayOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    week?: SortOrder
    MonthlyRoutine?: MonthlyRoutineOrderByRelationAggregateInput
  }

  export type WeekAndDayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WeekAndDayWhereInput | WeekAndDayWhereInput[]
    OR?: WeekAndDayWhereInput[]
    NOT?: WeekAndDayWhereInput | WeekAndDayWhereInput[]
    day?: EnumDayFilter<"WeekAndDay"> | $Enums.Day
    week?: IntFilter<"WeekAndDay"> | number
    MonthlyRoutine?: MonthlyRoutineListRelationFilter
  }, "id">

  export type WeekAndDayOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    week?: SortOrder
    _count?: WeekAndDayCountOrderByAggregateInput
    _avg?: WeekAndDayAvgOrderByAggregateInput
    _max?: WeekAndDayMaxOrderByAggregateInput
    _min?: WeekAndDayMinOrderByAggregateInput
    _sum?: WeekAndDaySumOrderByAggregateInput
  }

  export type WeekAndDayScalarWhereWithAggregatesInput = {
    AND?: WeekAndDayScalarWhereWithAggregatesInput | WeekAndDayScalarWhereWithAggregatesInput[]
    OR?: WeekAndDayScalarWhereWithAggregatesInput[]
    NOT?: WeekAndDayScalarWhereWithAggregatesInput | WeekAndDayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeekAndDay"> | string
    day?: EnumDayWithAggregatesFilter<"WeekAndDay"> | $Enums.Day
    week?: IntWithAggregatesFilter<"WeekAndDay"> | number
  }

  export type DateWhereInput = {
    AND?: DateWhereInput | DateWhereInput[]
    OR?: DateWhereInput[]
    NOT?: DateWhereInput | DateWhereInput[]
    id?: StringFilter<"Date"> | string
    date?: IntFilter<"Date"> | number
    MonthlyRoutine?: MonthlyRoutineListRelationFilter
  }

  export type DateOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    MonthlyRoutine?: MonthlyRoutineOrderByRelationAggregateInput
  }

  export type DateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DateWhereInput | DateWhereInput[]
    OR?: DateWhereInput[]
    NOT?: DateWhereInput | DateWhereInput[]
    date?: IntFilter<"Date"> | number
    MonthlyRoutine?: MonthlyRoutineListRelationFilter
  }, "id">

  export type DateOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    _count?: DateCountOrderByAggregateInput
    _avg?: DateAvgOrderByAggregateInput
    _max?: DateMaxOrderByAggregateInput
    _min?: DateMinOrderByAggregateInput
    _sum?: DateSumOrderByAggregateInput
  }

  export type DateScalarWhereWithAggregatesInput = {
    AND?: DateScalarWhereWithAggregatesInput | DateScalarWhereWithAggregatesInput[]
    OR?: DateScalarWhereWithAggregatesInput[]
    NOT?: DateScalarWhereWithAggregatesInput | DateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Date"> | string
    date?: IntWithAggregatesFilter<"Date"> | number
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    routineControl?: RoutineControlCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    routineControl?: RoutineControlUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    routineControl?: RoutineControlUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    routineControl?: RoutineControlUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineControlCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutineControlInput
    dailyRoutines?: DailyRoutineCreateNestedManyWithoutRoutineControlInput
    weeklyRoutines?: WeeklyRoutineCreateNestedManyWithoutRoutineControlInput
    monthlyRoutines?: MonthlyRoutineCreateNestedManyWithoutRoutineControlInput
  }

  export type RoutineControlUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    dailyRoutines?: DailyRoutineUncheckedCreateNestedManyWithoutRoutineControlInput
    weeklyRoutines?: WeeklyRoutineUncheckedCreateNestedManyWithoutRoutineControlInput
    monthlyRoutines?: MonthlyRoutineUncheckedCreateNestedManyWithoutRoutineControlInput
  }

  export type RoutineControlUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutineControlNestedInput
    dailyRoutines?: DailyRoutineUpdateManyWithoutRoutineControlNestedInput
    weeklyRoutines?: WeeklyRoutineUpdateManyWithoutRoutineControlNestedInput
    monthlyRoutines?: MonthlyRoutineUpdateManyWithoutRoutineControlNestedInput
  }

  export type RoutineControlUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    dailyRoutines?: DailyRoutineUncheckedUpdateManyWithoutRoutineControlNestedInput
    weeklyRoutines?: WeeklyRoutineUncheckedUpdateManyWithoutRoutineControlNestedInput
    monthlyRoutines?: MonthlyRoutineUncheckedUpdateManyWithoutRoutineControlNestedInput
  }

  export type RoutineControlCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type RoutineControlUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineControlUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DailyRoutineCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    routineControl?: RoutineControlCreateNestedOneWithoutDailyRoutinesInput
  }

  export type DailyRoutineUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    routineControlId?: string | null
  }

  export type DailyRoutineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    routineControl?: RoutineControlUpdateOneWithoutDailyRoutinesNestedInput
  }

  export type DailyRoutineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    routineControlId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyRoutineCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    routineControlId?: string | null
  }

  export type DailyRoutineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type DailyRoutineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    routineControlId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DaysCreateInput = {
    id?: string
    sun?: boolean
    mon?: boolean
    tue?: boolean
    wed?: boolean
    thu?: boolean
    fri?: boolean
    sat?: boolean
    WeeklyRoutine?: WeeklyRoutineCreateNestedManyWithoutDaysInput
  }

  export type DaysUncheckedCreateInput = {
    id?: string
    sun?: boolean
    mon?: boolean
    tue?: boolean
    wed?: boolean
    thu?: boolean
    fri?: boolean
    sat?: boolean
    WeeklyRoutine?: WeeklyRoutineUncheckedCreateNestedManyWithoutDaysInput
  }

  export type DaysUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sun?: BoolFieldUpdateOperationsInput | boolean
    mon?: BoolFieldUpdateOperationsInput | boolean
    tue?: BoolFieldUpdateOperationsInput | boolean
    wed?: BoolFieldUpdateOperationsInput | boolean
    thu?: BoolFieldUpdateOperationsInput | boolean
    fri?: BoolFieldUpdateOperationsInput | boolean
    sat?: BoolFieldUpdateOperationsInput | boolean
    WeeklyRoutine?: WeeklyRoutineUpdateManyWithoutDaysNestedInput
  }

  export type DaysUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sun?: BoolFieldUpdateOperationsInput | boolean
    mon?: BoolFieldUpdateOperationsInput | boolean
    tue?: BoolFieldUpdateOperationsInput | boolean
    wed?: BoolFieldUpdateOperationsInput | boolean
    thu?: BoolFieldUpdateOperationsInput | boolean
    fri?: BoolFieldUpdateOperationsInput | boolean
    sat?: BoolFieldUpdateOperationsInput | boolean
    WeeklyRoutine?: WeeklyRoutineUncheckedUpdateManyWithoutDaysNestedInput
  }

  export type DaysCreateManyInput = {
    id?: string
    sun?: boolean
    mon?: boolean
    tue?: boolean
    wed?: boolean
    thu?: boolean
    fri?: boolean
    sat?: boolean
  }

  export type DaysUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sun?: BoolFieldUpdateOperationsInput | boolean
    mon?: BoolFieldUpdateOperationsInput | boolean
    tue?: BoolFieldUpdateOperationsInput | boolean
    wed?: BoolFieldUpdateOperationsInput | boolean
    thu?: BoolFieldUpdateOperationsInput | boolean
    fri?: BoolFieldUpdateOperationsInput | boolean
    sat?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DaysUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sun?: BoolFieldUpdateOperationsInput | boolean
    mon?: BoolFieldUpdateOperationsInput | boolean
    tue?: BoolFieldUpdateOperationsInput | boolean
    wed?: BoolFieldUpdateOperationsInput | boolean
    thu?: BoolFieldUpdateOperationsInput | boolean
    fri?: BoolFieldUpdateOperationsInput | boolean
    sat?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WeeklyRoutineCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    days: DaysCreateNestedOneWithoutWeeklyRoutineInput
    routineControl?: RoutineControlCreateNestedOneWithoutWeeklyRoutinesInput
  }

  export type WeeklyRoutineUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    daysId: string
    routineControlId?: string | null
  }

  export type WeeklyRoutineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    days?: DaysUpdateOneRequiredWithoutWeeklyRoutineNestedInput
    routineControl?: RoutineControlUpdateOneWithoutWeeklyRoutinesNestedInput
  }

  export type WeeklyRoutineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    daysId?: StringFieldUpdateOperationsInput | string
    routineControlId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeeklyRoutineCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    daysId: string
    routineControlId?: string | null
  }

  export type WeeklyRoutineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type WeeklyRoutineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    daysId?: StringFieldUpdateOperationsInput | string
    routineControlId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlyRoutineCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDate: boolean
    content: string
    weekAndDay?: WeekAndDayCreateNestedOneWithoutMonthlyRoutineInput
    date?: DateCreateNestedOneWithoutMonthlyRoutineInput
    routineControl?: RoutineControlCreateNestedOneWithoutMonthlyRoutinesInput
  }

  export type MonthlyRoutineUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDate: boolean
    weekAndDayId?: string | null
    dateId?: string | null
    content: string
    routineControlId?: string | null
  }

  export type MonthlyRoutineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDate?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    weekAndDay?: WeekAndDayUpdateOneWithoutMonthlyRoutineNestedInput
    date?: DateUpdateOneWithoutMonthlyRoutineNestedInput
    routineControl?: RoutineControlUpdateOneWithoutMonthlyRoutinesNestedInput
  }

  export type MonthlyRoutineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDate?: BoolFieldUpdateOperationsInput | boolean
    weekAndDayId?: NullableStringFieldUpdateOperationsInput | string | null
    dateId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    routineControlId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlyRoutineCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDate: boolean
    weekAndDayId?: string | null
    dateId?: string | null
    content: string
    routineControlId?: string | null
  }

  export type MonthlyRoutineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDate?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MonthlyRoutineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDate?: BoolFieldUpdateOperationsInput | boolean
    weekAndDayId?: NullableStringFieldUpdateOperationsInput | string | null
    dateId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    routineControlId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeekAndDayCreateInput = {
    id?: string
    day: $Enums.Day
    week: number
    MonthlyRoutine?: MonthlyRoutineCreateNestedManyWithoutWeekAndDayInput
  }

  export type WeekAndDayUncheckedCreateInput = {
    id?: string
    day: $Enums.Day
    week: number
    MonthlyRoutine?: MonthlyRoutineUncheckedCreateNestedManyWithoutWeekAndDayInput
  }

  export type WeekAndDayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    week?: IntFieldUpdateOperationsInput | number
    MonthlyRoutine?: MonthlyRoutineUpdateManyWithoutWeekAndDayNestedInput
  }

  export type WeekAndDayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    week?: IntFieldUpdateOperationsInput | number
    MonthlyRoutine?: MonthlyRoutineUncheckedUpdateManyWithoutWeekAndDayNestedInput
  }

  export type WeekAndDayCreateManyInput = {
    id?: string
    day: $Enums.Day
    week: number
  }

  export type WeekAndDayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    week?: IntFieldUpdateOperationsInput | number
  }

  export type WeekAndDayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    week?: IntFieldUpdateOperationsInput | number
  }

  export type DateCreateInput = {
    id?: string
    date: number
    MonthlyRoutine?: MonthlyRoutineCreateNestedManyWithoutDateInput
  }

  export type DateUncheckedCreateInput = {
    id?: string
    date: number
    MonthlyRoutine?: MonthlyRoutineUncheckedCreateNestedManyWithoutDateInput
  }

  export type DateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
    MonthlyRoutine?: MonthlyRoutineUpdateManyWithoutDateNestedInput
  }

  export type DateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
    MonthlyRoutine?: MonthlyRoutineUncheckedUpdateManyWithoutDateNestedInput
  }

  export type DateCreateManyInput = {
    id?: string
    date: number
  }

  export type DateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
  }

  export type DateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type RoutineControlNullableRelationFilter = {
    is?: RoutineControlWhereInput | null
    isNot?: RoutineControlWhereInput | null
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type DailyRoutineListRelationFilter = {
    every?: DailyRoutineWhereInput
    some?: DailyRoutineWhereInput
    none?: DailyRoutineWhereInput
  }

  export type WeeklyRoutineListRelationFilter = {
    every?: WeeklyRoutineWhereInput
    some?: WeeklyRoutineWhereInput
    none?: WeeklyRoutineWhereInput
  }

  export type MonthlyRoutineListRelationFilter = {
    every?: MonthlyRoutineWhereInput
    some?: MonthlyRoutineWhereInput
    none?: MonthlyRoutineWhereInput
  }

  export type DailyRoutineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeeklyRoutineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonthlyRoutineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoutineControlCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RoutineControlMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RoutineControlMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DailyRoutineCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    routineControlId?: SortOrder
  }

  export type DailyRoutineMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    routineControlId?: SortOrder
  }

  export type DailyRoutineMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    routineControlId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DaysCountOrderByAggregateInput = {
    id?: SortOrder
    sun?: SortOrder
    mon?: SortOrder
    tue?: SortOrder
    wed?: SortOrder
    thu?: SortOrder
    fri?: SortOrder
    sat?: SortOrder
  }

  export type DaysMaxOrderByAggregateInput = {
    id?: SortOrder
    sun?: SortOrder
    mon?: SortOrder
    tue?: SortOrder
    wed?: SortOrder
    thu?: SortOrder
    fri?: SortOrder
    sat?: SortOrder
  }

  export type DaysMinOrderByAggregateInput = {
    id?: SortOrder
    sun?: SortOrder
    mon?: SortOrder
    tue?: SortOrder
    wed?: SortOrder
    thu?: SortOrder
    fri?: SortOrder
    sat?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DaysRelationFilter = {
    is?: DaysWhereInput
    isNot?: DaysWhereInput
  }

  export type WeeklyRoutineCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    daysId?: SortOrder
    routineControlId?: SortOrder
  }

  export type WeeklyRoutineMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    daysId?: SortOrder
    routineControlId?: SortOrder
  }

  export type WeeklyRoutineMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    daysId?: SortOrder
    routineControlId?: SortOrder
  }

  export type WeekAndDayNullableRelationFilter = {
    is?: WeekAndDayWhereInput | null
    isNot?: WeekAndDayWhereInput | null
  }

  export type DateNullableRelationFilter = {
    is?: DateWhereInput | null
    isNot?: DateWhereInput | null
  }

  export type MonthlyRoutineCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDate?: SortOrder
    weekAndDayId?: SortOrder
    dateId?: SortOrder
    content?: SortOrder
    routineControlId?: SortOrder
  }

  export type MonthlyRoutineMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDate?: SortOrder
    weekAndDayId?: SortOrder
    dateId?: SortOrder
    content?: SortOrder
    routineControlId?: SortOrder
  }

  export type MonthlyRoutineMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDate?: SortOrder
    weekAndDayId?: SortOrder
    dateId?: SortOrder
    content?: SortOrder
    routineControlId?: SortOrder
  }

  export type EnumDayFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[]
    notIn?: $Enums.Day[]
    not?: NestedEnumDayFilter<$PrismaModel> | $Enums.Day
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type WeekAndDayCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    week?: SortOrder
  }

  export type WeekAndDayAvgOrderByAggregateInput = {
    week?: SortOrder
  }

  export type WeekAndDayMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    week?: SortOrder
  }

  export type WeekAndDayMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    week?: SortOrder
  }

  export type WeekAndDaySumOrderByAggregateInput = {
    week?: SortOrder
  }

  export type EnumDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[]
    notIn?: $Enums.Day[]
    not?: NestedEnumDayWithAggregatesFilter<$PrismaModel> | $Enums.Day
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayFilter<$PrismaModel>
    _max?: NestedEnumDayFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type DateAvgOrderByAggregateInput = {
    date?: SortOrder
  }

  export type DateMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type DateMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type DateSumOrderByAggregateInput = {
    date?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type RoutineControlCreateNestedOneWithoutUserInput = {
    create?: XOR<RoutineControlCreateWithoutUserInput, RoutineControlUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoutineControlCreateOrConnectWithoutUserInput
    connect?: RoutineControlWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type RoutineControlUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<RoutineControlCreateWithoutUserInput, RoutineControlUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoutineControlCreateOrConnectWithoutUserInput
    connect?: RoutineControlWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type RoutineControlUpdateOneWithoutUserNestedInput = {
    create?: XOR<RoutineControlCreateWithoutUserInput, RoutineControlUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoutineControlCreateOrConnectWithoutUserInput
    upsert?: RoutineControlUpsertWithoutUserInput
    disconnect?: RoutineControlWhereInput | boolean
    delete?: RoutineControlWhereInput | boolean
    connect?: RoutineControlWhereUniqueInput
    update?: XOR<XOR<RoutineControlUpdateToOneWithWhereWithoutUserInput, RoutineControlUpdateWithoutUserInput>, RoutineControlUncheckedUpdateWithoutUserInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type RoutineControlUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<RoutineControlCreateWithoutUserInput, RoutineControlUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoutineControlCreateOrConnectWithoutUserInput
    upsert?: RoutineControlUpsertWithoutUserInput
    disconnect?: RoutineControlWhereInput | boolean
    delete?: RoutineControlWhereInput | boolean
    connect?: RoutineControlWhereUniqueInput
    update?: XOR<XOR<RoutineControlUpdateToOneWithWhereWithoutUserInput, RoutineControlUpdateWithoutUserInput>, RoutineControlUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutRoutineControlInput = {
    create?: XOR<UserCreateWithoutRoutineControlInput, UserUncheckedCreateWithoutRoutineControlInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutineControlInput
    connect?: UserWhereUniqueInput
  }

  export type DailyRoutineCreateNestedManyWithoutRoutineControlInput = {
    create?: XOR<DailyRoutineCreateWithoutRoutineControlInput, DailyRoutineUncheckedCreateWithoutRoutineControlInput> | DailyRoutineCreateWithoutRoutineControlInput[] | DailyRoutineUncheckedCreateWithoutRoutineControlInput[]
    connectOrCreate?: DailyRoutineCreateOrConnectWithoutRoutineControlInput | DailyRoutineCreateOrConnectWithoutRoutineControlInput[]
    createMany?: DailyRoutineCreateManyRoutineControlInputEnvelope
    connect?: DailyRoutineWhereUniqueInput | DailyRoutineWhereUniqueInput[]
  }

  export type WeeklyRoutineCreateNestedManyWithoutRoutineControlInput = {
    create?: XOR<WeeklyRoutineCreateWithoutRoutineControlInput, WeeklyRoutineUncheckedCreateWithoutRoutineControlInput> | WeeklyRoutineCreateWithoutRoutineControlInput[] | WeeklyRoutineUncheckedCreateWithoutRoutineControlInput[]
    connectOrCreate?: WeeklyRoutineCreateOrConnectWithoutRoutineControlInput | WeeklyRoutineCreateOrConnectWithoutRoutineControlInput[]
    createMany?: WeeklyRoutineCreateManyRoutineControlInputEnvelope
    connect?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
  }

  export type MonthlyRoutineCreateNestedManyWithoutRoutineControlInput = {
    create?: XOR<MonthlyRoutineCreateWithoutRoutineControlInput, MonthlyRoutineUncheckedCreateWithoutRoutineControlInput> | MonthlyRoutineCreateWithoutRoutineControlInput[] | MonthlyRoutineUncheckedCreateWithoutRoutineControlInput[]
    connectOrCreate?: MonthlyRoutineCreateOrConnectWithoutRoutineControlInput | MonthlyRoutineCreateOrConnectWithoutRoutineControlInput[]
    createMany?: MonthlyRoutineCreateManyRoutineControlInputEnvelope
    connect?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
  }

  export type DailyRoutineUncheckedCreateNestedManyWithoutRoutineControlInput = {
    create?: XOR<DailyRoutineCreateWithoutRoutineControlInput, DailyRoutineUncheckedCreateWithoutRoutineControlInput> | DailyRoutineCreateWithoutRoutineControlInput[] | DailyRoutineUncheckedCreateWithoutRoutineControlInput[]
    connectOrCreate?: DailyRoutineCreateOrConnectWithoutRoutineControlInput | DailyRoutineCreateOrConnectWithoutRoutineControlInput[]
    createMany?: DailyRoutineCreateManyRoutineControlInputEnvelope
    connect?: DailyRoutineWhereUniqueInput | DailyRoutineWhereUniqueInput[]
  }

  export type WeeklyRoutineUncheckedCreateNestedManyWithoutRoutineControlInput = {
    create?: XOR<WeeklyRoutineCreateWithoutRoutineControlInput, WeeklyRoutineUncheckedCreateWithoutRoutineControlInput> | WeeklyRoutineCreateWithoutRoutineControlInput[] | WeeklyRoutineUncheckedCreateWithoutRoutineControlInput[]
    connectOrCreate?: WeeklyRoutineCreateOrConnectWithoutRoutineControlInput | WeeklyRoutineCreateOrConnectWithoutRoutineControlInput[]
    createMany?: WeeklyRoutineCreateManyRoutineControlInputEnvelope
    connect?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
  }

  export type MonthlyRoutineUncheckedCreateNestedManyWithoutRoutineControlInput = {
    create?: XOR<MonthlyRoutineCreateWithoutRoutineControlInput, MonthlyRoutineUncheckedCreateWithoutRoutineControlInput> | MonthlyRoutineCreateWithoutRoutineControlInput[] | MonthlyRoutineUncheckedCreateWithoutRoutineControlInput[]
    connectOrCreate?: MonthlyRoutineCreateOrConnectWithoutRoutineControlInput | MonthlyRoutineCreateOrConnectWithoutRoutineControlInput[]
    createMany?: MonthlyRoutineCreateManyRoutineControlInputEnvelope
    connect?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRoutineControlNestedInput = {
    create?: XOR<UserCreateWithoutRoutineControlInput, UserUncheckedCreateWithoutRoutineControlInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutineControlInput
    upsert?: UserUpsertWithoutRoutineControlInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoutineControlInput, UserUpdateWithoutRoutineControlInput>, UserUncheckedUpdateWithoutRoutineControlInput>
  }

  export type DailyRoutineUpdateManyWithoutRoutineControlNestedInput = {
    create?: XOR<DailyRoutineCreateWithoutRoutineControlInput, DailyRoutineUncheckedCreateWithoutRoutineControlInput> | DailyRoutineCreateWithoutRoutineControlInput[] | DailyRoutineUncheckedCreateWithoutRoutineControlInput[]
    connectOrCreate?: DailyRoutineCreateOrConnectWithoutRoutineControlInput | DailyRoutineCreateOrConnectWithoutRoutineControlInput[]
    upsert?: DailyRoutineUpsertWithWhereUniqueWithoutRoutineControlInput | DailyRoutineUpsertWithWhereUniqueWithoutRoutineControlInput[]
    createMany?: DailyRoutineCreateManyRoutineControlInputEnvelope
    set?: DailyRoutineWhereUniqueInput | DailyRoutineWhereUniqueInput[]
    disconnect?: DailyRoutineWhereUniqueInput | DailyRoutineWhereUniqueInput[]
    delete?: DailyRoutineWhereUniqueInput | DailyRoutineWhereUniqueInput[]
    connect?: DailyRoutineWhereUniqueInput | DailyRoutineWhereUniqueInput[]
    update?: DailyRoutineUpdateWithWhereUniqueWithoutRoutineControlInput | DailyRoutineUpdateWithWhereUniqueWithoutRoutineControlInput[]
    updateMany?: DailyRoutineUpdateManyWithWhereWithoutRoutineControlInput | DailyRoutineUpdateManyWithWhereWithoutRoutineControlInput[]
    deleteMany?: DailyRoutineScalarWhereInput | DailyRoutineScalarWhereInput[]
  }

  export type WeeklyRoutineUpdateManyWithoutRoutineControlNestedInput = {
    create?: XOR<WeeklyRoutineCreateWithoutRoutineControlInput, WeeklyRoutineUncheckedCreateWithoutRoutineControlInput> | WeeklyRoutineCreateWithoutRoutineControlInput[] | WeeklyRoutineUncheckedCreateWithoutRoutineControlInput[]
    connectOrCreate?: WeeklyRoutineCreateOrConnectWithoutRoutineControlInput | WeeklyRoutineCreateOrConnectWithoutRoutineControlInput[]
    upsert?: WeeklyRoutineUpsertWithWhereUniqueWithoutRoutineControlInput | WeeklyRoutineUpsertWithWhereUniqueWithoutRoutineControlInput[]
    createMany?: WeeklyRoutineCreateManyRoutineControlInputEnvelope
    set?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
    disconnect?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
    delete?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
    connect?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
    update?: WeeklyRoutineUpdateWithWhereUniqueWithoutRoutineControlInput | WeeklyRoutineUpdateWithWhereUniqueWithoutRoutineControlInput[]
    updateMany?: WeeklyRoutineUpdateManyWithWhereWithoutRoutineControlInput | WeeklyRoutineUpdateManyWithWhereWithoutRoutineControlInput[]
    deleteMany?: WeeklyRoutineScalarWhereInput | WeeklyRoutineScalarWhereInput[]
  }

  export type MonthlyRoutineUpdateManyWithoutRoutineControlNestedInput = {
    create?: XOR<MonthlyRoutineCreateWithoutRoutineControlInput, MonthlyRoutineUncheckedCreateWithoutRoutineControlInput> | MonthlyRoutineCreateWithoutRoutineControlInput[] | MonthlyRoutineUncheckedCreateWithoutRoutineControlInput[]
    connectOrCreate?: MonthlyRoutineCreateOrConnectWithoutRoutineControlInput | MonthlyRoutineCreateOrConnectWithoutRoutineControlInput[]
    upsert?: MonthlyRoutineUpsertWithWhereUniqueWithoutRoutineControlInput | MonthlyRoutineUpsertWithWhereUniqueWithoutRoutineControlInput[]
    createMany?: MonthlyRoutineCreateManyRoutineControlInputEnvelope
    set?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    disconnect?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    delete?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    connect?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    update?: MonthlyRoutineUpdateWithWhereUniqueWithoutRoutineControlInput | MonthlyRoutineUpdateWithWhereUniqueWithoutRoutineControlInput[]
    updateMany?: MonthlyRoutineUpdateManyWithWhereWithoutRoutineControlInput | MonthlyRoutineUpdateManyWithWhereWithoutRoutineControlInput[]
    deleteMany?: MonthlyRoutineScalarWhereInput | MonthlyRoutineScalarWhereInput[]
  }

  export type DailyRoutineUncheckedUpdateManyWithoutRoutineControlNestedInput = {
    create?: XOR<DailyRoutineCreateWithoutRoutineControlInput, DailyRoutineUncheckedCreateWithoutRoutineControlInput> | DailyRoutineCreateWithoutRoutineControlInput[] | DailyRoutineUncheckedCreateWithoutRoutineControlInput[]
    connectOrCreate?: DailyRoutineCreateOrConnectWithoutRoutineControlInput | DailyRoutineCreateOrConnectWithoutRoutineControlInput[]
    upsert?: DailyRoutineUpsertWithWhereUniqueWithoutRoutineControlInput | DailyRoutineUpsertWithWhereUniqueWithoutRoutineControlInput[]
    createMany?: DailyRoutineCreateManyRoutineControlInputEnvelope
    set?: DailyRoutineWhereUniqueInput | DailyRoutineWhereUniqueInput[]
    disconnect?: DailyRoutineWhereUniqueInput | DailyRoutineWhereUniqueInput[]
    delete?: DailyRoutineWhereUniqueInput | DailyRoutineWhereUniqueInput[]
    connect?: DailyRoutineWhereUniqueInput | DailyRoutineWhereUniqueInput[]
    update?: DailyRoutineUpdateWithWhereUniqueWithoutRoutineControlInput | DailyRoutineUpdateWithWhereUniqueWithoutRoutineControlInput[]
    updateMany?: DailyRoutineUpdateManyWithWhereWithoutRoutineControlInput | DailyRoutineUpdateManyWithWhereWithoutRoutineControlInput[]
    deleteMany?: DailyRoutineScalarWhereInput | DailyRoutineScalarWhereInput[]
  }

  export type WeeklyRoutineUncheckedUpdateManyWithoutRoutineControlNestedInput = {
    create?: XOR<WeeklyRoutineCreateWithoutRoutineControlInput, WeeklyRoutineUncheckedCreateWithoutRoutineControlInput> | WeeklyRoutineCreateWithoutRoutineControlInput[] | WeeklyRoutineUncheckedCreateWithoutRoutineControlInput[]
    connectOrCreate?: WeeklyRoutineCreateOrConnectWithoutRoutineControlInput | WeeklyRoutineCreateOrConnectWithoutRoutineControlInput[]
    upsert?: WeeklyRoutineUpsertWithWhereUniqueWithoutRoutineControlInput | WeeklyRoutineUpsertWithWhereUniqueWithoutRoutineControlInput[]
    createMany?: WeeklyRoutineCreateManyRoutineControlInputEnvelope
    set?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
    disconnect?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
    delete?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
    connect?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
    update?: WeeklyRoutineUpdateWithWhereUniqueWithoutRoutineControlInput | WeeklyRoutineUpdateWithWhereUniqueWithoutRoutineControlInput[]
    updateMany?: WeeklyRoutineUpdateManyWithWhereWithoutRoutineControlInput | WeeklyRoutineUpdateManyWithWhereWithoutRoutineControlInput[]
    deleteMany?: WeeklyRoutineScalarWhereInput | WeeklyRoutineScalarWhereInput[]
  }

  export type MonthlyRoutineUncheckedUpdateManyWithoutRoutineControlNestedInput = {
    create?: XOR<MonthlyRoutineCreateWithoutRoutineControlInput, MonthlyRoutineUncheckedCreateWithoutRoutineControlInput> | MonthlyRoutineCreateWithoutRoutineControlInput[] | MonthlyRoutineUncheckedCreateWithoutRoutineControlInput[]
    connectOrCreate?: MonthlyRoutineCreateOrConnectWithoutRoutineControlInput | MonthlyRoutineCreateOrConnectWithoutRoutineControlInput[]
    upsert?: MonthlyRoutineUpsertWithWhereUniqueWithoutRoutineControlInput | MonthlyRoutineUpsertWithWhereUniqueWithoutRoutineControlInput[]
    createMany?: MonthlyRoutineCreateManyRoutineControlInputEnvelope
    set?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    disconnect?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    delete?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    connect?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    update?: MonthlyRoutineUpdateWithWhereUniqueWithoutRoutineControlInput | MonthlyRoutineUpdateWithWhereUniqueWithoutRoutineControlInput[]
    updateMany?: MonthlyRoutineUpdateManyWithWhereWithoutRoutineControlInput | MonthlyRoutineUpdateManyWithWhereWithoutRoutineControlInput[]
    deleteMany?: MonthlyRoutineScalarWhereInput | MonthlyRoutineScalarWhereInput[]
  }

  export type RoutineControlCreateNestedOneWithoutDailyRoutinesInput = {
    create?: XOR<RoutineControlCreateWithoutDailyRoutinesInput, RoutineControlUncheckedCreateWithoutDailyRoutinesInput>
    connectOrCreate?: RoutineControlCreateOrConnectWithoutDailyRoutinesInput
    connect?: RoutineControlWhereUniqueInput
  }

  export type RoutineControlUpdateOneWithoutDailyRoutinesNestedInput = {
    create?: XOR<RoutineControlCreateWithoutDailyRoutinesInput, RoutineControlUncheckedCreateWithoutDailyRoutinesInput>
    connectOrCreate?: RoutineControlCreateOrConnectWithoutDailyRoutinesInput
    upsert?: RoutineControlUpsertWithoutDailyRoutinesInput
    disconnect?: RoutineControlWhereInput | boolean
    delete?: RoutineControlWhereInput | boolean
    connect?: RoutineControlWhereUniqueInput
    update?: XOR<XOR<RoutineControlUpdateToOneWithWhereWithoutDailyRoutinesInput, RoutineControlUpdateWithoutDailyRoutinesInput>, RoutineControlUncheckedUpdateWithoutDailyRoutinesInput>
  }

  export type WeeklyRoutineCreateNestedManyWithoutDaysInput = {
    create?: XOR<WeeklyRoutineCreateWithoutDaysInput, WeeklyRoutineUncheckedCreateWithoutDaysInput> | WeeklyRoutineCreateWithoutDaysInput[] | WeeklyRoutineUncheckedCreateWithoutDaysInput[]
    connectOrCreate?: WeeklyRoutineCreateOrConnectWithoutDaysInput | WeeklyRoutineCreateOrConnectWithoutDaysInput[]
    createMany?: WeeklyRoutineCreateManyDaysInputEnvelope
    connect?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
  }

  export type WeeklyRoutineUncheckedCreateNestedManyWithoutDaysInput = {
    create?: XOR<WeeklyRoutineCreateWithoutDaysInput, WeeklyRoutineUncheckedCreateWithoutDaysInput> | WeeklyRoutineCreateWithoutDaysInput[] | WeeklyRoutineUncheckedCreateWithoutDaysInput[]
    connectOrCreate?: WeeklyRoutineCreateOrConnectWithoutDaysInput | WeeklyRoutineCreateOrConnectWithoutDaysInput[]
    createMany?: WeeklyRoutineCreateManyDaysInputEnvelope
    connect?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WeeklyRoutineUpdateManyWithoutDaysNestedInput = {
    create?: XOR<WeeklyRoutineCreateWithoutDaysInput, WeeklyRoutineUncheckedCreateWithoutDaysInput> | WeeklyRoutineCreateWithoutDaysInput[] | WeeklyRoutineUncheckedCreateWithoutDaysInput[]
    connectOrCreate?: WeeklyRoutineCreateOrConnectWithoutDaysInput | WeeklyRoutineCreateOrConnectWithoutDaysInput[]
    upsert?: WeeklyRoutineUpsertWithWhereUniqueWithoutDaysInput | WeeklyRoutineUpsertWithWhereUniqueWithoutDaysInput[]
    createMany?: WeeklyRoutineCreateManyDaysInputEnvelope
    set?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
    disconnect?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
    delete?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
    connect?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
    update?: WeeklyRoutineUpdateWithWhereUniqueWithoutDaysInput | WeeklyRoutineUpdateWithWhereUniqueWithoutDaysInput[]
    updateMany?: WeeklyRoutineUpdateManyWithWhereWithoutDaysInput | WeeklyRoutineUpdateManyWithWhereWithoutDaysInput[]
    deleteMany?: WeeklyRoutineScalarWhereInput | WeeklyRoutineScalarWhereInput[]
  }

  export type WeeklyRoutineUncheckedUpdateManyWithoutDaysNestedInput = {
    create?: XOR<WeeklyRoutineCreateWithoutDaysInput, WeeklyRoutineUncheckedCreateWithoutDaysInput> | WeeklyRoutineCreateWithoutDaysInput[] | WeeklyRoutineUncheckedCreateWithoutDaysInput[]
    connectOrCreate?: WeeklyRoutineCreateOrConnectWithoutDaysInput | WeeklyRoutineCreateOrConnectWithoutDaysInput[]
    upsert?: WeeklyRoutineUpsertWithWhereUniqueWithoutDaysInput | WeeklyRoutineUpsertWithWhereUniqueWithoutDaysInput[]
    createMany?: WeeklyRoutineCreateManyDaysInputEnvelope
    set?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
    disconnect?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
    delete?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
    connect?: WeeklyRoutineWhereUniqueInput | WeeklyRoutineWhereUniqueInput[]
    update?: WeeklyRoutineUpdateWithWhereUniqueWithoutDaysInput | WeeklyRoutineUpdateWithWhereUniqueWithoutDaysInput[]
    updateMany?: WeeklyRoutineUpdateManyWithWhereWithoutDaysInput | WeeklyRoutineUpdateManyWithWhereWithoutDaysInput[]
    deleteMany?: WeeklyRoutineScalarWhereInput | WeeklyRoutineScalarWhereInput[]
  }

  export type DaysCreateNestedOneWithoutWeeklyRoutineInput = {
    create?: XOR<DaysCreateWithoutWeeklyRoutineInput, DaysUncheckedCreateWithoutWeeklyRoutineInput>
    connectOrCreate?: DaysCreateOrConnectWithoutWeeklyRoutineInput
    connect?: DaysWhereUniqueInput
  }

  export type RoutineControlCreateNestedOneWithoutWeeklyRoutinesInput = {
    create?: XOR<RoutineControlCreateWithoutWeeklyRoutinesInput, RoutineControlUncheckedCreateWithoutWeeklyRoutinesInput>
    connectOrCreate?: RoutineControlCreateOrConnectWithoutWeeklyRoutinesInput
    connect?: RoutineControlWhereUniqueInput
  }

  export type DaysUpdateOneRequiredWithoutWeeklyRoutineNestedInput = {
    create?: XOR<DaysCreateWithoutWeeklyRoutineInput, DaysUncheckedCreateWithoutWeeklyRoutineInput>
    connectOrCreate?: DaysCreateOrConnectWithoutWeeklyRoutineInput
    upsert?: DaysUpsertWithoutWeeklyRoutineInput
    connect?: DaysWhereUniqueInput
    update?: XOR<XOR<DaysUpdateToOneWithWhereWithoutWeeklyRoutineInput, DaysUpdateWithoutWeeklyRoutineInput>, DaysUncheckedUpdateWithoutWeeklyRoutineInput>
  }

  export type RoutineControlUpdateOneWithoutWeeklyRoutinesNestedInput = {
    create?: XOR<RoutineControlCreateWithoutWeeklyRoutinesInput, RoutineControlUncheckedCreateWithoutWeeklyRoutinesInput>
    connectOrCreate?: RoutineControlCreateOrConnectWithoutWeeklyRoutinesInput
    upsert?: RoutineControlUpsertWithoutWeeklyRoutinesInput
    disconnect?: RoutineControlWhereInput | boolean
    delete?: RoutineControlWhereInput | boolean
    connect?: RoutineControlWhereUniqueInput
    update?: XOR<XOR<RoutineControlUpdateToOneWithWhereWithoutWeeklyRoutinesInput, RoutineControlUpdateWithoutWeeklyRoutinesInput>, RoutineControlUncheckedUpdateWithoutWeeklyRoutinesInput>
  }

  export type WeekAndDayCreateNestedOneWithoutMonthlyRoutineInput = {
    create?: XOR<WeekAndDayCreateWithoutMonthlyRoutineInput, WeekAndDayUncheckedCreateWithoutMonthlyRoutineInput>
    connectOrCreate?: WeekAndDayCreateOrConnectWithoutMonthlyRoutineInput
    connect?: WeekAndDayWhereUniqueInput
  }

  export type DateCreateNestedOneWithoutMonthlyRoutineInput = {
    create?: XOR<DateCreateWithoutMonthlyRoutineInput, DateUncheckedCreateWithoutMonthlyRoutineInput>
    connectOrCreate?: DateCreateOrConnectWithoutMonthlyRoutineInput
    connect?: DateWhereUniqueInput
  }

  export type RoutineControlCreateNestedOneWithoutMonthlyRoutinesInput = {
    create?: XOR<RoutineControlCreateWithoutMonthlyRoutinesInput, RoutineControlUncheckedCreateWithoutMonthlyRoutinesInput>
    connectOrCreate?: RoutineControlCreateOrConnectWithoutMonthlyRoutinesInput
    connect?: RoutineControlWhereUniqueInput
  }

  export type WeekAndDayUpdateOneWithoutMonthlyRoutineNestedInput = {
    create?: XOR<WeekAndDayCreateWithoutMonthlyRoutineInput, WeekAndDayUncheckedCreateWithoutMonthlyRoutineInput>
    connectOrCreate?: WeekAndDayCreateOrConnectWithoutMonthlyRoutineInput
    upsert?: WeekAndDayUpsertWithoutMonthlyRoutineInput
    disconnect?: WeekAndDayWhereInput | boolean
    delete?: WeekAndDayWhereInput | boolean
    connect?: WeekAndDayWhereUniqueInput
    update?: XOR<XOR<WeekAndDayUpdateToOneWithWhereWithoutMonthlyRoutineInput, WeekAndDayUpdateWithoutMonthlyRoutineInput>, WeekAndDayUncheckedUpdateWithoutMonthlyRoutineInput>
  }

  export type DateUpdateOneWithoutMonthlyRoutineNestedInput = {
    create?: XOR<DateCreateWithoutMonthlyRoutineInput, DateUncheckedCreateWithoutMonthlyRoutineInput>
    connectOrCreate?: DateCreateOrConnectWithoutMonthlyRoutineInput
    upsert?: DateUpsertWithoutMonthlyRoutineInput
    disconnect?: DateWhereInput | boolean
    delete?: DateWhereInput | boolean
    connect?: DateWhereUniqueInput
    update?: XOR<XOR<DateUpdateToOneWithWhereWithoutMonthlyRoutineInput, DateUpdateWithoutMonthlyRoutineInput>, DateUncheckedUpdateWithoutMonthlyRoutineInput>
  }

  export type RoutineControlUpdateOneWithoutMonthlyRoutinesNestedInput = {
    create?: XOR<RoutineControlCreateWithoutMonthlyRoutinesInput, RoutineControlUncheckedCreateWithoutMonthlyRoutinesInput>
    connectOrCreate?: RoutineControlCreateOrConnectWithoutMonthlyRoutinesInput
    upsert?: RoutineControlUpsertWithoutMonthlyRoutinesInput
    disconnect?: RoutineControlWhereInput | boolean
    delete?: RoutineControlWhereInput | boolean
    connect?: RoutineControlWhereUniqueInput
    update?: XOR<XOR<RoutineControlUpdateToOneWithWhereWithoutMonthlyRoutinesInput, RoutineControlUpdateWithoutMonthlyRoutinesInput>, RoutineControlUncheckedUpdateWithoutMonthlyRoutinesInput>
  }

  export type MonthlyRoutineCreateNestedManyWithoutWeekAndDayInput = {
    create?: XOR<MonthlyRoutineCreateWithoutWeekAndDayInput, MonthlyRoutineUncheckedCreateWithoutWeekAndDayInput> | MonthlyRoutineCreateWithoutWeekAndDayInput[] | MonthlyRoutineUncheckedCreateWithoutWeekAndDayInput[]
    connectOrCreate?: MonthlyRoutineCreateOrConnectWithoutWeekAndDayInput | MonthlyRoutineCreateOrConnectWithoutWeekAndDayInput[]
    createMany?: MonthlyRoutineCreateManyWeekAndDayInputEnvelope
    connect?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
  }

  export type MonthlyRoutineUncheckedCreateNestedManyWithoutWeekAndDayInput = {
    create?: XOR<MonthlyRoutineCreateWithoutWeekAndDayInput, MonthlyRoutineUncheckedCreateWithoutWeekAndDayInput> | MonthlyRoutineCreateWithoutWeekAndDayInput[] | MonthlyRoutineUncheckedCreateWithoutWeekAndDayInput[]
    connectOrCreate?: MonthlyRoutineCreateOrConnectWithoutWeekAndDayInput | MonthlyRoutineCreateOrConnectWithoutWeekAndDayInput[]
    createMany?: MonthlyRoutineCreateManyWeekAndDayInputEnvelope
    connect?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
  }

  export type EnumDayFieldUpdateOperationsInput = {
    set?: $Enums.Day
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MonthlyRoutineUpdateManyWithoutWeekAndDayNestedInput = {
    create?: XOR<MonthlyRoutineCreateWithoutWeekAndDayInput, MonthlyRoutineUncheckedCreateWithoutWeekAndDayInput> | MonthlyRoutineCreateWithoutWeekAndDayInput[] | MonthlyRoutineUncheckedCreateWithoutWeekAndDayInput[]
    connectOrCreate?: MonthlyRoutineCreateOrConnectWithoutWeekAndDayInput | MonthlyRoutineCreateOrConnectWithoutWeekAndDayInput[]
    upsert?: MonthlyRoutineUpsertWithWhereUniqueWithoutWeekAndDayInput | MonthlyRoutineUpsertWithWhereUniqueWithoutWeekAndDayInput[]
    createMany?: MonthlyRoutineCreateManyWeekAndDayInputEnvelope
    set?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    disconnect?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    delete?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    connect?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    update?: MonthlyRoutineUpdateWithWhereUniqueWithoutWeekAndDayInput | MonthlyRoutineUpdateWithWhereUniqueWithoutWeekAndDayInput[]
    updateMany?: MonthlyRoutineUpdateManyWithWhereWithoutWeekAndDayInput | MonthlyRoutineUpdateManyWithWhereWithoutWeekAndDayInput[]
    deleteMany?: MonthlyRoutineScalarWhereInput | MonthlyRoutineScalarWhereInput[]
  }

  export type MonthlyRoutineUncheckedUpdateManyWithoutWeekAndDayNestedInput = {
    create?: XOR<MonthlyRoutineCreateWithoutWeekAndDayInput, MonthlyRoutineUncheckedCreateWithoutWeekAndDayInput> | MonthlyRoutineCreateWithoutWeekAndDayInput[] | MonthlyRoutineUncheckedCreateWithoutWeekAndDayInput[]
    connectOrCreate?: MonthlyRoutineCreateOrConnectWithoutWeekAndDayInput | MonthlyRoutineCreateOrConnectWithoutWeekAndDayInput[]
    upsert?: MonthlyRoutineUpsertWithWhereUniqueWithoutWeekAndDayInput | MonthlyRoutineUpsertWithWhereUniqueWithoutWeekAndDayInput[]
    createMany?: MonthlyRoutineCreateManyWeekAndDayInputEnvelope
    set?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    disconnect?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    delete?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    connect?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    update?: MonthlyRoutineUpdateWithWhereUniqueWithoutWeekAndDayInput | MonthlyRoutineUpdateWithWhereUniqueWithoutWeekAndDayInput[]
    updateMany?: MonthlyRoutineUpdateManyWithWhereWithoutWeekAndDayInput | MonthlyRoutineUpdateManyWithWhereWithoutWeekAndDayInput[]
    deleteMany?: MonthlyRoutineScalarWhereInput | MonthlyRoutineScalarWhereInput[]
  }

  export type MonthlyRoutineCreateNestedManyWithoutDateInput = {
    create?: XOR<MonthlyRoutineCreateWithoutDateInput, MonthlyRoutineUncheckedCreateWithoutDateInput> | MonthlyRoutineCreateWithoutDateInput[] | MonthlyRoutineUncheckedCreateWithoutDateInput[]
    connectOrCreate?: MonthlyRoutineCreateOrConnectWithoutDateInput | MonthlyRoutineCreateOrConnectWithoutDateInput[]
    createMany?: MonthlyRoutineCreateManyDateInputEnvelope
    connect?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
  }

  export type MonthlyRoutineUncheckedCreateNestedManyWithoutDateInput = {
    create?: XOR<MonthlyRoutineCreateWithoutDateInput, MonthlyRoutineUncheckedCreateWithoutDateInput> | MonthlyRoutineCreateWithoutDateInput[] | MonthlyRoutineUncheckedCreateWithoutDateInput[]
    connectOrCreate?: MonthlyRoutineCreateOrConnectWithoutDateInput | MonthlyRoutineCreateOrConnectWithoutDateInput[]
    createMany?: MonthlyRoutineCreateManyDateInputEnvelope
    connect?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
  }

  export type MonthlyRoutineUpdateManyWithoutDateNestedInput = {
    create?: XOR<MonthlyRoutineCreateWithoutDateInput, MonthlyRoutineUncheckedCreateWithoutDateInput> | MonthlyRoutineCreateWithoutDateInput[] | MonthlyRoutineUncheckedCreateWithoutDateInput[]
    connectOrCreate?: MonthlyRoutineCreateOrConnectWithoutDateInput | MonthlyRoutineCreateOrConnectWithoutDateInput[]
    upsert?: MonthlyRoutineUpsertWithWhereUniqueWithoutDateInput | MonthlyRoutineUpsertWithWhereUniqueWithoutDateInput[]
    createMany?: MonthlyRoutineCreateManyDateInputEnvelope
    set?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    disconnect?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    delete?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    connect?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    update?: MonthlyRoutineUpdateWithWhereUniqueWithoutDateInput | MonthlyRoutineUpdateWithWhereUniqueWithoutDateInput[]
    updateMany?: MonthlyRoutineUpdateManyWithWhereWithoutDateInput | MonthlyRoutineUpdateManyWithWhereWithoutDateInput[]
    deleteMany?: MonthlyRoutineScalarWhereInput | MonthlyRoutineScalarWhereInput[]
  }

  export type MonthlyRoutineUncheckedUpdateManyWithoutDateNestedInput = {
    create?: XOR<MonthlyRoutineCreateWithoutDateInput, MonthlyRoutineUncheckedCreateWithoutDateInput> | MonthlyRoutineCreateWithoutDateInput[] | MonthlyRoutineUncheckedCreateWithoutDateInput[]
    connectOrCreate?: MonthlyRoutineCreateOrConnectWithoutDateInput | MonthlyRoutineCreateOrConnectWithoutDateInput[]
    upsert?: MonthlyRoutineUpsertWithWhereUniqueWithoutDateInput | MonthlyRoutineUpsertWithWhereUniqueWithoutDateInput[]
    createMany?: MonthlyRoutineCreateManyDateInputEnvelope
    set?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    disconnect?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    delete?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    connect?: MonthlyRoutineWhereUniqueInput | MonthlyRoutineWhereUniqueInput[]
    update?: MonthlyRoutineUpdateWithWhereUniqueWithoutDateInput | MonthlyRoutineUpdateWithWhereUniqueWithoutDateInput[]
    updateMany?: MonthlyRoutineUpdateManyWithWhereWithoutDateInput | MonthlyRoutineUpdateManyWithWhereWithoutDateInput[]
    deleteMany?: MonthlyRoutineScalarWhereInput | MonthlyRoutineScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDayFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[]
    notIn?: $Enums.Day[]
    not?: NestedEnumDayFilter<$PrismaModel> | $Enums.Day
  }

  export type NestedEnumDayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel>
    in?: $Enums.Day[]
    notIn?: $Enums.Day[]
    not?: NestedEnumDayWithAggregatesFilter<$PrismaModel> | $Enums.Day
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayFilter<$PrismaModel>
    _max?: NestedEnumDayFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    routineControl?: RoutineControlCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    routineControl?: RoutineControlUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    routineControl?: RoutineControlUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    routineControl?: RoutineControlUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    routineControl?: RoutineControlCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    routineControl?: RoutineControlUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    routineControl?: RoutineControlUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    routineControl?: RoutineControlUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoutineControlCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyRoutines?: DailyRoutineCreateNestedManyWithoutRoutineControlInput
    weeklyRoutines?: WeeklyRoutineCreateNestedManyWithoutRoutineControlInput
    monthlyRoutines?: MonthlyRoutineCreateNestedManyWithoutRoutineControlInput
  }

  export type RoutineControlUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyRoutines?: DailyRoutineUncheckedCreateNestedManyWithoutRoutineControlInput
    weeklyRoutines?: WeeklyRoutineUncheckedCreateNestedManyWithoutRoutineControlInput
    monthlyRoutines?: MonthlyRoutineUncheckedCreateNestedManyWithoutRoutineControlInput
  }

  export type RoutineControlCreateOrConnectWithoutUserInput = {
    where: RoutineControlWhereUniqueInput
    create: XOR<RoutineControlCreateWithoutUserInput, RoutineControlUncheckedCreateWithoutUserInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type RoutineControlUpsertWithoutUserInput = {
    update: XOR<RoutineControlUpdateWithoutUserInput, RoutineControlUncheckedUpdateWithoutUserInput>
    create: XOR<RoutineControlCreateWithoutUserInput, RoutineControlUncheckedCreateWithoutUserInput>
    where?: RoutineControlWhereInput
  }

  export type RoutineControlUpdateToOneWithWhereWithoutUserInput = {
    where?: RoutineControlWhereInput
    data: XOR<RoutineControlUpdateWithoutUserInput, RoutineControlUncheckedUpdateWithoutUserInput>
  }

  export type RoutineControlUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyRoutines?: DailyRoutineUpdateManyWithoutRoutineControlNestedInput
    weeklyRoutines?: WeeklyRoutineUpdateManyWithoutRoutineControlNestedInput
    monthlyRoutines?: MonthlyRoutineUpdateManyWithoutRoutineControlNestedInput
  }

  export type RoutineControlUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyRoutines?: DailyRoutineUncheckedUpdateManyWithoutRoutineControlNestedInput
    weeklyRoutines?: WeeklyRoutineUncheckedUpdateManyWithoutRoutineControlNestedInput
    monthlyRoutines?: MonthlyRoutineUncheckedUpdateManyWithoutRoutineControlNestedInput
  }

  export type UserCreateWithoutRoutineControlInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoutineControlInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoutineControlInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoutineControlInput, UserUncheckedCreateWithoutRoutineControlInput>
  }

  export type DailyRoutineCreateWithoutRoutineControlInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
  }

  export type DailyRoutineUncheckedCreateWithoutRoutineControlInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
  }

  export type DailyRoutineCreateOrConnectWithoutRoutineControlInput = {
    where: DailyRoutineWhereUniqueInput
    create: XOR<DailyRoutineCreateWithoutRoutineControlInput, DailyRoutineUncheckedCreateWithoutRoutineControlInput>
  }

  export type DailyRoutineCreateManyRoutineControlInputEnvelope = {
    data: DailyRoutineCreateManyRoutineControlInput | DailyRoutineCreateManyRoutineControlInput[]
    skipDuplicates?: boolean
  }

  export type WeeklyRoutineCreateWithoutRoutineControlInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    days: DaysCreateNestedOneWithoutWeeklyRoutineInput
  }

  export type WeeklyRoutineUncheckedCreateWithoutRoutineControlInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    daysId: string
  }

  export type WeeklyRoutineCreateOrConnectWithoutRoutineControlInput = {
    where: WeeklyRoutineWhereUniqueInput
    create: XOR<WeeklyRoutineCreateWithoutRoutineControlInput, WeeklyRoutineUncheckedCreateWithoutRoutineControlInput>
  }

  export type WeeklyRoutineCreateManyRoutineControlInputEnvelope = {
    data: WeeklyRoutineCreateManyRoutineControlInput | WeeklyRoutineCreateManyRoutineControlInput[]
    skipDuplicates?: boolean
  }

  export type MonthlyRoutineCreateWithoutRoutineControlInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDate: boolean
    content: string
    weekAndDay?: WeekAndDayCreateNestedOneWithoutMonthlyRoutineInput
    date?: DateCreateNestedOneWithoutMonthlyRoutineInput
  }

  export type MonthlyRoutineUncheckedCreateWithoutRoutineControlInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDate: boolean
    weekAndDayId?: string | null
    dateId?: string | null
    content: string
  }

  export type MonthlyRoutineCreateOrConnectWithoutRoutineControlInput = {
    where: MonthlyRoutineWhereUniqueInput
    create: XOR<MonthlyRoutineCreateWithoutRoutineControlInput, MonthlyRoutineUncheckedCreateWithoutRoutineControlInput>
  }

  export type MonthlyRoutineCreateManyRoutineControlInputEnvelope = {
    data: MonthlyRoutineCreateManyRoutineControlInput | MonthlyRoutineCreateManyRoutineControlInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRoutineControlInput = {
    update: XOR<UserUpdateWithoutRoutineControlInput, UserUncheckedUpdateWithoutRoutineControlInput>
    create: XOR<UserCreateWithoutRoutineControlInput, UserUncheckedCreateWithoutRoutineControlInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoutineControlInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoutineControlInput, UserUncheckedUpdateWithoutRoutineControlInput>
  }

  export type UserUpdateWithoutRoutineControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoutineControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DailyRoutineUpsertWithWhereUniqueWithoutRoutineControlInput = {
    where: DailyRoutineWhereUniqueInput
    update: XOR<DailyRoutineUpdateWithoutRoutineControlInput, DailyRoutineUncheckedUpdateWithoutRoutineControlInput>
    create: XOR<DailyRoutineCreateWithoutRoutineControlInput, DailyRoutineUncheckedCreateWithoutRoutineControlInput>
  }

  export type DailyRoutineUpdateWithWhereUniqueWithoutRoutineControlInput = {
    where: DailyRoutineWhereUniqueInput
    data: XOR<DailyRoutineUpdateWithoutRoutineControlInput, DailyRoutineUncheckedUpdateWithoutRoutineControlInput>
  }

  export type DailyRoutineUpdateManyWithWhereWithoutRoutineControlInput = {
    where: DailyRoutineScalarWhereInput
    data: XOR<DailyRoutineUpdateManyMutationInput, DailyRoutineUncheckedUpdateManyWithoutRoutineControlInput>
  }

  export type DailyRoutineScalarWhereInput = {
    AND?: DailyRoutineScalarWhereInput | DailyRoutineScalarWhereInput[]
    OR?: DailyRoutineScalarWhereInput[]
    NOT?: DailyRoutineScalarWhereInput | DailyRoutineScalarWhereInput[]
    id?: StringFilter<"DailyRoutine"> | string
    createdAt?: DateTimeFilter<"DailyRoutine"> | Date | string
    updatedAt?: DateTimeFilter<"DailyRoutine"> | Date | string
    content?: StringFilter<"DailyRoutine"> | string
    routineControlId?: StringNullableFilter<"DailyRoutine"> | string | null
  }

  export type WeeklyRoutineUpsertWithWhereUniqueWithoutRoutineControlInput = {
    where: WeeklyRoutineWhereUniqueInput
    update: XOR<WeeklyRoutineUpdateWithoutRoutineControlInput, WeeklyRoutineUncheckedUpdateWithoutRoutineControlInput>
    create: XOR<WeeklyRoutineCreateWithoutRoutineControlInput, WeeklyRoutineUncheckedCreateWithoutRoutineControlInput>
  }

  export type WeeklyRoutineUpdateWithWhereUniqueWithoutRoutineControlInput = {
    where: WeeklyRoutineWhereUniqueInput
    data: XOR<WeeklyRoutineUpdateWithoutRoutineControlInput, WeeklyRoutineUncheckedUpdateWithoutRoutineControlInput>
  }

  export type WeeklyRoutineUpdateManyWithWhereWithoutRoutineControlInput = {
    where: WeeklyRoutineScalarWhereInput
    data: XOR<WeeklyRoutineUpdateManyMutationInput, WeeklyRoutineUncheckedUpdateManyWithoutRoutineControlInput>
  }

  export type WeeklyRoutineScalarWhereInput = {
    AND?: WeeklyRoutineScalarWhereInput | WeeklyRoutineScalarWhereInput[]
    OR?: WeeklyRoutineScalarWhereInput[]
    NOT?: WeeklyRoutineScalarWhereInput | WeeklyRoutineScalarWhereInput[]
    id?: StringFilter<"WeeklyRoutine"> | string
    createdAt?: DateTimeFilter<"WeeklyRoutine"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklyRoutine"> | Date | string
    content?: StringFilter<"WeeklyRoutine"> | string
    daysId?: StringFilter<"WeeklyRoutine"> | string
    routineControlId?: StringNullableFilter<"WeeklyRoutine"> | string | null
  }

  export type MonthlyRoutineUpsertWithWhereUniqueWithoutRoutineControlInput = {
    where: MonthlyRoutineWhereUniqueInput
    update: XOR<MonthlyRoutineUpdateWithoutRoutineControlInput, MonthlyRoutineUncheckedUpdateWithoutRoutineControlInput>
    create: XOR<MonthlyRoutineCreateWithoutRoutineControlInput, MonthlyRoutineUncheckedCreateWithoutRoutineControlInput>
  }

  export type MonthlyRoutineUpdateWithWhereUniqueWithoutRoutineControlInput = {
    where: MonthlyRoutineWhereUniqueInput
    data: XOR<MonthlyRoutineUpdateWithoutRoutineControlInput, MonthlyRoutineUncheckedUpdateWithoutRoutineControlInput>
  }

  export type MonthlyRoutineUpdateManyWithWhereWithoutRoutineControlInput = {
    where: MonthlyRoutineScalarWhereInput
    data: XOR<MonthlyRoutineUpdateManyMutationInput, MonthlyRoutineUncheckedUpdateManyWithoutRoutineControlInput>
  }

  export type MonthlyRoutineScalarWhereInput = {
    AND?: MonthlyRoutineScalarWhereInput | MonthlyRoutineScalarWhereInput[]
    OR?: MonthlyRoutineScalarWhereInput[]
    NOT?: MonthlyRoutineScalarWhereInput | MonthlyRoutineScalarWhereInput[]
    id?: StringFilter<"MonthlyRoutine"> | string
    createdAt?: DateTimeFilter<"MonthlyRoutine"> | Date | string
    updatedAt?: DateTimeFilter<"MonthlyRoutine"> | Date | string
    isDate?: BoolFilter<"MonthlyRoutine"> | boolean
    weekAndDayId?: StringNullableFilter<"MonthlyRoutine"> | string | null
    dateId?: StringNullableFilter<"MonthlyRoutine"> | string | null
    content?: StringFilter<"MonthlyRoutine"> | string
    routineControlId?: StringNullableFilter<"MonthlyRoutine"> | string | null
  }

  export type RoutineControlCreateWithoutDailyRoutinesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutineControlInput
    weeklyRoutines?: WeeklyRoutineCreateNestedManyWithoutRoutineControlInput
    monthlyRoutines?: MonthlyRoutineCreateNestedManyWithoutRoutineControlInput
  }

  export type RoutineControlUncheckedCreateWithoutDailyRoutinesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    weeklyRoutines?: WeeklyRoutineUncheckedCreateNestedManyWithoutRoutineControlInput
    monthlyRoutines?: MonthlyRoutineUncheckedCreateNestedManyWithoutRoutineControlInput
  }

  export type RoutineControlCreateOrConnectWithoutDailyRoutinesInput = {
    where: RoutineControlWhereUniqueInput
    create: XOR<RoutineControlCreateWithoutDailyRoutinesInput, RoutineControlUncheckedCreateWithoutDailyRoutinesInput>
  }

  export type RoutineControlUpsertWithoutDailyRoutinesInput = {
    update: XOR<RoutineControlUpdateWithoutDailyRoutinesInput, RoutineControlUncheckedUpdateWithoutDailyRoutinesInput>
    create: XOR<RoutineControlCreateWithoutDailyRoutinesInput, RoutineControlUncheckedCreateWithoutDailyRoutinesInput>
    where?: RoutineControlWhereInput
  }

  export type RoutineControlUpdateToOneWithWhereWithoutDailyRoutinesInput = {
    where?: RoutineControlWhereInput
    data: XOR<RoutineControlUpdateWithoutDailyRoutinesInput, RoutineControlUncheckedUpdateWithoutDailyRoutinesInput>
  }

  export type RoutineControlUpdateWithoutDailyRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutineControlNestedInput
    weeklyRoutines?: WeeklyRoutineUpdateManyWithoutRoutineControlNestedInput
    monthlyRoutines?: MonthlyRoutineUpdateManyWithoutRoutineControlNestedInput
  }

  export type RoutineControlUncheckedUpdateWithoutDailyRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    weeklyRoutines?: WeeklyRoutineUncheckedUpdateManyWithoutRoutineControlNestedInput
    monthlyRoutines?: MonthlyRoutineUncheckedUpdateManyWithoutRoutineControlNestedInput
  }

  export type WeeklyRoutineCreateWithoutDaysInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    routineControl?: RoutineControlCreateNestedOneWithoutWeeklyRoutinesInput
  }

  export type WeeklyRoutineUncheckedCreateWithoutDaysInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    routineControlId?: string | null
  }

  export type WeeklyRoutineCreateOrConnectWithoutDaysInput = {
    where: WeeklyRoutineWhereUniqueInput
    create: XOR<WeeklyRoutineCreateWithoutDaysInput, WeeklyRoutineUncheckedCreateWithoutDaysInput>
  }

  export type WeeklyRoutineCreateManyDaysInputEnvelope = {
    data: WeeklyRoutineCreateManyDaysInput | WeeklyRoutineCreateManyDaysInput[]
    skipDuplicates?: boolean
  }

  export type WeeklyRoutineUpsertWithWhereUniqueWithoutDaysInput = {
    where: WeeklyRoutineWhereUniqueInput
    update: XOR<WeeklyRoutineUpdateWithoutDaysInput, WeeklyRoutineUncheckedUpdateWithoutDaysInput>
    create: XOR<WeeklyRoutineCreateWithoutDaysInput, WeeklyRoutineUncheckedCreateWithoutDaysInput>
  }

  export type WeeklyRoutineUpdateWithWhereUniqueWithoutDaysInput = {
    where: WeeklyRoutineWhereUniqueInput
    data: XOR<WeeklyRoutineUpdateWithoutDaysInput, WeeklyRoutineUncheckedUpdateWithoutDaysInput>
  }

  export type WeeklyRoutineUpdateManyWithWhereWithoutDaysInput = {
    where: WeeklyRoutineScalarWhereInput
    data: XOR<WeeklyRoutineUpdateManyMutationInput, WeeklyRoutineUncheckedUpdateManyWithoutDaysInput>
  }

  export type DaysCreateWithoutWeeklyRoutineInput = {
    id?: string
    sun?: boolean
    mon?: boolean
    tue?: boolean
    wed?: boolean
    thu?: boolean
    fri?: boolean
    sat?: boolean
  }

  export type DaysUncheckedCreateWithoutWeeklyRoutineInput = {
    id?: string
    sun?: boolean
    mon?: boolean
    tue?: boolean
    wed?: boolean
    thu?: boolean
    fri?: boolean
    sat?: boolean
  }

  export type DaysCreateOrConnectWithoutWeeklyRoutineInput = {
    where: DaysWhereUniqueInput
    create: XOR<DaysCreateWithoutWeeklyRoutineInput, DaysUncheckedCreateWithoutWeeklyRoutineInput>
  }

  export type RoutineControlCreateWithoutWeeklyRoutinesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutineControlInput
    dailyRoutines?: DailyRoutineCreateNestedManyWithoutRoutineControlInput
    monthlyRoutines?: MonthlyRoutineCreateNestedManyWithoutRoutineControlInput
  }

  export type RoutineControlUncheckedCreateWithoutWeeklyRoutinesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    dailyRoutines?: DailyRoutineUncheckedCreateNestedManyWithoutRoutineControlInput
    monthlyRoutines?: MonthlyRoutineUncheckedCreateNestedManyWithoutRoutineControlInput
  }

  export type RoutineControlCreateOrConnectWithoutWeeklyRoutinesInput = {
    where: RoutineControlWhereUniqueInput
    create: XOR<RoutineControlCreateWithoutWeeklyRoutinesInput, RoutineControlUncheckedCreateWithoutWeeklyRoutinesInput>
  }

  export type DaysUpsertWithoutWeeklyRoutineInput = {
    update: XOR<DaysUpdateWithoutWeeklyRoutineInput, DaysUncheckedUpdateWithoutWeeklyRoutineInput>
    create: XOR<DaysCreateWithoutWeeklyRoutineInput, DaysUncheckedCreateWithoutWeeklyRoutineInput>
    where?: DaysWhereInput
  }

  export type DaysUpdateToOneWithWhereWithoutWeeklyRoutineInput = {
    where?: DaysWhereInput
    data: XOR<DaysUpdateWithoutWeeklyRoutineInput, DaysUncheckedUpdateWithoutWeeklyRoutineInput>
  }

  export type DaysUpdateWithoutWeeklyRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    sun?: BoolFieldUpdateOperationsInput | boolean
    mon?: BoolFieldUpdateOperationsInput | boolean
    tue?: BoolFieldUpdateOperationsInput | boolean
    wed?: BoolFieldUpdateOperationsInput | boolean
    thu?: BoolFieldUpdateOperationsInput | boolean
    fri?: BoolFieldUpdateOperationsInput | boolean
    sat?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DaysUncheckedUpdateWithoutWeeklyRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    sun?: BoolFieldUpdateOperationsInput | boolean
    mon?: BoolFieldUpdateOperationsInput | boolean
    tue?: BoolFieldUpdateOperationsInput | boolean
    wed?: BoolFieldUpdateOperationsInput | boolean
    thu?: BoolFieldUpdateOperationsInput | boolean
    fri?: BoolFieldUpdateOperationsInput | boolean
    sat?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoutineControlUpsertWithoutWeeklyRoutinesInput = {
    update: XOR<RoutineControlUpdateWithoutWeeklyRoutinesInput, RoutineControlUncheckedUpdateWithoutWeeklyRoutinesInput>
    create: XOR<RoutineControlCreateWithoutWeeklyRoutinesInput, RoutineControlUncheckedCreateWithoutWeeklyRoutinesInput>
    where?: RoutineControlWhereInput
  }

  export type RoutineControlUpdateToOneWithWhereWithoutWeeklyRoutinesInput = {
    where?: RoutineControlWhereInput
    data: XOR<RoutineControlUpdateWithoutWeeklyRoutinesInput, RoutineControlUncheckedUpdateWithoutWeeklyRoutinesInput>
  }

  export type RoutineControlUpdateWithoutWeeklyRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutineControlNestedInput
    dailyRoutines?: DailyRoutineUpdateManyWithoutRoutineControlNestedInput
    monthlyRoutines?: MonthlyRoutineUpdateManyWithoutRoutineControlNestedInput
  }

  export type RoutineControlUncheckedUpdateWithoutWeeklyRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    dailyRoutines?: DailyRoutineUncheckedUpdateManyWithoutRoutineControlNestedInput
    monthlyRoutines?: MonthlyRoutineUncheckedUpdateManyWithoutRoutineControlNestedInput
  }

  export type WeekAndDayCreateWithoutMonthlyRoutineInput = {
    id?: string
    day: $Enums.Day
    week: number
  }

  export type WeekAndDayUncheckedCreateWithoutMonthlyRoutineInput = {
    id?: string
    day: $Enums.Day
    week: number
  }

  export type WeekAndDayCreateOrConnectWithoutMonthlyRoutineInput = {
    where: WeekAndDayWhereUniqueInput
    create: XOR<WeekAndDayCreateWithoutMonthlyRoutineInput, WeekAndDayUncheckedCreateWithoutMonthlyRoutineInput>
  }

  export type DateCreateWithoutMonthlyRoutineInput = {
    id?: string
    date: number
  }

  export type DateUncheckedCreateWithoutMonthlyRoutineInput = {
    id?: string
    date: number
  }

  export type DateCreateOrConnectWithoutMonthlyRoutineInput = {
    where: DateWhereUniqueInput
    create: XOR<DateCreateWithoutMonthlyRoutineInput, DateUncheckedCreateWithoutMonthlyRoutineInput>
  }

  export type RoutineControlCreateWithoutMonthlyRoutinesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutineControlInput
    dailyRoutines?: DailyRoutineCreateNestedManyWithoutRoutineControlInput
    weeklyRoutines?: WeeklyRoutineCreateNestedManyWithoutRoutineControlInput
  }

  export type RoutineControlUncheckedCreateWithoutMonthlyRoutinesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    dailyRoutines?: DailyRoutineUncheckedCreateNestedManyWithoutRoutineControlInput
    weeklyRoutines?: WeeklyRoutineUncheckedCreateNestedManyWithoutRoutineControlInput
  }

  export type RoutineControlCreateOrConnectWithoutMonthlyRoutinesInput = {
    where: RoutineControlWhereUniqueInput
    create: XOR<RoutineControlCreateWithoutMonthlyRoutinesInput, RoutineControlUncheckedCreateWithoutMonthlyRoutinesInput>
  }

  export type WeekAndDayUpsertWithoutMonthlyRoutineInput = {
    update: XOR<WeekAndDayUpdateWithoutMonthlyRoutineInput, WeekAndDayUncheckedUpdateWithoutMonthlyRoutineInput>
    create: XOR<WeekAndDayCreateWithoutMonthlyRoutineInput, WeekAndDayUncheckedCreateWithoutMonthlyRoutineInput>
    where?: WeekAndDayWhereInput
  }

  export type WeekAndDayUpdateToOneWithWhereWithoutMonthlyRoutineInput = {
    where?: WeekAndDayWhereInput
    data: XOR<WeekAndDayUpdateWithoutMonthlyRoutineInput, WeekAndDayUncheckedUpdateWithoutMonthlyRoutineInput>
  }

  export type WeekAndDayUpdateWithoutMonthlyRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    week?: IntFieldUpdateOperationsInput | number
  }

  export type WeekAndDayUncheckedUpdateWithoutMonthlyRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayFieldUpdateOperationsInput | $Enums.Day
    week?: IntFieldUpdateOperationsInput | number
  }

  export type DateUpsertWithoutMonthlyRoutineInput = {
    update: XOR<DateUpdateWithoutMonthlyRoutineInput, DateUncheckedUpdateWithoutMonthlyRoutineInput>
    create: XOR<DateCreateWithoutMonthlyRoutineInput, DateUncheckedCreateWithoutMonthlyRoutineInput>
    where?: DateWhereInput
  }

  export type DateUpdateToOneWithWhereWithoutMonthlyRoutineInput = {
    where?: DateWhereInput
    data: XOR<DateUpdateWithoutMonthlyRoutineInput, DateUncheckedUpdateWithoutMonthlyRoutineInput>
  }

  export type DateUpdateWithoutMonthlyRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
  }

  export type DateUncheckedUpdateWithoutMonthlyRoutineInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineControlUpsertWithoutMonthlyRoutinesInput = {
    update: XOR<RoutineControlUpdateWithoutMonthlyRoutinesInput, RoutineControlUncheckedUpdateWithoutMonthlyRoutinesInput>
    create: XOR<RoutineControlCreateWithoutMonthlyRoutinesInput, RoutineControlUncheckedCreateWithoutMonthlyRoutinesInput>
    where?: RoutineControlWhereInput
  }

  export type RoutineControlUpdateToOneWithWhereWithoutMonthlyRoutinesInput = {
    where?: RoutineControlWhereInput
    data: XOR<RoutineControlUpdateWithoutMonthlyRoutinesInput, RoutineControlUncheckedUpdateWithoutMonthlyRoutinesInput>
  }

  export type RoutineControlUpdateWithoutMonthlyRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutineControlNestedInput
    dailyRoutines?: DailyRoutineUpdateManyWithoutRoutineControlNestedInput
    weeklyRoutines?: WeeklyRoutineUpdateManyWithoutRoutineControlNestedInput
  }

  export type RoutineControlUncheckedUpdateWithoutMonthlyRoutinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    dailyRoutines?: DailyRoutineUncheckedUpdateManyWithoutRoutineControlNestedInput
    weeklyRoutines?: WeeklyRoutineUncheckedUpdateManyWithoutRoutineControlNestedInput
  }

  export type MonthlyRoutineCreateWithoutWeekAndDayInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDate: boolean
    content: string
    date?: DateCreateNestedOneWithoutMonthlyRoutineInput
    routineControl?: RoutineControlCreateNestedOneWithoutMonthlyRoutinesInput
  }

  export type MonthlyRoutineUncheckedCreateWithoutWeekAndDayInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDate: boolean
    dateId?: string | null
    content: string
    routineControlId?: string | null
  }

  export type MonthlyRoutineCreateOrConnectWithoutWeekAndDayInput = {
    where: MonthlyRoutineWhereUniqueInput
    create: XOR<MonthlyRoutineCreateWithoutWeekAndDayInput, MonthlyRoutineUncheckedCreateWithoutWeekAndDayInput>
  }

  export type MonthlyRoutineCreateManyWeekAndDayInputEnvelope = {
    data: MonthlyRoutineCreateManyWeekAndDayInput | MonthlyRoutineCreateManyWeekAndDayInput[]
    skipDuplicates?: boolean
  }

  export type MonthlyRoutineUpsertWithWhereUniqueWithoutWeekAndDayInput = {
    where: MonthlyRoutineWhereUniqueInput
    update: XOR<MonthlyRoutineUpdateWithoutWeekAndDayInput, MonthlyRoutineUncheckedUpdateWithoutWeekAndDayInput>
    create: XOR<MonthlyRoutineCreateWithoutWeekAndDayInput, MonthlyRoutineUncheckedCreateWithoutWeekAndDayInput>
  }

  export type MonthlyRoutineUpdateWithWhereUniqueWithoutWeekAndDayInput = {
    where: MonthlyRoutineWhereUniqueInput
    data: XOR<MonthlyRoutineUpdateWithoutWeekAndDayInput, MonthlyRoutineUncheckedUpdateWithoutWeekAndDayInput>
  }

  export type MonthlyRoutineUpdateManyWithWhereWithoutWeekAndDayInput = {
    where: MonthlyRoutineScalarWhereInput
    data: XOR<MonthlyRoutineUpdateManyMutationInput, MonthlyRoutineUncheckedUpdateManyWithoutWeekAndDayInput>
  }

  export type MonthlyRoutineCreateWithoutDateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDate: boolean
    content: string
    weekAndDay?: WeekAndDayCreateNestedOneWithoutMonthlyRoutineInput
    routineControl?: RoutineControlCreateNestedOneWithoutMonthlyRoutinesInput
  }

  export type MonthlyRoutineUncheckedCreateWithoutDateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDate: boolean
    weekAndDayId?: string | null
    content: string
    routineControlId?: string | null
  }

  export type MonthlyRoutineCreateOrConnectWithoutDateInput = {
    where: MonthlyRoutineWhereUniqueInput
    create: XOR<MonthlyRoutineCreateWithoutDateInput, MonthlyRoutineUncheckedCreateWithoutDateInput>
  }

  export type MonthlyRoutineCreateManyDateInputEnvelope = {
    data: MonthlyRoutineCreateManyDateInput | MonthlyRoutineCreateManyDateInput[]
    skipDuplicates?: boolean
  }

  export type MonthlyRoutineUpsertWithWhereUniqueWithoutDateInput = {
    where: MonthlyRoutineWhereUniqueInput
    update: XOR<MonthlyRoutineUpdateWithoutDateInput, MonthlyRoutineUncheckedUpdateWithoutDateInput>
    create: XOR<MonthlyRoutineCreateWithoutDateInput, MonthlyRoutineUncheckedCreateWithoutDateInput>
  }

  export type MonthlyRoutineUpdateWithWhereUniqueWithoutDateInput = {
    where: MonthlyRoutineWhereUniqueInput
    data: XOR<MonthlyRoutineUpdateWithoutDateInput, MonthlyRoutineUncheckedUpdateWithoutDateInput>
  }

  export type MonthlyRoutineUpdateManyWithWhereWithoutDateInput = {
    where: MonthlyRoutineScalarWhereInput
    data: XOR<MonthlyRoutineUpdateManyMutationInput, MonthlyRoutineUncheckedUpdateManyWithoutDateInput>
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRoutineCreateManyRoutineControlInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
  }

  export type WeeklyRoutineCreateManyRoutineControlInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    daysId: string
  }

  export type MonthlyRoutineCreateManyRoutineControlInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDate: boolean
    weekAndDayId?: string | null
    dateId?: string | null
    content: string
  }

  export type DailyRoutineUpdateWithoutRoutineControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type DailyRoutineUncheckedUpdateWithoutRoutineControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type DailyRoutineUncheckedUpdateManyWithoutRoutineControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type WeeklyRoutineUpdateWithoutRoutineControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    days?: DaysUpdateOneRequiredWithoutWeeklyRoutineNestedInput
  }

  export type WeeklyRoutineUncheckedUpdateWithoutRoutineControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    daysId?: StringFieldUpdateOperationsInput | string
  }

  export type WeeklyRoutineUncheckedUpdateManyWithoutRoutineControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    daysId?: StringFieldUpdateOperationsInput | string
  }

  export type MonthlyRoutineUpdateWithoutRoutineControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDate?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    weekAndDay?: WeekAndDayUpdateOneWithoutMonthlyRoutineNestedInput
    date?: DateUpdateOneWithoutMonthlyRoutineNestedInput
  }

  export type MonthlyRoutineUncheckedUpdateWithoutRoutineControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDate?: BoolFieldUpdateOperationsInput | boolean
    weekAndDayId?: NullableStringFieldUpdateOperationsInput | string | null
    dateId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MonthlyRoutineUncheckedUpdateManyWithoutRoutineControlInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDate?: BoolFieldUpdateOperationsInput | boolean
    weekAndDayId?: NullableStringFieldUpdateOperationsInput | string | null
    dateId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
  }

  export type WeeklyRoutineCreateManyDaysInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    content: string
    routineControlId?: string | null
  }

  export type WeeklyRoutineUpdateWithoutDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    routineControl?: RoutineControlUpdateOneWithoutWeeklyRoutinesNestedInput
  }

  export type WeeklyRoutineUncheckedUpdateWithoutDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    routineControlId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeeklyRoutineUncheckedUpdateManyWithoutDaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    routineControlId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlyRoutineCreateManyWeekAndDayInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDate: boolean
    dateId?: string | null
    content: string
    routineControlId?: string | null
  }

  export type MonthlyRoutineUpdateWithoutWeekAndDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDate?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    date?: DateUpdateOneWithoutMonthlyRoutineNestedInput
    routineControl?: RoutineControlUpdateOneWithoutMonthlyRoutinesNestedInput
  }

  export type MonthlyRoutineUncheckedUpdateWithoutWeekAndDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDate?: BoolFieldUpdateOperationsInput | boolean
    dateId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    routineControlId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlyRoutineUncheckedUpdateManyWithoutWeekAndDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDate?: BoolFieldUpdateOperationsInput | boolean
    dateId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    routineControlId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlyRoutineCreateManyDateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDate: boolean
    weekAndDayId?: string | null
    content: string
    routineControlId?: string | null
  }

  export type MonthlyRoutineUpdateWithoutDateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDate?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    weekAndDay?: WeekAndDayUpdateOneWithoutMonthlyRoutineNestedInput
    routineControl?: RoutineControlUpdateOneWithoutMonthlyRoutinesNestedInput
  }

  export type MonthlyRoutineUncheckedUpdateWithoutDateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDate?: BoolFieldUpdateOperationsInput | boolean
    weekAndDayId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    routineControlId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MonthlyRoutineUncheckedUpdateManyWithoutDateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDate?: BoolFieldUpdateOperationsInput | boolean
    weekAndDayId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    routineControlId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoutineControlCountOutputTypeDefaultArgs instead
     */
    export type RoutineControlCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoutineControlCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DaysCountOutputTypeDefaultArgs instead
     */
    export type DaysCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DaysCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WeekAndDayCountOutputTypeDefaultArgs instead
     */
    export type WeekAndDayCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WeekAndDayCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DateCountOutputTypeDefaultArgs instead
     */
    export type DateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DateCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoutineControlDefaultArgs instead
     */
    export type RoutineControlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoutineControlDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailyRoutineDefaultArgs instead
     */
    export type DailyRoutineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailyRoutineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DaysDefaultArgs instead
     */
    export type DaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DaysDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WeeklyRoutineDefaultArgs instead
     */
    export type WeeklyRoutineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WeeklyRoutineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonthlyRoutineDefaultArgs instead
     */
    export type MonthlyRoutineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MonthlyRoutineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WeekAndDayDefaultArgs instead
     */
    export type WeekAndDayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WeekAndDayDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DateDefaultArgs instead
     */
    export type DateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DateDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}