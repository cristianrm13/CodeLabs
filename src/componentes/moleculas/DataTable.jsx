import React from 'react';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';

const DataTable = () => {
  function testClickEvent(param) {
    alert('Aun no hay evento programado');
  }

  const data = () => {
    return {
      columns: [
        {
          label: 'Usuario',
          field: 'Usuario',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Usuario',
          },
        },
        {
          label: 'Correo',
          field: 'Correo',
          width: 270,
        },
        {
          label: 'Contraseña',
          field: 'Contraseña',
          width: 200,
        },
        {
          label: 'Estatus',
        field: 'Estatus',
        sort: 'asc',
          width: 100,
        },
        {
          label: 'Fecha de inicio',
          field: 'Fecha',
          sort: 'disabled',
          width: 150,
        },
        {
          label: 'Salary',
          field: 'salary',
          sort: 'disabled',
          width: 100,
        },
      ],
      rows: [
        {
          Usuario: 'Cristian ramos',
          Correo: 'Cristian13@gmail.com',
          Contraseña: 'Code1Cristian',
          Estatus: 'activo',
          Fecha: '2011/04/25',
          salary: '$320',
          clickEvent: () => testClickEvent(1),
        },
        {
          Usuario: 'Alan Balbuena',
          Correo: 'Alan1@gmail.com',
          Contraseña: 'Code2Alan',
          Estatus: 'activo',
          Fecha: '2011/07/25',
          salary: '$170',
        },
        {
          Usuario: 'Luis Perez',
          Correo: 'LuisP@gmail.com',
          Contraseña: 'Code3Luis',
          Estatus: 'activo',
          Fecha: '2009/01/12',
          salary: '$86',
        },
        {
          Usuario: 'Cedric Kelly',
          Correo: 'Cedryc@gmail.com',
          Contraseña: 'Code4Cedric',
          Estatus: 'desactivo',
          Fecha: '2012/03/29',
          salary: '$433',
        },
        {
          Usuario: 'Airi Satou',
          Correo: 'Airi12@gmail.com',
          Contraseña: 'Code5Airi',
          Estatus: 'desactivo',
          Fecha: '2008/11/28',
          salary: '$162',
        },
        {
          Usuario: 'Brielle Williamson',
          Correo: 'Integration Specialist',
          Contraseña: 'New York',
          Estatus: 'desactivo',
          Fecha: '2012/12/02',
          salary: '$372',
        },
        {
          Usuario: 'Herrod Chandler',
          Correo: 'Sales Assistant',
          Contraseña: 'San Francisco',
          Estatus: 'desactivo',
          Fecha: '2012/08/06',
          salary: '$137',
        },
        {
          Usuario: 'Rhona Davidson',
          Correo: 'Integration Specialist',
          Contraseña: 'Tokyo',
          Estatus: 'desactivo',
          Fecha: '2010/10/14',
          salary: '$327',
        },
      ],
    };
  };
  return (
    <div className="row">
      <CDBContainer>
      <CDBCard>
        <CDBCardBody>
            <center><h1>Queretaro</h1></center>
          <CDBDataTable
            striped
            bordered
            hover
            entriesOptions= {[5, 20, 25, 30]}
            entries={5}
            pEstatussAmont={4}
            data={data()}
            materialSearch={true}
          />
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
    </div>
  );
};

export default DataTable;