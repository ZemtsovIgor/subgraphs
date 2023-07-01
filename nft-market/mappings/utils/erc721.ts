/* eslint-disable prefer-const */
import { Address, BigInt } from "@graphprotocol/graph-ts";
import { IERC721 } from "../../generated/B8DEXNFTMarket/IERC721";
import { B8DEXMainCollection } from "../../generated/B8DEXNFTMarket/B8DEXMainCollection";

export function fetchName(collectionAddress: Address): string {
  let contract = IERC721.bind(collectionAddress);

  let nameResult = contract.try_name();
  if (!nameResult.reverted) {
    return nameResult.value;
  }

  return "unknown";
}

export function fetchSymbol(collectionAddress: Address): string {
  let contract = IERC721.bind(collectionAddress);

  let symbolResult = contract.try_symbol();
  if (!symbolResult.reverted) {
    return symbolResult.value;
  }

  return "unknown";
}

export function fetchTokenURI(collectionAddress: Address, tokenId: BigInt): string | null {
  let contract = IERC721.bind(collectionAddress);

  let tokenURIResult = contract.try_tokenURI(tokenId);
  if (!tokenURIResult.reverted) {
    return tokenURIResult.value;
  }

  return null;
}

export function fetchNftId(collectionAddress: Address, tokenId: BigInt): BigInt | null {
  let contract = B8DEXMainCollection.bind(collectionAddress);

  let nftIdResult = contract.try_getNftId(tokenId);
  if (!nftIdResult.reverted) {
    return BigInt.fromI32(nftIdResult.value);
  }

  return null;
}
