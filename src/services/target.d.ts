import {Currency, FloatPartValue, GameID, Phase, TargetSortType, TargetStatus} from '../enums.js'
import {ErrorMessage} from './types.js'

enum GameType {
    BlockChain = 'GameTypeBlockchain',
    Steam = 'GameTypeSteam'
}

interface Attrs {
    paintSeed?: string,
    phase?: Phase,
    floatPartValue: FloatPartValue
}

export declare global {
    // GET /marketplace-api/v1/user-targets
    interface UserTarget {
        OfferID: string,
        TargetID: string,
        AssetID: string,
        Price: Price,
        Amount: string,
        Title: string,
        Status: TargetStatus,
        GameID: string,
        GameType: GameType,
        Attributes?: AssetAttribute[]
    }

    interface UserTargetCustom extends UserTarget {
        Image: string,
        Exterior: string
    }

    // GET /marketplace-api/v1/user-targets
    interface UserTargetsResponse {
        Items: UserTarget[];
        Total: string;
        Cursor: string;
    }

    // GET /marketplace-api/v1/user-targets
    interface GetUserTargetsParams {
        GameID?: GameID,
        'BasicFilters.PriceFrom'?: number,
        'BasicFilters.PriceTo'?: number,
        'BasicFilters.Currency'?: Currency,
        'BasicFilters.Title'?: string,
        'BasicFilters.TargetID'?: string,
        'BasicFilters.Status'?: TargetStatus,
        SortType?: TargetSortType,
        Offset?: string,
        Limit?: 100 | number,
        Cursor?: string
    }

    // GET /marketplace-api/v1/user-targets/closed
    interface UserTargetClosed {
        OfferID: string,
        TargetID: string,
        AssetID: string,
        Price: Price,
        Amount: number,
        Title: string,
        ClosedAt: number,
    }

    // GET /marketplace-api/v1/user-targets/closed
    interface UserTargetsClosedResponse {
        Trades: UserTargetClosed[];
        Total: number;
        Cursor: string;
    }

    // GET /marketplace-api/v1/user-targets/closed
    interface UserClosedTargetsParams {
        Offset?: string,
        Limit?: string,
        OrderDir?: 'asc' | 'desc'
    }

    // POST /marketplace-api/v1/user-targets/delete
    interface DeleteTargetsResponse {
        Result: [{
            DeleteTarget: {
                TargetID: string
            },
            Successful: boolean,
            Error?: ErrorMessage
        }]
    }

    // POST /marketplace-api/v1/user-targets/delete
    interface DeleteTargetsBody {
        Targets: {
            TargetID: string
        }[]
    }

    // POST /marketplace-api/v1/user-targets/create
    interface CreateTarget {
        Amount: string,
        Price: Price,
        Title: string,
        Attrs?: Attrs
    }

    // POST /marketplace-api/v1/user-targets/create
    interface CreateTargetsBody {
        GameID: string,
        Targets: CreateTarget[]
    }

    // POST /marketplace-api/v1/user-targets/create
    interface CreateTargetsResponse {
        Result: [
            {
                CreateTarget: {
                    Amount: string,
                    Price: Price,
                    Title: string,
                    Attributes?: AssetAttribute[],
                    Attrs: Attrs
                },
                TargetID: string,
                Successful: boolean,
                Error?: ErrorMessage
            }
        ]
    }

    // GET /marketplace-api/v1/targets-by-title/{game_id}/{title}
    interface GetTargetsByTitleResponse {
        orders: TargetOrder[];
    }

    // GET /marketplace-api/v1/targets-by-title/{game_id}/{title}
    interface TargetOrder {
        amount: string,
        price: string,
        title: string,
        attributes: Attrs
    }
}