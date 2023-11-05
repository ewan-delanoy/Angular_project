export enum ProductType {
    Burger = "burger",
    Side = "side",
    Beverage = "beverage",
    Dessert = "dessert"
}

/*

There should be a one-liner for the function below,like
ProductType[name as keyof typeof ProductType]
But for some reasons it doesn't work with my version of TS.

*/

export function stringAsProductType(name: string): ProductType {
    switch (name) {
        case "burger": return ProductType.Burger;
        case "side": return ProductType.Side;
        case "beverage": return ProductType.Beverage;
        case "dessert": return ProductType.Dessert;
        default: throw new Error("Unknown ProductType : " + name);
    }
}
