import Eye from '../../assets/remove-red-eye.svg'

function Blog() {
    return(
        <div className="p-5">
            <img src="" alt="" />
            <div className="text-left text-white">
                <p className="font-semibold text-2xl">A importancia de se manter organizado</p>
                <p>Por que a organização é tão importante?</p>
                <p>Ser organizado significa ser capaz de focar no que é mais importante e fazer aquilo que for prioritário. Se não nos organizamos e não definimos nossos objetivo, deixamos o mundo externo decidir nossas prioridades. Então não somos capazes de escolher em que iremos prestar atenção.</p>
            </div>
            <div className="flex text-gray-400">
                <p>Por BaBi</p>
                <div className="flex ml-3">
                    <img src={Eye} alt=""/>
                    <p className='pl-1'>52 Visualizações</p>
                </div>
            </div>
            <button type="submit"></button>
        </div>
    )
}

export default Blog;