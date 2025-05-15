
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model tb_menu
 * 
 */
export type tb_menu = $Result.DefaultSelection<Prisma.$tb_menuPayload>
/**
 * Model tb_user
 * 
 */
export type tb_user = $Result.DefaultSelection<Prisma.$tb_userPayload>
/**
 * Model tb_keranjang
 * 
 */
export type tb_keranjang = $Result.DefaultSelection<Prisma.$tb_keranjangPayload>
/**
 * Model tb_meja
 * 
 */
export type tb_meja = $Result.DefaultSelection<Prisma.$tb_mejaPayload>
/**
 * Model tb_pemesanan
 * 
 */
export type tb_pemesanan = $Result.DefaultSelection<Prisma.$tb_pemesananPayload>
/**
 * Model detail_pemesanan
 * 
 */
export type detail_pemesanan = $Result.DefaultSelection<Prisma.$detail_pemesananPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const kategori: {
  MAKANAN: 'MAKANAN',
  MINUMAN: 'MINUMAN'
};

export type kategori = (typeof kategori)[keyof typeof kategori]


export const ketersediaan: {
  READY: 'READY',
  SOLDOUT: 'SOLDOUT'
};

export type ketersediaan = (typeof ketersediaan)[keyof typeof ketersediaan]


export const role: {
  ADMIN: 'ADMIN',
  KASIR: 'KASIR',
  PELANGGAN: 'PELANGGAN'
};

export type role = (typeof role)[keyof typeof role]


export const metode_pembayaran: {
  TUNAI: 'TUNAI',
  ePayment: 'ePayment'
};

export type metode_pembayaran = (typeof metode_pembayaran)[keyof typeof metode_pembayaran]


export const status: {
  TRUE: 'TRUE',
  FALSE: 'FALSE'
};

export type status = (typeof status)[keyof typeof status]


export const status_pemesanan: {
  MENUNGGUPEMBAYARAN: 'MENUNGGUPEMBAYARAN',
  DIPROSES: 'DIPROSES',
  SELESAI: 'SELESAI',
  DIBATALKAN: 'DIBATALKAN'
};

export type status_pemesanan = (typeof status_pemesanan)[keyof typeof status_pemesanan]

}

export type kategori = $Enums.kategori

export const kategori: typeof $Enums.kategori

export type ketersediaan = $Enums.ketersediaan

export const ketersediaan: typeof $Enums.ketersediaan

export type role = $Enums.role

export const role: typeof $Enums.role

export type metode_pembayaran = $Enums.metode_pembayaran

export const metode_pembayaran: typeof $Enums.metode_pembayaran

export type status = $Enums.status

export const status: typeof $Enums.status

export type status_pemesanan = $Enums.status_pemesanan

