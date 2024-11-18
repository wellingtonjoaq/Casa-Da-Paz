import { LayoutBody } from "../components/LayoutBody/page";
import { LayoutFooter } from "../components/LayoutFooter/page";
import { LayoutHeader } from "../components/LayoutHeader/page";
import Link from "next/link"

export default function Comoajudar() {

    return (
        <>
            <LayoutHeader />
            <br />
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-4">
                        <img style={{ width: '300px', height: '300px', borderRadius: '50%' }} src="./imagens/voluntario2.jpeg" className="img-fluid" alt="Imagem" />
                    </div>

                    <div className="col-md-6 text-right fs-5">
                        <h2 className="container">Voluntarios</h2>
                        <hr style={{ border: 'solid 2px' }} className='container mt-2 mb-4' />
                        <p>Seja um voluntário e ajude a fazer a diferença na vida de nossas crianças e
                            adolescentes. Descubra como você pode contribuir com seu tempo e habilidades.
                            <b> Preencha o formulário clicando no botão abaixo.</b></p>

                        <div className="d-flex justify-content-center me-5">
                            <Link href="/cadastro">
                                <button style={{ backgroundColor: '#89b72d', color: 'white' }} type="submit" className="btn me-5">Formulario</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <br />
            <br />
            <br />
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-4">
                        <img style={{ width: '300px', height: '300px', borderRadius: '50%' }} src="./imagens/doacoes.png" className="img-fluid" alt="Imagem" />
                    </div>

                    <div className="col-md-6 text-right fs-5">
                        <h2 className="container">Doações</h2>
                        <hr style={{ border: 'solid 2px' }} className='container mt-4 mb-4' />
                        <p>Contribua com nossa missão através de doações financeiras ou materiais.
                            Cada contribuição ajuda a oferecer suporte essencial, como uniformes,
                            material escolar e alimentação de qualidade para nossos jovens.</p>
                        <div className="text-center">
                            <p>Faça sua doação através do nosso PIX:</p>
                            <img style={{ width: '160px' }} src="./imagens/qrcode.png" alt="" />
                            <p>05.509.404/0001-29</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <LayoutFooter />
        </>
    )
}