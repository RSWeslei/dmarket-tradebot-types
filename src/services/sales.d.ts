import {OperationType} from '../enums.js'

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

    // GET /trade-aggregator/v1/last-sales
    interface GetLastSalesParams {
        gameId: string;
        title: string;
        filters?: Array<'exterior[]=factory new' | 'phase[]=phase-1'>; // TODO: Add more filters
        txOperationType?: Array<OperationType>;
        Limit?: string;
        offset?: string;
    }
}