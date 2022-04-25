import crypto from "crypto";

interface BlockShape {
	hash: string;
	prevhash: string;
	height: number;
	data: string;
}
class Block implements BlockShape {
	public hash: string;
	constructor(
		public prevhash: string,
		public height: number,
		public data: string
	) {
		this.hash = Block.calculateHash(prevhash, height, data);
	}
	static calculateHash(prevhash: string, height: number, data: string) {
		const toHash = `${prevhash}${height}${data}`;
		return crypto.createHash("sha256").update(toHash).digest("hex");
	}
}

class BlockChains {
	private blocks: Block[];
	constructor() {
		this.blocks = [];
	}
	private getPrevHash() {
		if (this.blocks.length === 0) {
			return "";
		}
		return this.blocks[this.blocks.length - 1].hash;
	}
	public addBlock(data: string) {
		const newBlock = new Block(
			this.getPrevHash(),
			this.blocks.length + 1,
			data
		);
		this.blocks.push(newBlock);
	}
	public getBlocks() {
		return [...this.blocks];
	}
}

const blockchain = new BlockChains();

blockchain.addBlock("first one");
blockchain.addBlock("second one");
blockchain.addBlock("third one");

blockchain.getBlocks().push(new Block("ssss", 2223, "hack"));

console.log(blockchain.getBlocks());
