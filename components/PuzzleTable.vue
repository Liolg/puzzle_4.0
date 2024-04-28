<template>
  <div>
    <table>
      <PuzzleRow
        v-for="(item, index) in arr"
        :key="index"
        :row="index"
        :arr="arr"
      />
    </table>
  </div>
</template>

<script setup lang="ts">
defineProps({
  arr: { type: Array<Array<number | null>>, required: true },
});
</script>

<style scoped></style>
