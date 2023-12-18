import { Company } from "./company";
import { StockValue } from "./values";

export interface ValuesByCompany {
    company: Company;
    values: StockValue[];
}