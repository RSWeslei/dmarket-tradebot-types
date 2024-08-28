// GET /marketplace-api/v1/user-targets
export enum TargetStatus {
    Active = 'TargetStatusActive',
    Inactive = 'TargetStatusInactive'
}

// GET /marketplace-api/v1/user-targets
export enum TargetSortType {
    Default = 'UserTargetsSortTypeDefault'
}

// GET /marketplace-api/v1/user-offers
export enum OfferStatus {
    Default = 'OfferStatusDefault',
    Active = 'OfferStatusActive',
    Sold = 'OfferStatusSold',
    Inactive = 'OfferStatusInactive',
    Transfer = 'OfferStatusIn_transfer'
}

// GET /marketplace-api/v1/user-offers
export enum OfferSortType {
    Default = 'UserOffersSortTypeDefault',
    DateNewestFirst = 'UserOffersSortTypeDateNewestFirst'
}

export enum Phase {
    Phase1 = 'phase-1',
    Phase2 = 'phase-2',
    Phase3 = 'phase-3',
    Phase4 = 'phase-4',
    Ruby = 'ruby',
    Emerald = 'emerald',
    Sapphire = 'sapphire',
    BlackPearl = 'black-pearl',
    Any = '',
    AnyString = 'any'
}

export enum FloatPartValue {
    FN0 = 'FN-0', FN1 = 'FN-1', FN2 = 'FN-2',
    FN3 = 'FN-3', FN4 = 'FN-4', FN5 = 'FN-5',
    FN6 = 'FN-6', MW0 = 'MW-0', MW1 = 'MW-1',
    MW2 = 'MW-2', MW3 = 'MW-3', MW4 = 'MW-4',
    FT0 = 'FT-0', FT1 = 'FT-1', FT2 = 'FT-2',
    FT3 = 'FT-3', FT4 = 'FT-4', WW0 = 'WW-0',
    WW1 = 'WW-1', WW2 = 'WW-2', WW3 = 'WW-3',
    WW4 = 'WW-4', BS0 = 'BS-0', BS1 = 'BS-1',
    BS2 = 'BS-2', BS3 = 'BS-3', BS4 = 'BS-4',
    Any = '', AnyString = 'any'
}

export enum GameID {
    Cs2 = 'a8db',
    TeamFortress2 = 'tf2',
    Dota2 = '9a92',
    Rust = 'rust'
}

export enum TreeFilters {
    Tradable = 'tradable=true'
}

export enum Currency {
    Dollar = 'USD'
}

export enum OperationType {
    Offer = 'Offer',
    Order = 'Order',
    Target = 'Target',
}