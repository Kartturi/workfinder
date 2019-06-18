<template>
  <button @click="changePage" class="own-button">{{showOwnList ? "Etsi" : "Oma lista"}}</button>
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
  font-size: 24px;
  background: white;
  border: 1px solid purple;
  padding: 20px;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
}
</style>
