/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_factoryV2",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "PairLookupFailed",
        type: "error",
    },
    {
        inputs: [],
        name: "SameToken",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "reason",
                type: "string",
            },
        ],
        name: "UnknownExternalTransferFailure",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "tokens",
                type: "address[]",
            },
            {
                internalType: "address",
                name: "baseToken",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountToBorrow",
                type: "uint256",
            },
        ],
        name: "batchValidate",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "buyFeeBps",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "sellFeeBps",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "feeTakenOnTransfer",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "externalTransferFailed",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "sellReverted",
                        type: "bool",
                    },
                ],
                internalType: "struct TokenFees[]",
                name: "fotResults",
                type: "tuple[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ERC20",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "callTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract ERC20",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "expectedBalance",
                type: "uint256",
            },
        ],
        name: "callTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount0",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "uniswapV2Call",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "baseToken",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amountToBorrow",
                type: "uint256",
            },
        ],
        name: "validate",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "buyFeeBps",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "sellFeeBps",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "feeTakenOnTransfer",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "externalTransferFailed",
                        type: "bool",
                    },
                    {
                        internalType: "bool",
                        name: "sellReverted",
                        type: "bool",
                    },
                ],
                internalType: "struct TokenFees",
                name: "fotResult",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
export class TokenFeeDetector__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
TokenFeeDetector__factory.abi = _abi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5GZWVEZXRlY3Rvcl9fZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90eXBlcy9vdGhlci9mYWN0b3JpZXMvVG9rZW5GZWVEZXRlY3Rvcl9fZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUdwQixPQUFPLEVBQUUsUUFBUSxFQUFVLEtBQUssRUFBRSxNQUFNLFFBQVEsQ0FBQztBQU1qRCxNQUFNLElBQUksR0FBRztJQUNYO1FBQ0UsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxZQUFZO2dCQUNsQixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsZUFBZSxFQUFFLFlBQVk7UUFDN0IsSUFBSSxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNFLE1BQU0sRUFBRSxFQUFFO1FBQ1YsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixJQUFJLEVBQUUsT0FBTztLQUNkO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsRUFBRTtRQUNWLElBQUksRUFBRSxXQUFXO1FBQ2pCLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFLE1BQU0sRUFBRTtZQUNOO2dCQUNFLFlBQVksRUFBRSxRQUFRO2dCQUN0QixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsUUFBUTthQUNmO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsZ0NBQWdDO1FBQ3RDLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFLE1BQU0sRUFBRTtZQUNOO2dCQUNFLFlBQVksRUFBRSxXQUFXO2dCQUN6QixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsV0FBVzthQUNsQjtZQUNEO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLFNBQVM7YUFDaEI7WUFDRDtn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