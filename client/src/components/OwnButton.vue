<template>
  <button @click="changePage" class="own-button">{{showOwnList ? "Search" : "My list"}}</button>
</template>


<script>
export default {
  data() {
    return {
      showOwnList: false
    };
  },
  methods: {
    changePage() {
      this.showOwnList = !this.showOwnList;

      this.$emit("change-page", this.showOwnList);
    }
  }
};
</script>


<style>
.own-button {
  position: absolute;
  right: 50px;
}
</style>
