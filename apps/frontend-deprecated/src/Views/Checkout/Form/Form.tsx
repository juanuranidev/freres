import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import "./Form.scss";

interface IFormInputs {
  Nombre: string;
  Apellido: string;
  Email: string;
  Direccion: string;
  Localidad_Ciudad: string;
  Apartamento_Habitación: string;
  Provincia: string;
  Código_Postal: number;
  Teléfono: number;
  OrderId: number;
}

interface FormProps {
  priceDiscount: number;
  setLoader: (value: boolean) => void;
}

const Form = ({ priceDiscount, setLoader }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>();

  const { cartList, cartTotal, handlePurchase } = useContext(CartContext);

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    handlePurchase?.(data, cartList, cartTotal, priceDiscount);
    setLoader(true);
    reset();
  };

  return (
    <div className="form">
      <h2 className="form_h2">DETALLES DE LA FACTURACIÓN</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <div>
              <p>Nombre</p>
              {errors.Nombre?.type === "required" && (
                <p className="required">Requerido</p>
              )}
              {errors.Nombre?.type === "maxLength" && (
                <p className="required">Ingresa hasta 50 letras</p>
              )}
              {errors.Nombre?.type === "pattern" && (
                <p className="required">Ingresa sólo letras</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Nombre"
              {...register("Nombre", {
                required: true,
                maxLength: 50,
                pattern: /^[A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s]+$/i,
              })}
            />
          </label>
          <label>
            <div>
              <p>Apellido</p>
              {errors.Apellido?.type === "required" && (
                <p className="required">Requerido</p>
              )}
              {errors.Apellido?.type === "maxLength" && (
                <p className="required">Ingresa hasta 50 letras</p>
              )}
              {errors.Apellido?.type === "pattern" && (
                <p className="required">Ingresa sólo letras</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Apellido"
              {...register("Apellido", {
                required: true,
                maxLength: 50,
                pattern: /^[A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s]+$/i,
              })}
            />
          </label>
          <label>
            <div>
              <p>Email</p>
              {errors.Email?.type === "required" && (
                <p className="required">Requerido</p>
              )}
              {errors.Email?.type === "maxLength" && (
                <p className="required">Ingresa hasta 50 letras</p>
              )}
            </div>
            <input
              type="email"
              placeholder="Email"
              {...register("Email", { required: true, maxLength: 50 })}
            />
          </label>
          <label>
            <div>
              <p>Dirección</p>
              {errors.Direccion?.type === "required" && (
                <p className="required">Requerido</p>
              )}
              {errors.Direccion?.type === "maxLength" && (
                <p className="required">Ingresa hasta 100 letras</p>
              )}
              {errors.Direccion?.type === "pattern" && (
                <p className="required">Ingrese un formato válido</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Dirección"
              {...register("Direccion", {
                required: true,
                maxLength: 100,
                pattern: /^[0-9-A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s-/-*.,-]+$/i,
              })}
            />
          </label>
          <label>
            <div>
              <p>Apartamento, habitación, etc. (opcional)</p>
              {errors.Apartamento_Habitación?.type === "maxLength" && (
                <p className="required">Ingresa hasta 50 letras</p>
              )}
              {errors.Apartamento_Habitación?.type === "pattern" && (
                <p className="required">Ingrese un formato válido</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Apartamento, habitación, etc. (opcional)"
              {...register("Apartamento_Habitación", {
                required: false,
                maxLength: 50,
                pattern: /^[0-9-A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s-/-*.,-]+$/i,
              })}
            />
          </label>
        </div>
        <div>
          <label>
            <div>
              <p>Localidad/Ciudad</p>
              {errors.Localidad_Ciudad?.type === "required" && (
                <p className="required">Requerido</p>
              )}
              {errors.Localidad_Ciudad?.type === "maxLength" && (
                <p className="required">Ingresa hasta 50 letras</p>
              )}
              {errors.Localidad_Ciudad?.type === "pattern" && (
                <p className="required">Ingrese un formato válido</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Localidad/Ciudad"
              {...register("Localidad_Ciudad", {
                required: true,
                maxLength: 50,
                pattern: /^[0-9-A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s-/-*.,-]+$/i,
              })}
            />
          </label>
          <label>
            <div>
              <p>Provincia</p>
              {errors.Provincia?.type === "required" && (
                <p className="required">Requerido</p>
              )}
              {errors.Provincia?.type === "maxLength" && (
                <p className="required">Ingresa hasta 50 letras</p>
              )}
              {errors.Provincia?.type === "pattern" && (
                <p className="required">Ingrese un formato válido</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Provincia"
              {...register("Provincia", {
                required: true,
                maxLength: 50,
                pattern: /^[0-9-A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s-/-*.,-]+$/i,
              })}
            />
          </label>
          <label>
            <div>
              <p>Código Postal</p>
              {errors.Código_Postal?.type === "required" && (
                <p className="required">Requerido</p>
              )}
              {errors.Código_Postal?.type === "maxLength" && (
                <p className="required">Ingresa hasta 20 números</p>
              )}
            </div>
            <input
              type="number"
              placeholder="Código Postal"
              {...register("Código_Postal", { required: true, maxLength: 20 })}
            />
          </label>
          <label>
            <div>
              <p>Teléfono</p>
              {errors.Teléfono?.type === "required" && (
                <p className="required">Requerido</p>
              )}
              {errors.Teléfono?.type === "maxLength" && (
                <p className="required">Ingresa hasta 20 números</p>
              )}
            </div>
            <input
              type="number"
              placeholder="Teléfono"
              {...register("Teléfono", { required: true, maxLength: 20 })}
            />
          </label>
          <label className="button">
            {cartList.length === 0 ? (
              <button className="disabled" disabled>
                CARRITO VACÍO
              </button>
            ) : (
              <button type="submit">REALIZAR PEDIDO</button>
            )}
          </label>
        </div>
      </form>
      <Link className="form_a" to="/">
        <p className="form_a_p">VOLVER AL INICIO</p>
      </Link>
      <div className="form_border" />
    </div>
  );
};

export default Form;
