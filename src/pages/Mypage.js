import {Card,CardImg,CardGroup,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap';
import {useState,useEffect} from 'react';
import myImage1 from '../img/버찌.jpeg';
import myImage2 from '../img/오디.jpeg';
const Mypage = () => {
    const [newstate,setNewState] = useState(true);
    const onClickButton = ()=>{
      setNewState(!newstate);
    };
   


    return(
        <div>

    <Card>
    <CardImg
    //   src="https://picsum.photos/318/180"
    src={newstate?`${myImage1}`:`${myImage2}`}
    top
    height="800px"
    width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        {newstate? <p>버찌</p>: <p>오디</p>}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        만3세 
      </CardSubtitle>
      <Button onClick={onClickButton}>
        Change Picture
      </Button>
    </CardBody>
  </Card>
        </div>
    );
};

export default Mypage;

