import {Currency} from '../enums.js'

export declare global {
    enum Exterior {
        FieldTested = 'field-tested',
        MinimalWear = 'minimal-wear',
        BattleScarred = 'battle-scarred',
        WellWorn = 'well-worn',
        FactoryNew = 'factory-new',
        NotPainted = 'not-painted'
    }

    enum MarketplaceGameType {
        Blockchain = 'blockchain',
        Steam = 'steam'
    }

    enum MarketplaceAssetLocation {
        // Asset in user inventory in game.
        AssetLocationInGame = 'AssetLocationInGame',
        // Asset in user inventory in marketplace.
        AssetLocationInMarketplace= 'AssetLocationInMarketplace',
        // Asset currently moving from one state to another.
        AssetLocationInTransfer = 'AssetLocationInTransfer'
    }

    interface Price {
        Currency: Currency,
        Amount: number
    }

    interface AssetAttribute {
        Name: string,
        Value: string
    }

    interface TradeFeeData {
        Amount: Price,
        Percent: string,
        IsPersonal: boolean
    }

    interface ErrorMessage {
        Code: string,
        Message: string
    }

    interface ItemData {
        title: string;
        image: string;
        exterior?: string;
    }

    interface ExtendedUserOffer extends UserOfferClosed {
        discountedPrice: number;
        profit: number;
        calendar: {
            date: string;
            time: string;
            year: number;
            monthName: string;
            month: number;
            day: number;
            hour: number;
            weekOfMonth: string;
        };
    }

    interface Sales {
        items: ExtendedUserOffer[];
        totalProfit: number;
        dailyProfit: number;
        yesterdayProfit: number;
    }
}