import './App.css';

function Header() {
  return <h2>Hello world</h2>;
}

const App = () => {
  const threeHeaders = Array.from({length: 3}, (_, index) => {
    return <Header key={index} />;
  });

  console.log(threeHeaders);

  return <div>{threeHeaders}</div>;
};

export default App;
