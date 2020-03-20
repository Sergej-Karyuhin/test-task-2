const DEFAULT_ITEMS = ['Банан', 'Ананас', 'Мандарин'];

function successCallback() {
  return DEFAULT_ITEMS;
}

function failureCallback() {
  console.log('=(')
}

function doSomething() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("Успех")
      } else {
        reject("Ошибка")
      }
    }, 2000);
  })
}

export { successCallback, failureCallback, doSomething}
