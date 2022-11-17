import { InputText } from 'primereact/inputtext'
import { InputNumber } from 'primereact/inputnumber'
import { Panel } from 'primereact/panel'
import { ScrollPanel } from 'primereact/scrollpanel'
import React from 'react'
import { Button } from 'primereact/button'

export const SidePanelProduct = () => {
  return (
    <Panel header='NUEVO PRODUCTO' style={{ flex: '1' }}>
        <ScrollPanel style={{ width: '100%', height: '60vh' }}>
        <div className='form-container'>
                <div className="field">
                    <label htmlFor="code">Codigo Barras</label>
                    <InputNumber id="code"/>
                </div>
                <div className='field'>
                    <label htmlFor="code">Nombre</label>
                    <InputText id="name"/>
                </div>
                <div className="field">
                    <label htmlFor="quantity">Descripción</label>
                    <InputNumber id="quantity"/>
                </div>
                <div className='field'>
                    <label htmlFor="price">Categoría</label>
                    <InputNumber id="price" mode="currency" currency="USD" locale="en-US" />
                </div>
                <div className="field">
                    <label htmlFor="quantity">Proveedor</label>
                    <InputNumber id="quantity"/>
                </div>
                <div className='field'>
                    <label htmlFor="price">Temporada</label>
                    <InputNumber id="price" mode="currency" currency="USD" locale="en-US" />
                </div>
                <div className="field">
                    <label htmlFor="quantity">Costo</label>
                    <InputNumber id="quantity"/>
                </div>
                <div className='field'>
                    <label htmlFor="price">Lista1</label>
                    <InputNumber id="price" mode="currency" currency="USD" locale="en-US" />
                </div>
                <div className="field">
                    <label htmlFor="quantity">Lista2</label>
                    <InputNumber id="quantity"/>
                </div>
                <div className='field'>
                    <label htmlFor="price">Lista3</label>
                    <InputNumber id="price" mode="currency" currency="USD" locale="en-US" />
                </div>
                <div className="field">
                    <label htmlFor="quantity">Lista4</label>
                    <InputNumber id="quantity"/>
                </div>
                <div className='field'>
                    <label htmlFor="price">Stock</label>
                    <InputNumber id="price" mode="currency" currency="USD" locale="en-US" />
                </div>
                <Button type='submit' label="Guardar" className="p-button-success" />
            </div>
        </ScrollPanel>
    </Panel>
  )
}
