import { OpenSeaAPI } from "../api";
import { Network } from "../types";

export const MAINNET_API_KEY = process.env.API_KEY;

export const mainApi = new OpenSeaAPI(
  {
    apiKey: MAINNET_API_KEY,
    networkName: Network.Main,
  },
  console.info
);

export const testnetApi = new OpenSeaAPI(
  {
    networkName: Network.Goerli,
  },
  console.info
);

export const DAPPER_ADDRESS = "0x4819352bd7fadcCFAA8A2cDA4b2825a9ec51417c";

export const BAYC_CONTRACT_ADDRESS =
  "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";
export const BAYC_TOKEN_ID = "1";
export const BAYC_TOKEN_IDS = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
