import Blog1 from '../../component/homeBlog/Blog1'
import Blog2 from '../../component/homeBlog/Blog2'
import Blog3 from '../../component/homeBlog/Blog3'
import Rodinha from '../../component/homeBlog/Rodinha';


function Home() {
   return (
      <div>
         <div className="home">

            <div className="home__box">
               <div className="home__box--rodinha">
                  <Rodinha />
               </div>

               <div className="home__box--blog blog1">
                  <Blog1 />
               </div>
            </div>

            <div className="home__box">
               <div className="home__box--blog blog2">
                  <Blog2 />
               </div>
               <div className="home__box--blog blog3">
                  <Blog3 />
               </div>
            </div>

            <h1 className="copy">© Copyright 2022 | Sandrário - Todos os direitos reservados</h1>
         </div>
      </div>
   )
}

export default Home;