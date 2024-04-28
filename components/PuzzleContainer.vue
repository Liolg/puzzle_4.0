<template>
  <div>
    <div id="tableTimerButtons">
      <div id="divTable">
        <PuzzleTable v-if="store.arraySize == 3" :arr="store.array3" />

        <PuzzleTable v-else :arr="store.array4" />
      </div>
      <div>
        <p id="timer" class="nowrap">
          &nbsp;
          {{ Math.floor((store.timeDif / 600000) % 6) }}
          {{ Math.floor((store.timeDif / 60000) % 10) }}
          &nbsp;:&nbsp;
          {{ Math.floor((store.timeDif / 10000) % 6) }}
          {{ Math.floor((store.timeDif / 1000) % 10) }}
          &nbsp;:&nbsp;
          {{ Math.floor((store.timeDif / 100) % 10) }}
        </p>
        <button @click="store.disorderArray">Start</button>
        &nbsp;&nbsp;
        <button @click="store.stopTimer">Stop</button>
      </div>
    </div>
    <div id="gg">
      <p v-if="store.congratsPhrase.show">You won, congrats 🎉</p>
    </div>

    <p style="display: inline">Change the zise of the puzzle:</p>
    <input
      type="radio"
      id="3x3"
      value="3"
      v-model="store.arraySize"
      @click="store.$reset"
    />
    <label for="3x3">3x3</label>
    <input
      type="radio"
      id="4x4"
      value="4"
      v-model="store.arraySize"
      @click="store.$reset"
    />
    <label for="4x4">4x4</label>
  </div>
</template>

<script setup lang="ts">
const store = usePuzzleStore();
</script>

<style scoped></style>
