/* eslint-disable prefer-const */
import { BigInt, dataSource, Address } from "@graphprotocol/graph-ts";
import { GAME } from "../../generated/GAME/GAME";

let ZERO_BI = BigInt.fromI32(0);

export function fetchCustomerId(addr: Address): BigInt {
  let contract = GAME.bind(dataSource.address());

  let customerIdResult = contract.try_addressToId(addr);
  if (!customerIdResult.reverted) {
    return customerIdResult.value;
  }

  return ZERO_BI;
}

export function fetchInviterId(addr: Address): Address {
  let contract = GAME.bind(dataSource.address());

  let inviterIdResult = contract.try_inviters(addr);
  if (!inviterIdResult.reverted) {
    return inviterIdResult.value;
  }

  return new Address(0);
}
