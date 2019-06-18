<template>
  <div>
    <form>
      <span class="deleteicon">
        <input
          v-model="form.job"
          placeholder="Työ"
          type="text"
          value="siivooja"
          class="search-input"
        >
        <span v-if="form.job" v-on:click="clearValueJob" class="deleteicon-span">
          <font-awesome-icon icon="times"></font-awesome-icon>
        </span>
      </span>
      <span class="deleteicon">
        <input v-model="form.location" placeholder="Kaupunki" class="search-input">
        <span v-if="form.location" v-on:click="clearLocationJob" class="deleteicon-span">
          <font-awesome-icon icon="times"></font-awesome-icon>
        </span>
      </span>
      <button v-on:click="getValues" class="find-btn">Etsi</button>
    </form>
    <p>{{error}}</p>
  </div>
</template>

<style>
.find-btn {
  font-size: 28px;
  border: none;
  padding: 20px;
  border-radius: 50%;
  background-color: purple;
  color: white;
  cursor: pointer;
  outline: none;
}

.find-btn:active {
  background-color: rgb(197, 31, 197);
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  transition-duration: 0.1s;
}
.deleteicon {
  position: relative;
}

.deleteicon-span {
  position: absolute;
  display: block;
  bottom: 6px;
  right: 30px;
  width: 16px;
  height: 16px;
  font-size: 20px;
  cursor: pointer;
}
.search-input {
  border-radius: 50px;
  margin-right: 15px;
  padding: 20px;
  font-size: 24px;
  outline: none;
  border: 1px solid purple;
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        job: "siivooja ",
        location: "vaasa"
      },
      error: null
    };
  },
  methods: {
    clearValueJob() {
      this.form.job = "";
    },
    clearLocationJob() {
      this.form.location = "";
    },
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



