import axiosInstance from "./AxiosInstance";

const createProject = async(data) => {
    try{
        let res = await axiosInstance.post('/', data)
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
}

export default createProject;