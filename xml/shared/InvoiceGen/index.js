import { invoiceGen, noteGen } from './data';

const PaymentMeans = {
  Contado: 1,
  Credito: 2,
};

export const XMLNote = (Note, config) => {
  const { CUFE, file } = noteGen({
    NoteNumber: Note.noteNumber,
    type: Note.type,
    CUFE: Note.CUFE || '',
    NoteTypeCode: Note.type === 'debitNote' ? 92 : 91, //credito 91, debito 92
    Prefix: config.invoicePrefix || '',
    PrefixNote: Note.noteNumber.replace(/[0-9]/g, ''),
    From: config.rangeInit,
    To: config.rangeEnd,
    PIN: '75315',
    IssueDate: Note.date,
    IssueTime: Note.hour,
    CompanyName: Note.company.name,
    CustomizationID: Note.operationType.code,
    CompanyNIT: Note.company.TAXID,
    InvoiceNumber: Note.invoiceNumber,
    InvoiceTypeCode: '01',
    items: Note.productsServices.items,
    InvoicePeriodStart: Note.date,
    InvoicePeriodEnd: Note.expiration,
    ClTec: config.technicalKey,
    CompanyPostCode: Note.company.locations[0].address.cityCode,
    CompanyCity: Note.company.locations[0].address.city,
    CompanyCityCode: Note.company.locations[0].address.cityCode,
    CompanyDepartament: Note.company.locations[0].address.state,
    CompanyDepartamentCode: Note.company.locations[0].address.stateCode,
    CompanyAddress: Note.company.locations[0].address.address_line1,
    CompanyEmail: config.currentUser.email,
    TaxLevelCode: Note.client.fiscalResponsability.code,
    RegimenCode: Note.client.regimenType.code,
    fiscalResponsabilities:
      Note.company.configuration.fiscalResponsabilities.items,
    regimenType: Note.company.configuration.regimenType,
    TaxSchemeID: '01',
    TaxSchemeName: 'IVA',
    AdditionalAccountID: Note.client.personType === 'juridica' ? '1' : '2',
    ProfileExecutionID: 1,
    CustomerID: Note.client.nationalID,
    CustomerName: Note.client.name
      ? Note.client.name + ' ' + Note.client.lastname
      : Note.client.businessName,
    CustomerCountry: Note.client.locations[0].address.country,
    CustomerCity: Note.client.locations[0].address.city,
    CustomerCityCode: Note.client.locations[0].address.cityCode,
    CustomerDeparment: Note.client.locations[0].address.state,
    CustomerDeparmentCode: Note.client.locations[0].address.stateCode,
    CustomerAddress: Note.client.locations[0].address.address_line1,
    CustomerNITCode: Note.client.idType.code,
    CustomerNIT: Note.client.nationalID,
    CustomerEmail: Note.client.contacts[0].email,
    PaymentMeansID: PaymentMeans[Note.paymentWay],
    PaymentMeansCode: Note.paymentMethod.code,
    PaymentDueDate: Note.expiration,
    TaxableAmount: Note.subtotal.toFixed(2).toString(),
    TaxAmount: Note.totalVat.toFixed(2).toString(),
    Percent: Note.totalVat === 0 ? '0.00' : '19.0', //TODO:REVISAR
    LineExtensionAmount: Note.subtotal.toFixed(2).toString(),
    TaxExclusiveAmount: TaxExclusiveAmount(Note.productsServices.items),
    TaxInclusiveAmount: Note.total.toFixed(2).toString(),
    PayableAmount: Note.total.toFixed(2).toString(),
    Currency: Note.currency,
  });
  return { CUFE, file };
};

export const XMLInvoice = (Invoice, config) => {
  const doc = {
    InvoiceAuthorization: config.invoicesResolution,
    StartDate: config.initDate,
    EndDate: config.endDate,
    Prefix: config.invoicePrefix || '',
    From: config.rangeInit,
    To: config.rangeEnd,
    SoftwareID: '49fab599-4556-4828-a30b-852a910c5bb1',
    PIN: '75315',
    IssueDate: Invoice.date,
    IssueTime: Invoice.hour,
    CompanyName: Invoice.company.name,
    CustomizationID: Invoice.operationType.code,
    CompanyNIT: Invoice.company.TAXID,
    InvoiceNumber: Invoice.invoiceNumber,
    InvoiceTypeCode: '01',
    items: Invoice.productsServices.items,
    InvoicePeriodStart: Invoice.date,
    InvoicePeriodEnd: Invoice.expiration,
    ProfileExecutionID: 1,
    ClTec: config.technicalKey,
    CompanyPostCode: Invoice.company.locations[0].address.cityCode,
    CompanyCity: Invoice.company.locations[0].address.city,
    CompanyCityCode: Invoice.company.locations[0].address.cityCode,
    CompanyDepartament: Invoice.company.locations[0].address.state,
    CompanyDepartamentCode: Invoice.company.locations[0].address.stateCode,
    CompanyAddress: Invoice.company.locations[0].address.address_line1,
    CompanyEmail: config.currentUser.email,
    TaxLevelCode: Invoice.client.fiscalResponsability.code,
    RegimenCode: Invoice.client.regimenType.code,
    fiscalResponsabilities:
      Invoice.company.configuration.fiscalResponsabilities.items,
    regimenType: Invoice.company.configuration.regimenType,
    TaxSchemeID: '01',
    TaxSchemeName: 'IVA',
    AdditionalAccountID: Invoice.client.personType === 'juridica' ? '1' : '2',
    CustomerID: Invoice.client.nationalID,
    CustomerName: Invoice.client.name
      ? Invoice.client.name + ' ' + Invoice.client.lastname
      : Invoice.client.businessName,
    CustomerCountry: Invoice.client.locations[0].address.country,
    CustomerCity: Invoice.client.locations[0].address.city,
    CustomerCityCode: Invoice.client.locations[0].address.cityCode,
    CustomerDeparment: Invoice.client.locations[0].address.state,
    CustomerDeparmentCode: Invoice.client.locations[0].address.stateCode,
    CustomerAddress: Invoice.client.locations[0].address.address_line1,
    CustomerNITCode: Invoice.client.idType.code,
    CustomerNIT: Invoice.client.nationalID,
    CustomerEmail: Invoice.client.contacts[0].email,
    PaymentMeansID: PaymentMeans[Invoice.paymentWay],
    PaymentMeansCode: Invoice.paymentMethod.code,
    PaymentDueDate: Invoice.expiration,
    TaxableAmount: Invoice.subtotal.toFixed(2).toString(),
    TaxAmount: Invoice.totalVat.toFixed(2).toString(),
    Percent: Invoice.totalVat === 0 ? '0.00' : '19.00', //TODO:REVISAR
    LineExtensionAmount: Invoice.subtotal.toFixed(2).toString(),
    TaxExclusiveAmount: TaxExclusiveAmount(Invoice.productsServices.items),
    TaxInclusiveAmount: Invoice.total.toFixed(2).toString(),
    PayableAmount: Invoice.total.toFixed(2).toString(),
    Currency: Invoice.currency,
    ExchangeRate: Invoice.exchangeRate,
    OrderReferenceID: Invoice.purchaseOrder
      ? Invoice.purchaseOrder.orderID
      : '',
  };
  const { CUFE, file } = invoiceGen(doc);
  console.log(file);
  return { CUFE, file };
};
const TaxExclusiveAmount = (items) => {
  let acum = 0;

  for (let index = 0; index < items.length; index++) {
    if (items[index].taxed && items[index].vat > -1) {
      acum += items[index].subtotal;
    }
  }
  return acum.toFixed(2).toString();
};
