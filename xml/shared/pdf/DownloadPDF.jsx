import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import moment from 'moment';
import InvoicePage from './InvoicePage';
import { Loader } from 'semantic-ui-react';

const dataV = {
  client: {
    id: '71b6c871-302f-434c-8143-cc17e4a0b2da',
    personType: 'juridica',
    nationalID: '1001644556',
    verificationDigit: 0,
    name: '',
    businessName: 'Exito S.A.S',
  },
  comments: null,
  company: {
    id: 'a6ab3d80-5458-4986-b242-731cbba8b6d3',
    name: 'CrhisCompany',
    TAXID: '123123123',
    verificationDigit: null,
    companyMainRole: 'Ceo',
  },
  createdAt: '2021-05-29T00:12:17.954Z',
  currency: null,
  date: '2021-05-29',
  documents: null,
  exchangeRate: 0,
  expiration: '2021-05-30',
  id: 'bc8cfadb-a240-435d-8680-cbf963322a8d',
  invoiceNumber: 'NRCC103',
  national: true,
  noteConcept: null,
  noteNumber: null,
  notes: null,
  operationType: {
    id: 'e44ac6b6-c10a-4663-9a99-dd463a65f6e7',
    code: '0',
    name: 'Estándar',
    country: 'Colombia',
    createdAt: '2021-05-21T04:55:04.948Z',
  },
  owner: '66597ac4-0ba3-49b7-9f49-3fd0ff583161',
  paymentLink: null,
  paymentMethod: {
    id: '2d59ad23-33a3-4af3-a04b-9bb4929384f3',
    code: '12',
    name: 'Reversión Débito Ahorro',
    country: 'Colombia',
    createdAt: '2021-05-20T19:50:35.32Z',
  },
  paymentWay: 'Credito',
  productsServices: {
    items: [
      [
        {
          createdAt: '2021-05-29T00:12:18.549Z',
          discountPercentage: 5,
          discounted: true,
          id: 'b27d5942-352d-4f82-a09a-50df80b32a14',
          invoiceID: 'bc8cfadb-a240-435d-8680-cbf963322a8d',
          owner: '66597ac4-0ba3-49b7-9f49-3fd0ff583161',
          productServiceID: 'ebee8b34-2f95-4fc6-8ee8-91dd675abe6e',
          quantity: 1,
          productService: {
            name: 'Xiaomi Mi A2 Lite',
          },
          retention: 0,
          retentionPercentage: 0,
          taxed: true,
          total: 712500,
          unitPrice: 750000,
          updatedAt: '2021-05-29T00:12:18.549Z',
          vat: 142500,
          vatPercentage: 19,
        },
      ],
    ],
  },
  purchaseOrder: {
    id: '56240322-b0d8-4594-9360-f03b0d054b54',
    orderID: 'bc8cfadb-a240-435d-8680-cbf963322a8d',
    date: '2021-05-28',
    documents: null,
    createdAt: '2021-05-29T00:12:18.972Z',
  },
  reteICA: 0.006,
  reteIVA: 15,
  seller: 'Crhistian',
  status: 'DRAFT',
  subtotal: 750000,
  tags: null,
  termsAndConditions: null,
  total: 855000,
  totalRetention: 0,
  totalVat: 142500,
  type: 'default',
  updatedAt: '2021-05-29T00:12:19.463Z',
};

const Download = ({ data, currentUser }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [data]);
  return (
    <div
      className={show === false ? 'loading' : 'download-pdf'}
      title="Save PDF"
    >
      <PDFDownloadLink
        document={
          <InvoicePage
            data={data}
            pdfMode={true}
            currentUser={currentUser}
            mode={true}
          />
        }
        fileName={`Invoice-${moment().toString()}.pdf`}
        aria-label="Guardar PDF"
      >
        {({ blob, url, loading, error }) => {}}
      </PDFDownloadLink>
    </div>
  );
};

export default Download;
