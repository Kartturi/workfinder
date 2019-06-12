<template>
  <div>
    <form>
      <input v-model="form.job" placeholder="Työ" type="text">
      <input v-model="form.location" placeholder="Sijainti">
      <button v-on:click="getValues">Searchs</button>
    </form>
    <p>{{error}}</p>
  </div>
</template>



<script>
export default {
  data() {
    return {
      form: {
        job: "",
        location: ""
      },
      error: null
    };
  },
  methods: {
    getValues(e) {
      e.preventDefault();
      if (!this.form.job) {
        return (this.error = "You need to specify the job my man");
      }
      this.error = null;
      this.$emit("clicked", {
        job: this.form.job,
        location: this.form.location
      });
    }
  }
};
</script>
