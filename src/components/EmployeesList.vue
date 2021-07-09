<template>
  <div>
    <h1 style="text-align: center; margin-bottom: 18px">Employees</h1>
    <progressbar v-show="$store.state.isFetchingEmployees" />
    <div class="employees">
      <div v-for="employee in allEmployees" :key="employee.id">
        <Employee :employeeData="employee" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Progressbar from "../components/Progressbar.vue";
import Employee from "../components/Employee.vue";

export default {
  name: "EmployeesList",
  components: {
    Progressbar,
    Employee,
  },

  methods: {
    ...mapActions(["fetchEmployees"]),
  },

  created() {
    this.fetchEmployees();
  },

  computed: mapGetters(["allEmployees", "isFetchingEmployees"]),
};
</script>

<style>
.employees {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
@media (max-width: 500px) {
  .employees {
    grid-template-columns: 1fr;
  }
}
</style>