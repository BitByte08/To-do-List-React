import '../style/Main.css';
import Clack from '../components/clack'
import Block from '../components/block';
import MarkList from '../components/marklist';
import {useEffect, useState, React} from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
const Dashboard = ({userName, props}) =>{
  //변수 선언
  let color = "white";
  const { id } = useParams();
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  //리더렉샨
  useEffect(() => {
    if (currentPath === `/` || currentPath === `/dashboard` || currentPath === '/Dashboard' || currentPath === `/dashboard/` || currentPath === '/Dashboard/') {
      navigate(`/dashboard/all`, { replace: true });

    }
  }, [currentPath, id, navigate]);
  //접속 애니메이션
  useEffect(() => {
    let MarkerList = document.getElementsByClassName("Marker_list")[0];
    let main = document.getElementsByClassName("main_node")[0];
    setTimeout(()=>{
      main.style.height="100%";
      main.style.top="0";
      setTimeout(()=>{
        document.getElementsByClassName("clock")[0].style.top=0;

        setTimeout(()=>{
          MarkerList.style.display = "block";
          setTimeout(()=>{
            MarkerList.style.left=0;
            color = document.getElementById("true").getElementsByTagName("div")[0].style.backgroundColor;
            document.getElementsByClassName("main_node")[0].style.backgroundColor = color;
          },500);
        },500);
      },500);
    },200);
  }, []);
  //페이지 리턴
  return (
    <>
      <main className="main">
        <Clack/>
        <nav className="menu">afdsfa</nav>
        <section className="section">
          <Block name="main_node" color={color}>
          </Block>
          <nav className="Marker_list">
            <MarkList/>
          </nav>
        </section>
      </main>
    </>
  )
}

export default Dashboard;