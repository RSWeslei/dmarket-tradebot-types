

interface AddOfferLogInfo {
    message: string,
    title: string,
    purchasePrice: string,
    dmarketLowestPrice: string,
    minimumProfitablePrice: string,
    netPriceAfterFee: string,
    profit: string,
    error?: string,
}

interface AddOfferRequestBody {
    sellInventory: boolean;
    updateOffers: boolean;
    canSellAboveMinimumProfitPrice: boolean;
    canSellWithoutProfit: boolean;
}

interface UserData {
    items: UserItem[],
    totalPurchasePrice: number,
    totalSellPrice: number,
    totalProfit: number,
    totalProfitTradeLock: number
    totalSuggestedPrice: number
}

interface GetAllOffersData {
    offers: UserOffer[],
    totalRealPrice: number
}

interface GetInfoData {
    balance: UserBalanceResponse
}

export type {
    AddOfferLogInfo,
    GetAllOffersData,
    GetInfoData,
    AddOfferRequestBody,
    UserData
}