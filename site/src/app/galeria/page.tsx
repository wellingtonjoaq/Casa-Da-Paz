"use client";

import { useEffect, useState } from "react";
import { LayoutFooter } from "../components/LayoutFooter/page";
import { LayoutHeader } from "../components/LayoutHeader/page";
import axios from "axios";

interface IGaleria {
    id: number
    nome: string
    data: string
    imagem: string
}

export default function Galeria() {

    const [dadosGaleria, setDadosGaleria] =
        useState<Array<IGaleria>>([])

    useEffect(() => {

        axios.get('http://localhost:8000/api/galerias/')
        .then((response) => {
            console.log(response.data)
            const data = response.data;
            setDadosGaleria(Array.isArray(data) ? data : []);
        })
        .catch((err) => {
            console.error("Erro ao carregar dados da galeria:", err);
        })
}, []);

    return (
        <>

            <LayoutHeader />
            <br />
            <h2 className="container">Galeria</h2>
            <hr style={{ border: 'solid 2px' }} className='container mt-2 mb-5' />

            <div className="container mt-4">
                <div className="row">
                {dadosGaleria.map((galeria) => (
                    <>
                    <div className="col-6 col-md-4 col-lg-3 mb-4" key={galeria.id}>
                        <h3>{galeria.nome}</h3>
                        <img src={`http://localhost:8000/storage/${galeria.imagem}`} className="img-fluid rounded" alt="Imagem 1" />
                        <p><strong>{galeria.data}</strong></p>
                    </div>
                    </>
                    ))}

                </div>
            </div>

            <LayoutFooter />

        </>
    )
}