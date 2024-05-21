import {Currency, GameID, TreeFilters} from '../enums.js'

// START GET /exchange/v1/user/items
enum ExtraDocType {
    ViewAtSteam = 'viewAtSteam',
    Quality = 'quality',
    Exterior = 'exterior',
    Category = 'category',
    TradeLock = 'tradeLock',
    TradeLockDuration = 'tradeLockDuration',
    Stickers = 'stickers',
    ItemType = 'itemType',
    FloatValue = 'floatValue',
    InspectInGame = 'inspectInGame',
    TagName = 'tagName',
    Hero = 'hero',
    Gems = 'gems',
    Rarity = 'rarity',
    SerialNumber = 'serialNumber',
    Ability = 'ability',
    Videos = 'videos',
    Subscribers = 'subscribers',
    Growth = 'growth',
    NameColor = 'nameColor',
    BackgroundColor = 'backgroundColor',
    Tradable = 'tradable',
    Withdrawable = 'withdrawable',
    Depositable = 'depositable',
    OfferId = 'offerId',
    OrderId = 'orderId',
    IsNew = 'isNew',
    GroupId = 'groupId',
    GameId = 'gameId',
    Name = 'name',
    CategoryPath = 'categoryPath',
    Class = 'class',
    Collection = 'collection',
    Grade = 'grade',
    Type = 'type'
}

enum Status {
    Default = 'default',
    Active = 'active',
    Inactive = 'inactive',
    InTransfer = 'in_transfer',
    Sold = 'sold',
    Recalled = 'recalled',
    Unavailable = 'unavailable',
    Locked = 'locked'
}

enum Type {
    Item = 'item',
    Offer = 'offer',
    Target = 'target',
    Class = 'class',
    Airdrop = 'airdrop',
    Sale = 'sale',
    Product = 'product'
}

interface Total {
    offers: number,
    targets: number
    items: number,
    completedOffers: number,
    closedTargets: number
}

interface ExtraBase {
    backgroundColor: string,
    category: string,
    categoryPath: string,
    collection: string[],
    exterior: Exterior,
    floatValue: number,
    gameId: string,
    groupId: string,
    inspectInGame: string,
    isNew: boolean,
    itemType: string,
    linkId: string,
    name: string,
    nameColor: string,
    offerId: string,
    quality: string
    stickers: Sticker[]
    tradable: boolean,
    tradeLock: number,
    tradeLockDuration: number,
    viewAtSteam: string,
    gems?: Gem[],
    sagaAddress: string
    floatPartValue: string,
    paintIndex: number,
    paintSeed: number,
    saleRestricted: boolean,
    inGameAssetID: string,
    emissionSerial: string,
    ability: string,
    class: string[],
    grade: string,
    growth: number,
    hero: string,
    rarity: string,
    serialNumber: number,
    subscribers: number,
    tagName: string,
    type: string,
    videos: number,
    withdrawable: boolean
}

interface ExtraUserItem extends ExtraBase{

}

interface ExtraMarketItem extends ExtraBase{

}

interface Gem {
    image: string,
    name: string,
    type: string
}

interface OwnerDetails {
    avatar: string,
    id: string,
    wallet: string
}

interface Sticker {
    image: string,
    name: string
}

interface Prices {
    DMC: string,
    USD: string
}

interface FeeDetails {
    percentage: string;
    minFee: CurrencyAmount;
}

interface CurrencyAmount {
    DMC: string;
    USD: string;
}

interface CustomFeeDetails extends FeeDetails {
    conditions: FeeConditions;
}

interface FeeConditions {
    minPrice: CurrencyAmount;
    maxPrice: CurrencyAmount;
    startsAt: number;
    expiresAt: number;
}

interface FeeType {
    default: FeeDetails;
    custom?: CustomFeeDetails;
}

interface MarketFees {
    sell: FeeType;
    instantSell: FeeType;
    exchange: FeeType;
}

