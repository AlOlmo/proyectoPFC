import {Injectable} from "@angular/core";
import {UserList} from "../entities/userlist";

@Injectable()
export class ListService {

  getUserLists(userToken: string): UserList[] {
    return [
      {
        name: "Lista personalizada 1",
        symbols: ["CABK", "IBE", "IAG", "MRL", "GRF"]
      },
      {
        name: "Lista personalizada 2",
        symbols: ["ROVI", "BBVA", "ITX", "ELE", "FER"]
      }
    ]
  }

}
