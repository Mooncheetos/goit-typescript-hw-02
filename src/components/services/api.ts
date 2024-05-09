import axious from "axios";

interface ApiResponse<T> {
    results: T;
    total_pages: number;
}

const accessKey = "BZQAzksl-XaOXhaHGrM0_3aHS3d4w7Mb-lKF6gG7NmM";
const response = axious.create({
    baseURL: "https://api.unsplash.com", 
});

export const requestImagesByQuery = async <T>(query = "", page = 1): Promise<ApiResponse<T>> => {
    const perPage = 15;
    const { data } = await response.get(`/search/photos/?client_id=${accessKey}&query=${query}&per_page=${perPage}&page=${page}`);
    return {
        results: data.results,
            total_pages: data.total_pages,
    };
};