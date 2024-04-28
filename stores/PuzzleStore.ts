export const usePuzzleStore = defineStore("counter", () => {
  /* DATA */
  let array3: Ref<(number | null)[][]> = ref([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, null],
  ]);
  let array4: Ref<(number | null)[][]> = ref([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, null],
  ]);
  let arraySize = ref(3);
  let timeDif = ref(0);
  let timeStart = 0;
  let timerId: ReturnType<typeof setInterval> | undefined;
  let congratsPhrase = { show: false, disordered: false };

  /* METHODS */

  function clickData(yD: number, xD: number, arr: (number | null)[][]): void {
    let yNull: number, xNull: number;
    [yNull, xNull] = findNull(arr);

    if (xD == xNull) {
      if (yD - yNull == 1 || yD - yNull == -1) {
        arr[yNull][xNull] = arr[yD][xD];
        arr[yD][xD] = null;
        checkCompleteness(arr);
      }
    } else if (yD == yNull) {
      if (xD - xNull == 1 || xD - xNull == -1) {
        arr[yNull][xNull] = arr[yD][xD];
        arr[yD][xD] = null;
        checkCompleteness(arr);
      }
    }
  }

  function findNull(arr: (number | null)[][]): [number, number] {
    for (let y in arr) {
      let temp = arr[y].indexOf(null);
      if (temp != -1) return [+y, temp];
    }
    return [0, 0];
  }

  function checkCompleteness(arr: (number | null)[][]): void {
    let counter = 1;
    for (let y in arr) {
      for (let x in arr[y]) {
        if (arr[y][x] != counter) return;

        if (counter == arraySize.value ** 2 - 1) break;
        counter++;
      }
    }
    congratsPhrase.show = congratsPhrase.disordered ? true : false;
    if (congratsPhrase.show) clearInterval(timerId);
  }

  function disorderArray(): void {
    let set: Set<number | null> = new Set();
    let temp: number;
    
    clearInterval(timerId);

    while (set.size < arraySize.value ** 2) {
      temp = Math.ceil(Math.random() * arraySize.value ** 2);
      if (temp == arraySize.value ** 2) set.add(null);
      else set.add(temp);
    }

    let setValues: IterableIterator<number | null> = set.values();
    let arr: Ref<(number | null)[][]> = arraySize.value == 3 ? array3 : array4;
    for (let index in arr.value) {
      for (let index2 in arr.value[+index])
        arr.value[+index][+index2] = setValues.next().value;
    }

    congratsPhrase.show = false;
    congratsPhrase.disordered = true;
    timeStart = Date.now();
    timerId = setInterval(() => {
      timeDif.value = Date.now() - timeStart;
    }, 100);
  }

  function stopTimer() {
    clearInterval(timerId);
    timeDif.value = 0;
    congratsPhrase.disordered = false;
  }

  function $reset() {
    array3.value = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, null],
    ];
    array4.value = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, null],
    ];
    stopTimer();
  }

  const count = ref(0);
  const name = ref("lio");
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return {
    array3,//
    array4,//
    arraySize,//
    timeDif,//
    timeStart,
    timerId,
    congratsPhrase,//
    clickData,//
    disorderArray,//
    stopTimer,//
    $reset,//
  };
});
