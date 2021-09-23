import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { API, graphqlOperation } from 'aws-amplify';
import axios from 'axios';
import { Base64 } from 'js-base64';
import {
  Segment,
  Form,
  Input,
  Label,
  Button,
  Divider,
  List,
  Card,
  Message,
  Icon,
  Loader,
  Progress,
} from 'semantic-ui-react';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { invoiceGen, noteGen } from './data';
import { DebitNote, Invoice, CreditNote } from './fake';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import moment from 'moment';

const getCompany = `
query GetCompany($id: ID!) {
  getCompany(id: $id) {
    id
    name
    TAXID
    verificationDigit
    companyMainRole
    websites {
      url
      type
    }
    contacts {
      name
      lastname
      title
      email
      location {
        name
        headquarters
        branchCode
      }
      phoneNumber {
        countryCode
        number
        extension
      }
      main
      tags {
        name
        value
      }
    }
    locations {
      name
      address {
        country
        cityCode
        city
        stateCode
        state
        address_line1
        address_line2
        address_zip_code
      }
      headquarters
      branchCode
      phoneNumbers {
        countryCode
        number
        extension
      }
      tags {
        name
        value
      }
    }
    profilePhoto {
      bucket
      region
      key
    }
    createdAt
    updatedAt
    groupCategories {
      items {
        id
        code
        name
        description
        nature
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
    accountCategories {
      items {
        id
        code
        name
        description
        nature
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
    subAccountCategories {
      items {
        id
        code
        name
        description
        nature
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
    auxiliarCategories {
      items {
        id
        code
        name
        description
        nature
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
    users {
      items {
        id
        personType
        nationalID
        name
        lastname
        email
        companyRole
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
    owner
    configuration {
      id
      resolutions {
        name
        branchCode
        invoicePrefix
        initDate
        endDate
        rangeInit
        rangeEnd
        technicalKey
        currentInvoiceNumber
        invoicesResolution
      }
      branches {
        name
        code
        description
        currentBillNumber
      }
      currentBillNumber
      creditNotesConfiguration {
        branchCode
        notePrefix
        currentNoteNumber
      }
      debitNotesConfiguration {
        branchCode
        notePrefix
        currentNoteNumber
      }
      decimals
      decimalsQuantity
      createdAt
      updatedAt
      company {
        id
        name
        TAXID
        verificationDigit
        companyMainRole
        createdAt
        updatedAt
        owner
      }
      fiscalResponsabilities {
        items {
          id
          fiscalResponsability{
            id 
            name
            code
          }
          fiscalResponsabilityID
        }
      }
      regimenType {
        id
        code
        name
        country
      }
    }
    industries {
      items {
        id
        CIIU
        name
        description
      }
    }
    accounts {
      items {
        id
        bankID
        bankName
        accountID
        branchCode
        balance
      }
    }
    bags {
      items {
        id
        name
        balance
        blocked
      }
    }
    notifications {
      items {
        id
        name
        message
        date
        url
        read
        type
      }
    }
    productsServices {
      items {
        id
        code
        type
        name
        defaultPrice
        quantity
        acceptableLimit
        taxed
        vatPercentage
        vat
        description
        videoURLs
      }
    }
    supplierProductsServices {
      items {
        id
        code
        type
        name
        defaultPrice
        quantity
        acceptableLimit
        taxed
        vatPercentage
        vat
        description
        videoURLs
      }
    }
    supportTickets {
      items {
        id
        name
        description
        asigned
        response
        status
      }
    }
    roles {
      items {
        id
        name
      }
    }
    customers {
      items {
        id
        personType
        nationalID
        verificationDigit
        name
        lastname
        businessName
      }
    }
    suppliers {
      items {
        id
        personType
        nationalID
        verificationDigit
        name
        lastname
        businessName
      }
    }
    employees {
      items {
        id
        nationalID
        name
        lastname
        address
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
    invoices {
      items {
        id
        type
        national
        currency
        exchangeRate
        noteNumber
        invoiceNumber
        seller
        date
        hour
        expiration
        paymentWay
        subtotal
        totalVat
        totalRetention
        reteIVA
        reteICA
        total
        paymentLink
        termsAndConditions
        notes
        comments
        status
      }
    }
    bills {
      items {
        id
        type
        national
        currency
        exchangeRate
        noteNumber
        billNumber
        billNumberDIAN
        date
        hour
        expiration
        paymentWay
        subtotal
        totalVat
        totalRetention
        reteIVA
        reteICA
        total
        paymentLink
        termsAndConditions
        notes
        comments
        status
      }
    }
    taxes {
      items {
        id
        name
        type
        percentage
        municipality
        value
        country
      }
    }
    incomes {
      items {
        id
        concept
        invoiceID
        senderType
        senderID
        senderName
        manual
        date
        value
      }
    }
    expenses {
      items {
        id
        concept
        billID
        receiverType
        receiverID
        receiverName
        manual
        date
        transferID
        paid
        value
      }
    }
    transfers {
      items {
        id
        concept
        expenseID
        receiverType
        receiverID
        receiverName
        date
        value
      }
    }
    
  }
}
`;

