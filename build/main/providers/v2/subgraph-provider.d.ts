import { ChainId, Token } from '@uniswap/sdk-core';
import { ProviderConfig } from '../provider';
export interface V2SubgraphPool {
    id: string;
    token0: {
        id: string;
    };
    token1: {
        id: string;
    };
    supply: number;
    reserve: number;
    reserveUSD: number;
}
declare type RawV2SubgraphPool = {
    id: string;
    token0: {
        symbol: string;
        id: string;
    };
    token1: {
        symbol: string;
        id: string;
    };
    totalSupply: string;
    trackedReserveETH: string;
    reserveUSD: string;
};
/**
 * Provider for getting V2 pools from the Subgraph
 *
 * @export
 * @interface IV2SubgraphProvider
 */
export interface IV2SubgraphProvider {
    getPools(tokenIn?: Token, tokenOut?: Token, providerConfig?: ProviderConfig): Promise<V2SubgraphPool[]>;
}
export declare class V2SubgraphProvider implements IV2SubgraphProvider {
    private chainId;
    private retries;
    private timeout;
    private rollback;
    private pageSize;
    private trackedEthThreshold;
    private untrackedUsdThreshold;
    private subgraphUrlOverride?;
    private client;
    constructor(chainId: ChainId, retries?: number, timeout?: number, rollback?: boolean, pageSize?: number, trackedEthThreshold?: number, untrackedUsdThreshold?: number, subgraphUrlOverride?: string | undefined);
    getPools(_tokenIn?: Token, _tokenOut?: Token, providerConfig?: ProviderConfig): Promise<V2SubgraphPool[]>;
    isVirtualPairBaseV2Pool(pool: RawV2SubgraphPool): boolean;
}
export {};
