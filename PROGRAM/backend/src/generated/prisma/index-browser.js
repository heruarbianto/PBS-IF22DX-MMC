
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Tb_menuScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  deskripsi: 'deskripsi',
  harga: 'harga',
  kategori: 'kategori',
  gambar_menu: 'gambar_menu',
  ketersediaan: 'ketersediaan'
};

exports.Prisma.Tb_userScalarFieldEnum = {
  id: 'id',
  namaLengkap: 'namaLengkap',
  username: 'username',
  noHp: 'noHp',
  email: 'email',
  alamat: 'alamat',
  password: 'password',
  role: 'role'
};

exports.Prisma.Tb_keranjangScalarFieldEnum = {
  id: 'id',
  idUser: 'idUser',
  idMenu: 'idMenu',
  quantity: 'quantity',
  total: 'total',
  status: 'status'
};

exports.Prisma.Tb_mejaScalarFieldEnum = {
  id: 'id',
  namaMeja: 'namaMeja'
};

exports.Prisma.Tb_pemesananScalarFieldEnum = {
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

exports.Prisma.Detail_pemesananScalarFieldEnum = {
  id: 'id',
  idPemesanan: 'idPemesanan',
  idKeranjang: 'idKeranjang',
  note: 'note',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.tb_menuOrderByRelevanceFieldEnum = {
  nama: 'nama',
  deskripsi: 'deskripsi',
  gambar_menu: 'gambar_menu'
};

exports.Prisma.tb_userOrderByRelevanceFieldEnum = {
  namaLengkap: 'namaLengkap',
  username: 'username',
  noHp: 'noHp',
  email: 'email',
  alamat: 'alamat',
  password: 'password'
};

exports.Prisma.tb_mejaOrderByRelevanceFieldEnum = {
  namaMeja: 'namaMeja'
};

exports.Prisma.tb_pemesananOrderByRelevanceFieldEnum = {
  pajak: 'pajak'
};

exports.Prisma.detail_pemesananOrderByRelevanceFieldEnum = {
  note: 'note'
};
exports.kategori = exports.$Enums.kategori = {
  MAKANAN: 'MAKANAN',
  MINUMAN: 'MINUMAN'
};

exports.ketersediaan = exports.$Enums.ketersediaan = {
  READY: 'READY',
  SOLDOUT: 'SOLDOUT'
};

exports.role = exports.$Enums.role = {
  ADMIN: 'ADMIN',
  KASIR: 'KASIR',
  PELANGGAN: 'PELANGGAN'
};

exports.status = exports.$Enums.status = {
  TRUE: 'TRUE',
  FALSE: 'FALSE'
};

exports.metode_pembayaran = exports.$Enums.metode_pembayaran = {
  TUNAI: 'TUNAI',
  ePayment: 'ePayment'
};

exports.status_pemesanan = exports.$Enums.status_pemesanan = {
  MENUNGGUPEMBAYARAN: 'MENUNGGUPEMBAYARAN',
  DIPROSES: 'DIPROSES',
  SELESAI: 'SELESAI',
  DIBATALKAN: 'DIBATALKAN'
};

exports.Prisma.ModelName = {
  tb_menu: 'tb_menu',
  tb_user: 'tb_user',
  tb_keranjang: 'tb_keranjang',
  tb_meja: 'tb_meja',
  tb_pemesanan: 'tb_pemesanan',
  detail_pemesanan: 'detail_pemesanan'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
