/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace IInterep {
  export type OffchainGroupStruct = {
    provider: BytesLike;
    name: BytesLike;
    root: BigNumberish;
    depth: BigNumberish;
  };

  export type OffchainGroupStructOutput = [
    string,
    string,
    BigNumber,
    number
  ] & { provider: string; name: string; root: BigNumber; depth: number };
}

export interface InterepInterface extends utils.Interface {
  contractName: "Interep";

  functions: {
    "addMember(uint256,uint256)": FunctionFragment;
    "createGroup(uint256,uint8,address)": FunctionFragment;
    "getDepth(uint256)": FunctionFragment;
    "getNumberOfLeaves(uint256)": FunctionFragment;
    "getOffchainDepth(uint256)": FunctionFragment;
    "getOffchainRoot(uint256)": FunctionFragment;
    "getRoot(uint256)": FunctionFragment;
    "groupAdmins(uint256)": FunctionFragment;
    "offchainGroups(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeMember(uint256,uint256,uint256[],uint8[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateGroupAdmin(uint256,address)": FunctionFragment;
    "updateOffchainGroups((bytes32,bytes32,uint256,uint8)[])": FunctionFragment;
    "verifiers(uint8)": FunctionFragment;
    "verifyProof(uint256,bytes32,uint256,uint256,uint256[8])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addMember"
      | "createGroup"
      | "getDepth"
      | "getNumberOfLeaves"
      | "getOffchainDepth"
      | "getOffchainRoot"
      | "getRoot"
      | "groupAdmins"
      | "offchainGroups"
      | "owner"
      | "removeMember"
      | "renounceOwnership"
      | "transferOwnership"
      | "updateGroupAdmin"
      | "updateOffchainGroups"
      | "verifiers"
      | "verifyProof"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addMember",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createGroup",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfLeaves",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getOffchainDepth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getOffchainRoot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "groupAdmins",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "offchainGroups",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeMember",
    values: [BigNumberish, BigNumberish, BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateGroupAdmin",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateOffchainGroups",
    values: [IInterep.OffchainGroupStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "verifiers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish[]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "addMember", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createGroup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDepth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfLeaves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOffchainDepth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOffchainRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "groupAdmins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "offchainGroups",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateGroupAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOffchainGroups",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verifiers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;

  events: {
    "GroupAdminUpdated(uint256,address,address)": EventFragment;
    "GroupCreated(uint256,uint8,uint256)": EventFragment;
    "MemberAdded(uint256,uint256,uint256)": EventFragment;
    "MemberRemoved(uint256,uint256,uint256)": EventFragment;
    "NullifierHashAdded(uint256)": EventFragment;
    "OffchainGroupUpdated(uint256,bytes32,bytes32,uint256,uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ProofVerified(uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GroupAdminUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GroupCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MemberRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NullifierHashAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OffchainGroupUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProofVerified"): EventFragment;
}

export interface GroupAdminUpdatedEventObject {
  groupId: BigNumber;
  oldAdmin: string;
  newAdmin: string;
}
export type GroupAdminUpdatedEvent = TypedEvent<
  [BigNumber, string, string],
  GroupAdminUpdatedEventObject
>;

export type GroupAdminUpdatedEventFilter =
  TypedEventFilter<GroupAdminUpdatedEvent>;

export interface GroupCreatedEventObject {
  groupId: BigNumber;
  depth: number;
  zeroValue: BigNumber;
}
export type GroupCreatedEvent = TypedEvent<
  [BigNumber, number, BigNumber],
  GroupCreatedEventObject
>;

export type GroupCreatedEventFilter = TypedEventFilter<GroupCreatedEvent>;

export interface MemberAddedEventObject {
  groupId: BigNumber;
  identityCommitment: BigNumber;
  root: BigNumber;
}
export type MemberAddedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  MemberAddedEventObject
>;

export type MemberAddedEventFilter = TypedEventFilter<MemberAddedEvent>;

export interface MemberRemovedEventObject {
  groupId: BigNumber;
  identityCommitment: BigNumber;
  root: BigNumber;
}
export type MemberRemovedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  MemberRemovedEventObject
>;

export type MemberRemovedEventFilter = TypedEventFilter<MemberRemovedEvent>;

export interface NullifierHashAddedEventObject {
  nullifierHash: BigNumber;
}
export type NullifierHashAddedEvent = TypedEvent<
  [BigNumber],
  NullifierHashAddedEventObject
>;

export type NullifierHashAddedEventFilter =
  TypedEventFilter<NullifierHashAddedEvent>;

export interface OffchainGroupUpdatedEventObject {
  groupId: BigNumber;
  provider: string;
  name: string;
  root: BigNumber;
  depth: number;
}
export type OffchainGroupUpdatedEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, number],
  OffchainGroupUpdatedEventObject
>;

export type OffchainGroupUpdatedEventFilter =
  TypedEventFilter<OffchainGroupUpdatedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ProofVerifiedEventObject {
  groupId: BigNumber;
  signal: string;
}
export type ProofVerifiedEvent = TypedEvent<
  [BigNumber, string],
  ProofVerifiedEventObject
>;

export type ProofVerifiedEventFilter = TypedEventFilter<ProofVerifiedEvent>;

export interface Interep extends BaseContract {
  contractName: "Interep";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: InterepInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createGroup(
      groupId: BigNumberish,
      depth: BigNumberish,
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getDepth(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getNumberOfLeaves(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getOffchainDepth(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getOffchainRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    groupAdmins(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    offchainGroups(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, number] & {
        provider: string;
        name: string;
        root: BigNumber;
        depth: number;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      proofSiblings: BigNumberish[],
      proofPathIndices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateGroupAdmin(
      groupId: BigNumberish,
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateOffchainGroups(
      groups: IInterep.OffchainGroupStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verifiers(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    verifyProof(
      groupId: BigNumberish,
      signal: BytesLike,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addMember(
    groupId: BigNumberish,
    identityCommitment: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createGroup(
    groupId: BigNumberish,
    depth: BigNumberish,
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getDepth(groupId: BigNumberish, overrides?: CallOverrides): Promise<number>;

  getNumberOfLeaves(
    groupId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOffchainDepth(
    groupId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getOffchainRoot(
    groupId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRoot(groupId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  groupAdmins(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  offchainGroups(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, number] & {
      provider: string;
      name: string;
      root: BigNumber;
      depth: number;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  removeMember(
    groupId: BigNumberish,
    identityCommitment: BigNumberish,
    proofSiblings: BigNumberish[],
    proofPathIndices: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateGroupAdmin(
    groupId: BigNumberish,
    newAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateOffchainGroups(
    groups: IInterep.OffchainGroupStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verifiers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  verifyProof(
    groupId: BigNumberish,
    signal: BytesLike,
    nullifierHash: BigNumberish,
    externalNullifier: BigNumberish,
    proof: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createGroup(
      groupId: BigNumberish,
      depth: BigNumberish,
      admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getDepth(groupId: BigNumberish, overrides?: CallOverrides): Promise<number>;

    getNumberOfLeaves(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOffchainDepth(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getOffchainRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    groupAdmins(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    offchainGroups(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, number] & {
        provider: string;
        name: string;
        root: BigNumber;
        depth: number;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    removeMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      proofSiblings: BigNumberish[],
      proofPathIndices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateGroupAdmin(
      groupId: BigNumberish,
      newAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateOffchainGroups(
      groups: IInterep.OffchainGroupStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    verifiers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    verifyProof(
      groupId: BigNumberish,
      signal: BytesLike,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "GroupAdminUpdated(uint256,address,address)"(
      groupId?: BigNumberish | null,
      oldAdmin?: string | null,
      newAdmin?: string | null
    ): GroupAdminUpdatedEventFilter;
    GroupAdminUpdated(
      groupId?: BigNumberish | null,
      oldAdmin?: string | null,
      newAdmin?: string | null
    ): GroupAdminUpdatedEventFilter;

    "GroupCreated(uint256,uint8,uint256)"(
      groupId?: BigNumberish | null,
      depth?: null,
      zeroValue?: null
    ): GroupCreatedEventFilter;
    GroupCreated(
      groupId?: BigNumberish | null,
      depth?: null,
      zeroValue?: null
    ): GroupCreatedEventFilter;

    "MemberAdded(uint256,uint256,uint256)"(
      groupId?: BigNumberish | null,
      identityCommitment?: null,
      root?: null
    ): MemberAddedEventFilter;
    MemberAdded(
      groupId?: BigNumberish | null,
      identityCommitment?: null,
      root?: null
    ): MemberAddedEventFilter;

    "MemberRemoved(uint256,uint256,uint256)"(
      groupId?: BigNumberish | null,
      identityCommitment?: null,
      root?: null
    ): MemberRemovedEventFilter;
    MemberRemoved(
      groupId?: BigNumberish | null,
      identityCommitment?: null,
      root?: null
    ): MemberRemovedEventFilter;

    "NullifierHashAdded(uint256)"(
      nullifierHash?: null
    ): NullifierHashAddedEventFilter;
    NullifierHashAdded(nullifierHash?: null): NullifierHashAddedEventFilter;

    "OffchainGroupUpdated(uint256,bytes32,bytes32,uint256,uint8)"(
      groupId?: null,
      provider?: BytesLike | null,
      name?: BytesLike | null,
      root?: null,
      depth?: BigNumberish | null
    ): OffchainGroupUpdatedEventFilter;
    OffchainGroupUpdated(
      groupId?: null,
      provider?: BytesLike | null,
      name?: BytesLike | null,
      root?: null,
      depth?: BigNumberish | null
    ): OffchainGroupUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "ProofVerified(uint256,bytes32)"(
      groupId?: BigNumberish | null,
      signal?: null
    ): ProofVerifiedEventFilter;
    ProofVerified(
      groupId?: BigNumberish | null,
      signal?: null
    ): ProofVerifiedEventFilter;
  };

  estimateGas: {
    addMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createGroup(
      groupId: BigNumberish,
      depth: BigNumberish,
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getDepth(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumberOfLeaves(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOffchainDepth(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOffchainRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    groupAdmins(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    offchainGroups(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      proofSiblings: BigNumberish[],
      proofPathIndices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateGroupAdmin(
      groupId: BigNumberish,
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateOffchainGroups(
      groups: IInterep.OffchainGroupStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verifiers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyProof(
      groupId: BigNumberish,
      signal: BytesLike,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createGroup(
      groupId: BigNumberish,
      depth: BigNumberish,
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getDepth(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNumberOfLeaves(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOffchainDepth(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOffchainRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoot(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    groupAdmins(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    offchainGroups(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeMember(
      groupId: BigNumberish,
      identityCommitment: BigNumberish,
      proofSiblings: BigNumberish[],
      proofPathIndices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateGroupAdmin(
      groupId: BigNumberish,
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateOffchainGroups(
      groups: IInterep.OffchainGroupStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verifiers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyProof(
      groupId: BigNumberish,
      signal: BytesLike,
      nullifierHash: BigNumberish,
      externalNullifier: BigNumberish,
      proof: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
