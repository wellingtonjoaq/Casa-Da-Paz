"use client";

import axios from "axios";
import { LayoutFooter } from "../components/LayoutFooter/page";
import { LayoutHeader } from "../components/LayoutHeader/page";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

interface IForm {
    nome: string;
    email: string;
    cpf: string;
    telefone: string;
    areas: string;
}

export default function Cadastro() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>();

    const refForm = useRef<HTMLFormElement>(null);
    const router = useRouter(); // Inicializa o hook useRouter

    const submitForm: SubmitHandler<IForm> = useCallback(
        (data) => {
            axios.post('http://localhost:8000/api/voluntarios/', data)
            .then(() => {
                router.push('/comoajudar');
            })
            .catch((err) => {
                alert("Erro ao cadastrar o usuário.");
            });
        },
        [router]
    );

    return (
        <>
            <LayoutHeader />

            <div
                className="container mt-5 col-md-6 p-4"
                style={{
                    border: "solid 2px rgba(177, 175, 175, 0.2)",
                    boxShadow: "0 5px 5px 5px rgba(0, 0, 0, 0.2)",
                }}
            >
                <h2 className="text-center">Formulário de Cadastro</h2>
                <form
                    onSubmit={handleSubmit(submitForm)}
                    ref={refForm}
                    noValidate
                >
                    <div className="mb-3">
                        <label htmlFor="nome">Nome</label>
                        <input
                            style={{ border: "2px solid" }}
                            type="text"
                            className={`form-control ${
                                errors.nome ? "is-invalid" : ""
                            }`}
                            id="nome"
                            placeholder="Digite seu nome"
                            {...register("nome", { required: "Nome é obrigatório!" })}
                        />
                        {errors.nome && (
                            <div className="invalid-feedback">
                                {errors.nome.message}
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="cpf">CPF</label>
                        <input
                            style={{ border: "2px solid" }}
                            type="text"
                            className={`form-control ${
                                errors.cpf ? "is-invalid" : ""
                            }`}
                            id="cpf"
                            placeholder="Digite seu CPF"
                            {...register("cpf", { required: "CPF é obrigatório!" })}
                        />
                        {errors.cpf && (
                            <div className="invalid-feedback">
                                {errors.cpf.message}
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">E-mail</label>
                        <input
                            style={{ border: "2px solid" }}
                            type="email"
                            className={`form-control ${
                                errors.email ? "is-invalid" : ""
                            }`}
                            id="email"
                            placeholder="Digite seu e-mail"
                            {...register("email", { required: "E-mail é obrigatório!" })}
                        />
                        {errors.email && (
                            <div className="invalid-feedback">
                                {errors.email.message}
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="telefone">Telefone</label>
                        <input
                            style={{ border: "2px solid" }}
                            type="text"
                            className={`form-control ${
                                errors.telefone ? "is-invalid" : ""
                            }`}
                            id="telefone"
                            placeholder="Digite seu telefone"
                            {...register("telefone", {
                                required: "Telefone é obrigatório!",
                            })}
                        />
                        {errors.telefone && (
                            <div className="invalid-feedback">
                                {errors.telefone.message}
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="areas">Áreas de Interesse</label>
                        <select
                            style={{ border: "2px solid" }}
                            className={`form-select ${
                                errors.areas ? "is-invalid" : ""
                            }`}
                            id="areas"
                            {...register("areas", { required: "Área é obrigatória!" })}
                        >
                            <option value="" disabled selected>
                                Selecionar
                            </option>
                            <option value="Marketing">Marketing</option>
                            <option value="Audiovisual">Audiovisual</option>
                            <option value="Programador Web designer">
                                Programador Web designer
                            </option>
                            <option value="Captador de recursos">
                                Captador de recursos
                            </option>
                            <option value="Oficineiro">Oficineiro</option>
                            <option value="Auxiliar de bazar">
                                Auxiliar de bazar
                            </option>
                            <option value="Atividades com as crianças">
                                Atividades com as crianças
                            </option>
                            <option value="Palestrante">Palestrante</option>
                            <option value="Promoções e Eventos">
                                Promoções e Eventos
                            </option>
                        </select>
                        {errors.areas && (
                            <div className="invalid-feedback">
                                {errors.areas.message}
                            </div>
                        )}
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            style={{ backgroundColor: "#89b72d", color: "white" }}
                            type="submit"
                            className="btn w-50"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
            <br />
            <br />
            <LayoutFooter />
        </>
    );
}
