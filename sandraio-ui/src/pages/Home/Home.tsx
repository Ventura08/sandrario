import Blog from '../../component/homeBlog/Blog'
import Rodinha from '../../component/homeBlog/rodinha'

function Home () {
 return (
    <div>
      <div className="p-7">
         <div className="bg-gray-400 w-full h-96">
            <Rodinha/>
         </div>
         <div className="w-full mt-5 flex justify-between">
            <div className="bg-gray-600 w-1/3 h-auto p-5">
               <Blog/>
            </div>
            <div className="bg-red-600 w-1/3 h-auto mr-7 ml-7 p-5">
               <Blog/>
            </div>
            <div className="bg-yellow-600 w-1/3 h-auto p-5">
               <Blog/>
            </div>
         </div>
      </div>
    </div>
 )
}

export default Home;