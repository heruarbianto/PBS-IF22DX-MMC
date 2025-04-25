
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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




  const path = require('path')

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

exports.metode_pembayaran = exports.$Enums.metode_pembayaran = {
  TUNAI: 'TUNAI',
  ePayment: 'ePayment'
};

exports.status = exports.$Enums.status = {
  TRUE: 'TRUE',
  FALSE: 'FALSE'
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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/heru/Dokumen/PBS/PBS-IF22DX-MMC/PROGRAM/backend/src/generated/prisma",
      "fromEnvVar": null
    },
    "config": {
      "moduleFormat": "library",
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/home/heru/Dokumen/PBS/PBS-IF22DX-MMC/PROGRAM/backend/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider     = \"prisma-client-js\"\n  output       = \"../src/generated/prisma\" // `output` is required\n  moduleFormat = \"library\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n// Buat Enum Kategori\nenum kategori {\n  MAKANAN\n  MINUMAN\n}\n\nenum ketersediaan {\n  READY\n  SOLDOUT\n}\n\nenum role {\n  ADMIN\n  KASIR\n  PELANGGAN\n}\n\nenum metode_pembayaran {\n  TUNAI\n  ePayment\n}\n\nmodel tb_menu {\n  id           Int            @id @unique @default(autoincrement())\n  nama         String         @db.VarChar(100)\n  deskripsi    String         @db.Text\n  harga        Int            @db.Int()\n  kategori     kategori       @default(MAKANAN)\n  gambar_menu  String         @db.Text\n  ketersediaan ketersediaan   @default(READY)\n  keranjang    tb_keranjang[]\n}\n\nmodel tb_user {\n  id          Int            @id @unique @default(autoincrement())\n  namaLengkap String         @db.VarChar(100)\n  username    String         @db.Char(22)\n  noHp        String         @db.VarChar(20)\n  email       String         @db.VarChar(50)\n  alamat      String         @db.Text\n  password    String         @db.VarChar(50)\n  role        role           @default(PELANGGAN)\n  keranjang   tb_keranjang[]\n  pemesanan   tb_pemesanan[]\n}\n\nenum status {\n  TRUE\n  FALSE\n}\n\nmodel tb_keranjang {\n  id        Int                @id @unique @default(autoincrement())\n  idUser    Int                @db.Int\n  idMenu    Int                @db.Int\n  quantity  Int                @db.Int\n  total     Int                @db.Int\n  status    status             @default(FALSE) // buat relasi\n  user      tb_user            @relation(fields: [idUser], references: [id], onDelete: Cascade, onUpdate: Cascade)\n  menu      tb_menu            @relation(fields: [idMenu], references: [id], onDelete: Cascade, onUpdate: Cascade)\n  keranjang detail_pemesanan[]\n}\n\nmodel tb_meja {\n  id       Int            @id @unique @default(autoincrement())\n  namaMeja String         @db.VarChar(20)\n  meja     tb_pemesanan[]\n}\n\nenum status_pemesanan {\n  MENUNGGUPEMBAYARAN\n  DIPROSES\n  SELESAI\n  DIBATALKAN\n}\n\nmodel tb_pemesanan {\n  id          Int                @id @unique @default(autoincrement())\n  idUser      Int                @db.Int\n  idMeja      Int                @db.Int\n  metode      metode_pembayaran  @default(TUNAI)\n  totalProduk Int                @db.Int\n  pajak       String             @db.VarChar(10)\n  total       Int                @db.Int\n  status      status_pemesanan   @default(MENUNGGUPEMBAYARAN)\n  createdAt   DateTime           @default(now())\n  updatedAt   DateTime           @updatedAt\n  user        tb_user            @relation(fields: [idUser], references: [id], onDelete: Cascade, onUpdate: Cascade)\n  meja        tb_meja            @relation(fields: [idMeja], references: [id], onDelete: Cascade, onUpdate: Cascade)\n  pemesanan   detail_pemesanan[]\n}\n\nmodel detail_pemesanan {\n  id          Int          @id @default(autoincrement())\n  idPemesanan Int          @db.Int\n  idKeranjang Int          @db.Int\n  note        String       @db.Text\n  createdAt   DateTime     @default(now())\n  pemesanan   tb_pemesanan @relation(fields: [idPemesanan], references: [id], onDelete: Cascade, onUpdate: Cascade)\n  keranjang   tb_keranjang @relation(fields: [idKeranjang], references: [id], onDelete: Cascade, onUpdate: Cascade)\n}\n",
  "inlineSchemaHash": "e97683f6f554733dd75d2df5e4c62e395875dc10589d8efbd7f41b2707622b60",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/generated/prisma",
    "generated/prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"tb_menu\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deskripsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"harga\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"Int\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kategori\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"kategori\",\"nativeType\":null,\"default\":\"MAKANAN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gambar_menu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ketersediaan\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ketersediaan\",\"nativeType\":null,\"default\":\"READY\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keranjang\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tb_keranjang\",\"nativeType\":null,\"relationName\":\"tb_keranjangTotb_menu\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tb_user\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"namaLengkap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"22\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"noHp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"role\",\"nativeType\":null,\"default\":\"PELANGGAN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keranjang\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tb_keranjang\",\"nativeType\":null,\"relationName\":\"tb_keranjangTotb_user\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pemesanan\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tb_pemesanan\",\"nativeType\":null,\"relationName\":\"tb_pemesananTotb_user\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tb_keranjang\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idUser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"Int\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idMenu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"Int\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"Int\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"Int\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"status\",\"nativeType\":null,\"default\":\"FALSE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tb_user\",\"nativeType\":null,\"relationName\":\"tb_keranjangTotb_user\",\"relationFromFields\":[\"idUser\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"menu\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tb_menu\",\"nativeType\":null,\"relationName\":\"tb_keranjangTotb_menu\",\"relationFromFields\":[\"idMenu\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keranjang\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"detail_pemesanan\",\"nativeType\":null,\"relationName\":\"detail_pemesananTotb_keranjang\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tb_meja\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"namaMeja\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meja\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tb_pemesanan\",\"nativeType\":null,\"relationName\":\"tb_mejaTotb_pemesanan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tb_pemesanan\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idUser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"Int\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idMeja\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"Int\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metode\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"metode_pembayaran\",\"nativeType\":null,\"default\":\"TUNAI\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalProduk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"Int\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pajak\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"Int\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"status_pemesanan\",\"nativeType\":null,\"default\":\"MENUNGGUPEMBAYARAN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tb_user\",\"nativeType\":null,\"relationName\":\"tb_pemesananTotb_user\",\"relationFromFields\":[\"idUser\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meja\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tb_meja\",\"nativeType\":null,\"relationName\":\"tb_mejaTotb_pemesanan\",\"relationFromFields\":[\"idMeja\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pemesanan\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"detail_pemesanan\",\"nativeType\":null,\"relationName\":\"detail_pemesananTotb_pemesanan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"detail_pemesanan\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idPemesanan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"Int\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idKeranjang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"Int\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pemesanan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tb_pemesanan\",\"nativeType\":null,\"relationName\":\"detail_pemesananTotb_pemesanan\",\"relationFromFields\":[\"idPemesanan\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"keranjang\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tb_keranjang\",\"nativeType\":null,\"relationName\":\"detail_pemesananTotb_keranjang\",\"relationFromFields\":[\"idKeranjang\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"relationOnUpdate\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"kategori\":{\"values\":[{\"name\":\"MAKANAN\",\"dbName\":null},{\"name\":\"MINUMAN\",\"dbName\":null}],\"dbName\":null},\"ketersediaan\":{\"values\":[{\"name\":\"READY\",\"dbName\":null},{\"name\":\"SOLDOUT\",\"dbName\":null}],\"dbName\":null},\"role\":{\"values\":[{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"KASIR\",\"dbName\":null},{\"name\":\"PELANGGAN\",\"dbName\":null}],\"dbName\":null},\"metode_pembayaran\":{\"values\":[{\"name\":\"TUNAI\",\"dbName\":null},{\"name\":\"ePayment\",\"dbName\":null}],\"dbName\":null},\"status\":{\"values\":[{\"name\":\"TRUE\",\"dbName\":null},{\"name\":\"FALSE\",\"dbName\":null}],\"dbName\":null},\"status_pemesanan\":{\"values\":[{\"name\":\"MENUNGGUPEMBAYARAN\",\"dbName\":null},{\"name\":\"DIPROSES\",\"dbName\":null},{\"name\":\"SELESAI\",\"dbName\":null},{\"name\":\"DIBATALKAN\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "src/generated/prisma/libquery_engine-debian-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/prisma/schema.prisma")
