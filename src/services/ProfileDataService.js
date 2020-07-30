import http from "../http-common";

class ProfileDataService {
    getAll() {
        return http.get("/profiles");
    }

    findByCity(city){
        return http.get(`/profiles?city=${city}`);
    }

    create(data) {
        return http.post("/profiles", data);
    }

    get(id) {
        return http.get(`/profiles/${id}`);
    }

    update(id, data) {
        return http.put(`/profiles/${id}`, data);
    }
}

export default new ProfileDataService();