interface Fees {
    f2f: MarketFees;
    dmarket: MarketFees;
}

interface RecommendedPrice {
    d3: Prices;
    d7: Prices;
    d7Plus: Prices;
}
// END GET /exchange/v1/user/items

export declare global {
    // GET /exchange/v1/user/items
    interface UserItemCustom extends UserItem {
        /* Preço que o item deve ser vendido para dar lucro definido,
        é calculado com base no preço que paguei pelo item mais a porcentagem de lucro
        e a porcentagem de taxa do dmarket */
        minimumProfitablePrice: number;
        /* Preço que paguei pelo item */
        purchasePrice: number,
        /* Preço líquido que irei receber do item (se baseando com o preço do item mais barato do dmarket)
        após a taxa do dmarket. Obs. Net = Liquído */
        netPriceAfterFee: number,
        /* Lucro */
        profit: number,
        /* Preço do item mais barato do dmarket menos 1 cents (para ficar a frente na lista) */
        dmarketLowestPrice: number;
    }

    // GET /exchange/v1/user/items
    interface UserItem {
        amount: number,
        classId: string,
        createdAt: number,
        description: string,
        discount: number,
        extra: ExtraUserItem,
        extraDoc: ExtraDocType,
        gameId: string,
        gameType: MarketplaceGameType,
        image: string,
        inMarket: boolean,
        instantPrice: Prices,
        instantTargetId: string,
        itemId: string,
        lockStatus: boolean,
        owner: string,
        fees: Fees,
        ownerDetails: OwnerDetails,
        ownersBlockchainId: string,
        price: Prices,
        recommendedPrice: RecommendedPrice,
        slug: string,
        status: Status
        suggestedPrice: Prices,
        title: string,
        type: Type
    }

    // GET /exchange/v1/user/items
    interface UserItemsResponse {
        objects: UserItem[],
        total: Total,
        cursor: string
    }

    // GET /exchange/v1/market/items
    interface MarketItem {
        itemId: string,
        type: string,
        amount: number,
        classId: string,
        gameId: string,
        gameType: string,
        inMarket: boolean,
        lockStatus: boolean,
        title: string,
        description: string,
        image: string,
        slug: string,
        owner: string,
        ownersBlockchainId: string,
        ownerDetails: OwnerDetails,
        status: string,
        discount: number,
        price: Prices,
        instantPrice: Prices,
        exchangePrice: Prices,
        instantTargetId: string,
        suggestedPrice: Prices,
        recommendedPrice: RecommendedPrice,
        extra: ExtraMarketItem,
        createdAt: number,
        deliveryStats: {
            rate: string,
            time: string,
        },
        fees: Fees,
        discountPrice: Prices,
        productId: string
    }

    // GET /exchange/v1/market/items
    interface MarketItemsResponse {
        objects: MarketItem[],
        total: Total,
        cursor: string
    }

    // GET /exchange/v1/market/items
    interface MarketItemsParams {
        gameId: GameID,
        currency: Currency,
        limit: 50 | number,
        title?: string,
        orderBy: 'title' | 'price',
        orderDir: 'asc' | 'desc',
        types?: 'dmarket',
        treeFilters?: TreeFilters[]
    }

    // GET /promo-items/v1/items
    interface PromoItem {
        gameId: string,
        gameTitle: string,
        title: string,
        image: string,
        price: string,
        defaultFee: string,
        customFee: string,
        sellerGetsDefault: string,
        sellerGets: string,
        extraProfit: string,
        userOwes: boolean,
        userItems: [],
        defaultFeePercent: string,
        customFeePercent: string
    }

    // GET /promo-items/v1/items
    interface PromoItemsParams {
        gameId: GameID,
        filter: string,
        offset: number,
        limit: number
    }

    // GET /promo-items/v1/items
    interface PromoItemsResponse {
        objects: PromoItem[],
        total: string
    }
}