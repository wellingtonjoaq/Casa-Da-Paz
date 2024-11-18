import { LayoutBody } from "@/app/components/LayoutBody/page";
import { LayoutFooter } from "@/app/components/LayoutFooter/page";
import { LayoutHeader } from "@/app/components/LayoutHeader/page";

export default function Bazar() {

    return (

        <>
            <LayoutHeader />

            <br />
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-4">
                        <img style={{ width: '300px', height: '300px', borderRadius: '50%' }} src="./imagens/bazar.png" className="img-fluid" alt="Imagem" />
                    </div>

                    <div className="col-md-7 text-right fs-5">
                        <h2 className="container">Bazar</h2>
                        <hr style={{ border: 'solid 2px' }} className='container mt-2 mb-4' />
                        <p>A Casa da Paz organiza um Bazar Permanente Beneficente como uma das formas de arrecadar
                            fundos para apoiar nossos programas e serviços. Em nosso bazar, você encontrará uma
                            variedade de itens novos e usados, incluindo roupas, acessórios, livros, brinquedos
                            e muito mais, tudo a preços acessíveis.</p>
                        <p><b>Visite Nosso Bazar</b>, sua participação e apoio são fundamentais para o sucesso do nosso bazar.
                            Venha nos visitar, faça compras, doe itens ou ofereça seu tempo como voluntário. Cada ação
                            ajuda a fazer a diferença na vida das crianças e adolescentes atendidos pela Casa da Paz.</p>

                        <div className="">
                            <div className="row">
                                <div className="col-6">
                                    <p><b>Terça a Sexta, das 8 às 17h.</b></p>
                                </div>
                                <div className="col-6">
                                    <p><b>Sábado, das 8 às 12h.</b></p>
                                </div>
                                <div className="col-6">
                                    <p>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                        </svg>

                                        <b> Av. Rio de Janeiro, 4453</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>


            <br />

            <LayoutFooter />
        </>

    )
}