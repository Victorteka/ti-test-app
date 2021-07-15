<template>
  <div>
    <h1 style="text-align: center; margin-bottom: 18px">Employees</h1>
    <div class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="8">
            <v-container class="max-width">
              <v-pagination
                v-model="page"
                class="my-4"
                :length="paginationLength()"
                circle
                :total-visible="7"
              ></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <progressbar v-show="$store.state.isFetchingEmployees" />
    <div class="employees">
      <div v-for="employee in showEmployees" :key="employee.id">
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
  data() {
    return {
      page: 1,
      perPage: 10,
    };
  },
  components: {
    Progressbar,
    Employee,
  },

  methods: {
    ...mapActions(["fetchEmployees"]),
    paginationLength() {
      return Math.ceil(this.allEmployees.length / this.perPage);
    },
    nextPage() {
      console.log(this.page);
    },
  },

  created() {
    this.fetchEmployees();
    console.log(this.allEmployees.length);
  },

  computed: {
    ...mapGetters(["allEmployees", "isFetchingEmployees"]),
    showEmployees() {
      let start = (this.page - 1) * this.perPage;
      let end = start + this.perPage;
      return this.allEmployees.slice(start, end);
    },
  },
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