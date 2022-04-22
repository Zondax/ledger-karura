# Karura  1.2041.x

## System

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Fill block |    | :heavy_check_mark: | :heavy_check_mark: | `Perbill` ratio <br/> |
|Remark |    | :heavy_check_mark: | :heavy_check_mark: | `Vecu8` remark <br/> |
|Set heap pages |    | :heavy_check_mark: | :heavy_check_mark: | `u64` pages <br/> |
|Set code |    | :heavy_check_mark: | :heavy_check_mark: | `Vecu8` code <br/> |
|Set code without checks |    | :heavy_check_mark: | :heavy_check_mark: | `Vecu8` code <br/> |
|Set storage |    |   |   | `VecKeyValue` items <br/> |
|Kill storage |    |   |   | `VecKey` keys <br/> |
|Kill prefix |    |   |   | `Key` prefix <br/>`u32` subkeys <br/> |
|Remark with event |    | :heavy_check_mark: | :heavy_check_mark: | `Vecu8` remark <br/> |

## Timestamp

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Set |    | :heavy_check_mark: |   | `Compactu64` now <br/> |

## Scheduler

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Schedule |    |   |   | `BlockNumber` when <br/>`OptionschedulePeriodBlockNumber` maybe_periodic <br/>`schedulePriority` priority <br/>`BoxCallOrHashOfT` call <br/> |
|Cancel |    |   |   | `BlockNumber` when <br/>`u32` index <br/> |
|Schedule named |    |   |   | `Vecu8` id <br/>`BlockNumber` when <br/>`OptionschedulePeriodBlockNumber` maybe_periodic <br/>`schedulePriority` priority <br/>`BoxCallOrHashOfT` call <br/> |
|Cancel named |    |   |   | `Vecu8` id <br/> |
|Schedule after |    |   |   | `BlockNumber` after <br/>`OptionschedulePeriodBlockNumber` maybe_periodic <br/>`schedulePriority` priority <br/>`BoxCallOrHashOfT` call <br/> |
|Schedule named after |    |   |   | `Vecu8` id <br/>`BlockNumber` after <br/>`OptionschedulePeriodBlockNumber` maybe_periodic <br/>`schedulePriority` priority <br/>`BoxCallOrHashOfT` call <br/> |

## Utility

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Batch | :heavy_check_mark:  | :heavy_check_mark: |   | `VecCall` calls <br/> |
|As derivative |    |   |   | `u16` index <br/>`Call` call <br/> |
|Batch all | :heavy_check_mark:  | :heavy_check_mark: |   | `VecCall` calls <br/> |
|Dispatch as |    |   |   | `BoxPalletsOrigin` as_origin <br/>`Call` call <br/> |

## Multisig

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|As multi threshold 1 |    |   |   | `VecAccountId` other_signatories <br/>`Call` call <br/> |
|As multi |    |   |   | `u16` threshold <br/>`VecAccountId` other_signatories <br/>`OptionTimepoint` maybe_timepoint <br/>`OpaqueCall` call <br/>`bool` store_call <br/>`Weight` max_weight <br/> |
|Approve as multi |    | :heavy_check_mark: | :heavy_check_mark: | `u16` threshold <br/>`VecAccountId` other_signatories <br/>`OptionTimepoint` maybe_timepoint <br/>`H256` call_hash <br/>`Weight` max_weight <br/> |
|Cancel as multi |    | :heavy_check_mark: | :heavy_check_mark: | `u16` threshold <br/>`VecAccountId` other_signatories <br/>`Timepoint` timepoint <br/>`H256` call_hash <br/> |

## Proxy

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Proxy |    | :heavy_check_mark: | :heavy_check_mark: | `AccountId` real <br/>`OptionProxyType` force_proxy_type <br/>`Call` call <br/> |
|Add proxy |    | :heavy_check_mark: |   | `AccountId` delegate <br/>`ProxyType` proxy_type <br/>`BlockNumber` delay <br/> |
|Remove proxy |    | :heavy_check_mark: |   | `AccountId` delegate <br/>`ProxyType` proxy_type <br/>`BlockNumber` delay <br/> |
|Remove proxies |    | :heavy_check_mark: |   |  |
|Anonymous |    | :heavy_check_mark: |   | `ProxyType` proxy_type <br/>`BlockNumber` delay <br/>`u16` index <br/> |
|Kill anonymous |    | :heavy_check_mark: |   | `AccountId` spawner <br/>`ProxyType` proxy_type <br/>`u16` index <br/>`Compactu32` height <br/>`Compactu32` ext_index <br/> |
|Announce |    | :heavy_check_mark: |   | `AccountId` real <br/>`CallHashOf` call_hash <br/> |
|Remove announcement |    | :heavy_check_mark: |   | `AccountId` real <br/>`CallHashOf` call_hash <br/> |
|Reject announcement |    | :heavy_check_mark: |   | `AccountId` delegate <br/>`CallHashOf` call_hash <br/> |
|Proxy announced |    | :heavy_check_mark: |   | `AccountId` delegate <br/>`AccountId` real <br/>`OptionProxyType` force_proxy_type <br/>`Call` call <br/> |

## TransactionPause

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Pause transaction |    | :heavy_check_mark: |   | `Vecu8` pallet_name <br/>`Vecu8` function_name <br/> |
|Unpause transaction |    | :heavy_check_mark: |   | `Vecu8` pallet_name <br/>`Vecu8` function_name <br/> |

