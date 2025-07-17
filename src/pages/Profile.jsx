import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';


export default function Profile() {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate('/contact');
  }

  
  const { username } = useParams();
  return <>
  <h2>Profile Page of {username}</h2>
 <Link to="/about">About</Link> 
  <button onClick={handleClick}>Contact</button>
  </>
  
}
