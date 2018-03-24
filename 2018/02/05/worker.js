self.addEventListener('message', (num) => {
  let num = 1000
  let i = 0
  while(i < num) {
    i++
    if (i === num) {
      self.postMessage(num)
    }
  }
})