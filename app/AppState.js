import { Racer } from "./Models/RacerModel.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  racers = [
    new Racer({
      name: 'tom',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.qT4YZ0Pw5FTcX4vpDqXU8wHaIW%26pid%3DApi&f=1',
      number: 1,
      distance: 0,
    }),
    new Racer({
      name: 'jerry',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8H84922DcSx9EQr0FC6W0wHaHa%26pid%3DApi&f=1',
      number: 1,
      distance: 0
    })
    new Racer({
      name: 'Meeee',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.0en8Q0yCUed7m-w_Lo2_AwHaHa%26pid%3DApi&f=1',
      number: 3,
      distance: 1
    })
    new Racer({
      name: 'DarthVader',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AQSuFI-dsntTDkKmDZbymgHaIU%26pid%3DApi&f=1',
      number: 4,
      distance: 0
    })
  ]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