## IdleScheduler

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Schedule task |    |   |   | `Task` task <br/> |

## Preimage

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Note preimage |    | :heavy_check_mark: |   | `Vecu8` bytes <br/> |
|Unnote preimage |    | :heavy_check_mark: |   | `Hash` hash <br/> |
|Request preimage |    | :heavy_check_mark: |   | `Hash` hash <br/> |
|Unrequest preimage |    | :heavy_check_mark: |   | `Hash` hash <br/> |

## Balances

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Transfer | :heavy_check_mark:  | :heavy_check_mark: | :heavy_check_mark: | `LookupasStaticLookupSource` dest <br/>`CompactBalance` amount <br/> |
|Set balance |    | :heavy_check_mark: | :heavy_check_mark: | `LookupasStaticLookupSource` who <br/>`CompactBalance` new_free <br/>`CompactBalance` new_reserved <br/> |
|Force transfer | :heavy_check_mark:  | :heavy_check_mark: | :heavy_check_mark: | `LookupasStaticLookupSource` source <br/>`LookupasStaticLookupSource` dest <br/>`CompactBalance` amount <br/> |
|Transfer keep alive | :heavy_check_mark:  | :heavy_check_mark: | :heavy_check_mark: | `LookupasStaticLookupSource` dest <br/>`CompactBalance` amount <br/> |
|Transfer all | :heavy_check_mark:  | :heavy_check_mark: |   | `LookupasStaticLookupSource` dest <br/>`bool` keep_alive <br/> |
|Force unreserve |    | :heavy_check_mark: |   | `LookupasStaticLookupSource` who <br/>`Balance` amount <br/> |

## Currencies

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Transfer |    | :heavy_check_mark: |   | `LookupasStaticLookupSource` dest <br/>`CurrencyId` currency_id <br/>`Compactu128` amount <br/> |
|Transfer native currency |    | :heavy_check_mark: |   | `LookupasStaticLookupSource` dest <br/>`Compactu128` amount <br/> |
|Update balance |    | :heavy_check_mark: |   | `LookupasStaticLookupSource` who <br/>`CurrencyId` currency_id <br/>`Amount` amount <br/> |
|Sweep dust |    | :heavy_check_mark: |   | `CurrencyId` currency_id <br/>`VecAccountId` accounts <br/> |

## Vesting

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Claim |    |   |   |  |
|Vested transfer |    |   |   | `LookupasStaticLookupSource` dest <br/>`VestingScheduleOfT` schedule <br/> |
|Update vesting schedules |    |   |   | `LookupasStaticLookupSource` who <br/>`VecVestingScheduleOfT` vesting_schedules <br/> |
|Claim for |    |   |   | `LookupasStaticLookupSource` dest <br/> |

## TransactionPayment

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Set alternative fee swap path |    | :heavy_check_mark: |   | `OptionVecCurrencyId` fee_swap_path <br/> |
|Set global fee swap path |    | :heavy_check_mark: |   | `VecCurrencyId` fee_swap_path <br/> |
|Remove global fee swap path |    | :heavy_check_mark: |   | `CurrencyId` currency_id <br/> |
|Set swap balance threshold |    |   |   | `CurrencyId` currency_id <br/>`Balance` swap_threshold <br/> |
|Enable charge fee pool |    |   |   | `CurrencyId` currency_id <br/>`Balance` pool_size <br/>`Balance` swap_threshold <br/> |
|Disable charge fee pool |    | :heavy_check_mark: |   | `CurrencyId` currency_id <br/> |

## Treasury

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Propose spend |    | :heavy_check_mark: |   | `CompactBalance` amount <br/>`LookupasStaticLookupSource` beneficiary <br/> |
|Reject proposal |    | :heavy_check_mark: |   | `Compactu32` proposal_id <br/> |
|Approve proposal |    | :heavy_check_mark: |   | `Compactu32` proposal_id <br/> |

## Bounties

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Propose bounty |    | :heavy_check_mark: |   | `CompactBalance` amount <br/>`Bytes` description <br/> |
|Approve bounty |    | :heavy_check_mark: |   | `Compactu32` bounty_id <br/> |
|Propose curator |    | :heavy_check_mark: |   | `Compactu32` bounty_id <br/>`LookupasStaticLookupSource` curator <br/>`CompactBalance` fee <br/> |
|Unassign curator |    | :heavy_check_mark: |   | `Compactu32` bounty_id <br/> |
|Accept curator |    | :heavy_check_mark: |   | `Compactu32` bounty_id <br/> |
|Award bounty |    | :heavy_check_mark: |   | `Compactu32` bounty_id <br/>`LookupasStaticLookupSource` beneficiary <br/> |
|Claim bounty |    | :heavy_check_mark: |   | `Compactu32` bounty_id <br/> |
|Close bounty |    | :heavy_check_mark: |   | `Compactu32` bounty_id <br/> |
|Extend bounty expiry |    | :heavy_check_mark: |   | `Compactu32` bounty_id <br/>`Bytes` remark <br/> |

## Tips

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Report awesome |    | :heavy_check_mark: |   | `Bytes` reason <br/>`AccountId` who <br/> |
|Retract tip |    | :heavy_check_mark: |   | `Hash` hash <br/> |
|Tip new |    | :heavy_check_mark: |   | `Bytes` reason <br/>`AccountId` who <br/>`Compactu128` tip_value <br/> |
|Tip |    | :heavy_check_mark: |   | `Hash` hash <br/>`Compactu128` tip_value <br/> |
|Close tip |    | :heavy_check_mark: |   | `Hash` hash <br/> |
|Slash tip |    | :heavy_check_mark: |   | `Hash` hash <br/> |

