/* eslint-disable prefer-const */
import {Address, BigInt, dataSource} from "@graphprotocol/graph-ts";
import { ERC721 } from "../../generated/ERC721/ERC721";

let ZERO_BI = BigInt.fromI32(0);

export function fetchName(): string {
  let contract = ERC721.bind(dataSource.address());

  let nameResult = contract.try_name();
  if (!nameResult.reverted) {
    return nameResult.value;
  }

  return "unknown";
}

export function fetchSymbol(): string {
  let contract = ERC721.bind(dataSource.address());

  let symbolResult = contract.try_symbol();
  if (!symbolResult.reverted) {
    return symbolResult.value;
  }

  return "unknown";
}

export function fetchTokenUri(tokenID: BigInt): string | null {
  let contract = ERC721.bind(dataSource.address());

  let uriResult = contract.try_tokenURI(tokenID);
  if (!uriResult.reverted) {
    return uriResult.value;
  }

  return null;
}

export function fetchTotalSupply(): BigInt {
  let contract = ERC721.bind(dataSource.address());

  let totalSupplyResult = contract.try_maxSupply();
  if (!totalSupplyResult.reverted) {
    return totalSupplyResult.value;
  }

  return ZERO_BI;
}

export function fetchPrice(): BigInt {
  let contract = ERC721.bind(dataSource.address());

  let priceResult = contract.try_usdCost();
  if (!priceResult.reverted) {
    return priceResult.value;
  }

  return ZERO_BI;
}

export function fetchInviter(referral: Address): Address {
  let contract = ERC721.bind(dataSource.address());

  let inviterResult = contract.try_getInviter(referral);
  if (!inviterResult.reverted) {
    return inviterResult.value;
  }

  return null;
}

export function fetchInviterReward(inviter: Address): BigInt {
  let contract = ERC721.bind(dataSource.address());

  let inviterRewardResult = contract.try_getRewardSum(inviter);
  if (!inviterRewardResult.reverted) {
    return inviterRewardResult.value;
  }

  return ZERO_BI;
}

export function fetchInviterCount(inviter: Address): BigInt {
  let contract = ERC721.bind(dataSource.address());

  let inviterCountResult = contract.try_getReferralsAmountForTwoLevels(inviter);
  if (!inviterCountResult.reverted) {
    return inviterCountResult.value;
  }

  return ZERO_BI;
}
