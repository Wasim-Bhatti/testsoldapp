import { Connection, clusterApiUrl } from '@solana/web3.js';

const network = clusterApiUrl('devnet'); // Change 'devnet' to 'mainnet-beta' for mainnet
const connection = new Connection(network);

export default connection;
