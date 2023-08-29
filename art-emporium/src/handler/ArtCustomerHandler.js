import {ArtCustomerService} from '../service/ArtCustomerServices';

export const ArtCustomerHandler = {
    
        loadArtCustomer(){
            return ArtCustomerService.getAllArtCustomer();
        }
       
    }
    
    export default ArtCustomerHandler