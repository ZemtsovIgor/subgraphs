/* eslint-disable prefer-const */
import { Contract, Customer, TableHits } from "../generated/schema";
import { UserVerification, InvestmentReceived, ReferralRewardSent, DonationRewardSent, DonationReferralRewardSent, CharitySent } from "../generated/GAME/GAME";
import {BigInt} from "@graphprotocol/graph-ts";
import {fetchCustomerId, fetchInviterId} from "./utils/game";

// Constants
let CONTRACT_ADDRESS = "0x423237005A35787fB706Fa5F6f436Fe75534daEe";
let ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

// BigNumber-like references
let ZERO_BI = BigInt.fromI32(0);
let ONE_BI = BigInt.fromI32(1);

export function handleVerification(event: UserVerification): void {
  let customer = Customer.load(event.params.user.toHex());
  if (customer === null) {
    // Customer
    customer = new Customer(event.params.user.toHex());
    customer.verified = false;
    customer.currentTable = ZERO_BI;
    customer.myID = fetchCustomerId(event.params.user);
    customer.inviterID = ZERO_BI;
    customer.totalHits = ZERO_BI;
    customer.save();
  }

  customer.verified = true;
  customer.save();
}

export function handleInvestment(event: InvestmentReceived): void {
  let customer = Customer.load(event.transaction.from.toHex());

  if (customer) {
    customer.currentTable = event.params.table;
    customer.myID = fetchCustomerId(event.transaction.from);
    customer.save();
  }
}

export function handleReferralReward(event: ReferralRewardSent): void {
  let customer = Customer.load(event.params.to.toHex());

  if (customer) {
    if (event.params.value !== ZERO_BI) {
      let table = TableHits.load(event.transaction.hash.toHex() + "-ReferralReward-" + event.params.to.toHex());
      if (table === null) {
        // TableHits
        table = new TableHits(event.transaction.hash.toHex() + "-ReferralReward-" + event.params.to.toHex());
        table.tableNum = event.params.table;
        table.inviterAddress = ZERO_ADDRESS;
        table.inviterReward = ZERO_BI;
        table.winnerAddress = ZERO_ADDRESS;
        table.winnerReward = ZERO_BI;
        table.winnerInviterAddress = ZERO_ADDRESS;
        table.winnerInviterReward = ZERO_BI;
      }

      table.inviterAddress = event.params.to.toHex();
      table.inviterReward = event.params.value;

      table.save();
    }
  }
}

export function handleDonationReward(event: DonationRewardSent): void {
  let contract = Contract.load(CONTRACT_ADDRESS);
  if (contract === null) {
    // Contract
    contract = new Contract(CONTRACT_ADDRESS);
    contract.totalHits = ZERO_BI;
  }

  contract.totalHits = contract.totalHits.plus(ONE_BI);
  contract.save();

  let customer = Customer.load(event.params.to.toHex());

  if (customer) {
    if (event.params.value !== ZERO_BI) {
      let table = TableHits.load(event.transaction.hash.toHex() + "-DonationReward-" + event.params.to.toHex());

      if (table === null) {
        // TableHits
        table = new TableHits(event.transaction.hash.toHex() + "-DonationReward-" + event.params.to.toHex());
        table.tableNum = event.params.table;
        table.inviterAddress = ZERO_ADDRESS;
        table.inviterReward = ZERO_BI;
        table.winnerAddress = ZERO_ADDRESS;
        table.winnerReward = ZERO_BI;
        table.winnerInviterAddress = ZERO_ADDRESS;
        table.winnerInviterReward = ZERO_BI;
      }

      table.winnerAddress = event.params.to.toHex();
      table.winnerReward = event.params.value;

      table.save();
    }

    customer.totalHits = customer.totalHits.plus(ONE_BI);
    customer.save();
  }
}

export function handleDonationReferralReward(event: DonationReferralRewardSent): void {
  let customer = Customer.load(event.params.to.toHex());

  if (customer) {
    if (event.params.value !== ZERO_BI) {
      let table = TableHits.load(event.transaction.hash.toHex() + "-DonationReferralReward-" + event.params.to.toHex());
      if (table === null) {
        // TableHits
        table = new TableHits(event.transaction.hash.toHex() + "-DonationReferralReward-" + event.params.to.toHex());
        table.tableNum = event.params.table;
        table.inviterAddress = ZERO_ADDRESS;
        table.inviterReward = ZERO_BI;
        table.winnerAddress = ZERO_ADDRESS;
        table.winnerReward = ZERO_BI;
        table.winnerInviterAddress = ZERO_ADDRESS;
        table.winnerInviterReward = ZERO_BI;
      }

      table.winnerInviterAddress = event.params.to.toHex();
      table.winnerInviterReward = event.params.value;

      table.save();
    }
  }
}

export function handleCharitySent(event: CharitySent): void {
  let customer = Customer.load(event.transaction.from.toHex());
  let inviterAddress = fetchInviterId(event.transaction.from);
  customer.inviterID = fetchCustomerId(inviterAddress);
  customer.save();
}
