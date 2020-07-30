<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by City" v-model="city"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchCity">Search </button>
        </div>
      </div>
    </div>
    
    <div class="col-md-6">
      <h4>Profiles List</h4>
      <ul class="list-group">
        <li 
          class="list-group-item" 
          :class="{ active: index == currentIndex }" 
          v-for="(profile, index) in profiles" 
          :key="index" 
          @click="setActiveProfile(profile, index)"
        >
          {{ profile.firstName }} {{ profile.lastName }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllProfiles">
          Remove All
      </button>
    </div>

    <div class="col-md-6">
        <div v-if="currentProfile">
            <h4>Profile</h4>
            <div>
                <label><strong>First Name:</strong></label> {{ currentProfile.firstName }}
            </div>
            <div>
                <label><strong>Last Name:</strong></label> {{ currentProfile.lastName }}
            </div>
            <div>
                <label><strong>City:</strong></label> {{ currentProfile.city }}
            </div>
            <a class="badge badge-warning" :href="'/profiles/'+currentProfile.id">Edit</a>
        </div>
        <div v-else>
            <br/>
            <p>Please click on a Profile</p>
        </div>
    </div>
  </div>
</template>

<script>
import ProfileDataService from "../services/ProfileDataService";

export default {
  name: "profiles-list",
  data() {
    return {
      profiles: [],
      currentProfile: null,
      currentIndex: -1,
      firstName: "",
      lastName: "",
      city: ""
    };
  },
  methods: {
    retrieveProfiles() {
      ProfileDataService.getAll()
        .then(response => {
          this.profiles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveProfiles();
      this.currentProfile = null;
      this.currentIndex = -1;
    },

    setActiveProfile(profile, index) {
      this.currentProfile = profile;
      this.currentIndex = index;
    },
    
    searchCity() {
      ProfileDataService.findByCity(this.city)
        .then(response => {
          this.profiles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    removeAllProfiles() {
      ProfileDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveProfiles();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
