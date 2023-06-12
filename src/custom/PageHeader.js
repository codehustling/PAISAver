import { Container } from "reactstrap";

export default function PageHeader() {

  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand" style={{ position: "fixed", top: "20%", left: "50%" }}>
          <h6 className="h1-seo" style={{ fontSize: "20px", height: "5%", position: "relative", top: "1%", left: "50%" }}>PAISAver</h6>

        </div>
        <h6  style={{ fontSize: "17px", position: "absolute", top: "25%", left: "50%" }}>
            Finance made easy for peasants
          </h6>
        <dive className = "data-column-name" style = {{ fontSize: "2px", height: "50%", position: "absolute", top: "35%", left: "25%" }}>
            <h4>What to do?</h4>

        </dive>
        <div className="data-column" style={{ fontSize: "2px", height: "50%", position: "absolute", top: "35%", right: "25%" }}>
            <h4>What to expect?</h4>
        </div>




        <div class="card" style={{ fontSize: "2px", height: "25%", width : "25%", position: "absolute", top: "40%", left: "15%" }}>
        <div class="card-body">
        <div >
          <h5>Explain quantum computing in simple terms</h5>
          <h5>Got any creative ideas for a 10 year old’s birthday?</h5>
          <h5>How do I make an HTTP request in Javascript?</h5>
        </div>
        </div>
      </div>

      <div class="card" style={{ fontSize: "2px", height: "25%", width : "25%", position: "absolute", top: "40%", right: "15%" }}>
        <div class="card-body">
        <div >
          <h5>Explain quantum computing in simple terms</h5>
          <h5>Got any creative ideas for a 10 year old’s birthday?</h5>
          <h5>How do I make an HTTP request in Javascript?</h5>
        </div>
        </div>
      </div>
      

      </Container>
    </div>
  );
}
