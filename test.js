function test() {
  console.log("test");
}

// function debounce(callback, wait) {
//   let timeOut;

//   return function () {
//     if (timeOut) {
//       clearTimeout(timeOut);
//     }

//     timeOut = setTimeout(callback, wait);
//   };
// }

// const debounceLog = debounce(test, 1000);

// debounceLog();
// debounceLog();
// debounceLog();
// debounceLog();

function throttle(callback, wait) {
  let isThrottling = false;

  return function () {
    if (isThrottling) return;

    isThrottling = true;
    setTimeout(() => {
      callback();
      isThrottling = false;
    }, wait);
  };
}

const throttleLog = throttle(test, 500);
throttleLog();
throttleLog();
throttleLog();

setTimeout(throttleLog, 400);
setTimeout(throttleLog, 300);
setTimeout(throttleLog, 200);
setTimeout(throttleLog, 100);
setTimeout(throttleLog, 600);
