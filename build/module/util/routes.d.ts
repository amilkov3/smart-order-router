import { Currency } from '@uniswap/sdk-core';
import { AlphaRouterConfig, RouteWithValidQuote } from '../routers/alpha-router';
import { SupportedRoutes } from '../routers/router';
import { TPool } from '@uniswap/router-sdk/dist/utils/TPool';
import { CachedRoutes } from '../providers';
export declare const routeToTokens: (route: SupportedRoutes) => Currency[];
export declare const routeToPools: (route: SupportedRoutes) => TPool[];
export declare const poolToString: (pool: TPool) => string;
export declare const routeToString: (route: SupportedRoutes) => string;
export declare const routeAmountsToString: (routeAmounts: RouteWithValidQuote[]) => string;
export declare function shouldWipeoutCachedRoutes(cachedRoutes?: CachedRoutes, routingConfig?: AlphaRouterConfig): boolean;