## CollatorSelection

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Set invulnerables |    | :heavy_check_mark: |   | `VecAccountId` new_ <br/> |
|Set desired candidates |    | :heavy_check_mark: |   | `Compactu32` max <br/> |
|Set candidacy bond |    | :heavy_check_mark: |   | `Compactu128` bond <br/> |
|Register as candidate |    | :heavy_check_mark: |   |  |
|Register candidate |    | :heavy_check_mark: |   | `AccountId` new_candidate <br/> |
|Leave intent |    | :heavy_check_mark: |   |  |
|Withdraw bond |    | :heavy_check_mark: |   |  |

## Session

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Set keys | :heavy_check_mark:  | :heavy_check_mark: |   | `Keys` keys <br/>`Bytes` proof <br/> |
|Purge keys | :heavy_check_mark:  | :heavy_check_mark: |   |  |

## SessionManager

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Schedule session duration |    | :heavy_check_mark: |   | `Compactu32` start_session <br/>`Compactu32` duration <br/> |

## XcmpQueue

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Service overweight |    |   |   | `OverweightIndex` index <br/>`Weight` weight_limit <br/> |
|Suspend xcm execution |    | :heavy_check_mark: |   |  |
|Resume xcm execution |    | :heavy_check_mark: |   |  |
|Update suspend threshold |    | :heavy_check_mark: |   | `u32` new_ <br/> |
|Update drop threshold |    | :heavy_check_mark: |   | `u32` new_ <br/> |
|Update resume threshold |    | :heavy_check_mark: |   | `u32` new_ <br/> |
|Update threshold weight |    | :heavy_check_mark: |   | `Weight` new_ <br/> |
|Update weight restrict decay |    | :heavy_check_mark: |   | `Weight` new_ <br/> |
|Update xcmp max individual weight |    | :heavy_check_mark: |   | `Weight` new_ <br/> |

## PolkadotXcm

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Send |    |   |   | `BoxVersionedMultiLocation` dest <br/>`BoxVersionedXcmTuple` message <br/> |
|Teleport assets |    |   |   | `BoxVersionedMultiLocation` dest <br/>`BoxVersionedMultiLocation` beneficiary <br/>`BoxVersionedMultiAssets` assets <br/>`u32` fee_asset_item <br/> |
|Reserve transfer assets |    |   |   | `BoxVersionedMultiLocation` dest <br/>`BoxVersionedMultiLocation` beneficiary <br/>`BoxVersionedMultiAssets` assets <br/>`u32` fee_asset_item <br/> |
|Execute |    |   |   | `BoxVersionedXcmTasSysConfigCall` message <br/>`Weight` max_weight <br/> |
|Force xcm version |    |   |   | `BoxMultiLocation` location <br/>`XcmVersion` xcm_version <br/> |
|Force default xcm version |    |   |   | `OptionXcmVersion` maybe_xcm_version <br/> |
|Force subscribe version notify |    |   |   | `BoxVersionedMultiLocation` location <br/> |
|Force unsubscribe version notify |    |   |   | `BoxVersionedMultiLocation` location <br/> |
|Limited reserve transfer assets |    |   |   | `BoxVersionedMultiLocation` dest <br/>`BoxVersionedMultiLocation` beneficiary <br/>`BoxVersionedMultiAssets` assets <br/>`u32` fee_asset_item <br/>`WeightLimit` weight_limit <br/> |
|Limited teleport assets |    |   |   | `BoxVersionedMultiLocation` dest <br/>`BoxVersionedMultiLocation` beneficiary <br/>`BoxVersionedMultiAssets` assets <br/>`u32` fee_asset_item <br/>`WeightLimit` weight_limit <br/> |

## DmpQueue

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Service overweight |    |   |   | `OverweightIndex` index <br/>`Weight` weight_limit <br/> |

## XTokens

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Transfer |    |   |   | `CurrencyId` currency_id <br/>`Balance` amount <br/>`BoxVersionedMultiLocation` dest <br/>`Weight` dest_weight <br/> |
|Transfer multiasset |    |   |   | `BoxVersionedMultiAsset` asset <br/>`BoxVersionedMultiLocation` dest <br/>`Weight` dest_weight <br/> |
|Transfer with fee |    |   |   | `CurrencyId` currency_id <br/>`Balance` amount <br/>`Balance` fee <br/>`BoxVersionedMultiLocation` dest <br/>`Weight` dest_weight <br/> |
|Transfer multiasset with fee |    |   |   | `BoxVersionedMultiAsset` asset <br/>`BoxVersionedMultiAsset` fee <br/>`BoxVersionedMultiLocation` dest <br/>`Weight` dest_weight <br/> |
|Transfer multicurrencies |    |   |   | `VecTupleCurrencyIdBalance` currencies <br/>`u32` fee_item <br/>`BoxVersionedMultiLocation` dest <br/>`Weight` dest_weight <br/> |
|Transfer multiassets |    |   |   | `BoxVersionedMultiAssets` assets <br/>`u32` fee_item <br/>`BoxVersionedMultiLocation` dest <br/>`Weight` dest_weight <br/> |