export const status_pemesanan: typeof $Enums.status_pemesanan

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tb_menus
 * const tb_menus = await prisma.tb_menu.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Tb_menus
   * const tb_menus = await prisma.tb_menu.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tb_menu`: Exposes CRUD operations for the **tb_menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_menus
    * const tb_menus = await prisma.tb_menu.findMany()
    * ```
    */
  get tb_menu(): Prisma.tb_menuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_user`: Exposes CRUD operations for the **tb_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_users
    * const tb_users = await prisma.tb_user.findMany()
    * ```
    */
  get tb_user(): Prisma.tb_userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_keranjang`: Exposes CRUD operations for the **tb_keranjang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_keranjangs
    * const tb_keranjangs = await prisma.tb_keranjang.findMany()
    * ```
    */
  get tb_keranjang(): Prisma.tb_keranjangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_meja`: Exposes CRUD operations for the **tb_meja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_mejas
    * const tb_mejas = await prisma.tb_meja.findMany()
    * ```
    */
  get tb_meja(): Prisma.tb_mejaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_pemesanan`: Exposes CRUD operations for the **tb_pemesanan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_pemesanans
    * const tb_pemesanans = await prisma.tb_pemesanan.findMany()
    * ```
    */
  get tb_pemesanan(): Prisma.tb_pemesananDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detail_pemesanan`: Exposes CRUD operations for the **detail_pemesanan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detail_pemesanans
    * const detail_pemesanans = await prisma.detail_pemesanan.findMany()
    * ```
    */
  get detail_pemesanan(): Prisma.detail_pemesananDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    tb_menu: 'tb_menu',
    tb_user: 'tb_user',
    tb_keranjang: 'tb_keranjang',
    tb_meja: 'tb_meja',
    tb_pemesanan: 'tb_pemesanan',
    detail_pemesanan: 'detail_pemesanan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tb_menu" | "tb_user" | "tb_keranjang" | "tb_meja" | "tb_pemesanan" | "detail_pemesanan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tb_menu: {
        payload: Prisma.$tb_menuPayload<ExtArgs>
        fields: Prisma.tb_menuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_menuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_menuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_menuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_menuPayload>
          }
          findFirst: {
            args: Prisma.tb_menuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_menuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_menuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_menuPayload>
          }
          findMany: {
            args: Prisma.tb_menuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_menuPayload>[]
          }
          create: {
            args: Prisma.tb_menuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_menuPayload>
          }
          createMany: {
            args: Prisma.tb_menuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_menuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_menuPayload>
          }
          update: {
            args: Prisma.tb_menuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_menuPayload>
          }
          deleteMany: {
            args: Prisma.tb_menuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_menuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_menuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_menuPayload>
          }
          aggregate: {
            args: Prisma.Tb_menuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_menu>
          }
          groupBy: {
            args: Prisma.tb_menuGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_menuGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_menuCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_menuCountAggregateOutputType> | number
          }
        }
      }
      tb_user: {
        payload: Prisma.$tb_userPayload<ExtArgs>
        fields: Prisma.tb_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload>
          }
          findFirst: {
            args: Prisma.tb_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload>
          }
          findMany: {
            args: Prisma.tb_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload>[]
          }
          create: {
            args: Prisma.tb_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload>
          }
          createMany: {
            args: Prisma.tb_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload>
          }
          update: {
            args: Prisma.tb_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload>
          }
          deleteMany: {
            args: Prisma.tb_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_userPayload>
          }
          aggregate: {
            args: Prisma.Tb_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_user>
          }
          groupBy: {
            args: Prisma.tb_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_userCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_userCountAggregateOutputType> | number
          }
        }
      }
      tb_keranjang: {
        payload: Prisma.$tb_keranjangPayload<ExtArgs>
        fields: Prisma.tb_keranjangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_keranjangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_keranjangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_keranjangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_keranjangPayload>
          }
          findFirst: {
            args: Prisma.tb_keranjangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_keranjangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_keranjangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_keranjangPayload>
          }
          findMany: {
            args: Prisma.tb_keranjangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_keranjangPayload>[]
          }
          create: {
            args: Prisma.tb_keranjangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_keranjangPayload>
          }
          createMany: {
            args: Prisma.tb_keranjangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_keranjangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_keranjangPayload>
          }
          update: {
            args: Prisma.tb_keranjangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_keranjangPayload>
          }
          deleteMany: {
            args: Prisma.tb_keranjangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_keranjangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_keranjangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_keranjangPayload>
          }
          aggregate: {
            args: Prisma.Tb_keranjangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_keranjang>
          }
          groupBy: {
            args: Prisma.tb_keranjangGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_keranjangGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_keranjangCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_keranjangCountAggregateOutputType> | number
          }
        }
      }
      tb_meja: {
        payload: Prisma.$tb_mejaPayload<ExtArgs>
        fields: Prisma.tb_mejaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_mejaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mejaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_mejaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mejaPayload>
          }
          findFirst: {
            args: Prisma.tb_mejaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mejaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_mejaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mejaPayload>
          }
          findMany: {
            args: Prisma.tb_mejaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mejaPayload>[]
          }
          create: {
            args: Prisma.tb_mejaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mejaPayload>
          }
          createMany: {
            args: Prisma.tb_mejaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_mejaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mejaPayload>
          }
          update: {
            args: Prisma.tb_mejaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mejaPayload>
          }
          deleteMany: {
            args: Prisma.tb_mejaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_mejaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_mejaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mejaPayload>
          }
          aggregate: {
            args: Prisma.Tb_mejaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_meja>
          }
          groupBy: {
            args: Prisma.tb_mejaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_mejaGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_mejaCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_mejaCountAggregateOutputType> | number
          }
        }
      }
      tb_pemesanan: {
        payload: Prisma.$tb_pemesananPayload<ExtArgs>
        fields: Prisma.tb_pemesananFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_pemesananFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pemesananPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_pemesananFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pemesananPayload>
          }
          findFirst: {
            args: Prisma.tb_pemesananFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pemesananPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_pemesananFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pemesananPayload>
          }
          findMany: {
            args: Prisma.tb_pemesananFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pemesananPayload>[]
          }
          create: {
            args: Prisma.tb_pemesananCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pemesananPayload>
          }
          createMany: {
            args: Prisma.tb_pemesananCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_pemesananDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pemesananPayload>
          }
          update: {
            args: Prisma.tb_pemesananUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pemesananPayload>
          }
          deleteMany: {
            args: Prisma.tb_pemesananDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_pemesananUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_pemesananUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pemesananPayload>
          }
          aggregate: {
            args: Prisma.Tb_pemesananAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_pemesanan>
          }
          groupBy: {
            args: Prisma.tb_pemesananGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_pemesananGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_pemesananCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_pemesananCountAggregateOutputType> | number
          }
        }
      }
      detail_pemesanan: {
        payload: Prisma.$detail_pemesananPayload<ExtArgs>
        fields: Prisma.detail_pemesananFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detail_pemesananFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_pemesananPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detail_pemesananFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_pemesananPayload>
          }
          findFirst: {
            args: Prisma.detail_pemesananFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_pemesananPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detail_pemesananFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_pemesananPayload>
          }
          findMany: {
            args: Prisma.detail_pemesananFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_pemesananPayload>[]
          }
          create: {
            args: Prisma.detail_pemesananCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_pemesananPayload>
          }
          createMany: {
            args: Prisma.detail_pemesananCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.detail_pemesananDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_pemesananPayload>
          }
          update: {
            args: Prisma.detail_pemesananUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_pemesananPayload>
          }
          deleteMany: {
            args: Prisma.detail_pemesananDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detail_pemesananUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.detail_pemesananUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_pemesananPayload>
          }
          aggregate: {
            args: Prisma.Detail_pemesananAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetail_pemesanan>
          }
          groupBy: {
            args: Prisma.detail_pemesananGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detail_pemesananGroupByOutputType>[]
          }
          count: {
            args: Prisma.detail_pemesananCountArgs<ExtArgs>
            result: $Utils.Optional<Detail_pemesananCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tb_menu?: tb_menuOmit
    tb_user?: tb_userOmit
    tb_keranjang?: tb_keranjangOmit
    tb_meja?: tb_mejaOmit
    tb_pemesanan?: tb_pemesananOmit
    detail_pemesanan?: detail_pemesananOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type Tb_menuCountOutputType
   */

  export type Tb_menuCountOutputType = {
    keranjang: number
  }

  export type Tb_menuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keranjang?: boolean | Tb_menuCountOutputTypeCountKeranjangArgs
  }

  // Custom InputTypes
  /**
   * Tb_menuCountOutputType without action
   */
  export type Tb_menuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tb_menuCountOutputType
     */
    select?: Tb_menuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tb_menuCountOutputType without action
   */
  export type Tb_menuCountOutputTypeCountKeranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_keranjangWhereInput
  }


  /**
   * Count Type Tb_userCountOutputType
   */

  export type Tb_userCountOutputType = {
    keranjang: number
    pemesanan: number
  }

  export type Tb_userCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keranjang?: boolean | Tb_userCountOutputTypeCountKeranjangArgs
    pemesanan?: boolean | Tb_userCountOutputTypeCountPemesananArgs
  }

  // Custom InputTypes
  /**
   * Tb_userCountOutputType without action
   */
  export type Tb_userCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tb_userCountOutputType
     */
    select?: Tb_userCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tb_userCountOutputType without action
   */
  export type Tb_userCountOutputTypeCountKeranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_keranjangWhereInput
  }

  /**
   * Tb_userCountOutputType without action
   */
  export type Tb_userCountOutputTypeCountPemesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_pemesananWhereInput
  }


  /**
   * Count Type Tb_keranjangCountOutputType
   */

  export type Tb_keranjangCountOutputType = {
    keranjang: number
  }

  export type Tb_keranjangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keranjang?: boolean | Tb_keranjangCountOutputTypeCountKeranjangArgs
  }

  // Custom InputTypes
  /**
   * Tb_keranjangCountOutputType without action
   */
  export type Tb_keranjangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tb_keranjangCountOutputType
     */
    select?: Tb_keranjangCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tb_keranjangCountOutputType without action
   */
  export type Tb_keranjangCountOutputTypeCountKeranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_pemesananWhereInput
  }


  /**
   * Count Type Tb_mejaCountOutputType
   */

  export type Tb_mejaCountOutputType = {
    meja: number
  }

  export type Tb_mejaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meja?: boolean | Tb_mejaCountOutputTypeCountMejaArgs
  }

  // Custom InputTypes
  /**
   * Tb_mejaCountOutputType without action
   */
  export type Tb_mejaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tb_mejaCountOutputType
     */
    select?: Tb_mejaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tb_mejaCountOutputType without action
   */
  export type Tb_mejaCountOutputTypeCountMejaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_pemesananWhereInput
  }


  /**
   * Count Type Tb_pemesananCountOutputType
   */

  export type Tb_pemesananCountOutputType = {
    pemesanan: number
  }

  export type Tb_pemesananCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pemesanan?: boolean | Tb_pemesananCountOutputTypeCountPemesananArgs
  }

  // Custom InputTypes
  /**
   * Tb_pemesananCountOutputType without action
   */
  export type Tb_pemesananCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tb_pemesananCountOutputType
     */
    select?: Tb_pemesananCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tb_pemesananCountOutputType without action
   */
  export type Tb_pemesananCountOutputTypeCountPemesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_pemesananWhereInput
  }


  /**
   * Models
   */

  /**
   * Model tb_menu
   */

  export type AggregateTb_menu = {
    _count: Tb_menuCountAggregateOutputType | null
    _avg: Tb_menuAvgAggregateOutputType | null
    _sum: Tb_menuSumAggregateOutputType | null
    _min: Tb_menuMinAggregateOutputType | null
    _max: Tb_menuMaxAggregateOutputType | null
  }

  export type Tb_menuAvgAggregateOutputType = {
    id: number | null
    harga: number | null
  }

  export type Tb_menuSumAggregateOutputType = {
    id: number | null
    harga: number | null
  }

  export type Tb_menuMinAggregateOutputType = {
    id: number | null
    nama: string | null
    deskripsi: string | null
    harga: number | null
    kategori: $Enums.kategori | null
    gambar_menu: string | null
    ketersediaan: $Enums.ketersediaan | null
  }

  export type Tb_menuMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    deskripsi: string | null
    harga: number | null
    kategori: $Enums.kategori | null
    gambar_menu: string | null
    ketersediaan: $Enums.ketersediaan | null
  }

  export type Tb_menuCountAggregateOutputType = {
    id: number
    nama: number
    deskripsi: number
    harga: number
    kategori: number
    gambar_menu: number
    ketersediaan: number
    _all: number
  }


  export type Tb_menuAvgAggregateInputType = {
    id?: true
    harga?: true
  }

  export type Tb_menuSumAggregateInputType = {
    id?: true
    harga?: true
  }

  export type Tb_menuMinAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    harga?: true
    kategori?: true
    gambar_menu?: true
    ketersediaan?: true
  }

  export type Tb_menuMaxAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    harga?: true
    kategori?: true
    gambar_menu?: true
    ketersediaan?: true
  }

  export type Tb_menuCountAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    harga?: true
    kategori?: true
    gambar_menu?: true
    ketersediaan?: true
    _all?: true
  }

  export type Tb_menuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_menu to aggregate.
     */
    where?: tb_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_menus to fetch.
     */
    orderBy?: tb_menuOrderByWithRelationInput | tb_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_menus
    **/
    _count?: true | Tb_menuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_menuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_menuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_menuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_menuMaxAggregateInputType
  }

  export type GetTb_menuAggregateType<T extends Tb_menuAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_menu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_menu[P]>
      : GetScalarType<T[P], AggregateTb_menu[P]>
  }




  export type tb_menuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_menuWhereInput
    orderBy?: tb_menuOrderByWithAggregationInput | tb_menuOrderByWithAggregationInput[]
    by: Tb_menuScalarFieldEnum[] | Tb_menuScalarFieldEnum
    having?: tb_menuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_menuCountAggregateInputType | true
    _avg?: Tb_menuAvgAggregateInputType
    _sum?: Tb_menuSumAggregateInputType
    _min?: Tb_menuMinAggregateInputType
    _max?: Tb_menuMaxAggregateInputType
  }

  export type Tb_menuGroupByOutputType = {
    id: number
    nama: string
    deskripsi: string
    harga: number
    kategori: $Enums.kategori
    gambar_menu: string
    ketersediaan: $Enums.ketersediaan
    _count: Tb_menuCountAggregateOutputType | null
    _avg: Tb_menuAvgAggregateOutputType | null
    _sum: Tb_menuSumAggregateOutputType | null
    _min: Tb_menuMinAggregateOutputType | null
    _max: Tb_menuMaxAggregateOutputType | null
  }

  type GetTb_menuGroupByPayload<T extends tb_menuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_menuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_menuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_menuGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_menuGroupByOutputType[P]>
        }
      >
    >


  export type tb_menuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    harga?: boolean
    kategori?: boolean
    gambar_menu?: boolean
    ketersediaan?: boolean
    keranjang?: boolean | tb_menu$keranjangArgs<ExtArgs>
    _count?: boolean | Tb_menuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_menu"]>



  export type tb_menuSelectScalar = {
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    harga?: boolean
    kategori?: boolean
    gambar_menu?: boolean
    ketersediaan?: boolean
  }

  export type tb_menuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "deskripsi" | "harga" | "kategori" | "gambar_menu" | "ketersediaan", ExtArgs["result"]["tb_menu"]>
  export type tb_menuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keranjang?: boolean | tb_menu$keranjangArgs<ExtArgs>
    _count?: boolean | Tb_menuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tb_menuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_menu"
    objects: {
      keranjang: Prisma.$tb_keranjangPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      deskripsi: string
      harga: number
      kategori: $Enums.kategori
      gambar_menu: string
      ketersediaan: $Enums.ketersediaan
    }, ExtArgs["result"]["tb_menu"]>
    composites: {}
  }

  type tb_menuGetPayload<S extends boolean | null | undefined | tb_menuDefaultArgs> = $Result.GetResult<Prisma.$tb_menuPayload, S>

  type tb_menuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_menuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_menuCountAggregateInputType | true
    }

  export interface tb_menuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_menu'], meta: { name: 'tb_menu' } }
    /**
     * Find zero or one Tb_menu that matches the filter.
     * @param {tb_menuFindUniqueArgs} args - Arguments to find a Tb_menu
     * @example
     * // Get one Tb_menu
     * const tb_menu = await prisma.tb_menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_menuFindUniqueArgs>(args: SelectSubset<T, tb_menuFindUniqueArgs<ExtArgs>>): Prisma__tb_menuClient<$Result.GetResult<Prisma.$tb_menuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_menuFindUniqueOrThrowArgs} args - Arguments to find a Tb_menu
     * @example
     * // Get one Tb_menu
     * const tb_menu = await prisma.tb_menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_menuFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_menuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_menuClient<$Result.GetResult<Prisma.$tb_menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_menuFindFirstArgs} args - Arguments to find a Tb_menu
     * @example
     * // Get one Tb_menu
     * const tb_menu = await prisma.tb_menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_menuFindFirstArgs>(args?: SelectSubset<T, tb_menuFindFirstArgs<ExtArgs>>): Prisma__tb_menuClient<$Result.GetResult<Prisma.$tb_menuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_menuFindFirstOrThrowArgs} args - Arguments to find a Tb_menu
     * @example
     * // Get one Tb_menu
     * const tb_menu = await prisma.tb_menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_menuFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_menuFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_menuClient<$Result.GetResult<Prisma.$tb_menuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_menuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_menus
     * const tb_menus = await prisma.tb_menu.findMany()
     * 
     * // Get first 10 Tb_menus
     * const tb_menus = await prisma.tb_menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_menuWithIdOnly = await prisma.tb_menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_menuFindManyArgs>(args?: SelectSubset<T, tb_menuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_menu.
     * @param {tb_menuCreateArgs} args - Arguments to create a Tb_menu.
     * @example
     * // Create one Tb_menu
     * const Tb_menu = await prisma.tb_menu.create({
     *   data: {
     *     // ... data to create a Tb_menu
     *   }
     * })
     * 
     */
    create<T extends tb_menuCreateArgs>(args: SelectSubset<T, tb_menuCreateArgs<ExtArgs>>): Prisma__tb_menuClient<$Result.GetResult<Prisma.$tb_menuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_menus.
     * @param {tb_menuCreateManyArgs} args - Arguments to create many Tb_menus.
     * @example
     * // Create many Tb_menus
     * const tb_menu = await prisma.tb_menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_menuCreateManyArgs>(args?: SelectSubset<T, tb_menuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_menu.
     * @param {tb_menuDeleteArgs} args - Arguments to delete one Tb_menu.
     * @example
     * // Delete one Tb_menu
     * const Tb_menu = await prisma.tb_menu.delete({
     *   where: {
     *     // ... filter to delete one Tb_menu
     *   }
     * })
     * 
     */
    delete<T extends tb_menuDeleteArgs>(args: SelectSubset<T, tb_menuDeleteArgs<ExtArgs>>): Prisma__tb_menuClient<$Result.GetResult<Prisma.$tb_menuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_menu.
     * @param {tb_menuUpdateArgs} args - Arguments to update one Tb_menu.
     * @example
     * // Update one Tb_menu
     * const tb_menu = await prisma.tb_menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_menuUpdateArgs>(args: SelectSubset<T, tb_menuUpdateArgs<ExtArgs>>): Prisma__tb_menuClient<$Result.GetResult<Prisma.$tb_menuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_menus.
     * @param {tb_menuDeleteManyArgs} args - Arguments to filter Tb_menus to delete.
     * @example
     * // Delete a few Tb_menus
     * const { count } = await prisma.tb_menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_menuDeleteManyArgs>(args?: SelectSubset<T, tb_menuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_menus
     * const tb_menu = await prisma.tb_menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_menuUpdateManyArgs>(args: SelectSubset<T, tb_menuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_menu.
     * @param {tb_menuUpsertArgs} args - Arguments to update or create a Tb_menu.
     * @example
     * // Update or create a Tb_menu
     * const tb_menu = await prisma.tb_menu.upsert({
     *   create: {
     *     // ... data to create a Tb_menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_menu we want to update
     *   }
     * })
     */
    upsert<T extends tb_menuUpsertArgs>(args: SelectSubset<T, tb_menuUpsertArgs<ExtArgs>>): Prisma__tb_menuClient<$Result.GetResult<Prisma.$tb_menuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_menuCountArgs} args - Arguments to filter Tb_menus to count.
     * @example
     * // Count the number of Tb_menus
     * const count = await prisma.tb_menu.count({
     *   where: {
     *     // ... the filter for the Tb_menus we want to count
     *   }
     * })
    **/
    count<T extends tb_menuCountArgs>(
      args?: Subset<T, tb_menuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_menuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_menuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_menuAggregateArgs>(args: Subset<T, Tb_menuAggregateArgs>): Prisma.PrismaPromise<GetTb_menuAggregateType<T>>

    /**
     * Group by Tb_menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_menuGroupByArgs} args - Group by arguments.
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
      T extends tb_menuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_menuGroupByArgs['orderBy'] }
        : { orderBy?: tb_menuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_menuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_menuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_menu model
   */
  readonly fields: tb_menuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_menuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    keranjang<T extends tb_menu$keranjangArgs<ExtArgs> = {}>(args?: Subset<T, tb_menu$keranjangArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_keranjangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_menu model
   */
  interface tb_menuFieldRefs {
    readonly id: FieldRef<"tb_menu", 'Int'>
    readonly nama: FieldRef<"tb_menu", 'String'>
    readonly deskripsi: FieldRef<"tb_menu", 'String'>
    readonly harga: FieldRef<"tb_menu", 'Int'>
    readonly kategori: FieldRef<"tb_menu", 'kategori'>
    readonly gambar_menu: FieldRef<"tb_menu", 'String'>
    readonly ketersediaan: FieldRef<"tb_menu", 'ketersediaan'>
  }
    

  // Custom InputTypes
  /**
   * tb_menu findUnique
   */
  export type tb_menuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_menu
     */
    select?: tb_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_menu
     */
    omit?: tb_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_menuInclude<ExtArgs> | null
    /**
     * Filter, which tb_menu to fetch.
     */
    where: tb_menuWhereUniqueInput
  }

  /**
   * tb_menu findUniqueOrThrow
   */
  export type tb_menuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_menu
     */
    select?: tb_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_menu
     */
    omit?: tb_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_menuInclude<ExtArgs> | null
    /**
     * Filter, which tb_menu to fetch.
     */
    where: tb_menuWhereUniqueInput
  }

  /**
   * tb_menu findFirst
   */
  export type tb_menuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_menu
     */
    select?: tb_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_menu
     */
    omit?: tb_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_menuInclude<ExtArgs> | null
    /**
     * Filter, which tb_menu to fetch.
     */
    where?: tb_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_menus to fetch.
     */
    orderBy?: tb_menuOrderByWithRelationInput | tb_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_menus.
     */
    cursor?: tb_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_menus.
     */
    distinct?: Tb_menuScalarFieldEnum | Tb_menuScalarFieldEnum[]
  }

  /**
   * tb_menu findFirstOrThrow
   */
  export type tb_menuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_menu
     */
    select?: tb_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_menu
     */
    omit?: tb_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_menuInclude<ExtArgs> | null
    /**
     * Filter, which tb_menu to fetch.
     */
    where?: tb_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_menus to fetch.
     */
    orderBy?: tb_menuOrderByWithRelationInput | tb_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_menus.
     */
    cursor?: tb_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_menus.
     */
    distinct?: Tb_menuScalarFieldEnum | Tb_menuScalarFieldEnum[]
  }

  /**
   * tb_menu findMany
   */
  export type tb_menuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_menu
     */
    select?: tb_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_menu
     */
    omit?: tb_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_menuInclude<ExtArgs> | null
    /**
     * Filter, which tb_menus to fetch.
     */
    where?: tb_menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_menus to fetch.
     */
    orderBy?: tb_menuOrderByWithRelationInput | tb_menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_menus.
     */
    cursor?: tb_menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_menus.
     */
    skip?: number
    distinct?: Tb_menuScalarFieldEnum | Tb_menuScalarFieldEnum[]
  }

  /**
   * tb_menu create
   */
  export type tb_menuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_menu
     */
    select?: tb_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_menu
     */
    omit?: tb_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_menuInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_menu.
     */
    data: XOR<tb_menuCreateInput, tb_menuUncheckedCreateInput>
  }

  /**
   * tb_menu createMany
   */
  export type tb_menuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_menus.
     */
    data: tb_menuCreateManyInput | tb_menuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_menu update
   */
  export type tb_menuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_menu
     */
    select?: tb_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_menu
     */
    omit?: tb_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_menuInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_menu.
     */
    data: XOR<tb_menuUpdateInput, tb_menuUncheckedUpdateInput>
    /**
     * Choose, which tb_menu to update.
     */
    where: tb_menuWhereUniqueInput
  }

  /**
   * tb_menu updateMany
   */
  export type tb_menuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_menus.
     */
    data: XOR<tb_menuUpdateManyMutationInput, tb_menuUncheckedUpdateManyInput>
    /**
     * Filter which tb_menus to update
     */
    where?: tb_menuWhereInput
    /**
     * Limit how many tb_menus to update.
     */
    limit?: number
  }

  /**
   * tb_menu upsert
   */
  export type tb_menuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_menu
     */
    select?: tb_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_menu
     */
    omit?: tb_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_menuInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_menu to update in case it exists.
     */
    where: tb_menuWhereUniqueInput
    /**
     * In case the tb_menu found by the `where` argument doesn't exist, create a new tb_menu with this data.
     */
    create: XOR<tb_menuCreateInput, tb_menuUncheckedCreateInput>
    /**
     * In case the tb_menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_menuUpdateInput, tb_menuUncheckedUpdateInput>
  }

  /**
   * tb_menu delete
   */
  export type tb_menuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_menu
     */
    select?: tb_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_menu
     */
    omit?: tb_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_menuInclude<ExtArgs> | null
    /**
     * Filter which tb_menu to delete.
     */
    where: tb_menuWhereUniqueInput
  }

  /**
   * tb_menu deleteMany
   */
  export type tb_menuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_menus to delete
     */
    where?: tb_menuWhereInput
    /**
     * Limit how many tb_menus to delete.
     */
    limit?: number
  }

  /**
   * tb_menu.keranjang
   */
  export type tb_menu$keranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_keranjang
     */
    select?: tb_keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_keranjang
     */
    omit?: tb_keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_keranjangInclude<ExtArgs> | null
    where?: tb_keranjangWhereInput
    orderBy?: tb_keranjangOrderByWithRelationInput | tb_keranjangOrderByWithRelationInput[]
    cursor?: tb_keranjangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_keranjangScalarFieldEnum | Tb_keranjangScalarFieldEnum[]
  }

  /**
   * tb_menu without action
   */
  export type tb_menuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_menu
     */
    select?: tb_menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_menu
     */
    omit?: tb_menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_menuInclude<ExtArgs> | null
  }


  /**
   * Model tb_user
   */

  export type AggregateTb_user = {
    _count: Tb_userCountAggregateOutputType | null
    _avg: Tb_userAvgAggregateOutputType | null
    _sum: Tb_userSumAggregateOutputType | null
    _min: Tb_userMinAggregateOutputType | null
    _max: Tb_userMaxAggregateOutputType | null
  }

  export type Tb_userAvgAggregateOutputType = {
    id: number | null
  }

  export type Tb_userSumAggregateOutputType = {
    id: number | null
  }

  export type Tb_userMinAggregateOutputType = {
    id: number | null
    namaLengkap: string | null
    username: string | null
    noHp: string | null
    email: string | null
    alamat: string | null
    password: string | null
    role: $Enums.role | null
  }

  export type Tb_userMaxAggregateOutputType = {
    id: number | null
    namaLengkap: string | null
    username: string | null
    noHp: string | null
    email: string | null
    alamat: string | null
    password: string | null
    role: $Enums.role | null
  }

  export type Tb_userCountAggregateOutputType = {
    id: number
    namaLengkap: number
    username: number
    noHp: number
    email: number
    alamat: number
    password: number
    role: number
    _all: number
  }


  export type Tb_userAvgAggregateInputType = {
    id?: true
  }

  export type Tb_userSumAggregateInputType = {
    id?: true
  }

  export type Tb_userMinAggregateInputType = {
    id?: true
    namaLengkap?: true
    username?: true
    noHp?: true
    email?: true
    alamat?: true
    password?: true
    role?: true
  }

  export type Tb_userMaxAggregateInputType = {
    id?: true
    namaLengkap?: true
    username?: true
    noHp?: true
    email?: true
    alamat?: true
    password?: true
    role?: true
  }

  export type Tb_userCountAggregateInputType = {
    id?: true
    namaLengkap?: true
    username?: true
    noHp?: true
    email?: true
    alamat?: true
    password?: true
    role?: true
    _all?: true
  }

  export type Tb_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_user to aggregate.
     */
    where?: tb_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_users to fetch.
     */
    orderBy?: tb_userOrderByWithRelationInput | tb_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_users
    **/
    _count?: true | Tb_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_userMaxAggregateInputType
  }

  export type GetTb_userAggregateType<T extends Tb_userAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_user[P]>
      : GetScalarType<T[P], AggregateTb_user[P]>
  }




  export type tb_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_userWhereInput
    orderBy?: tb_userOrderByWithAggregationInput | tb_userOrderByWithAggregationInput[]
    by: Tb_userScalarFieldEnum[] | Tb_userScalarFieldEnum
    having?: tb_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_userCountAggregateInputType | true
    _avg?: Tb_userAvgAggregateInputType
    _sum?: Tb_userSumAggregateInputType
    _min?: Tb_userMinAggregateInputType
    _max?: Tb_userMaxAggregateInputType
  }

  export type Tb_userGroupByOutputType = {
    id: number
    namaLengkap: string
    username: string
    noHp: string
    email: string
    alamat: string
    password: string
    role: $Enums.role
    _count: Tb_userCountAggregateOutputType | null
    _avg: Tb_userAvgAggregateOutputType | null
    _sum: Tb_userSumAggregateOutputType | null
    _min: Tb_userMinAggregateOutputType | null
    _max: Tb_userMaxAggregateOutputType | null
  }

  type GetTb_userGroupByPayload<T extends tb_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_userGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_userGroupByOutputType[P]>
        }
      >
    >


  export type tb_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaLengkap?: boolean
    username?: boolean
    noHp?: boolean
    email?: boolean
    alamat?: boolean
    password?: boolean
    role?: boolean
    keranjang?: boolean | tb_user$keranjangArgs<ExtArgs>
    pemesanan?: boolean | tb_user$pemesananArgs<ExtArgs>
    _count?: boolean | Tb_userCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_user"]>



  export type tb_userSelectScalar = {
    id?: boolean
    namaLengkap?: boolean
    username?: boolean
    noHp?: boolean
    email?: boolean
    alamat?: boolean
    password?: boolean
    role?: boolean
  }

  export type tb_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaLengkap" | "username" | "noHp" | "email" | "alamat" | "password" | "role", ExtArgs["result"]["tb_user"]>
  export type tb_userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keranjang?: boolean | tb_user$keranjangArgs<ExtArgs>
    pemesanan?: boolean | tb_user$pemesananArgs<ExtArgs>
    _count?: boolean | Tb_userCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tb_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_user"
    objects: {
      keranjang: Prisma.$tb_keranjangPayload<ExtArgs>[]
      pemesanan: Prisma.$tb_pemesananPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      namaLengkap: string
      username: string
      noHp: string
      email: string
      alamat: string
      password: string
      role: $Enums.role
    }, ExtArgs["result"]["tb_user"]>
    composites: {}
  }

  type tb_userGetPayload<S extends boolean | null | undefined | tb_userDefaultArgs> = $Result.GetResult<Prisma.$tb_userPayload, S>

  type tb_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_userCountAggregateInputType | true
    }

  export interface tb_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_user'], meta: { name: 'tb_user' } }
    /**
     * Find zero or one Tb_user that matches the filter.
     * @param {tb_userFindUniqueArgs} args - Arguments to find a Tb_user
     * @example
     * // Get one Tb_user
     * const tb_user = await prisma.tb_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_userFindUniqueArgs>(args: SelectSubset<T, tb_userFindUniqueArgs<ExtArgs>>): Prisma__tb_userClient<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_userFindUniqueOrThrowArgs} args - Arguments to find a Tb_user
     * @example
     * // Get one Tb_user
     * const tb_user = await prisma.tb_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_userFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_userClient<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_userFindFirstArgs} args - Arguments to find a Tb_user
     * @example
     * // Get one Tb_user
     * const tb_user = await prisma.tb_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_userFindFirstArgs>(args?: SelectSubset<T, tb_userFindFirstArgs<ExtArgs>>): Prisma__tb_userClient<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_userFindFirstOrThrowArgs} args - Arguments to find a Tb_user
     * @example
     * // Get one Tb_user
     * const tb_user = await prisma.tb_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_userFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_userClient<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_users
     * const tb_users = await prisma.tb_user.findMany()
     * 
     * // Get first 10 Tb_users
     * const tb_users = await prisma.tb_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_userWithIdOnly = await prisma.tb_user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_userFindManyArgs>(args?: SelectSubset<T, tb_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_user.
     * @param {tb_userCreateArgs} args - Arguments to create a Tb_user.
     * @example
     * // Create one Tb_user
     * const Tb_user = await prisma.tb_user.create({
     *   data: {
     *     // ... data to create a Tb_user
     *   }
     * })
     * 
     */
    create<T extends tb_userCreateArgs>(args: SelectSubset<T, tb_userCreateArgs<ExtArgs>>): Prisma__tb_userClient<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_users.
     * @param {tb_userCreateManyArgs} args - Arguments to create many Tb_users.
     * @example
     * // Create many Tb_users
     * const tb_user = await prisma.tb_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_userCreateManyArgs>(args?: SelectSubset<T, tb_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_user.
     * @param {tb_userDeleteArgs} args - Arguments to delete one Tb_user.
     * @example
     * // Delete one Tb_user
     * const Tb_user = await prisma.tb_user.delete({
     *   where: {
     *     // ... filter to delete one Tb_user
     *   }
     * })
     * 
     */
    delete<T extends tb_userDeleteArgs>(args: SelectSubset<T, tb_userDeleteArgs<ExtArgs>>): Prisma__tb_userClient<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_user.
     * @param {tb_userUpdateArgs} args - Arguments to update one Tb_user.
     * @example
     * // Update one Tb_user
     * const tb_user = await prisma.tb_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_userUpdateArgs>(args: SelectSubset<T, tb_userUpdateArgs<ExtArgs>>): Prisma__tb_userClient<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_users.
     * @param {tb_userDeleteManyArgs} args - Arguments to filter Tb_users to delete.
     * @example
     * // Delete a few Tb_users
     * const { count } = await prisma.tb_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_userDeleteManyArgs>(args?: SelectSubset<T, tb_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_users
     * const tb_user = await prisma.tb_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_userUpdateManyArgs>(args: SelectSubset<T, tb_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_user.
     * @param {tb_userUpsertArgs} args - Arguments to update or create a Tb_user.
     * @example
     * // Update or create a Tb_user
     * const tb_user = await prisma.tb_user.upsert({
     *   create: {
     *     // ... data to create a Tb_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_user we want to update
     *   }
     * })
     */
    upsert<T extends tb_userUpsertArgs>(args: SelectSubset<T, tb_userUpsertArgs<ExtArgs>>): Prisma__tb_userClient<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_userCountArgs} args - Arguments to filter Tb_users to count.
     * @example
     * // Count the number of Tb_users
     * const count = await prisma.tb_user.count({
     *   where: {
     *     // ... the filter for the Tb_users we want to count
     *   }
     * })
    **/
    count<T extends tb_userCountArgs>(
      args?: Subset<T, tb_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_userAggregateArgs>(args: Subset<T, Tb_userAggregateArgs>): Prisma.PrismaPromise<GetTb_userAggregateType<T>>

    /**
     * Group by Tb_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_userGroupByArgs} args - Group by arguments.
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
      T extends tb_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_userGroupByArgs['orderBy'] }
        : { orderBy?: tb_userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_user model
   */
  readonly fields: tb_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    keranjang<T extends tb_user$keranjangArgs<ExtArgs> = {}>(args?: Subset<T, tb_user$keranjangArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_keranjangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pemesanan<T extends tb_user$pemesananArgs<ExtArgs> = {}>(args?: Subset<T, tb_user$pemesananArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_pemesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_user model
   */
  interface tb_userFieldRefs {
    readonly id: FieldRef<"tb_user", 'Int'>
    readonly namaLengkap: FieldRef<"tb_user", 'String'>
    readonly username: FieldRef<"tb_user", 'String'>
    readonly noHp: FieldRef<"tb_user", 'String'>
    readonly email: FieldRef<"tb_user", 'String'>
    readonly alamat: FieldRef<"tb_user", 'String'>
    readonly password: FieldRef<"tb_user", 'String'>
    readonly role: FieldRef<"tb_user", 'role'>
  }
    

  // Custom InputTypes
  /**
   * tb_user findUnique
   */
  export type tb_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_userInclude<ExtArgs> | null
    /**
     * Filter, which tb_user to fetch.
     */
    where: tb_userWhereUniqueInput
  }

  /**
   * tb_user findUniqueOrThrow
   */
  export type tb_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_userInclude<ExtArgs> | null
    /**
     * Filter, which tb_user to fetch.
     */
    where: tb_userWhereUniqueInput
  }

  /**
   * tb_user findFirst
   */
  export type tb_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_userInclude<ExtArgs> | null
    /**
     * Filter, which tb_user to fetch.
     */
    where?: tb_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_users to fetch.
     */
    orderBy?: tb_userOrderByWithRelationInput | tb_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_users.
     */
    cursor?: tb_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_users.
     */
    distinct?: Tb_userScalarFieldEnum | Tb_userScalarFieldEnum[]
  }

  /**
   * tb_user findFirstOrThrow
   */
  export type tb_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_userInclude<ExtArgs> | null
    /**
     * Filter, which tb_user to fetch.
     */
    where?: tb_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_users to fetch.
     */
    orderBy?: tb_userOrderByWithRelationInput | tb_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_users.
     */
    cursor?: tb_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_users.
     */
    distinct?: Tb_userScalarFieldEnum | Tb_userScalarFieldEnum[]
  }

  /**
   * tb_user findMany
   */
  export type tb_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_userInclude<ExtArgs> | null
    /**
     * Filter, which tb_users to fetch.
     */
    where?: tb_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_users to fetch.
     */
    orderBy?: tb_userOrderByWithRelationInput | tb_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_users.
     */
    cursor?: tb_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_users.
     */
    skip?: number
    distinct?: Tb_userScalarFieldEnum | Tb_userScalarFieldEnum[]
  }

  /**
   * tb_user create
   */
  export type tb_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_userInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_user.
     */
    data: XOR<tb_userCreateInput, tb_userUncheckedCreateInput>
  }

  /**
   * tb_user createMany
   */
  export type tb_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_users.
     */
    data: tb_userCreateManyInput | tb_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_user update
   */
  export type tb_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_userInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_user.
     */
    data: XOR<tb_userUpdateInput, tb_userUncheckedUpdateInput>
    /**
     * Choose, which tb_user to update.
     */
    where: tb_userWhereUniqueInput
  }

  /**
   * tb_user updateMany
   */
  export type tb_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_users.
     */
    data: XOR<tb_userUpdateManyMutationInput, tb_userUncheckedUpdateManyInput>
    /**
     * Filter which tb_users to update
     */
    where?: tb_userWhereInput
    /**
     * Limit how many tb_users to update.
     */
    limit?: number
  }

  /**
   * tb_user upsert
   */
  export type tb_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_userInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_user to update in case it exists.
     */
    where: tb_userWhereUniqueInput
    /**
     * In case the tb_user found by the `where` argument doesn't exist, create a new tb_user with this data.
     */
    create: XOR<tb_userCreateInput, tb_userUncheckedCreateInput>
    /**
     * In case the tb_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_userUpdateInput, tb_userUncheckedUpdateInput>
  }

  /**
   * tb_user delete
   */
  export type tb_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_userInclude<ExtArgs> | null
    /**
     * Filter which tb_user to delete.
     */
    where: tb_userWhereUniqueInput
  }

  /**
   * tb_user deleteMany
   */
  export type tb_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_users to delete
     */
    where?: tb_userWhereInput
    /**
     * Limit how many tb_users to delete.
     */
    limit?: number
  }

  /**
   * tb_user.keranjang
   */
  export type tb_user$keranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_keranjang
     */
    select?: tb_keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_keranjang
     */
    omit?: tb_keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_keranjangInclude<ExtArgs> | null
    where?: tb_keranjangWhereInput
    orderBy?: tb_keranjangOrderByWithRelationInput | tb_keranjangOrderByWithRelationInput[]
    cursor?: tb_keranjangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_keranjangScalarFieldEnum | Tb_keranjangScalarFieldEnum[]
  }

  /**
   * tb_user.pemesanan
   */
  export type tb_user$pemesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pemesanan
     */
    select?: tb_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pemesanan
     */
    omit?: tb_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_pemesananInclude<ExtArgs> | null
    where?: tb_pemesananWhereInput
    orderBy?: tb_pemesananOrderByWithRelationInput | tb_pemesananOrderByWithRelationInput[]
    cursor?: tb_pemesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_pemesananScalarFieldEnum | Tb_pemesananScalarFieldEnum[]
  }

  /**
   * tb_user without action
   */
  export type tb_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_user
     */
    select?: tb_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_user
     */
    omit?: tb_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_userInclude<ExtArgs> | null
  }


  /**
   * Model tb_keranjang
   */

  export type AggregateTb_keranjang = {
    _count: Tb_keranjangCountAggregateOutputType | null
    _avg: Tb_keranjangAvgAggregateOutputType | null
    _sum: Tb_keranjangSumAggregateOutputType | null
    _min: Tb_keranjangMinAggregateOutputType | null
    _max: Tb_keranjangMaxAggregateOutputType | null
  }

  export type Tb_keranjangAvgAggregateOutputType = {
    id: number | null
    idUser: number | null
    idMenu: number | null
    quantity: number | null
    total: number | null
  }

  export type Tb_keranjangSumAggregateOutputType = {
    id: number | null
    idUser: number | null
    idMenu: number | null
    quantity: number | null
    total: number | null
  }

  export type Tb_keranjangMinAggregateOutputType = {
    id: number | null
    idUser: number | null
    idMenu: number | null
    quantity: number | null
    total: number | null
    status: $Enums.status | null
  }

  export type Tb_keranjangMaxAggregateOutputType = {
    id: number | null
    idUser: number | null
    idMenu: number | null
    quantity: number | null
    total: number | null
    status: $Enums.status | null
  }

  export type Tb_keranjangCountAggregateOutputType = {
    id: number
    idUser: number
    idMenu: number
    quantity: number
    total: number
    status: number
    _all: number
  }


  export type Tb_keranjangAvgAggregateInputType = {
    id?: true
    idUser?: true
    idMenu?: true
    quantity?: true
    total?: true
  }

  export type Tb_keranjangSumAggregateInputType = {
    id?: true
    idUser?: true
    idMenu?: true
    quantity?: true
    total?: true
  }

  export type Tb_keranjangMinAggregateInputType = {
    id?: true
    idUser?: true
    idMenu?: true
    quantity?: true
    total?: true
    status?: true
  }

  export type Tb_keranjangMaxAggregateInputType = {
    id?: true
    idUser?: true
    idMenu?: true
    quantity?: true
    total?: true
    status?: true
  }

  export type Tb_keranjangCountAggregateInputType = {
    id?: true
    idUser?: true
    idMenu?: true
    quantity?: true
    total?: true
    status?: true
    _all?: true
  }

  export type Tb_keranjangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_keranjang to aggregate.
     */
    where?: tb_keranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_keranjangs to fetch.
     */
    orderBy?: tb_keranjangOrderByWithRelationInput | tb_keranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_keranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_keranjangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_keranjangs
    **/
    _count?: true | Tb_keranjangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_keranjangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_keranjangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_keranjangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_keranjangMaxAggregateInputType
  }

  export type GetTb_keranjangAggregateType<T extends Tb_keranjangAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_keranjang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_keranjang[P]>
      : GetScalarType<T[P], AggregateTb_keranjang[P]>
  }




  export type tb_keranjangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_keranjangWhereInput
    orderBy?: tb_keranjangOrderByWithAggregationInput | tb_keranjangOrderByWithAggregationInput[]
    by: Tb_keranjangScalarFieldEnum[] | Tb_keranjangScalarFieldEnum
    having?: tb_keranjangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_keranjangCountAggregateInputType | true
    _avg?: Tb_keranjangAvgAggregateInputType
    _sum?: Tb_keranjangSumAggregateInputType
    _min?: Tb_keranjangMinAggregateInputType
    _max?: Tb_keranjangMaxAggregateInputType
  }

  export type Tb_keranjangGroupByOutputType = {
    id: number
    idUser: number
    idMenu: number
    quantity: number
    total: number
    status: $Enums.status
    _count: Tb_keranjangCountAggregateOutputType | null
    _avg: Tb_keranjangAvgAggregateOutputType | null
    _sum: Tb_keranjangSumAggregateOutputType | null
    _min: Tb_keranjangMinAggregateOutputType | null
    _max: Tb_keranjangMaxAggregateOutputType | null
  }

  type GetTb_keranjangGroupByPayload<T extends tb_keranjangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_keranjangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_keranjangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_keranjangGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_keranjangGroupByOutputType[P]>
        }
      >
    >


  export type tb_keranjangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idUser?: boolean
    idMenu?: boolean
    quantity?: boolean
    total?: boolean
    status?: boolean
    user?: boolean | tb_userDefaultArgs<ExtArgs>
    menu?: boolean | tb_menuDefaultArgs<ExtArgs>
    keranjang?: boolean | tb_keranjang$keranjangArgs<ExtArgs>
    _count?: boolean | Tb_keranjangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_keranjang"]>



  export type tb_keranjangSelectScalar = {
    id?: boolean
    idUser?: boolean
    idMenu?: boolean
    quantity?: boolean
    total?: boolean
    status?: boolean
  }

  export type tb_keranjangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idUser" | "idMenu" | "quantity" | "total" | "status", ExtArgs["result"]["tb_keranjang"]>
  export type tb_keranjangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | tb_userDefaultArgs<ExtArgs>
    menu?: boolean | tb_menuDefaultArgs<ExtArgs>
    keranjang?: boolean | tb_keranjang$keranjangArgs<ExtArgs>
    _count?: boolean | Tb_keranjangCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tb_keranjangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_keranjang"
    objects: {
      user: Prisma.$tb_userPayload<ExtArgs>
      menu: Prisma.$tb_menuPayload<ExtArgs>
      keranjang: Prisma.$detail_pemesananPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idUser: number
      idMenu: number
      quantity: number
      total: number
      status: $Enums.status
    }, ExtArgs["result"]["tb_keranjang"]>
    composites: {}
  }

  type tb_keranjangGetPayload<S extends boolean | null | undefined | tb_keranjangDefaultArgs> = $Result.GetResult<Prisma.$tb_keranjangPayload, S>

  type tb_keranjangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_keranjangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_keranjangCountAggregateInputType | true
    }

  export interface tb_keranjangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_keranjang'], meta: { name: 'tb_keranjang' } }
    /**
     * Find zero or one Tb_keranjang that matches the filter.
     * @param {tb_keranjangFindUniqueArgs} args - Arguments to find a Tb_keranjang
     * @example
     * // Get one Tb_keranjang
     * const tb_keranjang = await prisma.tb_keranjang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_keranjangFindUniqueArgs>(args: SelectSubset<T, tb_keranjangFindUniqueArgs<ExtArgs>>): Prisma__tb_keranjangClient<$Result.GetResult<Prisma.$tb_keranjangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_keranjang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_keranjangFindUniqueOrThrowArgs} args - Arguments to find a Tb_keranjang
     * @example
     * // Get one Tb_keranjang
     * const tb_keranjang = await prisma.tb_keranjang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_keranjangFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_keranjangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_keranjangClient<$Result.GetResult<Prisma.$tb_keranjangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_keranjang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_keranjangFindFirstArgs} args - Arguments to find a Tb_keranjang
     * @example
     * // Get one Tb_keranjang
     * const tb_keranjang = await prisma.tb_keranjang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_keranjangFindFirstArgs>(args?: SelectSubset<T, tb_keranjangFindFirstArgs<ExtArgs>>): Prisma__tb_keranjangClient<$Result.GetResult<Prisma.$tb_keranjangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_keranjang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_keranjangFindFirstOrThrowArgs} args - Arguments to find a Tb_keranjang
     * @example
     * // Get one Tb_keranjang
     * const tb_keranjang = await prisma.tb_keranjang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_keranjangFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_keranjangFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_keranjangClient<$Result.GetResult<Prisma.$tb_keranjangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_keranjangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_keranjangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_keranjangs
     * const tb_keranjangs = await prisma.tb_keranjang.findMany()
     * 
     * // Get first 10 Tb_keranjangs
     * const tb_keranjangs = await prisma.tb_keranjang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_keranjangWithIdOnly = await prisma.tb_keranjang.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_keranjangFindManyArgs>(args?: SelectSubset<T, tb_keranjangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_keranjangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_keranjang.
     * @param {tb_keranjangCreateArgs} args - Arguments to create a Tb_keranjang.
     * @example
     * // Create one Tb_keranjang
     * const Tb_keranjang = await prisma.tb_keranjang.create({
     *   data: {
     *     // ... data to create a Tb_keranjang
     *   }
     * })
     * 
     */
    create<T extends tb_keranjangCreateArgs>(args: SelectSubset<T, tb_keranjangCreateArgs<ExtArgs>>): Prisma__tb_keranjangClient<$Result.GetResult<Prisma.$tb_keranjangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_keranjangs.
     * @param {tb_keranjangCreateManyArgs} args - Arguments to create many Tb_keranjangs.
     * @example
     * // Create many Tb_keranjangs
     * const tb_keranjang = await prisma.tb_keranjang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_keranjangCreateManyArgs>(args?: SelectSubset<T, tb_keranjangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_keranjang.
     * @param {tb_keranjangDeleteArgs} args - Arguments to delete one Tb_keranjang.
     * @example
     * // Delete one Tb_keranjang
     * const Tb_keranjang = await prisma.tb_keranjang.delete({
     *   where: {
     *     // ... filter to delete one Tb_keranjang
     *   }
     * })
     * 
     */
    delete<T extends tb_keranjangDeleteArgs>(args: SelectSubset<T, tb_keranjangDeleteArgs<ExtArgs>>): Prisma__tb_keranjangClient<$Result.GetResult<Prisma.$tb_keranjangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_keranjang.
     * @param {tb_keranjangUpdateArgs} args - Arguments to update one Tb_keranjang.
     * @example
     * // Update one Tb_keranjang
     * const tb_keranjang = await prisma.tb_keranjang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_keranjangUpdateArgs>(args: SelectSubset<T, tb_keranjangUpdateArgs<ExtArgs>>): Prisma__tb_keranjangClient<$Result.GetResult<Prisma.$tb_keranjangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_keranjangs.
     * @param {tb_keranjangDeleteManyArgs} args - Arguments to filter Tb_keranjangs to delete.
     * @example
     * // Delete a few Tb_keranjangs
     * const { count } = await prisma.tb_keranjang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_keranjangDeleteManyArgs>(args?: SelectSubset<T, tb_keranjangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_keranjangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_keranjangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_keranjangs
     * const tb_keranjang = await prisma.tb_keranjang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_keranjangUpdateManyArgs>(args: SelectSubset<T, tb_keranjangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_keranjang.
     * @param {tb_keranjangUpsertArgs} args - Arguments to update or create a Tb_keranjang.
     * @example
     * // Update or create a Tb_keranjang
     * const tb_keranjang = await prisma.tb_keranjang.upsert({
     *   create: {
     *     // ... data to create a Tb_keranjang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_keranjang we want to update
     *   }
     * })
     */
    upsert<T extends tb_keranjangUpsertArgs>(args: SelectSubset<T, tb_keranjangUpsertArgs<ExtArgs>>): Prisma__tb_keranjangClient<$Result.GetResult<Prisma.$tb_keranjangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_keranjangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_keranjangCountArgs} args - Arguments to filter Tb_keranjangs to count.
     * @example
     * // Count the number of Tb_keranjangs
     * const count = await prisma.tb_keranjang.count({
     *   where: {
     *     // ... the filter for the Tb_keranjangs we want to count
     *   }
     * })
    **/
    count<T extends tb_keranjangCountArgs>(
      args?: Subset<T, tb_keranjangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_keranjangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_keranjang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_keranjangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_keranjangAggregateArgs>(args: Subset<T, Tb_keranjangAggregateArgs>): Prisma.PrismaPromise<GetTb_keranjangAggregateType<T>>

    /**
     * Group by Tb_keranjang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_keranjangGroupByArgs} args - Group by arguments.
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
      T extends tb_keranjangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_keranjangGroupByArgs['orderBy'] }
        : { orderBy?: tb_keranjangGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_keranjangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_keranjangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_keranjang model
   */
  readonly fields: tb_keranjangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_keranjang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_keranjangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends tb_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tb_userDefaultArgs<ExtArgs>>): Prisma__tb_userClient<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menu<T extends tb_menuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tb_menuDefaultArgs<ExtArgs>>): Prisma__tb_menuClient<$Result.GetResult<Prisma.$tb_menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    keranjang<T extends tb_keranjang$keranjangArgs<ExtArgs> = {}>(args?: Subset<T, tb_keranjang$keranjangArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_pemesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_keranjang model
   */
  interface tb_keranjangFieldRefs {
    readonly id: FieldRef<"tb_keranjang", 'Int'>
    readonly idUser: FieldRef<"tb_keranjang", 'Int'>
    readonly idMenu: FieldRef<"tb_keranjang", 'Int'>
    readonly quantity: FieldRef<"tb_keranjang", 'Int'>
    readonly total: FieldRef<"tb_keranjang", 'Int'>
    readonly status: FieldRef<"tb_keranjang", 'status'>
  }
    

  // Custom InputTypes
  /**
   * tb_keranjang findUnique
   */
  export type tb_keranjangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_keranjang
     */
    select?: tb_keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_keranjang
     */
    omit?: tb_keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_keranjangInclude<ExtArgs> | null
    /**
     * Filter, which tb_keranjang to fetch.
     */
    where: tb_keranjangWhereUniqueInput
  }

  /**
   * tb_keranjang findUniqueOrThrow
   */
  export type tb_keranjangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_keranjang
     */
    select?: tb_keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_keranjang
     */
    omit?: tb_keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_keranjangInclude<ExtArgs> | null
    /**
     * Filter, which tb_keranjang to fetch.
     */
    where: tb_keranjangWhereUniqueInput
  }

  /**
   * tb_keranjang findFirst
   */
  export type tb_keranjangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_keranjang
     */
    select?: tb_keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_keranjang
     */
    omit?: tb_keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_keranjangInclude<ExtArgs> | null
    /**
     * Filter, which tb_keranjang to fetch.
     */
    where?: tb_keranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_keranjangs to fetch.
     */
    orderBy?: tb_keranjangOrderByWithRelationInput | tb_keranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_keranjangs.
     */
    cursor?: tb_keranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_keranjangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_keranjangs.
     */
    distinct?: Tb_keranjangScalarFieldEnum | Tb_keranjangScalarFieldEnum[]
  }

  /**
   * tb_keranjang findFirstOrThrow
   */
  export type tb_keranjangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_keranjang
     */
    select?: tb_keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_keranjang
     */
    omit?: tb_keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_keranjangInclude<ExtArgs> | null
    /**
     * Filter, which tb_keranjang to fetch.
     */
    where?: tb_keranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_keranjangs to fetch.
     */
    orderBy?: tb_keranjangOrderByWithRelationInput | tb_keranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_keranjangs.
     */
    cursor?: tb_keranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_keranjangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_keranjangs.
     */
    distinct?: Tb_keranjangScalarFieldEnum | Tb_keranjangScalarFieldEnum[]
  }

  /**
   * tb_keranjang findMany
   */
  export type tb_keranjangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_keranjang
     */
    select?: tb_keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_keranjang
     */
    omit?: tb_keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_keranjangInclude<ExtArgs> | null
    /**
     * Filter, which tb_keranjangs to fetch.
     */
    where?: tb_keranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_keranjangs to fetch.
     */
    orderBy?: tb_keranjangOrderByWithRelationInput | tb_keranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_keranjangs.
     */
    cursor?: tb_keranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_keranjangs.
     */
    skip?: number
    distinct?: Tb_keranjangScalarFieldEnum | Tb_keranjangScalarFieldEnum[]
  }

  /**
   * tb_keranjang create
   */
  export type tb_keranjangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_keranjang
     */
    select?: tb_keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_keranjang
     */
    omit?: tb_keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_keranjangInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_keranjang.
     */
    data: XOR<tb_keranjangCreateInput, tb_keranjangUncheckedCreateInput>
  }

  /**
   * tb_keranjang createMany
   */
  export type tb_keranjangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_keranjangs.
     */
    data: tb_keranjangCreateManyInput | tb_keranjangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_keranjang update
   */
  export type tb_keranjangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_keranjang
     */
    select?: tb_keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_keranjang
     */
    omit?: tb_keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_keranjangInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_keranjang.
     */
    data: XOR<tb_keranjangUpdateInput, tb_keranjangUncheckedUpdateInput>
    /**
     * Choose, which tb_keranjang to update.
     */
    where: tb_keranjangWhereUniqueInput
  }

  /**
   * tb_keranjang updateMany
   */
  export type tb_keranjangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_keranjangs.
     */
    data: XOR<tb_keranjangUpdateManyMutationInput, tb_keranjangUncheckedUpdateManyInput>
    /**
     * Filter which tb_keranjangs to update
     */
    where?: tb_keranjangWhereInput
    /**
     * Limit how many tb_keranjangs to update.
     */
    limit?: number
  }

  /**
   * tb_keranjang upsert
   */
  export type tb_keranjangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_keranjang
     */
    select?: tb_keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_keranjang
     */
    omit?: tb_keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_keranjangInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_keranjang to update in case it exists.
     */
    where: tb_keranjangWhereUniqueInput
    /**
     * In case the tb_keranjang found by the `where` argument doesn't exist, create a new tb_keranjang with this data.
     */
    create: XOR<tb_keranjangCreateInput, tb_keranjangUncheckedCreateInput>
    /**
     * In case the tb_keranjang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_keranjangUpdateInput, tb_keranjangUncheckedUpdateInput>
  }

  /**
   * tb_keranjang delete
   */
  export type tb_keranjangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_keranjang
     */
    select?: tb_keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_keranjang
     */
    omit?: tb_keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_keranjangInclude<ExtArgs> | null
    /**
     * Filter which tb_keranjang to delete.
     */
    where: tb_keranjangWhereUniqueInput
  }

  /**
   * tb_keranjang deleteMany
   */
  export type tb_keranjangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_keranjangs to delete
     */
    where?: tb_keranjangWhereInput
    /**
     * Limit how many tb_keranjangs to delete.
     */
    limit?: number
  }

  /**
   * tb_keranjang.keranjang
   */
  export type tb_keranjang$keranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_pemesanan
     */
    select?: detail_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_pemesanan
     */
    omit?: detail_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_pemesananInclude<ExtArgs> | null
    where?: detail_pemesananWhereInput
    orderBy?: detail_pemesananOrderByWithRelationInput | detail_pemesananOrderByWithRelationInput[]
    cursor?: detail_pemesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detail_pemesananScalarFieldEnum | Detail_pemesananScalarFieldEnum[]
  }

  /**
   * tb_keranjang without action
   */
  export type tb_keranjangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_keranjang
     */
    select?: tb_keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_keranjang
     */
    omit?: tb_keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_keranjangInclude<ExtArgs> | null
  }


  /**
   * Model tb_meja
   */

  export type AggregateTb_meja = {
    _count: Tb_mejaCountAggregateOutputType | null
    _avg: Tb_mejaAvgAggregateOutputType | null
    _sum: Tb_mejaSumAggregateOutputType | null
    _min: Tb_mejaMinAggregateOutputType | null
    _max: Tb_mejaMaxAggregateOutputType | null
  }

  export type Tb_mejaAvgAggregateOutputType = {
    id: number | null
  }

  export type Tb_mejaSumAggregateOutputType = {
    id: number | null
  }

  export type Tb_mejaMinAggregateOutputType = {
    id: number | null
    namaMeja: string | null
  }

  export type Tb_mejaMaxAggregateOutputType = {
    id: number | null
    namaMeja: string | null
  }

  export type Tb_mejaCountAggregateOutputType = {
    id: number
    namaMeja: number
    _all: number
  }


  export type Tb_mejaAvgAggregateInputType = {
    id?: true
  }

  export type Tb_mejaSumAggregateInputType = {
    id?: true
  }

  export type Tb_mejaMinAggregateInputType = {
    id?: true
    namaMeja?: true
  }

  export type Tb_mejaMaxAggregateInputType = {
    id?: true
    namaMeja?: true
  }

  export type Tb_mejaCountAggregateInputType = {
    id?: true
    namaMeja?: true
    _all?: true
  }

  export type Tb_mejaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_meja to aggregate.
     */
    where?: tb_mejaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_mejas to fetch.
     */
    orderBy?: tb_mejaOrderByWithRelationInput | tb_mejaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_mejaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_mejas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_mejas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_mejas
    **/
    _count?: true | Tb_mejaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_mejaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_mejaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_mejaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_mejaMaxAggregateInputType
  }

  export type GetTb_mejaAggregateType<T extends Tb_mejaAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_meja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_meja[P]>
      : GetScalarType<T[P], AggregateTb_meja[P]>
  }




  export type tb_mejaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_mejaWhereInput
    orderBy?: tb_mejaOrderByWithAggregationInput | tb_mejaOrderByWithAggregationInput[]
    by: Tb_mejaScalarFieldEnum[] | Tb_mejaScalarFieldEnum
    having?: tb_mejaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_mejaCountAggregateInputType | true
    _avg?: Tb_mejaAvgAggregateInputType
    _sum?: Tb_mejaSumAggregateInputType
    _min?: Tb_mejaMinAggregateInputType
    _max?: Tb_mejaMaxAggregateInputType
  }

  export type Tb_mejaGroupByOutputType = {
    id: number
    namaMeja: string
    _count: Tb_mejaCountAggregateOutputType | null
    _avg: Tb_mejaAvgAggregateOutputType | null
    _sum: Tb_mejaSumAggregateOutputType | null
    _min: Tb_mejaMinAggregateOutputType | null
    _max: Tb_mejaMaxAggregateOutputType | null
  }

  type GetTb_mejaGroupByPayload<T extends tb_mejaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_mejaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_mejaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_mejaGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_mejaGroupByOutputType[P]>
        }
      >
    >


  export type tb_mejaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaMeja?: boolean
    meja?: boolean | tb_meja$mejaArgs<ExtArgs>
    _count?: boolean | Tb_mejaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_meja"]>



  export type tb_mejaSelectScalar = {
    id?: boolean
    namaMeja?: boolean
  }

  export type tb_mejaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaMeja", ExtArgs["result"]["tb_meja"]>
  export type tb_mejaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meja?: boolean | tb_meja$mejaArgs<ExtArgs>
    _count?: boolean | Tb_mejaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tb_mejaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_meja"
    objects: {
      meja: Prisma.$tb_pemesananPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      namaMeja: string
    }, ExtArgs["result"]["tb_meja"]>
    composites: {}
  }

  type tb_mejaGetPayload<S extends boolean | null | undefined | tb_mejaDefaultArgs> = $Result.GetResult<Prisma.$tb_mejaPayload, S>

  type tb_mejaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_mejaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_mejaCountAggregateInputType | true
    }

  export interface tb_mejaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_meja'], meta: { name: 'tb_meja' } }
    /**
     * Find zero or one Tb_meja that matches the filter.
     * @param {tb_mejaFindUniqueArgs} args - Arguments to find a Tb_meja
     * @example
     * // Get one Tb_meja
     * const tb_meja = await prisma.tb_meja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_mejaFindUniqueArgs>(args: SelectSubset<T, tb_mejaFindUniqueArgs<ExtArgs>>): Prisma__tb_mejaClient<$Result.GetResult<Prisma.$tb_mejaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_meja that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_mejaFindUniqueOrThrowArgs} args - Arguments to find a Tb_meja
     * @example
     * // Get one Tb_meja
     * const tb_meja = await prisma.tb_meja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_mejaFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_mejaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_mejaClient<$Result.GetResult<Prisma.$tb_mejaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_meja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_mejaFindFirstArgs} args - Arguments to find a Tb_meja
     * @example
     * // Get one Tb_meja
     * const tb_meja = await prisma.tb_meja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_mejaFindFirstArgs>(args?: SelectSubset<T, tb_mejaFindFirstArgs<ExtArgs>>): Prisma__tb_mejaClient<$Result.GetResult<Prisma.$tb_mejaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_meja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_mejaFindFirstOrThrowArgs} args - Arguments to find a Tb_meja
     * @example
     * // Get one Tb_meja
     * const tb_meja = await prisma.tb_meja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_mejaFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_mejaFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_mejaClient<$Result.GetResult<Prisma.$tb_mejaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_mejas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_mejaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_mejas
     * const tb_mejas = await prisma.tb_meja.findMany()
     * 
     * // Get first 10 Tb_mejas
     * const tb_mejas = await prisma.tb_meja.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_mejaWithIdOnly = await prisma.tb_meja.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_mejaFindManyArgs>(args?: SelectSubset<T, tb_mejaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_mejaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_meja.
     * @param {tb_mejaCreateArgs} args - Arguments to create a Tb_meja.
     * @example
     * // Create one Tb_meja
     * const Tb_meja = await prisma.tb_meja.create({
     *   data: {
     *     // ... data to create a Tb_meja
     *   }
     * })
     * 
     */
    create<T extends tb_mejaCreateArgs>(args: SelectSubset<T, tb_mejaCreateArgs<ExtArgs>>): Prisma__tb_mejaClient<$Result.GetResult<Prisma.$tb_mejaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_mejas.
     * @param {tb_mejaCreateManyArgs} args - Arguments to create many Tb_mejas.
     * @example
     * // Create many Tb_mejas
     * const tb_meja = await prisma.tb_meja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_mejaCreateManyArgs>(args?: SelectSubset<T, tb_mejaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_meja.
     * @param {tb_mejaDeleteArgs} args - Arguments to delete one Tb_meja.
     * @example
     * // Delete one Tb_meja
     * const Tb_meja = await prisma.tb_meja.delete({
     *   where: {
     *     // ... filter to delete one Tb_meja
     *   }
     * })
     * 
     */
    delete<T extends tb_mejaDeleteArgs>(args: SelectSubset<T, tb_mejaDeleteArgs<ExtArgs>>): Prisma__tb_mejaClient<$Result.GetResult<Prisma.$tb_mejaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_meja.
     * @param {tb_mejaUpdateArgs} args - Arguments to update one Tb_meja.
     * @example
     * // Update one Tb_meja
     * const tb_meja = await prisma.tb_meja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_mejaUpdateArgs>(args: SelectSubset<T, tb_mejaUpdateArgs<ExtArgs>>): Prisma__tb_mejaClient<$Result.GetResult<Prisma.$tb_mejaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_mejas.
     * @param {tb_mejaDeleteManyArgs} args - Arguments to filter Tb_mejas to delete.
     * @example
     * // Delete a few Tb_mejas
     * const { count } = await prisma.tb_meja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_mejaDeleteManyArgs>(args?: SelectSubset<T, tb_mejaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_mejas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_mejaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_mejas
     * const tb_meja = await prisma.tb_meja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_mejaUpdateManyArgs>(args: SelectSubset<T, tb_mejaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_meja.
     * @param {tb_mejaUpsertArgs} args - Arguments to update or create a Tb_meja.
     * @example
     * // Update or create a Tb_meja
     * const tb_meja = await prisma.tb_meja.upsert({
     *   create: {
     *     // ... data to create a Tb_meja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_meja we want to update
     *   }
     * })
     */
    upsert<T extends tb_mejaUpsertArgs>(args: SelectSubset<T, tb_mejaUpsertArgs<ExtArgs>>): Prisma__tb_mejaClient<$Result.GetResult<Prisma.$tb_mejaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_mejas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_mejaCountArgs} args - Arguments to filter Tb_mejas to count.
     * @example
     * // Count the number of Tb_mejas
     * const count = await prisma.tb_meja.count({
     *   where: {
     *     // ... the filter for the Tb_mejas we want to count
     *   }
     * })
    **/
    count<T extends tb_mejaCountArgs>(
      args?: Subset<T, tb_mejaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_mejaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_meja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_mejaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_mejaAggregateArgs>(args: Subset<T, Tb_mejaAggregateArgs>): Prisma.PrismaPromise<GetTb_mejaAggregateType<T>>

    /**
     * Group by Tb_meja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_mejaGroupByArgs} args - Group by arguments.
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
      T extends tb_mejaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_mejaGroupByArgs['orderBy'] }
        : { orderBy?: tb_mejaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_mejaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_mejaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_meja model
   */
  readonly fields: tb_mejaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_meja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_mejaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meja<T extends tb_meja$mejaArgs<ExtArgs> = {}>(args?: Subset<T, tb_meja$mejaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_pemesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_meja model
   */
  interface tb_mejaFieldRefs {
    readonly id: FieldRef<"tb_meja", 'Int'>
    readonly namaMeja: FieldRef<"tb_meja", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_meja findUnique
   */
  export type tb_mejaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_meja
     */
    select?: tb_mejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_meja
     */
    omit?: tb_mejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_mejaInclude<ExtArgs> | null
    /**
     * Filter, which tb_meja to fetch.
     */
    where: tb_mejaWhereUniqueInput
  }

  /**
   * tb_meja findUniqueOrThrow
   */
  export type tb_mejaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_meja
     */
    select?: tb_mejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_meja
     */
    omit?: tb_mejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_mejaInclude<ExtArgs> | null
    /**
     * Filter, which tb_meja to fetch.
     */
    where: tb_mejaWhereUniqueInput
  }

  /**
   * tb_meja findFirst
   */
  export type tb_mejaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_meja
     */
    select?: tb_mejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_meja
     */
    omit?: tb_mejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_mejaInclude<ExtArgs> | null
    /**
     * Filter, which tb_meja to fetch.
     */
    where?: tb_mejaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_mejas to fetch.
     */
    orderBy?: tb_mejaOrderByWithRelationInput | tb_mejaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_mejas.
     */
    cursor?: tb_mejaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_mejas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_mejas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_mejas.
     */
    distinct?: Tb_mejaScalarFieldEnum | Tb_mejaScalarFieldEnum[]
  }

  /**
   * tb_meja findFirstOrThrow
   */
  export type tb_mejaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_meja
     */
    select?: tb_mejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_meja
     */
    omit?: tb_mejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_mejaInclude<ExtArgs> | null
    /**
     * Filter, which tb_meja to fetch.
     */
    where?: tb_mejaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_mejas to fetch.
     */
    orderBy?: tb_mejaOrderByWithRelationInput | tb_mejaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_mejas.
     */
    cursor?: tb_mejaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_mejas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_mejas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_mejas.
     */
    distinct?: Tb_mejaScalarFieldEnum | Tb_mejaScalarFieldEnum[]
  }

  /**
   * tb_meja findMany
   */
  export type tb_mejaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_meja
     */
    select?: tb_mejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_meja
     */
    omit?: tb_mejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_mejaInclude<ExtArgs> | null
    /**
     * Filter, which tb_mejas to fetch.
     */
    where?: tb_mejaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_mejas to fetch.
     */
    orderBy?: tb_mejaOrderByWithRelationInput | tb_mejaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_mejas.
     */
    cursor?: tb_mejaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_mejas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_mejas.
     */
    skip?: number
    distinct?: Tb_mejaScalarFieldEnum | Tb_mejaScalarFieldEnum[]
  }

  /**
   * tb_meja create
   */
  export type tb_mejaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_meja
     */
    select?: tb_mejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_meja
     */
    omit?: tb_mejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_mejaInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_meja.
     */
    data: XOR<tb_mejaCreateInput, tb_mejaUncheckedCreateInput>
  }

  /**
   * tb_meja createMany
   */
  export type tb_mejaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_mejas.
     */
    data: tb_mejaCreateManyInput | tb_mejaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_meja update
   */
  export type tb_mejaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_meja
     */
    select?: tb_mejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_meja
     */
    omit?: tb_mejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_mejaInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_meja.
     */
    data: XOR<tb_mejaUpdateInput, tb_mejaUncheckedUpdateInput>
    /**
     * Choose, which tb_meja to update.
     */
    where: tb_mejaWhereUniqueInput
  }

  /**
   * tb_meja updateMany
   */
  export type tb_mejaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_mejas.
     */
    data: XOR<tb_mejaUpdateManyMutationInput, tb_mejaUncheckedUpdateManyInput>
    /**
     * Filter which tb_mejas to update
     */
    where?: tb_mejaWhereInput
    /**
     * Limit how many tb_mejas to update.
     */
    limit?: number
  }

  /**
   * tb_meja upsert
   */
  export type tb_mejaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_meja
     */
    select?: tb_mejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_meja
     */
    omit?: tb_mejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_mejaInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_meja to update in case it exists.
     */
    where: tb_mejaWhereUniqueInput
    /**
     * In case the tb_meja found by the `where` argument doesn't exist, create a new tb_meja with this data.
     */
    create: XOR<tb_mejaCreateInput, tb_mejaUncheckedCreateInput>
    /**
     * In case the tb_meja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_mejaUpdateInput, tb_mejaUncheckedUpdateInput>
  }

  /**
   * tb_meja delete
   */
  export type tb_mejaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_meja
     */
    select?: tb_mejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_meja
     */
    omit?: tb_mejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_mejaInclude<ExtArgs> | null
    /**
     * Filter which tb_meja to delete.
     */
    where: tb_mejaWhereUniqueInput
  }

  /**
   * tb_meja deleteMany
   */
  export type tb_mejaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_mejas to delete
     */
    where?: tb_mejaWhereInput
    /**
     * Limit how many tb_mejas to delete.
     */
    limit?: number
  }

  /**
   * tb_meja.meja
   */
  export type tb_meja$mejaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pemesanan
     */
    select?: tb_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pemesanan
     */
    omit?: tb_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_pemesananInclude<ExtArgs> | null
    where?: tb_pemesananWhereInput
    orderBy?: tb_pemesananOrderByWithRelationInput | tb_pemesananOrderByWithRelationInput[]
    cursor?: tb_pemesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_pemesananScalarFieldEnum | Tb_pemesananScalarFieldEnum[]
  }

  /**
   * tb_meja without action
   */
  export type tb_mejaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_meja
     */
    select?: tb_mejaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_meja
     */
    omit?: tb_mejaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_mejaInclude<ExtArgs> | null
  }


  /**
   * Model tb_pemesanan
   */

  export type AggregateTb_pemesanan = {
    _count: Tb_pemesananCountAggregateOutputType | null
    _avg: Tb_pemesananAvgAggregateOutputType | null
    _sum: Tb_pemesananSumAggregateOutputType | null
    _min: Tb_pemesananMinAggregateOutputType | null
    _max: Tb_pemesananMaxAggregateOutputType | null
  }

  export type Tb_pemesananAvgAggregateOutputType = {
    id: number | null
    idUser: number | null
    idMeja: number | null
    totalProduk: number | null
    total: number | null
  }

  export type Tb_pemesananSumAggregateOutputType = {
    id: number | null
    idUser: number | null
    idMeja: number | null
    totalProduk: number | null
    total: number | null
  }

  export type Tb_pemesananMinAggregateOutputType = {
    id: number | null
    idUser: number | null
    idMeja: number | null
    metode: $Enums.metode_pembayaran | null
    totalProduk: number | null
    pajak: string | null
    total: number | null
    status: $Enums.status_pemesanan | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Tb_pemesananMaxAggregateOutputType = {
    id: number | null
    idUser: number | null
    idMeja: number | null
    metode: $Enums.metode_pembayaran | null
    totalProduk: number | null
    pajak: string | null
    total: number | null
    status: $Enums.status_pemesanan | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Tb_pemesananCountAggregateOutputType = {
    id: number
    idUser: number
    idMeja: number
    metode: number
    totalProduk: number
    pajak: number
    total: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Tb_pemesananAvgAggregateInputType = {
    id?: true
    idUser?: true
    idMeja?: true
    totalProduk?: true
    total?: true
  }

  export type Tb_pemesananSumAggregateInputType = {
    id?: true
    idUser?: true
    idMeja?: true
    totalProduk?: true
    total?: true
  }

  export type Tb_pemesananMinAggregateInputType = {
    id?: true
    idUser?: true
    idMeja?: true
    metode?: true
    totalProduk?: true
    pajak?: true
    total?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Tb_pemesananMaxAggregateInputType = {
    id?: true
    idUser?: true
    idMeja?: true
    metode?: true
    totalProduk?: true
    pajak?: true
    total?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Tb_pemesananCountAggregateInputType = {
    id?: true
    idUser?: true
    idMeja?: true
    metode?: true
    totalProduk?: true
    pajak?: true
    total?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Tb_pemesananAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_pemesanan to aggregate.
     */
    where?: tb_pemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pemesanans to fetch.
     */
    orderBy?: tb_pemesananOrderByWithRelationInput | tb_pemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_pemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pemesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_pemesanans
    **/
    _count?: true | Tb_pemesananCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_pemesananAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_pemesananSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_pemesananMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_pemesananMaxAggregateInputType
  }

  export type GetTb_pemesananAggregateType<T extends Tb_pemesananAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_pemesanan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_pemesanan[P]>
      : GetScalarType<T[P], AggregateTb_pemesanan[P]>
  }




  export type tb_pemesananGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_pemesananWhereInput
    orderBy?: tb_pemesananOrderByWithAggregationInput | tb_pemesananOrderByWithAggregationInput[]
    by: Tb_pemesananScalarFieldEnum[] | Tb_pemesananScalarFieldEnum
    having?: tb_pemesananScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_pemesananCountAggregateInputType | true
    _avg?: Tb_pemesananAvgAggregateInputType
    _sum?: Tb_pemesananSumAggregateInputType
    _min?: Tb_pemesananMinAggregateInputType
    _max?: Tb_pemesananMaxAggregateInputType
  }

  export type Tb_pemesananGroupByOutputType = {
    id: number
    idUser: number
    idMeja: number
    metode: $Enums.metode_pembayaran
    totalProduk: number
    pajak: string
    total: number
    status: $Enums.status_pemesanan
    createdAt: Date
    updatedAt: Date
    _count: Tb_pemesananCountAggregateOutputType | null
    _avg: Tb_pemesananAvgAggregateOutputType | null
    _sum: Tb_pemesananSumAggregateOutputType | null
    _min: Tb_pemesananMinAggregateOutputType | null
    _max: Tb_pemesananMaxAggregateOutputType | null
  }

  type GetTb_pemesananGroupByPayload<T extends tb_pemesananGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_pemesananGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_pemesananGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_pemesananGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_pemesananGroupByOutputType[P]>
        }
      >
    >


  export type tb_pemesananSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idUser?: boolean
    idMeja?: boolean
    metode?: boolean
    totalProduk?: boolean
    pajak?: boolean
    total?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | tb_userDefaultArgs<ExtArgs>
    meja?: boolean | tb_mejaDefaultArgs<ExtArgs>
    pemesanan?: boolean | tb_pemesanan$pemesananArgs<ExtArgs>
    _count?: boolean | Tb_pemesananCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_pemesanan"]>



  export type tb_pemesananSelectScalar = {
    id?: boolean
    idUser?: boolean
    idMeja?: boolean
    metode?: boolean
    totalProduk?: boolean
    pajak?: boolean
    total?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type tb_pemesananOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idUser" | "idMeja" | "metode" | "totalProduk" | "pajak" | "total" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["tb_pemesanan"]>
  export type tb_pemesananInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | tb_userDefaultArgs<ExtArgs>
    meja?: boolean | tb_mejaDefaultArgs<ExtArgs>
    pemesanan?: boolean | tb_pemesanan$pemesananArgs<ExtArgs>
    _count?: boolean | Tb_pemesananCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tb_pemesananPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_pemesanan"
    objects: {
      user: Prisma.$tb_userPayload<ExtArgs>
      meja: Prisma.$tb_mejaPayload<ExtArgs>
      pemesanan: Prisma.$detail_pemesananPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idUser: number
      idMeja: number
      metode: $Enums.metode_pembayaran
      totalProduk: number
      pajak: string
      total: number
      status: $Enums.status_pemesanan
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tb_pemesanan"]>
    composites: {}
  }

  type tb_pemesananGetPayload<S extends boolean | null | undefined | tb_pemesananDefaultArgs> = $Result.GetResult<Prisma.$tb_pemesananPayload, S>

  type tb_pemesananCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_pemesananFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_pemesananCountAggregateInputType | true
    }

  export interface tb_pemesananDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_pemesanan'], meta: { name: 'tb_pemesanan' } }
    /**
     * Find zero or one Tb_pemesanan that matches the filter.
     * @param {tb_pemesananFindUniqueArgs} args - Arguments to find a Tb_pemesanan
     * @example
     * // Get one Tb_pemesanan
     * const tb_pemesanan = await prisma.tb_pemesanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_pemesananFindUniqueArgs>(args: SelectSubset<T, tb_pemesananFindUniqueArgs<ExtArgs>>): Prisma__tb_pemesananClient<$Result.GetResult<Prisma.$tb_pemesananPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_pemesanan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_pemesananFindUniqueOrThrowArgs} args - Arguments to find a Tb_pemesanan
     * @example
     * // Get one Tb_pemesanan
     * const tb_pemesanan = await prisma.tb_pemesanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_pemesananFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_pemesananFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_pemesananClient<$Result.GetResult<Prisma.$tb_pemesananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_pemesanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pemesananFindFirstArgs} args - Arguments to find a Tb_pemesanan
     * @example
     * // Get one Tb_pemesanan
     * const tb_pemesanan = await prisma.tb_pemesanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_pemesananFindFirstArgs>(args?: SelectSubset<T, tb_pemesananFindFirstArgs<ExtArgs>>): Prisma__tb_pemesananClient<$Result.GetResult<Prisma.$tb_pemesananPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_pemesanan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pemesananFindFirstOrThrowArgs} args - Arguments to find a Tb_pemesanan
     * @example
     * // Get one Tb_pemesanan
     * const tb_pemesanan = await prisma.tb_pemesanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_pemesananFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_pemesananFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_pemesananClient<$Result.GetResult<Prisma.$tb_pemesananPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_pemesanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pemesananFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_pemesanans
     * const tb_pemesanans = await prisma.tb_pemesanan.findMany()
     * 
     * // Get first 10 Tb_pemesanans
     * const tb_pemesanans = await prisma.tb_pemesanan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_pemesananWithIdOnly = await prisma.tb_pemesanan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_pemesananFindManyArgs>(args?: SelectSubset<T, tb_pemesananFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_pemesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_pemesanan.
     * @param {tb_pemesananCreateArgs} args - Arguments to create a Tb_pemesanan.
     * @example
     * // Create one Tb_pemesanan
     * const Tb_pemesanan = await prisma.tb_pemesanan.create({
     *   data: {
     *     // ... data to create a Tb_pemesanan
     *   }
     * })
     * 
     */
    create<T extends tb_pemesananCreateArgs>(args: SelectSubset<T, tb_pemesananCreateArgs<ExtArgs>>): Prisma__tb_pemesananClient<$Result.GetResult<Prisma.$tb_pemesananPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_pemesanans.
     * @param {tb_pemesananCreateManyArgs} args - Arguments to create many Tb_pemesanans.
     * @example
     * // Create many Tb_pemesanans
     * const tb_pemesanan = await prisma.tb_pemesanan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_pemesananCreateManyArgs>(args?: SelectSubset<T, tb_pemesananCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_pemesanan.
     * @param {tb_pemesananDeleteArgs} args - Arguments to delete one Tb_pemesanan.
     * @example
     * // Delete one Tb_pemesanan
     * const Tb_pemesanan = await prisma.tb_pemesanan.delete({
     *   where: {
     *     // ... filter to delete one Tb_pemesanan
     *   }
     * })
     * 
     */
    delete<T extends tb_pemesananDeleteArgs>(args: SelectSubset<T, tb_pemesananDeleteArgs<ExtArgs>>): Prisma__tb_pemesananClient<$Result.GetResult<Prisma.$tb_pemesananPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_pemesanan.
     * @param {tb_pemesananUpdateArgs} args - Arguments to update one Tb_pemesanan.
     * @example
     * // Update one Tb_pemesanan
     * const tb_pemesanan = await prisma.tb_pemesanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_pemesananUpdateArgs>(args: SelectSubset<T, tb_pemesananUpdateArgs<ExtArgs>>): Prisma__tb_pemesananClient<$Result.GetResult<Prisma.$tb_pemesananPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_pemesanans.
     * @param {tb_pemesananDeleteManyArgs} args - Arguments to filter Tb_pemesanans to delete.
     * @example
     * // Delete a few Tb_pemesanans
     * const { count } = await prisma.tb_pemesanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_pemesananDeleteManyArgs>(args?: SelectSubset<T, tb_pemesananDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_pemesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pemesananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_pemesanans
     * const tb_pemesanan = await prisma.tb_pemesanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_pemesananUpdateManyArgs>(args: SelectSubset<T, tb_pemesananUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_pemesanan.
     * @param {tb_pemesananUpsertArgs} args - Arguments to update or create a Tb_pemesanan.
     * @example
     * // Update or create a Tb_pemesanan
     * const tb_pemesanan = await prisma.tb_pemesanan.upsert({
     *   create: {
     *     // ... data to create a Tb_pemesanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_pemesanan we want to update
     *   }
     * })
     */
    upsert<T extends tb_pemesananUpsertArgs>(args: SelectSubset<T, tb_pemesananUpsertArgs<ExtArgs>>): Prisma__tb_pemesananClient<$Result.GetResult<Prisma.$tb_pemesananPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_pemesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pemesananCountArgs} args - Arguments to filter Tb_pemesanans to count.
     * @example
     * // Count the number of Tb_pemesanans
     * const count = await prisma.tb_pemesanan.count({
     *   where: {
     *     // ... the filter for the Tb_pemesanans we want to count
     *   }
     * })
    **/
    count<T extends tb_pemesananCountArgs>(
      args?: Subset<T, tb_pemesananCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_pemesananCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_pemesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_pemesananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_pemesananAggregateArgs>(args: Subset<T, Tb_pemesananAggregateArgs>): Prisma.PrismaPromise<GetTb_pemesananAggregateType<T>>

    /**
     * Group by Tb_pemesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pemesananGroupByArgs} args - Group by arguments.
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
      T extends tb_pemesananGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_pemesananGroupByArgs['orderBy'] }
        : { orderBy?: tb_pemesananGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_pemesananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_pemesananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_pemesanan model
   */
  readonly fields: tb_pemesananFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_pemesanan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_pemesananClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends tb_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tb_userDefaultArgs<ExtArgs>>): Prisma__tb_userClient<$Result.GetResult<Prisma.$tb_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    meja<T extends tb_mejaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tb_mejaDefaultArgs<ExtArgs>>): Prisma__tb_mejaClient<$Result.GetResult<Prisma.$tb_mejaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pemesanan<T extends tb_pemesanan$pemesananArgs<ExtArgs> = {}>(args?: Subset<T, tb_pemesanan$pemesananArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_pemesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_pemesanan model
   */
  interface tb_pemesananFieldRefs {
    readonly id: FieldRef<"tb_pemesanan", 'Int'>
    readonly idUser: FieldRef<"tb_pemesanan", 'Int'>
    readonly idMeja: FieldRef<"tb_pemesanan", 'Int'>
    readonly metode: FieldRef<"tb_pemesanan", 'metode_pembayaran'>
    readonly totalProduk: FieldRef<"tb_pemesanan", 'Int'>
    readonly pajak: FieldRef<"tb_pemesanan", 'String'>
    readonly total: FieldRef<"tb_pemesanan", 'Int'>
    readonly status: FieldRef<"tb_pemesanan", 'status_pemesanan'>
    readonly createdAt: FieldRef<"tb_pemesanan", 'DateTime'>
    readonly updatedAt: FieldRef<"tb_pemesanan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tb_pemesanan findUnique
   */
  export type tb_pemesananFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pemesanan
     */
    select?: tb_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pemesanan
     */
    omit?: tb_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_pemesananInclude<ExtArgs> | null
    /**
     * Filter, which tb_pemesanan to fetch.
     */
    where: tb_pemesananWhereUniqueInput
  }

  /**
   * tb_pemesanan findUniqueOrThrow
   */
  export type tb_pemesananFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pemesanan
     */
    select?: tb_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pemesanan
     */
    omit?: tb_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_pemesananInclude<ExtArgs> | null
    /**
     * Filter, which tb_pemesanan to fetch.
     */
    where: tb_pemesananWhereUniqueInput
  }

  /**
   * tb_pemesanan findFirst
   */
  export type tb_pemesananFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pemesanan
     */
    select?: tb_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pemesanan
     */
    omit?: tb_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_pemesananInclude<ExtArgs> | null
    /**
     * Filter, which tb_pemesanan to fetch.
     */
    where?: tb_pemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pemesanans to fetch.
     */
    orderBy?: tb_pemesananOrderByWithRelationInput | tb_pemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_pemesanans.
     */
    cursor?: tb_pemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pemesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_pemesanans.
     */
    distinct?: Tb_pemesananScalarFieldEnum | Tb_pemesananScalarFieldEnum[]
  }

  /**
   * tb_pemesanan findFirstOrThrow
   */
  export type tb_pemesananFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pemesanan
     */
    select?: tb_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pemesanan
     */
    omit?: tb_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_pemesananInclude<ExtArgs> | null
    /**
     * Filter, which tb_pemesanan to fetch.
     */
    where?: tb_pemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pemesanans to fetch.
     */
    orderBy?: tb_pemesananOrderByWithRelationInput | tb_pemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_pemesanans.
     */
    cursor?: tb_pemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pemesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_pemesanans.
     */
    distinct?: Tb_pemesananScalarFieldEnum | Tb_pemesananScalarFieldEnum[]
  }

  /**
   * tb_pemesanan findMany
   */
  export type tb_pemesananFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pemesanan
     */
    select?: tb_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pemesanan
     */
    omit?: tb_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_pemesananInclude<ExtArgs> | null
    /**
     * Filter, which tb_pemesanans to fetch.
     */
    where?: tb_pemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pemesanans to fetch.
     */
    orderBy?: tb_pemesananOrderByWithRelationInput | tb_pemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_pemesanans.
     */
    cursor?: tb_pemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pemesanans.
     */
    skip?: number
    distinct?: Tb_pemesananScalarFieldEnum | Tb_pemesananScalarFieldEnum[]
  }

  /**
   * tb_pemesanan create
   */
  export type tb_pemesananCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pemesanan
     */
    select?: tb_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pemesanan
     */
    omit?: tb_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_pemesananInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_pemesanan.
     */
    data: XOR<tb_pemesananCreateInput, tb_pemesananUncheckedCreateInput>
  }

  /**
   * tb_pemesanan createMany
   */
  export type tb_pemesananCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_pemesanans.
     */
    data: tb_pemesananCreateManyInput | tb_pemesananCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_pemesanan update
   */
  export type tb_pemesananUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pemesanan
     */
    select?: tb_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pemesanan
     */
    omit?: tb_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_pemesananInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_pemesanan.
     */
    data: XOR<tb_pemesananUpdateInput, tb_pemesananUncheckedUpdateInput>
    /**
     * Choose, which tb_pemesanan to update.
     */
    where: tb_pemesananWhereUniqueInput
  }

  /**
   * tb_pemesanan updateMany
   */
  export type tb_pemesananUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_pemesanans.
     */
    data: XOR<tb_pemesananUpdateManyMutationInput, tb_pemesananUncheckedUpdateManyInput>
    /**
     * Filter which tb_pemesanans to update
     */
    where?: tb_pemesananWhereInput
    /**
     * Limit how many tb_pemesanans to update.
     */
    limit?: number
  }

  /**
   * tb_pemesanan upsert
   */
  export type tb_pemesananUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pemesanan
     */
    select?: tb_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pemesanan
     */
    omit?: tb_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_pemesananInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_pemesanan to update in case it exists.
     */
    where: tb_pemesananWhereUniqueInput
    /**
     * In case the tb_pemesanan found by the `where` argument doesn't exist, create a new tb_pemesanan with this data.
     */
    create: XOR<tb_pemesananCreateInput, tb_pemesananUncheckedCreateInput>
    /**
     * In case the tb_pemesanan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_pemesananUpdateInput, tb_pemesananUncheckedUpdateInput>
  }

  /**
   * tb_pemesanan delete
   */
  export type tb_pemesananDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pemesanan
     */
    select?: tb_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pemesanan
     */
    omit?: tb_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_pemesananInclude<ExtArgs> | null
    /**
     * Filter which tb_pemesanan to delete.
     */
    where: tb_pemesananWhereUniqueInput
  }

  /**
   * tb_pemesanan deleteMany
   */
  export type tb_pemesananDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_pemesanans to delete
     */
    where?: tb_pemesananWhereInput
    /**
     * Limit how many tb_pemesanans to delete.
     */
    limit?: number
  }

  /**
   * tb_pemesanan.pemesanan
   */
  export type tb_pemesanan$pemesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_pemesanan
     */
    select?: detail_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_pemesanan
     */
    omit?: detail_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_pemesananInclude<ExtArgs> | null
    where?: detail_pemesananWhereInput
    orderBy?: detail_pemesananOrderByWithRelationInput | detail_pemesananOrderByWithRelationInput[]
    cursor?: detail_pemesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detail_pemesananScalarFieldEnum | Detail_pemesananScalarFieldEnum[]
  }

  /**
   * tb_pemesanan without action
   */
  export type tb_pemesananDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pemesanan
     */
    select?: tb_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_pemesanan
     */
    omit?: tb_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_pemesananInclude<ExtArgs> | null
  }


  /**
   * Model detail_pemesanan
   */

  export type AggregateDetail_pemesanan = {
    _count: Detail_pemesananCountAggregateOutputType | null
    _avg: Detail_pemesananAvgAggregateOutputType | null
    _sum: Detail_pemesananSumAggregateOutputType | null
    _min: Detail_pemesananMinAggregateOutputType | null
    _max: Detail_pemesananMaxAggregateOutputType | null
  }

  export type Detail_pemesananAvgAggregateOutputType = {
    id: number | null
    idPemesanan: number | null
    idKeranjang: number | null
  }

  export type Detail_pemesananSumAggregateOutputType = {
    id: number | null
    idPemesanan: number | null
    idKeranjang: number | null
  }

  export type Detail_pemesananMinAggregateOutputType = {
    id: number | null
    idPemesanan: number | null
    idKeranjang: number | null
    note: string | null
    createdAt: Date | null
  }

  export type Detail_pemesananMaxAggregateOutputType = {
    id: number | null
    idPemesanan: number | null
    idKeranjang: number | null
    note: string | null
    createdAt: Date | null
  }

  export type Detail_pemesananCountAggregateOutputType = {
    id: number
    idPemesanan: number
    idKeranjang: number
    note: number
    createdAt: number
    _all: number
  }


  export type Detail_pemesananAvgAggregateInputType = {
    id?: true
    idPemesanan?: true
    idKeranjang?: true
  }

  export type Detail_pemesananSumAggregateInputType = {
    id?: true
    idPemesanan?: true
    idKeranjang?: true
  }

  export type Detail_pemesananMinAggregateInputType = {
    id?: true
    idPemesanan?: true
    idKeranjang?: true
    note?: true
    createdAt?: true
  }

  export type Detail_pemesananMaxAggregateInputType = {
    id?: true
    idPemesanan?: true
    idKeranjang?: true
    note?: true
    createdAt?: true
  }

  export type Detail_pemesananCountAggregateInputType = {
    id?: true
    idPemesanan?: true
    idKeranjang?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type Detail_pemesananAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detail_pemesanan to aggregate.
     */
    where?: detail_pemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_pemesanans to fetch.
     */
    orderBy?: detail_pemesananOrderByWithRelationInput | detail_pemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detail_pemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_pemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_pemesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detail_pemesanans
    **/
    _count?: true | Detail_pemesananCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detail_pemesananAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detail_pemesananSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detail_pemesananMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detail_pemesananMaxAggregateInputType
  }

  export type GetDetail_pemesananAggregateType<T extends Detail_pemesananAggregateArgs> = {
        [P in keyof T & keyof AggregateDetail_pemesanan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetail_pemesanan[P]>
      : GetScalarType<T[P], AggregateDetail_pemesanan[P]>
  }




  export type detail_pemesananGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_pemesananWhereInput
    orderBy?: detail_pemesananOrderByWithAggregationInput | detail_pemesananOrderByWithAggregationInput[]
    by: Detail_pemesananScalarFieldEnum[] | Detail_pemesananScalarFieldEnum
    having?: detail_pemesananScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detail_pemesananCountAggregateInputType | true
    _avg?: Detail_pemesananAvgAggregateInputType
    _sum?: Detail_pemesananSumAggregateInputType
    _min?: Detail_pemesananMinAggregateInputType
    _max?: Detail_pemesananMaxAggregateInputType
  }

  export type Detail_pemesananGroupByOutputType = {
    id: number
    idPemesanan: number
    idKeranjang: number
    note: string
    createdAt: Date
    _count: Detail_pemesananCountAggregateOutputType | null
    _avg: Detail_pemesananAvgAggregateOutputType | null
    _sum: Detail_pemesananSumAggregateOutputType | null
    _min: Detail_pemesananMinAggregateOutputType | null
    _max: Detail_pemesananMaxAggregateOutputType | null
  }

  type GetDetail_pemesananGroupByPayload<T extends detail_pemesananGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detail_pemesananGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detail_pemesananGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detail_pemesananGroupByOutputType[P]>
            : GetScalarType<T[P], Detail_pemesananGroupByOutputType[P]>
        }
      >
    >


  export type detail_pemesananSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPemesanan?: boolean
    idKeranjang?: boolean
    note?: boolean
    createdAt?: boolean
    pemesanan?: boolean | tb_pemesananDefaultArgs<ExtArgs>
    keranjang?: boolean | tb_keranjangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detail_pemesanan"]>



  export type detail_pemesananSelectScalar = {
    id?: boolean
    idPemesanan?: boolean
    idKeranjang?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type detail_pemesananOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idPemesanan" | "idKeranjang" | "note" | "createdAt", ExtArgs["result"]["detail_pemesanan"]>
  export type detail_pemesananInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pemesanan?: boolean | tb_pemesananDefaultArgs<ExtArgs>
    keranjang?: boolean | tb_keranjangDefaultArgs<ExtArgs>
  }

  export type $detail_pemesananPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detail_pemesanan"
    objects: {
      pemesanan: Prisma.$tb_pemesananPayload<ExtArgs>
      keranjang: Prisma.$tb_keranjangPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idPemesanan: number
      idKeranjang: number
      note: string
      createdAt: Date
    }, ExtArgs["result"]["detail_pemesanan"]>
    composites: {}
  }

  type detail_pemesananGetPayload<S extends boolean | null | undefined | detail_pemesananDefaultArgs> = $Result.GetResult<Prisma.$detail_pemesananPayload, S>

  type detail_pemesananCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detail_pemesananFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detail_pemesananCountAggregateInputType | true
    }

  export interface detail_pemesananDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detail_pemesanan'], meta: { name: 'detail_pemesanan' } }
    /**
     * Find zero or one Detail_pemesanan that matches the filter.
     * @param {detail_pemesananFindUniqueArgs} args - Arguments to find a Detail_pemesanan
     * @example
     * // Get one Detail_pemesanan
     * const detail_pemesanan = await prisma.detail_pemesanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detail_pemesananFindUniqueArgs>(args: SelectSubset<T, detail_pemesananFindUniqueArgs<ExtArgs>>): Prisma__detail_pemesananClient<$Result.GetResult<Prisma.$detail_pemesananPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detail_pemesanan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detail_pemesananFindUniqueOrThrowArgs} args - Arguments to find a Detail_pemesanan
     * @example
     * // Get one Detail_pemesanan
     * const detail_pemesanan = await prisma.detail_pemesanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detail_pemesananFindUniqueOrThrowArgs>(args: SelectSubset<T, detail_pemesananFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detail_pemesananClient<$Result.GetResult<Prisma.$detail_pemesananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detail_pemesanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_pemesananFindFirstArgs} args - Arguments to find a Detail_pemesanan
     * @example
     * // Get one Detail_pemesanan
     * const detail_pemesanan = await prisma.detail_pemesanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detail_pemesananFindFirstArgs>(args?: SelectSubset<T, detail_pemesananFindFirstArgs<ExtArgs>>): Prisma__detail_pemesananClient<$Result.GetResult<Prisma.$detail_pemesananPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detail_pemesanan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_pemesananFindFirstOrThrowArgs} args - Arguments to find a Detail_pemesanan
     * @example
     * // Get one Detail_pemesanan
     * const detail_pemesanan = await prisma.detail_pemesanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detail_pemesananFindFirstOrThrowArgs>(args?: SelectSubset<T, detail_pemesananFindFirstOrThrowArgs<ExtArgs>>): Prisma__detail_pemesananClient<$Result.GetResult<Prisma.$detail_pemesananPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detail_pemesanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_pemesananFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detail_pemesanans
     * const detail_pemesanans = await prisma.detail_pemesanan.findMany()
     * 
     * // Get first 10 Detail_pemesanans
     * const detail_pemesanans = await prisma.detail_pemesanan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detail_pemesananWithIdOnly = await prisma.detail_pemesanan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends detail_pemesananFindManyArgs>(args?: SelectSubset<T, detail_pemesananFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_pemesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detail_pemesanan.
     * @param {detail_pemesananCreateArgs} args - Arguments to create a Detail_pemesanan.
     * @example
     * // Create one Detail_pemesanan
     * const Detail_pemesanan = await prisma.detail_pemesanan.create({
     *   data: {
     *     // ... data to create a Detail_pemesanan
     *   }
     * })
     * 
     */
    create<T extends detail_pemesananCreateArgs>(args: SelectSubset<T, detail_pemesananCreateArgs<ExtArgs>>): Prisma__detail_pemesananClient<$Result.GetResult<Prisma.$detail_pemesananPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detail_pemesanans.
     * @param {detail_pemesananCreateManyArgs} args - Arguments to create many Detail_pemesanans.
     * @example
     * // Create many Detail_pemesanans
     * const detail_pemesanan = await prisma.detail_pemesanan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detail_pemesananCreateManyArgs>(args?: SelectSubset<T, detail_pemesananCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Detail_pemesanan.
     * @param {detail_pemesananDeleteArgs} args - Arguments to delete one Detail_pemesanan.
     * @example
     * // Delete one Detail_pemesanan
     * const Detail_pemesanan = await prisma.detail_pemesanan.delete({
     *   where: {
     *     // ... filter to delete one Detail_pemesanan
     *   }
     * })
     * 
     */
    delete<T extends detail_pemesananDeleteArgs>(args: SelectSubset<T, detail_pemesananDeleteArgs<ExtArgs>>): Prisma__detail_pemesananClient<$Result.GetResult<Prisma.$detail_pemesananPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detail_pemesanan.
     * @param {detail_pemesananUpdateArgs} args - Arguments to update one Detail_pemesanan.
     * @example
     * // Update one Detail_pemesanan
     * const detail_pemesanan = await prisma.detail_pemesanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detail_pemesananUpdateArgs>(args: SelectSubset<T, detail_pemesananUpdateArgs<ExtArgs>>): Prisma__detail_pemesananClient<$Result.GetResult<Prisma.$detail_pemesananPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detail_pemesanans.
     * @param {detail_pemesananDeleteManyArgs} args - Arguments to filter Detail_pemesanans to delete.
     * @example
     * // Delete a few Detail_pemesanans
     * const { count } = await prisma.detail_pemesanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detail_pemesananDeleteManyArgs>(args?: SelectSubset<T, detail_pemesananDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detail_pemesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_pemesananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detail_pemesanans
     * const detail_pemesanan = await prisma.detail_pemesanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detail_pemesananUpdateManyArgs>(args: SelectSubset<T, detail_pemesananUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Detail_pemesanan.
     * @param {detail_pemesananUpsertArgs} args - Arguments to update or create a Detail_pemesanan.
     * @example
     * // Update or create a Detail_pemesanan
     * const detail_pemesanan = await prisma.detail_pemesanan.upsert({
     *   create: {
     *     // ... data to create a Detail_pemesanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detail_pemesanan we want to update
     *   }
     * })
     */
    upsert<T extends detail_pemesananUpsertArgs>(args: SelectSubset<T, detail_pemesananUpsertArgs<ExtArgs>>): Prisma__detail_pemesananClient<$Result.GetResult<Prisma.$detail_pemesananPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detail_pemesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_pemesananCountArgs} args - Arguments to filter Detail_pemesanans to count.
     * @example
     * // Count the number of Detail_pemesanans
     * const count = await prisma.detail_pemesanan.count({
     *   where: {
     *     // ... the filter for the Detail_pemesanans we want to count
     *   }
     * })
    **/
    count<T extends detail_pemesananCountArgs>(
      args?: Subset<T, detail_pemesananCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detail_pemesananCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detail_pemesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detail_pemesananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Detail_pemesananAggregateArgs>(args: Subset<T, Detail_pemesananAggregateArgs>): Prisma.PrismaPromise<GetDetail_pemesananAggregateType<T>>

    /**
     * Group by Detail_pemesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_pemesananGroupByArgs} args - Group by arguments.
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
      T extends detail_pemesananGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detail_pemesananGroupByArgs['orderBy'] }
        : { orderBy?: detail_pemesananGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, detail_pemesananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetail_pemesananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detail_pemesanan model
   */
  readonly fields: detail_pemesananFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detail_pemesanan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detail_pemesananClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pemesanan<T extends tb_pemesananDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tb_pemesananDefaultArgs<ExtArgs>>): Prisma__tb_pemesananClient<$Result.GetResult<Prisma.$tb_pemesananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    keranjang<T extends tb_keranjangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tb_keranjangDefaultArgs<ExtArgs>>): Prisma__tb_keranjangClient<$Result.GetResult<Prisma.$tb_keranjangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the detail_pemesanan model
   */
  interface detail_pemesananFieldRefs {
    readonly id: FieldRef<"detail_pemesanan", 'Int'>
    readonly idPemesanan: FieldRef<"detail_pemesanan", 'Int'>
    readonly idKeranjang: FieldRef<"detail_pemesanan", 'Int'>
    readonly note: FieldRef<"detail_pemesanan", 'String'>
    readonly createdAt: FieldRef<"detail_pemesanan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * detail_pemesanan findUnique
   */
  export type detail_pemesananFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_pemesanan
     */
    select?: detail_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_pemesanan
     */
    omit?: detail_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_pemesananInclude<ExtArgs> | null
    /**
     * Filter, which detail_pemesanan to fetch.
     */
    where: detail_pemesananWhereUniqueInput
  }

  /**
   * detail_pemesanan findUniqueOrThrow
   */
  export type detail_pemesananFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_pemesanan
     */
    select?: detail_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_pemesanan
     */
    omit?: detail_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_pemesananInclude<ExtArgs> | null
    /**
     * Filter, which detail_pemesanan to fetch.
     */
    where: detail_pemesananWhereUniqueInput
  }

  /**
   * detail_pemesanan findFirst
   */
  export type detail_pemesananFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_pemesanan
     */
    select?: detail_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_pemesanan
     */
    omit?: detail_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_pemesananInclude<ExtArgs> | null
    /**
     * Filter, which detail_pemesanan to fetch.
     */
    where?: detail_pemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_pemesanans to fetch.
     */
    orderBy?: detail_pemesananOrderByWithRelationInput | detail_pemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detail_pemesanans.
     */
    cursor?: detail_pemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_pemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_pemesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detail_pemesanans.
     */
    distinct?: Detail_pemesananScalarFieldEnum | Detail_pemesananScalarFieldEnum[]
  }

  /**
   * detail_pemesanan findFirstOrThrow
   */
  export type detail_pemesananFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_pemesanan
     */
    select?: detail_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_pemesanan
     */
    omit?: detail_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_pemesananInclude<ExtArgs> | null
    /**
     * Filter, which detail_pemesanan to fetch.
     */
    where?: detail_pemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_pemesanans to fetch.
     */
    orderBy?: detail_pemesananOrderByWithRelationInput | detail_pemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detail_pemesanans.
     */
    cursor?: detail_pemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_pemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_pemesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detail_pemesanans.
     */
    distinct?: Detail_pemesananScalarFieldEnum | Detail_pemesananScalarFieldEnum[]
  }

  /**
   * detail_pemesanan findMany
   */
  export type detail_pemesananFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_pemesanan
     */
    select?: detail_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_pemesanan
     */
    omit?: detail_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_pemesananInclude<ExtArgs> | null
    /**
     * Filter, which detail_pemesanans to fetch.
     */
    where?: detail_pemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_pemesanans to fetch.
     */
    orderBy?: detail_pemesananOrderByWithRelationInput | detail_pemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detail_pemesanans.
     */
    cursor?: detail_pemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_pemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_pemesanans.
     */
    skip?: number
    distinct?: Detail_pemesananScalarFieldEnum | Detail_pemesananScalarFieldEnum[]
  }

  /**
   * detail_pemesanan create
   */
  export type detail_pemesananCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_pemesanan
     */
    select?: detail_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_pemesanan
     */
    omit?: detail_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_pemesananInclude<ExtArgs> | null
    /**
     * The data needed to create a detail_pemesanan.
     */
    data: XOR<detail_pemesananCreateInput, detail_pemesananUncheckedCreateInput>
  }

  /**
   * detail_pemesanan createMany
   */
  export type detail_pemesananCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detail_pemesanans.
     */
    data: detail_pemesananCreateManyInput | detail_pemesananCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detail_pemesanan update
   */
  export type detail_pemesananUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_pemesanan
     */
    select?: detail_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_pemesanan
     */
    omit?: detail_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_pemesananInclude<ExtArgs> | null
    /**
     * The data needed to update a detail_pemesanan.
     */
    data: XOR<detail_pemesananUpdateInput, detail_pemesananUncheckedUpdateInput>
    /**
     * Choose, which detail_pemesanan to update.
     */
    where: detail_pemesananWhereUniqueInput
  }

  /**
   * detail_pemesanan updateMany
   */
  export type detail_pemesananUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detail_pemesanans.
     */
    data: XOR<detail_pemesananUpdateManyMutationInput, detail_pemesananUncheckedUpdateManyInput>
    /**
     * Filter which detail_pemesanans to update
     */
    where?: detail_pemesananWhereInput
    /**
     * Limit how many detail_pemesanans to update.
     */
    limit?: number
  }

  /**
   * detail_pemesanan upsert
   */
  export type detail_pemesananUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_pemesanan
     */
    select?: detail_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_pemesanan
     */
    omit?: detail_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_pemesananInclude<ExtArgs> | null
    /**
     * The filter to search for the detail_pemesanan to update in case it exists.
     */
    where: detail_pemesananWhereUniqueInput
    /**
     * In case the detail_pemesanan found by the `where` argument doesn't exist, create a new detail_pemesanan with this data.
     */
    create: XOR<detail_pemesananCreateInput, detail_pemesananUncheckedCreateInput>
    /**
     * In case the detail_pemesanan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detail_pemesananUpdateInput, detail_pemesananUncheckedUpdateInput>
  }

  /**
   * detail_pemesanan delete
   */
  export type detail_pemesananDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_pemesanan
     */
    select?: detail_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_pemesanan
     */
    omit?: detail_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_pemesananInclude<ExtArgs> | null
    /**
     * Filter which detail_pemesanan to delete.
     */
    where: detail_pemesananWhereUniqueInput
  }

  /**
   * detail_pemesanan deleteMany
   */
  export type detail_pemesananDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detail_pemesanans to delete
     */
    where?: detail_pemesananWhereInput
    /**
     * Limit how many detail_pemesanans to delete.
     */
    limit?: number
  }

  /**
   * detail_pemesanan without action
   */
  export type detail_pemesananDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_pemesanan
     */
    select?: detail_pemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_pemesanan
     */
    omit?: detail_pemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_pemesananInclude<ExtArgs> | null
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


  export const Tb_menuScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    deskripsi: 'deskripsi',
    harga: 'harga',
    kategori: 'kategori',
    gambar_menu: 'gambar_menu',
    ketersediaan: 'ketersediaan'
  };

  export type Tb_menuScalarFieldEnum = (typeof Tb_menuScalarFieldEnum)[keyof typeof Tb_menuScalarFieldEnum]


  export const Tb_userScalarFieldEnum: {
    id: 'id',
    namaLengkap: 'namaLengkap',
    username: 'username',
    noHp: 'noHp',
    email: 'email',
    alamat: 'alamat',
    password: 'password',
    role: 'role'
  };

  export type Tb_userScalarFieldEnum = (typeof Tb_userScalarFieldEnum)[keyof typeof Tb_userScalarFieldEnum]


  export const Tb_keranjangScalarFieldEnum: {
    id: 'id',
    idUser: 'idUser',
    idMenu: 'idMenu',
    quantity: 'quantity',
    total: 'total',
    status: 'status'
  };

  export type Tb_keranjangScalarFieldEnum = (typeof Tb_keranjangScalarFieldEnum)[keyof typeof Tb_keranjangScalarFieldEnum]


  export const Tb_mejaScalarFieldEnum: {
    id: 'id',
    namaMeja: 'namaMeja'
  };

  export type Tb_mejaScalarFieldEnum = (typeof Tb_mejaScalarFieldEnum)[keyof typeof Tb_mejaScalarFieldEnum]


  export const Tb_pemesananScalarFieldEnum: {
    id: 'id',
    idUser: 'idUser',
    idMeja: 'idMeja',
    metode: 'metode',
    totalProduk: 'totalProduk',
    pajak: 'pajak',
    total: 'total',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Tb_pemesananScalarFieldEnum = (typeof Tb_pemesananScalarFieldEnum)[keyof typeof Tb_pemesananScalarFieldEnum]


  export const Detail_pemesananScalarFieldEnum: {
    id: 'id',
    idPemesanan: 'idPemesanan',
    idKeranjang: 'idKeranjang',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type Detail_pemesananScalarFieldEnum = (typeof Detail_pemesananScalarFieldEnum)[keyof typeof Detail_pemesananScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const tb_menuOrderByRelevanceFieldEnum: {
    nama: 'nama',
    deskripsi: 'deskripsi',
    gambar_menu: 'gambar_menu'
  };

  export type tb_menuOrderByRelevanceFieldEnum = (typeof tb_menuOrderByRelevanceFieldEnum)[keyof typeof tb_menuOrderByRelevanceFieldEnum]


  export const tb_userOrderByRelevanceFieldEnum: {
    namaLengkap: 'namaLengkap',
    username: 'username',
    noHp: 'noHp',
    email: 'email',
    alamat: 'alamat',
    password: 'password'
  };

  export type tb_userOrderByRelevanceFieldEnum = (typeof tb_userOrderByRelevanceFieldEnum)[keyof typeof tb_userOrderByRelevanceFieldEnum]


  export const tb_mejaOrderByRelevanceFieldEnum: {
    namaMeja: 'namaMeja'
  };

  export type tb_mejaOrderByRelevanceFieldEnum = (typeof tb_mejaOrderByRelevanceFieldEnum)[keyof typeof tb_mejaOrderByRelevanceFieldEnum]


  export const tb_pemesananOrderByRelevanceFieldEnum: {
    pajak: 'pajak'
  };

  export type tb_pemesananOrderByRelevanceFieldEnum = (typeof tb_pemesananOrderByRelevanceFieldEnum)[keyof typeof tb_pemesananOrderByRelevanceFieldEnum]


  export const detail_pemesananOrderByRelevanceFieldEnum: {
    note: 'note'
  };

  export type detail_pemesananOrderByRelevanceFieldEnum = (typeof detail_pemesananOrderByRelevanceFieldEnum)[keyof typeof detail_pemesananOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'kategori'
   */
  export type EnumkategoriFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'kategori'>
    


  /**
   * Reference to a field of type 'ketersediaan'
   */
  export type EnumketersediaanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ketersediaan'>
    


  /**
   * Reference to a field of type 'role'
   */
  export type EnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role'>
    


  /**
   * Reference to a field of type 'status'
   */
  export type EnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status'>
    


  /**
   * Reference to a field of type 'metode_pembayaran'
   */
  export type Enummetode_pembayaranFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'metode_pembayaran'>
    


  /**
   * Reference to a field of type 'status_pemesanan'
   */
  export type Enumstatus_pemesananFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_pemesanan'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type tb_menuWhereInput = {
    AND?: tb_menuWhereInput | tb_menuWhereInput[]
    OR?: tb_menuWhereInput[]
    NOT?: tb_menuWhereInput | tb_menuWhereInput[]
    id?: IntFilter<"tb_menu"> | number
    nama?: StringFilter<"tb_menu"> | string
    deskripsi?: StringFilter<"tb_menu"> | string
    harga?: IntFilter<"tb_menu"> | number
    kategori?: EnumkategoriFilter<"tb_menu"> | $Enums.kategori
    gambar_menu?: StringFilter<"tb_menu"> | string
    ketersediaan?: EnumketersediaanFilter<"tb_menu"> | $Enums.ketersediaan
    keranjang?: Tb_keranjangListRelationFilter
  }

  export type tb_menuOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    kategori?: SortOrder
    gambar_menu?: SortOrder
    ketersediaan?: SortOrder
    keranjang?: tb_keranjangOrderByRelationAggregateInput
    _relevance?: tb_menuOrderByRelevanceInput
  }

  export type tb_menuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_menuWhereInput | tb_menuWhereInput[]
    OR?: tb_menuWhereInput[]
    NOT?: tb_menuWhereInput | tb_menuWhereInput[]
    nama?: StringFilter<"tb_menu"> | string
    deskripsi?: StringFilter<"tb_menu"> | string
    harga?: IntFilter<"tb_menu"> | number
    kategori?: EnumkategoriFilter<"tb_menu"> | $Enums.kategori
    gambar_menu?: StringFilter<"tb_menu"> | string
    ketersediaan?: EnumketersediaanFilter<"tb_menu"> | $Enums.ketersediaan
    keranjang?: Tb_keranjangListRelationFilter
  }, "id" | "id">

  export type tb_menuOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    kategori?: SortOrder
    gambar_menu?: SortOrder
    ketersediaan?: SortOrder
    _count?: tb_menuCountOrderByAggregateInput
    _avg?: tb_menuAvgOrderByAggregateInput
    _max?: tb_menuMaxOrderByAggregateInput
    _min?: tb_menuMinOrderByAggregateInput
    _sum?: tb_menuSumOrderByAggregateInput
  }

  export type tb_menuScalarWhereWithAggregatesInput = {
    AND?: tb_menuScalarWhereWithAggregatesInput | tb_menuScalarWhereWithAggregatesInput[]
    OR?: tb_menuScalarWhereWithAggregatesInput[]
    NOT?: tb_menuScalarWhereWithAggregatesInput | tb_menuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_menu"> | number
    nama?: StringWithAggregatesFilter<"tb_menu"> | string
    deskripsi?: StringWithAggregatesFilter<"tb_menu"> | string
    harga?: IntWithAggregatesFilter<"tb_menu"> | number
    kategori?: EnumkategoriWithAggregatesFilter<"tb_menu"> | $Enums.kategori
    gambar_menu?: StringWithAggregatesFilter<"tb_menu"> | string
    ketersediaan?: EnumketersediaanWithAggregatesFilter<"tb_menu"> | $Enums.ketersediaan
  }

  export type tb_userWhereInput = {
    AND?: tb_userWhereInput | tb_userWhereInput[]
    OR?: tb_userWhereInput[]
    NOT?: tb_userWhereInput | tb_userWhereInput[]
    id?: IntFilter<"tb_user"> | number
    namaLengkap?: StringFilter<"tb_user"> | string
    username?: StringFilter<"tb_user"> | string
    noHp?: StringFilter<"tb_user"> | string
    email?: StringFilter<"tb_user"> | string
    alamat?: StringFilter<"tb_user"> | string
    password?: StringFilter<"tb_user"> | string
    role?: EnumroleFilter<"tb_user"> | $Enums.role
    keranjang?: Tb_keranjangListRelationFilter
    pemesanan?: Tb_pemesananListRelationFilter
  }

  export type tb_userOrderByWithRelationInput = {
    id?: SortOrder
    namaLengkap?: SortOrder
    username?: SortOrder
    noHp?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    password?: SortOrder
    role?: SortOrder
    keranjang?: tb_keranjangOrderByRelationAggregateInput
    pemesanan?: tb_pemesananOrderByRelationAggregateInput
    _relevance?: tb_userOrderByRelevanceInput
  }

  export type tb_userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_userWhereInput | tb_userWhereInput[]
    OR?: tb_userWhereInput[]
    NOT?: tb_userWhereInput | tb_userWhereInput[]
    namaLengkap?: StringFilter<"tb_user"> | string
    username?: StringFilter<"tb_user"> | string
    noHp?: StringFilter<"tb_user"> | string
    email?: StringFilter<"tb_user"> | string
    alamat?: StringFilter<"tb_user"> | string
    password?: StringFilter<"tb_user"> | string
    role?: EnumroleFilter<"tb_user"> | $Enums.role
    keranjang?: Tb_keranjangListRelationFilter
    pemesanan?: Tb_pemesananListRelationFilter
  }, "id" | "id">

  export type tb_userOrderByWithAggregationInput = {
    id?: SortOrder
    namaLengkap?: SortOrder
    username?: SortOrder
    noHp?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: tb_userCountOrderByAggregateInput
    _avg?: tb_userAvgOrderByAggregateInput
    _max?: tb_userMaxOrderByAggregateInput
    _min?: tb_userMinOrderByAggregateInput
    _sum?: tb_userSumOrderByAggregateInput
  }

  export type tb_userScalarWhereWithAggregatesInput = {
    AND?: tb_userScalarWhereWithAggregatesInput | tb_userScalarWhereWithAggregatesInput[]
    OR?: tb_userScalarWhereWithAggregatesInput[]
    NOT?: tb_userScalarWhereWithAggregatesInput | tb_userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_user"> | number
    namaLengkap?: StringWithAggregatesFilter<"tb_user"> | string
    username?: StringWithAggregatesFilter<"tb_user"> | string
    noHp?: StringWithAggregatesFilter<"tb_user"> | string
    email?: StringWithAggregatesFilter<"tb_user"> | string
    alamat?: StringWithAggregatesFilter<"tb_user"> | string
    password?: StringWithAggregatesFilter<"tb_user"> | string
    role?: EnumroleWithAggregatesFilter<"tb_user"> | $Enums.role
  }

  export type tb_keranjangWhereInput = {
    AND?: tb_keranjangWhereInput | tb_keranjangWhereInput[]
    OR?: tb_keranjangWhereInput[]
    NOT?: tb_keranjangWhereInput | tb_keranjangWhereInput[]
    id?: IntFilter<"tb_keranjang"> | number
    idUser?: IntFilter<"tb_keranjang"> | number
    idMenu?: IntFilter<"tb_keranjang"> | number
    quantity?: IntFilter<"tb_keranjang"> | number
    total?: IntFilter<"tb_keranjang"> | number
    status?: EnumstatusFilter<"tb_keranjang"> | $Enums.status
    user?: XOR<Tb_userScalarRelationFilter, tb_userWhereInput>
    menu?: XOR<Tb_menuScalarRelationFilter, tb_menuWhereInput>
    keranjang?: Detail_pemesananListRelationFilter
  }

  export type tb_keranjangOrderByWithRelationInput = {
    id?: SortOrder
    idUser?: SortOrder
    idMenu?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    status?: SortOrder
    user?: tb_userOrderByWithRelationInput
    menu?: tb_menuOrderByWithRelationInput
    keranjang?: detail_pemesananOrderByRelationAggregateInput
  }

  export type tb_keranjangWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_keranjangWhereInput | tb_keranjangWhereInput[]
    OR?: tb_keranjangWhereInput[]
    NOT?: tb_keranjangWhereInput | tb_keranjangWhereInput[]
    idUser?: IntFilter<"tb_keranjang"> | number
    idMenu?: IntFilter<"tb_keranjang"> | number
    quantity?: IntFilter<"tb_keranjang"> | number
    total?: IntFilter<"tb_keranjang"> | number
    status?: EnumstatusFilter<"tb_keranjang"> | $Enums.status
    user?: XOR<Tb_userScalarRelationFilter, tb_userWhereInput>
    menu?: XOR<Tb_menuScalarRelationFilter, tb_menuWhereInput>
    keranjang?: Detail_pemesananListRelationFilter
  }, "id" | "id">

  export type tb_keranjangOrderByWithAggregationInput = {
    id?: SortOrder
    idUser?: SortOrder
    idMenu?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    status?: SortOrder
    _count?: tb_keranjangCountOrderByAggregateInput
    _avg?: tb_keranjangAvgOrderByAggregateInput
    _max?: tb_keranjangMaxOrderByAggregateInput
    _min?: tb_keranjangMinOrderByAggregateInput
    _sum?: tb_keranjangSumOrderByAggregateInput
  }

  export type tb_keranjangScalarWhereWithAggregatesInput = {
    AND?: tb_keranjangScalarWhereWithAggregatesInput | tb_keranjangScalarWhereWithAggregatesInput[]
    OR?: tb_keranjangScalarWhereWithAggregatesInput[]
    NOT?: tb_keranjangScalarWhereWithAggregatesInput | tb_keranjangScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_keranjang"> | number
    idUser?: IntWithAggregatesFilter<"tb_keranjang"> | number
    idMenu?: IntWithAggregatesFilter<"tb_keranjang"> | number
    quantity?: IntWithAggregatesFilter<"tb_keranjang"> | number
    total?: IntWithAggregatesFilter<"tb_keranjang"> | number
    status?: EnumstatusWithAggregatesFilter<"tb_keranjang"> | $Enums.status
  }

  export type tb_mejaWhereInput = {
    AND?: tb_mejaWhereInput | tb_mejaWhereInput[]
    OR?: tb_mejaWhereInput[]
    NOT?: tb_mejaWhereInput | tb_mejaWhereInput[]
    id?: IntFilter<"tb_meja"> | number
    namaMeja?: StringFilter<"tb_meja"> | string
    meja?: Tb_pemesananListRelationFilter
  }

  export type tb_mejaOrderByWithRelationInput = {
    id?: SortOrder
    namaMeja?: SortOrder
    meja?: tb_pemesananOrderByRelationAggregateInput
    _relevance?: tb_mejaOrderByRelevanceInput
  }

  export type tb_mejaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_mejaWhereInput | tb_mejaWhereInput[]
    OR?: tb_mejaWhereInput[]
    NOT?: tb_mejaWhereInput | tb_mejaWhereInput[]
    namaMeja?: StringFilter<"tb_meja"> | string
    meja?: Tb_pemesananListRelationFilter
  }, "id" | "id">

  export type tb_mejaOrderByWithAggregationInput = {
    id?: SortOrder
    namaMeja?: SortOrder
    _count?: tb_mejaCountOrderByAggregateInput
    _avg?: tb_mejaAvgOrderByAggregateInput
    _max?: tb_mejaMaxOrderByAggregateInput
    _min?: tb_mejaMinOrderByAggregateInput
    _sum?: tb_mejaSumOrderByAggregateInput
  }

  export type tb_mejaScalarWhereWithAggregatesInput = {
    AND?: tb_mejaScalarWhereWithAggregatesInput | tb_mejaScalarWhereWithAggregatesInput[]
    OR?: tb_mejaScalarWhereWithAggregatesInput[]
    NOT?: tb_mejaScalarWhereWithAggregatesInput | tb_mejaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_meja"> | number
    namaMeja?: StringWithAggregatesFilter<"tb_meja"> | string
  }

  export type tb_pemesananWhereInput = {
    AND?: tb_pemesananWhereInput | tb_pemesananWhereInput[]
    OR?: tb_pemesananWhereInput[]
    NOT?: tb_pemesananWhereInput | tb_pemesananWhereInput[]
    id?: IntFilter<"tb_pemesanan"> | number
    idUser?: IntFilter<"tb_pemesanan"> | number
    idMeja?: IntFilter<"tb_pemesanan"> | number
    metode?: Enummetode_pembayaranFilter<"tb_pemesanan"> | $Enums.metode_pembayaran
    totalProduk?: IntFilter<"tb_pemesanan"> | number
    pajak?: StringFilter<"tb_pemesanan"> | string
    total?: IntFilter<"tb_pemesanan"> | number
    status?: Enumstatus_pemesananFilter<"tb_pemesanan"> | $Enums.status_pemesanan
    createdAt?: DateTimeFilter<"tb_pemesanan"> | Date | string
    updatedAt?: DateTimeFilter<"tb_pemesanan"> | Date | string
    user?: XOR<Tb_userScalarRelationFilter, tb_userWhereInput>
    meja?: XOR<Tb_mejaScalarRelationFilter, tb_mejaWhereInput>
    pemesanan?: Detail_pemesananListRelationFilter
  }

  export type tb_pemesananOrderByWithRelationInput = {
    id?: SortOrder
    idUser?: SortOrder
    idMeja?: SortOrder
    metode?: SortOrder
    totalProduk?: SortOrder
    pajak?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: tb_userOrderByWithRelationInput
    meja?: tb_mejaOrderByWithRelationInput
    pemesanan?: detail_pemesananOrderByRelationAggregateInput
    _relevance?: tb_pemesananOrderByRelevanceInput
  }

  export type tb_pemesananWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_pemesananWhereInput | tb_pemesananWhereInput[]
    OR?: tb_pemesananWhereInput[]
    NOT?: tb_pemesananWhereInput | tb_pemesananWhereInput[]
    idUser?: IntFilter<"tb_pemesanan"> | number
    idMeja?: IntFilter<"tb_pemesanan"> | number
    metode?: Enummetode_pembayaranFilter<"tb_pemesanan"> | $Enums.metode_pembayaran
    totalProduk?: IntFilter<"tb_pemesanan"> | number
    pajak?: StringFilter<"tb_pemesanan"> | string
    total?: IntFilter<"tb_pemesanan"> | number
    status?: Enumstatus_pemesananFilter<"tb_pemesanan"> | $Enums.status_pemesanan
    createdAt?: DateTimeFilter<"tb_pemesanan"> | Date | string
    updatedAt?: DateTimeFilter<"tb_pemesanan"> | Date | string
    user?: XOR<Tb_userScalarRelationFilter, tb_userWhereInput>
    meja?: XOR<Tb_mejaScalarRelationFilter, tb_mejaWhereInput>
    pemesanan?: Detail_pemesananListRelationFilter
  }, "id" | "id">

  export type tb_pemesananOrderByWithAggregationInput = {
    id?: SortOrder
    idUser?: SortOrder
    idMeja?: SortOrder
    metode?: SortOrder
    totalProduk?: SortOrder
    pajak?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: tb_pemesananCountOrderByAggregateInput
    _avg?: tb_pemesananAvgOrderByAggregateInput
    _max?: tb_pemesananMaxOrderByAggregateInput
    _min?: tb_pemesananMinOrderByAggregateInput
    _sum?: tb_pemesananSumOrderByAggregateInput
  }

  export type tb_pemesananScalarWhereWithAggregatesInput = {
    AND?: tb_pemesananScalarWhereWithAggregatesInput | tb_pemesananScalarWhereWithAggregatesInput[]
    OR?: tb_pemesananScalarWhereWithAggregatesInput[]
    NOT?: tb_pemesananScalarWhereWithAggregatesInput | tb_pemesananScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_pemesanan"> | number
    idUser?: IntWithAggregatesFilter<"tb_pemesanan"> | number
    idMeja?: IntWithAggregatesFilter<"tb_pemesanan"> | number
    metode?: Enummetode_pembayaranWithAggregatesFilter<"tb_pemesanan"> | $Enums.metode_pembayaran
    totalProduk?: IntWithAggregatesFilter<"tb_pemesanan"> | number
    pajak?: StringWithAggregatesFilter<"tb_pemesanan"> | string
    total?: IntWithAggregatesFilter<"tb_pemesanan"> | number
    status?: Enumstatus_pemesananWithAggregatesFilter<"tb_pemesanan"> | $Enums.status_pemesanan
    createdAt?: DateTimeWithAggregatesFilter<"tb_pemesanan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"tb_pemesanan"> | Date | string
  }

  export type detail_pemesananWhereInput = {
    AND?: detail_pemesananWhereInput | detail_pemesananWhereInput[]
    OR?: detail_pemesananWhereInput[]
    NOT?: detail_pemesananWhereInput | detail_pemesananWhereInput[]
    id?: IntFilter<"detail_pemesanan"> | number
    idPemesanan?: IntFilter<"detail_pemesanan"> | number
    idKeranjang?: IntFilter<"detail_pemesanan"> | number
    note?: StringFilter<"detail_pemesanan"> | string
    createdAt?: DateTimeFilter<"detail_pemesanan"> | Date | string
    pemesanan?: XOR<Tb_pemesananScalarRelationFilter, tb_pemesananWhereInput>
    keranjang?: XOR<Tb_keranjangScalarRelationFilter, tb_keranjangWhereInput>
  }

  export type detail_pemesananOrderByWithRelationInput = {
    id?: SortOrder
    idPemesanan?: SortOrder
    idKeranjang?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    pemesanan?: tb_pemesananOrderByWithRelationInput
    keranjang?: tb_keranjangOrderByWithRelationInput
    _relevance?: detail_pemesananOrderByRelevanceInput
  }

  export type detail_pemesananWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: detail_pemesananWhereInput | detail_pemesananWhereInput[]
    OR?: detail_pemesananWhereInput[]
    NOT?: detail_pemesananWhereInput | detail_pemesananWhereInput[]
    idPemesanan?: IntFilter<"detail_pemesanan"> | number
    idKeranjang?: IntFilter<"detail_pemesanan"> | number
    note?: StringFilter<"detail_pemesanan"> | string
    createdAt?: DateTimeFilter<"detail_pemesanan"> | Date | string
    pemesanan?: XOR<Tb_pemesananScalarRelationFilter, tb_pemesananWhereInput>
    keranjang?: XOR<Tb_keranjangScalarRelationFilter, tb_keranjangWhereInput>
  }, "id">

  export type detail_pemesananOrderByWithAggregationInput = {
    id?: SortOrder
    idPemesanan?: SortOrder
    idKeranjang?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    _count?: detail_pemesananCountOrderByAggregateInput
    _avg?: detail_pemesananAvgOrderByAggregateInput
    _max?: detail_pemesananMaxOrderByAggregateInput
    _min?: detail_pemesananMinOrderByAggregateInput
    _sum?: detail_pemesananSumOrderByAggregateInput
  }

  export type detail_pemesananScalarWhereWithAggregatesInput = {
    AND?: detail_pemesananScalarWhereWithAggregatesInput | detail_pemesananScalarWhereWithAggregatesInput[]
    OR?: detail_pemesananScalarWhereWithAggregatesInput[]
    NOT?: detail_pemesananScalarWhereWithAggregatesInput | detail_pemesananScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"detail_pemesanan"> | number
    idPemesanan?: IntWithAggregatesFilter<"detail_pemesanan"> | number
    idKeranjang?: IntWithAggregatesFilter<"detail_pemesanan"> | number
    note?: StringWithAggregatesFilter<"detail_pemesanan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"detail_pemesanan"> | Date | string
  }

  export type tb_menuCreateInput = {
    nama: string
    deskripsi: string
    harga: number
    kategori?: $Enums.kategori
    gambar_menu: string
    ketersediaan?: $Enums.ketersediaan
    keranjang?: tb_keranjangCreateNestedManyWithoutMenuInput
  }

  export type tb_menuUncheckedCreateInput = {
    id?: number
    nama: string
    deskripsi: string
    harga: number
    kategori?: $Enums.kategori
    gambar_menu: string
    ketersediaan?: $Enums.ketersediaan
    keranjang?: tb_keranjangUncheckedCreateNestedManyWithoutMenuInput
  }

  export type tb_menuUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    kategori?: EnumkategoriFieldUpdateOperationsInput | $Enums.kategori
    gambar_menu?: StringFieldUpdateOperationsInput | string
    ketersediaan?: EnumketersediaanFieldUpdateOperationsInput | $Enums.ketersediaan
    keranjang?: tb_keranjangUpdateManyWithoutMenuNestedInput
  }

  export type tb_menuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    kategori?: EnumkategoriFieldUpdateOperationsInput | $Enums.kategori
    gambar_menu?: StringFieldUpdateOperationsInput | string
    ketersediaan?: EnumketersediaanFieldUpdateOperationsInput | $Enums.ketersediaan
    keranjang?: tb_keranjangUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type tb_menuCreateManyInput = {
    id?: number
    nama: string
    deskripsi: string
    harga: number
    kategori?: $Enums.kategori
    gambar_menu: string
    ketersediaan?: $Enums.ketersediaan
  }

  export type tb_menuUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    kategori?: EnumkategoriFieldUpdateOperationsInput | $Enums.kategori
    gambar_menu?: StringFieldUpdateOperationsInput | string
    ketersediaan?: EnumketersediaanFieldUpdateOperationsInput | $Enums.ketersediaan
  }

  export type tb_menuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    kategori?: EnumkategoriFieldUpdateOperationsInput | $Enums.kategori
    gambar_menu?: StringFieldUpdateOperationsInput | string
    ketersediaan?: EnumketersediaanFieldUpdateOperationsInput | $Enums.ketersediaan
  }

  export type tb_userCreateInput = {
    namaLengkap: string
    username: string
    noHp: string
    email: string
    alamat: string
    password: string
    role?: $Enums.role
    keranjang?: tb_keranjangCreateNestedManyWithoutUserInput
    pemesanan?: tb_pemesananCreateNestedManyWithoutUserInput
  }

  export type tb_userUncheckedCreateInput = {
    id?: number
    namaLengkap: string
    username: string
    noHp: string
    email: string
    alamat: string
    password: string
    role?: $Enums.role
    keranjang?: tb_keranjangUncheckedCreateNestedManyWithoutUserInput
    pemesanan?: tb_pemesananUncheckedCreateNestedManyWithoutUserInput
  }

  export type tb_userUpdateInput = {
    namaLengkap?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    keranjang?: tb_keranjangUpdateManyWithoutUserNestedInput
    pemesanan?: tb_pemesananUpdateManyWithoutUserNestedInput
  }

  export type tb_userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaLengkap?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    keranjang?: tb_keranjangUncheckedUpdateManyWithoutUserNestedInput
    pemesanan?: tb_pemesananUncheckedUpdateManyWithoutUserNestedInput
  }

  export type tb_userCreateManyInput = {
    id?: number
    namaLengkap: string
    username: string
    noHp: string
    email: string
    alamat: string
    password: string
    role?: $Enums.role
  }

  export type tb_userUpdateManyMutationInput = {
    namaLengkap?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
  }

  export type tb_userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaLengkap?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
  }

  export type tb_keranjangCreateInput = {
    quantity: number
    total: number
    status?: $Enums.status
    user: tb_userCreateNestedOneWithoutKeranjangInput
    menu: tb_menuCreateNestedOneWithoutKeranjangInput
    keranjang?: detail_pemesananCreateNestedManyWithoutKeranjangInput
  }

  export type tb_keranjangUncheckedCreateInput = {
    id?: number
    idUser: number
    idMenu: number
    quantity: number
    total: number
    status?: $Enums.status
    keranjang?: detail_pemesananUncheckedCreateNestedManyWithoutKeranjangInput
  }

  export type tb_keranjangUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    user?: tb_userUpdateOneRequiredWithoutKeranjangNestedInput
    menu?: tb_menuUpdateOneRequiredWithoutKeranjangNestedInput
    keranjang?: detail_pemesananUpdateManyWithoutKeranjangNestedInput
  }

  export type tb_keranjangUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUser?: IntFieldUpdateOperationsInput | number
    idMenu?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    keranjang?: detail_pemesananUncheckedUpdateManyWithoutKeranjangNestedInput
  }

  export type tb_keranjangCreateManyInput = {
    id?: number
    idUser: number
    idMenu: number
    quantity: number
    total: number
    status?: $Enums.status
  }

  export type tb_keranjangUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type tb_keranjangUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUser?: IntFieldUpdateOperationsInput | number
    idMenu?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type tb_mejaCreateInput = {
    namaMeja: string
    meja?: tb_pemesananCreateNestedManyWithoutMejaInput
  }

  export type tb_mejaUncheckedCreateInput = {
    id?: number
    namaMeja: string
    meja?: tb_pemesananUncheckedCreateNestedManyWithoutMejaInput
  }

  export type tb_mejaUpdateInput = {
    namaMeja?: StringFieldUpdateOperationsInput | string
    meja?: tb_pemesananUpdateManyWithoutMejaNestedInput
  }

  export type tb_mejaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaMeja?: StringFieldUpdateOperationsInput | string
    meja?: tb_pemesananUncheckedUpdateManyWithoutMejaNestedInput
  }

  export type tb_mejaCreateManyInput = {
    id?: number
    namaMeja: string
  }

  export type tb_mejaUpdateManyMutationInput = {
    namaMeja?: StringFieldUpdateOperationsInput | string
  }

  export type tb_mejaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaMeja?: StringFieldUpdateOperationsInput | string
  }

  export type tb_pemesananCreateInput = {
    metode?: $Enums.metode_pembayaran
    totalProduk: number
    pajak: string
    total: number
    status?: $Enums.status_pemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
    user: tb_userCreateNestedOneWithoutPemesananInput
    meja: tb_mejaCreateNestedOneWithoutMejaInput
    pemesanan?: detail_pemesananCreateNestedManyWithoutPemesananInput
  }

  export type tb_pemesananUncheckedCreateInput = {
    id?: number
    idUser: number
    idMeja: number
    metode?: $Enums.metode_pembayaran
    totalProduk: number
    pajak: string
    total: number
    status?: $Enums.status_pemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
    pemesanan?: detail_pemesananUncheckedCreateNestedManyWithoutPemesananInput
  }

  export type tb_pemesananUpdateInput = {
    metode?: Enummetode_pembayaranFieldUpdateOperationsInput | $Enums.metode_pembayaran
    totalProduk?: IntFieldUpdateOperationsInput | number
    pajak?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumstatus_pemesananFieldUpdateOperationsInput | $Enums.status_pemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: tb_userUpdateOneRequiredWithoutPemesananNestedInput
    meja?: tb_mejaUpdateOneRequiredWithoutMejaNestedInput
    pemesanan?: detail_pemesananUpdateManyWithoutPemesananNestedInput
  }

  export type tb_pemesananUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUser?: IntFieldUpdateOperationsInput | number
    idMeja?: IntFieldUpdateOperationsInput | number
    metode?: Enummetode_pembayaranFieldUpdateOperationsInput | $Enums.metode_pembayaran
    totalProduk?: IntFieldUpdateOperationsInput | number
    pajak?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumstatus_pemesananFieldUpdateOperationsInput | $Enums.status_pemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pemesanan?: detail_pemesananUncheckedUpdateManyWithoutPemesananNestedInput
  }

  export type tb_pemesananCreateManyInput = {
    id?: number
    idUser: number
    idMeja: number
    metode?: $Enums.metode_pembayaran
    totalProduk: number
    pajak: string
    total: number
    status?: $Enums.status_pemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tb_pemesananUpdateManyMutationInput = {
    metode?: Enummetode_pembayaranFieldUpdateOperationsInput | $Enums.metode_pembayaran
    totalProduk?: IntFieldUpdateOperationsInput | number
    pajak?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumstatus_pemesananFieldUpdateOperationsInput | $Enums.status_pemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tb_pemesananUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUser?: IntFieldUpdateOperationsInput | number
    idMeja?: IntFieldUpdateOperationsInput | number
    metode?: Enummetode_pembayaranFieldUpdateOperationsInput | $Enums.metode_pembayaran
    totalProduk?: IntFieldUpdateOperationsInput | number
    pajak?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumstatus_pemesananFieldUpdateOperationsInput | $Enums.status_pemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detail_pemesananCreateInput = {
    note: string
    createdAt?: Date | string
    pemesanan: tb_pemesananCreateNestedOneWithoutPemesananInput
    keranjang: tb_keranjangCreateNestedOneWithoutKeranjangInput
  }

  export type detail_pemesananUncheckedCreateInput = {
    id?: number
    idPemesanan: number
    idKeranjang: number
    note: string
    createdAt?: Date | string
  }

  export type detail_pemesananUpdateInput = {
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pemesanan?: tb_pemesananUpdateOneRequiredWithoutPemesananNestedInput
    keranjang?: tb_keranjangUpdateOneRequiredWithoutKeranjangNestedInput
  }

  export type detail_pemesananUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPemesanan?: IntFieldUpdateOperationsInput | number
    idKeranjang?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detail_pemesananCreateManyInput = {
    id?: number
    idPemesanan: number
    idKeranjang: number
    note: string
    createdAt?: Date | string
  }

  export type detail_pemesananUpdateManyMutationInput = {
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detail_pemesananUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPemesanan?: IntFieldUpdateOperationsInput | number
    idKeranjang?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumkategoriFilter<$PrismaModel = never> = {
    equals?: $Enums.kategori | EnumkategoriFieldRefInput<$PrismaModel>
    in?: $Enums.kategori[]
    notIn?: $Enums.kategori[]
    not?: NestedEnumkategoriFilter<$PrismaModel> | $Enums.kategori
  }

  export type EnumketersediaanFilter<$PrismaModel = never> = {
    equals?: $Enums.ketersediaan | EnumketersediaanFieldRefInput<$PrismaModel>
    in?: $Enums.ketersediaan[]
    notIn?: $Enums.ketersediaan[]
    not?: NestedEnumketersediaanFilter<$PrismaModel> | $Enums.ketersediaan
  }

  export type Tb_keranjangListRelationFilter = {
    every?: tb_keranjangWhereInput
    some?: tb_keranjangWhereInput
    none?: tb_keranjangWhereInput
  }

  export type tb_keranjangOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tb_menuOrderByRelevanceInput = {
    fields: tb_menuOrderByRelevanceFieldEnum | tb_menuOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_menuCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    kategori?: SortOrder
    gambar_menu?: SortOrder
    ketersediaan?: SortOrder
  }

  export type tb_menuAvgOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
  }

  export type tb_menuMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    kategori?: SortOrder
    gambar_menu?: SortOrder
    ketersediaan?: SortOrder
  }

  export type tb_menuMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    kategori?: SortOrder
    gambar_menu?: SortOrder
    ketersediaan?: SortOrder
  }

  export type tb_menuSumOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumkategoriWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.kategori | EnumkategoriFieldRefInput<$PrismaModel>
    in?: $Enums.kategori[]
    notIn?: $Enums.kategori[]
    not?: NestedEnumkategoriWithAggregatesFilter<$PrismaModel> | $Enums.kategori
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumkategoriFilter<$PrismaModel>
    _max?: NestedEnumkategoriFilter<$PrismaModel>
  }

  export type EnumketersediaanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ketersediaan | EnumketersediaanFieldRefInput<$PrismaModel>
    in?: $Enums.ketersediaan[]
    notIn?: $Enums.ketersediaan[]
    not?: NestedEnumketersediaanWithAggregatesFilter<$PrismaModel> | $Enums.ketersediaan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumketersediaanFilter<$PrismaModel>
    _max?: NestedEnumketersediaanFilter<$PrismaModel>
  }

  export type EnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[]
    notIn?: $Enums.role[]
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type Tb_pemesananListRelationFilter = {
    every?: tb_pemesananWhereInput
    some?: tb_pemesananWhereInput
    none?: tb_pemesananWhereInput
  }

  export type tb_pemesananOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tb_userOrderByRelevanceInput = {
    fields: tb_userOrderByRelevanceFieldEnum | tb_userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_userCountOrderByAggregateInput = {
    id?: SortOrder
    namaLengkap?: SortOrder
    username?: SortOrder
    noHp?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type tb_userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tb_userMaxOrderByAggregateInput = {
    id?: SortOrder
    namaLengkap?: SortOrder
    username?: SortOrder
    noHp?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type tb_userMinOrderByAggregateInput = {
    id?: SortOrder
    namaLengkap?: SortOrder
    username?: SortOrder
    noHp?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type tb_userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[]
    notIn?: $Enums.role[]
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type EnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type Tb_userScalarRelationFilter = {
    is?: tb_userWhereInput
    isNot?: tb_userWhereInput
  }

  export type Tb_menuScalarRelationFilter = {
    is?: tb_menuWhereInput
    isNot?: tb_menuWhereInput
  }

  export type Detail_pemesananListRelationFilter = {
    every?: detail_pemesananWhereInput
    some?: detail_pemesananWhereInput
    none?: detail_pemesananWhereInput
  }

  export type detail_pemesananOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tb_keranjangCountOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
    idMenu?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    status?: SortOrder
  }

  export type tb_keranjangAvgOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
    idMenu?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type tb_keranjangMaxOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
    idMenu?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    status?: SortOrder
  }

  export type tb_keranjangMinOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
    idMenu?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    status?: SortOrder
  }

  export type tb_keranjangSumOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
    idMenu?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type EnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type tb_mejaOrderByRelevanceInput = {
    fields: tb_mejaOrderByRelevanceFieldEnum | tb_mejaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_mejaCountOrderByAggregateInput = {
    id?: SortOrder
    namaMeja?: SortOrder
  }

  export type tb_mejaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tb_mejaMaxOrderByAggregateInput = {
    id?: SortOrder
    namaMeja?: SortOrder
  }

  export type tb_mejaMinOrderByAggregateInput = {
    id?: SortOrder
    namaMeja?: SortOrder
  }

  export type tb_mejaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enummetode_pembayaranFilter<$PrismaModel = never> = {
    equals?: $Enums.metode_pembayaran | Enummetode_pembayaranFieldRefInput<$PrismaModel>
    in?: $Enums.metode_pembayaran[]
    notIn?: $Enums.metode_pembayaran[]
    not?: NestedEnummetode_pembayaranFilter<$PrismaModel> | $Enums.metode_pembayaran
  }

  export type Enumstatus_pemesananFilter<$PrismaModel = never> = {
    equals?: $Enums.status_pemesanan | Enumstatus_pemesananFieldRefInput<$PrismaModel>
    in?: $Enums.status_pemesanan[]
    notIn?: $Enums.status_pemesanan[]
    not?: NestedEnumstatus_pemesananFilter<$PrismaModel> | $Enums.status_pemesanan
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

  export type Tb_mejaScalarRelationFilter = {
    is?: tb_mejaWhereInput
    isNot?: tb_mejaWhereInput
  }

  export type tb_pemesananOrderByRelevanceInput = {
    fields: tb_pemesananOrderByRelevanceFieldEnum | tb_pemesananOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_pemesananCountOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
    idMeja?: SortOrder
    metode?: SortOrder
    totalProduk?: SortOrder
    pajak?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tb_pemesananAvgOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
    idMeja?: SortOrder
    totalProduk?: SortOrder
    total?: SortOrder
  }

  export type tb_pemesananMaxOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
    idMeja?: SortOrder
    metode?: SortOrder
    totalProduk?: SortOrder
    pajak?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tb_pemesananMinOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
    idMeja?: SortOrder
    metode?: SortOrder
    totalProduk?: SortOrder
    pajak?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tb_pemesananSumOrderByAggregateInput = {
    id?: SortOrder
    idUser?: SortOrder
    idMeja?: SortOrder
    totalProduk?: SortOrder
    total?: SortOrder
  }

  export type Enummetode_pembayaranWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.metode_pembayaran | Enummetode_pembayaranFieldRefInput<$PrismaModel>
    in?: $Enums.metode_pembayaran[]
    notIn?: $Enums.metode_pembayaran[]
    not?: NestedEnummetode_pembayaranWithAggregatesFilter<$PrismaModel> | $Enums.metode_pembayaran
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummetode_pembayaranFilter<$PrismaModel>
    _max?: NestedEnummetode_pembayaranFilter<$PrismaModel>
  }

  export type Enumstatus_pemesananWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_pemesanan | Enumstatus_pemesananFieldRefInput<$PrismaModel>
    in?: $Enums.status_pemesanan[]
    notIn?: $Enums.status_pemesanan[]
    not?: NestedEnumstatus_pemesananWithAggregatesFilter<$PrismaModel> | $Enums.status_pemesanan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatus_pemesananFilter<$PrismaModel>
    _max?: NestedEnumstatus_pemesananFilter<$PrismaModel>
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

  export type Tb_pemesananScalarRelationFilter = {
    is?: tb_pemesananWhereInput
    isNot?: tb_pemesananWhereInput
  }

  export type Tb_keranjangScalarRelationFilter = {
    is?: tb_keranjangWhereInput
    isNot?: tb_keranjangWhereInput
  }

  export type detail_pemesananOrderByRelevanceInput = {
    fields: detail_pemesananOrderByRelevanceFieldEnum | detail_pemesananOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type detail_pemesananCountOrderByAggregateInput = {
    id?: SortOrder
    idPemesanan?: SortOrder
    idKeranjang?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type detail_pemesananAvgOrderByAggregateInput = {
    id?: SortOrder
    idPemesanan?: SortOrder
    idKeranjang?: SortOrder
  }

  export type detail_pemesananMaxOrderByAggregateInput = {
    id?: SortOrder
    idPemesanan?: SortOrder
    idKeranjang?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type detail_pemesananMinOrderByAggregateInput = {
    id?: SortOrder
    idPemesanan?: SortOrder
    idKeranjang?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type detail_pemesananSumOrderByAggregateInput = {
    id?: SortOrder
    idPemesanan?: SortOrder
    idKeranjang?: SortOrder
  }

  export type tb_keranjangCreateNestedManyWithoutMenuInput = {
    create?: XOR<tb_keranjangCreateWithoutMenuInput, tb_keranjangUncheckedCreateWithoutMenuInput> | tb_keranjangCreateWithoutMenuInput[] | tb_keranjangUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: tb_keranjangCreateOrConnectWithoutMenuInput | tb_keranjangCreateOrConnectWithoutMenuInput[]
    createMany?: tb_keranjangCreateManyMenuInputEnvelope
    connect?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
  }

  export type tb_keranjangUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<tb_keranjangCreateWithoutMenuInput, tb_keranjangUncheckedCreateWithoutMenuInput> | tb_keranjangCreateWithoutMenuInput[] | tb_keranjangUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: tb_keranjangCreateOrConnectWithoutMenuInput | tb_keranjangCreateOrConnectWithoutMenuInput[]
    createMany?: tb_keranjangCreateManyMenuInputEnvelope
    connect?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumkategoriFieldUpdateOperationsInput = {
    set?: $Enums.kategori
  }

  export type EnumketersediaanFieldUpdateOperationsInput = {
    set?: $Enums.ketersediaan
  }

  export type tb_keranjangUpdateManyWithoutMenuNestedInput = {
    create?: XOR<tb_keranjangCreateWithoutMenuInput, tb_keranjangUncheckedCreateWithoutMenuInput> | tb_keranjangCreateWithoutMenuInput[] | tb_keranjangUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: tb_keranjangCreateOrConnectWithoutMenuInput | tb_keranjangCreateOrConnectWithoutMenuInput[]
    upsert?: tb_keranjangUpsertWithWhereUniqueWithoutMenuInput | tb_keranjangUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: tb_keranjangCreateManyMenuInputEnvelope
    set?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
    disconnect?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
    delete?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
    connect?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
    update?: tb_keranjangUpdateWithWhereUniqueWithoutMenuInput | tb_keranjangUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: tb_keranjangUpdateManyWithWhereWithoutMenuInput | tb_keranjangUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: tb_keranjangScalarWhereInput | tb_keranjangScalarWhereInput[]
  }

  export type tb_keranjangUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<tb_keranjangCreateWithoutMenuInput, tb_keranjangUncheckedCreateWithoutMenuInput> | tb_keranjangCreateWithoutMenuInput[] | tb_keranjangUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: tb_keranjangCreateOrConnectWithoutMenuInput | tb_keranjangCreateOrConnectWithoutMenuInput[]
    upsert?: tb_keranjangUpsertWithWhereUniqueWithoutMenuInput | tb_keranjangUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: tb_keranjangCreateManyMenuInputEnvelope
    set?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
    disconnect?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
    delete?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
    connect?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
    update?: tb_keranjangUpdateWithWhereUniqueWithoutMenuInput | tb_keranjangUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: tb_keranjangUpdateManyWithWhereWithoutMenuInput | tb_keranjangUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: tb_keranjangScalarWhereInput | tb_keranjangScalarWhereInput[]
  }

  export type tb_keranjangCreateNestedManyWithoutUserInput = {
    create?: XOR<tb_keranjangCreateWithoutUserInput, tb_keranjangUncheckedCreateWithoutUserInput> | tb_keranjangCreateWithoutUserInput[] | tb_keranjangUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tb_keranjangCreateOrConnectWithoutUserInput | tb_keranjangCreateOrConnectWithoutUserInput[]
    createMany?: tb_keranjangCreateManyUserInputEnvelope
    connect?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
  }

  export type tb_pemesananCreateNestedManyWithoutUserInput = {
    create?: XOR<tb_pemesananCreateWithoutUserInput, tb_pemesananUncheckedCreateWithoutUserInput> | tb_pemesananCreateWithoutUserInput[] | tb_pemesananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tb_pemesananCreateOrConnectWithoutUserInput | tb_pemesananCreateOrConnectWithoutUserInput[]
    createMany?: tb_pemesananCreateManyUserInputEnvelope
    connect?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
  }

  export type tb_keranjangUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<tb_keranjangCreateWithoutUserInput, tb_keranjangUncheckedCreateWithoutUserInput> | tb_keranjangCreateWithoutUserInput[] | tb_keranjangUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tb_keranjangCreateOrConnectWithoutUserInput | tb_keranjangCreateOrConnectWithoutUserInput[]
    createMany?: tb_keranjangCreateManyUserInputEnvelope
    connect?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
  }

  export type tb_pemesananUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<tb_pemesananCreateWithoutUserInput, tb_pemesananUncheckedCreateWithoutUserInput> | tb_pemesananCreateWithoutUserInput[] | tb_pemesananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tb_pemesananCreateOrConnectWithoutUserInput | tb_pemesananCreateOrConnectWithoutUserInput[]
    createMany?: tb_pemesananCreateManyUserInputEnvelope
    connect?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
  }

  export type EnumroleFieldUpdateOperationsInput = {
    set?: $Enums.role
  }

  export type tb_keranjangUpdateManyWithoutUserNestedInput = {
    create?: XOR<tb_keranjangCreateWithoutUserInput, tb_keranjangUncheckedCreateWithoutUserInput> | tb_keranjangCreateWithoutUserInput[] | tb_keranjangUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tb_keranjangCreateOrConnectWithoutUserInput | tb_keranjangCreateOrConnectWithoutUserInput[]
    upsert?: tb_keranjangUpsertWithWhereUniqueWithoutUserInput | tb_keranjangUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: tb_keranjangCreateManyUserInputEnvelope
    set?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
    disconnect?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
    delete?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
    connect?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
    update?: tb_keranjangUpdateWithWhereUniqueWithoutUserInput | tb_keranjangUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: tb_keranjangUpdateManyWithWhereWithoutUserInput | tb_keranjangUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: tb_keranjangScalarWhereInput | tb_keranjangScalarWhereInput[]
  }

  export type tb_pemesananUpdateManyWithoutUserNestedInput = {
    create?: XOR<tb_pemesananCreateWithoutUserInput, tb_pemesananUncheckedCreateWithoutUserInput> | tb_pemesananCreateWithoutUserInput[] | tb_pemesananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tb_pemesananCreateOrConnectWithoutUserInput | tb_pemesananCreateOrConnectWithoutUserInput[]
    upsert?: tb_pemesananUpsertWithWhereUniqueWithoutUserInput | tb_pemesananUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: tb_pemesananCreateManyUserInputEnvelope
    set?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
    disconnect?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
    delete?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
    connect?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
    update?: tb_pemesananUpdateWithWhereUniqueWithoutUserInput | tb_pemesananUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: tb_pemesananUpdateManyWithWhereWithoutUserInput | tb_pemesananUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: tb_pemesananScalarWhereInput | tb_pemesananScalarWhereInput[]
  }

  export type tb_keranjangUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<tb_keranjangCreateWithoutUserInput, tb_keranjangUncheckedCreateWithoutUserInput> | tb_keranjangCreateWithoutUserInput[] | tb_keranjangUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tb_keranjangCreateOrConnectWithoutUserInput | tb_keranjangCreateOrConnectWithoutUserInput[]
    upsert?: tb_keranjangUpsertWithWhereUniqueWithoutUserInput | tb_keranjangUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: tb_keranjangCreateManyUserInputEnvelope
    set?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
    disconnect?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
    delete?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
    connect?: tb_keranjangWhereUniqueInput | tb_keranjangWhereUniqueInput[]
    update?: tb_keranjangUpdateWithWhereUniqueWithoutUserInput | tb_keranjangUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: tb_keranjangUpdateManyWithWhereWithoutUserInput | tb_keranjangUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: tb_keranjangScalarWhereInput | tb_keranjangScalarWhereInput[]
  }

  export type tb_pemesananUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<tb_pemesananCreateWithoutUserInput, tb_pemesananUncheckedCreateWithoutUserInput> | tb_pemesananCreateWithoutUserInput[] | tb_pemesananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tb_pemesananCreateOrConnectWithoutUserInput | tb_pemesananCreateOrConnectWithoutUserInput[]
    upsert?: tb_pemesananUpsertWithWhereUniqueWithoutUserInput | tb_pemesananUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: tb_pemesananCreateManyUserInputEnvelope
    set?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
    disconnect?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
    delete?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
    connect?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
    update?: tb_pemesananUpdateWithWhereUniqueWithoutUserInput | tb_pemesananUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: tb_pemesananUpdateManyWithWhereWithoutUserInput | tb_pemesananUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: tb_pemesananScalarWhereInput | tb_pemesananScalarWhereInput[]
  }

  export type tb_userCreateNestedOneWithoutKeranjangInput = {
    create?: XOR<tb_userCreateWithoutKeranjangInput, tb_userUncheckedCreateWithoutKeranjangInput>
    connectOrCreate?: tb_userCreateOrConnectWithoutKeranjangInput
    connect?: tb_userWhereUniqueInput
  }

  export type tb_menuCreateNestedOneWithoutKeranjangInput = {
    create?: XOR<tb_menuCreateWithoutKeranjangInput, tb_menuUncheckedCreateWithoutKeranjangInput>
    connectOrCreate?: tb_menuCreateOrConnectWithoutKeranjangInput
    connect?: tb_menuWhereUniqueInput
  }

  export type detail_pemesananCreateNestedManyWithoutKeranjangInput = {
    create?: XOR<detail_pemesananCreateWithoutKeranjangInput, detail_pemesananUncheckedCreateWithoutKeranjangInput> | detail_pemesananCreateWithoutKeranjangInput[] | detail_pemesananUncheckedCreateWithoutKeranjangInput[]
    connectOrCreate?: detail_pemesananCreateOrConnectWithoutKeranjangInput | detail_pemesananCreateOrConnectWithoutKeranjangInput[]
    createMany?: detail_pemesananCreateManyKeranjangInputEnvelope
    connect?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
  }

  export type detail_pemesananUncheckedCreateNestedManyWithoutKeranjangInput = {
    create?: XOR<detail_pemesananCreateWithoutKeranjangInput, detail_pemesananUncheckedCreateWithoutKeranjangInput> | detail_pemesananCreateWithoutKeranjangInput[] | detail_pemesananUncheckedCreateWithoutKeranjangInput[]
    connectOrCreate?: detail_pemesananCreateOrConnectWithoutKeranjangInput | detail_pemesananCreateOrConnectWithoutKeranjangInput[]
    createMany?: detail_pemesananCreateManyKeranjangInputEnvelope
    connect?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
  }

  export type EnumstatusFieldUpdateOperationsInput = {
    set?: $Enums.status
  }

  export type tb_userUpdateOneRequiredWithoutKeranjangNestedInput = {
    create?: XOR<tb_userCreateWithoutKeranjangInput, tb_userUncheckedCreateWithoutKeranjangInput>
    connectOrCreate?: tb_userCreateOrConnectWithoutKeranjangInput
    upsert?: tb_userUpsertWithoutKeranjangInput
    connect?: tb_userWhereUniqueInput
    update?: XOR<XOR<tb_userUpdateToOneWithWhereWithoutKeranjangInput, tb_userUpdateWithoutKeranjangInput>, tb_userUncheckedUpdateWithoutKeranjangInput>
  }

  export type tb_menuUpdateOneRequiredWithoutKeranjangNestedInput = {
    create?: XOR<tb_menuCreateWithoutKeranjangInput, tb_menuUncheckedCreateWithoutKeranjangInput>
    connectOrCreate?: tb_menuCreateOrConnectWithoutKeranjangInput
    upsert?: tb_menuUpsertWithoutKeranjangInput
    connect?: tb_menuWhereUniqueInput
    update?: XOR<XOR<tb_menuUpdateToOneWithWhereWithoutKeranjangInput, tb_menuUpdateWithoutKeranjangInput>, tb_menuUncheckedUpdateWithoutKeranjangInput>
  }

  export type detail_pemesananUpdateManyWithoutKeranjangNestedInput = {
    create?: XOR<detail_pemesananCreateWithoutKeranjangInput, detail_pemesananUncheckedCreateWithoutKeranjangInput> | detail_pemesananCreateWithoutKeranjangInput[] | detail_pemesananUncheckedCreateWithoutKeranjangInput[]
    connectOrCreate?: detail_pemesananCreateOrConnectWithoutKeranjangInput | detail_pemesananCreateOrConnectWithoutKeranjangInput[]
    upsert?: detail_pemesananUpsertWithWhereUniqueWithoutKeranjangInput | detail_pemesananUpsertWithWhereUniqueWithoutKeranjangInput[]
    createMany?: detail_pemesananCreateManyKeranjangInputEnvelope
    set?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
    disconnect?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
    delete?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
    connect?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
    update?: detail_pemesananUpdateWithWhereUniqueWithoutKeranjangInput | detail_pemesananUpdateWithWhereUniqueWithoutKeranjangInput[]
    updateMany?: detail_pemesananUpdateManyWithWhereWithoutKeranjangInput | detail_pemesananUpdateManyWithWhereWithoutKeranjangInput[]
    deleteMany?: detail_pemesananScalarWhereInput | detail_pemesananScalarWhereInput[]
  }

  export type detail_pemesananUncheckedUpdateManyWithoutKeranjangNestedInput = {
    create?: XOR<detail_pemesananCreateWithoutKeranjangInput, detail_pemesananUncheckedCreateWithoutKeranjangInput> | detail_pemesananCreateWithoutKeranjangInput[] | detail_pemesananUncheckedCreateWithoutKeranjangInput[]
    connectOrCreate?: detail_pemesananCreateOrConnectWithoutKeranjangInput | detail_pemesananCreateOrConnectWithoutKeranjangInput[]
    upsert?: detail_pemesananUpsertWithWhereUniqueWithoutKeranjangInput | detail_pemesananUpsertWithWhereUniqueWithoutKeranjangInput[]
    createMany?: detail_pemesananCreateManyKeranjangInputEnvelope
    set?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
    disconnect?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
    delete?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
    connect?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
    update?: detail_pemesananUpdateWithWhereUniqueWithoutKeranjangInput | detail_pemesananUpdateWithWhereUniqueWithoutKeranjangInput[]
    updateMany?: detail_pemesananUpdateManyWithWhereWithoutKeranjangInput | detail_pemesananUpdateManyWithWhereWithoutKeranjangInput[]
    deleteMany?: detail_pemesananScalarWhereInput | detail_pemesananScalarWhereInput[]
  }

  export type tb_pemesananCreateNestedManyWithoutMejaInput = {
    create?: XOR<tb_pemesananCreateWithoutMejaInput, tb_pemesananUncheckedCreateWithoutMejaInput> | tb_pemesananCreateWithoutMejaInput[] | tb_pemesananUncheckedCreateWithoutMejaInput[]
    connectOrCreate?: tb_pemesananCreateOrConnectWithoutMejaInput | tb_pemesananCreateOrConnectWithoutMejaInput[]
    createMany?: tb_pemesananCreateManyMejaInputEnvelope
    connect?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
  }

  export type tb_pemesananUncheckedCreateNestedManyWithoutMejaInput = {
    create?: XOR<tb_pemesananCreateWithoutMejaInput, tb_pemesananUncheckedCreateWithoutMejaInput> | tb_pemesananCreateWithoutMejaInput[] | tb_pemesananUncheckedCreateWithoutMejaInput[]
    connectOrCreate?: tb_pemesananCreateOrConnectWithoutMejaInput | tb_pemesananCreateOrConnectWithoutMejaInput[]
    createMany?: tb_pemesananCreateManyMejaInputEnvelope
    connect?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
  }

  export type tb_pemesananUpdateManyWithoutMejaNestedInput = {
    create?: XOR<tb_pemesananCreateWithoutMejaInput, tb_pemesananUncheckedCreateWithoutMejaInput> | tb_pemesananCreateWithoutMejaInput[] | tb_pemesananUncheckedCreateWithoutMejaInput[]
    connectOrCreate?: tb_pemesananCreateOrConnectWithoutMejaInput | tb_pemesananCreateOrConnectWithoutMejaInput[]
    upsert?: tb_pemesananUpsertWithWhereUniqueWithoutMejaInput | tb_pemesananUpsertWithWhereUniqueWithoutMejaInput[]
    createMany?: tb_pemesananCreateManyMejaInputEnvelope
    set?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
    disconnect?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
    delete?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
    connect?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
    update?: tb_pemesananUpdateWithWhereUniqueWithoutMejaInput | tb_pemesananUpdateWithWhereUniqueWithoutMejaInput[]
    updateMany?: tb_pemesananUpdateManyWithWhereWithoutMejaInput | tb_pemesananUpdateManyWithWhereWithoutMejaInput[]
    deleteMany?: tb_pemesananScalarWhereInput | tb_pemesananScalarWhereInput[]
  }

  export type tb_pemesananUncheckedUpdateManyWithoutMejaNestedInput = {
    create?: XOR<tb_pemesananCreateWithoutMejaInput, tb_pemesananUncheckedCreateWithoutMejaInput> | tb_pemesananCreateWithoutMejaInput[] | tb_pemesananUncheckedCreateWithoutMejaInput[]
    connectOrCreate?: tb_pemesananCreateOrConnectWithoutMejaInput | tb_pemesananCreateOrConnectWithoutMejaInput[]
    upsert?: tb_pemesananUpsertWithWhereUniqueWithoutMejaInput | tb_pemesananUpsertWithWhereUniqueWithoutMejaInput[]
    createMany?: tb_pemesananCreateManyMejaInputEnvelope
    set?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
    disconnect?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
    delete?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
    connect?: tb_pemesananWhereUniqueInput | tb_pemesananWhereUniqueInput[]
    update?: tb_pemesananUpdateWithWhereUniqueWithoutMejaInput | tb_pemesananUpdateWithWhereUniqueWithoutMejaInput[]
    updateMany?: tb_pemesananUpdateManyWithWhereWithoutMejaInput | tb_pemesananUpdateManyWithWhereWithoutMejaInput[]
    deleteMany?: tb_pemesananScalarWhereInput | tb_pemesananScalarWhereInput[]
  }

  export type tb_userCreateNestedOneWithoutPemesananInput = {
    create?: XOR<tb_userCreateWithoutPemesananInput, tb_userUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: tb_userCreateOrConnectWithoutPemesananInput
    connect?: tb_userWhereUniqueInput
  }

  export type tb_mejaCreateNestedOneWithoutMejaInput = {
    create?: XOR<tb_mejaCreateWithoutMejaInput, tb_mejaUncheckedCreateWithoutMejaInput>
    connectOrCreate?: tb_mejaCreateOrConnectWithoutMejaInput
    connect?: tb_mejaWhereUniqueInput
  }

  export type detail_pemesananCreateNestedManyWithoutPemesananInput = {
    create?: XOR<detail_pemesananCreateWithoutPemesananInput, detail_pemesananUncheckedCreateWithoutPemesananInput> | detail_pemesananCreateWithoutPemesananInput[] | detail_pemesananUncheckedCreateWithoutPemesananInput[]
    connectOrCreate?: detail_pemesananCreateOrConnectWithoutPemesananInput | detail_pemesananCreateOrConnectWithoutPemesananInput[]
    createMany?: detail_pemesananCreateManyPemesananInputEnvelope
    connect?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
  }

  export type detail_pemesananUncheckedCreateNestedManyWithoutPemesananInput = {
    create?: XOR<detail_pemesananCreateWithoutPemesananInput, detail_pemesananUncheckedCreateWithoutPemesananInput> | detail_pemesananCreateWithoutPemesananInput[] | detail_pemesananUncheckedCreateWithoutPemesananInput[]
    connectOrCreate?: detail_pemesananCreateOrConnectWithoutPemesananInput | detail_pemesananCreateOrConnectWithoutPemesananInput[]
    createMany?: detail_pemesananCreateManyPemesananInputEnvelope
    connect?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
  }

  export type Enummetode_pembayaranFieldUpdateOperationsInput = {
    set?: $Enums.metode_pembayaran
  }

  export type Enumstatus_pemesananFieldUpdateOperationsInput = {
    set?: $Enums.status_pemesanan
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tb_userUpdateOneRequiredWithoutPemesananNestedInput = {
    create?: XOR<tb_userCreateWithoutPemesananInput, tb_userUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: tb_userCreateOrConnectWithoutPemesananInput
    upsert?: tb_userUpsertWithoutPemesananInput
    connect?: tb_userWhereUniqueInput
    update?: XOR<XOR<tb_userUpdateToOneWithWhereWithoutPemesananInput, tb_userUpdateWithoutPemesananInput>, tb_userUncheckedUpdateWithoutPemesananInput>
  }

  export type tb_mejaUpdateOneRequiredWithoutMejaNestedInput = {
    create?: XOR<tb_mejaCreateWithoutMejaInput, tb_mejaUncheckedCreateWithoutMejaInput>
    connectOrCreate?: tb_mejaCreateOrConnectWithoutMejaInput
    upsert?: tb_mejaUpsertWithoutMejaInput
    connect?: tb_mejaWhereUniqueInput
    update?: XOR<XOR<tb_mejaUpdateToOneWithWhereWithoutMejaInput, tb_mejaUpdateWithoutMejaInput>, tb_mejaUncheckedUpdateWithoutMejaInput>
  }

  export type detail_pemesananUpdateManyWithoutPemesananNestedInput = {
    create?: XOR<detail_pemesananCreateWithoutPemesananInput, detail_pemesananUncheckedCreateWithoutPemesananInput> | detail_pemesananCreateWithoutPemesananInput[] | detail_pemesananUncheckedCreateWithoutPemesananInput[]
    connectOrCreate?: detail_pemesananCreateOrConnectWithoutPemesananInput | detail_pemesananCreateOrConnectWithoutPemesananInput[]
    upsert?: detail_pemesananUpsertWithWhereUniqueWithoutPemesananInput | detail_pemesananUpsertWithWhereUniqueWithoutPemesananInput[]
    createMany?: detail_pemesananCreateManyPemesananInputEnvelope
    set?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
    disconnect?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
    delete?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
    connect?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
    update?: detail_pemesananUpdateWithWhereUniqueWithoutPemesananInput | detail_pemesananUpdateWithWhereUniqueWithoutPemesananInput[]
    updateMany?: detail_pemesananUpdateManyWithWhereWithoutPemesananInput | detail_pemesananUpdateManyWithWhereWithoutPemesananInput[]
    deleteMany?: detail_pemesananScalarWhereInput | detail_pemesananScalarWhereInput[]
  }

  export type detail_pemesananUncheckedUpdateManyWithoutPemesananNestedInput = {
    create?: XOR<detail_pemesananCreateWithoutPemesananInput, detail_pemesananUncheckedCreateWithoutPemesananInput> | detail_pemesananCreateWithoutPemesananInput[] | detail_pemesananUncheckedCreateWithoutPemesananInput[]
    connectOrCreate?: detail_pemesananCreateOrConnectWithoutPemesananInput | detail_pemesananCreateOrConnectWithoutPemesananInput[]
    upsert?: detail_pemesananUpsertWithWhereUniqueWithoutPemesananInput | detail_pemesananUpsertWithWhereUniqueWithoutPemesananInput[]
    createMany?: detail_pemesananCreateManyPemesananInputEnvelope
    set?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
    disconnect?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
    delete?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
    connect?: detail_pemesananWhereUniqueInput | detail_pemesananWhereUniqueInput[]
    update?: detail_pemesananUpdateWithWhereUniqueWithoutPemesananInput | detail_pemesananUpdateWithWhereUniqueWithoutPemesananInput[]
    updateMany?: detail_pemesananUpdateManyWithWhereWithoutPemesananInput | detail_pemesananUpdateManyWithWhereWithoutPemesananInput[]
    deleteMany?: detail_pemesananScalarWhereInput | detail_pemesananScalarWhereInput[]
  }

  export type tb_pemesananCreateNestedOneWithoutPemesananInput = {
    create?: XOR<tb_pemesananCreateWithoutPemesananInput, tb_pemesananUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: tb_pemesananCreateOrConnectWithoutPemesananInput
    connect?: tb_pemesananWhereUniqueInput
  }

  export type tb_keranjangCreateNestedOneWithoutKeranjangInput = {
    create?: XOR<tb_keranjangCreateWithoutKeranjangInput, tb_keranjangUncheckedCreateWithoutKeranjangInput>
    connectOrCreate?: tb_keranjangCreateOrConnectWithoutKeranjangInput
    connect?: tb_keranjangWhereUniqueInput
  }

  export type tb_pemesananUpdateOneRequiredWithoutPemesananNestedInput = {
    create?: XOR<tb_pemesananCreateWithoutPemesananInput, tb_pemesananUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: tb_pemesananCreateOrConnectWithoutPemesananInput
    upsert?: tb_pemesananUpsertWithoutPemesananInput
    connect?: tb_pemesananWhereUniqueInput
    update?: XOR<XOR<tb_pemesananUpdateToOneWithWhereWithoutPemesananInput, tb_pemesananUpdateWithoutPemesananInput>, tb_pemesananUncheckedUpdateWithoutPemesananInput>
  }

  export type tb_keranjangUpdateOneRequiredWithoutKeranjangNestedInput = {
    create?: XOR<tb_keranjangCreateWithoutKeranjangInput, tb_keranjangUncheckedCreateWithoutKeranjangInput>
    connectOrCreate?: tb_keranjangCreateOrConnectWithoutKeranjangInput
    upsert?: tb_keranjangUpsertWithoutKeranjangInput
    connect?: tb_keranjangWhereUniqueInput
    update?: XOR<XOR<tb_keranjangUpdateToOneWithWhereWithoutKeranjangInput, tb_keranjangUpdateWithoutKeranjangInput>, tb_keranjangUncheckedUpdateWithoutKeranjangInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumkategoriFilter<$PrismaModel = never> = {
    equals?: $Enums.kategori | EnumkategoriFieldRefInput<$PrismaModel>
    in?: $Enums.kategori[]
    notIn?: $Enums.kategori[]
    not?: NestedEnumkategoriFilter<$PrismaModel> | $Enums.kategori
  }

  export type NestedEnumketersediaanFilter<$PrismaModel = never> = {
    equals?: $Enums.ketersediaan | EnumketersediaanFieldRefInput<$PrismaModel>
    in?: $Enums.ketersediaan[]
    notIn?: $Enums.ketersediaan[]
    not?: NestedEnumketersediaanFilter<$PrismaModel> | $Enums.ketersediaan
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumkategoriWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.kategori | EnumkategoriFieldRefInput<$PrismaModel>
    in?: $Enums.kategori[]
    notIn?: $Enums.kategori[]
    not?: NestedEnumkategoriWithAggregatesFilter<$PrismaModel> | $Enums.kategori
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumkategoriFilter<$PrismaModel>
    _max?: NestedEnumkategoriFilter<$PrismaModel>
  }

  export type NestedEnumketersediaanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ketersediaan | EnumketersediaanFieldRefInput<$PrismaModel>
    in?: $Enums.ketersediaan[]
    notIn?: $Enums.ketersediaan[]
    not?: NestedEnumketersediaanWithAggregatesFilter<$PrismaModel> | $Enums.ketersediaan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumketersediaanFilter<$PrismaModel>
    _max?: NestedEnumketersediaanFilter<$PrismaModel>
  }

  export type NestedEnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[]
    notIn?: $Enums.role[]
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type NestedEnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[]
    notIn?: $Enums.role[]
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type NestedEnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type NestedEnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type NestedEnummetode_pembayaranFilter<$PrismaModel = never> = {
    equals?: $Enums.metode_pembayaran | Enummetode_pembayaranFieldRefInput<$PrismaModel>
    in?: $Enums.metode_pembayaran[]
    notIn?: $Enums.metode_pembayaran[]
    not?: NestedEnummetode_pembayaranFilter<$PrismaModel> | $Enums.metode_pembayaran
  }

  export type NestedEnumstatus_pemesananFilter<$PrismaModel = never> = {
    equals?: $Enums.status_pemesanan | Enumstatus_pemesananFieldRefInput<$PrismaModel>
    in?: $Enums.status_pemesanan[]
    notIn?: $Enums.status_pemesanan[]
    not?: NestedEnumstatus_pemesananFilter<$PrismaModel> | $Enums.status_pemesanan
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

  export type NestedEnummetode_pembayaranWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.metode_pembayaran | Enummetode_pembayaranFieldRefInput<$PrismaModel>
    in?: $Enums.metode_pembayaran[]
    notIn?: $Enums.metode_pembayaran[]
    not?: NestedEnummetode_pembayaranWithAggregatesFilter<$PrismaModel> | $Enums.metode_pembayaran
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummetode_pembayaranFilter<$PrismaModel>
    _max?: NestedEnummetode_pembayaranFilter<$PrismaModel>
  }

  export type NestedEnumstatus_pemesananWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_pemesanan | Enumstatus_pemesananFieldRefInput<$PrismaModel>
    in?: $Enums.status_pemesanan[]
    notIn?: $Enums.status_pemesanan[]
    not?: NestedEnumstatus_pemesananWithAggregatesFilter<$PrismaModel> | $Enums.status_pemesanan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatus_pemesananFilter<$PrismaModel>
    _max?: NestedEnumstatus_pemesananFilter<$PrismaModel>
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

  export type tb_keranjangCreateWithoutMenuInput = {
    quantity: number
    total: number
    status?: $Enums.status
    user: tb_userCreateNestedOneWithoutKeranjangInput
    keranjang?: detail_pemesananCreateNestedManyWithoutKeranjangInput
  }

  export type tb_keranjangUncheckedCreateWithoutMenuInput = {
    id?: number
    idUser: number
    quantity: number
    total: number
    status?: $Enums.status
    keranjang?: detail_pemesananUncheckedCreateNestedManyWithoutKeranjangInput
  }

  export type tb_keranjangCreateOrConnectWithoutMenuInput = {
    where: tb_keranjangWhereUniqueInput
    create: XOR<tb_keranjangCreateWithoutMenuInput, tb_keranjangUncheckedCreateWithoutMenuInput>
  }

  export type tb_keranjangCreateManyMenuInputEnvelope = {
    data: tb_keranjangCreateManyMenuInput | tb_keranjangCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type tb_keranjangUpsertWithWhereUniqueWithoutMenuInput = {
    where: tb_keranjangWhereUniqueInput
    update: XOR<tb_keranjangUpdateWithoutMenuInput, tb_keranjangUncheckedUpdateWithoutMenuInput>
    create: XOR<tb_keranjangCreateWithoutMenuInput, tb_keranjangUncheckedCreateWithoutMenuInput>
  }

  export type tb_keranjangUpdateWithWhereUniqueWithoutMenuInput = {
    where: tb_keranjangWhereUniqueInput
    data: XOR<tb_keranjangUpdateWithoutMenuInput, tb_keranjangUncheckedUpdateWithoutMenuInput>
  }

  export type tb_keranjangUpdateManyWithWhereWithoutMenuInput = {
    where: tb_keranjangScalarWhereInput
    data: XOR<tb_keranjangUpdateManyMutationInput, tb_keranjangUncheckedUpdateManyWithoutMenuInput>
  }

  export type tb_keranjangScalarWhereInput = {
    AND?: tb_keranjangScalarWhereInput | tb_keranjangScalarWhereInput[]
    OR?: tb_keranjangScalarWhereInput[]
    NOT?: tb_keranjangScalarWhereInput | tb_keranjangScalarWhereInput[]
    id?: IntFilter<"tb_keranjang"> | number
    idUser?: IntFilter<"tb_keranjang"> | number
    idMenu?: IntFilter<"tb_keranjang"> | number
    quantity?: IntFilter<"tb_keranjang"> | number
    total?: IntFilter<"tb_keranjang"> | number
    status?: EnumstatusFilter<"tb_keranjang"> | $Enums.status
  }

  export type tb_keranjangCreateWithoutUserInput = {
    quantity: number
    total: number
    status?: $Enums.status
    menu: tb_menuCreateNestedOneWithoutKeranjangInput
    keranjang?: detail_pemesananCreateNestedManyWithoutKeranjangInput
  }

  export type tb_keranjangUncheckedCreateWithoutUserInput = {
    id?: number
    idMenu: number
    quantity: number
    total: number
    status?: $Enums.status
    keranjang?: detail_pemesananUncheckedCreateNestedManyWithoutKeranjangInput
  }

  export type tb_keranjangCreateOrConnectWithoutUserInput = {
    where: tb_keranjangWhereUniqueInput
    create: XOR<tb_keranjangCreateWithoutUserInput, tb_keranjangUncheckedCreateWithoutUserInput>
  }

  export type tb_keranjangCreateManyUserInputEnvelope = {
    data: tb_keranjangCreateManyUserInput | tb_keranjangCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type tb_pemesananCreateWithoutUserInput = {
    metode?: $Enums.metode_pembayaran
    totalProduk: number
    pajak: string
    total: number
    status?: $Enums.status_pemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
    meja: tb_mejaCreateNestedOneWithoutMejaInput
    pemesanan?: detail_pemesananCreateNestedManyWithoutPemesananInput
  }

  export type tb_pemesananUncheckedCreateWithoutUserInput = {
    id?: number
    idMeja: number
    metode?: $Enums.metode_pembayaran
    totalProduk: number
    pajak: string
    total: number
    status?: $Enums.status_pemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
    pemesanan?: detail_pemesananUncheckedCreateNestedManyWithoutPemesananInput
  }

  export type tb_pemesananCreateOrConnectWithoutUserInput = {
    where: tb_pemesananWhereUniqueInput
    create: XOR<tb_pemesananCreateWithoutUserInput, tb_pemesananUncheckedCreateWithoutUserInput>
  }

  export type tb_pemesananCreateManyUserInputEnvelope = {
    data: tb_pemesananCreateManyUserInput | tb_pemesananCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type tb_keranjangUpsertWithWhereUniqueWithoutUserInput = {
    where: tb_keranjangWhereUniqueInput
    update: XOR<tb_keranjangUpdateWithoutUserInput, tb_keranjangUncheckedUpdateWithoutUserInput>
    create: XOR<tb_keranjangCreateWithoutUserInput, tb_keranjangUncheckedCreateWithoutUserInput>
  }

  export type tb_keranjangUpdateWithWhereUniqueWithoutUserInput = {
    where: tb_keranjangWhereUniqueInput
    data: XOR<tb_keranjangUpdateWithoutUserInput, tb_keranjangUncheckedUpdateWithoutUserInput>
  }

  export type tb_keranjangUpdateManyWithWhereWithoutUserInput = {
    where: tb_keranjangScalarWhereInput
    data: XOR<tb_keranjangUpdateManyMutationInput, tb_keranjangUncheckedUpdateManyWithoutUserInput>
  }

  export type tb_pemesananUpsertWithWhereUniqueWithoutUserInput = {
    where: tb_pemesananWhereUniqueInput
    update: XOR<tb_pemesananUpdateWithoutUserInput, tb_pemesananUncheckedUpdateWithoutUserInput>
    create: XOR<tb_pemesananCreateWithoutUserInput, tb_pemesananUncheckedCreateWithoutUserInput>
  }

  export type tb_pemesananUpdateWithWhereUniqueWithoutUserInput = {
    where: tb_pemesananWhereUniqueInput
    data: XOR<tb_pemesananUpdateWithoutUserInput, tb_pemesananUncheckedUpdateWithoutUserInput>
  }

  export type tb_pemesananUpdateManyWithWhereWithoutUserInput = {
    where: tb_pemesananScalarWhereInput
    data: XOR<tb_pemesananUpdateManyMutationInput, tb_pemesananUncheckedUpdateManyWithoutUserInput>
  }

  export type tb_pemesananScalarWhereInput = {
    AND?: tb_pemesananScalarWhereInput | tb_pemesananScalarWhereInput[]
    OR?: tb_pemesananScalarWhereInput[]
    NOT?: tb_pemesananScalarWhereInput | tb_pemesananScalarWhereInput[]
    id?: IntFilter<"tb_pemesanan"> | number
    idUser?: IntFilter<"tb_pemesanan"> | number
    idMeja?: IntFilter<"tb_pemesanan"> | number
    metode?: Enummetode_pembayaranFilter<"tb_pemesanan"> | $Enums.metode_pembayaran
    totalProduk?: IntFilter<"tb_pemesanan"> | number
    pajak?: StringFilter<"tb_pemesanan"> | string
    total?: IntFilter<"tb_pemesanan"> | number
    status?: Enumstatus_pemesananFilter<"tb_pemesanan"> | $Enums.status_pemesanan
    createdAt?: DateTimeFilter<"tb_pemesanan"> | Date | string
    updatedAt?: DateTimeFilter<"tb_pemesanan"> | Date | string
  }

  export type tb_userCreateWithoutKeranjangInput = {
    namaLengkap: string
    username: string
    noHp: string
    email: string
    alamat: string
    password: string
    role?: $Enums.role
    pemesanan?: tb_pemesananCreateNestedManyWithoutUserInput
  }

  export type tb_userUncheckedCreateWithoutKeranjangInput = {
    id?: number
    namaLengkap: string
    username: string
    noHp: string
    email: string
    alamat: string
    password: string
    role?: $Enums.role
    pemesanan?: tb_pemesananUncheckedCreateNestedManyWithoutUserInput
  }

  export type tb_userCreateOrConnectWithoutKeranjangInput = {
    where: tb_userWhereUniqueInput
    create: XOR<tb_userCreateWithoutKeranjangInput, tb_userUncheckedCreateWithoutKeranjangInput>
  }

  export type tb_menuCreateWithoutKeranjangInput = {
    nama: string
    deskripsi: string
    harga: number
    kategori?: $Enums.kategori
    gambar_menu: string
    ketersediaan?: $Enums.ketersediaan
  }

  export type tb_menuUncheckedCreateWithoutKeranjangInput = {
    id?: number
    nama: string
    deskripsi: string
    harga: number
    kategori?: $Enums.kategori
    gambar_menu: string
    ketersediaan?: $Enums.ketersediaan
  }

  export type tb_menuCreateOrConnectWithoutKeranjangInput = {
    where: tb_menuWhereUniqueInput
    create: XOR<tb_menuCreateWithoutKeranjangInput, tb_menuUncheckedCreateWithoutKeranjangInput>
  }

  export type detail_pemesananCreateWithoutKeranjangInput = {
    note: string
    createdAt?: Date | string
    pemesanan: tb_pemesananCreateNestedOneWithoutPemesananInput
  }

  export type detail_pemesananUncheckedCreateWithoutKeranjangInput = {
    id?: number
    idPemesanan: number
    note: string
    createdAt?: Date | string
  }

  export type detail_pemesananCreateOrConnectWithoutKeranjangInput = {
    where: detail_pemesananWhereUniqueInput
    create: XOR<detail_pemesananCreateWithoutKeranjangInput, detail_pemesananUncheckedCreateWithoutKeranjangInput>
  }

  export type detail_pemesananCreateManyKeranjangInputEnvelope = {
    data: detail_pemesananCreateManyKeranjangInput | detail_pemesananCreateManyKeranjangInput[]
    skipDuplicates?: boolean
  }

  export type tb_userUpsertWithoutKeranjangInput = {
    update: XOR<tb_userUpdateWithoutKeranjangInput, tb_userUncheckedUpdateWithoutKeranjangInput>
    create: XOR<tb_userCreateWithoutKeranjangInput, tb_userUncheckedCreateWithoutKeranjangInput>
    where?: tb_userWhereInput
  }

  export type tb_userUpdateToOneWithWhereWithoutKeranjangInput = {
    where?: tb_userWhereInput
    data: XOR<tb_userUpdateWithoutKeranjangInput, tb_userUncheckedUpdateWithoutKeranjangInput>
  }

  export type tb_userUpdateWithoutKeranjangInput = {
    namaLengkap?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    pemesanan?: tb_pemesananUpdateManyWithoutUserNestedInput
  }

  export type tb_userUncheckedUpdateWithoutKeranjangInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaLengkap?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    pemesanan?: tb_pemesananUncheckedUpdateManyWithoutUserNestedInput
  }

  export type tb_menuUpsertWithoutKeranjangInput = {
    update: XOR<tb_menuUpdateWithoutKeranjangInput, tb_menuUncheckedUpdateWithoutKeranjangInput>
    create: XOR<tb_menuCreateWithoutKeranjangInput, tb_menuUncheckedCreateWithoutKeranjangInput>
    where?: tb_menuWhereInput
  }

  export type tb_menuUpdateToOneWithWhereWithoutKeranjangInput = {
    where?: tb_menuWhereInput
    data: XOR<tb_menuUpdateWithoutKeranjangInput, tb_menuUncheckedUpdateWithoutKeranjangInput>
  }

  export type tb_menuUpdateWithoutKeranjangInput = {
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    kategori?: EnumkategoriFieldUpdateOperationsInput | $Enums.kategori
    gambar_menu?: StringFieldUpdateOperationsInput | string
    ketersediaan?: EnumketersediaanFieldUpdateOperationsInput | $Enums.ketersediaan
  }

  export type tb_menuUncheckedUpdateWithoutKeranjangInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    kategori?: EnumkategoriFieldUpdateOperationsInput | $Enums.kategori
    gambar_menu?: StringFieldUpdateOperationsInput | string
    ketersediaan?: EnumketersediaanFieldUpdateOperationsInput | $Enums.ketersediaan
  }

  export type detail_pemesananUpsertWithWhereUniqueWithoutKeranjangInput = {
    where: detail_pemesananWhereUniqueInput
    update: XOR<detail_pemesananUpdateWithoutKeranjangInput, detail_pemesananUncheckedUpdateWithoutKeranjangInput>
    create: XOR<detail_pemesananCreateWithoutKeranjangInput, detail_pemesananUncheckedCreateWithoutKeranjangInput>
  }

  export type detail_pemesananUpdateWithWhereUniqueWithoutKeranjangInput = {
    where: detail_pemesananWhereUniqueInput
    data: XOR<detail_pemesananUpdateWithoutKeranjangInput, detail_pemesananUncheckedUpdateWithoutKeranjangInput>
  }

  export type detail_pemesananUpdateManyWithWhereWithoutKeranjangInput = {
    where: detail_pemesananScalarWhereInput
    data: XOR<detail_pemesananUpdateManyMutationInput, detail_pemesananUncheckedUpdateManyWithoutKeranjangInput>
  }

  export type detail_pemesananScalarWhereInput = {
    AND?: detail_pemesananScalarWhereInput | detail_pemesananScalarWhereInput[]
    OR?: detail_pemesananScalarWhereInput[]
    NOT?: detail_pemesananScalarWhereInput | detail_pemesananScalarWhereInput[]
    id?: IntFilter<"detail_pemesanan"> | number
    idPemesanan?: IntFilter<"detail_pemesanan"> | number
    idKeranjang?: IntFilter<"detail_pemesanan"> | number
    note?: StringFilter<"detail_pemesanan"> | string
    createdAt?: DateTimeFilter<"detail_pemesanan"> | Date | string
  }

  export type tb_pemesananCreateWithoutMejaInput = {
    metode?: $Enums.metode_pembayaran
    totalProduk: number
    pajak: string
    total: number
    status?: $Enums.status_pemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
    user: tb_userCreateNestedOneWithoutPemesananInput
    pemesanan?: detail_pemesananCreateNestedManyWithoutPemesananInput
  }

  export type tb_pemesananUncheckedCreateWithoutMejaInput = {
    id?: number
    idUser: number
    metode?: $Enums.metode_pembayaran
    totalProduk: number
    pajak: string
    total: number
    status?: $Enums.status_pemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
    pemesanan?: detail_pemesananUncheckedCreateNestedManyWithoutPemesananInput
  }

  export type tb_pemesananCreateOrConnectWithoutMejaInput = {
    where: tb_pemesananWhereUniqueInput
    create: XOR<tb_pemesananCreateWithoutMejaInput, tb_pemesananUncheckedCreateWithoutMejaInput>
  }

  export type tb_pemesananCreateManyMejaInputEnvelope = {
    data: tb_pemesananCreateManyMejaInput | tb_pemesananCreateManyMejaInput[]
    skipDuplicates?: boolean
  }

  export type tb_pemesananUpsertWithWhereUniqueWithoutMejaInput = {
    where: tb_pemesananWhereUniqueInput
    update: XOR<tb_pemesananUpdateWithoutMejaInput, tb_pemesananUncheckedUpdateWithoutMejaInput>
    create: XOR<tb_pemesananCreateWithoutMejaInput, tb_pemesananUncheckedCreateWithoutMejaInput>
  }

  export type tb_pemesananUpdateWithWhereUniqueWithoutMejaInput = {
    where: tb_pemesananWhereUniqueInput
    data: XOR<tb_pemesananUpdateWithoutMejaInput, tb_pemesananUncheckedUpdateWithoutMejaInput>
  }

  export type tb_pemesananUpdateManyWithWhereWithoutMejaInput = {
    where: tb_pemesananScalarWhereInput
    data: XOR<tb_pemesananUpdateManyMutationInput, tb_pemesananUncheckedUpdateManyWithoutMejaInput>
  }

  export type tb_userCreateWithoutPemesananInput = {
    namaLengkap: string
    username: string
    noHp: string
    email: string
    alamat: string
    password: string
    role?: $Enums.role
    keranjang?: tb_keranjangCreateNestedManyWithoutUserInput
  }

  export type tb_userUncheckedCreateWithoutPemesananInput = {
    id?: number
    namaLengkap: string
    username: string
    noHp: string
    email: string
    alamat: string
    password: string
    role?: $Enums.role
    keranjang?: tb_keranjangUncheckedCreateNestedManyWithoutUserInput
  }

  export type tb_userCreateOrConnectWithoutPemesananInput = {
    where: tb_userWhereUniqueInput
    create: XOR<tb_userCreateWithoutPemesananInput, tb_userUncheckedCreateWithoutPemesananInput>
  }

  export type tb_mejaCreateWithoutMejaInput = {
    namaMeja: string
  }

  export type tb_mejaUncheckedCreateWithoutMejaInput = {
    id?: number
    namaMeja: string
  }

  export type tb_mejaCreateOrConnectWithoutMejaInput = {
    where: tb_mejaWhereUniqueInput
    create: XOR<tb_mejaCreateWithoutMejaInput, tb_mejaUncheckedCreateWithoutMejaInput>
  }

  export type detail_pemesananCreateWithoutPemesananInput = {
    note: string
    createdAt?: Date | string
    keranjang: tb_keranjangCreateNestedOneWithoutKeranjangInput
  }

  export type detail_pemesananUncheckedCreateWithoutPemesananInput = {
    id?: number
    idKeranjang: number
    note: string
    createdAt?: Date | string
  }

  export type detail_pemesananCreateOrConnectWithoutPemesananInput = {
    where: detail_pemesananWhereUniqueInput
    create: XOR<detail_pemesananCreateWithoutPemesananInput, detail_pemesananUncheckedCreateWithoutPemesananInput>
  }

  export type detail_pemesananCreateManyPemesananInputEnvelope = {
    data: detail_pemesananCreateManyPemesananInput | detail_pemesananCreateManyPemesananInput[]
    skipDuplicates?: boolean
  }

  export type tb_userUpsertWithoutPemesananInput = {
    update: XOR<tb_userUpdateWithoutPemesananInput, tb_userUncheckedUpdateWithoutPemesananInput>
    create: XOR<tb_userCreateWithoutPemesananInput, tb_userUncheckedCreateWithoutPemesananInput>
    where?: tb_userWhereInput
  }

  export type tb_userUpdateToOneWithWhereWithoutPemesananInput = {
    where?: tb_userWhereInput
    data: XOR<tb_userUpdateWithoutPemesananInput, tb_userUncheckedUpdateWithoutPemesananInput>
  }

  export type tb_userUpdateWithoutPemesananInput = {
    namaLengkap?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    keranjang?: tb_keranjangUpdateManyWithoutUserNestedInput
  }

  export type tb_userUncheckedUpdateWithoutPemesananInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaLengkap?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    keranjang?: tb_keranjangUncheckedUpdateManyWithoutUserNestedInput
  }

  export type tb_mejaUpsertWithoutMejaInput = {
    update: XOR<tb_mejaUpdateWithoutMejaInput, tb_mejaUncheckedUpdateWithoutMejaInput>
    create: XOR<tb_mejaCreateWithoutMejaInput, tb_mejaUncheckedCreateWithoutMejaInput>
    where?: tb_mejaWhereInput
  }

  export type tb_mejaUpdateToOneWithWhereWithoutMejaInput = {
    where?: tb_mejaWhereInput
    data: XOR<tb_mejaUpdateWithoutMejaInput, tb_mejaUncheckedUpdateWithoutMejaInput>
  }

  export type tb_mejaUpdateWithoutMejaInput = {
    namaMeja?: StringFieldUpdateOperationsInput | string
  }

  export type tb_mejaUncheckedUpdateWithoutMejaInput = {
    id?: IntFieldUpdateOperationsInput | number
    namaMeja?: StringFieldUpdateOperationsInput | string
  }

  export type detail_pemesananUpsertWithWhereUniqueWithoutPemesananInput = {
    where: detail_pemesananWhereUniqueInput
    update: XOR<detail_pemesananUpdateWithoutPemesananInput, detail_pemesananUncheckedUpdateWithoutPemesananInput>
    create: XOR<detail_pemesananCreateWithoutPemesananInput, detail_pemesananUncheckedCreateWithoutPemesananInput>
  }

  export type detail_pemesananUpdateWithWhereUniqueWithoutPemesananInput = {
    where: detail_pemesananWhereUniqueInput
    data: XOR<detail_pemesananUpdateWithoutPemesananInput, detail_pemesananUncheckedUpdateWithoutPemesananInput>
  }

  export type detail_pemesananUpdateManyWithWhereWithoutPemesananInput = {
    where: detail_pemesananScalarWhereInput
    data: XOR<detail_pemesananUpdateManyMutationInput, detail_pemesananUncheckedUpdateManyWithoutPemesananInput>
  }

  export type tb_pemesananCreateWithoutPemesananInput = {
    metode?: $Enums.metode_pembayaran
    totalProduk: number
    pajak: string
    total: number
    status?: $Enums.status_pemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
    user: tb_userCreateNestedOneWithoutPemesananInput
    meja: tb_mejaCreateNestedOneWithoutMejaInput
  }

  export type tb_pemesananUncheckedCreateWithoutPemesananInput = {
    id?: number
    idUser: number
    idMeja: number
    metode?: $Enums.metode_pembayaran
    totalProduk: number
    pajak: string
    total: number
    status?: $Enums.status_pemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tb_pemesananCreateOrConnectWithoutPemesananInput = {
    where: tb_pemesananWhereUniqueInput
    create: XOR<tb_pemesananCreateWithoutPemesananInput, tb_pemesananUncheckedCreateWithoutPemesananInput>
  }

  export type tb_keranjangCreateWithoutKeranjangInput = {
    quantity: number
    total: number
    status?: $Enums.status
    user: tb_userCreateNestedOneWithoutKeranjangInput
    menu: tb_menuCreateNestedOneWithoutKeranjangInput
  }

  export type tb_keranjangUncheckedCreateWithoutKeranjangInput = {
    id?: number
    idUser: number
    idMenu: number
    quantity: number
    total: number
    status?: $Enums.status
  }

  export type tb_keranjangCreateOrConnectWithoutKeranjangInput = {
    where: tb_keranjangWhereUniqueInput
    create: XOR<tb_keranjangCreateWithoutKeranjangInput, tb_keranjangUncheckedCreateWithoutKeranjangInput>
  }

  export type tb_pemesananUpsertWithoutPemesananInput = {
    update: XOR<tb_pemesananUpdateWithoutPemesananInput, tb_pemesananUncheckedUpdateWithoutPemesananInput>
    create: XOR<tb_pemesananCreateWithoutPemesananInput, tb_pemesananUncheckedCreateWithoutPemesananInput>
    where?: tb_pemesananWhereInput
  }

  export type tb_pemesananUpdateToOneWithWhereWithoutPemesananInput = {
    where?: tb_pemesananWhereInput
    data: XOR<tb_pemesananUpdateWithoutPemesananInput, tb_pemesananUncheckedUpdateWithoutPemesananInput>
  }

  export type tb_pemesananUpdateWithoutPemesananInput = {
    metode?: Enummetode_pembayaranFieldUpdateOperationsInput | $Enums.metode_pembayaran
    totalProduk?: IntFieldUpdateOperationsInput | number
    pajak?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumstatus_pemesananFieldUpdateOperationsInput | $Enums.status_pemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: tb_userUpdateOneRequiredWithoutPemesananNestedInput
    meja?: tb_mejaUpdateOneRequiredWithoutMejaNestedInput
  }

  export type tb_pemesananUncheckedUpdateWithoutPemesananInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUser?: IntFieldUpdateOperationsInput | number
    idMeja?: IntFieldUpdateOperationsInput | number
    metode?: Enummetode_pembayaranFieldUpdateOperationsInput | $Enums.metode_pembayaran
    totalProduk?: IntFieldUpdateOperationsInput | number
    pajak?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumstatus_pemesananFieldUpdateOperationsInput | $Enums.status_pemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tb_keranjangUpsertWithoutKeranjangInput = {
    update: XOR<tb_keranjangUpdateWithoutKeranjangInput, tb_keranjangUncheckedUpdateWithoutKeranjangInput>
    create: XOR<tb_keranjangCreateWithoutKeranjangInput, tb_keranjangUncheckedCreateWithoutKeranjangInput>
    where?: tb_keranjangWhereInput
  }

  export type tb_keranjangUpdateToOneWithWhereWithoutKeranjangInput = {
    where?: tb_keranjangWhereInput
    data: XOR<tb_keranjangUpdateWithoutKeranjangInput, tb_keranjangUncheckedUpdateWithoutKeranjangInput>
  }

  export type tb_keranjangUpdateWithoutKeranjangInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    user?: tb_userUpdateOneRequiredWithoutKeranjangNestedInput
    menu?: tb_menuUpdateOneRequiredWithoutKeranjangNestedInput
  }

  export type tb_keranjangUncheckedUpdateWithoutKeranjangInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUser?: IntFieldUpdateOperationsInput | number
    idMenu?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type tb_keranjangCreateManyMenuInput = {
    id?: number
    idUser: number
    quantity: number
    total: number
    status?: $Enums.status
  }

  export type tb_keranjangUpdateWithoutMenuInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    user?: tb_userUpdateOneRequiredWithoutKeranjangNestedInput
    keranjang?: detail_pemesananUpdateManyWithoutKeranjangNestedInput
  }

  export type tb_keranjangUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUser?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    keranjang?: detail_pemesananUncheckedUpdateManyWithoutKeranjangNestedInput
  }

  export type tb_keranjangUncheckedUpdateManyWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUser?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type tb_keranjangCreateManyUserInput = {
    id?: number
    idMenu: number
    quantity: number
    total: number
    status?: $Enums.status
  }

  export type tb_pemesananCreateManyUserInput = {
    id?: number
    idMeja: number
    metode?: $Enums.metode_pembayaran
    totalProduk: number
    pajak: string
    total: number
    status?: $Enums.status_pemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tb_keranjangUpdateWithoutUserInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    menu?: tb_menuUpdateOneRequiredWithoutKeranjangNestedInput
    keranjang?: detail_pemesananUpdateManyWithoutKeranjangNestedInput
  }

  export type tb_keranjangUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMenu?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    keranjang?: detail_pemesananUncheckedUpdateManyWithoutKeranjangNestedInput
  }

  export type tb_keranjangUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMenu?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type tb_pemesananUpdateWithoutUserInput = {
    metode?: Enummetode_pembayaranFieldUpdateOperationsInput | $Enums.metode_pembayaran
    totalProduk?: IntFieldUpdateOperationsInput | number
    pajak?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumstatus_pemesananFieldUpdateOperationsInput | $Enums.status_pemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meja?: tb_mejaUpdateOneRequiredWithoutMejaNestedInput
    pemesanan?: detail_pemesananUpdateManyWithoutPemesananNestedInput
  }

  export type tb_pemesananUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMeja?: IntFieldUpdateOperationsInput | number
    metode?: Enummetode_pembayaranFieldUpdateOperationsInput | $Enums.metode_pembayaran
    totalProduk?: IntFieldUpdateOperationsInput | number
    pajak?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumstatus_pemesananFieldUpdateOperationsInput | $Enums.status_pemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pemesanan?: detail_pemesananUncheckedUpdateManyWithoutPemesananNestedInput
  }

  export type tb_pemesananUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    idMeja?: IntFieldUpdateOperationsInput | number
    metode?: Enummetode_pembayaranFieldUpdateOperationsInput | $Enums.metode_pembayaran
    totalProduk?: IntFieldUpdateOperationsInput | number
    pajak?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumstatus_pemesananFieldUpdateOperationsInput | $Enums.status_pemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detail_pemesananCreateManyKeranjangInput = {
    id?: number
    idPemesanan: number
    note: string
    createdAt?: Date | string
  }

  export type detail_pemesananUpdateWithoutKeranjangInput = {
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pemesanan?: tb_pemesananUpdateOneRequiredWithoutPemesananNestedInput
  }

  export type detail_pemesananUncheckedUpdateWithoutKeranjangInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPemesanan?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detail_pemesananUncheckedUpdateManyWithoutKeranjangInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPemesanan?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tb_pemesananCreateManyMejaInput = {
    id?: number
    idUser: number
    metode?: $Enums.metode_pembayaran
    totalProduk: number
    pajak: string
    total: number
    status?: $Enums.status_pemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tb_pemesananUpdateWithoutMejaInput = {
    metode?: Enummetode_pembayaranFieldUpdateOperationsInput | $Enums.metode_pembayaran
    totalProduk?: IntFieldUpdateOperationsInput | number
    pajak?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumstatus_pemesananFieldUpdateOperationsInput | $Enums.status_pemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: tb_userUpdateOneRequiredWithoutPemesananNestedInput
    pemesanan?: detail_pemesananUpdateManyWithoutPemesananNestedInput
  }

  export type tb_pemesananUncheckedUpdateWithoutMejaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUser?: IntFieldUpdateOperationsInput | number
    metode?: Enummetode_pembayaranFieldUpdateOperationsInput | $Enums.metode_pembayaran
    totalProduk?: IntFieldUpdateOperationsInput | number
    pajak?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumstatus_pemesananFieldUpdateOperationsInput | $Enums.status_pemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pemesanan?: detail_pemesananUncheckedUpdateManyWithoutPemesananNestedInput
  }

  export type tb_pemesananUncheckedUpdateManyWithoutMejaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUser?: IntFieldUpdateOperationsInput | number
    metode?: Enummetode_pembayaranFieldUpdateOperationsInput | $Enums.metode_pembayaran
    totalProduk?: IntFieldUpdateOperationsInput | number
    pajak?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    status?: Enumstatus_pemesananFieldUpdateOperationsInput | $Enums.status_pemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detail_pemesananCreateManyPemesananInput = {
    id?: number
    idKeranjang: number
    note: string
    createdAt?: Date | string
  }

  export type detail_pemesananUpdateWithoutPemesananInput = {
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keranjang?: tb_keranjangUpdateOneRequiredWithoutKeranjangNestedInput
  }

  export type detail_pemesananUncheckedUpdateWithoutPemesananInput = {
    id?: IntFieldUpdateOperationsInput | number
    idKeranjang?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detail_pemesananUncheckedUpdateManyWithoutPemesananInput = {
    id?: IntFieldUpdateOperationsInput | number
    idKeranjang?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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