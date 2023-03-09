import Card from "./component/Card";

function App() {
  const cardProfile = [{
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
    name: "Amit",
    designation: "Graphic Designer",
    detail: "Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design."
  }
    , {
    image: "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Ruhi",
    designation: "Singer",
    detail: "perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays,and other types of music groups."
  }]
  return (
    <>
      {cardProfile.map((data) => {
        return (
          <Card image={data.image} name={data.name} designation={data.designation} detail={data.detail} />
        )
      }
      )}
    </>
  );
}
export default App;
