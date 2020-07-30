<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    required
                    v-model="profile.firstName"
                    name="firstName"
                />
            </div>

            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input
                    class="form-control"
                    id="lastName"
                    required
                    v-model="profile.lastName"
                    name="lastName"
                />
            </div>

            <div class="form-group">
                <label for="city">City</label>
                <input
                    class="form-control"
                    id="city"
                    required
                    v-model="profile.city"
                    name="city"
                />
            </div>

            <button @click="saveProfile" class="btn btn-success">Submit</button>
        </div>

        <div v-else>
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" @click="newProfile">Add</button>
        </div>
    </div>
</template>

<script>
import ProfileDataService from "../services/ProfileDataService";

export default {
    name: "add-profile",
    data() {
        return {
            profile: {
                id: null,
                firstName: "",
                lastName: "",
                city: ""
            },
            submitted: false
        };
    },
    methods: {
        saveProfile() {
            var data = {
                    firstName: this.profile.firstName,
                    lastName: this.profile.lastName,
                    city: this.profile.city
        };

        ProfileDataService.create(data)
            .then(response => {
                this.profile.id = response.data.id;
                console.log(response.data);
                this.submitted = true;
            })
            .catch(e => {
                console.log(e);
            });
        },
    
        newProfile() {
            this.submitted = false;
            this.profile = {};
        }
    }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
