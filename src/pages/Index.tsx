import Stars from "../components/Stars";
import ProfileCard from "../components/ProfileCard";

const Index = () => {
  return (
    <>
      <Stars />
      <div className="min-h-screen w-full flex items-center justify-center p-6">
        <ProfileCard />
      </div>
    </>
  );
};

export default Index;
