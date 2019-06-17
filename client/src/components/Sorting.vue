
<template>
  <div class="list-sorting">
    <div class="list-sorting-item">
      <input v-model="sorting.duuni" @click="sortingClick" data-box="duuni" type="checkbox">
      <span>Duuni</span>
    </div>
    <div class="list-sorting-item">
      <input v-model="sorting.oikotie" @click="sortingClick" data-box="oikotie" type="checkbox">
      <span>Oikotie</span>
    </div>
    <div class="list-sorting-item">
      <input v-model="sorting.random" @click="sortingClick" data-box="random" type="checkbox">
      <span>Random</span>
    </div>
  </div>
</template>







<script>
export default {
  data() {
    return {
      sorting: {
        duuni: false,
        oikotie: false,
        random: true
      }
    };
  },
  methods: {
    sortingClick(e) {
      this.sorting[e.target.dataset.box] = !this.sorting[e.target.dataset.box];
      console.log(
        this.sorting.duuni,
        this.sorting.oikotie,
        this.sorting.random
      );
      this.$emit("sorting-event", this.sorting);
    }
  }
};
</script>

  <style>
.list-sorting {
  width: 20%;
  border: 1px solid green;
}

.list-sorting-item {
  font-size: 24px;
}
</style>
  