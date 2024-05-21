export declare global {
    interface ItemInfo {
        id: number,
        gameId: string,
        title: string,
        unique_id: string,
        image: string,
        exterior: string,
        categoryPath: string,
        itemType: string,
        category: string,
        trade_eligible: boolean,
        average_daily_sales: number
    }

    interface ItemInfoExternal extends ItemInfo {
        item_id: number,
        purchase_price: number,
        purchase_date: string,
        seller: string,
        item_inventory_id: string
    }
}