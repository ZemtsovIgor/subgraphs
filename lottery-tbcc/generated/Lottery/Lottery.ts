// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdminTokenRecovery extends ethereum.Event {
  get params(): AdminTokenRecovery__Params {
    return new AdminTokenRecovery__Params(this);
  }
}

export class AdminTokenRecovery__Params {
  _event: AdminTokenRecovery;

  constructor(event: AdminTokenRecovery) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class LotteryClose extends ethereum.Event {
  get params(): LotteryClose__Params {
    return new LotteryClose__Params(this);
  }
}

export class LotteryClose__Params {
  _event: LotteryClose;

  constructor(event: LotteryClose) {
    this._event = event;
  }

  get lotteryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get firstTicketIdNextLottery(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class LotteryInjection extends ethereum.Event {
  get params(): LotteryInjection__Params {
    return new LotteryInjection__Params(this);
  }
}

export class LotteryInjection__Params {
  _event: LotteryInjection;

  constructor(event: LotteryInjection) {
    this._event = event;
  }

  get lotteryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get injectedAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class LotteryNumberDrawn extends ethereum.Event {
  get params(): LotteryNumberDrawn__Params {
    return new LotteryNumberDrawn__Params(this);
  }
}

export class LotteryNumberDrawn__Params {
  _event: LotteryNumberDrawn;

  constructor(event: LotteryNumberDrawn) {
    this._event = event;
  }

  get lotteryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get finalNumber(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get countWinningTickets(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LotteryOpen extends ethereum.Event {
  get params(): LotteryOpen__Params {
    return new LotteryOpen__Params(this);
  }
}

export class LotteryOpen__Params {
  _event: LotteryOpen;

  constructor(event: LotteryOpen) {
    this._event = event;
  }

  get lotteryId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get startTime(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get endTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get priceTicketInTBCC(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get firstTicketId(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get injectedAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class NewOperatorAndTreasuryAndInjectorAddresses extends ethereum.Event {
  get params(): NewOperatorAndTreasuryAndInjectorAddresses__Params {
    return new NewOperatorAndTreasuryAndInjectorAddresses__Params(this);
  }
}

export class NewOperatorAndTreasuryAndInjectorAddresses__Params {
  _event: NewOperatorAndTreasuryAndInjectorAddresses;

  constructor(event: NewOperatorAndTreasuryAndInjectorAddresses) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get treasury(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get injector(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class NewRandomGenerator extends ethereum.Event {
  get params(): NewRandomGenerator__Params {
    return new NewRandomGenerator__Params(this);
  }
}

export class NewRandomGenerator__Params {
  _event: NewRandomGenerator;

  constructor(event: NewRandomGenerator) {
    this._event = event;
  }

  get randomGenerator(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TicketsClaim extends ethereum.Event {
  get params(): TicketsClaim__Params {
    return new TicketsClaim__Params(this);
  }
}

export class TicketsClaim__Params {
  _event: TicketsClaim;

  constructor(event: TicketsClaim) {
    this._event = event;
  }

  get claimer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get lotteryId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get numberTickets(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class TicketsPurchase extends ethereum.Event {
  get params(): TicketsPurchase__Params {
    return new TicketsPurchase__Params(this);
  }
}

export class TicketsPurchase__Params {
  _event: TicketsPurchase;

  constructor(event: TicketsPurchase) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get lotteryId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get numberTickets(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Lottery__viewLotteryResultValue0Struct extends ethereum.Tuple {
  get status(): i32 {
    return this[0].toI32();
  }

  get startTime(): BigInt {
    return this[1].toBigInt();
  }

  get endTime(): BigInt {
    return this[2].toBigInt();
  }

  get priceTicketInTBCC(): BigInt {
    return this[3].toBigInt();
  }

  get discountDivisor(): BigInt {
    return this[4].toBigInt();
  }

  get rewardsBreakdown(): Array<BigInt> {
    return this[5].toBigIntArray();
  }

  get treasuryFee(): BigInt {
    return this[6].toBigInt();
  }

  get tbccPerBracket(): Array<BigInt> {
    return this[7].toBigIntArray();
  }

  get countWinnersPerBracket(): Array<BigInt> {
    return this[8].toBigIntArray();
  }

  get firstTicketId(): BigInt {
    return this[9].toBigInt();
  }

  get firstTicketIdNextLottery(): BigInt {
    return this[10].toBigInt();
  }

  get amountCollectedInTBCC(): BigInt {
    return this[11].toBigInt();
  }

  get finalNumber(): BigInt {
    return this[12].toBigInt();
  }
}

export class Lottery__viewNumbersAndStatusesForTicketIdsResult {
  value0: Array<BigInt>;
  value1: Array<boolean>;

  constructor(value0: Array<BigInt>, value1: Array<boolean>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigIntArray(this.value0));
    map.set("value1", ethereum.Value.fromBooleanArray(this.value1));
    return map;
  }
}

export class Lottery__viewUserInfoForLotteryIdResult {
  value0: Array<BigInt>;
  value1: Array<BigInt>;
  value2: Array<boolean>;
  value3: BigInt;

  constructor(
    value0: Array<BigInt>,
    value1: Array<BigInt>,
    value2: Array<boolean>,
    value3: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigIntArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    map.set("value2", ethereum.Value.fromBooleanArray(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class Lottery extends ethereum.SmartContract {
  static bind(address: Address): Lottery {
    return new Lottery("Lottery", address);
  }

  MAX_LENGTH_LOTTERY(): BigInt {
    let result = super.call(
      "MAX_LENGTH_LOTTERY",
      "MAX_LENGTH_LOTTERY():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_LENGTH_LOTTERY(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_LENGTH_LOTTERY",
      "MAX_LENGTH_LOTTERY():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_TREASURY_FEE(): BigInt {
    let result = super.call(
      "MAX_TREASURY_FEE",
      "MAX_TREASURY_FEE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_TREASURY_FEE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_TREASURY_FEE",
      "MAX_TREASURY_FEE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MIN_DISCOUNT_DIVISOR(): BigInt {
    let result = super.call(
      "MIN_DISCOUNT_DIVISOR",
      "MIN_DISCOUNT_DIVISOR():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MIN_DISCOUNT_DIVISOR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MIN_DISCOUNT_DIVISOR",
      "MIN_DISCOUNT_DIVISOR():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MIN_LENGTH_LOTTERY(): BigInt {
    let result = super.call(
      "MIN_LENGTH_LOTTERY",
      "MIN_LENGTH_LOTTERY():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MIN_LENGTH_LOTTERY(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MIN_LENGTH_LOTTERY",
      "MIN_LENGTH_LOTTERY():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  calculateTotalPriceForBulkTickets(
    _discountDivisor: BigInt,
    _priceTicket: BigInt,
    _numberTickets: BigInt
  ): BigInt {
    let result = super.call(
      "calculateTotalPriceForBulkTickets",
      "calculateTotalPriceForBulkTickets(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_discountDivisor),
        ethereum.Value.fromUnsignedBigInt(_priceTicket),
        ethereum.Value.fromUnsignedBigInt(_numberTickets)
      ]
    );

    return result[0].toBigInt();
  }

  try_calculateTotalPriceForBulkTickets(
    _discountDivisor: BigInt,
    _priceTicket: BigInt,
    _numberTickets: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calculateTotalPriceForBulkTickets",
      "calculateTotalPriceForBulkTickets(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_discountDivisor),
        ethereum.Value.fromUnsignedBigInt(_priceTicket),
        ethereum.Value.fromUnsignedBigInt(_numberTickets)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  currentLotteryId(): BigInt {
    let result = super.call(
      "currentLotteryId",
      "currentLotteryId():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_currentLotteryId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "currentLotteryId",
      "currentLotteryId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  currentTicketId(): BigInt {
    let result = super.call(
      "currentTicketId",
      "currentTicketId():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_currentTicketId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "currentTicketId",
      "currentTicketId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  injectorAddress(): Address {
    let result = super.call(
      "injectorAddress",
      "injectorAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_injectorAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "injectorAddress",
      "injectorAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  maxNumberTicketsPerBuyOrClaim(): BigInt {
    let result = super.call(
      "maxNumberTicketsPerBuyOrClaim",
      "maxNumberTicketsPerBuyOrClaim():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_maxNumberTicketsPerBuyOrClaim(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxNumberTicketsPerBuyOrClaim",
      "maxNumberTicketsPerBuyOrClaim():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxPriceTicketInTBCC(): BigInt {
    let result = super.call(
      "maxPriceTicketInTBCC",
      "maxPriceTicketInTBCC():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_maxPriceTicketInTBCC(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxPriceTicketInTBCC",
      "maxPriceTicketInTBCC():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minPriceTicketInTBCC(): BigInt {
    let result = super.call(
      "minPriceTicketInTBCC",
      "minPriceTicketInTBCC():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_minPriceTicketInTBCC(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minPriceTicketInTBCC",
      "minPriceTicketInTBCC():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  operatorAddress(): Address {
    let result = super.call(
      "operatorAddress",
      "operatorAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_operatorAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "operatorAddress",
      "operatorAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingInjectionNextLottery(): BigInt {
    let result = super.call(
      "pendingInjectionNextLottery",
      "pendingInjectionNextLottery():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_pendingInjectionNextLottery(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pendingInjectionNextLottery",
      "pendingInjectionNextLottery():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  percentToBurn(): BigInt {
    let result = super.call("percentToBurn", "percentToBurn():(uint256)", []);

    return result[0].toBigInt();
  }

  try_percentToBurn(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "percentToBurn",
      "percentToBurn():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  percentToTreasury(): BigInt {
    let result = super.call(
      "percentToTreasury",
      "percentToTreasury():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_percentToTreasury(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "percentToTreasury",
      "percentToTreasury():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  randomGenerator(): Address {
    let result = super.call(
      "randomGenerator",
      "randomGenerator():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_randomGenerator(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "randomGenerator",
      "randomGenerator():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tbccToken(): Address {
    let result = super.call("tbccToken", "tbccToken():(address)", []);

    return result[0].toAddress();
  }

  try_tbccToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("tbccToken", "tbccToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  treasuryAddress(): Address {
    let result = super.call(
      "treasuryAddress",
      "treasuryAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_treasuryAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "treasuryAddress",
      "treasuryAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  viewCurrentLotteryId(): BigInt {
    let result = super.call(
      "viewCurrentLotteryId",
      "viewCurrentLotteryId():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_viewCurrentLotteryId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "viewCurrentLotteryId",
      "viewCurrentLotteryId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  viewLottery(_lotteryId: BigInt): Lottery__viewLotteryResultValue0Struct {
    let result = super.call(
      "viewLottery",
      "viewLottery(uint256):((uint8,uint256,uint256,uint256,uint256,uint256[6],uint256,uint256[6],uint256[6],uint256,uint256,uint256,uint32))",
      [ethereum.Value.fromUnsignedBigInt(_lotteryId)]
    );

    return result[0].toTuple() as Lottery__viewLotteryResultValue0Struct;
  }

  try_viewLottery(
    _lotteryId: BigInt
  ): ethereum.CallResult<Lottery__viewLotteryResultValue0Struct> {
    let result = super.tryCall(
      "viewLottery",
      "viewLottery(uint256):((uint8,uint256,uint256,uint256,uint256,uint256[6],uint256,uint256[6],uint256[6],uint256,uint256,uint256,uint32))",
      [ethereum.Value.fromUnsignedBigInt(_lotteryId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as Lottery__viewLotteryResultValue0Struct
    );
  }

  viewNumbersAndStatusesForTicketIds(
    _ticketIds: Array<BigInt>
  ): Lottery__viewNumbersAndStatusesForTicketIdsResult {
    let result = super.call(
      "viewNumbersAndStatusesForTicketIds",
      "viewNumbersAndStatusesForTicketIds(uint256[]):(uint32[],bool[])",
      [ethereum.Value.fromUnsignedBigIntArray(_ticketIds)]
    );

    return new Lottery__viewNumbersAndStatusesForTicketIdsResult(
      result[0].toBigIntArray(),
      result[1].toBooleanArray()
    );
  }

  try_viewNumbersAndStatusesForTicketIds(
    _ticketIds: Array<BigInt>
  ): ethereum.CallResult<Lottery__viewNumbersAndStatusesForTicketIdsResult> {
    let result = super.tryCall(
      "viewNumbersAndStatusesForTicketIds",
      "viewNumbersAndStatusesForTicketIds(uint256[]):(uint32[],bool[])",
      [ethereum.Value.fromUnsignedBigIntArray(_ticketIds)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Lottery__viewNumbersAndStatusesForTicketIdsResult(
        value[0].toBigIntArray(),
        value[1].toBooleanArray()
      )
    );
  }

  viewRewardsForTicketId(
    _lotteryId: BigInt,
    _ticketId: BigInt,
    _bracket: BigInt
  ): BigInt {
    let result = super.call(
      "viewRewardsForTicketId",
      "viewRewardsForTicketId(uint256,uint256,uint32):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_lotteryId),
        ethereum.Value.fromUnsignedBigInt(_ticketId),
        ethereum.Value.fromUnsignedBigInt(_bracket)
      ]
    );

    return result[0].toBigInt();
  }

  try_viewRewardsForTicketId(
    _lotteryId: BigInt,
    _ticketId: BigInt,
    _bracket: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "viewRewardsForTicketId",
      "viewRewardsForTicketId(uint256,uint256,uint32):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_lotteryId),
        ethereum.Value.fromUnsignedBigInt(_ticketId),
        ethereum.Value.fromUnsignedBigInt(_bracket)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  viewUserInfoForLotteryId(
    _user: Address,
    _lotteryId: BigInt,
    _cursor: BigInt,
    _size: BigInt
  ): Lottery__viewUserInfoForLotteryIdResult {
    let result = super.call(
      "viewUserInfoForLotteryId",
      "viewUserInfoForLotteryId(address,uint256,uint256,uint256):(uint256[],uint32[],bool[],uint256)",
      [
        ethereum.Value.fromAddress(_user),
        ethereum.Value.fromUnsignedBigInt(_lotteryId),
        ethereum.Value.fromUnsignedBigInt(_cursor),
        ethereum.Value.fromUnsignedBigInt(_size)
      ]
    );

    return new Lottery__viewUserInfoForLotteryIdResult(
      result[0].toBigIntArray(),
      result[1].toBigIntArray(),
      result[2].toBooleanArray(),
      result[3].toBigInt()
    );
  }

  try_viewUserInfoForLotteryId(
    _user: Address,
    _lotteryId: BigInt,
    _cursor: BigInt,
    _size: BigInt
  ): ethereum.CallResult<Lottery__viewUserInfoForLotteryIdResult> {
    let result = super.tryCall(
      "viewUserInfoForLotteryId",
      "viewUserInfoForLotteryId(address,uint256,uint256,uint256):(uint256[],uint32[],bool[],uint256)",
      [
        ethereum.Value.fromAddress(_user),
        ethereum.Value.fromUnsignedBigInt(_lotteryId),
        ethereum.Value.fromUnsignedBigInt(_cursor),
        ethereum.Value.fromUnsignedBigInt(_size)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Lottery__viewUserInfoForLotteryIdResult(
        value[0].toBigIntArray(),
        value[1].toBigIntArray(),
        value[2].toBooleanArray(),
        value[3].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _tbccTokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _randomGeneratorAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BuyTicketsCall extends ethereum.Call {
  get inputs(): BuyTicketsCall__Inputs {
    return new BuyTicketsCall__Inputs(this);
  }

  get outputs(): BuyTicketsCall__Outputs {
    return new BuyTicketsCall__Outputs(this);
  }
}

export class BuyTicketsCall__Inputs {
  _call: BuyTicketsCall;

  constructor(call: BuyTicketsCall) {
    this._call = call;
  }

  get _lotteryId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _ticketNumbers(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class BuyTicketsCall__Outputs {
  _call: BuyTicketsCall;

  constructor(call: BuyTicketsCall) {
    this._call = call;
  }
}

export class ChangeRandomGeneratorCall extends ethereum.Call {
  get inputs(): ChangeRandomGeneratorCall__Inputs {
    return new ChangeRandomGeneratorCall__Inputs(this);
  }

  get outputs(): ChangeRandomGeneratorCall__Outputs {
    return new ChangeRandomGeneratorCall__Outputs(this);
  }
}

export class ChangeRandomGeneratorCall__Inputs {
  _call: ChangeRandomGeneratorCall;

  constructor(call: ChangeRandomGeneratorCall) {
    this._call = call;
  }

  get _randomGeneratorAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeRandomGeneratorCall__Outputs {
  _call: ChangeRandomGeneratorCall;

  constructor(call: ChangeRandomGeneratorCall) {
    this._call = call;
  }
}

export class ClaimTicketsCall extends ethereum.Call {
  get inputs(): ClaimTicketsCall__Inputs {
    return new ClaimTicketsCall__Inputs(this);
  }

  get outputs(): ClaimTicketsCall__Outputs {
    return new ClaimTicketsCall__Outputs(this);
  }
}

export class ClaimTicketsCall__Inputs {
  _call: ClaimTicketsCall;

  constructor(call: ClaimTicketsCall) {
    this._call = call;
  }

  get _lotteryId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _ticketIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _brackets(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class ClaimTicketsCall__Outputs {
  _call: ClaimTicketsCall;

  constructor(call: ClaimTicketsCall) {
    this._call = call;
  }
}

export class CloseLotteryCall extends ethereum.Call {
  get inputs(): CloseLotteryCall__Inputs {
    return new CloseLotteryCall__Inputs(this);
  }

  get outputs(): CloseLotteryCall__Outputs {
    return new CloseLotteryCall__Outputs(this);
  }
}

export class CloseLotteryCall__Inputs {
  _call: CloseLotteryCall;

  constructor(call: CloseLotteryCall) {
    this._call = call;
  }

  get _lotteryId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CloseLotteryCall__Outputs {
  _call: CloseLotteryCall;

  constructor(call: CloseLotteryCall) {
    this._call = call;
  }
}

export class DrawFinalNumberAndMakeLotteryClaimableCall extends ethereum.Call {
  get inputs(): DrawFinalNumberAndMakeLotteryClaimableCall__Inputs {
    return new DrawFinalNumberAndMakeLotteryClaimableCall__Inputs(this);
  }

  get outputs(): DrawFinalNumberAndMakeLotteryClaimableCall__Outputs {
    return new DrawFinalNumberAndMakeLotteryClaimableCall__Outputs(this);
  }
}

export class DrawFinalNumberAndMakeLotteryClaimableCall__Inputs {
  _call: DrawFinalNumberAndMakeLotteryClaimableCall;

  constructor(call: DrawFinalNumberAndMakeLotteryClaimableCall) {
    this._call = call;
  }

  get _lotteryId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _autoInjection(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class DrawFinalNumberAndMakeLotteryClaimableCall__Outputs {
  _call: DrawFinalNumberAndMakeLotteryClaimableCall;

  constructor(call: DrawFinalNumberAndMakeLotteryClaimableCall) {
    this._call = call;
  }
}

export class InjectFundsCall extends ethereum.Call {
  get inputs(): InjectFundsCall__Inputs {
    return new InjectFundsCall__Inputs(this);
  }

  get outputs(): InjectFundsCall__Outputs {
    return new InjectFundsCall__Outputs(this);
  }
}

export class InjectFundsCall__Inputs {
  _call: InjectFundsCall;

  constructor(call: InjectFundsCall) {
    this._call = call;
  }

  get _lotteryId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class InjectFundsCall__Outputs {
  _call: InjectFundsCall;

  constructor(call: InjectFundsCall) {
    this._call = call;
  }
}

export class RecoverWrongTokensCall extends ethereum.Call {
  get inputs(): RecoverWrongTokensCall__Inputs {
    return new RecoverWrongTokensCall__Inputs(this);
  }

  get outputs(): RecoverWrongTokensCall__Outputs {
    return new RecoverWrongTokensCall__Outputs(this);
  }
}

export class RecoverWrongTokensCall__Inputs {
  _call: RecoverWrongTokensCall;

  constructor(call: RecoverWrongTokensCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RecoverWrongTokensCall__Outputs {
  _call: RecoverWrongTokensCall;

  constructor(call: RecoverWrongTokensCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetMaxNumberTicketsPerBuyCall extends ethereum.Call {
  get inputs(): SetMaxNumberTicketsPerBuyCall__Inputs {
    return new SetMaxNumberTicketsPerBuyCall__Inputs(this);
  }

  get outputs(): SetMaxNumberTicketsPerBuyCall__Outputs {
    return new SetMaxNumberTicketsPerBuyCall__Outputs(this);
  }
}

export class SetMaxNumberTicketsPerBuyCall__Inputs {
  _call: SetMaxNumberTicketsPerBuyCall;

  constructor(call: SetMaxNumberTicketsPerBuyCall) {
    this._call = call;
  }

  get _maxNumberTicketsPerBuy(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMaxNumberTicketsPerBuyCall__Outputs {
  _call: SetMaxNumberTicketsPerBuyCall;

  constructor(call: SetMaxNumberTicketsPerBuyCall) {
    this._call = call;
  }
}

export class SetMinAndMaxTicketPriceInTBCCCall extends ethereum.Call {
  get inputs(): SetMinAndMaxTicketPriceInTBCCCall__Inputs {
    return new SetMinAndMaxTicketPriceInTBCCCall__Inputs(this);
  }

  get outputs(): SetMinAndMaxTicketPriceInTBCCCall__Outputs {
    return new SetMinAndMaxTicketPriceInTBCCCall__Outputs(this);
  }
}

export class SetMinAndMaxTicketPriceInTBCCCall__Inputs {
  _call: SetMinAndMaxTicketPriceInTBCCCall;

  constructor(call: SetMinAndMaxTicketPriceInTBCCCall) {
    this._call = call;
  }

  get _minPriceTicketInTBCC(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _maxPriceTicketInTBCC(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetMinAndMaxTicketPriceInTBCCCall__Outputs {
  _call: SetMinAndMaxTicketPriceInTBCCCall;

  constructor(call: SetMinAndMaxTicketPriceInTBCCCall) {
    this._call = call;
  }
}

export class SetOperatorAndTreasuryAndInjectorAddressesCall extends ethereum.Call {
  get inputs(): SetOperatorAndTreasuryAndInjectorAddressesCall__Inputs {
    return new SetOperatorAndTreasuryAndInjectorAddressesCall__Inputs(this);
  }

  get outputs(): SetOperatorAndTreasuryAndInjectorAddressesCall__Outputs {
    return new SetOperatorAndTreasuryAndInjectorAddressesCall__Outputs(this);
  }
}

export class SetOperatorAndTreasuryAndInjectorAddressesCall__Inputs {
  _call: SetOperatorAndTreasuryAndInjectorAddressesCall;

  constructor(call: SetOperatorAndTreasuryAndInjectorAddressesCall) {
    this._call = call;
  }

  get _operatorAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _treasuryAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _injectorAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class SetOperatorAndTreasuryAndInjectorAddressesCall__Outputs {
  _call: SetOperatorAndTreasuryAndInjectorAddressesCall;

  constructor(call: SetOperatorAndTreasuryAndInjectorAddressesCall) {
    this._call = call;
  }
}

export class SetPercentsCall extends ethereum.Call {
  get inputs(): SetPercentsCall__Inputs {
    return new SetPercentsCall__Inputs(this);
  }

  get outputs(): SetPercentsCall__Outputs {
    return new SetPercentsCall__Outputs(this);
  }
}

export class SetPercentsCall__Inputs {
  _call: SetPercentsCall;

  constructor(call: SetPercentsCall) {
    this._call = call;
  }

  get _burnPercent(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _treasuryPercent(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetPercentsCall__Outputs {
  _call: SetPercentsCall;

  constructor(call: SetPercentsCall) {
    this._call = call;
  }
}

export class StartLotteryCall extends ethereum.Call {
  get inputs(): StartLotteryCall__Inputs {
    return new StartLotteryCall__Inputs(this);
  }

  get outputs(): StartLotteryCall__Outputs {
    return new StartLotteryCall__Outputs(this);
  }
}

export class StartLotteryCall__Inputs {
  _call: StartLotteryCall;

  constructor(call: StartLotteryCall) {
    this._call = call;
  }

  get _endTime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _priceTicketInTBCC(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _discountDivisor(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _rewardsBreakdown(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get _treasuryFee(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class StartLotteryCall__Outputs {
  _call: StartLotteryCall;

  constructor(call: StartLotteryCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
