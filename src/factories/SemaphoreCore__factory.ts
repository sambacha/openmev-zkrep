/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SemaphoreCore, SemaphoreCoreInterface } from "../SemaphoreCore";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "nullifierHash",
        type: "uint256",
      },
    ],
    name: "NullifierHashAdded",
    type: "event",
  },
];

const _bytecode =
  "0x608080604052346013576011908160198239f35b600080fdfe600080fdfea164736f6c634300080d000a";

type SemaphoreCoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SemaphoreCoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SemaphoreCore__factory extends ContractFactory {
  constructor(...args: SemaphoreCoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SemaphoreCore";
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SemaphoreCore> {
    return super.deploy(overrides || {}) as Promise<SemaphoreCore>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SemaphoreCore {
    return super.attach(address) as SemaphoreCore;
  }
  override connect(signer: Signer): SemaphoreCore__factory {
    return super.connect(signer) as SemaphoreCore__factory;
  }
  static readonly contractName: "SemaphoreCore";

  public readonly contractName: "SemaphoreCore";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SemaphoreCoreInterface {
    return new utils.Interface(_abi) as SemaphoreCoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SemaphoreCore {
    return new Contract(address, _abi, signerOrProvider) as SemaphoreCore;
  }
}