## OrmlXcm

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Send as sovereign |    |   |   | `BoxVersionedMultiLocation` dest <br/>`BoxVersionedXcmTuple` message <br/> |

## Authority

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Dispatch as |    |   |   | `AsOriginId` as_origin <br/>`BoxCallOfT` call <br/> |
|Schedule dispatch |    |   |   | `DispatchTimeBlockNumber` when <br/>`Priority` priority <br/>`bool` with_delayed_origin <br/>`BoxCallOfT` call <br/> |
|Fast track scheduled dispatch |    |   |   | `BoxPalletsOrigin` initial_origin <br/>`ScheduleTaskIndex` task_id <br/>`DispatchTimeBlockNumber` when <br/> |
|Delay scheduled dispatch |    |   |   | `BoxPalletsOrigin` initial_origin <br/>`ScheduleTaskIndex` task_id <br/>`BlockNumber` additional_delay <br/> |
|Cancel scheduled dispatch |    |   |   | `BoxPalletsOrigin` initial_origin <br/>`ScheduleTaskIndex` task_id <br/> |
|Authorize call |    |   |   | `BoxCallOfT` call <br/>`OptionAccountId` caller <br/> |
|Remove authorized call |    |   |   | `Hash` hash <br/> |
|Trigger call |    |   |   | `Hash` hash <br/>`Compactu64` call_weight_bound <br/> |

## GeneralCouncil

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Set members |    | :heavy_check_mark: |   | `VecAccountId` new_members <br/>`OptionAccountId` prime <br/>`MemberCount` old_count <br/> |
|Execute |    |   |   | `BoxTasConfigIProposal` proposal <br/>`Compactu32` length_bound <br/> |
|Propose |    |   |   | `Compactu32` threshold <br/>`BoxTasConfigIProposal` proposal <br/>`Compactu32` length_bound <br/> |
|Vote |    | :heavy_check_mark: |   | `Hash` proposal <br/>`Compactu32` index <br/>`bool` approve <br/> |
|Close |    | :heavy_check_mark: |   | `Hash` proposal_hash <br/>`Compactu32` index <br/>`Compactu64` proposal_weight_bound <br/>`Compactu32` length_bound <br/> |
|Disapprove proposal |    | :heavy_check_mark: |   | `Hash` proposal_hash <br/> |

## GeneralCouncilMembership

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Add member |    | :heavy_check_mark: |   | `AccountId` who <br/> |
|Remove member |    | :heavy_check_mark: |   | `AccountId` who <br/> |
|Swap member |    | :heavy_check_mark: |   | `AccountId` remove <br/>`AccountId` add <br/> |
|Reset members |    | :heavy_check_mark: |   | `VecAccountId` members <br/> |
|Change key |    | :heavy_check_mark: |   | `AccountId` new_ <br/> |
|Set prime |    | :heavy_check_mark: |   | `AccountId` who <br/> |
|Clear prime |    | :heavy_check_mark: |   |  |

## FinancialCouncil

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Set members |    | :heavy_check_mark: |   | `VecAccountId` new_members <br/>`OptionAccountId` prime <br/>`MemberCount` old_count <br/> |
|Execute |    |   |   | `BoxTasConfigIProposal` proposal <br/>`Compactu32` length_bound <br/> |
|Propose |    |   |   | `Compactu32` threshold <br/>`BoxTasConfigIProposal` proposal <br/>`Compactu32` length_bound <br/> |
|Vote |    | :heavy_check_mark: |   | `Hash` proposal <br/>`Compactu32` index <br/>`bool` approve <br/> |
|Close |    | :heavy_check_mark: |   | `Hash` proposal_hash <br/>`Compactu32` index <br/>`Compactu64` proposal_weight_bound <br/>`Compactu32` length_bound <br/> |
|Disapprove proposal |    | :heavy_check_mark: |   | `Hash` proposal_hash <br/> |

## FinancialCouncilMembership

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Add member |    | :heavy_check_mark: |   | `AccountId` who <br/> |
|Remove member |    | :heavy_check_mark: |   | `AccountId` who <br/> |
|Swap member |    | :heavy_check_mark: |   | `AccountId` remove <br/>`AccountId` add <br/> |
|Reset members |    | :heavy_check_mark: |   | `VecAccountId` members <br/> |
|Change key |    | :heavy_check_mark: |   | `AccountId` new_ <br/> |
|Set prime |    | :heavy_check_mark: |   | `AccountId` who <br/> |
|Clear prime |    | :heavy_check_mark: |   |  |

## HomaCouncil

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Set members |    | :heavy_check_mark: |   | `VecAccountId` new_members <br/>`OptionAccountId` prime <br/>`MemberCount` old_count <br/> |
|Execute |    |   |   | `BoxTasConfigIProposal` proposal <br/>`Compactu32` length_bound <br/> |
|Propose |    |   |   | `Compactu32` threshold <br/>`BoxTasConfigIProposal` proposal <br/>`Compactu32` length_bound <br/> |
|Vote |    | :heavy_check_mark: |   | `Hash` proposal <br/>`Compactu32` index <br/>`bool` approve <br/> |
|Close |    | :heavy_check_mark: |   | `Hash` proposal_hash <br/>`Compactu32` index <br/>`Compactu64` proposal_weight_bound <br/>`Compactu32` length_bound <br/> |
|Disapprove proposal |    | :heavy_check_mark: |   | `Hash` proposal_hash <br/> |

