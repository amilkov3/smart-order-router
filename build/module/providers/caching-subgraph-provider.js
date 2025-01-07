import { ChainId } from '@uniswap/sdk-core';
import { nativeOnChain, WRAPPED_NATIVE_CURRENCY } from '../util';
import { ARB_ARBITRUM, BTC_BNB, BUSD_BNB, CELO, CEUR_CELO, CUSD_CELO, DAI_ARBITRUM, DAI_AVAX, DAI_BNB, DAI_CELO, DAI_MAINNET, DAI_MOONBEAM, DAI_OPTIMISM, ETH_BNB, OP_OPTIMISM, USDB_BLAST, USDCE_ZKSYNC, USDC_ARBITRUM, USDC_ASTROCHAIN_SEPOLIA, USDC_AVAX, USDC_BASE, USDC_BNB, USDC_MAINNET, USDC_MOONBEAM, USDC_NATIVE_ARBITRUM, USDC_OPTIMISM, USDC_POLYGON, USDC_WORLDCHAIN, USDC_ZKSYNC, USDT_ARBITRUM, USDT_BNB, USDT_MAINNET, USDT_OPTIMISM, WBTC_ARBITRUM, WBTC_MAINNET, WBTC_MOONBEAM, WBTC_OPTIMISM, WBTC_WORLDCHAIN, WETH_POLYGON, WLD_WORLDCHAIN, WMATIC_POLYGON, WSTETH_MAINNET, } from './token-provider';
export const BASES_TO_CHECK_TRADES_AGAINST = {
    [ChainId.MAINNET]: [
        nativeOnChain(ChainId.MAINNET),
        WRAPPED_NATIVE_CURRENCY[ChainId.MAINNET],
        DAI_MAINNET,
        USDC_MAINNET,
        USDT_MAINNET,
        WBTC_MAINNET,
        WSTETH_MAINNET,
    ],
    [ChainId.GOERLI]: [WRAPPED_NATIVE_CURRENCY[ChainId.GOERLI]],
    [ChainId.SEPOLIA]: [
        nativeOnChain(ChainId.SEPOLIA),
        WRAPPED_NATIVE_CURRENCY[ChainId.SEPOLIA],
    ],
    //v2 not deployed on [arbitrum, polygon, celo, gnosis, moonbeam, bnb, avalanche] and their testnets
    [ChainId.OPTIMISM]: [
        nativeOnChain(ChainId.OPTIMISM),
        WRAPPED_NATIVE_CURRENCY[ChainId.OPTIMISM],
        USDC_OPTIMISM,
        DAI_OPTIMISM,
        USDT_OPTIMISM,
        WBTC_OPTIMISM,
        OP_OPTIMISM,
    ],
    [ChainId.ARBITRUM_ONE]: [
        nativeOnChain(ChainId.ARBITRUM_ONE),
        WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_ONE],
        WBTC_ARBITRUM,
        DAI_ARBITRUM,
        USDC_ARBITRUM,
        USDC_NATIVE_ARBITRUM,
        USDT_ARBITRUM,
        ARB_ARBITRUM,
    ],
    [ChainId.ARBITRUM_GOERLI]: [],
    [ChainId.ARBITRUM_SEPOLIA]: [],
    [ChainId.OPTIMISM_GOERLI]: [],
    [ChainId.OPTIMISM_SEPOLIA]: [],
    [ChainId.POLYGON]: [
        nativeOnChain(ChainId.POLYGON),
        USDC_POLYGON,
        WETH_POLYGON,
        WMATIC_POLYGON,
    ],
    [ChainId.POLYGON_MUMBAI]: [],
    [ChainId.CELO]: [CELO, CUSD_CELO, CEUR_CELO, DAI_CELO],
    [ChainId.CELO_ALFAJORES]: [],
    [ChainId.GNOSIS]: [],
    [ChainId.MOONBEAM]: [
        WRAPPED_NATIVE_CURRENCY[ChainId.MOONBEAM],
        DAI_MOONBEAM,
        USDC_MOONBEAM,
        WBTC_MOONBEAM,
    ],
    [ChainId.BNB]: [
        nativeOnChain(ChainId.BNB),
        WRAPPED_NATIVE_CURRENCY[ChainId.BNB],
        BUSD_BNB,
        DAI_BNB,
        USDC_BNB,
        USDT_BNB,
        BTC_BNB,
        ETH_BNB,
    ],
    [ChainId.AVALANCHE]: [
        WRAPPED_NATIVE_CURRENCY[ChainId.AVALANCHE],
        USDC_AVAX,
        DAI_AVAX,
    ],
    [ChainId.BASE_GOERLI]: [],
    [ChainId.BASE]: [
        nativeOnChain(ChainId.BASE),
        WRAPPED_NATIVE_CURRENCY[ChainId.BASE],
        USDC_BASE,
    ],
    [ChainId.ZORA]: [
        nativeOnChain(ChainId.ZORA),
        WRAPPED_NATIVE_CURRENCY[ChainId.ZORA],
    ],
    [ChainId.ZORA_SEPOLIA]: [WRAPPED_NATIVE_CURRENCY[ChainId.ZORA_SEPOLIA]],
    [ChainId.ROOTSTOCK]: [WRAPPED_NATIVE_CURRENCY[ChainId.ROOTSTOCK]],
    [ChainId.BLAST]: [
        nativeOnChain(ChainId.BLAST),
        WRAPPED_NATIVE_CURRENCY[ChainId.BLAST],
        USDB_BLAST,
    ],
    [ChainId.ZKSYNC]: [
        WRAPPED_NATIVE_CURRENCY[ChainId.ZKSYNC],
        USDCE_ZKSYNC,
        USDC_ZKSYNC,
    ],
    [ChainId.WORLDCHAIN]: [
        nativeOnChain(ChainId.WORLDCHAIN),
        WRAPPED_NATIVE_CURRENCY[ChainId.WORLDCHAIN],
        USDC_WORLDCHAIN,
        WLD_WORLDCHAIN,
        WBTC_WORLDCHAIN,
    ],
    [ChainId.ASTROCHAIN_SEPOLIA]: [
        nativeOnChain(ChainId.ASTROCHAIN_SEPOLIA),
        WRAPPED_NATIVE_CURRENCY[ChainId.ASTROCHAIN_SEPOLIA],
        USDC_ASTROCHAIN_SEPOLIA,
    ],
};
export class CachingSubgraphProvider {
    /**
     * Creates an instance of CachingV3SubgraphProvider.
     * @param chainId The chain id to use.
     * @param subgraphProvider The provider to use to get the subgraph pools when not in the cache.
     * @param cache Cache instance to hold cached pools.
     * @param protocol Subgraph protocol version
     */
    constructor(chainId, subgraphProvider, cache, protocol) {
        this.chainId = chainId;
        this.subgraphProvider = subgraphProvider;
        this.cache = cache;
        this.protocol = protocol;
        this.SUBGRAPH_KEY = (chainId) => `subgraph-pools-${this.protocol}-${chainId}`;
    }
    async getPools() {
        const cachedPools = await this.cache.get(this.SUBGRAPH_KEY(this.chainId));
        if (cachedPools) {
            return cachedPools;
        }
        const pools = await this.subgraphProvider.getPools();
        await this.cache.set(this.SUBGRAPH_KEY(this.chainId), pools);
        return pools;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGluZy1zdWJncmFwaC1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcm92aWRlcnMvY2FjaGluZy1zdWJncmFwaC1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFtQixNQUFNLG1CQUFtQixDQUFDO0FBRzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFJakUsT0FBTyxFQUNMLFlBQVksRUFDWixPQUFPLEVBQ1AsUUFBUSxFQUNSLElBQUksRUFDSixTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDWixRQUFRLEVBQ1IsT0FBTyxFQUNQLFFBQVEsRUFDUixXQUFXLEVBQ1gsWUFBWSxFQUNaLFlBQVksRUFDWixPQUFPLEVBQ1AsV0FBVyxFQUNYLFVBQVUsRUFDVixZQUFZLEVBQ1osYUFBYSxFQUNiLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsU0FBUyxFQUNULFFBQVEsRUFDUixZQUFZLEVBQ1osYUFBYSxFQUNiLG9CQUFvQixFQUNwQixhQUFhLEVBQ2IsWUFBWSxFQUNaLGVBQWUsRUFDZixXQUFXLEVBQ1gsYUFBYSxFQUNiLFFBQVEsRUFDUixZQUFZLEVBQ1osYUFBYSxFQUNiLGFBQWEsRUFDYixZQUFZLEVBQ1osYUFBYSxFQUNiLGFBQWEsRUFDYixlQUFlLEVBQ2YsWUFBWSxFQUNaLGNBQWMsRUFDZCxjQUFjLEVBQ2QsY0FBYyxHQUNmLE1BQU0sa0JBQWtCLENBQUM7QUFPMUIsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQW1CO0lBQzNELENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ2pCLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQzlCLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUU7UUFDekMsV0FBVztRQUNYLFlBQVk7UUFDWixZQUFZO1FBQ1osWUFBWTtRQUNa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