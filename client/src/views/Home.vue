<template>
  <div class="home">
    <back-to-top visibleoffset="450" class="scroll-to-top">
      <button type="button" class="btn-to-top">
        <font-awesome-icon icon="arrow-up"/>
      </button>
    </back-to-top>
    <ownbutton v-on:change-page="changePage"></ownbutton>
    <div v-if="!showOwnlist">
      <h1>Workfinder</h1>
      <h3>Löydä unelmien työsi</h3>

      <searchBar @clicked="getJobs"></searchBar>
      <loadingspinner v-if="isLoading"></loadingspinner>
      <p
        v-if="jobs"
      >Duunitori:{{resLength.duuni}} Oikotie:{{resLength.oikotie}} Monsteri:{{resLength.monster}}</p>

      <div class="joblist-container">
        <joblist v-bind:jobs="jobs" v-bind:ownlist="showOwnlist"/>
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
import loadingSpinner from "../components/loadingSpinner";

// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      backUpJobs: null,
      jobs: null,
      test: "",
      errors: [],
      showOwnlist: false,
      resLength: {},
      isLoading: false
    };
  },
  components: {
    sorting: Sorting,
    searchBar: SearchBar,
    joblist: JobList,
    ownbutton: OwnButton,
    ownlist: OwnList,
    loadingspinner: loadingSpinner
  },
  methods: {
    changePage(info) {
      this.showOwnlist = info;
    },
    getJobs(params) {
      this.isLoading = true;
      let that = this;
      let jobReqUrl = `/job/${params.job}/${
        !params.location ? "empty" : params.location
      }`;

      axios
        .get(jobReqUrl)
        .then(response => {
          //filter empty arrays out
          this.isLoading = false;
          let backupData = response.data;

          this.resLength["duuni"] = backupData.filter(
            job => job.host === "duuni"
          ).length;

          this.resLength["oikotie"] = backupData.filter(
            job => job.host === "oikotie"
          ).length;

          this.resLength["monster"] = backupData.filter(
            job => job.host === "monsteri"
          ).length;

          let newArr = backupData.map(item => item);
          shuffleArray(newArr);
          this.backUpJobs = backupData;
          return (this.jobs = newArr);
        })
        .catch(err => console.log(err));
    },
    sortList(info) {
      console.log("click");
      if (info.duuni && info.oikotie && info.monsteri && info.random) {
        let sortedJobList = this.backUpJobs.map(item => item);
        shuffleArray(sortedJobList);
        return (this.jobs = sortedJobList);
      }
      if (!info.duuni && !info.oikotie && !info.monsteri && !info.random) {
        return (this.jobs = this.backUpJobs.map(item => item));
      }
      if (!info.duuni && !info.oikotie && !info.monsteri && info.random) {
        let sortedJobList = this.backUpJobs.map(item => item);
        shuffleArray(sortedJobList);
        return (this.jobs = sortedJobList);
      }
      let hosts = [];
      if (info.duuni) {
        hosts.push("duuni");
      }
      if (info.oikotie) {
        hosts.push("oikotie");
      }
      if (info.monsteri) {
        hosts.push("monsteri");
      }
      console.log(hosts, "from info");
      console.log(this.backUpJobs.filter(job => hosts.includes(job.host)));
      return (this.jobs = this.backUpJobs.filter(job =>
        hosts.includes(job.host)
      ));
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

.btn-to-top {
  font-size: 30px;
  background: purple;
  color: white;
  border-radius: 50%;
  padding: 20px;
  outline: none;
  text-decoration: none;
  border: none;
  cursor: pointer;
}
</style>