## HomaCouncilMembership

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Add member |    | :heavy_check_mark: |   | `AccountId` who <br/> |
|Remove member |    | :heavy_check_mark: |   | `AccountId` who <br/> |
|Swap member |    | :heavy_check_mark: |   | `AccountId` remove <br/>`AccountId` add <br/> |
|Reset members |    | :heavy_check_mark: |   | `VecAccountId` members <br/> |
|Change key |    | :heavy_check_mark: |   | `AccountId` new_ <br/> |
|Set prime |    | :heavy_check_mark: |   | `AccountId` who <br/> |
|Clear prime |    | :heavy_check_mark: |   |  |

## TechnicalCommittee

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Set members |    | :heavy_check_mark: |   | `VecAccountId` new_members <br/>`OptionAccountId` prime <br/>`MemberCount` old_count <br/> |
|Execute |    |   |   | `BoxTasConfigIProposal` proposal <br/>`Compactu32` length_bound <br/> |
|Propose |    |   |   | `Compactu32` threshold <br/>`BoxTasConfigIProposal` proposal <br/>`Compactu32` length_bound <br/> |
|Vote |    | :heavy_check_mark: |   | `Hash` proposal <br/>`Compactu32` index <br/>`bool` approve <br/> |
|Close |    | :heavy_check_mark: |   | `Hash` proposal_hash <br/>`Compactu32` index <br/>`Compactu64` proposal_weight_bound <br/>`Compactu32` length_bound <br/> |
|Disapprove proposal |    | :heavy_check_mark: |   | `Hash` proposal_hash <br/> |

## TechnicalCommitteeMembership

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Add member |    | :heavy_check_mark: |   | `AccountId` who <br/> |
|Remove member |    | :heavy_check_mark: |   | `AccountId` who <br/> |
|Swap member |    | :heavy_check_mark: |   | `AccountId` remove <br/>`AccountId` add <br/> |
|Reset members |    | :heavy_check_mark: |   | `VecAccountId` members <br/> |
|Change key |    | :heavy_check_mark: |   | `AccountId` new_ <br/> |
|Set prime |    | :heavy_check_mark: |   | `AccountId` who <br/> |
|Clear prime |    | :heavy_check_mark: |   |  |

## Democracy

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Propose |    | :heavy_check_mark: |   | `Hash` proposal_hash <br/>`Compactu128` amount <br/> |
|Second |    | :heavy_check_mark: |   | `Compactu32` proposal <br/>`Compactu32` seconds_upper_bound <br/> |
|Vote |    |   |   | `Compactu32` ref_index <br/>`AccountVoteBalanceOf` vote <br/> |
|Emergency cancel |    | :heavy_check_mark: |   | `ReferendumIndex` ref_index <br/> |
|External propose |    | :heavy_check_mark: |   | `Hash` proposal_hash <br/> |
|External propose majority |    | :heavy_check_mark: |   | `Hash` proposal_hash <br/> |
|External propose default |    | :heavy_check_mark: |   | `Hash` proposal_hash <br/> |
|Fast track |    | :heavy_check_mark: |   | `Hash` proposal_hash <br/>`BlockNumber` voting_period <br/>`BlockNumber` delay <br/> |
|Veto external |    | :heavy_check_mark: |   | `Hash` proposal_hash <br/> |
|Cancel referendum |    | :heavy_check_mark: |   | `Compactu32` ref_index <br/> |
|Cancel queued |    |   |   | `ReferendumIndex` which <br/> |
|Delegate |    | :heavy_check_mark: |   | `AccountId` to <br/>`Conviction` conviction <br/>`Balance` balance <br/> |
|Undelegate |    | :heavy_check_mark: |   |  |
|Clear public proposals |    | :heavy_check_mark: |   |  |
|Note preimage |    | :heavy_check_mark: |   | `Bytes` encoded_proposal <br/> |
|Note preimage operational |    | :heavy_check_mark: |   | `Bytes` encoded_proposal <br/> |
|Note imminent preimage |    | :heavy_check_mark: |   | `Bytes` encoded_proposal <br/> |
|Note imminent preimage operational |    | :heavy_check_mark: |   | `Bytes` encoded_proposal <br/> |
|Reap preimage |    | :heavy_check_mark: |   | `Hash` proposal_hash <br/>`Compactu32` proposal_len_upper_bound <br/> |
|Unlock |    | :heavy_check_mark: |   | `AccountId` target <br/> |
|Remove vote |    |   |   | `ReferendumIndex` index <br/> |
|Remove other vote |    |   |   | `AccountId` target <br/>`ReferendumIndex` index <br/> |
|Enact proposal |    |   |   | `Hash` proposal_hash <br/>`ReferendumIndex` index <br/> |
|Blacklist |    |   |   | `Hash` proposal_hash <br/>`OptionReferendumIndex` maybe_ref_index <br/> |
|Cancel proposal |    | :heavy_check_mark: |   | `Compactu32` prop_index <br/> |

## AcalaOracle

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Feed values |    |   |   | `VecTupleOracleKeyOracleValue` values <br/> |

## OperatorMembershipAcala

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Add member |    | :heavy_check_mark: |   | `AccountId` who <br/> |
|Remove member |    | :heavy_check_mark: |   | `AccountId` who <br/> |
|Swap member |    | :heavy_check_mark: |   | `AccountId` remove <br/>`AccountId` add <br/> |
|Reset members |    | :heavy_check_mark: |   | `VecAccountId` members <br/> |
|Change key |    | :heavy_check_mark: |   | `AccountId` new_ <br/> |
|Set prime |    | :heavy_check_mark: |   | `AccountId` who <br/> |
|Clear prime |    | :heavy_check_mark: |   |  |

