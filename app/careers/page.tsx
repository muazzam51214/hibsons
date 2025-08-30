import CurrentOpenings from "@/components/CurrentOpenings";
import PageTitle from "@/components/PageTitle";
import StaffinProcess from "@/components/StaffinProcess";
import TalentBenifits from "@/components/TalentBenifits";

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
