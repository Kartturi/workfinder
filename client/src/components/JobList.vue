<template>
  <ul v-if="jobs" class="jobs-ul">
    <li v-for="(job,i) in jobs" v-bind:key="`${i}-${job.id}`">
      <!-- <jobListItem v-bind:job="job"></jobListItem> -->

      <joblistitem v-bind="{job, ownlist, deleteJob}"></joblistitem>
    </li>
  </ul>
</template>


<script>
import JobListItem from "./JobListItem";
export default {
  props: ["jobs", "ownlist", "deleteJob"],
  components: {
    joblistitem: JobListItem
  },
  created() {}
};
</script>


<style>
.jobs-ul {
  list-style-type: none;
  width: 60%;
}
.jobs-ul li {
  width: 70%;
  border: 1px solid green;
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>