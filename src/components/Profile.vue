<template>
  <div v-if="currentProfile" class="edit-form">
    <h4>Profile</h4>
    <form>
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control" id="firstName"
            v-model="currentProfile.firstName"
        />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="lastName"
            v-model="currentProfile.lastName"
        />
      </div>
      <div class="form-group">
        <label for="city">City</label>
        <input type="text" class="form-control" id="city"
            v-model="currentProfile.city"
        />
      </div>
    </form>

    <button type="submit" class="badge badge-success"
        @click="updateProfile"
    >
    Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import ProfileDataService from "../services/ProfileDataService";

export default {
    name: "profile",
    data() {
        return {
        currentProfile: null,
        message: ''
        };
    },
    methods: {
        getProfile(id) {
            ProfileDataService.get(id)
                .then(response => {
                    this.currentProfile = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },

        updateProfile() {
            ProfileDataService.update(this.currentProfile.id, this.currentProfile)
                .then(response => {
                    console.log(response.data);
                    this.message = 'This Profile was updated successfully!';
                })
                .catch(e => {
                    console.log(e);
                });
        },

    },
    mounted() {
        this.message = '';
        this.getProfile(this.$route.params.id);
    }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
