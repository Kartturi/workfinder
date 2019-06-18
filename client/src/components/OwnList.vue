<template>
  <div class="home">
    <h1>Workfinder</h1>

    <h3>Sinun listasi</h3>

    <div class="joblist-container-own">
      <joblist v-bind="{jobs, ownlist:showOwnList, deleteJob}"/>
    </div>
  </div>
</template>

<script>
import JobList from "../components/JobList";
import Sorting from "../components/Sorting";
import shuffleArray from "../utils/shuffleArr";

// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      backUpJobs: null,
      jobs: null,
      test: "",
      errors: [],
      showOwnList: true
    };
  },
  components: {
    joblist: JobList,
    sorting: Sorting
  },
  methods: {
    deleteJob(joblist) {
      this.jobs = joblist;
    }
  },
  created() {
    let jobsArr = JSON.parse(localStorage.getItem("jobs"));
    if (!jobsArr) return;

    this.jobs = jobsArr;
  }
};
</script>


<style>
.joblist-container-own {
  display: flex;
  justify-content: center;
  flex-direction: row;
  justify-content: center;
}
.joblist-container-own ul {
  width: 70%;
}
.joblist-container-own li {
  margin: 0 auto;
  margin-bottom: 10px;
}
</style>

