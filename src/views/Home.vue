<template>
  <div>
    <EmployeesList />
  </div>
</template>

<script>
import EmployeesList from "../components/EmployeesList.vue";

export default {
  name: "Home",

  components: {
    EmployeesList,
  },
};
</script>
