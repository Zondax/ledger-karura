/** ******************************************************************************
 *  (c) 2018 - 2022 Zondax GmbH
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 ******************************************************************************* */

import Zemu, { DEFAULT_START_OPTIONS } from '@zondax/zemu'
import { newKaruraApp } from '@zondax/ledger-substrate'
import { APP_SEED, models } from './common'

const defaultOptions = {
  ...DEFAULT_START_OPTIONS,
  logging: true,
  custom: `-s "${APP_SEED}"`,
  X11: false,
}

jest.setTimeout(60000)

beforeAll(async () => {
  await Zemu.checkAndPullImage()
})

async function activateCrowdloanMode(sim: any, model_prefix: string) {
  // Crowdloan can be activate only when expert mode is enabled
  await sim.clickRight(`snapshots-tmp/${model_prefix}-crowdloans/000.png`)
  await sim.clickRight(`snapshots-tmp/${model_prefix}-crowdloans/001.png`)
  await sim.clickBoth(`snapshots-tmp/${model_prefix}-crowdloans/002.png`, false)
  await sim.clickBoth(`snapshots-tmp/${model_prefix}-crowdloans/003.png`, false)
  await sim.clickLeft(`snapshots-tmp/${model_prefix}-crowdloans/004.png`)
  await sim.clickLeft(`snapshots-tmp/${model_prefix}-crowdloans/005.png`)

  // Activale Expert mode
  await sim.clickRight(`snapshots-tmp/${model_prefix}-crowdloans/006.png`)
  await sim.clickBoth(`snapshots-tmp/${model_prefix}-crowdloans/007.png`)

  //Activate Crowdloan
  await sim.clickRight(`snapshots-tmp/${model_prefix}-crowdloans/008.png`)
  await sim.clickBoth(`snapshots-tmp/${model_prefix}-crowdloans/009.png`)

  // Review warning message
  const reviewSteps = sim.startOptions.model === 'nanos' ? 6 : 5
  for (let i = 0; i < reviewSteps; i += 1) {
    await sim.clickRight(`snapshots-tmp/${model_prefix}-crowdloans/0${10+i}.png`)
  }

  // Accept
  await sim.clickBoth(`snapshots-tmp/${model_prefix}-crowdloans/200.png`)

  await sim.clickRight(`snapshots-tmp/${model_prefix}-crowdloans/201.png`)
  await sim.clickRight(`snapshots-tmp/${model_prefix}-crowdloans/202.png`)
}

describe('Crowdloan', function () {
  test.each(models)('crowdloan menu', async function (m) {
    const sim = new Zemu(m.path)
    try {
      await sim.start({ ...defaultOptions, model: m.name })
      const app = newKaruraApp(sim.getTransport())

      const karura_expected_address = 'sCFFBRb4EXvazWmoBieJWpeqKLQVJpc9BDfLKa2tLfsrxdT'
      const karura_expected_pk = 'ac5752c2c18bcbb882a938df5b8ccee7be8d2f332a1496c841eb695bf6ebb30a'
      const kusama_expected_address = 'u5b9TZVviHYhRDzQtnWbouM4yUPKUTS1d4uUSR68xpNojwD'
      const kusama_expected_pk = 'ffbc10f71d63e0da1b9e7ee2eb4037466551dc32b9d4641aafd73a65970fae42'

      let resp = await app.getAddress(0x80000000, 0x80000000, 0x80000000)

      console.log(resp)
      expect(resp.address).toEqual(karura_expected_address)
      expect(resp.pubKey).toEqual(karura_expected_pk)

      expect(resp.return_code).toEqual(0x9000)
      expect(resp.error_message).toEqual('No errors')

      await activateCrowdloanMode(sim, m.prefix)

      resp = await app.getAddress(0x80000000, 0x80000000, 0x80000000)

      console.log(resp)
      expect(resp.address).toEqual(kusama_expected_address)
      expect(resp.pubKey).toEqual(kusama_expected_pk)

      expect(resp.return_code).toEqual(0x9000)
      expect(resp.error_message).toEqual('No errors')
    } finally {
      await sim.close()
    }
  })
})
