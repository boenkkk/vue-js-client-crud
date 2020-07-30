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
}

export default new ProfileDataService();