## Auction

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Bid |    |   |   | `AuctionId` id <br/>`Compactu128` amount <br/> |

## Rewards

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|

## Prices

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Lock price |    | :heavy_check_mark: |   | `CurrencyId` currency_id <br/> |
|Unlock price |    | :heavy_check_mark: |   | `CurrencyId` currency_id <br/> |

## Dex

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Swap with exact supply |    | :heavy_check_mark: |   | `VecCurrencyId` path <br/>`Compactu128` supply_amount <br/>`Compactu128` min_target_amount <br/> |
|Swap with exact target |    | :heavy_check_mark: |   | `VecCurrencyId` path <br/>`Compactu128` target_amount <br/>`Compactu128` max_supply_amount <br/> |
|Add liquidity |    | :heavy_check_mark: |   | `CurrencyId` currency_id_a <br/>`CurrencyId` currency_id_b <br/>`Compactu128` max_amount_a <br/>`Compactu128` max_amount_b <br/>`Compactu128` min_share_increment <br/>`bool` stake_increment_share <br/> |
|Add provision |    | :heavy_check_mark: |   | `CurrencyId` currency_id_a <br/>`CurrencyId` currency_id_b <br/>`Compactu128` amount_a <br/>`Compactu128` amount_b <br/> |
|Claim dex share |    | :heavy_check_mark: |   | `AccountId` owner <br/>`CurrencyId` currency_id_a <br/>`CurrencyId` currency_id_b <br/> |
|Remove liquidity |    | :heavy_check_mark: |   | `CurrencyId` currency_id_a <br/>`CurrencyId` currency_id_b <br/>`Compactu128` remove_share <br/>`Compactu128` min_withdrawn_a <br/>`Compactu128` min_withdrawn_b <br/>`bool` by_unstake <br/> |
|List provisioning |    | :heavy_check_mark: |   | `CurrencyId` currency_id_a <br/>`CurrencyId` currency_id_b <br/>`Compactu128` min_contribution_a <br/>`Compactu128` min_contribution_b <br/>`Compactu128` target_provision_a <br/>`Compactu128` target_provision_b <br/>`Compactu32` not_before <br/> |
|Update provisioning parameters |    | :heavy_check_mark: |   | `CurrencyId` currency_id_a <br/>`CurrencyId` currency_id_b <br/>`Compactu128` min_contribution_a <br/>`Compactu128` min_contribution_b <br/>`Compactu128` target_provision_a <br/>`Compactu128` target_provision_b <br/>`Compactu32` not_before <br/> |
|End provisioning |    | :heavy_check_mark: |   | `CurrencyId` currency_id_a <br/>`CurrencyId` currency_id_b <br/> |
|Enable trading pair |    | :heavy_check_mark: |   | `CurrencyId` currency_id_a <br/>`CurrencyId` currency_id_b <br/> |
|Disable trading pair |    | :heavy_check_mark: |   | `CurrencyId` currency_id_a <br/>`CurrencyId` currency_id_b <br/> |
|Refund provision |    | :heavy_check_mark: |   | `AccountId` owner <br/>`CurrencyId` currency_id_a <br/>`CurrencyId` currency_id_b <br/> |
|Abort provisioning |    | :heavy_check_mark: |   | `CurrencyId` currency_id_a <br/>`CurrencyId` currency_id_b <br/> |

## DexOracle

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Enable average price |    | :heavy_check_mark: |   | `CurrencyId` currency_id_a <br/>`CurrencyId` currency_id_b <br/>`Moment` interval <br/> |
|Disable average price |    | :heavy_check_mark: |   | `CurrencyId` currency_id_a <br/>`CurrencyId` currency_id_b <br/> |
|Update average price interval |    | :heavy_check_mark: |   | `CurrencyId` currency_id_a <br/>`CurrencyId` currency_id_b <br/>`Moment` new_interval <br/> |

## AuctionManager

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Cancel |    |   |   | `AuctionId` id <br/> |

## Loans

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|

## Honzon

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Adjust loan |    | :heavy_check_mark: |   | `CurrencyId` currency_id <br/>`Amount` collateral_adjustment <br/>`Amount` debit_adjustment <br/> |
|Close loan has debit by dex |    | :heavy_check_mark: |   | `CurrencyId` currency_id <br/>`Compactu128` max_collateral_amount <br/> |
|Transfer loan from |    | :heavy_check_mark: |   | `CurrencyId` currency_id <br/>`LookupasStaticLookupSource` from <br/> |
|Authorize |    | :heavy_check_mark: |   | `CurrencyId` currency_id <br/>`LookupasStaticLookupSource` to <br/> |
|Unauthorize |    | :heavy_check_mark: |   | `CurrencyId` currency_id <br/>`LookupasStaticLookupSource` to <br/> |
|Unauthorize all |    | :heavy_check_mark: |   |  |
|Expand position collateral |    | :heavy_check_mark: |   | `CurrencyId` currency_id <br/>`Balance` increase_debit_value <br/>`Balance` min_increase_collateral <br/> |
|Shrink position debit |    | :heavy_check_mark: |   | `CurrencyId` currency_id <br/>`Balance` decrease_collateral <br/>`Balance` min_decrease_debit_value <br/> |

