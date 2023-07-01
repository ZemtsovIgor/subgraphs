/* eslint-disable prefer-const */
import { Token, Burn, Burner } from "../generated/schema";
import {
  Transfer
} from "../generated/ERC20/ERC20";
import {fetchName, fetchSymbol, fetchTotalSupply, convertTokenToDecimal} from "./utils/erc-20";
import {Address, BigDecimal, BigInt} from "@graphprotocol/graph-ts";

// Constants
let TOKEN_ADDRESS = "0xf29480344d8e21efeab7fde39f8d8299056a7fea";

// BigNumber-like references
let ZERO_BI = BigInt.fromI32(0);
let ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
let BI_18 = BigInt.fromI32(18);

export function handleTransfer(event: Transfer): void {
  let token = Token.load(TOKEN_ADDRESS);
  if (token === null) {
    // Contract
    token = new Token(TOKEN_ADDRESS);
    token.name = fetchName();
    token.symbol = fetchSymbol();
    token.decimals = BI_18;
    token.totalSupply = ZERO_BI;
    token.save();
  }
  token.totalSupply = fetchTotalSupply();

  if (event.params.to.equals(Address.fromString(ZERO_ADDRESS))) {
    let burn = Burn.load(event.transaction.hash.toHex());

    if (burn === null) {
      burn = new Burn(event.transaction.hash.toHex());
      burn.timestamp = event.block.timestamp;
    }

    let tokenAmount = convertTokenToDecimal(event.params.value, BI_18);

    burn.amount = tokenAmount as BigDecimal;
    burn.to = event.params.to;
    burn.sender = event.params.from;
    burn.logIndex = event.logIndex;
    burn.save();

    let burnerID = burn.sender.toString();

    let burner = Burner.load(burnerID);

    if (burner === null) {
      burner = new Burner(burnerID);
      burner.amount = new BigDecimal(ZERO_BI);
    }

    burner.sender = burn.sender;
    burner.amount = burner.amount.plus(tokenAmount);
    burner.save();
  }

  token.save();
}
