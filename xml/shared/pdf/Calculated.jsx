import React, { useEffect, useState } from 'react';
import Text from './Text';
import View from './View';

const Calculated = ({ setFieldValue, pdfMode, watch, values }) => {
  const [iva, setIva] = useState(0);
  const [dis, setDiscount] = useState(0);
  const [vals, setVals] = useState({
    subtotal: values.subtotal,
    total: values.total,
    totalRetention: values.totalRetention,
    totalVat: values.totalVat || 0,
  });
  useEffect(() => {
    const subscription = watch((values, { name: Names, type }) => {
      const name = String(Names);

      if (
        name &&
        (name.includes('unitPrice') ||
          name.includes('quantity') ||
          name.includes('retentionPercentage') ||
          name.includes('vatPercentage') ||
          name.includes('discountPercentage') ||
          name.includes('discountPercentage'))
      ) {
        let val = 0;
        let subVal = 0;
        let ivaVal = 0;
        let retentionVal = 0;
        let disc = 0;
        if (values.item?.length > 0) {
          for (const [idx, serv] of values.item.entries()) {
            const servQuanity = Number(
              serv.quantity.toString()?.replace(',', '.')
            );
            const percentageDiscount =
              serv.discountPercentage / 100 > 0
                ? serv.discountPercentage / 100
                : 0;
            let discount = 0;

            if (percentageDiscount !== 0) {
              setFieldValue(`item.${idx}.discounted`, true);
              discount = serv.unitPrice * 1 * percentageDiscount;
            }

            const subTotal = (serv.unitPrice - discount) * servQuanity;

            const retention = (subTotal * serv.retentionPercentage) / 100;
            discount *= servQuanity;

            const validateIva =
              serv.vatPercentage >= 0 ? serv.vatPercentage : 0;
            const iva =
              subTotal === 0
                ? (validateIva / 100) * discount
                : (validateIva / 100) * subTotal;

            subVal += subTotal;
            val += subTotal + iva;
            ivaVal += iva;
            disc += discount;
            if (Number(serv.vat) >= 0) {
              setFieldValue(`item.${idx}.taxed`, true);
            } else {
              setFieldValue(`item.${idx}.taxed`, false);
            }

            setFieldValue(`item.${idx}.retention`, retention);
            setFieldValue(`item.${idx}.subtotal`, subTotal);
            setFieldValue(
              `item.${idx}.vat`,
              serv.vatPercentage === -1 ? serv.vatPercentage : iva
            );
            setFieldValue(`item.${idx}.total`, subTotal + iva);
            setFieldValue(`item.${idx}.discount`, discount);
            retentionVal += retention;
          }
        }
        setFieldValue('total', val);
        setFieldValue('subtotal', subVal);
        setFieldValue('totalVat', ivaVal);
        setFieldValue('totalRetention', retentionVal);
        setIva(ivaVal);
        setDiscount(disc);
      } else {
        setVals(values);
        console.log(values);
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [setFieldValue, iva, watch]);

  return (
    <View className="w-50 mt-20" pdfMode={pdfMode}>
      <View className="flex" pdfMode={pdfMode}>
        <View className="w-50 p-5" pdfMode={pdfMode}>
          <Text className="right dark" pdfMode={pdfMode}>
            Descuento
          </Text>
        </View>
        <View className="w-50 p-5" pdfMode={pdfMode}>
          <Text className="right dark" pdfMode={pdfMode}>
            {dis.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Text>
        </View>
      </View>

      <View className="flex" pdfMode={pdfMode}>
        <View className="w-50 p-5" pdfMode={pdfMode}>
          <Text className="right dark" pdfMode={pdfMode}>
            SubTotal
          </Text>
        </View>
        <View className="w-50 p-5" pdfMode={pdfMode}>
          <Text className="right dark" pdfMode={pdfMode}>
            {vals.subtotal.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Text>
        </View>
      </View>

      <View className="flex" pdfMode={pdfMode}>
        <View className="w-50 p-5" pdfMode={pdfMode}>
          <Text className="right dark" pdfMode={pdfMode}>
            Iva
          </Text>
        </View>
        <View className="w-50 p-5" pdfMode={pdfMode}>
          <Text className="right dark" pdfMode={pdfMode}>
            {vals.totalVat?.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Text>
        </View>
      </View>
      <View className="flex" pdfMode={pdfMode}>
        <View className="w-50 p-5" pdfMode={pdfMode}>
          <Text className="right dark" pdfMode={pdfMode}>
            Total retención
          </Text>
        </View>
        <View className="w-50 p-5" pdfMode={pdfMode}>
          <Text className="right dark" pdfMode={pdfMode}>
            {vals.totalRetention?.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Text>
        </View>
      </View>

      <View className="flex bg-gray p-5" pdfMode={pdfMode}>
        <View className="w-50 p-5" pdfMode={pdfMode}>
          <Text className="right dark" pdfMode={pdfMode}>
            Total
          </Text>
        </View>
        <View className="w-50 p-5 flex" pdfMode={pdfMode}>
          <Text className="right dark w-auto" pdfMode={pdfMode}>
            {vals.total?.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Calculated;
