import {Currency, GameID, OfferSortType, OfferStatus} from '../enums.js'

interface CreatedOffer {
    assetId: string,
    offerId: string
}

interface AssetOffer {
    OfferID: string,
    Price: Price,
    Fee: Price,
    CreatedDate: string
}

interface OffersStatus {
    additionalProp1: {
        started: boolean
    },
    additionalProp2: {
        started: boolean
    },
    additionalProp3: {
        started: boolean
    }
}

interface OfferPrice {
    amount: string,
    currency: Currency
}

enum TxType {
    Pending = 'TxPending',
    Success = 'TxSuccess',
    Failed = 'TxFailed'
}

export declare global {
    // GET /exchange/v1/offers-by-title
    interface ItemOffersResponse {
        objects: UserItem[];
        total: Total;
        cursor: string;
    }

    // POST /marketplace-api/v1/user-offers/create
    interface CreateUserOffers {
        CreateOffer: {
            AssetID: string,
            Price: Price
        },
        OfferID: string,
        Successful: boolean,
        Error: ErrorMessage
    }

    // POST /marketplace-api/v1/user-offers/create
    interface CreateUserOffersResponse {
        Result: CreateUserOffers[]
    }

    // POST /marketplace-api/v1/user-offers/create
    interface CreateOffersBody {
        Offers: {
            AssetID: string,
            Price: Price
        }[]
    }

    // GET /marketplace-api/v1/user-offers
    interface UserOffer {
        InspectInGame: string;
        AssetID: string,
        VariantID: string,
        Title: string,
        FloatValue: number,
        TradeLock: number,
        ImageURL: string,
        GameID: string,
        GameType: MarketplaceGameType,
        Location: MarketplaceAssetLocation,
        Withdrawable: boolean,
        Depositable: boolean,
        Tradable: boolean,
        Attributes: AssetAttribute[],
        Offer: AssetOffer,
        MarketPrice: Price,
        InstantPrice: Price,
        ClassID: string
    }

    // GET /marketplace-api/v1/user-offers
    interface UserOfferCustom extends UserOffer {
        BuyPrice: number,
        Profit: number,
        BoughtAt: number
        Exterior?: string,
    }

    // GET /marketplace-api/v1/user-offers
    interface UserOffersResponse {
        Items: UserOffer[],
        Total: number,
        Cursor: string
    }

    // GET /marketplace-api/v1/user-offers
    interface UserOffersResponseCustom extends UserOffersResponse {
        TotalSalePrice: number,
        TotalProfit: number
    }

    // GET /marketplace-api/v1/user-offers
    interface UserOffersParams {
        GameID?: GameID,
        Status?: OfferStatus,
        SortType?: OfferSortType,
        'BasicFilters.PriceFrom'?: number,
        'BasicFilters.PriceTo'?: number,
        'BasicFilters.Currency'?: Currency,
        Offset?: string,
        Limit?: string,
        Cursor?: string
    }

    // GET /marketplace-api/v1/user-offers/closed
    interface UserOfferClosed {
        OfferID: string,
        TargetID: string,
        AssetID: string,
        Price: Price,
        CurrencyCode: string,
        Amount: string,
        Title: string,
        Fee: TradeFeeData,
        OfferCreatedAt: string,
        OfferClosedAt: string
    }

    // GET /marketplace-api/v1/user-offers/closed
    interface UserClosedOffersResponse {
        Trades: UserOfferClosed[];
        Total: string;
    }

    // GET /marketplace-api/v1/user-offers/closed
    interface UserClosedOffersParams {
        Offset?: string,
        Limit: string
        OrderDir?: 'asc' | 'desc'
    }

    // DELETE /exchange/v1/offers
    interface DeleteOffersResponse {
        created: CreatedOffer[],
        fail: [string],
        locked: [string],
        success: [string]
    }

    // DELETE /exchange/v1/offers
    interface DeleteOffersBody {
        force: boolean,
        objects: {
            itemId: string,
            offerId: string,
            price: OfferPrice
        }[]
    }

    // PATCH /exchange/v1/offers-buy
    interface BuyOffersResponse {
        dmOffersFailReason: {
            code: string
        },
        dmOffersStatus: OffersStatus,
        p2pOffersStatus: OffersStatus,
        orderId: string,
        status: TxType,
        txId: string
    }

    // PATCH /exchange/v1/offers-buy
    interface BuyOffersBody {
        offers: {
            offerId: string,
            price: OfferPrice,
            type: 'dmarket' | 'p2p'
        }[]
    }
}

