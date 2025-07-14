import CurrentOpenings from "@/components/CurrentOpenings";
import PageTitle from "@/components/PageTitle";
import StaffinProcess from "@/components/StaffinProcess";
import TalentBenifits from "@/components/TalentBenifits";
import api from "@/libs/axios";
import toast from "react-hot-toast";
import { Job } from "@/types/job";

const Careers = () => {
  
  return (
    <div>
      <PageTitle
        title="Careers"
      />
      <TalentBenifits />
      <StaffinProcess />
      <CurrentOpenings />
      
    </div>
  );
};

export default Careers;
