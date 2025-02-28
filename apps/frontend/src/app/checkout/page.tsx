'use client';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import CheckoutForm from './components/checkout-form/checkout-form';
import OrderSummary from './components/order-summary/order-summary';

const validationSchema = Yup.object({
  email: Yup.string().email('Email inválido').required('Email es requerido'),
  firstName: Yup.string().required('Nombre es requerido'),
  lastName: Yup.string().required('Apellido es requerido'),
  dni: Yup.string().required('DNI es requerido'),
  address: Yup.string().required('Dirección es requerida'),
  apartment: Yup.string(),
  postalCode: Yup.string().required('Código postal es requerido'),
  city: Yup.string().required('Ciudad es requerida'),
  province: Yup.string().required('Provincia es requerida'),
  phone: Yup.string().required('Teléfono es requerido')
});

export default function Checkout() {
  const initialValues = {
    email: '',
    firstName: '',
    lastName: '',
    dni: '',
    address: '',
    apartment: '',
    postalCode: '',
    city: '',
    province: 'Córdoba',
    phone: '',
    newsletter: false,
    saveInfo: false
  };

  return (
    <main className="min-h-[100dvh]">
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              alert(JSON.stringify(values));
            }}
          >
            <Form className="space-y-8">
              <CheckoutForm />
            </Form>
          </Formik>
        </div>
        <div className="px-4 py-8 sm:px-6 lg:px-8 bg-gray-50">
          <OrderSummary />
        </div>
      </div>
    </main>
  );
}
