import styles from './styles.module.css'

export const LayoutBody = () => {

    return (

        <>

            <div className="d-flex justify-content-center align-items-center text-ligh position-relative">

                <img style={{ width: '100%' }}
                    src="./imagens/headerpc2.png"
                    alt="imagem"
                    className='img-fluid' />
                    <div className='position-absolute'>
                    <p className=' text-white fs-4'>“Sei que meu trabalho é uma gota no oceano, 
                    mas sem ele,<br /> &emsp;&emsp;o oceano seria menor" - Santa Teresa de Calcutá</p>
                    </div>
            </div>

            <hr style={{ border: 'solid 1px' }} className='container mt-4 mb-4' />

            <div className='container'>
                <p className='fs-5'>A Associação Assistencial e Promocional Casa da Paz é uma entidade sem fins lucrativos
                    que oferece apoio integral a crianças e adolescentes no município de Umuarama, Paraná.
                    Mantida por doações, parcerias, convênios e voluntários, nossa missão é garantir um ambiente
                    seguro e acolhedor.</p>
            </div>

            <hr style={{ border: 'solid 1px' }} className='container mt-4 mb-4' />

            <div className='container'>
                <p className='fs-5'>Fundada para responder à urgência da alimentação, a Casa da Paz rapidamente percebeu que a questão era mais ampla. Observamos que muitas crianças estavam vulneráveis nas ruas, enfrentando altos índices de repetência escolar e evasão, e expostas a perigos graves como o tráfico de drogas e a prostituição.
                    Nosso objetivo é proporcionar um ambiente seguro e acolhedor, onde cada jovem possa ter acesso a oportunidades de aprendizado, apoio psicossocial e atividades enriquecedoras. Trabalhamos para oferecer um futuro melhor, garantindo que nossas crianças e adolescentes tenham as ferramentas necessárias para crescer com dignidade e esperança.</p>
            </div>

            <hr style={{ border: 'solid 1px' }} className='container mt-4 mb-4' />

            <h1 className='text-center'>Missão | Visão | Valores</h1>
            <br />

            <div className='d-flex justify-content-center'>

                <img style={{ width: '700px' }} className='img-fluid' src="./imagens/missao.png" alt="" />

            </div>

            <hr style={{ border: 'solid 1px' }} className='container mt-4 mb-4' />


        </>



    )

}