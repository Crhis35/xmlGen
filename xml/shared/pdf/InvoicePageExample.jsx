import React, { useEffect } from 'react';
import Document from './Document';
import _ from 'lodash';
import { NumberAsString } from '../../../utils/ConvertNumToString';
import { Font, StyleSheet, Page, View, Text, Image } from '@react-pdf/renderer';
import { verificationDigit } from '../../../utils/formulas';

Font.register({
  family: 'Nunito',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/nunito/v12/XRXV3I6Li01BKofINeaE.ttf' },
    {
      src: 'https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofA6sKUYevN.ttf',
      fontWeight: 600,
    },
  ],
});

const styles = StyleSheet.create({
  page: { padding: 30 },
  table: {
    fontSize: 10,
    width: 520,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    flexWrap: 'nowrap',
    alignItems: 'stretch',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'stretch',
    flexWrap: 'nowrap',
    alignItems: 'stretch',
    flexGrow: 1,
  },
  cell: {
    flexGrow: 1,
    flexShrink: 1,
    alignSelf: 'stretch',
    /*   borderBottom: '0.3px solid #000', */
    marginBottom: '5px',
    fontSize: '8px',
  },
  header: {
    backgroundColor: '#eee',
  },
  headerText: {
    fontSize: '9px',
    fontWeight: 1200,
    color: '#1a245c',
  },
  genText: {
    fontSize: '8px',
    color: '#000000',
    marginTop: '7px',
    marginBottom: '7px',
  },

  right: {
    position: 'absolute',
    top: '15%',
    left: '60%',
  },
  image: {
    position: 'absolute',
    width: '100px',
    height: '50px',
    top: '0px',
    left: '10px',
  },
  waterMark: {
    position: 'absolute',
    top: '30%',
    left: '15%',
    opacity: '0.3',
    color: '#CDCDCD',
    transform: 'rotate(-45deg)',
    letterSpacing: '7px',
  },
});

