/* ===== SHA256 with Crypto-js ===================================
|  Learn more: Crypto-js: https://github.com/brix/crypto-js      |
|  =============================================================*/

const SHA256 = require('crypto-js/sha256');

/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/

class Block {

    constructor(data) {
        this.hash = '';
        this.height = 0;
        this.body = data;
        this.time = 0;
        this.previousBlockHash = '';
    }
}


/* ===== Blockchain ===================================
|  Class with a constructor for blockchain data model  |
|  with functions to support:                          |
|     - createGenesisBlock()                           |
|     - getLatestBlock()                               |
|     - addBlock()                                     |
|     - getBlock()                                     |
|     - validateBlock()                                |
|     - validateChain()                                |
|  ====================================================*/


class Blockchain {

    constructor() {
        this.chain = [];
        this.addBlock(new Block('First block in the chain - Genesis block'));
    }
    addBlock(newBlock) {

        // block height

        newBlock.height = this.chain.length;

        // UTC timestamp

        newBlock.time = new Date().getTime().toString().slice(0, -3);

        if (this.chain.length > 0) {
            // previous block hash
            newBlock.previousBlockHash = this.chain[this.chain.length - 1].hash;
        }

        // SHA256 requires a string of data
        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
        // add block to chain
        this.chain.push(newBlock);
    }
}
