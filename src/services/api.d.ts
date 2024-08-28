import {GetInfoData, UserData} from '../interfaces.js'

export declare global {
    interface APIResponse<T> {
        data: T,
        message: string,
        type: 'success' | 'warning' | 'error'
    }

    type APIResponseEmpty = APIResponse<Record<string, never>>
    type APICreateUserOffers = APIResponse<CreateUserOffersResponse>
    type APIMarketItems = APIResponse<MarketItem[]>
    type APIUserTargets = APIResponse<UserTarget[]>
    type APIBuyOffers = APIResponse<BuyOffersResponse>
    type APIResponseUnknown = APIResponse<unknown>
    type APIResponseSales = APIResponse<Sales>
    type APIUserOffersCustom = APIResponse<UserOffersResponseCustom>
    type APIUserOffersDeleted = APIResponse<DeleteOffersResponse>
    type APIUserTargetsClosed = APIResponse<UserTargetsClosedResponse>
    type APIDeleteTargets = APIResponse<DeleteTargetsResponse>
    type APICreateTargets = APIResponse<CreateTargetsResponse>
    type APIUserData = APIResponse<UserData>
    type APIGetInfoData = APIResponse<GetInfoData>
    type APILogin = APIResponse<{token: string}>
}