<template>
  <div>
    <v-card elevation="2" outlined class="card">
      <v-card-title class="text-h5"
        >Name: {{ employeeData.name }}
      </v-card-title>

      <v-card-subtitle
        ><span id="bio">Bio</span>: {{ employeeData.bio }}</v-card-subtitle
      >
      <v-card-actions class="email-occupation" style="margin-top: 6px">
        <v-chip class="ml-2" color="success" outlined>
          <v-icon left> mdi-briefcase</v-icon>
          Occupation: {{ employeeData.occupation }}
        </v-chip>
        <v-chip class="email">
          <v-icon left> mdi-email </v-icon>
          Email: {{ employeeData.email }}
        </v-chip>
        <!-- <v-spacer></v-spacer> -->

        <template>
          <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn id="editBtn" icon v-bind="attrs" v-on="on"
                  ><v-icon>mdi-account-edit-outline</v-icon></v-btn
                >
              </template>
              <v-form>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Edit employee profile</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                            v-model="employeeData.name"
                            :rules="rules.name"
                            color="blue darken-2"
                            label="Name"
                            required
                          ></v-text-field>
                          <v-col cols="12">
                            <v-text-field
                              v-model="employeeData.email"
                              label="Email*"
                              required
                            ></v-text-field>
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <v-textarea v-model="employeeData.bio" color="teal">
                            <template v-slot:label>
                              <div>Bio <small>(optional)</small></div>
                            </template>
                          </v-textarea>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="Occupation*"
                            type="text"
                            v-model="employeeData.occupation"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                      Close
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="submit(), (dialog = false)"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-form>
            </v-dialog>
            <v-snackbar
              v-model="snackbar"
              absolute
              bottom
              right
              color="success"
            >
              <span>Info update successful!</span>
              <v-icon dark> mdi-checkbox-marked-circle </v-icon>
            </v-snackbar>
          </v-row>
        </template></v-card-actions
      ></v-card
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";

import EditEmployeeInfo from "../components/EditEmployeeInfo.vue";

export default {
  name: "Employee",
  props: ["employeeData"],
  data: () => ({
    dialog: false,
    snackbar: false,
    rules: {
      age: [(val) => val < 10 || `I don't believe you!`],
      animal: [(val) => (val || "").length > 0 || "This field is required"],
      name: [(val) => (val || "").length > 0 || "This field is required"],
    },
  }),

  methods: {
    ...mapActions(["editEmployeeInfo"]),
    submit() {
      this.snackbar = true;
      const updatedEmployee = {
        id: this.employeeData.id,
        name: this.employeeData.name,
        email: this.employeeData.email,
        bio: this.employeeData.bio,
        occupation: this.employeeData.occupation,
      };
      this.editEmployeeInfo(updatedEmployee);
    },
  },
  components: {
    EditEmployeeInfo,
  },
};
</script>

<style>
#bio {
  font-weight: bold;
  font-size: 16px;
  color: green;
}
#editBtn {
  position: absolute;
  right: 10px;
  top: 10px;
}
.email-occupation {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.email {
  margin: 4px 12px;
}
</style>