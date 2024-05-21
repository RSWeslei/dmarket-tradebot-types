"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = exports.TreeFilters = exports.GameID = exports.FloatPartValue = exports.Phase = exports.OfferSortType = exports.OfferStatus = exports.TargetSortType = exports.TargetStatus = void 0;
// GET /marketplace-api/v1/user-targets
var TargetStatus;
(function (TargetStatus) {
    TargetStatus["Active"] = "TargetStatusActive";
    TargetStatus["Inactive"] = "TargetStatusInactive";
})(TargetStatus || (exports.TargetStatus = TargetStatus = {}));
// GET /marketplace-api/v1/user-targets
var TargetSortType;
(function (TargetSortType) {
    TargetSortType["Default"] = "UserTargetsSortTypeDefault";
})(TargetSortType || (exports.TargetSortType = TargetSortType = {}));
// GET /marketplace-api/v1/user-offers
var OfferStatus;
(function (OfferStatus) {
    OfferStatus["Default"] = "OfferStatusDefault";
    OfferStatus["Active"] = "OfferStatusActive";
    OfferStatus["Sold"] = "OfferStatusSold";
    OfferStatus["Inactive"] = "OfferStatusInactive";
    OfferStatus["Transfer"] = "OfferStatusIn_transfer";
})(OfferStatus || (exports.OfferStatus = OfferStatus = {}));
// GET /marketplace-api/v1/user-offers
var OfferSortType;
(function (OfferSortType) {
    OfferSortType["Default"] = "UserOffersSortTypeDefault";
    OfferSortType["DateNewestFirst"] = "UserOffersSortTypeDateNewestFirst";
})(OfferSortType || (exports.OfferSortType = OfferSortType = {}));
var Phase;
(function (Phase) {
    Phase["Phase1"] = "phase-1";
    Phase["Phase2"] = "phase-2";
    Phase["Phase3"] = "phase-3";
    Phase["Phase4"] = "phase-4";
    Phase["Ruby"] = "ruby";
    Phase["Emerald"] = "emerald";
    Phase["Sapphire"] = "sapphire";
    Phase["BlackPearl"] = "black-pearl";
    Phase["Any"] = "any";
})(Phase || (exports.Phase = Phase = {}));
var FloatPartValue;
(function (FloatPartValue) {
    FloatPartValue["FN0"] = "FN-0";
    FloatPartValue["FN1"] = "FN-1";
    FloatPartValue["FN2"] = "FN-2";
    FloatPartValue["FN3"] = "FN-3";
    FloatPartValue["FN4"] = "FN-4";
    FloatPartValue["FN5"] = "FN-5";
    FloatPartValue["FN6"] = "FN-6";
    FloatPartValue["MW0"] = "MW-0";
    FloatPartValue["MW1"] = "MW-1";
    FloatPartValue["MW2"] = "MW-2";
    FloatPartValue["MW3"] = "MW-3";
    FloatPartValue["MW4"] = "MW-4";
    FloatPartValue["FT0"] = "FT-0";
    FloatPartValue["FT1"] = "FT-1";
    FloatPartValue["FT2"] = "FT-2";
    FloatPartValue["FT3"] = "FT-3";
    FloatPartValue["FT4"] = "FT-4";
    FloatPartValue["WW0"] = "WW-0";
    FloatPartValue["WW1"] = "WW-1";
    FloatPartValue["WW2"] = "WW-2";
    FloatPartValue["WW3"] = "WW-3";
    FloatPartValue["WW4"] = "WW-4";
    FloatPartValue["BS0"] = "BS-0";
    FloatPartValue["BS1"] = "BS-1";
    FloatPartValue["BS2"] = "BS-2";
    FloatPartValue["BS3"] = "BS-3";
    FloatPartValue["BS4"] = "BS-4";
    FloatPartValue["Any"] = "any";
})(FloatPartValue || (exports.FloatPartValue = FloatPartValue = {}));
var GameID;
(function (GameID) {
    GameID["Cs2"] = "a8db";
    GameID["TeamFortress2"] = "tf2";
    GameID["Dota2"] = "9a92";
    GameID["Rust"] = "rust";
})(GameID || (exports.GameID = GameID = {}));
var TreeFilters;
(function (TreeFilters) {
    TreeFilters["Tradable"] = "tradable=true";
})(TreeFilters || (exports.TreeFilters = TreeFilters = {}));
var Currency;
(function (Currency) {
    Currency["Dollar"] = "USD";
})(Currency || (exports.Currency = Currency = {}));
