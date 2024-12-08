import axios from "axios";
import apply from "../../assets/apply/apply.svg";
import { API } from "../../const";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Apply({job, setLoadingJobId}){
    const token = useSelector(state => state.token.token);
    const id_post = job.id_posting;
    const navigate = useNavigate(); 

    const applyed = useMutation({
        mutationFn: async ({id_post}) => {
            const response = await axios.post(API.PUT_APPLYED, {id_post}, {
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });       
            return response  
        },
        onSuccess: (response) => {
            if (response.data === true) {
                navigate("/applied-results");
            }
        },
        onError: (error) => {
            console.error('Error sending data:', error);

        },
        onSettled: () => {
            setLoadingJobId(null); 
        },
    });

    const handleApplyed = (e) =>{
        e.preventDefault();
        setLoadingJobId(id_post);
        applyed.mutate({id_post});
    }
    // setIsLoading(applyed.isPending)

    // if(applyed.isPending) return <Loader />

    return(
        <form onSubmit={handleApplyed}>
            <button 
                type="submit" 
                className="job__card__footer__actions__apply-button"
            >
                apply now
                <img className="job__card__footer__actions__icon" src={apply} alt="apply_icon" />
            </button>
        </form>
    )
}