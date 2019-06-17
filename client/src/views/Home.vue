<template>
  <div class="home">
    <ownbutton v-on:change-page="changePage"></ownbutton>
    <div v-if="!showOwnlist">
      <h1>Workfinder</h1>
      <h3>Find your dream job</h3>
      <searchBar @clicked="getJobs"></searchBar>
      <div class="joblist-container">
        <joblist v-bind:jobs="jobs"/>
        <sorting v-if="jobs" v-on:sorting-event="sortList"></sorting>
      </div>
    </div>
    <div v-if="showOwnlist">
      <ownlist></ownlist>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
import axios from "axios";
import JobList from "../components/JobList";
import Sorting from "../components/Sorting";
import shuffleArray from "../utils/shuffleArr";
import OwnButton from "../components/OwnButton";
import OwnList from "../components/OwnList";
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      backUpJobs: null,
      jobs: null,
      test: "",
      errors: [],
      showOwnlist: false
    };
  },
  components: {
    sorting: Sorting,
    searchBar: SearchBar,
    joblist: JobList,
    ownbutton: OwnButton,
    ownlist: OwnList
  },
  methods: {
    changePage(info) {
      console.log();
      this.showOwnlist = info;
    },
    getJobs(params) {
      const jobReqUrl = `http://localhost:5000/job/${params.job}/${
        !params.location ? "empty" : params.location
      }`;
      axios
        .get(jobReqUrl)
        .then(response => {
          //filter empty arrays out
          let filtered = response.data.filter(arr => arr);

          let jobArr = filtered[0];
          if (filtered[1]) {
            let mergedArr = jobArr.concat(filtered[1]);
            console.log(mergedArr);

            this.backUpJobs = mergedArr;

            let newArr = mergedArr.map(item => item);
            shuffleArray(newArr);
            return (this.jobs = newArr);
          }
          this.backUpJobs = jobArr;
          return (this.jobs = jobArr);

          console.log(this.jobs);
        })
        .catch(err => console.log(err));
    },
    sortList(info) {
      console.log(info.duuni, info.oikotie, info.random);
      if (info.duuni && info.oikotie && info.random) {
        console.log("all  happened", this.backUpJobs, "what");
        let sortedJobList = this.backUpJobs.map(item => item);
        shuffleArray(sortedJobList);
        return (this.jobs = sortedJobList);
      }
      if (!info.duuni && !info.oikotie && !info.random) {
        console.log("all nothing happened");
        return (this.jobs = this.backUpJobs.map(item => item));
      }
      if (!info.duuni && !info.oikotie && info.random) {
        let sortedJobList = this.backUpJobs.map(item => item);
        shuffleArray(sortedJobList);
        return (this.jobs = sortedJobList);
      }
      if (info.duuni) {
        let sortedJobList = this.backUpJobs;
        return (this.jobs = sortedJobList.filter(job => job.host === "duuni"));
      }
      if (info.oikotie) {
        let sortedJobList = this.backUpJobs;
        return (this.jobs = sortedJobList.filter(
          job => job.host === "oikotie"
        ));
      }
      let sortedJobList = this.jobs.filter(job => job.host === "oikotie");
      this.jobs = sortedJobList;
    }
  }
};
</script>


<style>
.joblist-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
