<template>
  <div class="home">
    <h1>Workfinder</h1>
    <h3>Find your dream job</h3>
    <searchBar @clicked="getJobs"></searchBar>
    <joblist v-bind:jobs="jobs"/>
    {{test}}
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
import axios from "axios";
import JobList from "../components/JobList";
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      jobs: null,
      test: "",
      errors: []
    };
  },
  components: {
    searchBar: SearchBar,
    joblist: JobList
  },
  methods: {
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
            return (this.jobs = mergedArr);
          }
          this.jobs = jobArr;
          console.log(this.jobs);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
