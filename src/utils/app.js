export default class App {
  static waitFor = promises => {
    const promisified = promises.map(promise => {
      if (promise instanceof Promise) {
        return promise
      }

      return new Promise(resolve => {
        promise(resolve)
      })
    })

    return Promise.all(promisified)
  }
}
