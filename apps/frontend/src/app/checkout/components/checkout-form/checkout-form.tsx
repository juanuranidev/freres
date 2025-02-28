'use client';

import { Input } from '@/components/ui/input';
import { Field } from 'formik';
import { useReadStates } from '@/hooks/state/use-read-states';
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export default function CheckoutForm() {
  const { states } = useReadStates();

  return (
    <div className="flow-root w-[60%] ml-auto">
      <div>
        <h2 className="text-lg font-bold">Contacto</h2>
        <div className="mt-4">
          <Input
            name="email"
            type="email"
            placeholder="Email o número de teléfono móvil"
          />
        </div>
        <div className="mt-4">
          <label className="flex items-center">
            <Field
              type="checkbox"
              name="newsletter"
              className="h-4 w-4 rounded border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-600">
              Enviarme novedades y ofertas por correo electrónico
            </span>
          </label>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold">Entrega</h2>
        <div className="mt-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input name="firstName" placeholder="Nombre" />
            <Input name="lastName" placeholder="Apellidos" />
          </div>
          <Input name="dni" placeholder="DNI" />
          <Input name="address" placeholder="Dirección" />
          <Input
            name="apartment"
            placeholder="Casa, apartamento, etc. (opcional)"
          />
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-2">
              <Input name="postalCode" placeholder="Código postal" />
            </div>
            <div className="col-span-2">
              <Input name="city" placeholder="Ciudad" />
            </div>
            <div className="col-span-2">
              <Select name="province">
                <SelectTrigger className="h-12">Provincia</SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state.id} value={state.name}>
                      {state.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Input name="phone" placeholder="Teléfono" />
          <label className="flex items-center">
            <Field
              type="checkbox"
              name="saveInfo"
              className="h-4 w-4 rounded border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-600">
              Guardar mi información y consultar más rápidamente la próxima vez
            </span>
          </label>
          <div className="mt-10">
            <Button className="w-full">Pagar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
