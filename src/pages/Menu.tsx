import { useNavigate } from "react-router-dom";

function Menu(){
    const navigate = useNavigate()
    const goToPage = (event: any) => {
        navigate(event.target.id)
    }
    
    return <div className="App">
    <ul>
      <li data-testid="home-route" id="home" onClick={goToPage}>Home</li>
      <li data-testid="screen1-route" id="screen1" onClick={goToPage}>Screen1</li>
      <li data-testid="screen2-route" id="screen2" onClick={goToPage}>Screen 2</li>
    </ul>
  </div>;
}

export default Menu;