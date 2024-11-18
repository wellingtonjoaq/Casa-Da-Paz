import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { IToken } from "../../../interfaces/token";
import { verificaTokenExpirado } from "../../../services/token";
import { LayoutDashboard } from "../../../components/LayoutDashboard";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

interface IForm {
    nome: string;
    informacao: string;
    imagem: string;
}

export default function GerenciarMemorial() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<IForm>();

    const refForm = useRef<any>();
    const navigate = useNavigate();
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const tipo = searchParams.get("tipo");

    const [isEdit, setIsEdit] = useState<boolean>(false);

    useEffect(() => {
        let token: IToken | null = null;


        const idItem = Number(id);
        if (!isNaN(idItem)) {
            axios
                .get(`${import.meta.env.VITE_URL}/memorial?id=${idItem}`)
                .then((res) => {
                    setIsEdit(true);
                    setValue("nome", res.data[0].nome);
                    setValue("informacao", res.data[0].informacao);
                    setValue("imagem", res.data[0].imagem);
                });
        }
    }, []);

    const submitForm: SubmitHandler<IForm> = useCallback(
        (data) => {
            const url = `${import.meta.env.VITE_URL}/memorial`;
            const requestData = { ...data, tipo };

            if (isEdit) {
                axios
                    .put(`${url}/${id}`, requestData)
                    .then(() => {
                        navigate("/memorial");
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            } else {
                axios
                    .post(url, requestData)
                    .then(() => {
                        navigate("/memorial");
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            }
        },
        [isEdit]
    );

    return (
        <LayoutDashboard>
            <h1>{isEdit ? "Editar Memorial" : `Adicionar ${tipo}`}</h1>
            <form
                className="row g-3 needs-validation mb-3"
                noValidate
                style={{ alignItems: "center" }}
                onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    refForm.current.classList.add("was-validated");
                    handleSubmit(submitForm)(event);
                }}
                ref={refForm}
            >
                <div className="col-md-12">
                    <label htmlFor="nome" className="form-label">
                        Nome
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Insira seu nome"
                        id="nome"
                        required
                        {...register("nome", {
                            required: "Nome é obrigatório!",
                        })}
                    />
                    <div className="invalid-feedback">
                        {errors.nome && errors.nome.message}
                    </div>
                </div>

                <div className="col-md-12">
                    <label htmlFor="informacao" className="form-label">
                        Informação
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="informacao"
                        required
                        {...register("informacao", {
                            required: "Informação é obrigatória!",
                        })}
                    />
                    <div className="invalid-feedback">
                        {errors.informacao && errors.informacao.message}
                    </div>
                </div>

                <div className="col-md-12">
                    <label htmlFor="imagem" className="form-label">
                        Imagem
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        id="imagem"
                        accept="image/*"
                        required
                        {...register("imagem", {
                            required: "Imagem é obrigatória!",
                        })}
                    />
                    <div className="invalid-feedback">
                        {errors.imagem && errors.imagem.message}
                    </div>
                </div>

                <div className="col-md-12">
                    <button type="submit" className="btn btn-success">
                        Salvar
                    </button>
                </div>
            </form>
        </LayoutDashboard>
    );
}