enum OperationType {
    Offer = 'Offer',
    Order = 'Order'
}

export declare global {
    // GET /trade-aggregator/v1/last-sales
    interface LastSale {
        price: string;
        date: string;
        txOperationType: OperationType;
    }

// GET /trade-aggregator/v1/last-sales
    interface LastSalesResponse {
        sales: LastSale[];
    }
}