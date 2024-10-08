import { Organization } from "./organization";
import { Person } from "./person";

export type Order = {
    //acceptedOffer?: Offer;
    //billingAddress?: PostalAddress;
    broker?: Organization | Person;
    confirmationNumber?: string;
    customer?: Organization | Person;
    discount?: number | string;
    discountCode?: string;
    discountCurrency?: string;
    isGift?: boolean;
    //orderDate?: Date | DateTime;
    //orderDelivery?: ParcelDelivery;
    orderNumber?: string;
    //orderStatus?: OrderStatus;
    //orderedItem?: OrderItem | Product | Service;
    //partOfInvoice?: Invoice;
    //paymentDueDate?: Date | DateTime;
    //paymentMethod?: PaymentMethod;
    paymentMethodId?: string;
    paymentUrl?: URL;
    seller?: Organization | Person;
};  