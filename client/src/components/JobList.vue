<template>
  <ul v-if="jobs">
    <li v-for="job in jobs" v-bind:key="job.id">
      <!-- <jobListItem v-bind:job="job"></jobListItem> -->

      <joblistitem v-bind:job="job"></joblistitem>
    </li>
  </ul>
</template>


<script>
import JobListItem from "./JobListItem";
export default {
  props: ["jobs"],
  components: {
    joblistitem: JobListItem
  }
};
</script>
