<template>
  <td @click="store.clickData(row, index, arr)">{{ arr[row][index] }}</td>
</template>

<script setup lang="ts">
defineProps({
  arr: { type: Array<Array<number | null>>, required: true },
  row: { type: Number, required: true },
  index: { type: Number, required: true },
});

const store = usePuzzleStore();
</script>

<style scoped></style>
