<template>
  <div class="joblist-items">
    <div class="joblist-item joblist-item-host">
      <h6>{{job.host}}</h6>
    </div>
    <div class="joblist-item joblist-item-info">
      <h3>{{job.title}}</h3>
      <p>{{job.desc}}</p>
      <p>{{job.location}}</p>
    </div>
    <div class="joblist-item joblist-item-link">
      <a v-bind:href="job.link" target="_blank" rel="nofollow">
        <font-awesome-icon icon="arrow-right"/>
      </a>
    </div>
    <div class="joblist-item joblist-item-own">
      <p v-if="!ownlist">
        <font-awesome-icon
          v-bind:class="{active: clicked}"
          v-on:click="handlePlusClick"
          icon="plus"
          class="ownlist-btn"
        />
      </p>
      <p v-if="ownlist">
        <font-awesome-icon
          v-bind:class="{active_minus: clickedMinus}"
          v-on:click="handleMinusClick"
          icon="minus"
          class="ownlist-btn"
        ></font-awesome-icon>
      </p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      clicked: false,
      clickedMinus: false
    };
  },
  props: ["job", "ownlist", "deleteJob"],
  methods: {
    handleMinusClick(e) {
      this.clickedMinus = true;
      let storageJobs = JSON.parse(localStorage.getItem("jobs"));
      let newStorageArr = storageJobs.filter(job => job.id !== this.job.id);
      this.deleteJob(newStorageArr);

      return localStorage.setItem("jobs", JSON.stringify(newStorageArr));
    },
    handlePlusClick(e) {
      if (this.clicked) return;
      this.clicked = true;

      //get localstorage data
      let storageJobs = localStorage.getItem("jobs");
      if (storageJobs) {
        let tempArr = JSON.parse(localStorage.getItem("jobs"));

        tempArr.push(this.job);
        localStorage.setItem("jobs", JSON.stringify(tempArr));
      } else {
        return localStorage.setItem("jobs", JSON.stringify([this.job]));
      }
    }
  },
  created() {}
};
</script>

<style>
.active {
  color: green;
}
.active_minus {
  color: red;
}
.joblist-items {
  display: flex;
  flex-direction: row;
}
.joblist-item-host {
  width: 10%;
  align-self: center;
  height: 100%;
}

.joblist-item-info {
  width: 70%;
}
.joblist-item-link {
  width: 10%;
  align-self: center;
  font-size: 30px;
}
.joblist-item-own {
  width: 10%;
  align-self: center;
  font-size: 30px;
}
.ownlist-btn {
  cursor: pointer;
}
</style>