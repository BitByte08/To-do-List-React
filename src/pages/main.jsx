import '../style/Main.css';
import Clack from '../components/clack'
import Block from '../components/block';

const Dashboard = ({userName}) =>{
  return (
    <>
      <main className="main">
        <Clack />
        <section className="section">
          <Block name="main_node">
          </Block>
        </section>
      </main>
    </>
  )
}

export default Dashboard;