// 2) timeout(promise, ms) (Promise wrapper)

// Koi bhi promise do, agar ms ke andar settle ho gaya to same result, warna reject "Timeout" se.

// Examples:

// timeout(fetchData(), 2000)

// timeout(Promise.resolve(1), 10) → resolves 1