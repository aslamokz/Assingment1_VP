import react from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import reactDom from 'react-dom';
import Card from "./Cards";
import "./index.css";


reactDom.render(
  <>
   <h1 className="heading_style">Wellcome to Netflix Series of Movies</h1>

   <Container className="cl_4">
   <div className="divOne">
     <Card
      imgsrc="/images/img2.jpg" 
      title="A Netflix Orignal Series"
      sname="Best Action Movies"
      link="https://collider.com/best-action-movies-on-netflix-right-now/"
     />
       <Card
      imgsrc="/images/img1.jpg" 
      title="A Netflix Orignal Series"
      sname="Date Announcement"
      link="https://www.youtube.com/watch?v=wPzcpDNRyyA"
     />
     <Card
      imgsrc="/images/img3.jpg" 
      title="A Netflix Orignal Series"
      sname="Film 2k21"
      link="https://gadgets.ndtv.com/entertainment/news/netflix-india-dhamaka-jagame-thandhiram-bulbul-tarang-haseen-dillruba-penthouse-jaadugar-new-movies-sonakshi-sinha-2382212"
     />
     </div>

      <div className="divTwo">
     <Card
      imgsrc="/images/img2.jpg" 
      title="A Netflix Orignal Series"
      sname="Best Action Movies"
      link="https://collider.com/best-action-movies-on-netflix-right-now/"
     />
      <Card
      imgsrc="/images/img1.jpg" 
      title="A Netflix Orignal Series"
      sname="Date Announcement"
      link="https://www.youtube.com/watch?v=wPzcpDNRyyA"
     />
      <Card
      imgsrc="/images/img3.jpg" 
      title="A Netflix Orignal Series"
      sname="Film 2k21"
      link="https://gadgets.ndtv.com/entertainment/news/netflix-india-dhamaka-jagame-thandhiram-bulbul-tarang-haseen-dillruba-penthouse-jaadugar-new-movies-sonakshi-sinha-2382212"
     />
     </div>
    </Container>
  </>
 ,
  document.getElementById('root')
);
export default Card;