const InvoiceGen = () => {
  const [invoice, setInvoice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [debitNote, setDebitNote] = useState(0);
  const [creditNote, setCreditNote] = useState(0);
  const [company, setCompany] = useState(null);

  const currentUser = useSelector((state) => state.user.currentUser);

  const PaymentMeans = {
    Contado: 1,
    Credito: 2,
  };

  useEffect(() => {
    let didCancel = true;
    const fecth = async () => {
      try {
        setLoading(true);

        const company = await API.graphql(
          graphqlOperation(getCompany, { id: currentUser.company.id })
        );
        setCompany(company.data.getCompany);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (didCancel) fecth();
    return () => {
      didCancel = false;
    };
  }, [currentUser]);
  return (
    <Segment>
      <Card centered>
        <Card.Content header="Habilitacion ante la DIAN" />
        <Card.Content description="Ingresa a la página de la DIAN en la opción" />
        <Card.Content extra>
          <Button color="teal">
            <Icon name="hand point up" />
            <Link
              style={{ color: '#fff' }}
              to={{
                pathname: 'https://catalogo-vpfe-hab.dian.gov.co/User/Login',
              }}
              target="_blank"
            >
              Dale click
            </Link>
          </Button>
        </Card.Content>
      </Card>

      <Divider />
      <Formik
        initialValues={{
          SetTestId: '',
          invoiceNumber: 1,
          creditNumber: 1,
          debitNumber: 1,
        }}
        validationSchema={Yup.object({
          SetTestId: Yup.string().required('Requerido token de prueba'),
          invoiceNumber: Yup.number()
            .required('Requerido numero de documentos')
            .min(1, 'Numero invalido'),
          creditNumber: Yup.number()
            .required('Requerido numero de documentos')
            .min(1, 'Numero invalido'),
          debitNumber: Yup.number()
            .required('Requerido numero de documentos')
            .min(1, 'Numero invalido'),
        })}
        onSubmit={async (values) => {
          try {
            setLoading(true);
            if (!company) {
              toast.error('No se encontro la empresa');
              setLoading(false);
              return;
            }
            const url = '/cadena/staging/vp-hab/documentos/proceso/alianzas';
            const INVO = parseInt(values.invoiceNumber) + 7;
            const NCR = parseInt(values.creditNumber);
            const NDB = parseInt(values.debitNumber);
            let cufe = '';
            Invoice.company = company;
            CreditNote.company = company;
            DebitNote.company = company;
            let i = parseInt(values.invoiceNumber);

            while (i <= INVO) {
              const { CUFE, file } = invoiceGen({
                InvoiceAuthorization: 18760000001,
                StartDate: '2019-01-19',
                EndDate: '2030-01-19',
                Prefix: 'SETT',
                From: 1,
                To: 5000000,
                SoftwareID: '49fab599-4556-4828-a30b-852a910c5bb1',
                PIN: '75315',
                IssueDate: Invoice.date,
                IssueTime: Invoice.hour,
                CompanyName: Invoice.company.name,
                CustomizationID: 10,
                CompanyNIT: Invoice.company.TAXID,
                InvoiceNumber: `SETT${i}`,
                InvoiceTypeCode: '01',
                items: Invoice.productsServices.items,
                InvoicePeriodStart: Invoice.date,
                InvoicePeriodEnd: Invoice.expiration,
                ClTec: 'fc8eac422eba16e22ffd8c6f94b3f40a6e38162c',
                SetTestID: values.SetTestId,
                CompanyPostCode: Invoice.company.locations[0].address.cityCode,
                CompanyCity: Invoice.company.locations[0].address.city,
                CompanyCityCode: Invoice.company.locations[0].address.cityCode,
                CompanyDepartament: Invoice.company.locations[0].address.state,
                CompanyDepartamentCode:
                  Invoice.company.locations[0].address.stateCode,
                CompanyAddress:
                  Invoice.company.locations[0].address.address_line1,
                CompanyEmail: 'csds@gmail.com',
                TaxLevelCode: Invoice.client.fiscalResponsability.code,
                RegimenCode: Invoice.client.regimenType.code,
                fiscalResponsabilities:
                  Invoice.company.configuration.fiscalResponsabilities.items,
                regimenType: Invoice.company.configuration.regimenType,
                TaxSchemeID: '01',
                TaxSchemeName: 'IVA',
                AdditionalAccountID: 1,
                CustomerID: Invoice.client.nationalID,
                CustomerName: Invoice.client.name
                  ? Invoice.client.name + ' ' + Invoice.client.lastname
                  : Invoice.client.businessName,
                CustomerCity: Invoice.client.locations[0].address.city,
                CustomerCityCode: Invoice.client.locations[0].address.cityCode,
                CustomerDeparment: Invoice.client.locations[0].address.state,
                CustomerDeparmentCode:
                  Invoice.client.locations[0].address.stateCode,
                CustomerAddress:
                  Invoice.client.locations[0].address.address_line1,
                CustomerNITCode: Invoice.client.idType.code,
                CustomerNIT: Invoice.client.nationalID,
                CustomerEmail: Invoice.client.contacts.email,
                PaymentMeansID: PaymentMeans[Invoice.paymentWay],
                PaymentMeansCode: Invoice.paymentMethod.code,
                PaymentDueDate: Invoice.expiration,
                TaxableAmount: Invoice.subtotal.toFixed(2).toString(),
                TaxAmount: Invoice.totalVat.toFixed(2).toString(),
                Percent: '19.00',
                LineExtensionAmount: Invoice.subtotal.toFixed(2).toString(),
                TaxExclusiveAmount: Invoice.productsServices.items
                  .reduce((prev, { subtotal }) => subtotal + prev, 0)
                  .toFixed(2)
                  .toString(),
                TaxInclusiveAmount: Invoice.total.toFixed(2).toString(),
                PayableAmount: Invoice.total.toFixed(2).toString(),
              });
              const xml = JSON.stringify(Base64.encode(file));
              await axios.post(url, xml, {
                headers: {
                  'Content-Type': 'text/plain',
                  efacturaAuthorizationToken:
                    '17918fc5-62e2-466e-a578-f78b412358b8',
                },
              });

              setInvoice((invo) => invo + 1);
              cufe = CUFE;
              i += 1;
            }
            i = parseInt(values.creditNumber);
            while (i <= NCR) {
              const { file } = noteGen({
                CUFE: cufe,
                NoteNumber: `NCR${i}`,
                type: CreditNote.type,
                NoteTypeCode: 91, //credito 91, debito 92
                Prefix: 'SETT',
                PrefixNote: 'NCR',
                From: 1,
                To: 5000000,
                PIN: '75315',
                IssueDate: CreditNote.date,
                IssueTime: CreditNote.hour,
                CompanyName: CreditNote.company.name,
                CustomizationID: 10,
                CompanyNIT: CreditNote.company.TAXID,
                InvoiceNumber: `SETT${values.invoiceNumber}`,
                InvoiceTypeCode: '01',
                items: CreditNote.productsServices.items,
                InvoicePeriodStart: CreditNote.date,
                InvoicePeriodEnd: CreditNote.expiration,
                ClTec: 'fc8eac422eba16e22ffd8c6f94b3f40a6e38162c',
                SetTestID: values.SetTestId,
                CompanyPostCode:
                  CreditNote.company.locations[0].address.cityCode,
                CompanyCity: CreditNote.company.locations[0].address.city,
                CompanyCityCode:
                  CreditNote.company.locations[0].address.cityCode,
                CompanyDepartament:
                  CreditNote.company.locations[0].address.state,
                CompanyDepartamentCode:
                  CreditNote.company.locations[0].address.stateCode,
                CompanyAddress:
                  CreditNote.company.locations[0].address.address_line1,
                CompanyEmail: 'csds@gmail.com',
                TaxLevelCode: CreditNote.client.fiscalResponsability.code,
                RegimenCode: CreditNote.client.regimenType.code,
                fiscalResponsabilities:
                  CreditNote.company.configuration.fiscalResponsabilities.items,
                regimenType: CreditNote.company.configuration.regimenType,
                TaxSchemeID: '01',
                TaxSchemeName: 'IVA',
                AdditionalAccountID: 1,
                CustomerID: CreditNote.client.nationalID,
                CustomerName: CreditNote.client.name
                  ? CreditNote.client.name + ' ' + CreditNote.client.lastname
                  : CreditNote.client.businessName,
                CustomerCity: CreditNote.client.locations[0].address.city,
                CustomerCityCode:
                  CreditNote.client.locations[0].address.cityCode,
                CustomerDeparment: CreditNote.client.locations[0].address.state,
                CustomerDeparmentCode:
                  CreditNote.client.locations[0].address.stateCode,
                CustomerAddress:
                  CreditNote.client.locations[0].address.address_line1,
                CustomerNITCode: CreditNote.client.idType.code,
                CustomerNIT: CreditNote.client.nationalID,
                CustomerEmail: CreditNote.client.contacts[0].email,
                PaymentMeansID: PaymentMeans[CreditNote.paymentWay],
                PaymentMeansCode: CreditNote.paymentMethod.code,
                PaymentDueDate: CreditNote.expiration,
                TaxableAmount: CreditNote.subtotal.toFixed(2).toString(),
                TaxAmount: CreditNote.totalVat.toFixed(2).toString(),
                Percent: '19.00',
                LineExtensionAmount: CreditNote.subtotal.toFixed(2).toString(),
                TaxExclusiveAmount: CreditNote.productsServices.items
                  .reduce((prev, { subtotal }) => subtotal + prev, 0)
                  .toFixed(2)
                  .toString(),
                TaxInclusiveAmount: CreditNote.total.toFixed(2).toString(),
                PayableAmount: CreditNote.total.toFixed(2).toString(),
              });
              const xml = JSON.stringify(Base64.encode(file));

              await axios.post(url, xml, {
                headers: {
                  'Content-Type': 'text/plain',
                  efacturaAuthorizationToken:
                    '17918fc5-62e2-466e-a578-f78b412358b8',
                },
              });
              setCreditNote((cre) => cre + 1);
              i += 1;
            }

            i = parseInt(values.debitNumber);
            while (i <= NDB) {
              const { file } = noteGen({
                CUFE: cufe,
                NoteNumber: `NDE${i}`,
                type: DebitNote.type,
                NoteTypeCode: 91, //credito 91, debito 92
                Prefix: 'SETT',
                PrefixNote: 'NDE',
                From: 1,
                To: 5000000,
                PIN: '75315',
                IssueDate: DebitNote.date,
                IssueTime: DebitNote.hour,
                CompanyName: DebitNote.company.name,
                CustomizationID: 10,
                CompanyNIT: DebitNote.company.TAXID,
                InvoiceNumber: `SETT${values.invoiceNumber}`,
                InvoiceTypeCode: '01',
                items: DebitNote.productsServices.items,
                InvoicePeriodStart: DebitNote.date,
                InvoicePeriodEnd: DebitNote.expiration,
                ClTec: 'fc8eac422eba16e22ffd8c6f94b3f40a6e38162c',
                SetTestID: values.SetTestId,
                CompanyPostCode:
                  DebitNote.company.locations[0].address.cityCode,
                CompanyCity: DebitNote.company.locations[0].address.city,
                CompanyCityCode:
                  DebitNote.company.locations[0].address.cityCode,
                CompanyDepartament:
                  DebitNote.company.locations[0].address.state,
                CompanyDepartamentCode:
                  DebitNote.company.locations[0].address.stateCode,
                CompanyAddress:
                  DebitNote.company.locations[0].address.address_line1,
                CompanyEmail: 'csds@gmail.com',
                TaxLevelCode: DebitNote.client.fiscalResponsability.code,
                RegimenCode: DebitNote.client.regimenType.code,
                fiscalResponsabilities:
                  DebitNote.company.configuration.fiscalResponsabilities.items,
                regimenType: DebitNote.company.configuration.regimenType,
                TaxSchemeID: '01',
                TaxSchemeName: 'IVA',
                AdditionalAccountID: 1,
                CustomerID: DebitNote.client.nationalID,
                CustomerName: DebitNote.client.name
                  ? DebitNote.client.name + ' ' + DebitNote.client.lastname
                  : DebitNote.client.businessName,
                CustomerCity: DebitNote.client.locations[0].address.city,
                CustomerCityCode:
                  DebitNote.client.locations[0].address.cityCode,
                CustomerDeparment: DebitNote.client.locations[0].address.state,
                CustomerDeparmentCode:
                  DebitNote.client.locations[0].address.stateCode,
                CustomerAddress:
                  DebitNote.client.locations[0].address.address_line1,
                CustomerNITCode: DebitNote.client.idType.code,
                CustomerNIT: DebitNote.client.nationalID,
                CustomerEmail: DebitNote.client.contacts[0].email,
                PaymentMeansID: PaymentMeans[DebitNote.paymentWay],
                PaymentMeansCode: DebitNote.paymentMethod.code,
                PaymentDueDate: DebitNote.expiration,
                TaxableAmount: DebitNote.subtotal.toFixed(2).toString(),
                TaxAmount: DebitNote.totalVat.toFixed(2).toString(),
                Percent: '19.00',
                LineExtensionAmount: DebitNote.subtotal.toFixed(2).toString(),
                TaxExclusiveAmount: DebitNote.productsServices.items
                  .reduce((prev, { subtotal }) => subtotal + prev, 0)
                  .toFixed(2)
                  .toString(),
                TaxInclusiveAmount: DebitNote.total.toFixed(2).toString(),
                PayableAmount: DebitNote.total.toFixed(2).toString(),
              });

              const xml = JSON.stringify(Base64.encode(file));
              await axios.post(url, xml, {
                headers: {
                  'Content-Type': 'text/plain',
                  efacturaAuthorizationToken:
                    '17918fc5-62e2-466e-a578-f78b412358b8',
                },
              });

              setDebitNote((deb) => deb + 1);
              i += 1;
            }
          } catch (error) {
            console.log(error);
            console.log(error.response.data);

            if (error?.response.data.statusCode === 409) {
              toast.error(error?.response.data.errorMessage, {
                autoClose: false,
              });
              setError(error?.response.data.errorReason);
            }
          } finally {
            setLoading(false);
          }
        }}
      >
        {(formik) => (
          <React.Fragment>
            <Form onSubmit={formik.handleSubmit} loading={loading}>
              <Form.Field>
                <Label>Token de pruebas</Label>
                <Field
                  as={Input}
                  name="SetTestId"
                  placeholder="Token de prueba"
                />
                <ErrorMessage name="SetTestId">
                  {(msg) => (
                    <Label basic color="red" pointing>
                      {msg}
                    </Label>
                  )}
                </ErrorMessage>
              </Form.Field>
              <Form.Group widths="equal">
                <Form.Field>
                  <Label>Consecutivo Factura</Label>
                  <Field
                    as={Input}
                    name="invoiceNumber"
                    placeholder="Consecutivo Factura"
                  />
                  <ErrorMessage name="invoiceNumber">
                    {(msg) => (
                      <Label basic color="red" pointing>
                        {msg}
                      </Label>
                    )}
                  </ErrorMessage>
                </Form.Field>
                <Form.Field>
                  <Label>Consecutivo Nota credito</Label>
                  <Field
                    as={Input}
                    name="creditNumber"
                    placeholder="Consecutivo Nota credito"
                  />
                  <ErrorMessage name="creditNumber">
                    {(msg) => (
                      <Label basic color="red" pointing>
                        {msg}
                      </Label>
                    )}
                  </ErrorMessage>
                </Form.Field>
                <Form.Field>
                  <Label>Consecutivo Nota debito</Label>
                  <Field
                    as={Input}
                    name="debitNumber"
                    placeholder="Consecutivo Nota debito"
                  />
                  <ErrorMessage name="debitNumber">
                    {(msg) => (
                      <Label basic color="red" pointing>
                        {msg}
                      </Label>
                    )}
                  </ErrorMessage>
                </Form.Field>
              </Form.Group>
              <Button type="submit" color="teal">
                Empezar
              </Button>
            </Form>
            <Message attached="bottom" warning>
              <Icon name="help" />
              Los consecutivos son los numeros de donde se empezara la
              habilitacion, es decir SETT1, SETT2..., por si ya habia llevado un
              proceso de habilitacion anteriormente
            </Message>
          </React.Fragment>
        )}
      </Formik>
      <Loader active={loading} inline="centered" />
      <Divider />
      <List divided selection>
        <List.Item>
          <Progress
            percent={(invoice / 8) * 100}
            active
            success={invoice === 8}
            color="blue"
          >
            Facturas
          </Progress>
        </List.Item>
        <List.Item>
          <Progress
            percent={(creditNote / 1) * 100}
            active
            success={creditNote === 1}
            color="purple"
          >
            Notas credito
          </Progress>
        </List.Item>
        <List.Item>
          <Progress
            percent={(debitNote / 1) * 100}
            active
            success={debitNote === 1}
            color="pink"
          >
            Notas debito
          </Progress>
        </List.Item>

        <List.Item>
          <Label color="red" horizontal>
            Errores
          </Label>
          {error.length > 0 && (
            <List divided relaxed>
              {error.map((msg, idx) => (
                <List.Item key={idx}>
                  <List.Icon
                    name="remove circle"
                    size="large"
                    verticalAlign="middle"
                    color="red"
                  />
                  <List.Content>
                    <List.Header as="a">{msg}</List.Header>
                    <List.Description as="a">
                      {moment(new Date()).format('YYYY-MM-DD')}
                    </List.Description>
                  </List.Content>
                </List.Item>
              ))}
            </List>
          )}
        </List.Item>
      </List>
    </Segment>
  );
};

export default InvoiceGen;
