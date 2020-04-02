const Base58 = require("base-58")
const blake2b = require("blake2b")

// 0: valid hycon address
// 1: invalid hycon address => not start with 'H'
// 2: invalid hycon address => address must is not 20 bytes long
// 3: invalid hycon address => address checkSum is incorrect

function validateAddr(address) {
    if (address.charAt(0) !== "H") {
        return 1
    }
    const check = address.slice(-4)
    address = address.slice(1, -4)
    const out = Base58.decode(address)
    if (out.length !== 20) {
        return 2
    }
    const expectedChecksum = addressCheckSum(out)
    if (expectedChecksum !== check) {
        return 3
    }
    return 0
}

function addressCheckSum(arr) {
    const hash = blake2bHash(arr)
    let str = Base58.encode(hash)
    str = str.slice(0, 4)
    return str
}

function blake2bHash(ob) {
    typeof ob === "string" ? ob = Buffer.from(ob) : ob = ob
    return blake2b(32).update(ob).digest()
}

exports.validateAddr = validateAddr;