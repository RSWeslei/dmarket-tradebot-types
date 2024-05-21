import {Currency, GameID} from '../enums.js'

export declare global {
    // GET /account/v1/user
    interface UserAccountResponse {
        id: string
        publicKey: string
        sagaPublicKey: string
        username: string
        email: string
        isEmailVerified: boolean
        isPasswordSet: boolean
        imageUrl: string
        level: number
        countryCodeFromIP: string
        countryCode: string
        settings: {
            enabledDeviceConfirmation: boolean
            tradingApiToken: string
            isSubscribedToNewsletters: boolean
            targetsLimit: number
        }
        steamAccount: {
            steamId: string
            icon: string
            tradeUrl: string
            isValidTradeURL: boolean
            username: string
            isProfilePrivate: boolean
            tradingStatus: string
            level: number
            apiKey: string
            apiKeyStatus: string
        }
        agreementsInfo: {
            isConfirmed: boolean
            updated: number
        }
        regType: string
        hasHistoryEvents: boolean
        ga_client_id: string
        migrated: boolean
        hasActiveSubscriptions: boolean
        linkedGames: Array<{
            gameId: string
            gameUserId: string
            username: string
        }>
        features: Array<{
            name: string
            enabled: boolean
        }>
        restrictions: []
        twitchAccount: {
            userId: string
            icon: string
            username: string
        }
        instagramAccount: {
            userId: string
            username: string
        }
        twitterAccount: {
            userId: string
            username: string
        }
        ethereumAccount: {
            address: string
        }
        storefront: {
            disabled: boolean
            alias: string
        }
        tinNotRequired: boolean
        promoToken: string
    }

    // GET /account/v1/balance
    interface UserBalanceResponse {
        dmc: string,
        usd: string,
        dmcAvailableToWithdraw: string,
        usdAvailableToWithdraw: string
    }

    interface UserItemsParams {
        gameId: GameID,
        currency: Currency,
        title?: string,
        limit: 50 | number,
        offset?: number,
        orderBy?: 'title',
        orderDir?: 'asc' | 'desc',
        treeFilters?: Array<'itemLocation=true' | 'tradable=true'>,
        priceFrom?: number,
        priceTo?: number,
        classIds?: string,
        cursor?: string
    }

    // User database
    interface UserBody {
        password: string,
        username: string
    }

    // User database
    interface UserResponse {
        id: number,
        passwordHash: string,
        username: string,
        token: string
    }
}