## CdpTreasury

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Extract surplus to treasury |    | :heavy_check_mark: |   | `Compactu128` amount <br/> |
|Auction collateral |    | :heavy_check_mark: |   | `CurrencyId` currency_id <br/>`Compactu128` amount <br/>`Compactu128` target <br/>`bool` splited <br/> |
|Exchange collateral to stable |    | :heavy_check_mark: |   | `CurrencyId` currency_id <br/>`SwapLimitBalance` swap_limit <br/> |
|Set expected collateral auction size |    | :heavy_check_mark: |   | `CurrencyId` currency_id <br/>`Compactu128` size <br/> |

## CdpEngine

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Liquidate |    |   |   | `CurrencyId` currency_id <br/>`LookupasStaticLookupSource` who <br/> |
|Settle |    |   |   | `CurrencyId` currency_id <br/>`LookupasStaticLookupSource` who <br/> |
|Set global params |    |   |   | `Rate` global_interest_rate_per_sec <br/> |
|Set collateral params |    |   |   | `CurrencyId` currency_id <br/>`ChangeOptionRate` interest_rate_per_sec <br/>`ChangeOptionRatio` liquidation_ratio <br/>`ChangeOptionRate` liquidation_penalty <br/>`ChangeOptionRatio` required_collateral_ratio <br/>`ChangeBalance` maximum_total_debit_value <br/> |

## EmergencyShutdown

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Emergency shutdown |    | :heavy_check_mark: |   |  |
|Open collateral refund |    | :heavy_check_mark: |   |  |
|Refund collaterals |    | :heavy_check_mark: |   | `Compactu128` amount <br/> |

## Homa

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Mint |    | :heavy_check_mark: |   | `Compactu128` amount <br/> |
|Request redeem |    | :heavy_check_mark: |   | `Compactu128` amount <br/>`bool` allow_fast_match <br/> |
|Fast match redeems |    | :heavy_check_mark: |   | `VecAccountId` redeemer_list <br/> |
|Claim redemption |    | :heavy_check_mark: |   | `AccountId` redeemer <br/> |
|Update homa params |    |   |   | `OptionBalance` soft_bonded_cap_per_sub_account <br/>`OptionRate` estimated_reward_rate_per_era <br/>`OptionRate` commission_rate <br/>`OptionRate` fast_match_fee_rate <br/> |
|Update bump era params |    |   |   | `OptionBlockNumber` last_era_bumped_block <br/>`OptionBlockNumber` frequency <br/> |
|Reset ledgers |    |   |   | `VecTupleu16OptionBalanceOptionVecUnlockChunk` updates <br/> |
|Reset current era |    | :heavy_check_mark: |   | `EraIndex` era_index <br/> |
|Force bump current era |    | :heavy_check_mark: |   | `EraIndex` bump_amount <br/> |
|Fast match redeems completely |    | :heavy_check_mark: |   | `VecAccountId` redeemer_list <br/> |

## XcmInterface

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Update xcm dest weight and fee |    |   |   | `VecTupleXcmInterfaceOperationOptionWeightOptionBalance` updates <br/> |

## Incentives

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Deposit dex share |    | :heavy_check_mark: |   | `CurrencyId` lp_currency_id <br/>`Compactu128` amount <br/> |
|Withdraw dex share |    | :heavy_check_mark: |   | `CurrencyId` lp_currency_id <br/>`Compactu128` amount <br/> |
|Claim rewards |    |   |   | `PoolId` pool_id <br/> |
|Update incentive rewards |    |   |   | `VecTuplePoolIdVecTupleCurrencyIdBalance` updates <br/> |
|Update dex saving rewards |    |   |   | `VecTuplePoolIdRate` updates <br/> |
|Update claim reward deduction rates |    |   |   | `VecTuplePoolIdRate` updates <br/> |

## NFT

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Create class |    |   |   | `CID` metadata <br/>`Properties` properties <br/>`Attributes` attributes <br/> |
|Mint |    |   |   | `LookupasStaticLookupSource` to <br/>`ClassIdOfT` class_id <br/>`CID` metadata <br/>`Attributes` attributes <br/>`Compactu32` quantity <br/> |
|Transfer |    |   |   | `LookupasStaticLookupSource` to <br/>`ClassIdOfTTokenIdOfT` token <br/> |
|Burn |    |   |   | `ClassIdOfTTokenIdOfT` token <br/> |
|Burn with remark |    |   |   | `ClassIdOfTTokenIdOfT` token <br/>`Vecu8` remark <br/> |
|Destroy class |    |   |   | `ClassIdOfT` class_id <br/>`LookupasStaticLookupSource` dest <br/> |
|Update class properties |    |   |   | `ClassIdOfT` class_id <br/>`Properties` properties <br/> |

## AssetRegistry

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Register foreign asset |    |   |   | `BoxVersionedMultiLocation` location <br/>`BoxAssetMetadataBalanceOfT` metadata <br/> |
|Update foreign asset |    |   |   | `ForeignAssetId` foreign_asset_id <br/>`BoxVersionedMultiLocation` location <br/>`BoxAssetMetadataBalanceOfT` metadata <br/> |
|Register stable asset |    |   |   | `BoxAssetMetadataBalanceOfT` metadata <br/> |
|Update stable asset |    |   |   | `StableAssetPoolId` stable_asset_id <br/>`BoxAssetMetadataBalanceOfT` metadata <br/> |
|Register erc20 asset |    |   |   | `EvmAddress` contract <br/>`Balance` minimal_balance <br/> |
|Update erc20 asset |    |   |   | `EvmAddress` contract <br/>`BoxAssetMetadataBalanceOfT` metadata <br/> |

