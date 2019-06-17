<template>
  <div>
    <div>
      <h3>{{job.title}}</h3>
      <p>{{job.desc}}</p>
      <p>{{job.location}}</p>
    </div>
    <div>
      <a v-bind:href="job.link">
        <font-awesome-icon icon="arrow-right"/>
      </a>
    </div>
    <div>
      <p>
        <font-awesome-icon icon="plus"/>
      </p>
    </div>
  </div>
</template>


<script>
export default {
  props: ["job"]
};
</script>
