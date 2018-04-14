let arr = [10, 30, 40, 50, 80, 70, 90]

/**
 * 
 * @param {Array} a 
 * @param {Number} low 
 * @param {Number} high 
 */
const quickSort = (a, low, high) => {
  if (low < high) {
    const pi = partition(a, low, high)
    quickSort(arr, low, pi-1)
    quickSort(arr, pi+1, high)
  }
}

/**
 * 
 * @param {Array} a 
 * @param {Number} low 
 * @param {Number} high 
 */
const partition = (a, low, high) => {
  const pivot = a[high] // This is our pivot
  const i = low - 1

  for(let j = low; j <= high-1; j++) {
    if (arr[j] <= pivot) {
      i++
      swap(arr[i], arr[j])
    }
  }

  swap(arr[i + 1], arr[high])
  return i+1
}