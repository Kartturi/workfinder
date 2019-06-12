<template>
  <ul v-if="jobs">
    <li
      v-for="job in jobs"
      v-bind:key="job.id"
    >{{job.title}} {{job.location}} {{job.desc}} {{job.link}}</li>
  </ul>
</template>


<script>
export default {
  props: ["jobs"]
};
</script>