## EVM

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Eth call |    |   |   | `TransactionAction` action <br/>`Vecu8` input <br/>`Compactu128` amount <br/>`Compactu64` gas_limit <br/>`Compactu32` storage_limit <br/>`VecAccessListItem` access_list <br/>`Compactu32` valid_until <br/> |
|Call |    |   |   | `EvmAddress` target <br/>`Vecu8` input <br/>`Compactu128` amount <br/>`Compactu64` gas_limit <br/>`Compactu32` storage_limit <br/>`VecAccessListItem` access_list <br/> |
|Scheduled call |    |   |   | `EvmAddress` from <br/>`EvmAddress` target <br/>`Vecu8` input <br/>`Compactu128` amount <br/>`Compactu64` gas_limit <br/>`Compactu32` storage_limit <br/>`VecAccessListItem` access_list <br/> |
|Create |    |   |   | `Vecu8` input <br/>`Compactu128` amount <br/>`Compactu64` gas_limit <br/>`Compactu32` storage_limit <br/>`VecAccessListItem` access_list <br/> |
|Create2 |    |   |   | `Vecu8` input <br/>`H256` salt <br/>`Compactu128` amount <br/>`Compactu64` gas_limit <br/>`Compactu32` storage_limit <br/>`VecAccessListItem` access_list <br/> |
|Create nft contract |    |   |   | `Vecu8` input <br/>`Compactu128` amount <br/>`Compactu64` gas_limit <br/>`Compactu32` storage_limit <br/>`VecAccessListItem` access_list <br/> |
|Create predeploy contract |    |   |   | `EvmAddress` target <br/>`Vecu8` input <br/>`Compactu128` amount <br/>`Compactu64` gas_limit <br/>`Compactu32` storage_limit <br/>`VecAccessListItem` access_list <br/> |
|Transfer maintainer |    |   |   | `EvmAddress` contract <br/>`EvmAddress` new_maintainer <br/> |
|Publish contract |    |   |   | `EvmAddress` contract <br/> |
|Publish free |    |   |   | `EvmAddress` contract <br/> |
|Enable contract development |    | :heavy_check_mark: |   |  |
|Disable contract development |    | :heavy_check_mark: |   |  |
|Set code |    |   |   | `EvmAddress` contract <br/>`Vecu8` code <br/> |
|Selfdestruct |    |   |   | `EvmAddress` contract <br/> |

## EvmAccounts

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Claim account |    |   |   | `EvmAddress` eth_address <br/>`Eip712Signature` eth_signature <br/> |
|Claim default account |    |   |   |  |

## StableAsset

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Create pool |    |   |   | `AssetId` pool_asset <br/>`VecAssetId` assets <br/>`VecAtLeast64BitUnsigned` precisions <br/>`AtLeast64BitUnsigned` mint_fee <br/>`AtLeast64BitUnsigned` swap_fee <br/>`AtLeast64BitUnsigned` redeem_fee <br/>`AtLeast64BitUnsigned` initial_a <br/>`AccountId` fee_recipient <br/>`AccountId` yield_recipient <br/>`AtLeast64BitUnsigned` precision <br/> |
|Mint |    |   |   | `StableAssetPoolId` pool_id <br/>`VecBalance` amounts <br/>`Balance` min_mint_amount <br/> |
|Swap |    |   |   | `StableAssetPoolId` pool_id <br/>`PoolTokenIndex` i <br/>`PoolTokenIndex` j <br/>`Balance` dx <br/>`Balance` min_dy <br/>`u32` asset_length <br/> |
|Redeem proportion |    |   |   | `StableAssetPoolId` pool_id <br/>`Balance` amount <br/>`VecBalance` min_redeem_amounts <br/> |
|Redeem single |    |   |   | `StableAssetPoolId` pool_id <br/>`Balance` amount <br/>`PoolTokenIndex` i <br/>`Balance` min_redeem_amount <br/>`u32` asset_length <br/> |
|Redeem multi |    |   |   | `StableAssetPoolId` pool_id <br/>`VecBalance` amounts <br/>`Balance` max_redeem_amount <br/> |
|Modify a |    |   |   | `StableAssetPoolId` pool_id <br/>`AtLeast64BitUnsigned` a <br/>`BlockNumber` future_a_block <br/> |

## ParachainSystem

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Set validation data |    |   |   | `ParachainInherentData` data <br/> |
|Sudo send upward message |    |   |   | `UpwardMessage` message <br/> |
|Authorize upgrade |    | :heavy_check_mark: |   | `Hash` code_hash <br/> |
|Enact authorized upgrade |    | :heavy_check_mark: |   | `Vecu8` code <br/> |

## Sudo

| Name        | Light | XL | Nesting | Arguments |
| :---------- |:------------:|:--------:|:--------:|:--------|
|Sudo |    | :heavy_check_mark: |   | `Call` call <br/> |
|Sudo unchecked weight |    | :heavy_check_mark: |   | `Call` call <br/>`Weight` weight <br/> |
|Set key |    | :heavy_check_mark: |   | `LookupasStaticLookupSource` new_ <br/> |
|Sudo as |    | :heavy_check_mark: |   | `LookupasStaticLookupSource` who <br/>`Call` call <br/> |