const InvoicePageExample = ({
  data: values,
  pdfMode,
  logo,
  currentUser,
  discountTotal,
  DateExpedicion2,
  UrlQR2,
}) => {
  useEffect(() => {}, [
    currentUser,
    values.invoiceClientId,
    values.invoiceOperationTypeId,
    values.invoicePaymentMethodId,
    values.item,
  ]);
  return (
    <Document pdfMode={pdfMode}>
      <Page style={styles.page} size="A4" wrappdfMode={pdfMode}>
        <View style={styles.waterMark}>
          <Text style={{ fontSize: '60px' }}>BORRADOR</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              textAlign: 'left',
              width: '25%',
            }}
          >
            {logo !== '' && <Image style={styles.image} src={logo} />}
          </View>

          <View
            style={{
              textAlign: 'center',
              width: '50%',
            }}
          >
            <Text style={[styles.headerText]} pdfMode={pdfMode}>
              {_.upperCase(currentUser.company.name)}
            </Text>
            <Text
              style={[styles.headerText, { marginTop: '5px' }]}
              pdfMode={pdfMode}
            >
              {'NIT ' +
                currentUser.company.TAXID +
                '-' +
                verificationDigit(currentUser.company.TAXID.toString())}
            </Text>
            <Text
              style={[styles.headerText, { marginTop: '5px' }]}
              pdfMode={pdfMode}
            >
              {currentUser.email && currentUser.email}
            </Text>
            <Text
              style={[styles.headerText, { marginTop: '5px' }]}
              pdfMode={pdfMode}
            >
              {values.company.locations[0].phoneNumbers[0] &&
                values.company.locations[0].phoneNumbers[0].countryCode +
                  ' ' +
                  values.company.locations[0].phoneNumbers[0].number}
              {values.extraFieldsFooter &&
                ' - ' + values.extraFieldsFooter[0].name}
            </Text>
            <Text
              style={[styles.headerText, { marginTop: '5px' }]}
              pdfMode={pdfMode}
            >
              {_.capitalize(values.company.locations[0].address.address_line1) +
                ', ' +
                _.capitalize(values.company.locations[0].address.city) +
                ', ' +
                _.capitalize(values.company.locations[0].address.state) +
                ', ' +
                _.capitalize(values.company.locations[0].address.country)}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'col',

              width: '26%',
            }}
          >
            {values.type === 'default' && (
              <Text
                style={[
                  styles.headerText,
                  { fontSize: '10px', textAlign: 'center' },
                ]}
                pdfMode={pdfMode}
              >
                {'No. ' + values.invoiceNumber}
              </Text>
            )}
            {values.type !== 'default' && (
              <Text
                style={[
                  styles.headerText,
                  { fontSize: '10px', textAlign: 'center' },
                ]}
                pdfMode={pdfMode}
              >
                {'No. ' + values.noteNumber}
              </Text>
            )}
          </View>
        </View>
        <View style={{ width: '100%' }}>
          <Text
            style={[
              styles.headerText,
              { marginTop: '5px', textAlign: 'center' },
            ]}
            pdfMode={pdfMode}
          >
            {values.company.configuration.fiscalResponsabilities.items[0]
              .fiscalResponsability.name ===
            'No Aplica (Ninguna de las anteriores)'
              ? values.company.configuration.regimenType.name
              : values.company.configuration.regimenType.name +
                ' - ' +
                values.company.configuration.fiscalResponsabilities.items[0]
                  .fiscalResponsability.name}
          </Text>
        </View>
        <View
          style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}
          pdfMode={pdfMode}
        >
          <View style={{ width: '70%' }} pdfMode={pdfMode}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={[styles.headerText, { width: '15%' }]}>Cliente</Text>

              <Text
                style={[
                  styles.genText,
                  { marginTop: 0, marginBottom: 0, width: '80%' },
                ]}
                pdfMode={pdfMode}
              >
                {values.client.businessName !== ''
                  ? values.client.businessName
                  : values.client.name + ' ' + values.client.lastname}
              </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={[styles.headerText, { width: '15%' }]}>Nit</Text>

              <Text
                style={[styles.genText, { marginTop: 0, marginBottom: 0 }]}
                pdfMode={pdfMode}
              >
                {values.client.nationalID && values.client.nationalID}
              </Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={[styles.headerText, { width: '15%' }]}>
                Dirección
              </Text>

              <Text
                style={[
                  styles.genText,
                  { marginTop: 0, marginBottom: 0, width: '80%' },
                ]}
                pdfMode={pdfMode}
              >
                {_.capitalize(
                  values.client.locations[0].address.address_line1
                ) +
                  ', ' +
                  _.capitalize(values.client.locations[0].address.city) +
                  ', ' +
                  _.capitalize(values.client.locations[0].address.state) +
                  ', ' +
                  _.capitalize(values.client.locations[0].address.country)}
              </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={[styles.headerText, { width: '15%' }]}>
                Telefono
              </Text>

              <Text
                style={[styles.genText, { marginTop: 0, marginBottom: 0 }]}
                pdfMode={pdfMode}
              >
                {values.client.contacts[0].phoneNumber &&
                  values.client.contacts[0].phoneNumber.countryCode +
                    ' ' +
                    values.client.contacts[0].phoneNumber.number}
              </Text>
            </View>
            {values.extraFieldsHeader?.length > 0 && (
              <View style={{ marginTop: '5px' }}>
                {values.extraFieldsHeader.map((item, idx) => (
                  <Text
                    key={idx}
                    style={[styles.genText, { marginTop: 0, marginBottom: 0 }]}
                  >
                    {item.name}
                  </Text>
                ))}
              </View>
            )}
          </View>

          <View style={{ width: '30%' }}>
            <View className="w-45" pdfMode={pdfMode}>
              <View className="flex mb-5" pdfMode={pdfMode}>
                <View className="w-40" pdfMode={pdfMode}>
                  <Text style={[styles.headerText]} pdfMode={pdfMode}>
                    Fecha de expedición
                  </Text>
                  {/* <Text style={[styles.headerText]} pdfMode={pdfMode}>
                    (AA/MM/DD)
                  </Text> */}
                </View>
                <View className="w-60" pdfMode={pdfMode}>
                  <Text style={[styles.genText]} pdfMode={pdfMode}>
                    {values.date}
                  </Text>
                </View>
              </View>
              <View className="flex mb-5" pdfMode={pdfMode}>
                <View className="w-40" pdfMode={pdfMode}>
                  <Text style={[styles.headerText]} pdfMode={pdfMode}>
                    Fecha de vencimiento
                  </Text>
                  {/*  <Text style={[styles.headerText]} pdfMode={pdfMode}>
                    (AA/MM/DD)
                  </Text> */}
                </View>
                <View className="w-60" pdfMode={pdfMode}>
                  <Text style={[styles.genText]} pdfMode={pdfMode}>
                    {values.expiration}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.table, { marginTop: '15px' }]} pdfMode={pdfMode}>
          <View style={[styles.row, styles.header]}>
            <Text style={[styles.headerText, styles.cell, { flexBasis: '5%' }]}>
              ID
            </Text>
            <Text
              style={[styles.headerText, styles.cell, { flexBasis: '20%' }]}
            >
              Ítem
            </Text>
            <Text
              style={[styles.headerText, styles.cell, { flexBasis: '10%' }]}
            >
              Unidad
            </Text>
            <Text
              style={[styles.headerText, styles.cell, { flexBasis: '12%' }]}
            >
              Precio
            </Text>
            <Text
              style={[styles.headerText, styles.cell, { flexBasis: '10%' }]}
            >
              Cantidad
            </Text>
            <Text
              style={[styles.headerText, styles.cell, { flexBasis: '10%' }]}
            >
              % retencion
            </Text>
            <Text
              style={[styles.headerText, styles.cell, { flexBasis: '10%' }]}
            >
              % descuento
            </Text>
            <Text
              style={[styles.headerText, styles.cell, { flexBasis: '12%' }]}
            >
              Iva
            </Text>
            <Text
              style={[styles.headerText, styles.cell, { flexBasis: '12%' }]}
            >
              Total
            </Text>
          </View>

          {values.productsServices.items.map((itx, index) => (
            <View style={[styles.row]} key={index}>
              <Text style={[styles.cell, { flexBasis: '5%' }]}>
                {index + 1}
              </Text>
              <Text style={[styles.cell, { flexBasis: '20%' }]}>
                {itx.productService.name + '\n'}
                {itx?.comment}
              </Text>
              <Text style={[styles.cell, { flexBasis: '10%' }]}>
                {itx.productService.unit.name}
              </Text>
              <Text style={[styles.cell, { flexBasis: '12%' }]}>
                {itx.unitPrice.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </Text>
              <Text style={[styles.cell, { flexBasis: '10%' }]}>
                {itx.quantity}
              </Text>
              <Text style={[styles.cell, { flexBasis: '10%' }]}>
                {itx.retentionPercentage}
              </Text>
              <Text style={[styles.cell, { flexBasis: '10%' }]}>
                {itx.discountPercentage}
              </Text>
              <Text style={[styles.cell, { flexBasis: '12%' }]}>
                {itx.vat.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </Text>
              <Text style={[styles.cell, { flexBasis: '12%' }]}>
                {itx.total.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </Text>
            </View>
          ))}
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ marginTop: '20px', width: '50%' }} pdfMode={pdfMode}>
            <Text style={[styles.headerText, styles.header, { width: '20%' }]}>
              ReteIVA
            </Text>
            <Text style={styles.genText}>
              {'$ ' + new Intl.NumberFormat('de-DE').format(values.reteIVA)}
            </Text>

            <Text style={[styles.headerText, styles.header, { width: '20%' }]}>
              ReteICA
            </Text>
            <Text style={styles.genText}>
              {'$ ' + new Intl.NumberFormat('de-DE').format(values.reteICA)}
            </Text>
            {values.purchaseOrder && (
              <>
                <Text
                  style={[styles.headerText, styles.header, { width: '20%' }]}
                >
                  Nro. Orden
                </Text>
                <Text style={styles.genText}>
                  {values.purchaseOrder?.orderID}
                </Text>
              </>
            )}
          </View>

          <View style={{ marginTop: '20px', width: '50%' }}>
            {/*  <Text style={{ marginTop: '20px' }}></Text> */}
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={[styles.headerText, { width: '50%' }]}>
                Descuento
              </Text>
              <Text
                style={[
                  styles.genText,
                  { width: '50%', marginTop: 0, marginBottom: 0 },
                ]}
              >
                {discountTotal?.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '10px',
              }}
            >
              <Text
                style={[styles.headerText, { width: '50%' }]}
                pdfMode={pdfMode}
              >
                SubTotal
              </Text>
              <Text
                style={[
                  styles.genText,
                  { width: '50%', marginTop: 0, marginBottom: 0 },
                ]}
                pdfMode={pdfMode}
              >
                {values.subtotal.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '10px',
              }}
            >
              <Text
                style={[styles.headerText, { width: '50%' }]}
                pdfMode={pdfMode}
              >
                Iva
              </Text>
              <Text
                style={[
                  styles.genText,
                  { width: '50%', marginTop: 0, marginBottom: 0 },
                ]}
                pdfMode={pdfMode}
              >
                {values.totalVat.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '10px',
              }}
            >
              <Text
                style={[styles.headerText, { width: '50%' }]}
                pdfMode={pdfMode}
              >
                Total retencion
              </Text>
              <Text
                style={[
                  styles.genText,
                  { width: '50%', marginTop: 0, marginBottom: 0 },
                ]}
                pdfMode={pdfMode}
              >
                {values.totalRetention.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </Text>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '10px',
              }}
            >
              <Text
                style={[styles.headerText, styles.header, { width: '50%' }]}
                pdfMode={pdfMode}
              >
                Total
              </Text>
              <Text
                style={[
                  styles.genText,
                  { width: '50%', marginTop: 0, marginBottom: 0 },
                ]}
                pdfMode={pdfMode}
              >
                {values.total?.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}
        >
          <Text style={[styles.headerText, { width: '15%' }]}>
            Valor operación :
          </Text>

          <Text style={[styles.headerText, styles.header]} pdfMode={pdfMode}>
            {_.capitalize(NumberAsString(values.total))}
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '20px',
          }}
        >
          <View
            style={{
              width: '100px',
              height: '100px',
            }}
          ></View>
          <View style={{ marginLeft: '5px' }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={[styles.headerText, { width: '45%' }]}>Moneda</Text>

              <Text
                style={[styles.genText, { marginTop: 0, marginBottom: 0 }]}
                pdfMode={pdfMode}
              >
                {values.currency}
              </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={[styles.headerText, { width: '40%' }]}>
                Fecha y hora de generación
              </Text>

              <Text
                style={[styles.genText, { marginTop: 0, marginBottom: 0 }]}
                pdfMode={pdfMode}
              ></Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={[styles.headerText, { width: '40%' }]}>
                Fecha y hora de expedición
              </Text>

              <Text
                style={[styles.genText, { marginTop: 0, marginBottom: 0 }]}
                pdfMode={pdfMode}
              ></Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={[styles.headerText, { width: '45%' }]}>
                Tipo de factura
              </Text>

              <Text
                style={[styles.genText, { marginTop: 0, marginBottom: 0 }]}
                pdfMode={pdfMode}
              >
                {values.national === true
                  ? 'Factura de venta nacional'
                  : 'Factura de Exportacion'}
              </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={[styles.headerText, { width: '45%' }]}>
                Tipo de pago
              </Text>

              <Text
                style={[styles.genText, { marginTop: 0, marginBottom: 0 }]}
                pdfMode={pdfMode}
              >
                {values.paymentWay}
              </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={[styles.headerText, { width: '45%' }]}>
                Metodo de pago
              </Text>

              <Text
                style={[styles.genText, { marginTop: 0, marginBottom: 0 }]}
                pdfMode={pdfMode}
              >
                {values.paymentMethod.name}
              </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={[styles.headerText, { width: '45%' }]}>
                Tipo de operacion
              </Text>

              <Text
                style={[styles.genText, { marginTop: 0, marginBottom: 0 }]}
                pdfMode={pdfMode}
              >
                {values.operationType.name}
              </Text>
            </View>
          </View>
        </View>

        {values.type === 'default' && (
          <>
            {values.termsAndConditions !== '' && (
              <View style={{ marginTop: '8px' }} pdfMode={pdfMode}>
                <Text style={styles.headerText}>Terminos y condiciones</Text>

                <Text style={styles.genText}>{values.termsAndConditions}</Text>
              </View>
            )}

            <Text
              style={[styles.genText, { marginTop: '10px', fontSize: '8px' }]}
              pdfMode={pdfMode}
            >
              Esta factura se asimila en todos sus efectos a una letra de cambio
              de conformidad con el Art. 774 del código de comercio. Autorizo
              que en caso de incumplimiento de esta obligación sea reportado a
              las centrales de riesgo, se cobraran intereses por mora.
            </Text>
            {values.comments !== '' && (
              <View style={{ marginTop: '8px' }} pdfMode={pdfMode}>
                <Text style={styles.headerText}>Comentarios</Text>

                <Text style={styles.genText}>{values.comments}</Text>
              </View>
            )}
          </>
        )}

        <View style={{ position: 'relative', display: 'flex', bottom: '20%' }}>
          <Text
            style={{
              transform: 'rotate(-90deg)',
              fontSize: '9px',
              position: 'absolute',
              right: '-36%',
              color: '#9a9a9a',
            }}
          >
            Proveedor tecnológico: Cadena S.A. - NIT 890930534. Software: Finppi
            - NIT 901441896.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePageExample;
