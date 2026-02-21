// ) retry(fn, retries) (basic retry)

// fn is a function that returns a Promise (may reject).
// retry(fn, 3) should try max 3 times. If still failing, reject with last error.

async function retry(fn, retries) {
    let resolved
  for (var i = 0; i < retries; i++) {
     resolved = await fn();
  }

  return resolved
}
