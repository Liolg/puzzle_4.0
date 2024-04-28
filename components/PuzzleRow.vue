<template>
  <tr>
    <PuzzleData
      v-for="(item, index) in arr[row]"
      :key="index"
      :row="row"
      :index="index"
      :arr="arr"
    />
  </tr>
</template>

<script setup lang="ts">
defineProps({
  arr: { type: Array<Array<number | null>>, required: true },
  row: { type: Number, required: true },
});
</script>

<style scoped></style>
