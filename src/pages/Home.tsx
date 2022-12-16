import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <div>
        <p id='title'>Hi, I'm Michael!</p>
      </div>
      <div> {/* flex-direction: row (text + icons) && cards */}
        <div> {/* flex-direction: column -- title && info && icons */}
          <p>
            Thanks for checking out my website! You can find info about myself
            and projects I’m working on here.
            <br />
            <br />
            I’ll try and keep this updated but life gets busy sometimes.
          </p>
        </div>
        <div></div> {/* flex-direction: column -- cards */}
      </div>
      <Card variant='hero'></Card>
    </>
  );
};

export default Home;
