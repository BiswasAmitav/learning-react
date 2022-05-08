import logo from "./logo.svg";
import "./App.css";
import BioData from "./component/BioData";

function App() {
  return (
    <div className="App">
      <div className="bio-data">


        <BioData
          name="AMITAV BISWAS"
          email="BISWASAMIT2648@GMAIL.COM"
          phone="9023227284"
          skill={["REACT", "AI", "ML"]}
          qualification={[
            "B.TECH CSE FORM GUJRAT TECHNICAL UNIVERSITY",
            "M.TECH FORM JADHAVPUR UNIVERSITY",
          ]}
          interest={["PLAYING GUITER", "SOLVING SUDUKU"]}
          reference="SETU BHAI....*******"
        />


        <BioData
          name="PROTAP BISWAS"
          email="PROTAPSAMIT2648@GMAIL.COM"
          phone="9023227284"
          skill={["HTML", "CSS", "JAVASCRIPT","BOOTSTRAP","REACT"]}
          qualification={[
            "10TH STANDARD IN BUSINESS",
            "12TH STD.",
          ]}
          interest={["PLAYING GUITER", "SOLVING SUDUKU"]}
          reference="SETU BHAI....*******"
        />



      </div>
    </div>
  );
}

export default App;
