"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAI_POLYGON_MUMBAI = exports.USDC_POLYGON_MUMBAI = exports.WMATIC_POLYGON_MUMBAI = exports.DAI_POLYGON = exports.USDC_NATIVE_POLYGON = exports.USDC_POLYGON = exports.WETH_POLYGON = exports.WMATIC_POLYGON = exports.USDC_ARBITRUM_SEPOLIA = exports.USDC_ARBITRUM_GOERLI = exports.DAI_ARBITRUM_SEPOLIA = exports.DAI_ARBITRUM_GOERLI = exports.ARB_ARBITRUM = exports.DAI_ARBITRUM = exports.WBTC_ARBITRUM = exports.USDT_ARBITRUM = exports.USDC_NATIVE_ARBITRUM = exports.USDC_ARBITRUM = exports.DAI_OPTIMISM_SEPOLIA = exports.WBTC_OPTIMISM_SEPOLIA = exports.USDT_OPTIMISM_SEPOLIA = exports.USDC_OPTIMISM_SEPOLIA = exports.DAI_OPTIMISM_GOERLI = exports.WBTC_OPTIMISM_GOERLI = exports.USDT_OPTIMISM_GOERLI = exports.USDC_OPTIMISM_GOERLI = exports.OP_OPTIMISM = exports.DAI_OPTIMISM = exports.WBTC_OPTIMISM = exports.USDT_OPTIMISM = exports.USDC_NATIVE_OPTIMISM = exports.USDC_OPTIMISM = exports.UNI_GOERLI = exports.DAI_GOERLI = exports.WBTC_GOERLI = exports.USDT_GOERLI = exports.USDC_GOERLI = exports.DAI_SEPOLIA = exports.USDC_NATIVE_SEPOLIA = exports.USDC_SEPOLIA = exports.WSTETH_MAINNET = exports.LIDO_MAINNET = exports.AAVE_MAINNET = exports.UNI_MAINNET = exports.FEI_MAINNET = exports.AMPL_MAINNET = exports.DAI_MAINNET = exports.WBTC_MAINNET = exports.USDT_MAINNET = exports.USDC_MAINNET = void 0;
exports.V4_SEPOLIA_TEST_B = exports.V4_SEPOLIA_TEST_A = exports.WNATIVE_ON = exports.USDC_ON = exports.USDT_ON = exports.DAI_ON = exports.TokenProvider = exports.USDC_ASTROCHAIN_SEPOLIA = exports.WBTC_WORLDCHAIN = exports.WLD_WORLDCHAIN = exports.USDC_WORLDCHAIN = exports.DAI_ZKSYNC = exports.USDCE_ZKSYNC = exports.USDC_ZKSYNC = exports.USDC_ZORA = exports.USDB_BLAST = exports.WBTC_MOONBEAM = exports.DAI_MOONBEAM = exports.WGLMR_MOONBEAM = exports.USDC_MOONBEAM = exports.WBTC_GNOSIS = exports.WXDAI_GNOSIS = exports.USDC_ETHEREUM_GNOSIS = exports.USDC_BASE_GOERLI = exports.VIRTUAL_BASE = exports.USDC_NATIVE_BASE = exports.USDC_BASE = exports.USDC_NATIVE_AVAX = exports.USDC_BRIDGED_AVAX = exports.USDC_AVAX = exports.DAI_AVAX = exports.CEUR_CELO_ALFAJORES = exports.CUSD_CELO_ALFAJORES = exports.DAI_CELO_ALFAJORES = exports.CELO_ALFAJORES = exports.CEUR_CELO = exports.USDC_NATIVE_CELO = exports.USDC_WORMHOLE_CELO = exports.USDC_CELO = exports.CUSD_CELO = exports.DAI_CELO = exports.CELO = exports.USDT_BNB = exports.USDC_BNB = exports.ETH_BNB = exports.DAI_BNB = exports.BUSD_BNB = exports.BTC_BNB = exports.WETH_POLYGON_MUMBAI = void 0;
const abi_1 = require("@ethersproject/abi");
const strings_1 = require("@ethersproject/strings");
const sdk_core_1 = require("@uniswap/sdk-core");
const lodash_1 = __importDefault(require("lodash"));
const IERC20Metadata__factory_1 = require("../types/v3/factories/IERC20Metadata__factory");
const util_1 = require("../util");
// Some well known tokens on each chain for seeding cache / testing.
exports.USDC_MAINNET = new sdk_core_1.Token(sdk_core_1.ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C');
exports.USDT_MAINNET = new sdk_core_1.Token(sdk_core_1.ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD');
exports.WBTC_MAINNET = new sdk_core_1.Token(sdk_core_1.ChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped BTC');
exports.DAI_MAINNET = new sdk_core_1.Token(sdk_core_1.ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin');
exports.AMPL_MAINNET = new sdk_core_1.Token(sdk_core_1.ChainId.MAINNET, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'AMPL');
exports.FEI_MAINNET = new sdk_core_1.Token(sdk_core_1.ChainId.MAINNET, '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', 18, 'FEI', 'Fei USD');
exports.UNI_MAINNET = new sdk_core_1.Token(sdk_core_1.ChainId.MAINNET, '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', 18, 'UNI', 'Uniswap');
exports.AAVE_MAINNET = new sdk_core_1.Token(sdk_core_1.ChainId.MAINNET, '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9', 18, 'AAVE', 'Aave Token');
exports.LIDO_MAINNET = new sdk_core_1.Token(sdk_core_1.ChainId.MAINNET, '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32', 18, 'LDO', 'Lido DAO Token');
exports.WSTETH_MAINNET = new sdk_core_1.Token(sdk_core_1.ChainId.MAINNET, '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0', 18, 'wstETH', 'Wrapped liquid staked Ether');
exports.USDC_SEPOLIA = new sdk_core_1.Token(sdk_core_1.ChainId.SEPOLIA, '0x6f14C02Fc1F78322cFd7d707aB90f18baD3B54f5', 18, 'USDC', 'USDC Token');
exports.USDC_NATIVE_SEPOLIA = new sdk_core_1.Token(sdk_core_1.ChainId.SEPOLIA, '0x1c7d4b196cb0c7b01d743fbc6116a902379c7238', 6, 'USDC', 'USDC Token');
exports.DAI_SEPOLIA = new sdk_core_1.Token(sdk_core_1.ChainId.SEPOLIA, '0x7AF17A48a6336F7dc1beF9D485139f7B6f4FB5C8', 18, 'DAI', 'DAI Token');
exports.USDC_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.GOERLI, '0x07865c6e87b9f70255377e024ace6630c1eaa37f', 6, 'USDC', 'USD//C');
exports.USDT_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.GOERLI, '0xe583769738b6dd4e7caf8451050d1948be717679', 18, 'USDT', 'Tether USD');
exports.WBTC_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.GOERLI, '0xa0a5ad2296b38bd3e3eb59aaeaf1589e8d9a29a9', 8, 'WBTC', 'Wrapped BTC');
exports.DAI_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.GOERLI, '0x11fe4b6ae13d2a6055c8d9cf65c55bac32b5d844', 18, 'DAI', 'Dai Stablecoin');
exports.UNI_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.GOERLI, '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', 18, 'UNI', 'Uni token');
exports.USDC_OPTIMISM = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM, '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', 6, 'USDC', 'USD//C.e');
exports.USDC_NATIVE_OPTIMISM = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM, '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85', 6, 'USDC', 'USD//C');
exports.USDT_OPTIMISM = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM, '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', 6, 'USDT', 'Tether USD');
exports.WBTC_OPTIMISM = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM, '0x68f180fcCe6836688e9084f035309E29Bf0A2095', 8, 'WBTC', 'Wrapped BTC');
exports.DAI_OPTIMISM = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai Stablecoin');
exports.OP_OPTIMISM = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM, '0x4200000000000000000000000000000000000042', 18, 'OP', 'Optimism');
exports.USDC_OPTIMISM_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM_GOERLI, '0x7E07E15D2a87A24492740D16f5bdF58c16db0c4E', 6, 'USDC', 'USD//C');
exports.USDT_OPTIMISM_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM_GOERLI, '0x853eb4bA5D0Ba2B77a0A5329Fd2110d5CE149ECE', 6, 'USDT', 'Tether USD');
exports.WBTC_OPTIMISM_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM_GOERLI, '0xe0a592353e81a94Db6E3226fD4A99F881751776a', 8, 'WBTC', 'Wrapped BTC');
exports.DAI_OPTIMISM_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM_GOERLI, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai Stablecoin');
exports.USDC_OPTIMISM_SEPOLIA = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM_SEPOLIA, '0x7E07E15D2a87A24492740D16f5bdF58c16db0c4E', 6, 'USDC', 'USD//C');
exports.USDT_OPTIMISM_SEPOLIA = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM_SEPOLIA, '0x853eb4bA5D0Ba2B77a0A5329Fd2110d5CE149ECE', 6, 'USDT', 'Tether USD');
exports.WBTC_OPTIMISM_SEPOLIA = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM_SEPOLIA, '0xe0a592353e81a94Db6E3226fD4A99F881751776a', 8, 'WBTC', 'Wrapped BTC');
exports.DAI_OPTIMISM_SEPOLIA = new sdk_core_1.Token(sdk_core_1.ChainId.OPTIMISM_SEPOLIA, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai Stablecoin');
exports.USDC_ARBITRUM = new sdk_core_1.Token(sdk_core_1.ChainId.ARBITRUM_ONE, '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', 6, 'USDC', 'USD//C.e');
exports.USDC_NATIVE_ARBITRUM = new sdk_core_1.Token(sdk_core_1.ChainId.ARBITRUM_ONE, '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', 6, 'USDC', 'USD//C');
exports.USDT_ARBITRUM = new sdk_core_1.Token(sdk_core_1.ChainId.ARBITRUM_ONE, '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', 6, 'USDT', 'Tether USD');
exports.WBTC_ARBITRUM = new sdk_core_1.Token(sdk_core_1.ChainId.ARBITRUM_ONE, '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f', 8, 'WBTC', 'Wrapped BTC');
exports.DAI_ARBITRUM = new sdk_core_1.Token(sdk_core_1.ChainId.ARBITRUM_ONE, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai Stablecoin');
exports.ARB_ARBITRUM = new sdk_core_1.Token(sdk_core_1.ChainId.ARBITRUM_ONE, '0x912CE59144191C1204E64559FE8253a0e49E6548', 18, 'ARB', 'Arbitrum');
exports.DAI_ARBITRUM_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.ARBITRUM_GOERLI, '0x0000000000000000000000000000000000000000', // TODO: add address
18, 'DAI', 'Dai Stablecoin');
exports.DAI_ARBITRUM_SEPOLIA = new sdk_core_1.Token(sdk_core_1.ChainId.ARBITRUM_SEPOLIA, '0xc3826E277485c33F3D99C9e0CBbf8449513210EE', 18, 'DAI', 'Dai Stablecoin');
// Bridged version of official Goerli USDC
exports.USDC_ARBITRUM_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.ARBITRUM_GOERLI, '0x8FB1E3fC51F3b789dED7557E680551d93Ea9d892', 6, 'USDC', 'USD//C');
// Bridged version of official Sepolia USDC
exports.USDC_ARBITRUM_SEPOLIA = new sdk_core_1.Token(sdk_core_1.ChainId.ARBITRUM_SEPOLIA, '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d', 6, 'USDC', 'USD//C');
//polygon tokens
exports.WMATIC_POLYGON = new sdk_core_1.Token(sdk_core_1.ChainId.POLYGON, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped MATIC');
exports.WETH_POLYGON = new sdk_core_1.Token(sdk_core_1.ChainId.POLYGON, '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', 18, 'WETH', 'Wrapped Ether');
exports.USDC_POLYGON = new sdk_core_1.Token(sdk_core_1.ChainId.POLYGON, '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', 6, 'USDC', 'USD//C.e');
exports.USDC_NATIVE_POLYGON = new sdk_core_1.Token(sdk_core_1.ChainId.POLYGON, '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359', 6, 'USDC', 'USD//C');
exports.DAI_POLYGON = new sdk_core_1.Token(sdk_core_1.ChainId.POLYGON, '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', 18, 'DAI', 'Dai Stablecoin');
//polygon mumbai tokens
exports.WMATIC_POLYGON_MUMBAI = new sdk_core_1.Token(sdk_core_1.ChainId.POLYGON_MUMBAI, '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', 18, 'WMATIC', 'Wrapped MATIC');
exports.USDC_POLYGON_MUMBAI = new sdk_core_1.Token(sdk_core_1.ChainId.POLYGON_MUMBAI, '0xe11a86849d99f524cac3e7a0ec1241828e332c62', 6, 'USDC', 'USD//C');
exports.DAI_POLYGON_MUMBAI = new sdk_core_1.Token(sdk_core_1.ChainId.POLYGON_MUMBAI, '0x001b3b4d0f3714ca98ba10f6042daebf0b1b7b6f', 18, 'DAI', 'Dai Stablecoin');
exports.WETH_POLYGON_MUMBAI = new sdk_core_1.Token(sdk_core_1.ChainId.POLYGON_MUMBAI, '0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa', 18, 'WETH', 'Wrapped Ether');
// BNB chain Tokens
exports.BTC_BNB = new sdk_core_1.Token(sdk_core_1.ChainId.BNB, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC');
exports.BUSD_BNB = new sdk_core_1.Token(sdk_core_1.ChainId.BNB, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18, 'BUSD', 'BUSD');
exports.DAI_BNB = new sdk_core_1.Token(sdk_core_1.ChainId.BNB, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'DAI');
exports.ETH_BNB = new sdk_core_1.Token(sdk_core_1.ChainId.BNB, '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', 18, 'ETH', 'ETH');
exports.USDC_BNB = new sdk_core_1.Token(sdk_core_1.ChainId.BNB, '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', 18, 'USDC', 'USDC');
exports.USDT_BNB = new sdk_core_1.Token(sdk_core_1.ChainId.BNB, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'USDT');
// Celo Tokens
exports.CELO = new sdk_core_1.Token(sdk_core_1.ChainId.CELO, '0x471EcE3750Da237f93B8E339c536989b8978a438', 18, 'CELO', 'Celo native asset');
exports.DAI_CELO = new sdk_core_1.Token(sdk_core_1.ChainId.CELO, '0xE4fE50cdD716522A56204352f00AA110F731932d', 18, 'DAI', 'Dai Stablecoin');
exports.CUSD_CELO = new sdk_core_1.Token(sdk_core_1.ChainId.CELO, '0x765DE816845861e75A25fCA122bb6898B8B1282a', 18, 'CUSD', 'Celo Dollar Stablecoin');
exports.USDC_CELO = new sdk_core_1.Token(sdk_core_1.ChainId.CELO, '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664', 18, 'USDC', 'USD//C.e');
exports.USDC_WORMHOLE_CELO = new sdk_core_1.Token(sdk_core_1.ChainId.CELO, '0x37f750B7cC259A2f741AF45294f6a16572CF5cAd', 18, 'USDC', 'USD//C.e');
exports.USDC_NATIVE_CELO = new sdk_core_1.Token(sdk_core_1.ChainId.CELO, '0x765DE816845861e75A25fCA122bb6898B8B1282a', 18, 'USDC', 'USD//C');
exports.CEUR_CELO = new sdk_core_1.Token(sdk_core_1.ChainId.CELO, '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73', 18, 'CEUR', 'Celo Euro Stablecoin');
// Celo Alfajores Tokens
exports.CELO_ALFAJORES = new sdk_core_1.Token(sdk_core_1.ChainId.CELO_ALFAJORES, '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9', 18, 'CELO', 'Celo native asset');
exports.DAI_CELO_ALFAJORES = new sdk_core_1.Token(sdk_core_1.ChainId.CELO_ALFAJORES, '0x7d91E51C8F218f7140188A155f5C75388630B6a8', 18, 'DAI', 'Dai Stablecoin');
exports.CUSD_CELO_ALFAJORES = new sdk_core_1.Token(sdk_core_1.ChainId.CELO_ALFAJORES, '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1', 18, 'CUSD', 'Celo Dollar Stablecoin');
exports.CEUR_CELO_ALFAJORES = new sdk_core_1.Token(sdk_core_1.ChainId.CELO_ALFAJORES, '0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F', 18, 'CEUR', 'Celo Euro Stablecoin');
// Avalanche Tokens
exports.DAI_AVAX = new sdk_core_1.Token(sdk_core_1.ChainId.AVALANCHE, '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70', 18, 'DAI.e', 'DAI.e Token');
exports.USDC_AVAX = new sdk_core_1.Token(sdk_core_1.ChainId.AVALANCHE, '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E', 6, 'USDC', 'USDC Token');
exports.USDC_BRIDGED_AVAX = new sdk_core_1.Token(sdk_core_1.ChainId.AVALANCHE, '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664', 6, 'USDC', 'USDC Token');
exports.USDC_NATIVE_AVAX = new sdk_core_1.Token(sdk_core_1.ChainId.AVALANCHE, '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e', 6, 'USDC', 'USDC Token');
// Base Tokens
exports.USDC_BASE = new sdk_core_1.Token(sdk_core_1.ChainId.BASE, '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA', 6, 'USDbC', 'USD Base Coin');
exports.USDC_NATIVE_BASE = new sdk_core_1.Token(sdk_core_1.ChainId.BASE, '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', 6, 'USDbC', 'USD Base Coin');
exports.VIRTUAL_BASE = new sdk_core_1.Token(sdk_core_1.ChainId.BASE, '0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b', 18, 'VIRTUAL', 'Virtual Protocol');
// Base Goerli Tokens
exports.USDC_BASE_GOERLI = new sdk_core_1.Token(sdk_core_1.ChainId.BASE_GOERLI, '0x853154e2A5604E5C74a2546E2871Ad44932eB92C', 6, 'USDbC', 'USD Base Coin');
// Gnosis Tokens
exports.USDC_ETHEREUM_GNOSIS = new sdk_core_1.Token(sdk_core_1.ChainId.GNOSIS, '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83', 6, 'USDC', 'USDC from Ethereum on Gnosis');
exports.WXDAI_GNOSIS = new sdk_core_1.Token(sdk_core_1.ChainId.GNOSIS, '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d', 18, 'WXDAI', 'Wrapped XDAI on Gnosis');
exports.WBTC_GNOSIS = new sdk_core_1.Token(sdk_core_1.ChainId.GNOSIS, '0x8e5bbbb09ed1ebde8674cda39a0c169401db4252', 8, 'WBTC', 'Wrapped BTC from Ethereum on Gnosis');
// Moonbeam Tokens
exports.USDC_MOONBEAM = new sdk_core_1.Token(sdk_core_1.ChainId.MOONBEAM, '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b', 6, 'USDC', 'USD Coin bridged using Multichain');
exports.WGLMR_MOONBEAM = new sdk_core_1.Token(sdk_core_1.ChainId.MOONBEAM, '0xAcc15dC74880C9944775448304B263D191c6077F', 18, 'WGLMR', 'Wrapped GLMR');
exports.DAI_MOONBEAM = new sdk_core_1.Token(sdk_core_1.ChainId.MOONBEAM, '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b', 6, 'DAI', 'Dai on moonbeam bridged using Multichain');
exports.WBTC_MOONBEAM = new sdk_core_1.Token(sdk_core_1.ChainId.MOONBEAM, '0x922D641a426DcFFaeF11680e5358F34d97d112E1', 8, 'WBTC', 'Wrapped BTC bridged using Multichain');
// Blast Tokens
exports.USDB_BLAST = new sdk_core_1.Token(sdk_core_1.ChainId.BLAST, '0x4300000000000000000000000000000000000003', 18, 'USDB', 'USD Blast');
exports.USDC_ZORA = new sdk_core_1.Token(sdk_core_1.ChainId.ZORA, '0xCccCCccc7021b32EBb4e8C08314bD62F7c653EC4', 6, 'USDzC', 'USD Coin (Bridged from Ethereum)');
exports.USDC_ZKSYNC = new sdk_core_1.Token(sdk_core_1.ChainId.ZKSYNC, '0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4', 6, 'USDC', 'USDC');
exports.USDCE_ZKSYNC = new sdk_core_1.Token(sdk_core_1.ChainId.ZKSYNC, '0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4', 6, 'USDC.e', 'Bridged USDC (zkSync)');
exports.DAI_ZKSYNC = new sdk_core_1.Token(sdk_core_1.ChainId.ZKSYNC, '0x4B9eb6c0b6ea15176BBF62841C6B2A8a398cb656', 18, 'DAI', 'Dai Stablecoin');
exports.USDC_WORLDCHAIN = new sdk_core_1.Token(sdk_core_1.ChainId.WORLDCHAIN, '0x79A02482A880bCE3F13e09Da970dC34db4CD24d1', 6, 'USDC.e', 'Bridged USDC (world-chain-mainnet)');
exports.WLD_WORLDCHAIN = new sdk_core_1.Token(sdk_core_1.ChainId.WORLDCHAIN, '0x2cFc85d8E48F8EAB294be644d9E25C3030863003', 18, 'WLD', 'Worldcoin');
exports.WBTC_WORLDCHAIN = new sdk_core_1.Token(sdk_core_1.ChainId.WORLDCHAIN, '0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3', 8, 'WBTC', 'Wrapped BTC');
exports.USDC_ASTROCHAIN_SEPOLIA = new sdk_core_1.Token(sdk_core_1.ChainId.ASTROCHAIN_SEPOLIA, '0x31d0220469e10c4E71834a79b1f276d740d3768F', 6, 'USDC', 'USDC Token');
class TokenProvider {
    constructor(chainId, multicall2Provider) {
        this.chainId = chainId;
        this.multicall2Provider = multicall2Provider;
    }
    async getTokenSymbol(addresses, providerConfig) {
        let result;
        let isBytes32 = false;
        try {
            result =
                await this.multicall2Provider.callSameFunctionOnMultipleContracts({
                    addresses,
                    contractInterface: IERC20Metadata__factory_1.IERC20Metadata__factory.createInterface(),
                    functionName: 'symbol',
                    providerConfig,
                });
        }
        catch (error) {
            util_1.log.error({ addresses }, `TokenProvider.getTokenSymbol[string] failed with error ${error}. Trying with bytes32.`);
            const bytes32Interface = new abi_1.Interface([
                {
                    inputs: [],
                    name: 'symbol',
                    outputs: [
                        {
                            internalType: 'bytes32',
                            name: '',
                            type: 'bytes32',
                        },
                    ],
                    stateMutability: 'view',
                    type: 'function',
                },
            ]);
            try {
                result =
                    await this.multicall2Provider.callSameFunctionOnMultipleContracts({
                        addresses,
                        contractInterface: bytes32Interface,
                        functionName: 'symbol',
                        providerConfig,
                    });
                isBytes32 = true;
            }
            catch (error) {
                util_1.log.fatal({ addresses }, `TokenProvider.getTokenSymbol[bytes32] failed with error ${error}.`);
                throw new Error('[TokenProvider.getTokenSymbol] Impossible to fetch token symbol.');
            }
        }
        return { result, isBytes32 };
    }
    async getTokenDecimals(addresses, providerConfig) {
        return this.multicall2Provider.callSameFunctionOnMultipleContracts({
            addresses,
            contractInterface: IERC20Metadata__factory_1.IERC20Metadata__factory.createInterface(),
            functionName: 'decimals',
            providerConfig,
        });
    }
    async getTokens(_addresses, providerConfig) {
        const addressToToken = {};
        const symbolToToken = {};
        const addresses = (0, lodash_1.default)(_addresses)
            .map((address) => address.toLowerCase())
            .uniq()
            .value();
        if (addresses.length > 0) {
            const [symbolsResult, decimalsResult] = await Promise.all([
                this.getTokenSymbol(addresses, providerConfig),
                this.getTokenDecimals(addresses, providerConfig),
            ]);
            const isBytes32 = symbolsResult.isBytes32;
            const { results: symbols } = symbolsResult.result;
            const { results: decimals } = decimalsResult;
            for (let i = 0; i < addresses.length; i++) {
                const address = addresses[i];
                const symbolResult = symbols[i];
                const decimalResult = decimals[i];
                if (!(symbolResult === null || symbolResult === void 0 ? void 0 : symbolResult.success) || !(decimalResult === null || decimalResult === void 0 ? void 0 : decimalResult.success)) {
                    util_1.log.info({
                        symbolResult,
                        decimalResult,
                    }, `Dropping token with address ${address} as symbol or decimal are invalid`);
                    continue;
                }
                const symbol = isBytes32
                    ? (0, strings_1.parseBytes32String)(symbolResult.result[0])
                    : symbolResult.result[0];
                const decimal = decimalResult.result[0];
                addressToToken[address.toLowerCase()] = new sdk_core_1.Token(this.chainId, address, decimal, symbol);
                symbolToToken[symbol.toLowerCase()] =
                    addressToToken[address.toLowerCase()];
            }
            util_1.log.info(`Got token symbol and decimals for ${Object.values(addressToToken).length} out of ${addresses.length} tokens on-chain ${providerConfig ? `as of: ${providerConfig === null || providerConfig === void 0 ? void 0 : providerConfig.blockNumber}` : ''}`);
        }
        return {
            getTokenByAddress: (address) => {
                return addressToToken[address.toLowerCase()];
            },
            getTokenBySymbol: (symbol) => {
                return symbolToToken[symbol.toLowerCase()];
            },
            getAllTokens: () => {
                return Object.values(addressToToken);
            },
        };
    }
}
exports.TokenProvider = TokenProvider;
const DAI_ON = (chainId) => {
    switch (chainId) {
        case sdk_core_1.ChainId.MAINNET:
            return exports.DAI_MAINNET;
        case sdk_core_1.ChainId.GOERLI:
            return exports.DAI_GOERLI;
        case sdk_core_1.ChainId.SEPOLIA:
            return exports.DAI_SEPOLIA;
        case sdk_core_1.ChainId.OPTIMISM:
            return exports.DAI_OPTIMISM;
        case sdk_core_1.ChainId.OPTIMISM_GOERLI:
            return exports.DAI_OPTIMISM_GOERLI;
        case sdk_core_1.ChainId.OPTIMISM_SEPOLIA:
            return exports.DAI_OPTIMISM_SEPOLIA;
        case sdk_core_1.ChainId.ARBITRUM_ONE:
            return exports.DAI_ARBITRUM;
        case sdk_core_1.ChainId.ARBITRUM_GOERLI:
            return exports.DAI_ARBITRUM_GOERLI;
        case sdk_core_1.ChainId.ARBITRUM_SEPOLIA:
            return exports.DAI_ARBITRUM_SEPOLIA;
        case sdk_core_1.ChainId.POLYGON:
            return exports.DAI_POLYGON;
        case sdk_core_1.ChainId.POLYGON_MUMBAI:
            return exports.DAI_POLYGON_MUMBAI;
        case sdk_core_1.ChainId.CELO:
            return exports.DAI_CELO;
        case sdk_core_1.ChainId.CELO_ALFAJORES:
            return exports.DAI_CELO_ALFAJORES;
        case sdk_core_1.ChainId.MOONBEAM:
            return exports.DAI_MOONBEAM;
        case sdk_core_1.ChainId.BNB:
            return exports.DAI_BNB;
        case sdk_core_1.ChainId.AVALANCHE:
            return exports.DAI_AVAX;
        case sdk_core_1.ChainId.ZKSYNC:
            return exports.DAI_ZKSYNC;
        default:
            throw new Error(`Chain id: ${chainId} not supported`);
    }
};
exports.DAI_ON = DAI_ON;
const USDT_ON = (chainId) => {
    switch (chainId) {
        case sdk_core_1.ChainId.MAINNET:
            return exports.USDT_MAINNET;
        case sdk_core_1.ChainId.GOERLI:
            return exports.USDT_GOERLI;
        case sdk_core_1.ChainId.OPTIMISM:
            return exports.USDT_OPTIMISM;
        case sdk_core_1.ChainId.OPTIMISM_GOERLI:
            return exports.USDT_OPTIMISM_GOERLI;
        case sdk_core_1.ChainId.OPTIMISM_SEPOLIA:
            return exports.USDT_OPTIMISM_SEPOLIA;
        case sdk_core_1.ChainId.ARBITRUM_ONE:
            return exports.USDT_ARBITRUM;
        case sdk_core_1.ChainId.BNB:
            return exports.USDT_BNB;
        default:
            throw new Error(`Chain id: ${chainId} not supported`);
    }
};
exports.USDT_ON = USDT_ON;
const USDC_ON = (chainId) => {
    switch (chainId) {
        case sdk_core_1.ChainId.MAINNET:
            return exports.USDC_MAINNET;
        case sdk_core_1.ChainId.GOERLI:
            return exports.USDC_GOERLI;
        case sdk_core_1.ChainId.SEPOLIA:
            return exports.USDC_SEPOLIA;
        case sdk_core_1.ChainId.OPTIMISM:
            return exports.USDC_OPTIMISM;
        case sdk_core_1.ChainId.OPTIMISM_GOERLI:
            return exports.USDC_OPTIMISM_GOERLI;
        case sdk_core_1.ChainId.OPTIMISM_SEPOLIA:
            return exports.USDC_OPTIMISM_SEPOLIA;
        case sdk_core_1.ChainId.ARBITRUM_ONE:
            return exports.USDC_ARBITRUM;
        case sdk_core_1.ChainId.ARBITRUM_GOERLI:
            return exports.USDC_ARBITRUM_GOERLI;
        case sdk_core_1.ChainId.ARBITRUM_SEPOLIA:
            return exports.USDC_ARBITRUM_SEPOLIA;
        case sdk_core_1.ChainId.POLYGON:
            return exports.USDC_POLYGON;
        case sdk_core_1.ChainId.POLYGON_MUMBAI:
            return exports.USDC_POLYGON_MUMBAI;
        case sdk_core_1.ChainId.GNOSIS:
            return exports.USDC_ETHEREUM_GNOSIS;
        case sdk_core_1.ChainId.MOONBEAM:
            return exports.USDC_MOONBEAM;
        case sdk_core_1.ChainId.BNB:
            return exports.USDC_BNB;
        case sdk_core_1.ChainId.AVALANCHE:
            return exports.USDC_AVAX;
        case sdk_core_1.ChainId.BASE:
            return exports.USDC_BASE;
        case sdk_core_1.ChainId.BASE_GOERLI:
            return exports.USDC_BASE_GOERLI;
        case sdk_core_1.ChainId.ZORA:
            return exports.USDC_ZORA;
        case sdk_core_1.ChainId.ZKSYNC:
            return exports.USDCE_ZKSYNC;
        case sdk_core_1.ChainId.WORLDCHAIN:
            return exports.USDC_WORLDCHAIN;
        case sdk_core_1.ChainId.ASTROCHAIN_SEPOLIA:
            return exports.USDC_ASTROCHAIN_SEPOLIA;
        default:
            throw new Error(`Chain id: ${chainId} not supported`);
    }
};
exports.USDC_ON = USDC_ON;
const WNATIVE_ON = (chainId) => {
    return util_1.WRAPPED_NATIVE_CURRENCY[chainId];
};
exports.WNATIVE_ON = WNATIVE_ON;
exports.V4_SEPOLIA_TEST_A = new sdk_core_1.Token(sdk_core_1.ChainId.SEPOLIA, '0x0275C79896215a790dD57F436E1103D4179213be', 18, 'A', 'MockA');
exports.V4_SEPOLIA_TEST_B = new sdk_core_1.Token(sdk_core_1.ChainId.SEPOLIA, '0x1a6990c77cfbba398beb230dd918e28aab71eec2', 18, 'B', 'MockB');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJvdmlkZXJzL3Rva2VuLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSw0Q0FBK0M7QUFFL0Msb0RBQTREO0FBQzVELGdEQUFtRDtBQUNuRCxvREFBdUI7QUFFdkIsMkZBQXdGO0FBQ3hGLGtDQUF1RDtBQStCdkQsb0VBQW9FO0FBQ3ZELFFBQUEsWUFBWSxHQUFHLElBQUksZ0JBQUssQ0FDbkMsa0JBQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLENBQUMsRUFDRCxNQUFNLEVBQ04sUUFBUSxDQUNULENBQUM7QUFDVyxRQUFBLFlBQVksR0FBRyxJQUFJLGdCQUFLLENBQ25DLGtCQUFPLENBQUMsT0FBTyxFQUNmLDRDQUE0QyxFQUM1QyxDQUFDLEVBQ0QsTUFBTSxFQUNOLFlBQVksQ0FDYixDQUFDO0FBQ1csUUFBQSxZQUFZLEdBQUcsSUFBSSxnQkFBSyxDQUNuQyxrQkFBTyxDQUFDLE9BQU8sRUFDZiw0Q0FBNEMsRUFDNUMsQ0FBQyxFQUNELE1BQU0sRUFDTixhQUFhLENBQ2QsQ0FBQztBQUNXLFFBQUEsV0FBVyxHQUFHLElBQUksZ0JBQUssQ0FDbEMsa0JBQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixLQUFLLEVBQ0wsZ0JBQWdCLENBQ2pCLENBQUM7QUFDVyxRQUFBLFlBQVksR0FBRyxJQUFJLGdCQUFLLENBQ25DLGtCQUFPLENBQUMsT0FBTyxFQUNmLDRDQUE0QyxFQUM1QyxDQUFDLEVBQ0QsTUFBTSxFQUNOLE1BQU0sQ0FDUCxDQUFDO0FBQ1csUUFBQSxXQUFXLEdBQUcsSUFBSSxnQkFBSyxDQUNsQyxrQkFBTyxDQUFDLE9BQU8sRUFDZiw0Q0FBNEMsRUFDNUMsRUFBRSxFQUNGLEtBQUssRUFDTCxTQUFTLENBQ1YsQ0FBQztBQUNXLFFBQUEsV0FBVyxHQUFHLElBQUksZ0JB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